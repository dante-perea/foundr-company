// Clerk redirect-safety helpers for the foundr.company PRIMARY Clerk app.
//
// Mirrors the satellite (foundr.world) helper of the same name, but this app
// is the PRIMARY: local auth routes are /sign-in and /sign-up (not absolute
// account-portal URLs). The satellite host allowlist is what makes the
// cross-origin post-sign-in bounce back to foundr.world (and the other
// foundr.* satellites) safe — Clerk validates `*_force_redirect_url` against
// `<ClerkProvider allowedRedirectOrigins>`, and the manual `window.location`
// forward in the auth forms re-checks against SATELLITE_HOST_ALLOWLIST.

type SearchParamReader = {
  get(name: string): string | null
}

type AuthRedirectOptions = {
  fallback?: string
  currentOrigin?: string
}

const DEFAULT_ORIGIN = 'https://foundr.company'
// foundr.company is primarily a landing site — there is no app to land in
// after sign-in, so same-origin auth defaults home. Real destinations are the
// cross-origin satellite force-redirects (handled below).
const DEFAULT_FALLBACK = '/'

export function getSafeAuthRedirect(
  searchParams: SearchParamReader,
  options: AuthRedirectOptions = {},
): string {
  const origin = getOrigin(options.currentOrigin)
  const fallback = normalizeInternalRedirect(options.fallback ?? DEFAULT_FALLBACK, origin) ?? DEFAULT_FALLBACK
  const requested = searchParams.get('redirect_url')

  return normalizeInternalRedirect(requested, origin) ?? fallback
}

function normalizeInternalRedirect(value: string | null | undefined, origin: string): string | null {
  const target = value?.trim()
  if (!target || target.startsWith('//')) return null

  let url: URL
  try {
    url = new URL(target, origin)
  } catch {
    return null
  }

  if (url.origin !== origin) return null
  if (isAuthRoute(url.pathname)) return null

  return `${url.pathname}${url.search}${url.hash}`
}

function getOrigin(value: string | undefined): string {
  if (!value) return DEFAULT_ORIGIN
  try {
    return new URL(value).origin
  } catch {
    return DEFAULT_ORIGIN
  }
}

function isAuthRoute(pathname: string): boolean {
  return pathname === '/sign-in'
    || pathname.startsWith('/sign-in/')
    || pathname === '/sign-up'
    || pathname.startsWith('/sign-up/')
    || pathname === '/sso-callback'
}

// foundr.* satellite domains permitted as cross-origin Clerk
// `*_force_redirect_url` targets. Anything else falls through to the
// same-origin `getSafeAuthRedirect` path. Add new foundr.* products
// here when they ship a Clerk satellite of this primary.
const SATELLITE_HOST_ALLOWLIST: readonly RegExp[] = [
  /^foundr\.host$/,
  /^www\.foundr\.host$/,
  /^[a-z0-9-]+\.lab\.foundr\.host$/,
  /^foundr\.mobile$/,
  /^www\.foundr\.mobile$/,
  /^[a-z0-9-]+\.lab\.foundr\.mobile$/,
  /^foundr\.money$/,
  /^www\.foundr\.money$/,
  /^[a-z0-9-]+\.lab\.foundr\.money$/,
  /^foundr\.work$/,
  /^www\.foundr\.work$/,
  /^[a-z0-9-]+\.lab\.foundr\.work$/,
  /^foundr\.world$/,
  /^www\.foundr\.world$/,
  /^[a-z0-9-]+\.lab\.foundr\.world$/,
]

function isAllowedSatelliteHost(host: string): boolean {
  return SATELLITE_HOST_ALLOWLIST.some((re) => re.test(host))
}

// Origins Clerk is allowed to redirect to after auth — the foundr.* satellites.
// Passed to `<ClerkProvider allowedRedirectOrigins>` so a cross-origin
// `signInForceRedirectUrl` back to a satellite (e.g. foundr.world's
// /oauth/grant) passes Clerk's own safe-redirect check; without it, Clerk
// drops the cross-origin target as unsafe and falls back to '/'.
//
// These are plain strings (NOT RegExp): `<ClerkProvider>` is rendered from a
// Server Component, and a RegExp can't be serialized across the server→client
// boundary (build error: "Classes ... are not supported"). Clerk runs each
// string entry through glob-to-regexp, so `*` wildcards work for lab subdomains.
// Mirrors SATELLITE_HOST_ALLOWLIST (the host allowlist used by the manual,
// already-signed-in `window.location` forward).
export const clerkAllowedRedirectOrigins: string[] = [
  'https://foundr.host',
  'https://www.foundr.host',
  'https://*.lab.foundr.host',
  'https://foundr.mobile',
  'https://www.foundr.mobile',
  'https://*.lab.foundr.mobile',
  'https://foundr.money',
  'https://www.foundr.money',
  'https://*.lab.foundr.money',
  'https://foundr.work',
  'https://www.foundr.work',
  'https://*.lab.foundr.work',
  'https://foundr.world',
  'https://www.foundr.world',
  'https://*.lab.foundr.world',
]

/**
 * Build a query-param reader from a location hash. Clerk's hosted
 * sign-in / sign-up flow uses hash-based routing — the URL lands as
 * `https://foundr.company/sign-in#/?sign_in_force_redirect_url=…`
 * which means Next's `useSearchParams()` returns nothing because the
 * params live AFTER `#`, not in the query string. We pull them out by
 * slicing on the first `?` inside the hash.
 */
export function paramsFromLocationHash(hash: string): URLSearchParams {
  if (!hash) return new URLSearchParams()
  const idx = hash.indexOf('?')
  if (idx === -1) return new URLSearchParams()
  return new URLSearchParams(hash.slice(idx + 1))
}

/**
 * Read a Clerk-issued `sign_{in,up}_force_redirect_url` from the URL
 * and return it if it points at a known foundr.* satellite over HTTPS.
 * Returns null for anything else — including same-origin paths that
 * the regular `getSafeAuthRedirect` already handles.
 *
 * Used by the sign-in / sign-up pages so a satellite (e.g. foundr.world)
 * that bounced an unauthenticated visitor here for sign-in is returned to
 * once Clerk establishes the primary session.
 */
export function getSafeSatelliteForceRedirect(
  searchParams: SearchParamReader,
  paramName: 'sign_in_force_redirect_url' | 'sign_up_force_redirect_url',
): string | null {
  return readSafeSatelliteParam(searchParams, paramName)
}

// Shared host/protocol safety gate for a single named param. Returns the
// param's value as an absolute URL string IFF it is HTTPS and its host is on
// the SATELLITE_HOST_ALLOWLIST; otherwise null. Same-origin foundr.company
// targets (host not on the allowlist) and non-allowlisted hosts (evil.com)
// both return null — they are handled by the same-origin getSafeAuthRedirect.
function readSafeSatelliteParam(
  searchParams: SearchParamReader,
  paramName: string,
): string | null {
  const raw = searchParams.get(paramName)?.trim()
  if (!raw) return null

  let url: URL
  try {
    url = new URL(raw)
  } catch {
    return null
  }
  if (url.protocol !== 'https:') return null
  if (!isAllowedSatelliteHost(url.host)) return null
  return url.toString()
}

// Param names a satellite may use to carry the cross-origin return URL,
// checked in priority order. The first two are Clerk's own
// `*_force_redirect_url` props; `redirect_url` is how the foundr.world
// satellite middleware (oauthGrantSignInRedirect -> primarySignInRedirectUrl)
// hands the /oauth/grant return URL to the primary sign-in.
const SATELLITE_REDIRECT_PARAMS = [
  'sign_in_force_redirect_url',
  'sign_up_force_redirect_url',
  'redirect_url',
] as const

/**
 * General satellite-return resolver. Checks, in priority order,
 * `sign_in_force_redirect_url`, `sign_up_force_redirect_url`, then
 * `redirect_url`, and returns the first value that is an HTTPS URL pointing at
 * a known foundr.* satellite host (SATELLITE_HOST_ALLOWLIST). Returns null
 * otherwise.
 *
 * Same safety contract as getSafeSatelliteForceRedirect, extended to also
 * cover the `redirect_url` param (how the foundr.world satellite middleware
 * passes the cross-origin /oauth/grant return URL). A same-origin
 * foundr.company `redirect_url` (its host is NOT a satellite) returns null
 * here — that case is owned by the same-origin getSafeAuthRedirect. A
 * non-allowlisted cross-origin host (evil.com) also returns null. This is the
 * sole open-redirect guard: every non-null result is an HTTPS URL whose host
 * matches SATELLITE_HOST_ALLOWLIST.
 */
export function getSafeSatelliteRedirect(
  searchParams: SearchParamReader,
): string | null {
  for (const paramName of SATELLITE_REDIRECT_PARAMS) {
    const match = readSafeSatelliteParam(searchParams, paramName)
    if (match) return match
  }
  return null
}

/**
 * Resolve the post-OAuth-callback destination. Prefers a cross-origin
 * satellite return URL (a foundr.* satellite that initiated a fresh
 * sign-in / sign-up and needs the user returned to it) over the same-origin
 * `getSafeAuthRedirect` value. Used by /sso-callback so a satellite-initiated
 * sign-in returns to the satellite instead of falling through to the home
 * fallback.
 *
 * Reads via `getSafeSatelliteRedirect`, so it covers all three carrier params
 * (`sign_in_force_redirect_url`, `sign_up_force_redirect_url`, `redirect_url`).
 * Both safety checks still apply: the satellite path must pass the
 * `SATELLITE_HOST_ALLOWLIST` (HTTPS, known foundr.* host); anything else
 * degrades to the same-origin-only `getSafeAuthRedirect`.
 */
export function getSafeCallbackRedirect(
  searchParams: SearchParamReader,
  options: AuthRedirectOptions = {},
): string {
  const satellite = getSafeSatelliteRedirect(searchParams)
  return satellite ?? getSafeAuthRedirect(searchParams, options)
}
