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
  type Moats,
  type PowerUserPain,
  type Source,
  type StrategicMove,
  type SynthesisRow,
  type SynthesisStatus,
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

      {/* 12-month strategic moves */}
      {m.strategicMoves && m.strategicMoves.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              Strategic moves (12 mo)
            </h2>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Ranked by leverage. Top of the list ships first.
            </p>
            <p className="mt-3 text-muted">
              Leverage is encoded in position — no fake score. #1 is the
              highest-leverage move we can make in the next quarter.
            </p>
          </div>

          <ol className="mt-10 space-y-4">
            {m.strategicMoves.map((move, i) => (
              <StrategicMoveCard key={i} move={move} index={i + 1} />
            ))}
          </ol>
        </section>
      )}

      {/* Economic moats */}
      {m.moats && (
        <section className="border-t border-line bg-tint">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                Economic moats
              </h2>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                What we can hold — and what we can&apos;t.
              </p>
              <p className="mt-3 text-muted">
                Honest split. We refuse to call cost-leadership or distribution
                a moat unless it actually defends.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
              <MoatColumn
                label="Real (defensible)"
                tone="hold"
                items={m.moats.hold}
              />
              <MoatColumn
                label="Not real (incumbents can match)"
                tone="cannot"
                items={m.moats.cannotHold}
              />
            </div>

            {(m.moats.switchingFor || m.moats.switchingAgainst) && (
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {m.moats.switchingFor && (
                  <SwitchingCard
                    label="Switching costs in our favor"
                    items={m.moats.switchingFor}
                    tone="hold"
                  />
                )}
                {m.moats.switchingAgainst && (
                  <SwitchingCard
                    label="Switching costs against us"
                    items={m.moats.switchingAgainst}
                    tone="cannot"
                  />
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Power-user pain */}
      {m.powerUserPain && m.powerUserPain.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              Power-user pain
            </h2>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {m.powerUserPain.length} unaddressed pains, real voices.
            </p>
            <p className="mt-3 text-muted">
              Each pain has ≥3 independent quotes from Reddit / HN / GitHub /
              X. If an incumbent could fix it, they would have already.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {m.powerUserPain.map((pain) => (
              <PowerUserPainCard key={pain.label} pain={pain} />
            ))}
          </div>
        </section>
      )}

      {/* Synthesis */}
      {m.synthesis && m.synthesis.length > 0 && (
        <section className="border-t border-line bg-tint">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                Synthesis
              </h2>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Where SAM × incumbent vulnerability × unaddressed pain
                converges.
              </p>
              <p className="mt-3 text-muted">
                A wedge counts only when all three columns align. Status =
                what we&apos;ve actually shipped against it.
              </p>
            </div>

            <SynthesisTable rows={m.synthesis} />
          </div>
        </section>
      )}

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

function StrategicMoveCard({
  move,
  index,
}: {
  move: StrategicMove
  index: number
}) {
  return (
    <li className="rounded-md border border-line bg-surface p-6">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {String(index).padStart(2, '0')}
        </span>
        <h3 className="flex-1 font-display text-base font-semibold leading-snug text-ink">
          {move.title}
        </h3>
        {move.timing && (
          <span className="shrink-0 rounded-sm bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent-hover">
            {move.timing}
          </span>
        )}
      </div>
      <p className="mt-2 pl-10 text-sm leading-relaxed text-muted">
        {move.body}
      </p>
    </li>
  )
}

function MoatColumn({
  label,
  tone,
  items,
}: {
  label: string
  tone: 'hold' | 'cannot'
  items: { title: string; body: string }[]
}) {
  const accent =
    tone === 'hold'
      ? 'border-success/30 bg-success/[0.03]'
      : 'border-danger/30 bg-danger/[0.03]'
  const dot = tone === 'hold' ? 'bg-success' : 'bg-danger'

  return (
    <div className={`rounded-md border-2 p-6 ${accent}`}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink">
          {label}
        </h3>
      </div>
      <ol className="mt-4 space-y-4">
        {items.map((item, i) => (
          <li key={item.title} className="text-sm">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-subtle">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="flex-1 font-display text-sm font-semibold text-ink">
                {item.title}
              </h4>
            </div>
            <p className="mt-1 pl-8 leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function SwitchingCard({
  label,
  items,
  tone,
}: {
  label: string
  items: string[]
  tone: 'hold' | 'cannot'
}) {
  const dot = tone === 'hold' ? 'bg-success' : 'bg-danger'
  return (
    <div className="rounded-md border border-line bg-surface p-5">
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink">
          {label}
        </h3>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-relaxed text-muted"
          >
            <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-subtle" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PowerUserPainCard({ pain }: { pain: PowerUserPain }) {
  return (
    <article className="rounded-md border border-line bg-surface p-6">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Pain {pain.label}
        </span>
        <h3 className="flex-1 font-display text-base font-semibold leading-snug text-ink">
          {pain.title}
        </h3>
      </div>

      <ul className="mt-4 space-y-3 border-l-2 border-accent/30 pl-4">
        {pain.quotes.map((q, i) => (
          <li key={i}>
            <blockquote className="text-sm italic leading-relaxed text-ink">
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <p className="mt-1 text-xs text-subtle">— {q.attribution}</p>
          </li>
        ))}
      </ul>

      <div className="mt-5 grid grid-cols-1 gap-3 border-t border-line pt-5 sm:grid-cols-[160px_1fr]">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
          Why incumbents
          <br />
          can&apos;t fix
        </span>
        <p className="text-sm leading-relaxed text-ink">
          {pain.whyIncumbentsCantFix}
        </p>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[160px_1fr]">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
          Coverage
        </span>
        <p className="text-sm leading-relaxed text-ink">
          <StatusBadge status={pain.coverage.status} /> {pain.coverage.detail}
        </p>
      </div>
    </article>
  )
}

function SynthesisTable({ rows }: { rows: SynthesisRow[] }) {
  return (
    <div className="mt-10 overflow-x-auto rounded-md border border-line bg-surface">
      <table className="w-full min-w-[800px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-line bg-tint">
            {['Wedge', 'SAM segment', 'Incumbent vuln', 'Pain solved', 'Status'].map(
              (h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-subtle"
                >
                  {h}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-surface' : 'bg-tint/40'}
            >
              <td className="border-t border-line px-4 py-3 align-top text-ink">
                {row.wedge}
              </td>
              <td className="border-t border-line px-4 py-3 align-top text-muted">
                {row.segment}
              </td>
              <td className="border-t border-line px-4 py-3 align-top text-muted">
                {row.vulnerability}
              </td>
              <td className="border-t border-line px-4 py-3 align-top text-muted">
                {row.pain}
              </td>
              <td className="border-t border-line px-4 py-3 align-top">
                <StatusBadge status={row.status} />
                {row.note && (
                  <span className="mt-1 block text-xs text-subtle">
                    {row.note}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StatusBadge({ status }: { status: SynthesisStatus }) {
  const cfg: Record<SynthesisStatus, { emoji: string; label: string; text: string }> = {
    shipped: { emoji: '✅', label: 'Shipped', text: 'text-success' },
    partial: { emoji: '⚠️', label: 'Partial', text: 'text-warning' },
    gap: { emoji: '❌', label: 'Gap', text: 'text-danger' },
  }
  const c = cfg[status]
  return (
    <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${c.text}`}>
      {c.emoji} {c.label}
    </span>
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
