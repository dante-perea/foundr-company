// Static loading skeleton — paints immediately on navigation to /sign-in,
// covering the connection() + ClerkProvider hydration window. Mirrors the
// foundr.company AuthSplitLayout shape (blue testimonial panel + white form
// panel) so the skeleton→form swap is visually stable: same blue gradient,
// same wordmark-top / quote / by-Perea structure, no light-to-blue flash.
export default function SignInLoading() {
  return (
    <main className="grid min-h-screen animate-pulse md:grid-cols-2">
      {/* Left: blue testimonial panel placeholder — desktop only */}
      <div className="relative hidden flex-col justify-between bg-gradient-to-b from-[#3b82f6] to-[#1e40af] px-14 py-10 md:flex">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
          <span className="h-3.5 w-28 rounded bg-white/30" />
        </div>
        <div className="max-w-[460px] border-l-2 border-white/30 pl-6" aria-hidden="true">
          <div className="space-y-3">
            <div className="h-5 w-full rounded bg-white/25" />
            <div className="h-5 w-11/12 rounded bg-white/25" />
            <div className="h-5 w-3/4 rounded bg-white/25" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-white/20 ring-1 ring-white/30" />
            <div className="space-y-2">
              <div className="h-3 w-28 rounded bg-white/30" />
              <div className="h-3 w-20 rounded bg-white/20" />
            </div>
          </div>
        </div>
        <div className="h-3 w-14 rounded bg-white/25" aria-hidden="true" />
      </div>

      {/* Right: form panel placeholder */}
      <div className="flex flex-col items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-[340px]">
          <div className="mb-9 h-4 w-32 rounded bg-[#e2e8f0] md:hidden" aria-hidden="true" />
          <div className="h-7 w-2/5 rounded bg-[#e2e8f0]" aria-hidden="true" />
          <div className="mt-2 h-4 w-1/2 rounded bg-[#eef2f6]" aria-hidden="true" />
          <div className="mt-7 h-12 w-full rounded-lg bg-[#dbe7fb]" aria-hidden="true" />
          <div className="mt-5 h-3 w-2/3 rounded bg-[#eef2f6]" aria-hidden="true" />
        </div>
      </div>
      <span className="sr-only">Loading sign in</span>
    </main>
  )
}
