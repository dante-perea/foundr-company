'use client'

import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { getSafeCallbackRedirect } from '@/lib/auth/redirect-target'
import { Wordmark } from '@/components/auth/brand'

export function SSOCallbackClient({ clerkEnabled }: { clerkEnabled: boolean }) {
  const searchParams = useSearchParams()
  // The sign-in/up forms forward the intended destination on the callback URL.
  // Use it as the FORCE redirect so it beats Clerk's own (often unrecovered)
  // resource state and the home fallback — this is what returns an OAuth pairing
  // to the /oauth/grant consent page after the X round-trip, and (when a foundr.*
  // satellite initiated the sign-in) returns the user to that satellite.
  // getSafeCallbackRedirect prefers an allowlisted cross-origin satellite target
  // and otherwise stays same-origin (no open-redirect).
  const target = getSafeCallbackRedirect(searchParams, {
    currentOrigin: typeof window === 'undefined' ? undefined : window.location.origin,
  })
  return (
    <main
      style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 py-12"
    >
      {clerkEnabled && (
        <AuthenticateWithRedirectCallback
          signInForceRedirectUrl={target}
          signUpForceRedirectUrl={target}
          signInFallbackRedirectUrl="/"
          signUpFallbackRedirectUrl="/"
        />
      )}
      <Wordmark />
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-[#e2e8f0] border-t-[#3b82f6]"
        aria-hidden="true"
      />
      <p className="text-[14px]" style={{ color: '#475569' }}>Signing you in…</p>
    </main>
  )
}
