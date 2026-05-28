import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-base font-semibold text-ink"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          foundr<span className="text-subtle">.company</span>
        </Link>
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

export function Footer() {
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
