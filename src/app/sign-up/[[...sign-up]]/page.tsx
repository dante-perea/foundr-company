import { Suspense } from 'react'
import { connection } from 'next/server'
import { SignUpPanel } from './sign-up-panel'

// The sign-up route is dynamic — Clerk's <SignUp /> reads request-time auth
// state and can't render under the Suspense fallback that wraps ClerkProvider
// during prerender. `connection()` opts out of build-time prerender, but it
// must run INSIDE the <Suspense> boundary (in a child), not at the page's top
// level: under cacheComponents the page body renders inside the otherwise-
// static root layout, so awaiting connection() before the boundary makes the
// whole page block ("Uncached data accessed outside of <Suspense>"). Keeping
// the await inside the suspended child lets the static shell stream first.
export default function SignUpPage() {
  return (
    <Suspense fallback={<AuthFallback />}>
      <DynamicSignUp />
    </Suspense>
  )
}

async function DynamicSignUp() {
  await connection()
  return <SignUpPanel />
}

function AuthFallback() {
  return <main className="flex min-h-[70vh] items-center justify-center bg-page px-6" />
}
