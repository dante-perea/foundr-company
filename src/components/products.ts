export type ProductStatus = 'live' | 'beta' | 'soon'

export interface CtaLink {
  label: string
  href: string
}

export interface Step {
  title: string
  body: string
}

export interface Attribute {
  title: string
  body: string
}

export interface Product {
  /** Full product name, e.g. "foundr.world" */
  name: string
  /** URL segment under foundr.company, e.g. "foundr-world" → /foundr-world */
  slug: string
  /** One-line, benefit-first tagline for the hub grid */
  tagline: string
  status: ProductStatus
  /** Where the "Launch / Try / Get notified" CTA goes from inside the product page */
  hero: {
    eyebrow: string
    headline: string
    subhead: string
    primary: CtaLink
    secondary?: CtaLink
  }
  /** "What it is" — one tight paragraph */
  intro: string
  /** Numbered workflow — 3 or 4 short steps */
  steps: Step[]
  /** Key attributes — 3 short benefit bullets */
  attributes: Attribute[]
  /** "Why it exists" — one closing paragraph */
  why: string
}

const BACK: CtaLink = { label: 'Back to all tools', href: '/' }
const notify = (slug: string): CtaLink => ({
  label: 'Get notified',
  href: `mailto:hello@perea.ai?subject=${slug}%20%E2%80%94%20notify%20me`,
})

export const products: Product[] = [
  /* ── LIVE ──────────────────────────────────────────────────────────── */
  {
    name: 'foundr.world',
    slug: 'foundr-world',
    tagline: 'A living world where your AI agents work while you sleep.',
    status: 'live',
    hero: {
      eyebrow: 'Persistent founder universe',
      headline: 'A living world where your agents do the work.',
      subhead:
        'An isometric office you can visit any time. Drop in agents, watch them ship, see what is actually moving.',
      primary: { label: 'Open the world', href: 'https://www.foundr.world' },
      secondary: { label: 'How it works', href: '#how' },
    },
    intro:
      'Foundr.world is a 24/7 founder universe. Every office is a real workspace where agents claim tasks, ship code, and report back. You are never the only one online.',
    steps: [
      { title: 'Move in', body: 'Get an office and pick your starting kit.' },
      { title: 'Drop your agents in', body: 'Connect Claude, Codex, or any crew that speaks MCP.' },
      { title: 'Hand them work', body: 'Send a brief; the agent walks over and gets to it.' },
      { title: 'Walk through the world', body: "Visit other founders' offices. See who is shipping what." },
    ],
    attributes: [
      { title: 'Live, not screenshots', body: 'The state is real. Other agents and founders are in there with you.' },
      { title: 'Agent-native', body: 'MCP-first. Your agents see the same world you do.' },
      { title: 'Always on', body: 'Offices keep working when you close the tab.' },
    ],
    why:
      'Most dashboards die without you. A world keeps moving while you sleep — so when you come back, something happened.',
  },
  {
    name: 'foundr.agency',
    slug: 'foundr-agency',
    tagline: 'Done-for-you AI builds, from a founder who ships daily.',
    status: 'live',
    hero: {
      eyebrow: 'Done-for-you AI builds',
      headline: 'Hire the founder who ships these tools.',
      subhead:
        'Custom AI products for teams that need someone who lives in the agent stack every day. Direct, no agency layer.',
      primary: { label: 'Start a project', href: 'https://www.perea.ai' },
      secondary: { label: 'How I work', href: '#how' },
    },
    intro:
      "If you have watched the foundr.* family take shape, that is the work. Foundr.agency is how I take on outside projects — usually a focused build, sometimes an ongoing advisor seat.",
    steps: [
      { title: 'Brief', body: 'We talk for an hour. You leave with a sketch and a number.' },
      { title: 'Build', body: 'I build in the open against a Vercel preview URL you can click daily.' },
      { title: 'Ship', body: "We ship to your prod or hand off the repo. Either way, it is yours." },
    ],
    attributes: [
      { title: 'One founder, no account exec', body: 'You message me. I reply.' },
      { title: 'Built on these tools', body: 'Same stack as foundr.world — agents, MCP, Next.js, Supabase.' },
      { title: 'Fixed scope, fixed price', body: 'No retainers, no surprises.' },
    ],
    why:
      'Most agencies sell people-hours. I sell working software, shipped by an operator who has been in the chair.',
  },

  /* ── BETA ──────────────────────────────────────────────────────────── */
  {
    name: 'foundr.run',
    slug: 'foundr-run',
    tagline: 'The backlog your agents read, claim, and finish.',
    status: 'beta',
    hero: {
      eyebrow: 'MCP backlog for agent work',
      headline: 'The backlog your agents read, claim, and finish.',
      subhead:
        'A queue both humans and agents speak to over MCP — dedupe, lease, complete. The same engine running foundr.world’s own todo list.',
      primary: { label: 'Open the backlog', href: 'https://www.foundr.world/backlog' },
      secondary: { label: 'How it works', href: '#how' },
    },
    intro:
      'Foundr.run is a Postgres-backed backlog with an MCP server in front of it. Humans drop work. Agents grab work. Nothing rots in a doc.',
    steps: [
      { title: 'Drop', body: 'Humans and agents use the same intake.' },
      { title: 'Sort', body: 'Noise gets compressed before it becomes work.' },
      { title: 'Claim', body: 'Agents take leases, not vibes.' },
      { title: 'Ship', body: 'A real item can become a work mission.' },
    ],
    attributes: [
      { title: 'One backlog, two audiences', body: 'Designed for both human PMs and autonomous agents.' },
      { title: 'OAuth-scoped', body: 'Tokens carry scope. Every action is auditable.' },
      { title: 'Battle-tested', body: "It runs foundr.world's own roadmap." },
    ],
    why:
      'Most task tools assume a human will read every notification. This one assumes an agent will read every item and act on it.',
  },
  {
    name: 'foundr.host',
    slug: 'foundr-host',
    tagline: 'Agent-first file hosting. One token, one bucket, no dashboard.',
    status: 'beta',
    hero: {
      eyebrow: 'Agent-first file hosting',
      headline: 'One token. One bucket. No dashboard.',
      subhead:
        'Drop the MCP server into any agent. It gets a Backblaze B2 bucket and uploads files. That is it.',
      primary: {
        label: 'Get a free token',
        href:
          'https://twitter.com/intent/tweet?text=I%20want%20a%20foundr.host%20token%20%40perea_ai',
      },
      secondary: { label: 'How it works', href: '#how' },
    },
    intro:
      'Foundr.host gives your agent storage without making you log into anything. Free tier is gated by a quote-tweet. Paid tiers add multiple tokens and bigger buckets.',
    steps: [
      { title: 'Tweet', body: 'Quote-tweet the launch and tag @perea_ai. You get a token by reply.' },
      { title: 'Drop in', body: 'Add the MCP server to Claude, Cursor, or any client that speaks MCP.' },
      { title: 'Upload', body: 'Your agent uploads, lists, and reads files. Done.' },
    ],
    attributes: [
      { title: 'Stateless tenancy', body: 'Tokens are signed JWTs. No central token table to babysit.' },
      { title: 'Per-tenant B2 keys', body: 'Every operation scopes to your bucket prefix. Defense in depth.' },
      { title: 'Free for solo, fair for the rest', body: 'Free tier is real. Paid tiers buy bigger buckets, not basic features.' },
    ],
    why:
      "Most file storage assumes a human visits a dashboard to manage buckets. Agents don't visit dashboards. They get a token and a verb.",
  },

  /* ── SOON ──────────────────────────────────────────────────────────── */
  {
    name: 'foundr.work',
    slug: 'foundr-work',
    tagline: 'Put a crew of AI agents to work on your codebase.',
    status: 'soon',
    hero: {
      eyebrow: 'Agent crew for your repo',
      headline: 'Put a crew of agents to work on your codebase.',
      subhead:
        'Brief them once. They open PRs, write tests, review each other, and only ping you when a human call is needed.',
      primary: notify('foundr.work'),
      secondary: BACK,
    },
    intro:
      'Foundr.work is a manager-pattern multi-agent system for software work. One planner picks tasks off your backlog; a fleet of workers takes them through to merged PRs.',
    steps: [
      { title: 'Connect', body: 'Point it at a GitHub repo and a backlog.' },
      { title: 'Brief', body: "Define the team's working agreements once." },
      { title: 'Watch', body: 'Agents claim, work, review, ship. You approve.' },
    ],
    attributes: [
      { title: 'Coordinated, not solo', body: 'Agents talk to each other and divide labor.' },
      { title: 'Human-in-the-loop', body: "Escalates the moment a decision is yours to make." },
      { title: 'Pluggable models', body: 'Bring your own Anthropic, OpenAI, or local.' },
    ],
    why:
      'One agent in your repo is a parlor trick. A crew that ships is a teammate.',
  },
  {
    name: 'foundr.credit',
    slug: 'foundr-credit',
    tagline: 'Find the AI grants and credits hiding from your runway.',
    status: 'soon',
    hero: {
      eyebrow: 'Runway you forgot to ask for',
      headline: 'Find the AI credits hiding from your runway.',
      subhead:
        "A live index of GPU, model, and infra credits — matched to where you are in your build.",
      primary: notify('foundr.credit'),
      secondary: BACK,
    },
    intro:
      'Every provider has a startup program. Every cloud has spare GPUs they are trying to give away. Foundr.credit pulls them into one searchable list, sorted by what you would actually qualify for.',
    steps: [
      { title: 'Profile', body: 'Tell us your stack and your stage.' },
      { title: 'Match', body: 'We rank the programs you can actually win.' },
      { title: 'Apply', body: 'One-click prefilled forms where the provider supports it.' },
    ],
    attributes: [
      { title: 'Fresh', body: 'Programs update weekly, not yearly.' },
      { title: 'Honest', body: 'We say when an offer is dead, not aspirational.' },
      { title: 'Free to read', body: 'Listings are free. Premium adds application help.' },
    ],
    why:
      'Most credit lists are a blog post from 18 months ago. The good ones expire, the dead ones linger. We just keep it current.',
  },
  {
    name: 'foundr.money',
    slug: 'foundr-money',
    tagline: "Agent-first budgeting that tracks every project's burn.",
    status: 'soon',
    hero: {
      eyebrow: 'Expense tracking for solo builders',
      headline: 'Know what each project is actually burning.',
      subhead:
        'Agent-first budgeting that pulls from your cards and credits, slices by project, and tells you when one is bleeding.',
      primary: notify('foundr.money'),
      secondary: BACK,
    },
    intro:
      'If you build six projects, you have six budgets. Foundr.money sees every charge, asks the agent which project it belongs to, and gives you a per-project P&L without spreadsheet work.',
    steps: [
      { title: 'Connect', body: 'Cards, banks, Stripe, OpenAI, Anthropic, Vercel, AWS.' },
      { title: 'Tag', body: 'The agent suggests a project for each charge. You confirm or override.' },
      { title: 'Watch', body: 'See burn per project, per month, in one page.' },
    ],
    attributes: [
      { title: 'Project-first, not category-first', body: 'Built for the way solo founders actually slice.' },
      { title: 'Agent-aware', body: "Knows that the $47 OpenAI charge came from your demo bot." },
      { title: 'Alerts that fire once', body: 'When a project doubles, you hear it. Not at every charge.' },
    ],
    why:
      "Solo founders don't have CFOs. They have one bank statement and four products. The math should add up automatically.",
  },
  {
    name: 'foundr.courses',
    slug: 'foundr-courses',
    tagline: 'Free courses on exactly how I build all of this.',
    status: 'soon',
    hero: {
      eyebrow: 'Free courses from a shipping founder',
      headline: 'Exactly how I build all of this.',
      subhead:
        'Short, working courses on the patterns behind foundr.world, foundr.host, and the rest. No theory.',
      primary: notify('foundr.courses'),
      secondary: BACK,
    },
    intro:
      'Foundr.courses are short, opinionated walkthroughs of the exact patterns I use across the foundr.* family. Each course ends with a repo you can fork.',
    steps: [
      { title: 'Pick a course', body: 'Each is one build, end-to-end.' },
      { title: 'Watch + read', body: 'Video, transcript, and the actual repo, side by side.' },
      { title: 'Ship your own', body: 'Fork, swap the brand, deploy.' },
    ],
    attributes: [
      { title: 'Free', body: 'All courses, fully open.' },
      { title: 'Real-world', body: 'Built from production code, not toy examples.' },
      { title: 'Always current', body: 'When the stack moves, the course updates.' },
    ],
    why:
      'Most courses age out within months. These are tied to a live product I am still shipping, so when the pattern changes the course changes.',
  },
  {
    name: 'foundr.website',
    slug: 'foundr-website',
    tagline: 'A real landing page for your startup. One dollar.',
    status: 'soon',
    hero: {
      eyebrow: 'A real landing page, fast',
      headline: 'A landing page for your startup. One dollar.',
      subhead:
        'Give us a paragraph and a logo. We give you a polished, mobile-friendly landing on your own domain.',
      primary: notify('foundr.website'),
      secondary: BACK,
    },
    intro:
      'Foundr.website turns one paragraph about your idea into a real landing page in minutes. Generated by an agent, polished by a human review pass, deployed on Vercel under your domain.',
    steps: [
      { title: 'Describe', body: 'One paragraph about what you are building and who it is for.' },
      { title: 'Choose a tone', body: 'Pick from a handful of polished styles.' },
      { title: 'Ship', body: 'We deploy. You point your domain. Done.' },
    ],
    attributes: [
      { title: 'One dollar', body: 'No subscription. You own the repo.' },
      { title: 'Real code', body: 'Next.js + Tailwind. Edit it like any project.' },
      { title: 'On your domain', body: "We don't squat on subdomains." },
    ],
    why:
      'Most no-code site builders trap you in their dashboard. We hand you a real repo and a real deploy.',
  },
  {
    name: 'foundr.today',
    slug: 'foundr-today',
    tagline: 'The daily brief for AI-native founders — news you can use.',
    status: 'soon',
    hero: {
      eyebrow: 'Daily brief for AI-native founders',
      headline: 'The news you can act on, in five minutes a day.',
      subhead:
        'We read what the rest of the AI press misses — the tools, releases, and patterns solo founders should know — and distill it into a brief you finish over coffee.',
      primary: notify('foundr.today'),
      secondary: BACK,
    },
    intro:
      'Foundr.today is a daily, hand-curated brief for AI-native solo founders. Each issue: one big release, three tools to try, one pattern to steal.',
    steps: [
      { title: 'Subscribe', body: 'Free, daily, weekdays only.' },
      { title: 'Read', body: 'Five minutes, max.' },
      { title: 'Ship', body: 'Each issue ends with one thing you could build today.' },
    ],
    attributes: [
      { title: 'Curated, not aggregated', body: 'A human picks, not an RSS bot.' },
      { title: 'Solo-founder-shaped', body: 'What helps you ship alone, not what helps enterprises buy.' },
      { title: 'Action-oriented', body: 'Every issue ends with a TODO you can finish that day.' },
    ],
    why:
      'Most AI newsletters are model-launch press releases stitched together. This one cares about what a solo founder can actually do today.',
  },
  {
    name: 'foundr.team',
    slug: 'foundr-team',
    tagline: 'Brief and manage your AI teammates from one room.',
    status: 'soon',
    hero: {
      eyebrow: 'Agent roster for solo founders',
      headline: 'Brief, hire, and review your AI teammates.',
      subhead:
        'One place to give each agent its role, its tools, its budget, and a weekly check-in on what it actually did.',
      primary: notify('foundr.team'),
      secondary: BACK,
    },
    intro:
      'Foundr.team treats each agent like a teammate: a job description, a budget, a calendar of work, and a weekly retro. So you actually know who did what.',
    steps: [
      { title: 'Define the role', body: 'Title, scope, tools, escalation rules.' },
      { title: 'Hire', body: 'Spin the agent up. It introduces itself.' },
      { title: 'Review', body: 'Weekly retro shows what shipped and what stalled.' },
    ],
    attributes: [
      { title: 'One source of truth', body: "Every agent's brief lives in one place." },
      { title: 'Budget-aware', body: 'Caps spend per agent, per week.' },
      { title: 'Retro-driven', body: 'Improves prompts based on what worked.' },
    ],
    why:
      "Most agent setups are buried in YAML across five repos. You can't manage what you can't see in one view.",
  },
  {
    name: 'foundr.study',
    slug: 'foundr-study',
    tagline: 'Turn any topic into a course your agents teach you.',
    status: 'soon',
    hero: {
      eyebrow: 'Agents teach you any topic',
      headline: 'Turn any topic into a course your agents teach you.',
      subhead:
        'Paste a syllabus, a paper, or a repo. Foundr.study generates the lessons and walks you through them, agent-led.',
      primary: notify('foundr.study'),
      secondary: BACK,
    },
    intro:
      'Foundr.study takes any source — a paper, a repo, a docs site — and structures it into a course an agent walks you through, with quizzes and code labs.',
    steps: [
      { title: 'Drop in a source', body: 'PDF, repo, docs URL, or just text.' },
      { title: 'Pick a depth', body: 'Skim, learn, or build.' },
      { title: 'Learn', body: 'An agent walks you lesson by lesson, with checks.' },
    ],
    attributes: [
      { title: 'Source-of-truth', body: 'The agent stays grounded in what you gave it.' },
      { title: 'Adaptive', body: "Tracks what you got and what you didn't." },
      { title: 'Buildable', body: 'Every course ends with a working artifact.' },
    ],
    why:
      'Most online courses are static videos. The same topic, learned with an agent, fits your pace and your gaps.',
  },
  {
    name: 'foundr.lol',
    slug: 'foundr-lol',
    tagline: 'The research lab. Google X for AI-native solo founders.',
    status: 'soon',
    hero: {
      eyebrow: 'Google X for AI-native founders',
      headline: 'The research lab. Where the weird stuff lives.',
      subhead:
        'Half-finished experiments, broken first drafts, ideas too strange for a real product page. If it works, it graduates here first.',
      primary: notify('foundr.lol'),
      secondary: BACK,
    },
    intro:
      'Foundr.lol is the open research branch of the foundr.* family. Experiments live here before they earn their own .domain. Some graduate. Some die. All of them are weird.',
    steps: [
      { title: 'Browse', body: 'A public log of every experiment, in progress and dead.' },
      { title: 'Vote', body: 'Tell us which experiments to push further.' },
      { title: 'Steal', body: 'Every experiment is open source the day it lands.' },
    ],
    attributes: [
      { title: 'Open by default', body: 'Failures included.' },
      { title: 'Founder-shaped', body: 'Built around solo problems, not lab tickets.' },
      { title: 'Always live', body: "There's always something to look at." },
    ],
    why:
      'The interesting stuff happens before the product page exists. This is where you watch it happen.',
  },
]

export const statusLabel: Record<ProductStatus, string> = {
  live: 'Live',
  beta: 'Beta',
  soon: 'Soon',
}

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
