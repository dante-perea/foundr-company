import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, productBySlug, statusLabel, type Product } from '@/components/products'
import { featuresBySlug, type PricingTier, type Competitor } from '@/components/product-features'

export function generateStaticParams() {
  return products
    .filter((p) => featuresBySlug[p.slug])
    .map((p) => ({ product: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>
}): Promise<Metadata> {
  const { product: slug } = await params
  const p = productBySlug(slug)
  const f = featuresBySlug[slug]
  if (!p || !f) return {}
  return {
    title: `${p.name} — Full features & pricing`,
    description: f.positioning,
    openGraph: {
      title: `${p.name} — Full features & pricing`,
      description: f.positioning,
      type: 'website',
    },
  }
}

export default async function ProductFeaturesPage({
  params,
}: {
  params: Promise<{ product: string }>
}) {
  const { product: slug } = await params
  const p = productBySlug(slug)
  const f = featuresBySlug[slug]
  if (!p || !f) notFound()

  const [head, tld] = p.name.split('.')

  return (
    <main>
      {/* Top — breadcrumb + title + positioning */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 sm:pt-24">
        <div className="flex flex-wrap items-center justify-center gap-3 text-center">
          <Link
            href={`/${p.slug}`}
            className="font-mono text-xs uppercase tracking-[0.18em] text-subtle transition hover:text-ink"
          >
            ← {p.name}
          </Link>
          <span className="text-subtle">·</span>
          <StatusTag status={p.status} />
        </div>

        <h1 className="mt-6 text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          {head}
          <span className="text-accent">.{tld}</span>{' '}
          <span className="text-subtle">— full features</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted">
          {f.positioning}
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl scroll-mt-12 px-6 pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            Pricing
          </h2>
          <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Free via X. Solo at indie prices. Pro when you scale.
          </p>
          <p className="mt-3 text-muted">
            Same pricing model across the whole foundr.* family. No per-seat math. No
            enterprise quote theater.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {f.pricing.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </ul>
      </section>

      {/* Feature groups */}
      <section className="border-t border-line bg-tint">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              What you get
            </h2>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Every feature, grouped by who it's for.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {f.featureGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-md border border-line bg-surface p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MCP surface — agentic-first proof */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            Agentic-first
          </h2>
          <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            The MCP surface your agents call.
          </p>
          <p className="mt-3 text-muted">
            Add it once to Claude, Cursor, or any MCP host. Your bearer token unlocks
            every tier — no dashboard required.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-md border border-line bg-tint p-6 font-mono text-sm leading-relaxed text-ink">
          <span className="text-subtle">{`# Install the server (one line, one time)`}</span>
          <br />
          <span>
            claude mcp add --transport http {p.slug}{' '}
            <span className="text-accent">https://{p.slug}.foundr.company/api/mcp</span>
          </span>
        </div>

        <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {f.mcp.map((tool) => (
            <li
              key={tool.name}
              className="rounded-md border border-line bg-surface p-4"
            >
              <code className="font-mono text-sm font-medium text-accent">
                {tool.name}
              </code>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {tool.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Why this differs */}
      <section className="border-t border-line bg-tint">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              Why this differs
            </h2>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              The angles the incumbents won't ship.
            </p>
          </div>

          <ul className="mt-10 space-y-4">
            {f.differentiation.map((d, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-md border border-line bg-surface p-5"
              >
                <span className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base leading-relaxed text-ink">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Competitive landscape */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            Competitive landscape
          </h2>
          <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Who's already here, and what they leave on the table.
          </p>
          <p className="mt-3 text-muted">
            Honest comparison. We do not pretend the space is empty.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {f.competitors.map((c) => (
            <CompetitorCard key={c.name} c={c} />
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="border-t border-line bg-tint">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {f.cta.headline}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{f.cta.body}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CtaButton primary cta={f.cta.primary} />
            {f.cta.secondary && <CtaButton cta={f.cta.secondary} />}
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

// ── Subcomponents ─────────────────────────────────────────────────────────

function PricingCard({ tier }: { tier: PricingTier }) {
  const ringCls = tier.highlight
    ? 'border-accent ring-2 ring-accent/15'
    : 'border-line'

  return (
    <li
      className={`flex h-full flex-col rounded-md border bg-surface p-6 ${ringCls}`}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-lg font-semibold text-ink">
          {tier.name}
        </h3>
        {tier.highlight && (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Recommended
          </span>
        )}
      </div>

      {tier.badge && (
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
          {tier.badge}
        </p>
      )}

      <p className="mt-3 font-display text-3xl font-semibold text-ink">
        {tier.price}
      </p>

      <p className="mt-2 text-sm leading-relaxed text-muted">{tier.blurb}</p>

      <ul className="mt-5 flex-1 space-y-2 border-t border-line pt-5">
        {tier.includes.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-relaxed text-ink"
          >
            <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <CtaButton primary cta={tier.cta} full />
      </div>
    </li>
  )
}

function CompetitorCard({ c }: { c: Competitor }) {
  const content = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-base font-semibold text-ink">
          {c.name}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
          {c.pricing}
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.positioning}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
          Gap:
        </span>{' '}
        {c.weakness}
      </p>
    </>
  )

  if (c.url) {
    return (
      <li>
        <a
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full rounded-md border border-line bg-surface p-5 transition hover:border-line-strong"
        >
          {content}
        </a>
      </li>
    )
  }

  return (
    <li className="rounded-md border border-line bg-surface p-5">{content}</li>
  )
}

function CtaButton({
  cta,
  primary,
  full,
}: {
  cta: { label: string; href: string }
  primary?: boolean
  full?: boolean
}) {
  const isExternal = /^(https?:|mailto:)/.test(cta.href)
  const base = full ? 'block w-full text-center' : 'inline-block'
  const variant = primary
    ? 'bg-accent text-white hover:bg-accent-hover'
    : 'border border-line bg-surface text-ink hover:border-line-strong'
  const cls = `${base} rounded-md px-5 py-2.5 text-sm font-medium transition ${variant}`

  if (isExternal) {
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
