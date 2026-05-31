// Shared presentational primitives for the foundr.company-branded auth surface.
// Server-renderable (no client hooks). foundr.company brand hex lives here ONCE.
//
//   accent #3b82f6 · accent-hover #2563eb · accent-soft #eff6ff
//   ink #111827 · muted #475569 · subtle #94a3b8 · line #e2e8f0 · line-strong #cbd5e1
//   surface #ffffff · tint #f8fafc · radius 8px
//   fonts: Poppins (display) · Roboto (body) · Inconsolata (mono)

import type { CSSProperties } from 'react'

const ACCENT = '#3b82f6'
const ACCENT_HOVER = '#2563eb'
const INK = '#111827'
const MUTED = '#475569'
const SUBTLE = '#94a3b8'

const display: CSSProperties = { fontFamily: 'var(--font-poppins), sans-serif' }
const body: CSSProperties = { fontFamily: 'var(--font-roboto), sans-serif' }

// The testimonial shown on the blue panel (same on sign-in + sign-up — the brand constant).
const TESTIMONIAL = '“I sign in once and my agents run the whole stack. It feels like one product, not five.”'
const ATTR_NAME = 'A solo founder'
const ATTR_SUB = 'running on foundr'

function XLogo({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

/** `● foundr.company` — 10px accent-blue dot · "foundr" ink Poppins semibold · ".company" subtle. */
export function Wordmark() {
  return (
    <div style={display} className="flex items-center gap-2 text-[15px] font-semibold text-[#111827]">
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ACCENT }} />
      foundr<span style={{ color: SUBTLE }}>.company</span>
    </div>
  )
}

/** White `● foundr.company` wordmark for the blue panel. */
function WordmarkOnColor() {
  return (
    <div style={display} className="flex items-center gap-2 text-[15px] font-semibold text-white">
      <span className="h-2.5 w-2.5 rounded-full bg-white" />
      foundr<span className="text-white/65">.company</span>
    </div>
  )
}

/** Small circular avatar monogram (generic person glyph) for the testimonial attribution. */
function AvatarMonogram() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      </svg>
    </span>
  )
}

/** Accent-blue full-width "Continue with X" button. Owns the X glyph. */
export function ContinueWithXButton({
  busy = false,
  disabled = false,
  onClick,
  label,
}: {
  busy?: boolean
  disabled?: boolean
  onClick?: () => void
  label?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={display}
      className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#3b82f6] px-4 py-3 text-[15px] font-medium text-white transition hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-60"
    >
      <XLogo />
      {busy ? 'Redirecting…' : label ?? 'Continue with X'}
    </button>
  )
}

/**
 * Auth split-hero (Variant B → Q2). Left: full blue gradient panel with the
 * foundr testimonial (accent rule + avatar) — desktop only. Right: white form
 * panel. On mobile the blue panel is hidden and a dark wordmark heads the form.
 * The testimonial is the same on sign-in + sign-up; only the form copy differs.
 */
export function AuthSplitLayout({
  formHeading,
  formSub,
  children,
}: {
  formHeading: string
  formSub: string
  children: React.ReactNode
}) {
  return (
    <main style={{ ...body, color: INK }} className="grid min-h-screen md:grid-cols-2">
      {/* Left: blue testimonial panel — desktop only */}
      <div className="relative hidden flex-col justify-between bg-gradient-to-b from-[#3b82f6] to-[#1e40af] px-14 py-10 md:flex">
        <WordmarkOnColor />
        <div className="max-w-[460px] border-l-2 border-white/40 pl-6">
          <p style={display} className="text-[28px] font-medium leading-[1.3] text-white">{TESTIMONIAL}</p>
          <div className="mt-6 flex items-center gap-3">
            <AvatarMonogram />
            <div className="text-[14px]">
              <div className="font-semibold text-white">{ATTR_NAME}</div>
              <div className="text-white/70">{ATTR_SUB}</div>
            </div>
          </div>
        </div>
        <span className="text-[12px] text-white/65">by Perea</span>
      </div>

      {/* Right: form panel */}
      <div className="flex flex-col items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-[340px]">
          <div className="mb-9 md:hidden"><Wordmark /></div>
          <h1 style={display} className="text-[26px] font-semibold leading-tight">{formHeading}</h1>
          <p className="mt-1.5 text-[14px]" style={{ color: MUTED }}>{formSub}</p>
          <div className="mt-7">{children}</div>
        </div>
      </div>
    </main>
  )
}

export { ACCENT, ACCENT_HOVER, INK, MUTED, SUBTLE }
