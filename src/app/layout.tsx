import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
