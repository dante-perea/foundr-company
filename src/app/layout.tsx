import type { Metadata } from 'next'
import { Poppins, Roboto, Inconsolata } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/site'

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
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${inconsolata.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
