import { products, statusLabel, type Product } from '@/components/products'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Masthead />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-ink">
          // A family of tools, not a platform
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-ink sm:text-7xl">
          Everything an AI-native solo founder needs to ship.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft/80 sm:text-xl">
          Small, sharp tools — file hosting, budgets, grants, courses, and more.
          Each one built to be run by your agents, not babysat in another
          dashboard.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#tools" className="tactile bg-violet text-white">
            Browse the tools
          </a>
          <a
            href="https://www.foundr.world"
            className="tactile bg-paper text-ink"
          >
            See foundr.world →
          </a>
        </div>
      </section>

      {/* Catalog */}
      <section id="tools" className="mx-auto max-w-6xl scroll-mt-16 px-6 pb-24">
        <div className="flex items-baseline justify-between border-t-2 border-ink pt-4">
          <h2 className="font-mono text-sm uppercase tracking-[0.25em] text-ink">
            The Catalog
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {String(products.length).padStart(2, '0')} tools
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-ink-soft/70">
          One founder, a toolkit that acts like a team. Every tool does one job
          well and speaks to your agents over MCP. Use one. Use all of them.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i + 1} />
          ))}
        </ul>
      </section>

      {/* Closing note */}
      <section className="border-t-2 border-ink bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Built in the open, while in use.
          </h2>
          <p className="mt-4 text-ink-soft/80">
            Foundr is built by{' '}
            <a
              href="https://www.perea.ai"
              className="font-medium text-violet-ink underline decoration-violet/40 underline-offset-4 hover:decoration-violet"
            >
              Dante Perea
            </a>{' '}
            — a solo founder shipping these tools daily and using every one of
            them to build the next.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Masthead() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink bg-page/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.18em] text-ink"
        >
          <span className="h-3 w-3 rounded-sm bg-violet" />
          foundr<span className="text-muted">.company</span>
        </a>
        <a
          href="https://www.perea.ai"
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition hover:text-ink"
        >
          by Perea
        </a>
      </div>
    </header>
  )
}

function ProductCard({
  product,
  index,
}: {
  product: Product
  index: number
}) {
  const isLink = Boolean(product.href)
  const [head, tld] = product.name.split('.')

  const inner = (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted">
          {String(index).padStart(2, '0')}
        </span>
        <StatusTag status={product.status} />
      </div>
      <h3 className="mt-3 font-display text-xl font-bold text-ink">
        {head}
        <span className="text-violet-ink">.{tld}</span>
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft/75">
        {product.tagline}
      </p>
    </>
  )

  const base =
    'block h-full rounded-md border border-ink bg-paper p-5 transition'

  if (isLink) {
    return (
      <li>
        <a
          href={product.href}
          className={`${base} hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-violet hover:shadow-[3px_3px_0_var(--color-violet)]`}
        >
          {inner}
        </a>
      </li>
    )
  }

  return (
    <li>
      <div className={`${base} border-dashed border-ink/30 opacity-80`}>
        {inner}
      </div>
    </li>
  )
}

function StatusTag({ status }: { status: Product['status'] }) {
  const styles: Record<Product['status'], string> = {
    live: 'text-success',
    beta: 'text-warning',
    soon: 'text-muted',
  }
  const dot: Record<Product['status'], string> = {
    live: 'bg-success',
    beta: 'bg-warning',
    soon: 'bg-muted',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot[status]}`} />
      {statusLabel[status]}
    </span>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-sm bg-violet" />
          Foundr — tools for the AI-native solo founder
        </span>
        <span>© 2026 Perea</span>
      </div>
    </footer>
  )
}
