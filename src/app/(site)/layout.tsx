import { Header, Footer } from '@/components/site'

// Marketing chrome. Routes in the (site) group render inside the global
// Header/Footer; auth routes (/sign-in, /sign-up, /sso-callback) live at the
// top level and inherit only the root layout, so they render full-screen with
// no site chrome. This is a nested layout — it must NOT emit <html>/<body>
// (only the root layout does), or the page ships duplicate document elements.
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
