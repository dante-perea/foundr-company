import { Suspense } from 'react'
import { connection } from 'next/server'
import Link from 'next/link'
import { HeaderAuth } from '@/components/auth/header-auth'

// Mirror the root layout's gate: the Clerk header control (HeaderAuth island)
// may only render when a publishable key is present, since it relies on the
// PrimaryClerkProvider that the root layout mounts under the same condition.
// Without this the keyless build would mount the Clerk control components with
// no provider and crash.
const CLERK_ENABLED = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-base font-semibold text-ink"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          foundr<span className="text-subtle">.company</span>
        </Link>
        <div className="flex items-center gap-5">
          <a
            href="https://www.perea.ai"
            className="text-sm text-muted transition hover:text-ink"
          >
            by Perea
          </a>
          {CLERK_ENABLED && (
            // The Clerk control components (<Show>, <UserButton>) read
            // request-time auth state and assert a live ClerkProvider context,
            // which under cacheComponents/PPR isn't established during the
            // static prerender (the root-layout ClerkProvider renders behind a
            // Suspense fallback at prerender time). Mirror the sign-in page:
            // push the island behind its own <Suspense> with connection() so it
            // is excluded from the prerender and only mounts at request time.
            // The fixed-width fallback reserves space so the header doesn't
            // shift when the auth control streams in.
            <Suspense fallback={<span className="h-7 w-12" aria-hidden />}>
              <HeaderAuthGate />
            </Suspense>
          )}
        </div>
      </div>
    </header>
  )
}

async function HeaderAuthGate() {
  await connection()
  return <HeaderAuth />
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-subtle sm:flex-row sm:items-center">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Foundr — tools for the AI-native solo founder
        </span>
        <span>© 2026 Perea</span>
      </div>
    </footer>
  )
}
