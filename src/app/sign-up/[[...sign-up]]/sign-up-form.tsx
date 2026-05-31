'use client'

import { useAuth, useSignUp } from '@clerk/nextjs'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  getSafeAuthRedirect,
  getSafeSatelliteForceRedirect,
  paramsFromLocationHash,
} from '@/lib/auth/redirect-target'
import { AuthSplitLayout, ContinueWithXButton } from '@/components/auth/brand'

export function SignUpForm() {
  const { signUp, fetchStatus } = useSignUp()
  const { isSignedIn } = useAuth()
  const searchParams = useSearchParams()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const disabled = busy || fetchStatus === 'fetching'
  const redirectUrl = getSafeAuthRedirect(searchParams, {
    currentOrigin: typeof window === 'undefined' ? undefined : window.location.origin,
  })
  const signInHref = redirectUrl === '/'
    ? '/sign-in'
    : `/sign-in?redirect_url=${encodeURIComponent(redirectUrl)}`

  // Same satellite-sync shortcut as the sign-in form, including the
  // hash-routing fallback for Clerk's hosted sign-up flow.
  useEffect(() => {
    if (!isSignedIn) return
    if (typeof window === 'undefined') return
    const hashParams = paramsFromLocationHash(window.location.hash)
    const target =
      getSafeSatelliteForceRedirect(hashParams, 'sign_up_force_redirect_url') ??
      getSafeSatelliteForceRedirect(searchParams, 'sign_up_force_redirect_url')
    if (!target) return
    window.location.href = target
  }, [isSignedIn, searchParams])

  async function continueWithX() {
    setBusy(true)
    setError(null)
    try {
      // Forward the post-login destination on the callback URL (see sign-in-form
      // for the rationale) so /sso-callback can force the real destination
      // instead of the /game fallback. A satellite that initiated a fresh
      // sign-up arrives as `sign_up_force_redirect_url`; carry it through the
      // round-trip so /sso-callback returns the user to the satellite.
      const hashParams =
        typeof window === 'undefined'
          ? new URLSearchParams()
          : paramsFromLocationHash(window.location.hash)
      const satelliteTarget =
        getSafeSatelliteForceRedirect(hashParams, 'sign_up_force_redirect_url') ??
        getSafeSatelliteForceRedirect(searchParams, 'sign_up_force_redirect_url')
      const callbackUrl = satelliteTarget
        ? `/sso-callback?sign_up_force_redirect_url=${encodeURIComponent(satelliteTarget)}`
        : redirectUrl === '/'
          ? '/sso-callback'
          : `/sso-callback?redirect_url=${encodeURIComponent(redirectUrl)}`
      const { error: ssoError } = await signUp.sso({
        strategy: 'oauth_x',
        // The satellite return URL is the future-API's authoritative post-SSO
        // destination (not just the /sso-callback force prop), so a fresh
        // sign-up from a satellite returns there instead of /game.
        redirectUrl: satelliteTarget ?? redirectUrl,
        redirectCallbackUrl: callbackUrl,
      })
      if (ssoError) {
        setBusy(false)
        setError(ssoError.message ?? 'Could not start X sign-up')
      }
    } catch (e) {
      setBusy(false)
      setError(e instanceof Error ? e.message : 'Could not start X sign-up')
    }
  }

  return (
    <AuthSplitLayout formHeading="Create your account" formSub="Continue with your X account.">
      <ContinueWithXButton busy={busy} disabled={disabled} onClick={continueWithX} />

      {error && <p className="mt-4 text-[13px] text-[#dc2626]">{error}</p>}

      <p className="mt-5 text-[13px] text-[#475569]">
        Already have an account?{' '}
        <Link href={signInHref} className="font-medium text-[#3b82f6] hover:text-[#2563eb]">
          Sign in
        </Link>
      </p>
    </AuthSplitLayout>
  )
}
