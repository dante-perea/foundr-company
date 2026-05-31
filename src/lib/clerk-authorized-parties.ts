/**
 * Build the `authorizedParties` allowlist passed to Clerk's
 * clerkMiddleware() options factory. Clerk's type for this option is
 * `string[]` — regex is NOT accepted at runtime or type-check. The canonical
 * way to allowlist a wildcard pattern like `*.lab.foundr.company` is to use
 * the dynamic options factory form of clerkMiddleware (which runs per request)
 * and derive `authorizedParties` from `req.nextUrl.host`.
 *
 * The host regex restricts matches to a SINGLE LEVEL under
 * `.lab.foundr.company` (i.e. `slug.lab.foundr.company` matches but
 * `a.b.lab.foundr.company` does not) — defense in depth against an accidental
 * Vercel alias on a doubly-nested host.
 *
 * The fixed origins cover: prod (`foundr.company` and `www.foundr.company`),
 * the lab root itself (`lab.foundr.company`), and local dev (`localhost:3000`).
 * This is the PRIMARY Clerk instance — the satellites (foundr.world etc.)
 * carry their own authorizedParties; only this app's own origins live here.
 */

const FIXED_ORIGINS = [
  'https://foundr.company',
  'https://www.foundr.company',
  'https://lab.foundr.company',
  'http://localhost:3000',
] as const

// Slug must START with an alphanumeric (RFC 1123 forbids leading hyphens).
// Subsequent chars allow hyphens. The full slug is captured by [a-z0-9][a-z0-9-]*.
export const LAB_HOST_RE = /^[a-z0-9][a-z0-9-]*\.lab\.foundr\.company$/

export function buildAuthorizedParties(host: string): string[] {
  const labOrigin = LAB_HOST_RE.test(host) ? [`https://${host}`] : []
  return [...labOrigin, ...FIXED_ORIGINS]
}
