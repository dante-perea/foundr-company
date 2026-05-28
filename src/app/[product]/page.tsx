import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  products,
  productBySlug,
  statusLabel,
  type CtaLink,
  type Product,
} from '@/components/products'

export function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>
}): Promise<Metadata> {
  const { product: slug } = await params
  const p = productBySlug(slug)
  if (!p) return {}
  return {
    title: `${p.name} — ${p.tagline}`,
    description: p.hero.subhead,
    openGraph: {
      title: `${p.name} — ${p.tagline}`,
      description: p.hero.subhead,
      type: 'website',
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string }>
}) {
  const { product: slug } = await params
  const p = productBySlug(slug)
  if (!p) notFound()

  const [head, tld] = p.name.split('.')

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center sm:pt-28">
        <div className="flex items-center justify-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            {p.hero.eyebrow}
          </span>
          <span className="text-subtle">·</span>
          <StatusTag status={p.status} />
        </div>

        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {head}
          <span className="text-accent">.{tld}</span>
        </h1>

        <p className="mt-5 mx-auto max-w-2xl font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
          {p.hero.headline}
        </p>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {p.hero.subhead}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <PrimaryCta cta={p.hero.primary} />
          {p.hero.secondary && <SecondaryCta cta={p.hero.secondary} />}
        </div>
      </section>

      {/* What it is */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
          What it is
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-ink">{p.intro}</p>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-line bg-tint">
        <div className="mx-auto max-w-5xl scroll-mt-12 px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              How it works
            </h2>
            <p className="mt-3 text-muted">
              {p.steps.length} step{p.steps.length === 1 ? '' : 's'}, in order.
            </p>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {p.steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-md border border-line bg-surface p-6"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Key attributes */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            What makes it different
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {p.attributes.map((attr) => (
            <li key={attr.title}>
              <h3 className="font-display text-base font-semibold text-ink">
                {attr.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {attr.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Why it exists */}
      <section className="border-t border-line bg-tint">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Why it exists
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{p.why}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta cta={p.hero.primary} />
            <Link
              href="/"
              className="rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition hover:border-line-strong"
            >
              ← All tools
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function isExternal(href: string) {
  return /^(https?:|mailto:)/.test(href)
}

function PrimaryCta({ cta }: { cta: CtaLink }) {
  const cls =
    'rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover'
  if (isExternal(cta.href)) {
    return (
      <a
        href={cta.href}
        target={cta.href.startsWith('http') ? '_blank' : undefined}
        rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cls}
      >
        {cta.label}
      </a>
    )
  }
  return (
    <Link href={cta.href} className={cls}>
      {cta.label}
    </Link>
  )
}

function SecondaryCta({ cta }: { cta: CtaLink }) {
  const cls =
    'rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition hover:border-line-strong'
  if (isExternal(cta.href)) {
    return (
      <a
        href={cta.href}
        target={cta.href.startsWith('http') ? '_blank' : undefined}
        rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cls}
      >
        {cta.label}
      </a>
    )
  }
  return (
    <Link href={cta.href} className={cls}>
      {cta.label}
    </Link>
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
