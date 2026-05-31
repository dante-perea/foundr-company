'use client'

import { ClerkProvider } from '@clerk/nextjs'
import type { ReactNode } from 'react'
import { clerkAllowedRedirectOrigins } from '@/lib/auth/redirect-target'

/**
 * Client-side ClerkProvider for the foundr.company PRIMARY Clerk instance.
 *
 * foundr.company hosts the PRIMARY Clerk application (frontend API
 * clerk.foundr.company). Its satellites — foundr.world (and the other
 * foundr.* products) — redirect their unauthenticated users to
 * https://foundr.company/sign-in. Clerk establishes the session HERE, then
 * bounces the user back to the satellite via the cross-origin
 * `*_force_redirect_url`.
 *
 * As the PRIMARY we deliberately do NOT set `isSatellite` or `domain` — those
 * put Clerk into satellite mode and break the handshake on the primary.
 *
 * `signInUrl` / `signUpUrl` are LOCAL paths (/sign-in, /sign-up) — the
 * primary's own first-party auth pages, where redirectToSignIn and the
 * satellite handshake terminate.
 *
 * `allowedRedirectOrigins` whitelists the foundr.* satellites so a
 * cross-origin `signInForceRedirectUrl` back to e.g.
 * https://www.foundr.world/oauth/grant passes Clerk's safe-redirect check.
 * Without it Clerk drops the cross-origin target as unsafe.
 *
 * This is a Client Component so the (env-keyed) provider only mounts in the
 * tree when Clerk is enabled — the layout gates on the publishable key before
 * rendering it at all.
 */
export function PrimaryClerkProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      allowedRedirectOrigins={clerkAllowedRedirectOrigins}
    >
      {children}
    </ClerkProvider>
  )
}
