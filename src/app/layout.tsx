import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Poppins, Roboto, Inconsolata } from 'next/font/google'
import './globals.css'
import { PrimaryClerkProvider } from '@/components/auth/primary-clerk-provider'

// Clerk crashes at runtime without a publishable key. When Clerk isn't
// configured for this deployment (env var missing — e.g. the keyless CI
// build), render the app without the provider so the site still builds and
// renders. The keys are set on Vercel later; until then this gate keeps the
// build green.
const CLERK_ENABLED = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inconsolata',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Foundr — tools for the AI-native solo founder',
  description:
    'A family of small, sharp tools for the AI-native solo founder. File hosting, budgets, grants, courses, and more — each one built to be run by your agents.',
  openGraph: {
    title: 'Foundr — tools for the AI-native solo founder',
    description:
      'A family of small, sharp tools for the AI-native solo founder. Each one built to be run by your agents, not babysat in another dashboard.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const shell = (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${inconsolata.variable}`}
    >
      <body>{children}</body>
    </html>
  )

  if (!CLERK_ENABLED) return shell

  // Suspense wrapper required when cacheComponents is enabled: ClerkProvider
  // reads request-time auth state, and Next.js needs a Suspense boundary
  // between cached scope and any dynamic-API consumer.
  return (
    <Suspense fallback={shell}>
      <PrimaryClerkProvider>{shell}</PrimaryClerkProvider>
    </Suspense>
  )
}
