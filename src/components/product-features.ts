/**
 * Research-backed `/features` content for every foundr.* product.
 *
 * Each entry was synthesized from a parallel Exa research pass — see commit
 * history. The shape is identical across products so the dynamic features
 * route can render them all from one template.
 *
 * Pricing model is uniform across the family:
 *   - **Free** — unlocked by quote-tweeting @perea_ai → access token
 *   - **Solo** — small monthly fee, MCP token, real working limits
 *   - **Pro** — bigger monthly fee, multi-token, team-shareable
 *
 * Every tier is reachable through an MCP server with a bearer token — no
 * product on this list requires a dashboard to use.
 */

export interface PricingTier {
  name: string
  /** Display price: '$0', '$9 / mo', '$1 once', etc. */
  price: string
  /** Small tag rendered above the price (e.g. "quote-tweet @perea_ai") */
  badge?: string
  /** One-line positioning under the price */
  blurb: string
  /** Bullets — what's actually included */
  includes: string[]
  cta: { label: string; href: string }
  /** Visually highlight (usually the Solo tier) */
  highlight?: boolean
}

export interface Competitor {
  name: string
  positioning: string
  pricing: string
  weakness: string
  url?: string
}

export interface FeatureGroup {
  /** 'Core', 'Agentic-first (MCP + token)', 'Solo-founder-shaped' */
  title: string
  items: string[]
}

export interface McpTool {
  name: string
  desc: string
}

export interface FeatureBundle {
  /** One- to two-sentence positioning for the top of the features page */
  positioning: string
  pricing: PricingTier[]
  featureGroups: FeatureGroup[]
  mcp: McpTool[]
  differentiation: string[]
  competitors: Competitor[]
  cta: {
    headline: string
    body: string
    primary: { label: string; href: string }
    secondary?: { label: string; href: string }
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────

const tweet = (text: string) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`

const mailto = (subject: string) =>
  `mailto:hello@perea.ai?subject=${encodeURIComponent(subject)}`

const QT = 'quote-tweet @perea_ai'

// ── Feature bundles by product slug ───────────────────────────────────────

export const featuresBySlug: Record<string, FeatureBundle> = {
  'foundr-world': {
    positioning:
      'A persistent isometric world where every founder gets an office and the residents are AI agents that ship while you sleep. Free to join — no tiers, no subscription. The in-world economy runs on credits.',
    pricing: [
      {
        name: 'Join free',
        price: '$0',
        badge: QT,
        blurb: 'Everyone gets an office. No tiers, no card, no subscription.',
        includes: [
          'Your office, avatar, and public room — yours forever',
          'Up to 2 concurrent agents on the starter compute pool',
          '200 starter credits',
          'Earn more credits by shipping, hosting visitors, and quote-tweeting',
          'Public MCP read access + basic activity feed',
        ],
        cta: { label: 'Join free', href: tweet('I want to join foundr.world — @perea_ai') },
      },
      {
        name: 'Starter pack',
        price: '$5 once',
        blurb: '500 credits. Furniture, agent slots, decor — paid for, not subscribed to.',
        includes: [
          '500 credits',
          'Roughly: a fully decorated office + one premium agent slot for a month',
          'No expiry, no auto-renew',
          'Credits work across the foundr.* family',
        ],
        cta: { label: 'Buy 500 credits', href: mailto('foundr.world — Starter credit pack ($5)') },
        highlight: true,
      },
      {
        name: 'Builder pack',
        price: '$20 once',
        blurb: '3,000 credits (500 bonus). For operators running real fleets.',
        includes: [
          '3,000 credits — 500-credit bonus over Starter',
          'Premium agent compute for long-running tasks',
          'Room-expansion tiles + custom avatar skins',
          'Public-room boost (priority placement)',
          'Buy when you need more — never a recurring charge',
        ],
        cta: { label: 'Buy 3,000 credits', href: mailto('foundr.world — Builder credit pack ($20)') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Persistent isometric office per founder, world-coordinate addressable',
          'Decoratable workspace — drag furniture, rugs, walls; auto-saves',
          'Walk-through visitor mode — any signed-in founder can drop in',
          'Avatar identity tied to your handle, visible across the family',
          'Live activity feed in every room — what each agent is doing right now',
          'Public room URL (foundr.world/@handle) screenshottable for social',
          '24h replay timeline',
          'Live presence indicators',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'MCP server at mcp.foundr.world with bearer-token auth',
          'Spawn agents, walk, claim tasks, visit other offices — all over MCP',
          'IDE hooks: Claude Code / Cursor tool calls visibly relay into the office',
          'Cross-office agent visits — inspect what peers are shipping',
          'One token grants every tier — no tier is dashboard-locked',
          'One token works across the whole foundr.* family',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Quote-tweet → free token, no card, no waitlist',
          'No seats, no SSO upsell on any tier',
          'Public office acts as a portfolio surface — visitors are a feature',
          'Built-in agent_backlog — agents claim work without you wiring a PM',
          'Single shared identity across the foundr.* family',
        ],
      },
    ],
    mcp: [
      { name: 'world_spawn_agent', desc: 'Instantiate an agent in your office' },
      { name: 'world_walk_to', desc: 'Move avatar to coordinates' },
      { name: 'world_claim_task', desc: 'Agent picks the next backlog item' },
      { name: 'world_visit_office', desc: "Visit another founder's office" },
      { name: 'world_place_item', desc: 'Drop furniture programmatically' },
      { name: 'world_say / whisper', desc: 'Speak in-world or DM another resident' },
    ],
    differentiation: [
      'Agents ship real work, not chat. Other worlds simulate; ours claim tasks and post results.',
      'MCP-first control plane. Every action reachable from any client with a bearer token — no dashboard required.',
      'Free to join. No subscription, no tiers, no card. Everyone gets an office.',
      'Credits, not seats. The in-world economy runs on credits you earn (by shipping) or buy in packs — never per-user, never recurring.',
      'Public-by-default rooms turn the workspace into a marketing surface — the opposite of closed team rooms.',
    ],
    competitors: [
      { name: 'Inworld AI', positioning: 'Conversational AI for embodied NPCs', pricing: 'Free + $25 / mo+', weakness: 'SDK for game studios, not a founder office', url: 'https://inworld.ai/pricing' },
      { name: 'Convai', positioning: '3D NPCs for game engines', pricing: 'Free + $9 / mo+', weakness: 'Credit-metered NPC toolkit, not work-claiming', url: 'https://convai.com/pricing' },
      { name: 'Gather Town', positioning: 'Spatial 2D office for human teams', pricing: '$15 / seat / mo (no free)', weakness: 'Per-seat humans; agents aren’t residents', url: 'https://www.gather.town/pricing' },
      { name: 'Replit Agent', positioning: 'Cloud IDE with autonomous agent', pricing: '$20 / mo + credits', weakness: 'Solo file-tree workspace; no shared world', url: 'https://replit.com/pricing' },
      { name: 'AI Town (a16z)', positioning: 'Open-source agent town demo', pricing: 'Free self-host', weakness: 'Research framework, no hosted product', url: 'https://github.com/a16z-infra/ai-town' },
    ],
    cta: {
      headline: 'Get your first office',
      body: 'Quote-tweet @perea_ai for a free token. Your agents will be working in your office within five minutes.',
      primary: { label: 'Get a free token', href: tweet('I want a foundr.world access token — @perea_ai') },
      secondary: { label: 'Open foundr.world', href: 'https://www.foundr.world' },
    },
  },

  'foundr-agency': {
    positioning:
      'Fixed-scope AI builds shipped by one operator, in the open, against a Vercel preview URL you can click every day. Pricing is published, not quoted. You own the code on day one.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: '30-min DM, sketch, and a fixed-price estimate within 48 hours.',
        includes: [
          '30-min discovery DM with the operator',
          'Written scope sketch within 48 hours',
          'Fixed-price estimate, no obligation',
          'Access to the public foundr-stack reference repo',
        ],
        cta: { label: 'Book the free scope DM', href: tweet('I want a foundr.agency scope DM — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$8k–$15k once',
        blurb: 'One productized AI build, 4–6 weeks, fixed scope, shipped to prod.',
        includes: [
          'Fixed-scope build, 4–6 weeks',
          'Deployed on your Vercel + Supabase + Clerk',
          'MCP backlog + repo access during the build',
          '50 / 50 deposit + on delivery',
          '14-day post-launch bug-fix window',
          'Full code + infra handover, no lock-in',
        ],
        cta: { label: 'Start the scope DM', href: tweet('I want to scope a foundr.agency build — @perea_ai') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$6,500 / mo',
        blurb: 'Advisor seat with weekly shipping. 3-month min, then month-to-month.',
        includes: [
          'Advisor seat + weekly shipping cadence',
          'Async DM (no standing meetings)',
          'Agent-authored PRs you can review',
          'Eval-harness maintenance',
          'Priority on new features',
          'No retainer lock — month-to-month after the first three',
        ],
        cta: { label: 'Apply for an advisor seat', href: mailto('foundr.agency — Pro advisor seat') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Fixed-scope AI product build (MVP → production, 4–6 weeks)',
          'Agentic feature drop-in to an existing app (RAG, agents, MCP, evals)',
          'Founder-stack greenfield (Next.js 16 + Supabase + Clerk + Vercel)',
          'AI architecture review + spec doc (1-week paid discovery, credited)',
          'Repo handoff + runbook + 14-day bug-fix window',
          'Public Vercel preview URL on every commit',
          'Async-first delivery — Slack/X DM, weekly Loom, no standing meetings',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'MCP backlog access — your Claude Code reads every task in flight',
          'MCP repo read-access — ask your own agent "what did Dante ship today"',
          'Agent-authored PRs with diff summaries',
          'Daily preview URL auto-deployed',
          'Eval harness shipped with the build, not bolted on',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Direct DM access — no ticketing system, no account exec',
          '24h scope doc turnaround after the free consult',
          '50 / 50 deposit + on-delivery — no retainer required',
          'Full ownership of code + infra on day 1',
          'No managed-hosting trap — revoke access anytime',
        ],
      },
    ],
    mcp: [
      { name: 'agency_backlog_list', desc: 'Read every task in flight on your build' },
      { name: 'agency_pr_today', desc: "What the agent shipped today" },
      { name: 'agency_preview_url', desc: 'Current Vercel preview link' },
      { name: 'agency_evals_run', desc: 'Kick off the eval suite on the latest build' },
      { name: 'agency_handoff', desc: 'Emit the repo + infra handoff bundle' },
    ],
    differentiation: [
      'One operator ships, no agency layer. Same person who wrote your code answers your DMs.',
      'Public pricing — $8–15k fixed for Solo, $6.5k / mo for Pro. No "contact us."',
      'Client gets MCP access to the project\'s backlog + repo during the build. No competitor offers this.',
      'Built on the foundr.* stack. We eat our own cooking; the reference implementation is public.',
      'Quote-tweet → free 48-hour scope doc. Filters for AI-native founders already in the conversation.',
    ],
    competitors: [
      { name: 'Pavel Gayvoronskiy', positioning: 'Solo Claude Code builder', pricing: 'MVP from $5k', weakness: 'Telegram-first, 2 slots / mo cap', url: 'https://pavel.build' },
      { name: 'AI-Native Agency', positioning: 'Productized AI-ops builds', pricing: '$15k / $30k / $60k+', weakness: 'Enterprise-shaped (HIPAA, SOC2)', url: 'https://ai-native-agency.com/pricing' },
      { name: 'Anfloy', positioning: 'Flat-fee AI partnerships', pricing: '$3.5k–$12.5k / mo', weakness: 'Retainer-only, no productized build', url: 'https://www.anfloy.com/pricing' },
      { name: 'Designjoy', positioning: 'Design subscription (reference model)', pricing: '$4,995 / mo', weakness: 'Design-only; proves the model, not the AI build vertical', url: 'https://designjoy.co' },
      { name: 'Toporkov', positioning: 'Solo AI dev', pricing: 'MVPs from $2k', weakness: 'Ultra-low prices, no recurring tier', url: 'https://toporkov.lol' },
    ],
    cta: {
      headline: 'Book a free 30-min scope DM',
      body: 'Quote-tweet @perea_ai with one paragraph about what you want to ship. You get a sketch and a fixed-price estimate within 48 hours.',
      primary: { label: 'Book the free scope DM', href: tweet('I want a foundr.agency scope DM — @perea_ai') },
      secondary: { label: 'Open perea.ai', href: 'https://www.perea.ai' },
    },
  },

  'foundr-run': {
    positioning:
      'An MCP-native backlog where humans and agents share the same intake. Agents take leases instead of vibes. Pricing is per-workspace, not per-seat — so a solo founder running five projects with twenty agents pays once.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'One workspace, one agent, real lease semantics.',
        includes: [
          '1 workspace, 100 items',
          '1 agent token',
          '7-day activity history',
          'Community support',
        ],
        cta: { label: 'Get a free token', href: tweet('I want a foundr.run access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$9 / mo',
        blurb: 'Five projects, twenty-five hundred items, real headroom.',
        includes: [
          '5 workspaces, 2,500 items',
          '5 agent tokens',
          '90-day history',
          'Webhooks + JSON / CSV / markdown export',
          'Email support',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.run — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$29 / mo',
        blurb: 'Unlimited workspaces, 25k items, team-shareable.',
        includes: [
          'Unlimited workspaces, 25,000 items',
          '25 agent tokens',
          'Unlimited history',
          'Shared workspaces (invite free collaborators)',
          'SSO-lite + priority support',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.run — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Items with title, markdown body, state (open / claimed / done / blocked / cancelled), priority',
          'Labels, project scoping, due dates, parent / sub-items',
          'Comments + activity log per item, actor-attributed',
          'Full-text + tag filter search, saved views',
          'REST API + webhooks',
          'Export (JSON, CSV, markdown bundle)',
          'Web UI for human triage at foundr.run/backlog',
          'Realtime updates over SSE',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'backlog_note (title-only) and backlog_create (full) — both dedupe-idempotent',
          'backlog_list / backlog_get / backlog_get_top_priority with filters',
          'backlog_claim (TTL lease) → heartbeat → complete / release',
          'backlog_comment for agent progress notes, auto-attributed to the token',
          'OAuth2 registration at /register, scope mcp:backlog, per-workspace, revocable',
          'Crash-recovery — unheartbeated leases auto-release so another agent picks up',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Multiple workspaces per founder (one per side project), free to spin up',
          'Zero-config bootstrap: `claude mcp add foundr-run …` and go',
          'No 2-seat minimum, no "invite a teammate to unlock"',
          'One-click export of any workspace as JSON',
          '@perea_ai integration — quote-tweet creates the workspace',
        ],
      },
    ],
    mcp: [
      { name: 'backlog_note', desc: 'Title-only quick drop (dedupe-idempotent)' },
      { name: 'backlog_create', desc: 'Full-fidelity item creation' },
      { name: 'backlog_list / get / get_top_priority', desc: 'Reads with filters' },
      { name: 'backlog_claim / heartbeat / complete / release', desc: 'Lease lifecycle' },
      { name: 'backlog_comment', desc: 'Agent progress note, auto-attributed' },
    ],
    differentiation: [
      'MCP-first, not MCP-as-feature. The MCP server IS the product surface; the web UI is the secondary view.',
      'Agent-claim leases with heartbeats. First-class lease / heartbeat / complete semantics.',
      'OAuth2-scoped agent tokens. One human, many revocable machine identities.',
      'Per-workspace pricing, not per-seat. The founder is the only seat.',
      'Dedupe at the protocol layer — `backlog_note` returning DUPLICATE is success, not failure.',
    ],
    competitors: [
      { name: 'Linear', positioning: 'Per-seat issue tracker for product teams', pricing: '$10–$16 / seat / mo', weakness: 'Per-seat math punishes one human / many agents; GraphQL not MCP', url: 'https://linear.app/pricing' },
      { name: 'GitHub Projects', positioning: 'Issue board welded to repos', pricing: 'Free + $4 / seat / mo', weakness: 'No MCP server, no claim leases', url: 'https://github.com/features/issues' },
      { name: 'Plane', positioning: 'Open-source Jira / Linear alt', pricing: '$6–$13 / seat / mo', weakness: 'Per-seat + AI credits; built for teams not agent fleets', url: 'https://plane.so/pricing' },
      { name: 'Asana', positioning: 'Structured work management', pricing: '$11+ / seat (2-seat min)', weakness: '2-seat floor explicitly excludes solo', url: 'https://asana.com/pricing' },
      { name: 'Height', positioning: 'Was "autonomous PM" for teams', pricing: 'Shut down Sep 2025', weakness: 'Instructive — AI PM for teams couldn\'t beat Linear', url: 'https://www.creativerly.com/height-app-is-shutting-down/' },
    ],
    cta: {
      headline: 'Spin up your first backlog',
      body: 'Quote-tweet @perea_ai for a token. Then `claude mcp add foundr-run https://www.foundr.run/api/mcp` — your agents start dropping items in the next message.',
      primary: { label: 'Get a free token', href: tweet('I want a foundr.run access token — @perea_ai') },
      secondary: { label: 'Try the live backlog', href: 'https://www.foundr.world/backlog' },
    },
  },

  'foundr-host': {
    positioning:
      'MCP-native object storage. One token, one bucket, no dashboard, no IAM. Your agent uploads files and gets URLs. That is the whole product.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'A real bucket your agent can write to. No card.',
        includes: [
          '1 GB storage',
          '3 GB egress / mo',
          '1 token',
          '10,000 ops / mo',
        ],
        cta: { label: 'Get a free token', href: tweet('I want a foundr.host access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$9 / mo',
        blurb: 'Five per-project tokens, real working limits.',
        includes: [
          '10 GB storage',
          '30 GB egress / mo',
          '5 tokens (one per project)',
          '100k ops / mo',
          '7-day presigned URL TTL',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.host — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$29 / mo',
        blurb: 'Hundreds of GB, custom domain, team-shareable.',
        includes: [
          '100 GB storage',
          '300 GB egress / mo',
          'Unlimited tokens, team-shared buckets',
          'Custom domain on public URLs',
          '30-day presigned URL TTL',
          '1M ops / mo',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.host — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Upload (auto MIME, multipart for >5MB)',
          'Download by key',
          'List objects with prefix + pagination',
          'Delete + batch delete',
          'Generate presigned GET URL (time-bounded)',
          'Generate presigned PUT URL (browser direct-upload)',
          'Object metadata (size, contentType, lastModified, ETag)',
          'Public-share toggle per object (CDN-cacheable URL)',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'host_upload / host_list / host_get_url / host_delete / host_stat / host_quota',
          'Stateless JWT tenancy — no central token table to babysit',
          'Per-tenant Backblaze B2 keys, 15-min validity, 14-min cache',
          'One-line install: `claude mcp add --transport http foundr-host …`',
          'Agent never sees a long-lived AWS-style root credential',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Multi-project namespacing inside one token (`key = "project-a/screenshot.png"`)',
          'Quote-tweet → token flow, no email required',
          'host_export dumps a manifest + presigned URLs for full migration off',
          'Zero S3 console — tenant never sees the underlying B2 keys',
          'Single shared token across foundr.* MCPs',
        ],
      },
    ],
    mcp: [
      { name: 'host_upload', desc: '{path|bytes, key?, contentType?} → URL' },
      { name: 'host_list', desc: '{prefix?, limit?, cursor?} → object summaries' },
      { name: 'host_get_url', desc: '{key, expiresIn?, mode: "get"|"put"} → presigned URL' },
      { name: 'host_delete', desc: '{key | keys[]} → confirmation' },
      { name: 'host_stat', desc: '{key} → metadata + size + ETag (cheap HEAD)' },
      { name: 'host_quota', desc: '{} → bytes used, bytes remaining, tier' },
    ],
    differentiation: [
      'MCP-native — storage exposed as MCP tools, not REST docs. Your agent never sees an SDK.',
      'No dashboard, ever. No signup form, no console, no IAM tabs. Token in, files out.',
      'Stateless JWT tenancy. Tokens self-describe tenant; revoke by signing-key rotation.',
      'Per-tenant B2 keys, 15-min validity. Bounded blast radius; no long-lived credentials.',
      'One token across the foundr.* family. Same auth covers backlog, host, and the rest.',
    ],
    competitors: [
      { name: 'AWS S3', positioning: 'Incumbent S3-compatible storage', pricing: '$0.023 / GB-mo + $0.09 / GB egress', weakness: 'IAM, console, surprise egress bills', url: 'https://aws.amazon.com/s3/pricing/' },
      { name: 'Cloudflare R2', positioning: 'S3-compatible, zero egress', pricing: '$0.015 / GB-mo + $0 egress', weakness: 'Requires Cloudflare account, no MCP', url: 'https://developers.cloudflare.com/r2/pricing/' },
      { name: 'Backblaze B2', positioning: 'Cheapest single-tier hot storage', pricing: '$0.006 / GB-mo + 3x free egress', weakness: 'Dashboard onboarding (we wrap this)', url: 'https://www.backblaze.com/cloud-storage/pricing' },
      { name: 'Vercel Blob', positioning: 'DX-friendly storage for Vercel apps', pricing: '$0.023 / GB-mo + $0.05 / GB transfer', weakness: 'Tied to Vercel project, not arbitrary tenants', url: 'https://vercel.com/docs/vercel-blob/usage-and-pricing' },
      { name: 'Pinata', positioning: 'Content-addressed storage + gateway', pricing: '$20 / mo for 1TB', weakness: 'IPFS CID is overkill for transient agent files', url: 'https://pinata.cloud/pricing' },
    ],
    cta: {
      headline: 'Get your free token',
      body: 'Quote-tweet @perea_ai. You get a JWT in reply. Add the MCP server to Claude or Cursor — your agent uploads files in the next message.',
      primary: { label: 'Get a free token', href: tweet('I want a foundr.host access token — @perea_ai') },
      secondary: { label: 'Read the architecture', href: '/foundr-host' },
    },
  },

  'foundr-work': {
    positioning:
      'An opinionated declarative framework. Write a YAML spec; the foundr-work npm package + skills for Claude Code or Codex compile it into a stateful agent — a Foundr Worker — that runs long-running tasks against your product requirements. OSS at the core, paid for the hosted runtime.',
    pricing: [
      {
        name: 'OSS',
        price: '$0 · MIT',
        badge: 'npm install foundr-work',
        blurb: 'The framework, the skills, the CLI. Free forever, BYO LLM key.',
        includes: [
          '`npm install foundr-work` — full framework',
          'Skill bundle for Claude Code + Codex',
          'CLI: compile, run, replay, diff',
          'BYO LLM key (Anthropic, OpenAI, OpenRouter, local)',
          'Run workers anywhere — no account, no signup',
          'MIT license, full source on GitHub',
        ],
        cta: { label: 'npm install foundr-work', href: 'https://www.npmjs.com/package/foundr-work' },
      },
      {
        name: 'Hosted Solo',
        price: '$29 / mo',
        blurb: 'Managed runtime, durable execution, replay — for workers you want to forget about.',
        includes: [
          '3 hosted workers, always-on',
          'Durable execution + automatic retries',
          'Full run history + step-level replay',
          'foundr.team integration (workers as roster members)',
          'Email support',
        ],
        cta: { label: 'Notify me about Hosted Solo', href: mailto('foundr.work — Hosted Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Hosted Pro',
        price: '$199 / mo',
        blurb: 'Unlimited workers, team seats, audit log, SLA.',
        includes: [
          'Unlimited hosted workers',
          '5 team seats ($20 / seat after)',
          'Audit log + SSO-lite',
          'Priority worker pool + SLA',
          'Worker observability dashboards',
        ],
        cta: { label: 'Notify me about Hosted Pro', href: mailto('foundr.work — Hosted Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core (declarative framework)',
        items: [
          'YAML worker spec — declare objective, tools, state shape, escalation rules',
          'foundr-work CLI — `compile`, `run`, `replay`, `diff`',
          'Skill bundle for Claude Code and Codex (drop into your config)',
          'State persistence across runs, restarts, and model swaps',
          'Spec-hash versioning — workers are content-addressed',
          'Long-running, resumable tasks (survive model timeouts)',
          'Local execution OR hosted runtime from the same spec',
          'Human-in-the-loop escalation hooks built into the spec format',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'Workers expose `work_status`, `work_invoke`, `work_pause` via MCP',
          'Any MCP host (Claude Code, Cursor, custom) can drive a worker',
          'Hosted runtime auth via bearer token; free starter quota via quote-tweet',
          'foundr.team integration — workers register as roster members automatically',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'OSS-first: `npm install` + run = no signup, no account',
          'BYO LLM key on every tier — Anthropic, OpenAI, OpenRouter, local',
          'Specs are plain markdown + YAML — fork, version, share',
          'No vendor lock — workers exported as plain files',
          'Foundr.* SSO at the hosted tier — one identity across the family',
        ],
      },
    ],
    mcp: [
      { name: 'work_compile', desc: 'Compile a YAML spec into a runnable worker' },
      { name: 'work_run', desc: 'Start a worker against a task' },
      { name: 'work_status', desc: 'Current state + last action of a running worker' },
      { name: 'work_pause / work_resume', desc: 'Checkpoint control — pause, inspect, resume' },
      { name: 'work_replay', desc: 'Replay any past run step-by-step' },
      { name: 'work_invoke', desc: 'Trigger a worker action from another agent' },
    ],
    differentiation: [
      'Declarative spec, not imperative code. The YAML IS the worker — no Python orchestration to debug.',
      'Stateful by default. Workers persist across model swaps — Anthropic → OpenAI → local, state survives.',
      'OSS at the core. `npm install foundr-work` works without an account; hosted runtime is optional.',
      'BYO CLI. Skills slot into Claude Code or Codex; the worker is portable across hosts.',
      'Spec-hash versioning. Workers identified by their spec, not their commit — reproducible by definition.',
    ],
    competitors: [
      { name: 'LangGraph (LangChain)', positioning: 'Graph-based agent framework, Python-first', pricing: 'Free OSS + $39/seat LangSmith / paid Cloud', weakness: 'Imperative graph code; Python lock-in; Cloud is enterprise-priced', url: 'https://www.langchain.com/langgraph' },
      { name: 'CrewAI', positioning: 'Role-playing Python crews', pricing: 'Free OSS + $99/mo+ enterprise', weakness: 'Python framework, no YAML primitive, no CLI-skill model', url: 'https://crewai.com/pricing' },
      { name: 'Mastra', positioning: 'TypeScript agent framework', pricing: 'Free OSS + paid Mastra Cloud', weakness: 'Imperative TS code, no declarative spec primitive', url: 'https://mastra.ai' },
      { name: 'AutoGen / Magentic-One (Microsoft)', positioning: 'Python multi-agent research framework', pricing: 'Free OSS', weakness: 'Research-shaped; no opinionated spec format; assembly required', url: 'https://github.com/microsoft/autogen' },
      { name: 'smolagents (HuggingFace)', positioning: 'Minimalist Python agent framework', pricing: 'Free OSS', weakness: 'Minimal by design — you assemble state, durability, and resumption yourself', url: 'https://github.com/huggingface/smolagents' },
    ],
    cta: {
      headline: 'Declare your first worker',
      body: '`npm install foundr-work`, write a 20-line YAML spec, run it. Hosted runtime is optional — the framework runs anywhere a Node process can.',
      primary: { label: 'npm install foundr-work', href: 'https://www.npmjs.com/package/foundr-work' },
      secondary: { label: 'Read the architecture', href: '/foundr-work' },
    },
  },

  'foundr-credit': {
    positioning:
      'A live, AI-native index of GPU + model + infra credits — matched to where you actually are in your build. Free to read via X-tag. Concierge application help on Pro.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'The whole index, the weekly digest, the eligibility quiz.',
        includes: [
          'Full read of the live credit index',
          'Weekly digest of additions + dead offers',
          '90-second eligibility quiz',
          'Deep-link apply with referral params',
        ],
        cta: { label: 'Get a free token', href: tweet('I want a foundr.credit access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$19 / mo',
        blurb: 'Alerts, matching, and 1-click prefilled applications.',
        includes: [
          'New-program + dead-offer alerts',
          'Founder-state matching (no entity / no VC / shipping today)',
          '1-click prefilled applications',
          'MCP token (rate-limited)',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.credit — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$79 / mo',
        blurb: 'Concierge application help + refer-a-program rewards.',
        includes: [
          'Human-reviewed application drafts',
          'Refer-a-program reward (cash back on accepted submissions)',
          'Priority program tips from the partner network',
          'Unlimited MCP usage',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.credit — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Live index of 100+ AI grants / credits / programs (logo, amount, eligibility, expiry)',
          'Full-text + faceted search (stack, stage, geo, entity-required, VC-required)',
          'Founder-state eligibility quiz (5 questions → matched shortlist)',
          '"Verified [date]" stamp + dead-offer flag with strike-through',
          'Deep-link Apply buttons with referral params',
          'Public weekly diff — programs added / killed / amount-changed',
          'Stack-aware browse pages (voice / RAG / agent / coding-tool / image)',
          'Free read of the full index gated only by a quote-tweet',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'credit_list — paginated index with filters',
          'credit_match(founder_state) — returns ranked eligible offers',
          'credit_apply_prefill(offer_id, founder_context) — emits a filled answer set',
          'credit_track_application(offer_id, status) — keeps state per founder',
          'credit_diff(since) — what changed since timestamp (for agents on cron)',
          'OAuth bearer scope mcp:credit mirroring foundr-run auth pattern',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          '"No entity required" filter default-on',
          'Indie-friendly tag (no VC referral, no funding floor)',
          '"Agent may apply on your behalf" badge per program (where TOS allows)',
          'Prefilled deck / one-pager from foundr.* shared identity',
          'Calendar reminders for credit expiry + reapply windows',
        ],
      },
    ],
    mcp: [
      { name: 'credit_list', desc: 'Paginated index with filters' },
      { name: 'credit_match', desc: '(founder_state) → ranked eligible offers' },
      { name: 'credit_apply_prefill', desc: '(offer_id, founder_context) → filled answers' },
      { name: 'credit_track_application', desc: '(offer_id, status) per founder' },
      { name: 'credit_diff', desc: '(since) → what changed (for agents on cron)' },
    ],
    differentiation: [
      'AI-native exclusively. No Slack / HR / CRM clutter; only GPU + model + infra programs.',
      'Agentic apply via MCP. Your agent can list, match, prefill, and submit autonomously.',
      'Weekly verified freshness with a public dead-offer feed. Competitors stamp once and rot.',
      'Founder-state matching (you shipped, no entity, no VC) vs. generic stage filters.',
      'Quote-tweet free read access. Replaces the SEO grind.',
    ],
    competitors: [
      { name: 'AI Credit Ladder', positioning: 'Verified credit index, "for solo founders"', pricing: 'Free + paid sponsor slots', weakness: 'Passive directory, only 55 programs, no agentic apply', url: 'https://www.aicreditladder.com/' },
      { name: 'Credit for Startups', positioning: '30+ programs, blog-style', pricing: 'Free + monthly email', weakness: 'Static listings, no matching, no alerts', url: 'https://creditforstartups.com/credits/ai' },
      { name: 'SaaSOffers', positioning: '500+ deals with AI-recommendation chat', pricing: 'Freemium + $79 / yr', weakness: 'Affiliate-driven, generic SaaS not AI-native', url: 'https://saasoffers.tech/' },
      { name: 'HackerNoon AI Credits DB', positioning: 'Searchable publisher directory', pricing: 'Free + ads', weakness: 'Thin filters, no eligibility quiz', url: 'https://hackernoon.ai/software-compute-grants-credits-search' },
      { name: 'FoundersCard', positioning: 'Premium membership perks', pricing: '$295–$595 / yr', weakness: 'Lifestyle / travel-heavy, not AI-stack', url: 'https://founderscard.com/' },
    ],
    cta: {
      headline: 'Get the full credit index',
      body: 'Quote-tweet @perea_ai for read access. The eligibility quiz takes 90 seconds; matched offers in your inbox the same day.',
      primary: { label: 'Get a free token', href: tweet('I want a foundr.credit access token — @perea_ai') },
      secondary: { label: 'Notify me about Solo', href: mailto('foundr.credit — Solo waitlist') },
    },
  },

  'foundr-money': {
    positioning:
      'Per-project P&L for solo founders running six things at once. Connects banks, cards, and provider invoices. The agent tags every charge — you confirm. No entity required.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'One project, manual tagging from your agent, monthly summary.',
        includes: [
          '1 project',
          'Manual tagging via MCP',
          'Monthly summary email',
          'Single bank connection',
        ],
        cta: { label: 'Get a free token', href: tweet('I want a foundr.money access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$19 / mo',
        blurb: 'Five projects, auto-connect, every provider invoice.',
        includes: [
          'Auto-connect cards + banks (Plaid / Teller)',
          '5 projects',
          'All provider integrations (OpenAI, Anthropic, Vercel, AWS, Modal)',
          'Threshold + anomaly alerts',
          '12-month history',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.money — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$49 / mo',
        blurb: 'Multi-entity, accountant export, shared-cost auto-split.',
        includes: [
          'Multi-entity, unlimited projects',
          'Accountant export (QuickBooks / Xero / Wave)',
          'Shared-cost auto-split (Claude Max prorated across projects by token use)',
          'Priority alerts',
          '3-year history',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.money — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Plaid / Teller bank + card connection (personal + business)',
          'Auto-import provider invoices (OpenAI, Anthropic, Vercel, AWS, Modal, Cloudflare, Stripe, GitHub, domains)',
          'Per-project P&L (revenue from Stripe + costs from everywhere)',
          'Monthly burn dashboard with 14-day forecast',
          'Budget alerts (Slack / email) — threshold + anomaly spike',
          'Split-transaction support (one charge → multiple projects)',
          'Recurring-subscription detection + cancel suggestions',
          'CSV + accountant export (QuickBooks / Xero / Wave)',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'money_tag from inside Claude / Cursor — tag in the loop you make decisions',
          'money_burn / money_project_create / money_alert_set',
          'money_export — statements as structured JSON for downstream agents',
          'money_reconcile — diff tracked spend vs. provider invoice',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Multi-project default — not "add second business" upsell',
          'No entity / no EIN required — personal-card friendly',
          'Shared-cost auto-split (Claude Max billed across 6 projects pro-rata by token use)',
          'One-click "this project is dead" archive (stops counting toward burn)',
          'Accountant-ready export at tax time',
        ],
      },
    ],
    mcp: [
      { name: 'money_tag', desc: 'Tag a transaction to a project from inside your IDE' },
      { name: 'money_burn', desc: 'Current month burn for a project' },
      { name: 'money_project_create', desc: 'Spin up a project budget envelope' },
      { name: 'money_alert_set', desc: 'Set a threshold from an agent' },
      { name: 'money_export', desc: 'Pull statements as structured JSON' },
      { name: 'money_reconcile', desc: 'Diff tracked spend vs. provider invoice' },
    ],
    differentiation: [
      'Project-first, not category-first. The primary axis is `project`, not `merchant_category`.',
      'Built for the 3–10 micro-startup founder. Ramp / Brex assume one funded entity.',
      'Agentic tagging via MCP. Tag in the loop you make decisions, not in a separate dashboard.',
      'LLM-provider + cloud-provider native. OpenAI / Anthropic / Vercel as first-class line items.',
      'No entity required. Works with a personal card across unincorporated side projects.',
    ],
    competitors: [
      { name: 'Mercury', positioning: 'Startup banking + spend management', pricing: 'Free banking + $35 / mo+', weakness: 'One entity per account, no project-level slice', url: 'https://mercury.com/pricing' },
      { name: 'Brex', positioning: 'Corporate card + spend for VC-backed', pricing: 'Free + $12 / user / mo annual', weakness: 'Requires real entity + VC backing', url: 'https://www.brex.com/pricing' },
      { name: 'Ramp', positioning: 'Corporate card + AI spend automation', pricing: 'Free + $15 / user / mo', weakness: 'Requires $25k bank balance to qualify', url: 'https://ramp.com/pricing' },
      { name: 'Wave', positioning: 'Free accounting for freelancers', pricing: 'Free + $16 / mo Pro', weakness: 'Manual categorization, no AI, no MCP', url: 'https://www.waveapps.com' },
      { name: 'CostLayer / SuperPenguin', positioning: 'AI-API spend dashboards', pricing: '$9–$29 / mo', weakness: 'LLM-API only — ignores Vercel, AWS, Stripe', url: 'https://costlayer.ai' },
    ],
    cta: {
      headline: 'See what each project is actually burning',
      body: 'Quote-tweet @perea_ai for a token. Connect one card. Tag five charges. The per-project P&L tells you which project to kill.',
      primary: { label: 'Get a free token', href: tweet('I want a foundr.money access token — @perea_ai') },
      secondary: { label: 'Notify me about Solo', href: mailto('foundr.money — Solo waitlist') },
    },
  },

  'foundr-courses': {
    positioning:
      'Short, working courses on exactly how the foundr.* products were built. The repo IS the live shipping product. Free always. Quote-tweet unlocks the Discord.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'Every video, every transcript, every repo, every MCP tool.',
        includes: [
          'Full course library',
          'All videos + transcripts + repos',
          'All MCP tools',
          'Lifetime updates',
        ],
        cta: { label: 'Open the library', href: tweet('I want a foundr.courses access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$19 / mo',
        blurb: 'Discord, weekly office hours, transcript search.',
        includes: [
          'Founder Discord',
          'Weekly group office hours',
          'Search across all course transcripts',
          'Cancel anytime',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.courses — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$199 / mo',
        blurb: '1:1 build review with Dante. PR-level code review on your fork.',
        includes: [
          'One 30-min 1:1 build review per month',
          'PR-level code review on your fork',
          'Priority MCP rate limits',
          'Cancel anytime',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.courses — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Video + transcript + repo, three-pane side-by-side player',
          '"Open in Cursor" / "Open in Claude Code" buttons per lesson',
          'Live repo link tracks `main` of the actual shipping product',
          'Per-module exercise with one expected diff to land',
          'Always free — no email gate; quote-tweet unlocks Discord',
          'Lifetime updates (courses follow the live product through breaking changes)',
          'Mobile playback for video, desktop for exercises',
          'Resume-where-you-left + per-step diff progress',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'courses_list — enumerate courses + modules',
          'courses_get_module(slug) — full transcript + repo HEAD context for a coding agent',
          'courses_fork_repo(slug) — provision a sandbox fork wired to your GitHub',
          'courses_grade_exercise(slug, diff) — server runs the expected test, returns pass / fail',
          'courses_subscribe_updates(slug) — webhook when the upstream live product changes',
          'OAuth bearer scoped mcp:courses, same shape as foundr-run',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Every course <2h, one build, one shippable artifact',
          '"Fork-and-ship" CTA — finish the course → your fork is the v0 of your own product',
          'No quizzes, no certificates, no 29-module sprawl',
          'Course retires the moment the live product retires (kept honest by CI)',
          'Each course has a public "last shipped against commit <sha>" badge',
        ],
      },
    ],
    mcp: [
      { name: 'courses_list', desc: 'Enumerate courses + modules' },
      { name: 'courses_get_module', desc: '(slug) → full transcript + repo HEAD' },
      { name: 'courses_fork_repo', desc: 'Sandbox fork wired to your GitHub' },
      { name: 'courses_grade_exercise', desc: '(slug, diff) → server runs test, pass / fail' },
      { name: 'courses_subscribe_updates', desc: 'Webhook when upstream changes the lesson' },
    ],
    differentiation: [
      'Free by default. One quote-tweet = the full library. Every premium competitor is $99–$795.',
      'Each course = a currently shipping product. Not a synthetic toy SaaS that rots when Stripe changes an API.',
      'Repo is the source of truth. `git clone` the live production repo, not a frozen course branch.',
      'Agentic-first — courses readable by Claude / Cursor via MCP. Your agent can take the course alongside you.',
      'One-build focus, under 2h. Opposite of 12h "complete bootcamp" sprawl.',
    ],
    competitors: [
      { name: 'ShipFast + CodeFast (Marc Lou)', positioning: 'Next.js boilerplate + course', pricing: '$299 one-time', weakness: 'Stack-locked, content frozen between revs', url: 'https://shipfa.st' },
      { name: 'Total TypeScript', positioning: 'Premium TS workshops', pricing: '$250–$795 one-time', weakness: 'Narrow vertical, no live product context', url: 'https://www.totaltypescript.com/buy' },
      { name: 'Maven', positioning: 'Cohort marketplace', pricing: '$800–$2,450 per cohort', weakness: 'Scheduled, no async, no repo', url: 'https://maven.com' },
      { name: 'Frontend Masters', positioning: 'All-you-can-eat library', pricing: '$39 / mo or $390 / yr', weakness: 'Corporate tone, not founder-shaped', url: 'https://frontendmasters.com/join/' },
      { name: 'Anthropic Academy', positioning: 'Free Claude / MCP courses', pricing: 'Free', weakness: 'Vendor-locked, no end-to-end builds', url: 'https://github.com/anthropics/courses' },
    ],
    cta: {
      headline: 'Open the library',
      body: 'Quote-tweet @perea_ai. The full library, repos, and MCP tools are yours. No paywall, no email gate.',
      primary: { label: 'Open the library', href: tweet('I want a foundr.courses access token — @perea_ai') },
      secondary: { label: 'Notify me about Solo', href: mailto('foundr.courses — Solo waitlist') },
    },
  },

  'foundr-website': {
    positioning:
      'Describe-to-generate landing pages. Real Next.js + Tailwind code in your GitHub repo. $1 one-time, your domain, no monthly creep. Agent updates over MCP.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'One generation on a foundr.lol subdomain.',
        includes: [
          '1 site generation',
          'Hosted on a foundr.lol subdomain',
          'foundr badge in the footer',
          'No custom domain, no repo handoff',
        ],
        cta: { label: 'Generate a free site', href: tweet('I want a foundr.website access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$1 once / site',
        blurb: 'Your domain, your repo, lifetime hosting. One dollar.',
        includes: [
          'Polished human review pass',
          'Your custom domain',
          'GitHub repo handoff (you own it)',
          'No badge',
          'Lifetime hosting on your Vercel account',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.website — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$19 / mo',
        blurb: 'Unlimited sites, brand kit, agent updates over MCP.',
        includes: [
          'Unlimited sites',
          'Brand kit reused across sites',
          'Agent updates over MCP token',
          'Priority polish review',
          'A/B headline tests + analytics',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.website — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Describe-to-generate (one paragraph → live site)',
          'Human polish review pass before publish',
          'Next.js 16 + Tailwind v4 + React 19 codebase',
          'Custom domain attach (Vercel-managed SSL)',
          'GitHub repo handoff — you own it, fork it, leave anytime',
          'Mobile-responsive by default',
          'SEO meta, sitemap, OG image generated',
          'Email capture form wired to your inbox',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'site_generate(prompt, domain) — full site from one paragraph',
          'site_update_copy(section, new_copy) — surgical text edits from Claude / Cursor',
          'site_add_section(kind, content) — pricing block, FAQ, testimonials',
          'site_redeploy() — push to Vercel from any agent',
          'site_get_repo_url() — hand the repo to your IDE agent',
          'site_swap_theme(theme_id) — restyle without regenerating',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Own the repo, leave anytime — no runtime lock-in',
          '$1 one-time floor, no monthly creep',
          'Indie domain registrars supported (Namecheap, Porkbun, Cloudflare)',
          'Free tier gated by quote-tweet, not credit card',
          'One site = one decision, not a "workspace with seats"',
        ],
      },
    ],
    mcp: [
      { name: 'site_generate', desc: '(prompt, domain) — full site from one paragraph' },
      { name: 'site_update_copy', desc: '(section, new_copy) — surgical text edits' },
      { name: 'site_add_section', desc: '(kind, content) — pricing, FAQ, testimonials' },
      { name: 'site_redeploy', desc: 'Push to Vercel from any agent' },
      { name: 'site_get_repo_url', desc: 'Hand the repo to your IDE agent' },
      { name: 'site_swap_theme', desc: '(theme_id) — restyle without regenerating' },
    ],
    differentiation: [
      '$1 one-time floor. Undercuts every monthly SaaS ($15–$30 / mo) and Carrd\'s $19 / yr.',
      'Real Next.js + Tailwind code in YOUR GitHub repo. Framer / Squarespace / Carrd give zero code; Lovable / Bolt keep you on their runtime.',
      'You own the domain from day 1. Vercel deploys under your domain, not foundr.lol unless you pick Free.',
      'Agentic updates over MCP. site_update_copy / site_add_section from Claude or Cursor.',
      'Human polish review pass. Lovable / Bolt / v0 ship raw AI output; we ship reviewed output.',
    ],
    competitors: [
      { name: 'Lovable', positioning: 'AI app builder, chat-to-app', pricing: 'Free + $25 / mo+', weakness: 'Opaque credit burn, runtime lock', url: 'https://lovable.dev/pricing' },
      { name: 'Bolt.new', positioning: 'Browser IDE, full-stack from prompt', pricing: 'Free + $25 / mo+', weakness: 'Tokens balloon as project grows', url: 'https://bolt.new/pricing' },
      { name: 'v0.app', positioning: 'Best React / Tailwind UI gen', pricing: 'Free + $30 / seat / mo+', weakness: 'Frontend-only, Vercel ecosystem lock', url: 'https://v0.app/pricing' },
      { name: 'Framer', positioning: 'Visual designer + AI, hosted', pricing: 'Free + $10–$100 / mo', weakness: 'No code export, can\'t self-host', url: 'https://www.framer.com/pricing' },
      { name: 'Carrd', positioning: 'Single-page builder', pricing: 'Free + $9–$49 / yr', weakness: 'Template-flavored, no React / Next code', url: 'https://carrd.co/docs/pro/plans' },
    ],
    cta: {
      headline: 'Generate your first site',
      body: 'Quote-tweet @perea_ai. The first generation is free. If you like it, $1 unlocks polish + your own domain + the GitHub repo.',
      primary: { label: 'Generate a free site', href: tweet('I want a foundr.website access token — @perea_ai') },
      secondary: { label: 'Notify me about Pro', href: mailto('foundr.website — Pro waitlist') },
    },
  },

  'foundr-today': {
    positioning:
      'The weekday 5-minute brief for AI-native solo founders. One release, three tools, one pattern, one TODO you can ship today. Quote-tweet for free.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'Daily weekday email + web archive + RSS.',
        includes: [
          'Daily weekday email (Mon–Fri)',
          'Web archive of every issue',
          'RSS (full text)',
          'Source links on every story',
        ],
        cta: { label: 'Subscribe', href: tweet('I want a foundr.today access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$12 / mo',
        blurb: 'Discord + searchable archive + MCP + ad-free.',
        includes: [
          'Founder Discord',
          'Searchable archive',
          'MCP token (today_* tools)',
          'Reply-to-author',
          'Ad-free issues',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.today — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$49 / mo',
        blurb: 'Weekly personalized brief tuned to your stack.',
        includes: [
          'Everything in Solo',
          'Weekly personalized brief tuned to your stack',
          'foundr.* integration scans your repos / agents and curates against your roadmap',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.today — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Daily 5-min weekday email (Mon–Fri)',
          'Web archive — every issue at /today/YYYY-MM-DD',
          'RSS feed (full text)',
          'Per-issue permalink + share card',
          'Source links on every story (1 big release, 3 tools, 1 pattern, 1 TODO)',
          'Search across the archive',
          'Sponsor disclosure on every placement',
          'Light + dark issue rendering',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'today_latest() — today\'s brief as structured JSON',
          'today_search(query) — full-text across archive',
          'today_archive(date_range) — bulk pull for context loading',
          'today_action_extract() — just today\'s TODO as a ready-to-claim backlog item',
          'today_tools_list() — the 3 tools as {name, url, why} triples',
          'OAuth bearer, scope mcp:today',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Indie-tool focus filter (Cursor / Claude / Replicate / fal — not Salesforce Einstein)',
          'Action-oriented section ordering — TODO above the fold',
          'Stack tagging — every tool labeled with stack-fit (TS / Py / Edge / RSC)',
          'No-enterprise-press-release editorial rule, published openly',
          '"Yesterday\'s TODO results" — readers reply with shipped links, featured next issue',
        ],
      },
    ],
    mcp: [
      { name: 'today_latest', desc: "Today's brief as structured JSON" },
      { name: 'today_search', desc: 'Full-text across the archive' },
      { name: 'today_archive', desc: '(date_range) — bulk pull for context loading' },
      { name: 'today_action_extract', desc: "Today's TODO as a ready-to-claim backlog item" },
      { name: 'today_tools_list', desc: 'The 3 tools as {name, url, why} triples' },
    ],
    differentiation: [
      'Every issue ends in a "ship today" TODO. No other daily ends with action.',
      'Hand-curated for solo AI-native founders. 1 release / 3 tools / 1 pattern shape — not enterprise news.',
      'Agentic-first delivery via MCP. Agents pull "what to build today" without parsing emails.',
      'Free tier earned by quote-tweet. Viral loop baked into onboarding.',
      'Weekday only, ruthlessly. Opposite of Rundown\'s 7-day grind.',
    ],
    competitors: [
      { name: 'TLDR AI', positioning: 'Daily 5-min AI brief', pricing: 'Free, sponsor-funded', weakness: 'Press-release stream, zero solo-founder angle', url: 'https://tldr.tech/ai' },
      { name: 'The Rundown AI', positioning: 'Daily AI news + tutorial', pricing: 'Free + $84 / mo Rundown U', weakness: 'Enterprise / marketer tone, mass-market', url: 'https://www.rundown.ai' },
      { name: "Ben's Bites", positioning: 'AI-builder newsletter', pricing: 'Free + $80 / yr Pro', weakness: 'Dropped from daily; archive messy', url: 'https://bensbites.com' },
      { name: 'Smol AI News', positioning: 'Weekday Discord / Reddit recap', pricing: 'Free', weakness: 'Firehose-dense (~45min read), no TODOs', url: 'https://news.smol.ai' },
      { name: 'AI Tidbits', positioning: 'Weekly AI roundup', pricing: 'Free + $8 / mo', weakness: 'Weekly cadence, PM-flavored', url: 'https://www.aitidbits.ai' },
    ],
    cta: {
      headline: "Get tomorrow's brief",
      body: 'Quote-tweet @perea_ai. The next weekday brief lands in your inbox. Five minutes. Ends with one thing you could ship today.',
      primary: { label: 'Subscribe', href: tweet('I want a foundr.today access token — @perea_ai') },
      secondary: { label: 'Notify me about Solo', href: mailto('foundr.today — Solo waitlist') },
    },
  },

  'foundr-team': {
    positioning:
      'An MCP-first roster for your AI teammates. Each agent gets a role, a budget cap, and a weekly retro of what it shipped. Flat $/mo, no per-seat math — you ARE the team.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'Three agent slots, weekly retro, one project.',
        includes: [
          '3 agent slots',
          'Weekly retro',
          '1 project',
          'Basic trace history',
        ],
        cta: { label: 'Get a free token', href: tweet('I want a foundr.team access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$19 / mo',
        blurb: 'Ten slots, per-agent budget caps, BYO keys.',
        includes: [
          '10 agent slots',
          'Per-agent budget caps with circuit breaker',
          'Unlimited retros',
          '3 projects',
          'BYO model keys (Anthropic, OpenAI, OpenRouter)',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.team — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$49 / mo',
        blurb: 'Unlimited agents and projects, audit log, MCP team_* surface.',
        includes: [
          'Unlimited agents',
          'Unlimited projects',
          'Audit log',
          'Full MCP team_* tool surface',
          'Priority support',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.team — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Agent profile cards (role, scope, tools, escalation path, model)',
          'Per-agent monthly $ budget cap with hard stop + soft warnings',
          'Weekly retro — auto-generated digest of what each agent shipped, cost, success rate',
          'Project assignment — one agent works across N projects with per-project budgets',
          'Run trace timeline (step, tool call, cost, duration) drillable from the retro',
          'Audit log of brief / budget / tool changes',
          'Agent pause / resume / hire / fire lifecycle',
          'Live activity feed of in-flight agent work',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'team_hire — register a new agent via its MCP endpoint',
          'team_brief — push a role / system prompt update',
          'team_pause / team_resume — emergency stop',
          'team_retro — pull this week\'s retro programmatically',
          'team_budget_check — agent self-queries remaining budget before expensive calls',
          'team_report — agent posts what it shipped (becomes retro substrate)',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Multi-project default — no "create org first" wall',
          'Flat $ / mo, no per-seat math (you ARE the team)',
          'BYO model keys — pass-through, no Cursor-Token-style markup',
          'Free tier via quote-tweet, not credit card',
          'Sane defaults — sign in, get 3 agent slots pre-wired for Claude / Cursor / Codex',
        ],
      },
    ],
    mcp: [
      { name: 'team_hire', desc: 'Register a new agent via its MCP endpoint' },
      { name: 'team_brief', desc: 'Push a role / system prompt update' },
      { name: 'team_pause / resume', desc: 'Emergency stop / restart' },
      { name: 'team_retro', desc: "Pull this week's retro programmatically" },
      { name: 'team_budget_check', desc: 'Agent self-queries remaining budget' },
      { name: 'team_report', desc: 'Agent posts what it shipped (retro substrate)' },
    ],
    differentiation: [
      'MCP-first roster. Every agent (Claude, Cursor, Codex, custom) registers via MCP — one universal contract.',
      'Multi-project default, not multi-tenant org. Solo founder running 3 side projects, not 1 company with 50 seats.',
      'Per-agent budget caps in dollars + circuit breaker. No managed platform ships this.',
      'Weekly retro as the primary surface. Competitors show traces; nobody narrates what each teammate shipped.',
      'Indie pricing, not per-seat. You ARE the team. Quote-tweet free, no card.',
    ],
    competitors: [
      { name: 'CrewAI', positioning: 'OSS orchestration + enterprise cloud', pricing: 'Free + $99 / mo+', weakness: 'Enterprise-shaped, dev-only', url: 'https://crewai.com/pricing' },
      { name: 'Lindy', positioning: 'Personal AI assistant + workflows', pricing: '$49.99–$199.99 / mo', weakness: 'Built for inboxes, not roster mgmt of CLI agents', url: 'https://www.lindy.ai/pricing' },
      { name: 'Sintra', positioning: '12 pre-baked "AI employees"', pricing: '$48.50–$97 / mo', weakness: 'Closed roster — can\'t add Claude / Cursor / custom', url: 'https://sintra.ai/pricing' },
      { name: 'Cursor Background Agents', positioning: 'Coding agents in IDE', pricing: '$40 / seat + usage', weakness: 'Per-seat, Cursor-only', url: 'https://cursor.com/docs/account/teams/pricing' },
      { name: 'Devin Teams', positioning: 'Parallel coding agents', pricing: '$80–$200 / mo + ACUs', weakness: 'Devin-only — no shelf for other agents', url: 'https://cognition.ai/blog/new-self-serve-plans-for-devin' },
    ],
    cta: {
      headline: 'Hire your first three agents',
      body: 'Quote-tweet @perea_ai. Three agent slots pre-wired for Claude, Cursor, and Codex. The weekly retro tells you what each one actually shipped.',
      primary: { label: 'Get a free token', href: tweet('I want a foundr.team access token — @perea_ai') },
      secondary: { label: 'Notify me about Solo', href: mailto('foundr.team — Solo waitlist') },
    },
  },

  'foundr-study': {
    positioning:
      'Drop in any source. Get an agent-led course that ends in a working artifact. Skim, learn, or build — your call. MCP-first so the course meets you in your IDE.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'One course a month from your own source.',
        includes: [
          '1 course / mo from your source',
          'Skim depth + 1 code lab',
          'Public artifact only',
        ],
        cta: { label: 'Start a free course', href: tweet('I want a foundr.study access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$19 / mo',
        blurb: 'Unlimited courses, all three depths, agent-led labs.',
        includes: [
          'Unlimited courses',
          'All three depths (skim / learn / build)',
          'Saved progress + personal library',
          'Agent-led code labs',
          'Private artifacts',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.study — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$49 / mo',
        blurb: 'Team library + multi-agent labs + accountability.',
        includes: [
          'Team library + shared courses',
          'Multi-agent labs (specialist + reviewer)',
          'Accountability check-ins',
          'MCP token with elevated quotas',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.study — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Ingest PDF, GitHub repo URL, docs URL, raw text, YouTube transcript',
          'Auto-generated lesson plan with learning objectives per module',
          'Inline quizzes (MCQ + open-ended) with Socratic feedback',
          'Code labs — runnable sandbox per lab, agent watches you work',
          'Progress tracking + resume-where-you-left-off',
          'Source citations on every claim (anti-hallucination)',
          'Adaptive depth toggle — skim (10min) / learn (30min) / build (2hr)',
          'Final artifact — deployable repo, blog post, or working script',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'study_create(source, depth) — spin up a course from any URL or file',
          'study_advance(course_id) — agent walks the learner to the next lesson',
          'study_check(course_id, response) — agent grades + adapts the next step',
          'study_artifact(course_id) — emit the final buildable artifact',
          'study_library(scope) — list a founder\'s (or team\'s) courses',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          '"Fits a 30-min lunch" preset — every course compresses to one sitting',
          'Learn-then-build pairing — no theory without a ship target',
          'No certificates, no streaks, no gamified shame',
          'Public share links — show what you learned, not a badge',
          'Pause / resume across foundr.* tabs (state lives in Founder World)',
        ],
      },
    ],
    mcp: [
      { name: 'study_create', desc: '(source, depth) — spin up a course' },
      { name: 'study_advance', desc: '(course_id) — agent walks to next lesson' },
      { name: 'study_check', desc: '(course_id, response) — grade + adapt next step' },
      { name: 'study_artifact', desc: '(course_id) — emit the final buildable artifact' },
      { name: 'study_library', desc: "(scope) — list a founder's courses" },
    ],
    differentiation: [
      'Agent-led code labs, not just chat. Every lesson ends in a runnable artifact the agent built with you.',
      'Ingest a GitHub repo, not just PDFs. Directly addresses "learn this framework I just pulled."',
      'Adaptive depth — skim / learn / build. Explicit user-selected gear, not one tutor style.',
      'Every course ends in a working artifact. The artifact IS the assessment — no certificates.',
      'MCP-first. Learn inside your dev loop, not in a separate tab.',
    ],
    competitors: [
      { name: 'NotebookLM', positioning: 'Source-grounded notebook from Google', pricing: 'Free + $7.99 / mo+', weakness: 'Notebook UX, not a structured course; no code labs', url: 'https://notebooklm.google/plans' },
      { name: 'ChatGPT Study Mode', positioning: 'Socratic mode in ChatGPT', pricing: 'Free + $20 / mo', weakness: 'A mode, not a course generator; no persistent plan', url: 'https://chatgpt.com/features/study-mode/' },
      { name: 'Claude Learning Mode + Skills', positioning: 'Tutor-style Claude', pricing: '$17–$100 / mo', weakness: 'Conversational tutor, not a course builder', url: 'https://claude.com/solutions/education' },
      { name: 'Perplexity Spaces', positioning: 'Per-project workspace', pricing: '$20 / mo+', weakness: 'Research hub, not pedagogy; no plan or labs', url: 'https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces' },
      { name: 'Coursebox / CourseAI', positioning: 'PDF → course generators for L&D', pricing: 'Varies', weakness: 'Built for L&D teams; output is a file, not an agent-led experience', url: 'https://www.coursebox.ai/document-to-course' },
    ],
    cta: {
      headline: 'Pick a source. Start learning.',
      body: 'Quote-tweet @perea_ai. Drop in one PDF or repo. Your first agent-led course is ready in 60 seconds — and ends with a working artifact.',
      primary: { label: 'Start a free course', href: tweet('I want a foundr.study access token — @perea_ai') },
      secondary: { label: 'Notify me about Solo', href: mailto('foundr.study — Solo waitlist') },
    },
  },

  'foundr-lol': {
    positioning:
      'The open research lab. Half-finished experiments, broken first drafts, dead branches. Vote, fork, sponsor — or just watch. Failed experiments are public and required.',
    pricing: [
      {
        name: 'Free',
        price: '$0',
        badge: QT,
        blurb: 'Read every experiment. Vote, comment, fork.',
        includes: [
          'Read all experiments + log',
          'Comment + upvote (weight 1)',
          'Fork any experiment',
          'RSS feed of the chronological lab log',
        ],
        cta: { label: 'Get a free token', href: tweet('I want a foundr.lol access token — @perea_ai') },
      },
      {
        name: 'Solo',
        price: '$12 / mo',
        blurb: 'Early access + MCP agent integration + vote weight 3.',
        includes: [
          'Early access (1 week before public drop)',
          'MCP agent integration (lol_* tools)',
          'Vote weight 3',
          'Maker badges on your own experiments',
        ],
        cta: { label: 'Notify me about Solo', href: mailto('foundr.lol — Solo waitlist') },
        highlight: true,
      },
      {
        name: 'Pro',
        price: '$49 / mo',
        blurb: 'Sponsor experiments + vote weight 10 + commission a build.',
        includes: [
          'Sponsor an experiment (split with maker, foundr.lol takes flat 5%)',
          'Vote weight 10',
          'One commission-a-build slot per month',
          'Direct DM with the maker on a sponsored project',
        ],
        cta: { label: 'Notify me about Pro', href: mailto('foundr.lol — Pro waitlist') },
      },
    ],
    featureGroups: [
      {
        title: 'Core',
        items: [
          'Experiment cards (title, one-liner, status badge, maker, vote count)',
          'Status state machine: soon → active → graduated | dead (post-mortem required on dead)',
          'Demo link — live URL or embedded iframe',
          'Fork link (GitHub template / Replit / HF Space duplicate)',
          'Upvote + threaded comments',
          'Public chronological lab-wide log (RSS + JSON)',
          'Per-experiment archive page that persists after kill',
          'Per-experiment sponsor button (Stripe one-time + recurring)',
        ],
      },
      {
        title: 'Agentic-first (MCP + token)',
        items: [
          'lol_list(status?, tag?) — discover experiments',
          'lol_get(slug) — full experiment + log + sponsors',
          'lol_subscribe(slug) — agent-side webhook on new commits / status changes',
          'lol_vote(slug, weight) — tier-weighted (Free=1, Solo=3, Pro=10)',
          'lol_fork(slug) — return clone-ready repo URL + setup script',
          'lol_post_update(slug, markdown) — makers\' agents auto-publish progress notes',
        ],
      },
      {
        title: 'Solo-founder-shaped',
        items: [
          'Hard cap: 1 maker per experiment (no team theater)',
          '6-week default lifetime → forced graduate-or-kill decision',
          'No private roadmap — only shipped log entries',
          '"Built in public" badge auto-awarded after N public log entries',
          'Solo-founder profile aggregating all experiments + graduation rate',
        ],
      },
    ],
    mcp: [
      { name: 'lol_list', desc: '(status?, tag?) — discover experiments' },
      { name: 'lol_get', desc: '(slug) — full experiment + log + sponsors' },
      { name: 'lol_subscribe', desc: '(slug) — webhook on new commits / status changes' },
      { name: 'lol_vote', desc: '(slug, weight) — tier-weighted vote' },
      { name: 'lol_fork', desc: '(slug) — clone-ready repo URL + setup' },
      { name: 'lol_post_update', desc: "(slug, markdown) — makers' agents auto-publish" },
    ],
    differentiation: [
      'Failure shown openly. status: dead is a first-class badge with a required post-mortem field.',
      'Solo-shaped scope cap. Max-team-size 1, max lifetime 6 weeks. Cuts the vanity-update vapor-startup trap.',
      'Agent-readable via MCP. Every list / get / vote / subscribe op is an MCP tool, not just REST.',
      'Graduation as the explicit success metric. Experiments leave when they earn their own foundr.* subdomain.',
      'Vote-weight as a paid perk. Tier multiplier turns voting into real signal vs. Pioneer\'s gameable 1-vote.',
    ],
    competitors: [
      { name: 'Replit Bounties', positioning: 'Marketplace for outsourcing software tasks', pricing: 'Cycles-based per-bounty', weakness: 'Contractor model, no fail log, no fork or vote', url: 'https://replit.com/blog/bounties' },
      { name: 'Pioneer.app', positioning: 'Founder tournament (shuttered 2024)', pricing: 'Free + $20k prize', weakness: 'Gamified vanity updates; dead', url: 'https://pioneer.app/blog/pioneer/' },
      { name: 'Hugging Face Spaces', positioning: 'Community ML demos', pricing: 'Free CPU + paid GPU', weakness: 'ML-model centric, no status state-machine', url: 'https://huggingface.co/spaces' },
      { name: 'GitHub Sponsors', positioning: 'Per-developer recurring funding', pricing: '0% platform fee', weakness: 'Funds people, not specific experiments', url: 'https://github.com/open-source/sponsors' },
      { name: 'Product Hunt', positioning: 'Daily launch leaderboard', pricing: 'Free + paid boost', weakness: 'Optimized for polished launches; no post-mortem', url: 'https://www.producthunt.com/launch' },
    ],
    cta: {
      headline: 'Watch the lab',
      body: 'Quote-tweet @perea_ai. Read every experiment, vote, fork the dead ones, subscribe to the live ones. New drops every week.',
      primary: { label: 'Get a free token', href: tweet('I want a foundr.lol access token — @perea_ai') },
      secondary: { label: 'Notify me about Solo', href: mailto('foundr.lol — Solo waitlist') },
    },
  },
}
