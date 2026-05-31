'use client'

import { useAuth, useSignIn } from '@clerk/nextjs'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  getSafeAuthRedirect,
  getSafeSatelliteRedirect,
  paramsFromLocationHash,
} from '@/lib/auth/redirect-target'
import { AuthSplitLayout, ContinueWithXButton } from '@/components/auth/brand'

export function SignInForm() {
  const { signIn, fetchStatus } = useSignIn()
  const { isSignedIn, signOut } = useAuth()
  const searchParams = useSearchParams()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const disabled = busy || fetchStatus === 'fetching'
  const redirectUrl = getSafeAuthRedirect(searchParams, {
    currentOrigin: typeof window === 'undefined' ? undefined : window.location.origin,
  })
  const signUpHref = redirectUrl === '/'
    ? '/sign-up'
    : `/sign-up?redirect_url=${encodeURIComponent(redirectUrl)}`

  // When a satellite (foundr.host etc.) sent the user here for sync but they
  // are already authenticated, skip the chooser entirely and forward them
  // straight back — that satellite handshake is the only thing they came
  // here to do.
  //
  // Clerk's hosted sign-in flow puts the `sign_in_force_redirect_url` in
  // the location HASH (`#/?…`), not the query string, so we read the hash
  // first and fall back to the regular search params for non-hash callers.
  useEffect(() => {
    if (!isSignedIn) return
    if (typeof window === 'undefined') return
    const hashParams = paramsFromLocationHash(window.location.hash)
    const target =
      getSafeSatelliteRedirect(hashParams) ??
      getSafeSatelliteRedirect(searchParams)
    if (!target) return
    window.location.href = target
  }, [isSignedIn, searchParams])

  async function continueWithX() {
    setBusy(true)
    setError(null)
    try {
      // Forward the post-login destination on the callback URL too. The
      // future-API `redirectUrl` lives on the SignIn resource, which the classic
      // AuthenticateWithRedirectCallback can't always recover after the X
      // round-trip — so it falls back to /game. Carrying redirect_url on the
      // callback URL lets /sso-callback force the real destination (the
      // /oauth/grant consent page) instead of the fallback.
      //
      // If a foundr.* satellite sent the user here for a fresh sign-in, its
      // return URL arrives as `sign_in_force_redirect_url` (in the Clerk hash,
      // or the query for non-hash callers). We make it the `sso()` redirectUrl
      // — the future-API's authoritative post-SSO destination — so the user is
      // returned to the satellite instead of /game. (Also carried on the
      // callback URL as a belt-and-suspenders fallback.) Cross-origin targets
      // are permitted by <ClerkProvider allowedRedirectOrigins>.
      const hashParams =
        typeof window === 'undefined'
          ? new URLSearchParams()
          : paramsFromLocationHash(window.location.hash)
      const satelliteTarget =
        getSafeSatelliteRedirect(hashParams) ??
        getSafeSatelliteRedirect(searchParams)
      const callbackUrl = satelliteTarget
        ? `/sso-callback?sign_in_force_redirect_url=${encodeURIComponent(satelliteTarget)}`
        : redirectUrl === '/'
          ? '/sso-callback'
          : `/sso-callback?redirect_url=${encodeURIComponent(redirectUrl)}`
      const { error: ssoError } = await signIn.sso({
        strategy: 'oauth_x',
        redirectUrl: satelliteTarget ?? redirectUrl,
        redirectCallbackUrl: callbackUrl,
      })
      if (ssoError) {
        setBusy(false)
        setError(ssoError.message ?? 'Could not start X sign-in')
      }
    } catch (e) {
      setBusy(false)
      setError(e instanceof Error ? e.message : 'Could not start X sign-in')
    }
  }

  return (
    <AuthSplitLayout formHeading="Sign in" formSub="Welcome back.">
      {isSignedIn && (
        <button
          type="button"
          onClick={() => void signOut({ redirectUrl: '/sign-in' })}
          className="mb-3 flex w-full items-center justify-center rounded-lg border border-[#cbd5e1] px-4 py-3 text-[15px] font-medium text-[#111827] transition hover:bg-[#f8fafc]"
        >
          Already signed in? Log out
        </button>
      )}

      <ContinueWithXButton busy={busy} disabled={disabled} onClick={continueWithX} />

      {error && <p className="mt-4 text-[13px] text-[#dc2626]">{error}</p>}

      <p className="mt-5 text-[13px] text-[#475569]">
        New here?{' '}
        <Link href={signUpHref} className="font-medium text-[#3b82f6] hover:text-[#2563eb]">
          Create an account
        </Link>
      </p>
    </AuthSplitLayout>
  )
}
