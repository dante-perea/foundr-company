import { products, statusLabel, type Product } from '@/components/products'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center sm:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
          Tools for the AI-native solo founder
        </p>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl">
          Everything you need to ship, in small sharp pieces.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          File hosting, budgets, grants, courses, and more. Each tool does one
          job well and is built to be run by your agents.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#tools"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover"
          >
            Browse the tools
          </a>
          <a
            href="https://www.foundr.world"
            className="rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition hover:border-line-strong"
          >
            See foundr.world →
          </a>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="mx-auto max-w-6xl scroll-mt-12 px-6 pb-24"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            The toolkit
          </h2>
          <p className="mt-3 text-muted">
            One founder. A team's worth of tools — each one talks to your agents
            over MCP.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </ul>
      </section>

      {/* Closing band */}
      <section className="bg-tint">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Built in the open, while in use.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Foundr is built by{' '}
            <a
              href="https://www.perea.ai"
              className="font-medium text-accent transition hover:text-accent-hover"
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
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="flex items-center gap-2 font-display text-base font-semibold text-ink"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          foundr<span className="text-subtle">.company</span>
        </a>
        <a
          href="https://www.perea.ai"
          className="text-sm text-muted transition hover:text-ink"
        >
          by Perea
        </a>
      </div>
    </header>
  )
}

function ProductCard({ product }: { product: Product }) {
  const isLink = Boolean(product.href)
  const [head, tld] = product.name.split('.')

  const inner = (
    <>
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-base font-medium text-ink">
          {head}
          <span className="text-accent">.{tld}</span>
        </h3>
        <StatusTag status={product.status} />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {product.tagline}
      </p>
    </>
  )

  const base =
    'block h-full rounded-md border border-line bg-surface p-6 transition'

  if (isLink) {
    return (
      <li>
        <a
          href={product.href}
          className={`${base} hover:border-line-strong hover:shadow-sm`}
        >
          {inner}
        </a>
      </li>
    )
  }

  return (
    <li>
      <div className={`${base} opacity-70`}>{inner}</div>
    </li>
  )
}

function StatusTag({ status }: { status: Product['status'] }) {
  const dot: Record<Product['status'], string> = {
    live: 'bg-success',
    beta: 'bg-warning',
    soon: 'bg-subtle',
  }
  const text: Record<Product['status'], string> = {
    live: 'text-success',
    beta: 'text-warning',
    soon: 'text-subtle',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] ${text[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot[status]}`} />
      {statusLabel[status]}
    </span>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-subtle sm:flex-row sm:items-center">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Foundr — tools for the AI-native solo founder
        </span>
        <span>© 2026 Perea</span>
      </div>
    </footer>
  )
}
