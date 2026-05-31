import { Suspense } from 'react'
import { connection } from 'next/server'
import { SSOCallbackClient } from './sso-callback-client'

// Clerk crashes at runtime without a publishable key. The route is dynamic
// (connection() below) so the keyless build doesn't execute it, but we pass
// the server-readable gate down so the client component never mounts
// <AuthenticateWithRedirectCallback /> (Clerk) when keys are absent — keeping
// the keyless build green as a belt-and-suspenders measure.
const CLERK_ENABLED = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

// Force dynamic — Clerk's AuthenticateWithRedirectCallback can't render
// under the Suspense fallback that wraps ClerkProvider during prerender
// (see Next.js issue #85490).
export default function SSOCallbackPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <SSOCallbackContent />
    </Suspense>
  )
}

async function SSOCallbackContent() {
  await connection()
  return <SSOCallbackClient clerkEnabled={CLERK_ENABLED} />
}
