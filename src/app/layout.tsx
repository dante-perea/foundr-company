import type { Metadata } from 'next'
import { Montserrat, Roboto, PT_Mono } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const ptMono = PT_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pt-mono',
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
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable} ${ptMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
