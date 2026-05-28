import Link from 'next/link'
import { products, statusLabel, type Product } from '@/components/products'

export default function Home() {
  return (
    <main>
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
          <Link
            href="/foundr-world"
            className="rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition hover:border-line-strong"
          >
            Start with foundr.world →
          </Link>
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
            <ProductCard key={product.slug} product={product} />
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
    </main>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [head, tld] = product.name.split('.')

  return (
    <li
      className={`group relative flex h-full flex-col rounded-md border border-line bg-surface p-6 transition hover:border-line-strong hover:shadow-sm ${
        product.status === 'soon' ? 'opacity-75' : ''
      }`}
    >
      {/* Stretched internal link covers the whole card */}
      <Link
        href={`/${product.slug}`}
        aria-label={`Read about ${product.name}`}
        className="absolute inset-0 z-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      />

      {/* Card content sits above the link but doesn't capture clicks */}
      <div className="pointer-events-none relative z-10">
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
      </div>

      {/* External "Go site" button — clickable on top of the stretched link */}
      <div className="relative z-20 mt-4 flex justify-end">
        <a
          href={`https://${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${product.name} site`}
          className="inline-flex items-center gap-1 rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition hover:border-accent hover:text-accent"
        >
          Go site
          <span aria-hidden>↗</span>
        </a>
      </div>
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
