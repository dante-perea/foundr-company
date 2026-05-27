import { products, statusLabel, type Product } from '@/components/products'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(155,191,131,0.18),transparent_70%)]"
      />

      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center sm:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-sage-400/30 bg-sage-400/10 px-3 py-1 text-xs font-medium tracking-wide text-sage-300 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
          A family of tools, not another platform
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
          Everything an AI-native solo founder needs to ship.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-400">
          Small, sharp tools — file hosting, budgets, grants, courses, and more.
          Each one built to be run by your agents, not babysat in another
          dashboard.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#tools"
            className="rounded-lg bg-sage-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sage-300"
          >
            Browse the tools
          </a>
          <a
            href="https://www.foundr.world"
            className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            See foundr.world →
          </a>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            One founder. A toolkit that acts like a team.
          </h2>
          <p className="mt-3 text-slate-400">
            Every tool does one job well and speaks to your agents over MCP. Use
            one. Use all of them.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </ul>
      </section>

      {/* Closing band */}
      <section className="border-t border-slate-800 bg-slate-900/30">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Built in the open, while in use.
          </h2>
          <p className="mt-3 text-slate-400">
            Foundr is built by{' '}
            <a
              href="https://www.perea.ai"
              className="text-sage-400 underline-offset-4 hover:text-sage-300 hover:underline"
            >
              Dante Perea
            </a>
            {' '}— a solo founder shipping these tools daily and using every one
            of them to build the next.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-sage-400" />
          foundr
          <span className="text-slate-500">.company</span>
        </a>
        <a
          href="https://www.perea.ai"
          className="text-sm text-slate-400 transition hover:text-white"
        >
          by Perea
        </a>
      </div>
    </header>
  )
}

function ProductCard({ product }: { product: Product }) {
  const isLink = Boolean(product.href)

  const inner = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold text-white">
          {product.name.split('.')[0]}
          <span className="text-sage-400">.{product.name.split('.')[1]}</span>
        </span>
        <StatusBadge product={product} />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {product.tagline}
      </p>
    </>
  )

  if (isLink) {
    return (
      <li>
        <a
          href={product.href}
          className="group block h-full rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-sage-400/50 hover:bg-slate-900"
        >
          {inner}
        </a>
      </li>
    )
  }

  return (
    <li>
      <div className="h-full rounded-xl border border-slate-800/70 bg-slate-900/20 p-5">
        {inner}
      </div>
    </li>
  )
}

function StatusBadge({ product }: { product: Product }) {
  const styles: Record<Product['status'], string> = {
    live: 'border-sage-400/30 bg-sage-400/10 text-sage-300',
    beta: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
    soon: 'border-slate-700 bg-slate-800/60 text-slate-400',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[product.status]}`}
    >
      {product.status === 'live' && (
        <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
      )}
      {statusLabel[product.status]}
    </span>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
          foundr — tools for the AI-native solo founder
        </span>
        <span>© 2026 Perea</span>
      </div>
    </footer>
  )
}
