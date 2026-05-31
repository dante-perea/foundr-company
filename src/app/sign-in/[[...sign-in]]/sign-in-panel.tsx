'use client'

import { SignIn } from '@clerk/nextjs'

// Mirror the layout gate on the client so this panel never imports a live
// Clerk component into a render path when no publishable key is configured.
// The build runs with no keys (set on Vercel later); without this guard the
// keyless build would mount <SignIn /> and crash. When disabled we show a
// simple on-brand placeholder.
const CLERK_ENABLED = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

export function SignInPanel() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-page px-6 py-16">
      {CLERK_ENABLED ? (
        <SignIn
          appearance={{
            variables: {
              colorPrimary: '#3b82f6',
              colorText: '#111827',
              fontFamily: 'var(--font-sans)',
              borderRadius: '8px',
            },
          }}
        />
      ) : (
        <AuthPlaceholder
          heading="Sign in"
          body="Authentication isn’t configured for this deployment yet."
        />
      )}
    </main>
  )
}

function AuthPlaceholder({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="w-full max-w-sm rounded-md border border-line bg-surface p-8 text-center">
      <span className="mx-auto mb-4 block h-2.5 w-2.5 rounded-full bg-accent" />
      <h1 className="font-display text-xl font-semibold text-ink">{heading}</h1>
      <p className="mt-2 text-sm text-muted">{body}</p>
    </div>
  )
}
