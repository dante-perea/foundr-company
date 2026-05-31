'use client'

import { Show, UserButton } from '@clerk/nextjs'

/**
 * Logged-in state for the site header.
 *
 * A `'use client'` island so the Clerk control (UserButton + sign-in/sign-out
 * gates) mounts only on the client, where the PrimaryClerkProvider lives. The
 * server `Header` renders this ONLY when Clerk is enabled (publishable key
 * present), mirroring the root-layout gate — otherwise these components would
 * mount without a ClerkProvider and crash the keyless build.
 *
 * `<Show when="signed-in" / "signed-out">` is the control-component primitive in
 * @clerk/nextjs 7.4 (it replaced the older `<SignedIn>` / `<SignedOut>` wrappers,
 * which this version no longer re-exports from the package root).
 *
 * Signed in  → avatar menu (UserButton). The post-sign-out redirect ("/") is set
 *   provider-wide via `afterSignOutUrl` on PrimaryClerkProvider's <ClerkProvider>,
 *   because UserButton no longer accepts an `afterSignOutUrl` prop in v7.4.
 * Signed out → a plain "Sign in" link to the primary's first-party auth page.
 */
export function HeaderAuth() {
  return (
    <>
      <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <a
          href="/sign-in"
          className="text-sm text-muted transition hover:text-ink"
        >
          Sign in
        </a>
      </Show>
    </>
  )
}
