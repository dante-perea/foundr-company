import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse, type NextRequest } from 'next/server'
import { buildAuthorizedParties } from '@/lib/clerk-authorized-parties'

// Clerk middleware throws at runtime when no publishable key is configured.
// Without env vars (the keyless CI build, or any deploy before the keys are
// set on Vercel) we skip the auth gate entirely and pass every request
// through — the site is a public landing app and must render with no keys.
const CLERK_ENABLED = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

// This is the PRIMARY Clerk instance. Its only auth job is to HOST sign-in /
// sign-up for itself and its satellites (foundr.world etc.). The marketing
// surface — home, the per-product pages, and the auth pages themselves — is
// public. Clerk's <SignIn />/<SignUp /> still establish the session and run
// the satellite handshake on those public routes; "public" here only means
// the proxy does not force a redirect to sign-in.
const isPublicRoute = createRouteMatcher([
  '/',                 // marketing home
  '/sign-in(.*)',      // primary sign-in (hosts the satellite handshake)
  '/sign-up(.*)',
  '/sso-callback(.*)',
  '/((?!admin|dashboard|account|api/private).*)', // every product/marketing page
])

const clerkProxy = clerkMiddleware(
  async (auth, req) => {
    // Primary landing app: nothing here is gated by default. If a private
    // surface is ever added (e.g. /account), guard it explicitly:
    //   if (!isPublicRoute(req)) await auth.protect()
    // Until then, leave every route reachable so the site stays a public
    // marketing app whose sole auth responsibility is hosting sign-in.
    if (!isPublicRoute(req)) {
      await auth.protect()
    }
    return NextResponse.next()
  },
  // Dynamic options factory: Clerk runs this per request. We derive the
  // authorizedParties allowlist from req.nextUrl.host so new
  // <slug>.lab.foundr.company experiment branches are allowlisted
  // automatically (see src/lib/clerk-authorized-parties.ts).
  //
  // PRIMARY config: no isSatellite, no domain — those put Clerk in satellite
  // mode and break the handshake. signInUrl/signUpUrl are this app's own local
  // auth pages, where the satellite handshake terminates.
  (req) => ({
    authorizedParties: buildAuthorizedParties(req.nextUrl.host),
    signInUrl: '/sign-in',
    signUpUrl: '/sign-up',
  }),
)

// Plain pass-through when Clerk isn't configured. Same signature Clerk's
// middleware returns, so Next.js wires it the same way.
function passthrough(_req: NextRequest) {
  return NextResponse.next()
}

export default CLERK_ENABLED ? clerkProxy : passthrough

export const config = {
  matcher: [
    // Skip Next internals and static files unless found in search params.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run on API/trpc routes.
    '/(api|trpc)(.*)',
    // Clerk handshake route.
    '/__clerk/(.*)',
  ],
}
