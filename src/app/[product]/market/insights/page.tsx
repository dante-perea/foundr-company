import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  products,
  productBySlug,
  statusLabel,
  type Product,
} from '@/components/products'
import {
  marketBySlug,
  type Incumbent,
  type MarketSize,
  type Source,
  type Vulnerability,
} from '@/components/product-market'

export function generateStaticParams() {
  return products
    .filter((p) => marketBySlug[p.slug])
    .map((p) => ({ product: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>
}): Promise<Metadata> {
  const { product: slug } = await params
  const p = productBySlug(slug)
  const m = marketBySlug[slug]
  if (!p || !m) return {}
  return {
    title: `${p.name} — Market insights · TAM / SAM / SOM`,
    description: `MECE market analysis for ${p.name}: TAM/SAM/SOM with verifiable sources and top-3 incumbents with structural vulnerabilities.`,
  }
}

export default async function ProductMarketPage({
  params,
}: {
  params: Promise<{ product: string }>
}) {
  const { product: slug } = await params
  const p = productBySlug(slug)
  const m = marketBySlug[slug]
  if (!p || !m) notFound()

  const [head, tld] = p.name.split('.')

  return (
    <main>
      {/* Top */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center sm:pt-24">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/${p.slug}`}
            className="font-mono text-xs uppercase tracking-[0.18em] text-subtle transition hover:text-ink"
          >
            ← {p.name}
          </Link>
          <span className="text-subtle">·</span>
          <StatusTag status={p.status} />
        </div>

        <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          {head}
          <span className="text-accent">.{tld}</span>{' '}
          <span className="text-subtle">— market insights</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          MECE market analysis. Numbers are point-in-time (May 2026) — sources
          linked so you can re-verify. TAM &gt; SAM &gt; SOM are nested slices, not
          aspirational forecasts.
        </p>
      </section>

      {/* TAM / SAM / SOM */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <SizeCard label="TAM" subtitle="Total addressable" size={m.tam} accent="tam" />
          <SizeCard label="SAM" subtitle="Serviceable addressable" size={m.sam} accent="sam" highlight />
          <SizeCard label="SOM" subtitle="Serviceable obtainable (3–5 yr)" size={m.som} accent="som" />
        </div>
      </section>

      {/* Top 3 incumbents + vulnerabilities */}
      <section className="border-t border-line bg-tint">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              The top 3 incumbents
            </h2>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Who controls the market — and why they can't pivot.
            </p>
            <p className="mt-3 text-muted">
              Each incumbent&apos;s vulnerabilities tagged by kind: technical,
              business model, regulatory / channel, cultural.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {m.incumbents.map((inc, i) => (
              <IncumbentCard key={inc.name} inc={inc} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Win thesis */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            Capture strategy
          </h2>
          <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Where {p.name} actually wins.
          </p>
          <p className="mt-3 text-muted">
            Each angle ties SOM capture to a specific incumbent vulnerability above.
          </p>
        </div>

        <ul className="mt-10 space-y-4">
          {m.winThesis.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-md border border-line bg-surface p-5"
            >
              <span className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-base leading-relaxed text-ink">{bullet}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-line bg-tint">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            See how we sell into that gap.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            The market thesis lives here. The pricing, MCP surface, and feature
            list live on the features page.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${p.slug}/features`}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover"
            >
              Full features &amp; pricing
            </Link>
            <Link
              href={`/${p.slug}`}
              className="rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition hover:border-line-strong"
            >
              ← Back to {p.name}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// ── Subcomponents ─────────────────────────────────────────────────────────

function SizeCard({
  label,
  subtitle,
  size,
  highlight,
}: {
  label: string
  subtitle: string
  size: MarketSize
  accent: 'tam' | 'sam' | 'som'
  highlight?: boolean
}) {
  const ringCls = highlight
    ? 'border-accent ring-2 ring-accent/15'
    : 'border-line'

  return (
    <article
      className={`flex h-full flex-col rounded-md border bg-surface p-6 ${ringCls}`}
    >
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {label}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
          {subtitle}
        </span>
      </div>

      <p className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
        {size.headline}
      </p>

      <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm leading-relaxed">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
            Proxy
          </span>
          <p className="mt-1 text-ink">{size.proxy}</p>
        </div>

        {size.calc && (
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Calc
            </span>
            <p className="mt-1 text-muted">{size.calc}</p>
          </div>
        )}

        {size.assumptions && size.assumptions.length > 0 && (
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Assumptions
            </span>
            <ul className="mt-1 space-y-1">
              {size.assumptions.map((a) => (
                <li key={a} className="flex gap-2 text-muted">
                  <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {size.analog && (
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Analog precedent
            </span>
            <p className="mt-1 text-muted">{size.analog}</p>
          </div>
        )}
      </div>

      <SourceList sources={size.sources} />
    </article>
  )
}

function SourceList({ sources }: { sources: Source[] }) {
  if (!sources || sources.length === 0) return null
  return (
    <div className="mt-5 border-t border-line pt-4">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
        Sources
      </span>
      <ul className="mt-2 space-y-1.5">
        {sources.map((src) => (
          <li key={src.url} className="text-xs leading-relaxed">
            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:text-accent-hover hover:underline"
            >
              {src.label}
            </a>
            {' '}
            <span className="text-subtle">·</span>{' '}
            <span className="text-subtle">{hostname(src.url)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function IncumbentCard({ inc, index }: { inc: Incumbent; index: number }) {
  return (
    <article className="rounded-md border border-line bg-surface p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            #{index}
          </span>
          {inc.url ? (
            <a
              href={inc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-lg font-semibold text-ink underline-offset-4 hover:text-accent hover:underline"
            >
              {inc.name}
            </a>
          ) : (
            <span className="font-display text-lg font-semibold text-ink">
              {inc.name}
            </span>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted">{inc.position}</p>

      <ul className="mt-5 space-y-3 border-t border-line pt-5">
        {inc.vulnerabilities.map((v) => (
          <VulnRow key={v.kind + v.detail.slice(0, 24)} v={v} />
        ))}
      </ul>
    </article>
  )
}

function VulnRow({ v }: { v: Vulnerability }) {
  return (
    <li className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
        {v.kind}
      </span>
      <p className="text-sm leading-relaxed text-ink">{v.detail}</p>
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
