import { Suspense } from 'react'
import { connection } from 'next/server'
import { SignUpForm } from './sign-up-form'
import { AuthSplitLayout, ContinueWithXButton } from '@/components/auth/brand'

// Clerk crashes at runtime without a publishable key. When Clerk isn't
// configured for this deployment (env var missing — e.g. the keyless CI
// build), render a branded placeholder instead of mounting <SignUpForm /> (the
// Clerk hooks) so the keyless build stays green. This gate is readable in a
// server component because NEXT_PUBLIC_* is inlined at build time.
const CLERK_ENABLED = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

// The sign-up route is dynamic — Clerk's useSignUp reads request-time auth
// state and can't render under the Suspense fallback that wraps ClerkProvider
// during prerender. `connection()` opts out of build-time prerender, but it
// must run INSIDE the <Suspense> boundary (in a child), not at the page's top
// level: under cacheComponents the page body renders inside the otherwise-
// static root layout, so awaiting connection() before the boundary makes the
// whole page block ("Uncached data accessed outside of <Suspense>"). Keeping
// the await inside the suspended child lets the static shell stream first.
export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <DynamicSignUp />
    </Suspense>
  )
}

async function DynamicSignUp() {
  await connection()
  if (!CLERK_ENABLED) {
    return (
      <AuthSplitLayout formHeading="Create your account" formSub="Continue with your X account.">
        <ContinueWithXButton disabled />
        <p className="mt-5 text-[13px] text-[#475569]">
          Authentication isn’t configured for this deployment yet.
        </p>
      </AuthSplitLayout>
    )
  }
  return <SignUpForm />
}
