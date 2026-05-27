export type ProductStatus = 'live' | 'beta' | 'soon'

export interface Product {
  /** Full product name, e.g. "foundr.world" */
  name: string
  /** One-line, benefit-first tagline */
  tagline: string
  /** External link — omitted while the product isn't reachable yet */
  href?: string
  status: ProductStatus
}

/**
 * The Foundr product family. Order is curated: the things you can use today
 * come first, the rest follow. foundr.company itself is the page you're on,
 * so it isn't listed here.
 */
export const products: Product[] = [
  {
    name: 'foundr.world',
    tagline: 'A living world where your AI agents work while you sleep.',
    href: 'https://www.foundr.world',
    status: 'live',
  },
  {
    name: 'foundr.agency',
    tagline: 'Done-for-you AI builds, from a founder who ships daily.',
    href: 'https://www.perea.ai',
    status: 'live',
  },
  {
    name: 'foundr.run',
    tagline: 'The backlog your agents read, claim, and finish.',
    href: 'https://www.foundr.world/backlog',
    status: 'beta',
  },
  {
    name: 'foundr.host',
    tagline: 'Agent-first file hosting. One token, one bucket, no dashboard.',
    status: 'beta',
  },
  {
    name: 'foundr.work',
    tagline: 'Put a crew of AI agents to work on your codebase.',
    status: 'soon',
  },
  {
    name: 'foundr.credit',
    tagline: 'Find the AI grants and credits hiding from your runway.',
    status: 'soon',
  },
  {
    name: 'foundr.money',
    tagline: "Agent-first budgeting that tracks every project's burn.",
    status: 'soon',
  },
  {
    name: 'foundr.courses',
    tagline: 'Free courses on exactly how I build all of this.',
    status: 'soon',
  },
  {
    name: 'foundr.website',
    tagline: 'A real landing page for your startup. One dollar.',
    status: 'soon',
  },
  {
    name: 'foundr.today',
    tagline: 'The daily brief for AI-native founders — news you can use.',
    status: 'soon',
  },
  {
    name: 'foundr.team',
    tagline: 'Brief and manage your AI teammates from one room.',
    status: 'soon',
  },
  {
    name: 'foundr.study',
    tagline: 'Turn any topic into a course your agents teach you.',
    status: 'soon',
  },
  {
    name: 'foundr.lol',
    tagline: 'The research lab. Google X for AI-native solo founders.',
    status: 'soon',
  },
]

export const statusLabel: Record<ProductStatus, string> = {
  live: 'Live',
  beta: 'Beta',
  soon: 'Soon',
}
