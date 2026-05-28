import { marketExtensionsBySlug } from './product-market-extensions'

/**
 * MECE market analysis for every foundr.* product.
 *
 * Each entry was synthesized from a parallel deep-research pass (Exa search +
 * fetch). For each product:
 *   - TAM / SAM / SOM with verifiable proxy variables and sources
 *   - The top 3 incumbents and their categorized structural vulnerabilities
 *   - A capture-strategy thesis tying SOM to specific incumbent weaknesses
 *
 * Numbers are point-in-time as of the research run (May 2026). Treat as a
 * snapshot, not a forecast — sources are linked so they can be re-verified.
 */

export interface Source {
  label: string
  url: string
}

export interface MarketSize {
  /** e.g. "~$11–15B / yr (2026), heading to $90B+ by 2030" */
  headline: string
  /** what the proxy variable is, and why it's defensible */
  proxy: string
  /** how the number was triangulated; for SOM, the capture maths */
  calc?: string
  /** optional bullets — assumptions baked into the number */
  assumptions?: string[]
  /** optional analog comp (most relevant for SOM) */
  analog?: string
  sources: Source[]
}

export type VulnerabilityKind =
  | 'Tech debt'
  | 'Business model misalignment'
  | 'Regulatory / channel dependency'
  | 'Cultural / incentive trap'

export interface Vulnerability {
  kind: VulnerabilityKind
  detail: string
}

export interface Incumbent {
  /** "Linear", "AWS S3", "Ramp" */
  name: string
  /** revenue / share / valuation / users — one short line */
  position: string
  vulnerabilities: Vulnerability[]
  url?: string
}

export interface MarketInsight {
  tam: MarketSize
  sam: MarketSize
  som: MarketSize
  /** Exactly 3 incumbents per product */
  incumbents: [Incumbent, Incumbent, Incumbent]
  /** Where foundr.X actually wins — 4-6 bullets */
  winThesis: string[]
  /** 12-month strategic moves, ranked by leverage (descending). Optional. */
  strategicMoves?: StrategicMove[]
  /** Economic moats — what we can hold and what we can't. Optional. */
  moats?: Moats
  /** Where SAM × incumbent vulnerability × unaddressed pain converges. Optional. */
  synthesis?: SynthesisRow[]
  /** 5 unaddressed power-user pains with real quotes. Optional. */
  powerUserPain?: PowerUserPain[]
}

// ── 4 new strategic sections (mirrors the agentik-host report shape) ──────

export interface StrategicMove {
  title: string
  body: string
  /** Optional timing tag (e.g. "v0.5", "Q3", "immediate"). */
  timing?: string
}

export interface MoatItem {
  title: string
  body: string
}

export interface Moats {
  /** What we can defensibly hold. */
  hold: MoatItem[]
  /** What we cannot hold — incumbents can match or copy. */
  cannotHold: MoatItem[]
  /** Optional — switching costs that work in our favor. */
  switchingFor?: string[]
  /** Optional — switching costs that work against us. */
  switchingAgainst?: string[]
}

export type SynthesisStatus = 'shipped' | 'partial' | 'gap'

export interface SynthesisRow {
  wedge: string
  segment: string
  vulnerability: string
  pain: string
  status: SynthesisStatus
  /** Optional supporting note rendered after the status. */
  note?: string
}

export interface PowerUserQuote {
  text: string
  attribution: string
}

export interface PowerUserPain {
  /** "A", "B", "C", "D", "E" */
  label: string
  title: string
  /** 2-4 quotes ≤125 chars from real users (Reddit, HN, GitHub, X) */
  quotes: PowerUserQuote[]
  /** One-sentence structural reason incumbents can't fix it. */
  whyIncumbentsCantFix: string
  /** Our coverage — status + 1-sentence detail. */
  coverage: {
    status: SynthesisStatus
    detail: string
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────

const s = (label: string, url: string): Source => ({ label, url })

// ── Market insights by product slug ───────────────────────────────────────

const baseMarketBySlug: Record<string, MarketInsight> = {
  'foundr-world': {
    tam: {
      headline: '~$11–15B / yr (2026), heading to $90B+ by 2030',
      proxy:
        'Combined spend on AI agent platforms + AI coding agents — the two budget lines a founder running MCP-speaking agents already pays. foundr.world sells the governance layer on top.',
      calc:
        'Stratistics MRC puts AI agent platforms at $11.41B (2026) → $286B by 2034 (49.6% CAGR). AgentMarketCap pegs AI coding agents alone at ~$8.5B combined ARR Q1 2026 (Claude Code $2.5B, Cursor $2B, Copilot $2B).',
      sources: [
        s('GIIResearch — AI Agent Platforms', 'https://www.giiresearch.com/report/smrc2007805-ai-agents-platforms-market-forecasts-global.html'),
        s('AgentMarketCap — Coding Agent ARR Q2 2026', 'https://agentmarketcap.ai/blog/2026/04/14/ai-coding-agent-combined-arr-5b-market-sizing-q2-2026'),
        s('Grand View — AI Agents Market', 'https://www.grandviewresearch.com/industry-analysis/ai-agents-market-report'),
      ],
    },
    sam: {
      headline: '~$650M–1.1B / yr (2026 run-rate)',
      proxy:
        'AI-native solo founders who (a) pay for at least one MCP-speaking coding agent, (b) run multi-agent / async workflows, (c) sit outside enterprise procurement.',
      calc:
        'ShipSquad: 48,000 solo startups launched 2025 (+140% YoY). Carta: solo = 36.3% of US H1 2025 new-cos. 34% of AI-augmented solos already run multi-agent. ~450–700K MCP-comfortable solos × ~$1,500/yr blended ARPU ≈ $675M–$1.05B.',
      sources: [
        s('ShipSquad Solo Founder Index 2026', 'https://shipsquad.ai/blog/solo-founder-index-2026'),
        s('Carta — Solo Founders Report', 'https://carta.com/data/solo-founders-report/'),
        s('Sacra — Cognition / Devin', 'https://sacra.com/c/cognition/'),
      ],
    },
    som: {
      headline: '~$25–50M / yr by 2029',
      proxy: 'Virtual-goods economy (credits + premium agent compute), modeled after free-to-play persistent worlds. No subscription tier.',
      assumptions: [
        '~200K active founders (~5% of AI-solo SAM) via free-to-join + X-tag growth',
        '~15–25% buy credit packs at least once per quarter',
        'Blended $40–60 / paying user / yr from credit packs (Habbo-precedent ARPU)',
        'Pure virtual-goods economics; no recurring subscription line',
      ],
      analog:
        'Habbo monetized a 15M-user persistent world to $500M+ in annual virtual-goods trade with no subscription. Roblox\'s ARPU ($55/paying user/yr) is the upper-bound precedent for a credits-based persistent world.',
      sources: [
        s('Sacra — Cognition (for AI-solo growth context)', 'https://sacra.com/c/cognition/'),
        s('David Song — AI Survey', 'https://davidtsong.substack.com/p/2025-future-of-ai-survey'),
      ],
    },
    incumbents: [
      {
        name: 'Jira / Atlassian',
        position: '~$4.4B FY revenue; Leader in Gartner Collaborative Work Management MQ',
        url: 'https://www.atlassian.com/software/jira',
        vulnerabilities: [
          { kind: 'Tech debt', detail: '20-year workflow engine, bloated UI, no native MCP server, "issue assignee" assumes a human Clerk seat.' },
          { kind: 'Business model misalignment', detail: 'Per-invited-user pricing (charges for ghost users), $14.54/seat Premium, annual October hikes. Nothing in the SKU sheet for "claimed and shipped by an autonomous agent at 3am."' },
          { kind: 'Regulatory / channel dependency', detail: 'Locked into Atlassian-ecosystem enterprise procurement; moat IS lock-in, not product.' },
          { kind: 'Cultural / incentive trap', detail: 'Cannot cannibalize per-seat ARR by repricing agents as cheap actors; installed base IS the headcount-billing meter.' },
        ],
      },
      {
        name: 'Linear',
        position: '$100M+ ARR, $1.25B valuation (Jun 2025), 15K customers incl. OpenAI/Perplexity',
        url: 'https://linear.app',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Beautiful but flat — list/board/timeline UI, no spatial metaphor, no persistent "world" for ambient agent presence. Linear Agent is bolted-on beta.' },
          { kind: 'Business model misalignment', detail: '$8–14/seat — same human-headcount meter as Jira. A founder running 12 agents pays 12× or hides them as one "bot" seat.' },
          { kind: 'Cultural / incentive trap', detail: 'Sold its identity to "engineering teams that ship fast"; pivoting to solo founder + agents dilutes the enterprise upmarket the $1.25B val requires.' },
        ],
      },
      {
        name: 'ClickUp',
        position: '~$300M ARR, $4B valuation, 20M users, 4M+ teams',
        url: 'https://clickup.com',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Feature sprawl ("one app to replace them all") = the opposite of MCP composability; tool-bloat IS the positioning.' },
          { kind: 'Business model misalignment', detail: '$7–19/seat per-user; AI bolted on as an add-on credit pack rather than the operating substrate.' },
          { kind: 'Cultural / incentive trap', detail: 'Targets teams consolidating tools — literal opposite ICP from a solo founder who wants composable MCP primitives.' },
        ],
      },
    ],
    winThesis: [
      'Price the agent, not the seat. Flat tiers cover unlimited agents — Jira/Linear/ClickUp can\'t match without burning per-seat ARR.',
      'MCP-first as distribution. 9,400+ public MCP servers (H1 2026), 97M monthly SDK downloads; plug into a founder\'s existing Claude Code / Cursor / Codex without a new dashboard.',
      'X-tag free tier = Devin-style self-serve loop. Quote-tweet-for-free amplifies on a channel none of the incumbents fish in.',
      'Spatial persistence is a real moat. Gather peaked at ~$12M ARR selling spatial offices to humans; we invert the ICP — agents are the residents — sidestepping the post-RTO collapse.',
      'Habbo-economy precedent for the cosmetics layer. Habbo monetized a 15M-user persistent world to $500M+ in annual virtual-goods trade.',
      'Solo founder is the fastest-growing ICP — 36.3% of US new-cos H1 2025 (Carta), +140% YoY launches (ShipSquad). Wave that Jira\'s enterprise GTM and Linear\'s mid-market motion structurally can\'t catch.',
    ],
  },

  'foundr-agency': {
    tam: {
      headline: '~$57B / yr (2025)',
      proxy: 'AI consulting services + generative AI implementation services bucket.',
      calc:
        'Future Market Insights pegs global AI consulting services at $11.07B (2025), 26.2% CAGR to $91B by 2035. Technavio sizes incremental growth at $38.16B (2024–2029). Layer in the GenAI services slice of Gartner\'s $644B 2025 GenAI spend (~8–10% IT services portion = ~$50B).',
      sources: [
        s('Future Market Insights — AI Consulting', 'https://www.futuremarketinsights.com/reports/ai-consulting-services-market'),
        s('Technavio — AI Consulting', 'https://www.technavio.com/report/ai-consulting-market-industry-analysis'),
        s('Gartner — $644B GenAI 2025', 'https://www.gartner.com/en/newsroom/press-releases/2025-03-31-gartner-forecasts-worldwide-genai-spending-to-reach-644-billion-in-2025'),
      ],
    },
    sam: {
      headline: '~$1.2B / yr',
      proxy:
        'AI-native solo founders + sub-25-person teams, fixed-price builds in the $8–60k range, English-speaking markets. Strip enterprise/Fortune-2000 (Accenture/Big-4 floor at $600k–$2M per engagement).',
      calc:
        'Fractional executive market is $5.7B/yr (Fractionus via ConsultKit), AI-specialist sub-segment commands 2× rates ($300–500/hr), and the solo-founder-shaped slice (≤25 FTE buyer, ≤$60k engagement) is conservatively ~20% of that = ~$1.2B.',
      sources: [
        s('ConsultKit — Fractional CTO Rates 2026', 'https://www.consultkit.ai/blog/how-to-price-fractional-cto-services-in-2026-with-real-market-rates-1774775226517'),
        s('AI-CTO.io — Fractional AI CTO Rates', 'https://ai-cto.io/intel/fractional-ai-cto-rates-2026'),
        s('Next Best Action — Big Four Audit', 'https://nextbestaction.ai/insights/big-four-pricing-audit/'),
      ],
    },
    som: {
      headline: '$1.5–3M / yr for a single operator at steady state',
      proxy: 'Solo productized agency ceiling: ~$3M ARR before delivery saturation forces hire-or-network.',
      assumptions: [
        '8–12 Solo builds/yr × $11k blended fee = $90–130k',
        '10–25 concurrent Pro advisor seats × $6.5k/mo = $780k–$1.95M ARR',
        'Twitter-driven word-of-mouth is the only proven channel that fits',
      ],
      analog:
        'Designjoy (Brett Williams, solo) — $3.1M revenue 2024, 1 employee, zero ad spend, Twitter as sole growth engine.',
      sources: [
        s('Getlatka — Designjoy', 'https://getlatka.com/companies/designjoy'),
        s('IndieHackers — Solo agency $1.5M ARR', 'https://www.indiehackers.com/post/broke-the-1-5m-arr-mark-as-an-agency-of-one-e26ae36fe7'),
      ],
    },
    incumbents: [
      {
        name: 'Accenture + Big 4 (Deloitte / PwC / EY / KPMG)',
        position: 'Enterprise AI implementation incumbent — Accenture Song revenue $20B (FY25)',
        url: 'https://www.accenture.com',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Heritage SI stack (custom fine-tuning, managed cloud); bolt-on AI Refinery built around NVIDIA partner deals; deliverables flow through 779k-person org and legacy Java/SAP/Salesforce service lines.' },
          { kind: 'Business model misalignment', detail: 'Partner-rate delivery ($500–$1,200/hr) requires $600k–$2M floor per engagement just for unit-economics to clear. Cannot serve a solo founder — math doesn\'t close below ~$250k.' },
          { kind: 'Regulatory / channel dependency', detail: 'Locked into Fortune-2000 procurement, MSA/RFP cycles measured in months; OpenAI "Frontier Alliances" deepens enterprise channel.' },
          { kind: 'Cultural / incentive trap', detail: 'Partner up-or-out promotion ladder rewards big-deal-flow, not fixed-price shipped product.' },
        ],
      },
      {
        name: 'AI-Native Agency / Netguru / Globant AI Pods',
        position: 'Mid-market productized pods, Netguru Retained Pod €52k/month',
        url: 'https://ai-native-agency.com/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: '2–3 person Pod = senior team + eval harness + governance overhead; built for $50M–$500M mid-market clients with compliance review streams (HIPAA/SOC2/GDPR).' },
          { kind: 'Business model misalignment', detail: 'Discovery floor $5–12k before Build ($15–60k), then $2–8k/mo Run. Sales cycle assumes a procurement function — a solo founder DMing for an MVP is a misfit lead routed to "come back when you\'re bigger."' },
          { kind: 'Regulatory / channel dependency', detail: 'Lean on compliance attestation packs (DPA/audit-log) — premium pricing depends on the buyer caring; AI-native founders pre-Seed don\'t.' },
          { kind: 'Cultural / incentive trap', detail: 'Pod model needs ≥3 people per engagement to justify pricing; can\'t profitably staff a $10k build.' },
        ],
      },
      {
        name: 'Thoughtbot / Crowd Favorite / Blazity',
        position: 'Legacy dev consultancies pivoting to AI — Thoughtbot $41–63M revenue, 64–87 FTE',
        url: 'https://thoughtbot.com',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Rails-heritage stack, 6–12 week phases with PMs, designers, devs layered on every engagement; sales motion built around long discovery → design → build.' },
          { kind: 'Business model misalignment', detail: 'T&M or time-boxed billing with blended team rates ~$150–250/hr; cannot compete on a $10k fixed-price 4-week build without burning margin — the org chart IS the bottleneck.' },
          { kind: 'Regulatory / channel dependency', detail: 'Inbound via Clutch/RFP/referral pipeline aimed at funded startups + mid-market; no native presence in the AI-Twitter founder graph.' },
          { kind: 'Cultural / incentive trap', detail: 'Headcount-as-prestige culture; public-pricing + no-sales-call is heretical — would erode the consultative-selling margin they exist on.' },
        ],
      },
    ],
    winThesis: [
      'Public pricing as the wedge. $8–15k fixed and $6.5k/mo posted live — kills the 2–4 week procurement dance. Beat AI-Native Agency\'s $15k floor and Netguru\'s €60k Pilot by 4–8× because the operator is 1 person + AI, not a 3-person compliance pod.',
      'MCP backlog as differentiator. Build-time agent backlog access (foundr-backlog MCP) is a real-time-visibility primitive no incumbent ships.',
      'Quote-tweet scope DM = zero-CAC funnel mapping to the Designjoy / Levels.io / Eliason build-in-public flywheel.',
      'AI-native buyer affinity. Buyer wants a builder with taste, not a deck. Big-4 lose on credibility; mid-market pods on price + ceremony.',
      'Operator-as-brand moat. 1-person agencies are unclonable — Designjoy proved $3.1M solo is defensible because Brett IS the product.',
      'Pro advisor seat as MRR ballast — $6.5k/mo is structurally lighter than Netguru\'s €52k/mo or $7–15k Growth fractional AI CTOs, with 80% gross margin and no delivery escalation.',
    ],
  },

  'foundr-run': {
    tam: {
      headline: '~$9.1B / yr (2025), growing to ~$16.9B by 2030',
      proxy: 'Global project management software market (issue trackers, work-OS, PPM). Adjacent: "AI in project management" $3.58B (2025) → $8.9B (2030); "agentic orchestration" $5.2B (2025) → $46.8B (2036).',
      calc: 'PM software 2025 = $9.14B (TBRC) / $7.46B PPM (IDC) / $9.76B (Mordor). Midpoint ~$9B. Layer in agentic orchestration ($5B, 22% CAGR) for the agent-share.',
      sources: [
        s('TBRC — Project Management Software', 'https://www.thebusinessresearchcompany.com/report/project-management-software-global-market-report'),
        s('IDC — PPM Forecast', 'https://my.idc.com/getdoc.jsp?containerId=US52252825'),
        s('OpenPR — Agentic Orchestration', 'https://www.openpr.com/news/4525620/agentic-orchestration-market-to-reach-usd-46-8-billion-by-2036-as'),
      ],
    },
    sam: {
      headline: '~$600M–$1.1B / yr (2026)',
      proxy: 'AI-native devs + indie/solo founders running coding agents. Cursor\'s $1B ARR base (~1–2M paying devs) is the closest demographic proxy.',
      calc: 'If 25–40% adopt an agent-shaped backlog at ARPU $15/mo workspace → 250–800k workspaces × $180/yr ≈ $45M–$144M direct; widened to all solo+small AI-native teams currently on Linear Free / GitHub Projects / Notion (~3–5M workspaces) at same ARPU = ~$540M–$900M.',
      sources: [
        s('TechCrunch — Anysphere $9.9B valuation', 'https://techcrunch.com/2025/06/05/cursors-anysphere-nabs-9-9b-valuation-soars-past-500m-arr/'),
        s('Linear pricing', 'https://linear.app/pricing'),
      ],
    },
    som: {
      headline: '$8M–$25M ARR by year 5',
      proxy: 'Capturing 1–3% of the AI-native solo/indie segment via MCP-native + per-workspace pricing wedge.',
      assumptions: [
        '40k–100k paid workspaces',
        'Solo $9 + Pro $29 blended ARPU ~$18/mo = $216/yr',
        'Free tier drives viral acquisition; 3–5% conversion off a 1–3M free funnel',
      ],
      analog: 'Linear hit $8.4M ARR in 2023 (year 4) on 88 employees, $100M by year 6 — pure PLG, no sales. Plane reached "several hundred thousand $" within ~18 months on $799 lifetime.',
      sources: [
        s('Getlatka — Linear', 'https://getlatka.com/companies/linear.app'),
        s('Plane — Sustainability', 'https://plane.so/blog/lessons-in-sustainability-from-scaling-in-open-source'),
      ],
    },
    incumbents: [
      {
        name: 'Linear',
        position: '$100M ARR (Jun 2025), 25k+ orgs, 20k+ paid biz customers',
        url: 'https://linear.app/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'GraphQL-only API; no first-party MCP server. Community wrappers (linear-mcp) are GraphQL pass-throughs. Linear\'s Agent platform is bolted on top of seat-based identity.' },
          { kind: 'Business model misalignment', detail: 'Pricing $10–$16 per user/mo with "Unlimited members" only on Free (capped 250 issues). 14k issues/week created by agents on their own platform — none of which are billable seats. Agent does the work, human pays the per-seat tax.' },
          { kind: 'Cultural / incentive trap', detail: '$100M ARR built on ~180% NRR from per-seat expansion within engineering orgs. Switching to workspace pricing collapses the upmarket motion that landed Coinbase / Oscar / Automattic.' },
        ],
      },
      {
        name: 'Atlassian Jira',
        position: '$5.2B FY25 revenue, 350k+ orgs, 2.3M AI MAU',
        url: 'https://www.atlassian.com/software/jira',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Documented automation caps (1,700 executions/mo Standard); JQL throttling on scheduled queries. Rovo + "Agents in Jira" GA Q3 FY26 — but governance bolted onto 20-year-old per-seat permissions.' },
          { kind: 'Business model misalignment', detail: 'Agent automation runs growing 30% MoM, but priced per paid user. Indie founders / 1-person companies are functionally locked out — Jira\'s smallest unit of meaning is a "team."' },
          { kind: 'Cultural / incentive trap', detail: 'Enterprise sales motion ($1M+ customer cohorts up 6× in 4yr) — cannot serve the $9/mo solo founder without cannibalizing upmarket.' },
        ],
      },
      {
        name: 'GitHub Projects',
        position: 'Bundled into Copilot/Enterprise — closest AI-native default for solo devs',
        url: 'https://github.com/features/issues',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Issue fields only hit public preview May 2026 — typed metadata is new. Projects v2 still requires GraphQL for non-trivial automation. Backlog UX is a spreadsheet over issues, not an intake queue.' },
          { kind: 'Business model misalignment', detail: 'Free for public repos / bundled into Copilot — GitHub has no incentive to build an agent-shaped backlog as a product; ships as a feature when convenient.' },
          { kind: 'Cultural / incentive trap', detail: 'Microsoft-owned, optimized for repo-scoped engineering work. Cross-project intake from a solo founder running 5 side-projects is a non-goal. Height tried and died Sep 2025.' },
        ],
      },
    ],
    winThesis: [
      'MCP-native intake from day one. 17k+ MCP servers (Dec 2025, Linux Foundation-governed); Linear\'s MCP is community wrappers, Jira\'s is bolted onto Rovo. foundr.run IS an MCP server.',
      'Per-workspace pricing kills the agent-seat tax. Linear\'s 14k-agent-issues/week stat is the wedge: every one is a missed billing cycle for them and $0-marginal-cost intake for us.',
      'Claim-lease primitive maps to agent reality. Human PM tools have "assignee" (sticky); agent fleets need leased claims with timeout + idempotency — Height\'s autonomous-PM thesis was right, the wrapper wasn\'t.',
      'Indie founder distribution beachhead. Cursor\'s $1B ARR + 60%-every-2-months growth = a wave of solo builders running 3–10 side-projects. Atlassian/Linear can\'t price-discriminate down.',
      'Free quote-tweet tier = viral demand-gen. Asana/Linear/Monday charge for the first paid seat; we give the intake primitive away on social.',
      'Land where the buyer already lives — Claude Code, Cursor, Codex. Intercept at the agent\'s tool-call layer before the human ever opens Linear.',
    ],
  },

  'foundr-host': {
    tam: {
      headline: '~$9.4B / yr (2025), growing to ~$18.8B by 2030',
      proxy: 'Global cloud object storage market (S3-compatible / API-driven). AWS S3 alone is the largest single line item — AWS segment $128.7B FY25, storage ~10–15% (~$13–19B).',
      calc: 'TBRC: $9.44B (2025) → $10.97B (2026) at 16.2% CAGR → $18.79B (2030). Adjacent AI-powered storage TAM is $27–36B (2025) growing 23–25% CAGR — represents the demand shift foundr.host rides.',
      sources: [
        s('GIIResearch — Cloud Object Storage', 'https://www.giiresearch.com/report/tbrc1978555-cloud-object-storage-global-market-report.html'),
        s('Mordor — AI-Powered Storage', 'https://www.mordorintelligence.com/industry-reports/artificial-intelligence-powered-storage-market'),
        s('Edgar.tools — AWS Segments', 'https://app.edgar.tools/companies/AMZN/disclosures/segments'),
      ],
    },
    sam: {
      headline: '~$300–500M / yr',
      proxy: 'AI-native solo founders + small dev teams who (a) need programmatic object storage, (b) reject S3 console/IAM overhead, (c) want flat predictable pricing.',
      calc: '~119k Backblaze B2 customers (the indie/dev wedge) × $750 ARPU = $89M B2 ARR — call that the current indie object-storage SAM. Add Cloudflare R2\'s dev base + Vercel Blob\'s Next.js footprint = $300–500M of indie/AI-dev storage spend addressable today. MCP\'s 97M monthly SDK downloads signals the agent-driven storage wedge is forming.',
      sources: [
        s('Backblaze — FY25 Results', 'https://ir.backblaze.com/news/news-details/2026/Backblaze-Announces-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx'),
        s('Cloudflare R2 GA', 'https://blog.cloudflare.com/r2-ga/'),
      ],
    },
    som: {
      headline: '~$5–15M ARR by year 5',
      proxy: 'Capture ~10% of the Backblaze B2 indie wedge equivalent via MCP-native distribution.',
      assumptions: [
        '50k AI-native solo founders (~0.05% of GitHub\'s 100M+ devs, ~10% of B2\'s 119k customer base today)',
        '70% free / 25% Solo $9 / 5% Pro $29',
        'Paid blended ARPU ≈ $148/yr × 15k paid = $2.2M ARR (yr 3) → $10–15M ARR (yr 5)',
      ],
      analog: 'Backblaze B2 went from a "wrap durable storage cheap" indie wedge in 2015 to $88.9M ARR / 119k customers / $750 ARPU / 27% YoY growth in 2025. Cloudflare R2 went 12k devs at GA (Sep 2022) to a material slice of CF\'s $2.17B FY25 in three years.',
      sources: [
        s('Backblaze — FY25 Results', 'https://ir.backblaze.com/news/news-details/2026/Backblaze-Announces-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx'),
        s('Cloudflare — Q4 2025', 'https://cloudflare.net/files/doc_financials/2025/q4/Q4-25-Exhibit-99-1_FINAL.pdf'),
      ],
    },
    incumbents: [
      {
        name: 'AWS S3',
        position: '~$15–20B est. revenue (segment of $128.7B AWS FY25), ~60%+ object storage share',
        url: 'https://aws.amazon.com/s3/pricing/',
        vulnerabilities: [
          { kind: 'Tech debt', detail: '8+ layers of access control (IAM + bucket policy + ACL + Block Public Access + KMS + access points + Object Lambdas + cross-account). Globally-unique bucket names = "Bucket Monopoly" attack surface. Console "originally written by a monk being crushed by a wine barrel" (Corey Quinn).' },
          { kind: 'Business model misalignment', detail: 'Egress fees ($0.09/GB) are the profit center — CMA, FTC, and EU Commission all opened 2025 antitrust probes specifically on egress + lock-in. Account creation requires credit card + console + IAM root user before a single API call.' },
          { kind: 'Regulatory / channel dependency', detail: 'UK CMA Strategic Market Status designation pending; EU DMA core-platform review live; FTC expanded inquiry 2025. Egress fees explicitly targeted.' },
          { kind: 'Cultural / incentive trap', detail: 'Cannot credibly add "no console, MCP-native, $9 flat" without cannibalizing the IAM-console-egress flywheel that funds the rest of AWS.' },
        ],
      },
      {
        name: 'Cloudflare R2',
        position: 'Material slice of $2.17B CF FY25 (29.8% YoY)',
        url: 'https://developers.cloudflare.com/r2/pricing/',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Tied to Cloudflare account model + Workers paradigm; S3-compat API but no native multi-tenant JWT primitive — every customer rolls their own per-user prefix + auth. No MCP server.' },
          { kind: 'Business model misalignment', detail: 'Zero-egress wedge is brilliant for media/CDN, but Class A operations ($4.50/M) punish chatty agent workloads. Pricing assumes humans browsing files, not agents iterating.' },
          { kind: 'Regulatory / channel dependency', detail: 'Increasingly enterprise-led — Q4\'25 had 73% of revenue from $100k+ customers and a $42.5M ACV deal.' },
          { kind: 'Cultural / incentive trap', detail: 'Cloudflare\'s "Agentic Internet" pitch is Workers + Workers AI, not storage. R2 is plumbing, not a standalone agentic primitive.' },
        ],
      },
      {
        name: 'Backblaze B2',
        position: '$79.9M FY25 revenue, +26% YoY, 119k customers, $750 ARPU',
        url: 'https://www.backblaze.com/cloud-storage/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Application Key UI requires console signup, key gen, scope selection — the exact friction foundr.host wraps. No MCP server. No JWT-per-tenant. Founded 2007 mindset (backup-first).' },
          { kind: 'Business model misalignment', detail: 'Pivoting upmarket — "Flamethrower" startup program, $15M neocloud TCV deals, "$50k+ ARR customers grew 73%." The indie/solo-dev segment becomes wallet-share farm for enterprise expansion.' },
          { kind: 'Cultural / incentive trap', detail: '18-year-old company doing GTM transformation toward enterprise. Cannot credibly stay "solo founder primitive" while courting $50k+ ARR neoclouds — which is why we wrap them.' },
        ],
      },
    ],
    winThesis: [
      'MCP-native is the entire wedge. 97M monthly MCP SDK downloads, 10k+ servers, Linux Foundation governance — none of S3 / R2 / B2 ship a first-party MCP server.',
      'JWT-per-tenant collapses multi-tenant boilerplate. Every indie founder on R2/B2 rebuilds tenant isolation by hand — we ship it as the primitive, the way Clerk wrapped auth.',
      'Quote-tweet free tier is a distribution mechanic, not a cost. 1GB free for a public tweet is unit-economically rational on top of B2 ($0.006/GB/mo wholesale) — CAC-negative loop incumbents structurally can\'t copy.',
      'Flat pricing kills the egress-bill nightmare. Solo founders rank "predictable bill" above price. AWS may be forced to flatten by FTC/CMA/EU probes — but only after years of procedural movement.',
      'Ride the agent-spend wave, not the human-storage wave. AI-powered storage TAM grows 23–25% CAGR vs. base 14–16% — "storage for your agents" rides the faster curve.',
      'Sub-namespace under foundr.* ecosystem distribution. foundr.host inherits cross-sell from every other product as the default storage; Backblaze had to build distribution from scratch over 18 years.',
    ],
  },

  'foundr-work': {
    tam: {
      headline: '$11.0B / yr (2025) → $30.2B by 2030 (22.3% CAGR)',
      proxy: 'AI orchestration market (agent orchestration platforms + agent builders + model serving + durable execution) per MarketsandMarkets. Cross-checks: AI agents market $7.84B → $52.6B (46.3% CAGR); agentic orchestration + memory $6.27B → $28.45B (Mordor).',
      calc: '$11.02B (2025) → $30.23B (2030) at 22.3% CAGR (MarketsandMarkets AI Orchestration). The orchestration/runtime layer foundr.work plays in is the convergence of three published markets — AI orchestration, AI agents, and agentic memory.',
      sources: [
        s('MarketsandMarkets — AI Orchestration', 'https://www.marketsandmarkets.com/Market-Reports/ai-orchestration-market-148121911.html'),
        s('Mordor — Agentic Orchestration + Memory', 'https://www.mordorintelligence.com/industry-reports/agentic-artificial-intelligence-orchestration-and-memory-systems-market'),
        s('MarketsandMarkets — AI Agents', 'https://www.marketsandmarkets.com/Market-Reports/ai-agents-market-15761548.html'),
      ],
    },
    sam: {
      headline: '~$2.0B / yr (2026), reaching ~$8B by 2031',
      proxy: 'Agentic AI **frameworks** sub-segment (OSS-friendly, excludes hyperscaler-locked platforms). OSS share is 63.8% of framework market in 2025 (Mordor).',
      calc: 'Agentic AI frameworks market = $2.99B (2025) → $4.11B (2026) → $19.3B (2031) at 36.3% CAGR. OSS-friendly share (~64%) × addressable-to-small-teams (~50%) = $1.3–2.0B in 2026 SAM. ARPU benchmark: $29–$199/mo × ~5–10M weekly TS/Python agent devs (Mastra 300K weekly npm DLs, LangChain 90M monthly DLs, Pydantic-AI 17K stars).',
      sources: [
        s('Mordor — Agentic AI Frameworks', 'https://www.mordorintelligence.com/industry-reports/agentic-artificial-intelligence-frameworks-market'),
        s('LangChain — Series B', 'https://www.langchain.com/blog/series-b'),
        s('AI Tools Atlas — Mastra Review', 'https://aitoolsatlas.ai/tools/mastra/review'),
      ],
    },
    som: {
      headline: '$15–30M ARR by year 3; $60–120M by year 5',
      proxy: 'OSS-first → hosted-runtime conversion. Vercel/Next.js + Mastra/Cloud + LangSmith precedent.',
      assumptions: [
        'OSS conversion to hosted = 1–2% (Elastic / OpenView precedent: ~1% converts but builds multi-billion ARR)',
        'Year-3 target: 200K weekly npm downloads (Mastra hit 300K in 15 months) × 1.5% conversion = 3,000 paying accounts × $80/mo blended ARPU ($29 Solo / $199 Pro mix) = ~$35M ARR ceiling',
        'Year-5 target: 600K weekly + 2% conversion + $100 ARPU = $144M ARR ceiling',
        'Pricing anchored to indie hackers — 5–10× cheaper than Temporal Cloud ($100/mo floor)',
      ],
      analog: 'Mastra: 22K stars + 300K weekly npm DLs + $13M YC seed in 15 months (Jan 2026). LangChain: $16M ARR / 1K customers / 90M monthly DLs / $1.25B valuation. Temporal: 380% YoY revenue growth, 20M installs/month, $5B valuation. Vercel: Next.js OSS → $340M ARR over ~10 years.',
      sources: [
        s('Monetizely — OSS Free→Paid Benchmark', 'https://www.getmonetizely.com/articles/whats-the-optimal-conversion-rate-from-free-to-paid-in-open-source-saas'),
        s('Getlatka — LangChain', 'https://getlatka.com/companies/langchain'),
        s('Temporal — $300M raise', 'https://temporal.io/news/temporal-raises-300M-to-make-agentic-ai-real-for-companies'),
      ],
    },
    incumbents: [
      {
        name: 'LangChain / LangGraph',
        position: '$1.25B valuation, $16M ARR, 90M monthly DLs, 118K stars',
        url: 'https://www.langchain.com/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'LCEL pipe operator + private `#graph` field cause silent state loss across thread boundaries (Issue #10144). Cross-thread checkpoint contamination in multi-tenant prod (Issue #2040). Stale `structured_response` from checkpoint causing premature exit (Issue #36957). Five+ years of v0.x breaking changes across four repos (langchain, langgraph, langsmith, langgraph-checkpoint-postgres).' },
          { kind: 'Business model misalignment', detail: 'LangSmith (paid) is observability OVER LangChain code — pulls users toward Python + graph-builder paradigm. Sequoia/IVP-class burn forces enterprise sales motion (~35% of F500 logos) that ignores solo founders.' },
          { kind: 'Regulatory / channel dependency', detail: 'Sales anchored on LangGraph Platform + LangSmith Cloud. Their cloud IS the monetization wedge — releasing a portable, hosted-optional declarative DSL would torpedo their $125M Series B thesis.' },
          { kind: 'Cultural / incentive trap', detail: 'Built around "we abstract LLM complexity." Model providers absorbed function calling, structured outputs, memory, tool routing in 18 months. The abstraction is shrinking faster than the company can pivot.' },
        ],
      },
      {
        name: 'CrewAI',
        position: '~$100M valuation, 60% F500 logos, 450M agents / month, 47.8K stars, ~$3.2M ARR, $18M Series A (Insight)',
        url: 'https://crewai.com/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: '`ChatWithCrewFlow.__init__` makes blocking LLM call at module import — crashes containers on any LLM hiccup, fails k8s/Railway health checks (Issue #5510). `output_pydantic` leaks into tool-calling loop, skips tool execution on non-OpenAI LLMs since v1.9.0 (Issue #5472).' },
          { kind: 'Business model misalignment', detail: 'CrewAI AOP (Agent Operations Platform, Nov 2025) is observability/governance for enterprises. Seven-figure deals with KT, PwC, IBM, Capgemini are the revenue. Solo founder running a single agent isn\'t a customer — they\'re a top-of-funnel demo. Tier gap: free → Basic $99 → Standard $6k/yr → Ultra $120k/yr leaves the indie tier wide open.' },
          { kind: 'Cultural / incentive trap', detail: '"Role + goal + backstory" Python metaphor pre-dates Claude Code\'s rise as the dominant agent IDE. 230K DeepLearning.AI course completions with Andrew Ng compound the Python lock-in — pivoting to YAML/TS would orphan the educational moat.' },
        ],
      },
      {
        name: 'Mastra',
        position: '$13M YC seed, 24K stars, 300K weekly npm DLs, Replit/PayPal/Adobe as customers',
        url: 'https://mastra.ai/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: '`agent.network()` hardcodes routing prompts that override user instructions — agents auto-execute past "wait for input" gates (Issue #9137). Sub-agent threads start fresh, losing parent context (Issue #13825). Supervisor mode doesn\'t forward client tools to sub-agents (Issue #15247). Approval mode serializes parallel sub-agent calls (Issue #15887).' },
          { kind: 'Business model misalignment', detail: 'Mastra Cloud is the monetization. Code-first SDK (`new Agent({...})` in TS) — every config is bespoke code, not portable spec. No declarative surface a non-TS engineer can audit. Tier jump from Starter $0 → Teams $250/mo skips the solo founder.' },
          { kind: 'Cultural / incentive trap', detail: 'Gatsby alumni founders → frontend-framework DNA → assume "TypeScript IS the answer." YAML/declarative would be a positioning rewrite. Closest direct competitor; their advantage is funding, their weakness is the code-first surface.' },
        ],
      },
    ],
    winThesis: [
      'Claude Code / Codex skill-native distribution. `claude mcp add foundr-work` becomes muscle-memory. CrewAI/LangChain require `pip install` + tutorial reading; Mastra requires `npm install` + reading docs. We meet the AI-native solo founder in the IDE they already live in.',
      'YAML > Python decorators for the solo-founder audience. A `worker.yaml` is reviewable by the founder\'s non-engineer cofounder, reproducible day-180 when the engineer forgot what they built, and diffable in git PRs. CrewAI\'s role/goal/backstory is still Python; LangGraph\'s graph is still code.',
      'MIT + BYO LLM key default. $0 starting price beats CrewAI Enterprise (custom), LangGraph Platform (usage-based), Mastra Cloud (tier-priced). Hosted Solo $29 anchors below Temporal Cloud\'s $100 floor — the bottom of the durable-execution market is wide open.',
      'Stateful BY SPEC, not by checkpoint plumbing. LangGraph users hit Issues #36957 / #2040 / #10144 — state silently goes missing. foundr.work declares state in YAML; the runtime owns it. The differentiator that closes the trust gap LangChain can\'t close without a v1 rewrite.',
      'No graph-builder cognitive tax. dev.to (May 2026): "Graph-based thinking isn\'t how most engineers naturally model problems… first PR will have comments asking why is this an edge and not a node." YAML sidesteps this entirely.',
      'Spec-hash versioning solves the "framework moved a minor version, my graph broke" complaint that haunts LangGraph + CrewAI — the YAML hash IS the worker version, and the runtime guarantees the same spec compiles to the same behavior.',
    ],
  },

  'foundr-credit': {
    tam: {
      headline: '~$8B / yr (2025)',
      proxy: 'Annual flow of startup credits across hyperscalers + frontier-model providers + GPU specialists + SaaS perk programs, plus adjacent B2B SaaS lead-gen spend.',
      calc: 'AWS Activate ~$1B/yr ($7B+ cumulative since 2013) + Azure for Startups (~$1B notional) + GCP for Startups (~$0.6B) + OpenAI/Anthropic/Modal/CoreWeave/NVIDIA ($1–2B notional) + SaaS perk catalogs (~$2–3B notional) + B2B SaaS affiliate (~$0.5–1B addressable).',
      sources: [
        s('AWS — How Activate Works', 'https://www.aboutamazon.com/news/aws/how-aws-activate-program-works'),
        s('Microsoft for Startups Benefits', 'https://learn.microsoft.com/en-us/startups/benefits'),
        s('GCP for Startups', 'https://cloud.google.com/blog/topics/startups/google-cloud-supports-next-generation-startups'),
        s('Mercury Perks', 'https://mercury.com/perks'),
      ],
    },
    sam: {
      headline: '~$600M / yr',
      proxy: 'AI-native founders (solo or ≤5 person), pre-Series A, no enterprise procurement, no dedicated ops hire.',
      calc: 'Stripe Atlas Q1 2026: ~2,600 new AI solo founders/quarter (~10K/yr) on top of ~30K+ AI-native solo/small teams US installed base. Globally 3–5×. ~50–80K serviceable founders × $8–12K/yr claimable AI-relevant credit value left on the table ≈ $500–800M of unrealized value monetizable via SaaS + affiliate.',
      sources: [
        s('Carta — Solo Founders', 'https://carta.com/data/solo-founders-report/'),
        s('OfficeChai — Stripe AI Solo Data', 'https://officechai.com/ai/number-of-companies-with-solo-founders-growing-faster-than-those-with-multiple-founders-since-ai-arrival-says-stripe-data/'),
      ],
    },
    som: {
      headline: '$18–28M ARR / yr by year 5',
      proxy: 'Subscription + affiliate rev share on credit redemptions + concierge attach.',
      assumptions: [
        '150K registered free founders (1.5–2% of global AI-native pool over 5 years via quote-tweet viral loop)',
        '8% paid conversion → 12K paid; blended ARPU ~$32/mo → ~$4.6M direct subscription ARR',
        'Affiliate / referral fees on ~500K matched applications/yr × $25 blended payout ≈ $12M',
        'Concierge attach on Pro adds $3–5M services',
      ],
      analog: 'FoundersCard hit ~$9.1M revenue / ~50K members at $295–595/yr without AI/matching. F6S sits at ~$7M revenue on 6.2M users monetizing the vendor side.',
      sources: [
        s('Growjo — FoundersCard', 'https://growjo.com/company/FoundersCard'),
        s('StartupIntros — F6S', 'https://startupintros.com/orgs/f6s'),
      ],
    },
    incumbents: [
      {
        name: 'F6S',
        position: '~6.2M users, ~$7M revenue, freemium with vendor/EU-grant side monetization',
        url: 'https://www.f6s.com/',
        vulnerabilities: [
          { kind: 'Tech debt', detail: '2011-era listing platform; Cloudflare bot-wall and stale UX; 700K/yr application volume drowns founder-side signal; no LLM-native matching, just keyword filters.' },
          { kind: 'Business model misalignment', detail: 'Monetizes accelerators, grant programs, EU innovation projects — not founders. Founder is the lead; incentive is to maximize applications routed to paying programs, not maximize the founder\'s claimed dollars per hour.' },
          { kind: 'Regulatory / channel dependency', detail: 'Heavy revenue concentration in EU Horizon / Eurostars open calls; vulnerable to program-budget cycles and Brussels procurement reform.' },
          { kind: 'Cultural / incentive trap', detail: 'Optimized for accelerator program managers and grant-writers, not for an AI solo founder who wants the next $5K of GPU credit by Thursday.' },
        ],
      },
      {
        name: 'FoundersCard',
        position: '~50K members, ~$9.1M revenue, $295–595/yr membership',
        url: 'https://founderscard.com/',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Portal is essentially a static perks directory; no API, no programmatic eligibility check, no AI-stack matching. Static catalog refreshed manually.' },
          { kind: 'Business model misalignment', detail: 'Monetizes annual membership for lifestyle perks (airline status, FedEx 50%, hotel discounts) — dominant member value is travel, not infrastructure credits.' },
          { kind: 'Regulatory / channel dependency', detail: 'Airline/hotel co-marketing renewals are the load-bearing revenue line; one major partner pulling out reprices the membership.' },
          { kind: 'Cultural / incentive trap', detail: 'Invite-only "elite" framing alienates the bootstrapped solo AI builder; pricing 15–50× foundr.credit Pro and signals exclusivity over throughput.' },
        ],
      },
      {
        name: 'AI Credit Ladder / SaaSOffers / hand-curated indexes',
        position: 'Loss-leader content platforms; SaaSOffers $79/yr Premium, AI Credit Ladder pre-launch with AdSense placeholder',
        url: 'https://www.aicreditladder.com/',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'AI Credit Ladder is a static-rendered Next.js index ("data under human verification"); SaaSOffers is a hand-verified catalog of 477 deals with no eligibility engine, no founder-state model, no application autofill.' },
          { kind: 'Business model misalignment', detail: 'SaaSOffers\' $79/yr flat is the same as foundr.credit Pro but without concierge — pure list access. AI Credit Ladder leans on AdSense (vendor pays per click, founder is the product).' },
          { kind: 'Regulatory / channel dependency', detail: 'Brex/Mercury perks depend on the issuing bank/card relationship surviving.' },
          { kind: 'Cultural / incentive trap', detail: 'Indexes treat credits as a "list" problem (more entries = better) instead of a "what should this founder do next Tuesday" problem; none model the founder\'s current state.' },
        ],
      },
    ],
    winThesis: [
      'State-aware matching, not a directory. Treat the founder\'s (entity_status, funding_stage, current_stack, prior_claims) as the primary key. Surface the next 3 highest-EV applications, not 477 listings.',
      'Quote-tweet-to-unlock as zero-CAC viral loop. Full read + digest gated by a public attribution post — turns every claim into distribution.',
      'Concierge applications on Pro is the only line item competitors literally cannot ship without hiring humans. F6S/FoundersCard/AI Credit Ladder business models forbid it.',
      'Affiliate rev-share with vendors at higher take rate than Capterra\'s $0.50–$20/lead — we deliver a qualified, state-matched founder.',
      'AI-native index half-life. Programs change weekly (Microsoft retired "Founders Hub" Jul 2025). A live LLM-scraped index re-verifying weekly beats any hand-curated competitor\'s drift.',
      'Solo-founder, no-entity-required positioning. Sequence "claim before incorporation" credits (Modal, Groq, Hugging Face free tiers) first, then graduate up the ladder.',
    ],
  },

  'foundr-money': {
    tam: {
      headline: '~$28B / yr (2025)',
      proxy: 'SMB accounting software ($18.4B, 2025) + SaaS spend management ($9.8B, 2025) — the two adjacent categories foundr.money fuses.',
      calc: '$18.4B (Dataintelo SMB accounting) + $9.8B (Dataintelo SaaS spend mgmt) ≈ $28.2B. Sanity-check: Intuit\'s GBSG is $11.1B FY25 +16% YoY with QBO accounting +22%.',
      sources: [
        s('Dataintelo — SMB Accounting', 'https://dataintelo.com/report/accounting-software-for-small-businesses-market'),
        s('Dataintelo — SaaS Spend Mgmt', 'https://dataintelo.com/report/saas-spend-management-software-market'),
        s('Intuit Investor Relations', 'https://investors.intuit.com/news-events/press-releases/detail/1266/'),
      ],
    },
    sam: {
      headline: '~$1.4B / yr',
      proxy: 'AI-native solo founders + tiny indie teams running 3–10 projects in parallel, often on personal card with no formal entity.',
      calc: '~48,000 solo-founded startups launched 2025 (ShipSquad +140% YoY) + installed base. Stripe Atlas hit 100K cumulative incorps Q1\'26 (+130% YoY). Multi-project AI-native solo cohort ~3M globally (Wave 2.8M freelance base × 73% AI-tools-daily share, discounted for "running 3+ projects") × ARPU ~$40/mo ≈ $1.4B.',
      sources: [
        s('ShipSquad — Solo Founder Index', 'https://shipsquad.ai/blog/solo-founder-index-2026'),
        s('Stripe — Atlas 2025 review', 'https://stripe.com/blog/stripe-atlas-startups-in-2025-year-in-review'),
        s('Wave Accounting', 'https://workspace.google.com/marketplace/app/accounting_by_wave/853565579379'),
      ],
    },
    som: {
      headline: '~$24M ARR by year 5',
      proxy: '~1% capture of the multi-project AI-native segment via MCP + project-first wedge.',
      assumptions: [
        '50K paying solo founders × $40/mo blended ARPU',
        '$19 Solo + $49 Pro mix',
        'Free quote-tweet drives viral top-of-funnel; 8–12% conversion to Solo, 2–3% to Pro',
        'Year 1 ~3K paid; year 3 ~20K; year 5 ~50K',
      ],
      analog: 'Mercury at year 5 (~$50M ARR, 2022). Helicone hit $100K ARR in <1 month from Gateway launch. 61% of solo founders flag unexpected AI API costs as a top-3 pain — unowned category.',
      sources: [
        s('Sacra — Mercury', 'https://sacra.com/c/mercury/'),
        s('In New Life — State of Solo Founders 2026', 'https://innewlife.me/weekly-digest-founder/state-of-solo-founders-2026/'),
      ],
    },
    incumbents: [
      {
        name: 'Ramp',
        position: '$1B ARR (Oct 2025), $32B valuation (Nov 2025), +110% YoY',
        url: 'https://ramp.com/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Card-issuing rails + expense-report workflow built for finance teams approving employee spend, not for a solo operator who IS the employee. Project-tagging is a "department" GL dimension, not a first-class P&L per micro-startup.' },
          { kind: 'Business model misalignment', detail: 'Requires legal entity + Plaid-verified business bank with $25K+ cash. ~70% revenue is interchange — solo founders running $300/mo of OpenAI spend on a personal Amex generate ~$8/mo interchange, structurally unprofitable.' },
          { kind: 'Regulatory / channel dependency', detail: 'Bank partners (Sutton, Celtic), Visa/Mastercard networks, KYB requirements excluding un-incorporated solo founders.' },
          { kind: 'Cultural / incentive trap', detail: '$32B at ~32× revenue forces ACV expansion. Selling $19/mo to Indie Hackers dilutes the enterprise narrative.' },
        ],
      },
      {
        name: 'Brex',
        position: '$700M ARR (Aug 2025), +50% YoY, selling to Capital One for $5.15B',
        url: 'https://www.brex.com/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Original underwriting model gated on VC funding — explicitly excludes the bootstrapped solo founder. Capital One acquisition will further regulate into a bank-style KYB posture.' },
          { kind: 'Business model misalignment', detail: '~70% interchange-heavy revenue mix needs corporate-card volume. Re-pivoted to enterprise (70% enterprise revenue growth Q1\'25, NRR >130%) — moved away from the startup wedge.' },
          { kind: 'Regulatory / channel dependency', detail: 'Capital One subsidiary — bank-grade compliance, no room for "tag a personal card charge to a project via MCP."' },
          { kind: 'Cultural / incentive trap', detail: 'Regulated parent forces enterprise SaaS posture; serving solo founders without entities is brand-incompatible.' },
        ],
      },
      {
        name: 'QuickBooks (Intuit)',
        position: '$11.1B GBSG FY25 revenue, +16% YoY, 31% US SMB share',
        url: 'https://quickbooks.intuit.com',
        vulnerabilities: [
          { kind: 'Tech debt', detail: '1980s double-entry mental model exposed through a 2010s web UI. "Classes" and "Projects" are bolted on, require Plus/Advanced ($90+/mo). No native LLM/cloud invoice ingestion (OpenAI/Anthropic/Vercel invoices are unstructured PDFs they can\'t auto-categorize).' },
          { kind: 'Business model misalignment', detail: 'Built for the bookkeeper-mediated SMB, monetizes via per-seat + payroll add-ons. AI-native solo founder doesn\'t have a bookkeeper and won\'t add seats.' },
          { kind: 'Regulatory / channel dependency', detail: 'Locked into the accountant channel (ProAdvisor program) which actively resists "no-entity, personal-card, MCP-tagged" workflows because it bypasses billable hours.' },
          { kind: 'Cultural / incentive trap', detail: 'Public co at $200B+ market cap optimizing for Mailchimp/mid-market upsell. A $19/mo solo product is a rounding error and a margin drag.' },
        ],
      },
    ],
    winThesis: [
      'Per-project P&L is the primitive, not a tag. The product is born around "I run 5 micro-startups on one personal Amex."',
      'AI/cloud invoice ingestion is the moat. First-class parsers for OpenAI/Anthropic/Vercel/Supabase/Cursor invoices auto-tag to project via MCP — Ramp/Brex/QuickBooks can\'t categorize natively.',
      'No entity required = no KYB gate. Personal cards/bank via Plaid only; tax-aware export at year-end. Cuts out 100% of Ramp/Brex\'s underwriting friction.',
      'MCP-first distribution. Free quote-tweet tier makes the product viral inside Claude Code / Cursor where the buyer already lives. CAC ~$0.',
      '$19/mo Solo + $49/mo Pro is structurally defensible — incumbents can\'t profitably serve the segment.',
      'Accountant export at $49 Pro captures the multi-entity graduation path. When one project breaks out and the founder incorporates, foundr.money hands a Schedule C / 1099 / multi-entity export to a CPA.',
    ],
  },

  'foundr-courses': {
    tam: {
      headline: '~$15.7B / yr (2025) — global IT & software-development training services',
      proxy: 'IT/software training services market (MRFR), of which programming-education is $16.8B (Dataintelo) and online programming courses alone are $3.2B (Verified Market Reports).',
      calc: '~28.7M global developers × ~$500 avg annual learning spend (Dataintelo dev count; spend derived from Udemy consumer ARPU + Frontend Masters $234/yr blended).',
      sources: [
        s('MRFR — IT Training Services', 'https://www.marketresearchfuture.com/reports/it-and-software-development-training-services-market-67110'),
        s('Dataintelo — Programming Education', 'https://dataintelo.com/report/global-programming-education-market'),
        s('Verified Market Reports — Online Programming Courses', 'https://www.verifiedmarketreports.com/product/online-programming-courses-market/'),
      ],
    },
    sam: {
      headline: '~$600M–$1.1B / yr',
      proxy: 'AI-native solo/indie devs (Cursor 1M paying subs + Claude Code Pro cohort + adjacent AI-curious ≈ 2–4M people) buying hands-on, repo-backed agentic-build training.',
      calc: '3M target devs × ~$200–$350 annual self-directed learning wallet (between Frontend Masters $234 and Maven cohort blended ARPU).',
      sources: [
        s('Frontend Masters Join', 'https://frontendmasters.com/join/'),
        s('TechCrunch — Maven pivot', 'https://techcrunch.com/2022/09/13/mavens-a16z-backed-teaching-platform-pivots-from-creators-to-experts/'),
      ],
    },
    som: {
      headline: '~$6–18M ARR',
      proxy: 'Free quote-tweet funnel → library viewers → Solo + Pro conversion + sponsorships + Foundr-product attach.',
      assumptions: [
        '~150–300K library viewers/yr (Theo @t3dotgg pulls 99.7M lifetime views as comparable channel)',
        '2–4% convert to Solo $19/mo (~3–12K subs → $0.7–2.7M ARR)',
        '0.5–1% of Solo upgrade to Pro $199/mo (~150–600 seats → $0.4–1.4M ARR)',
      ],
      analog: 'Marc Lou portfolio $1.032M in 2025 (ShipFast $20K/mo + CodeFast $20K/mo + DataFast $15.8K MRR). Total TypeScript >$2.5M lifetime (Matt Pocock, single-creator). Frontend Masters ~$4.3M ARR on subscription.',
      sources: [
        s('Marc Lou — 2025 revenue post', 'https://newsletter.marclou.com/p/i-made-1-032-000-in-2025'),
        s('EveryDev — Matt Pocock', 'https://www.everydev.ai/developers/matt-pocock'),
        s('Growjo — Frontend Masters', 'https://growjo.com/company/Frontend_Masters'),
      ],
    },
    incumbents: [
      {
        name: 'ShipFast (Marc Lou)',
        position: '~$20K/mo / ~$240K ARR product line; >7,200 customers; $299 one-time',
        url: 'https://shipfa.st',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Boilerplate snapshot frozen between revs — once you customize you fork forever; no "live shipping product" tracking the framework\'s monthly churn (Next 15 → 16, Cursor 3.0, MCP, Skills).' },
          { kind: 'Business model misalignment', detail: '$299 one-time → zero recurring; no Discord MRR layer, no PR-review premium tier. Marc himself notes 20% YoY decline in 2025 despite product diversification.' },
          { kind: 'Regulatory / channel dependency', detail: '100% audience-pull (X + Marc\'s personal brand). Single-channel risk; no organic SEO moat (boilerplate niche is saturated — "hundreds of clones").' },
          { kind: 'Cultural / incentive trap', detail: 'Solo-creator ceiling — Marc IS the brand. Cannot scale instructor count, cohort throughput, or 1:1 reviews beyond himself.' },
        ],
      },
      {
        name: 'Frontend Masters / Total TypeScript',
        position: '$4.3M ARR (FM) / $2.5M lifetime (TTS)',
        url: 'https://frontendmasters.com',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Video-first LMS, no live repo coupling. Workshops re-record only when a framework breaks visibly — Cursor/Claude/MCP churn is too fast for studio-quality cadence.' },
          { kind: 'Business model misalignment', detail: 'FM = flat $39/mo all-you-can-watch (no premium 1:1); TTS = $1,200 single-payment workshop (no ongoing relationship). Neither captures the Pro $199/mo "I want a human to review my PR" tier.' },
          { kind: 'Regulatory / channel dependency', detail: 'Enterprise/team motion (FM Boost) is incumbent-defended; foundr.courses sidesteps by being explicitly solo-only/free for the library.' },
          { kind: 'Cultural / incentive trap', detail: 'Instructor-as-celebrity model — TTS IS Matt Pocock; new instructor onboarding ~6mo per workshop.' },
        ],
      },
      {
        name: 'Maven',
        position: '$30M raised (a16z), ~$9M GMV after 18 months, 400+ courses',
        url: 'https://maven.com',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Thin LMS layer + Zoom; no code substrate. AI-native dev cohorts ship slide decks + Notion templates, not running repos.' },
          { kind: 'Business model misalignment', detail: 'Marketplace take-rate (~10–15%) on $1–3K cohorts — instructor-economics-driven, not student-economics-driven. Cohorts run 4–8 weeks then end; no Discord-MRR retention loop.' },
          { kind: 'Regulatory / channel dependency', detail: 'Instructor-supply constrained — must recruit + vet experts who already have audiences (the people Total TypeScript and ShipFast already absorbed).' },
          { kind: 'Cultural / incentive trap', detail: '"Live cohort" dogma forces synchronous scheduling; AI-native solo founders are async-first. Completion-rate brag (75%) hides the much smaller paying-conversion rate.' },
        ],
      },
    ],
    winThesis: [
      'Repo IS the live shipping product. Every course\'s "source" is the actual production foundr.* codebase — not a snapshot. Students clone what\'s running in prod today.',
      'Free quote-tweet acquisition flywheel. Zero CAC channel piggybacking on X algorithm + the foundr.* ecosystem\'s own surface area.',
      'Three-tier price ladder with real recurring layer. Free → Solo $19/mo Discord → Pro $199/mo 1:1 PR reviews (no incumbent offers this).',
      'Agentic-build is the only topic. Cursor/Claude/MCP curriculum is where Frontend Masters/TTS are weakest and Maven cohorts are highest-priced.',
      'Instructor-supply moat = the foundr.* contributors themselves. Each product\'s actual maintainer is its course\'s teacher. Zero recruiting cost.',
      'Cross-sell into the foundr.* surface. Every course ends with "now ship your own foundr.world / foundr.host / foundr.company."',
    ],
  },

  'foundr-website': {
    tam: {
      headline: '~$8.6B / yr (2026)',
      proxy: 'Website-builder software market ($5.4–6.4B in 2026) + AI-powered website-builder slice ($3.24B in 2026, 20.5% CAGR to $17.4B by 2035).',
      calc: 'Mid-point of researchandmarkets ($5.40B \'26) + Wix \'25 revenue $2.0B+ run-rate + Squarespace $1.1B TTM + Webflow $213M + Lovable $400M ARR (Feb \'26) + Bolt $40M+ + v0 ~$42M + Framer + Carrd + long-tail. Conservative blend: ~$8.6B.',
      sources: [
        s('Research & Markets — Website Builder', 'https://www.researchandmarkets.com/reports/6075310/website-builder-software-market-report'),
        s('Precedence — AI Website Builder', 'https://www.precedenceresearch.com/ai-powered-website-builder-market'),
        s('Mordor — Website Builders', 'https://www.mordorintelligence.com/industry-reports/website-builders-market'),
      ],
    },
    sam: {
      headline: '~$600M–$1.2B / yr',
      proxy: 'AI-native solo founders / indie hackers who (a) want real code + own domain, (b) reject Webflow/Squarespace lock-in, (c) price-sensitive at the $1–$20/mo floor.',
      calc: '36% of new US startups are solo-founded (Carta \'25); AI-builder market $3.24B \'26 → take ~20–35% indie/personal slice. Mordor: "individual segment 19.06% CAGR; plans under $15/mo secured 38.1% demand."',
      sources: [
        s('Carta — Solo Founders', 'https://carta.com/data/solo-founders-report/'),
        s('Mordor — Website Builders', 'https://www.mordorintelligence.com/industry-reports/website-builders-market'),
      ],
    },
    som: {
      headline: '~$12M–$40M ARR by year 5',
      proxy: 'Quote-tweet viral wedge + $1 one-time loss-leader + Pro $19/mo recurring.',
      assumptions: [
        '500K–1M signups via free tier (Lovable hit 2.3M in 8mo; Bolt 7M in 14mo; v0 4M+; Carrd 2.2M in ~8yr without ads)',
        'Solo $1 one-time: 5% conversion → ~$25–50k/yr (loss-leader)',
        'Pro $19/mo: 1.5–3% of free converts → 7.5–30k subs × $228/yr = $1.7–6.8M ARR year 2, scaling 3–5× by year 5',
      ],
      analog: 'Carrd ($2M ARR solo, zero ads). Lovable ($1M → $400M ARR in 14 months). Marc Lou ShipFast ($240k/yr standalone).',
      sources: [
        s('IndieHackers — Carrd $2M ARR', 'https://www.indiehackers.com/post/tech/growing-carrd-to-2m-arr-in-a-crowded-market-with-zero-marketing-by-limiting-features-dbeoP4bDlEL3zzsivdgj'),
        s('TechCrunch — Lovable +$100M month', 'https://techcrunch.com/2026/03/11/lovable-says-it-added-100m-in-revenue-last-month-alone-with-just-146-employees/'),
      ],
    },
    incumbents: [
      {
        name: 'Squarespace',
        position: '$1.1B revenue TTM \'24, $7.2B Permira take-private',
        url: 'https://www.squarespace.com',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Proprietary closed runtime; no code export; sites die if you leave; templates locked into Squarespace CMS. Cannot serve "I want Next.js source in my GitHub repo."' },
          { kind: 'Business model misalignment', detail: '$16–49/mo forever-subscription. PE-owned (Permira) = LBO debt service pressure to extract MRR, not destroy it with $1 one-time SKUs.' },
          { kind: 'Regulatory / channel dependency', detail: '90%+ inbound is paid search + brand; CPA rising as AI search erodes traditional SEO.' },
          { kind: 'Cultural / incentive trap', detail: 'Design-agency-and-photographer DNA. Cannot speak "founder", "MCP", "GitHub repo", or "vibe-coded" without inventing a new line that cannibalizes the core.' },
        ],
      },
      {
        name: 'Lovable',
        position: '$400M ARR (Feb \'26), $6.6B valuation',
        url: 'https://lovable.dev/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Builds full apps, not landing pages — output is over-engineered for a marketing site. Hosted on Lovable infra by default; export-to-repo is a Pro feature. Generates Vite, not Next.js — wrong substrate for SEO-critical landing pages.' },
          { kind: 'Business model misalignment', detail: '$25–$50/mo subscription with credit-metered prompts; punishes "set it and forget it" landing-page use case. $1 one-time is structurally incompatible (every gen burns Anthropic/OpenAI tokens billed monthly).' },
          { kind: 'Regulatory / channel dependency', detail: 'Token-cost exposure to upstream LLM provider price moves; cohort retention worsening as credit caps bite.' },
          { kind: 'Cultural / incentive trap', detail: '"Apps" framing. CRO and copywriting for a 1-page landing are second-class vs. "build a SaaS in a weekend" hero use case.' },
        ],
      },
      {
        name: 'Framer',
        position: 'Design-tool DNA, premium pricing ($15–30/mo + site fees)',
        url: 'https://www.framer.com',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Closed proprietary runtime; outputs Framer-hosted React, not your-repo Next.js. No git clone path. Animations-first means simple "headline + form + 3 sections" is over-tooled.' },
          { kind: 'Business model misalignment', detail: 'Designer-priced — too expensive for indie/solo. CMS + analytics + A/B testing bundle is wasted SKU bloat for a one-page site.' },
          { kind: 'Regulatory / channel dependency', detail: 'Heavy reliance on Figma-adjacent design Twitter; vulnerable as audience shifts toward AI-prompt-first builders.' },
          { kind: 'Cultural / incentive trap', detail: '"Designed in Framer" badge culture. Will not credibly pivot to "describe-to-generate, real code, your repo" without alienating the design-purist core.' },
        ],
      },
    ],
    winThesis: [
      'Repo-as-receipt. The Next.js + Tailwind source lands in the founder\'s GitHub on generation. Squarespace/Framer can\'t ship this without burning their hosting moat.',
      '$1 one-time price annihilates the comparison shop. Wix/Squarespace CAC ($50–150) is paid on Day 0 against an SKU that recovers in month 4; foundr.website recovers on the first click.',
      'Quote-tweet free tier on foundr.lol = Carrd-style viral footer + Twitter-native distribution (Lovable 2.3M users in 8mo; v0 4M; Bolt 7M).',
      'Pro $19/mo unlocks MCP "agent-updates" — an agent edits your landing page from Claude/Cursor. Incumbents\' proprietary runtimes can\'t route to a third-party agent.',
      '"Brand kit" Pro upsell rides the Carrd-Pro playbook ($2M ARR, zero ads).',
      'AI-search era erodes incumbents\' paid-search moat. Squarespace/Wix lose ~80% of acquisition leverage as ChatGPT/Perplexity intermediate "best website builder" queries.',
    ],
  },

  'foundr-today': {
    tam: {
      headline: '~$0.86B / yr (2026 paid + sponsored newsletter spend)',
      proxy: 'Newsletter Insights tracks 32.6K active newsletters generating $71.6M/mo (~$859M/yr). Broader "daily newsletter" media category $6.8B (2025).',
      calc: '$859M paid-sub revenue (Newsletter Insights live snapshot) + ~$400–600M sponsor-driven AI/tech newsletter spend (TLDR ~$10M+ run-rate, Rundown AI ~$10M, plus long tail) → ~$1.2B addressable, 2026.',
      sources: [
        s('Newsletter Insights — Economy', 'https://newsletterinsights.io/insights/economy'),
        s('Dataintelo — Daily Newsletters', 'https://dataintelo.com/report/daily-newsletters-market'),
        s('Creative AI News — Landscape', 'https://www.creativeainews.com/articles/ai-newsletter-landscape-2026/'),
      ],
    },
    sam: {
      headline: '~$180M / yr',
      proxy: 'AI-native solo founders + indie hackers willing to pay for an action-oriented daily AI brief.',
      calc: '~36% of new global startups are now solo-founded (Antler/Scalable.news Jan 2026); ~3–5M serious AI-native solo builders globally. If 25% are willing to pay $50–$150/yr for a vertical AI builder brief, ~$180M/yr SAM.',
      sources: [
        s('500k.io — Solopreneur Statistics 2026', 'https://500k.io/journal/solopreneur-statistics-2026'),
        s('Audoscom — Co-founders are dead', 'https://audoscom.substack.com/p/co-founders-are-dead-long-live-ai'),
      ],
    },
    som: {
      headline: '$1.8M–$4M / yr by year 5',
      proxy: 'Free subs × 3% paid conversion × blended ARPU + MCP/agent-licensing.',
      assumptions: [
        '100K free subs (Ben\'s Bites hit 110K in 13 mo) × 3% paid (Substack median, not Substack\'s marketed 5–10%)',
        '2,500 Solo @ $144/yr + 500 Pro @ $588/yr = $360K + $294K = $654K ARR at 100K free',
        'At 300K free (Rundown territory in 18 months), same mix = ~$2M ARR',
      ],
      analog: 'Lenny\'s — 1M subs, 45K paid @ $20/mo = ~$2M+/yr (4.5% conversion). Pragmatic Engineer — 1.1M subs, 10K paid @ $15/mo = $1.5M/yr, zero ads. Ben\'s Bites Pro — 162K free, 4K paid (~2.5% conversion).',
      sources: [
        s('Newsletter Insights — Lenny', 'https://newsletterinsights.io/newsletter/lenny'),
        s('Yespress — Gergely Orosz', 'https://yespress.io/gergely-orosz'),
        s('Newsletter Insights — Ben\'s Bites', 'https://newsletterinsights.io/newsletter/bensbites-com'),
      ],
    },
    incumbents: [
      {
        name: 'TLDR AI',
        position: '1.25M+ daily subs (TLDR network = 7M+ across 12 editions); parent $10M+ ARR, 22 FTE, bootstrapped',
        url: 'https://tldr.tech/ai',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Email-only delivery; no MCP/agent-readable surface; no archive search worth the name; same plaintext template since 2017. Content is human-curated — high marginal cost per issue.' },
          { kind: 'Business model misalignment', detail: 'Sponsor-funded (ads up to $30K/day) → optimizes for reach × open-rate, not reader action. Written to keep AWS/Google Cloud/Anthropic happy as sponsors, not to ship one TODO.' },
          { kind: 'Regulatory / channel dependency', detail: '100% Gmail-Promotions-tab dependent. Gmail\'s Sep 2025 "Most Relevant" sort + Apple Intelligence summarization + 5% Gmail deliverability decline in 2024 compress the open-rate ceiling.' },
          { kind: 'Cultural / incentive trap', detail: 'Media-company mindset (audience → ads). Will not voluntarily build a $49/mo personalized brief — cannibalizes the $30K sponsor unit.' },
        ],
      },
      {
        name: 'The Rundown AI',
        position: '2M+ subs, ~$10M run-rate, ~50% from Rundown University ($1K/yr course), 16 FTE',
        url: 'https://www.rundown.ai',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'No MCP surface, no RSS-as-first-class, no agent ingestion. Funnel is newsletter → X → $1K course; zero product for founders who want news compressed into a workflow.' },
          { kind: 'Business model misalignment', detail: 'Optimized to convert readers into $1K/yr course buyers (Rundown University ~$4M ARR). The newsletter is a top-of-funnel for an education product, not an action tool.' },
          { kind: 'Regulatory / channel dependency', detail: '80% of growth attributable to Rowan\'s organic X posts; algorithm changes = direct CAC shock. ~$200K/mo on paid acquisition.' },
          { kind: 'Cultural / incentive trap', detail: 'Generalist breadth (executives + non-technical) — can\'t go deep on AI-builder workflows without alienating the 60% non-builder base.' },
        ],
      },
      {
        name: 'Ben\'s Bites',
        position: '162K free / 4K paid ($25/mo), AI-builder positioning',
        url: 'https://bensbites.com',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Substack-native, no MCP, paid tier is "direct access to Ben" not a structured deliverable. Pro tier ($80/yr) is community + AMAs, not an agent-readable knowledge base.' },
          { kind: 'Business model misalignment', detail: 'Pivoted away from daily news brief into investor/operator personal-brand newsletter. Paid offer is parasocial (DM Ben) not productized — doesn\'t scale past Ben\'s calendar.' },
          { kind: 'Regulatory / channel dependency', detail: 'Substack platform tax (10%) + Substack recommendation algorithm + X (Ben\'s personal reach). Three single points of failure.' },
          { kind: 'Cultural / incentive trap', detail: 'Solo-creator economics — can\'t ship a daily-with-TODOs cadence at 162K subs without burning out or hiring (which kills the personal-brand wedge).' },
        ],
      },
    ],
    winThesis: [
      'Structured action, not narrative. Every issue ships 1 release + 3 tools + 1 pattern + 1 TODO. None of TLDR/Rundown/Ben\'s Bites ship a TODO.',
      'MCP-first archive is the Pro wedge. Claude/Cursor/Codex query the curated, dated knowledge base. No incumbent has this.',
      'Personalized weekly Pro brief ($49/mo). Use founder\'s GitHub + stack to filter the firehose. Rundown won\'t cannibalize their $1K course funnel.',
      'Quote-tweet acquisition loop — exploits X algorithm without paying for ads (Rundown burns $200K/mo).',
      'Discord + RSS for Solo tier. Pragmatic Engineer\'s 1% conversion at $15/mo proves builder-niche pays for infrastructure.',
      'Anti-Gmail moat. Multi-surface delivery (email + RSS + MCP + Discord + X DM) hedges the single-channel risk that already cost TLDR/Ben\'s Bites open-rate ceiling in 2024–25.',
    ],
  },

  'foundr-team': {
    tam: {
      headline: '~$13B / yr (2025) enterprise AI agents + copilots; ~$40B agentic AI 2026 midpoint',
      proxy: 'AI agent platforms + workforce automation + agent observability (the three layers foundr.team unifies — orchestration, governance, retro).',
      calc: 'CB Insights $13B enterprise agent revenue 2025 (150% YoY) + Information Matters $40B agentic AI 2026 midpoint (anchored to Anthropic\'s $30B run-rate). MarketsandMarkets pegs AI Agents at $7.84B (2025) → $52.62B (2030) at 46.3% CAGR.',
      sources: [
        s('CB Insights — Enterprise AI Agents', 'https://www.cbinsights.com/research/enterprise-ai-agents-market-size/'),
        s('Information Matters — Agentic AI', 'https://informationmatters.net/wp-content/uploads/2026/04/agentic-ai-market-report-forecast-Q1-2026.pdf'),
        s('MarketsandMarkets — AI Agents', 'https://www.marketsandmarkets.com/Market-Reports/ai-agents-market-15761548.html'),
      ],
    },
    sam: {
      headline: '~$2.4B / yr',
      proxy: 'Solo founders + micro-SMEs running 3–10 MCP-speaking agents — the indie tier Agentforce/Copilot Studio ignore and CrewAI Enterprise overshoots.',
      calc: '~2M global indie/solopreneur AI buyers (Sintra alone has 40K+ paying in 100 countries, n8n 230K active users half indie, YC W25 22% voice/agent) × ~$100/mo blended ARPU = $2.4B addressable annual spend. Cross-checks: Sintra €12M ARR + Lindy $5.1M + n8n $40M (half indie) underwrite $1–3B SAM.',
      sources: [
        s('Piraiee — Sintra $15.8M raise', 'https://piraiee.com/blog/sintraai-raises-158m-to-scale-its-ai-helpers'),
        s('Getlatka — Lindy', 'https://getlatka.com/companies/lindyai'),
        s('Sacra — n8n', 'https://sacra.com/c/n8n/'),
      ],
    },
    som: {
      headline: '$24M ARR by year 5 (~1% of SAM)',
      proxy: 'Free quote-tweet viral funnel + 18% Solo conversion + 4% Pro upgrade + small-team seats.',
      assumptions: [
        '80K free quote-tweet users (3 slots, $0)',
        '18% convert to Solo $19/mo (14.4K × $228/yr = $3.3M)',
        '4% convert to Pro $49/mo (3.2K × $588/yr = $1.9M)',
        '250 small-team seats × $2,400/yr = $0.6M',
        'Second cohort growing 3× → $18–24M ARR year 5',
      ],
      analog: 'Sintra hit €12M ARR in 14 months on a near-identical solo-founder ICP. Lindy reached $5.1M ARR in 18 months bootstrapped. n8n grew 5× ARR to $40M in 12 months.',
      sources: [
        s('IndieHackers — Sintra-style pivot', 'https://www.indiehackers.com/post/pivoting-to-a-6-figure-mrr-ai-business-kR3HL8woQelc5BD8iDcU'),
        s('Highland Europe — n8n €55M', 'https://www.highlandeurope.com/n8n-raises-e55-million-from-highland-europe-to-transform-workflow-automation-for-technical-teams-by-unifying-ai-code-and-human-building-blocks/'),
      ],
    },
    incumbents: [
      {
        name: 'CrewAI',
        position: '$24.5M raised, Series A Oct 2024, ~$100M valuation, 450M agentic workflows/month, 60% of Fortune 500, 4K signups/week',
        url: 'https://crewai.com/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Python framework-locked; every agent is a Python class. MCP-as-tools is bolted on, not the spine. No native budget caps — cost governance lives outside (Helicone/Langfuse, now both acquired and in turbulence).' },
          { kind: 'Business model misalignment', detail: 'Enterprise sales motion (homepage is "Request a Demo," not "Sign up"). No indie tier. Pricing gap from open-source free → enterprise "$99k+/yr" leaves solo founders unserved.' },
          { kind: 'Regulatory / channel dependency', detail: 'Insight Partners–led round = enterprise GTM lock-in. Can\'t credibly run a viral quote-tweet free tier without channel conflict.' },
          { kind: 'Cultural / incentive trap', detail: '"Loved by AI builders, trusted by AI leaders" — they answer to CIOs now, not solo founders. 4K signups/week is monetized as enterprise pipeline.' },
        ],
      },
      {
        name: 'Lindy',
        position: '$5.1M ARR 2024, $49.9M raised, $49.99–$199.99/mo, 400K professionals',
        url: 'https://www.lindy.ai/pricing',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Inbox-and-meetings shaped — built around email/calendar/phone, not a generalised MCP roster. The agent IS Lindy; you can\'t bring your own Claude Code / Cursor / custom MCP agents under one roof.' },
          { kind: 'Business model misalignment', detail: 'No free tier — 7-day trial only. $49.99 entry floor excludes "I\'m running 3 agents and want a dashboard" indie. "AI executive assistant" frame is single-agent personhood, not roster.' },
          { kind: 'Regulatory / channel dependency', detail: 'Heavy on Google/Outlook OAuth — inbox vendor risk if Gmail tightens agent access.' },
          { kind: 'Cultural / incentive trap', detail: '"The AI executive assistant" — singular. Lindy is a teammate, not a team. Re-positioning to "your AI team" cannibalizes the single-Lindy mental model.' },
        ],
      },
      {
        name: 'Salesforce Agentforce',
        position: '$540M ARR Q3 FY26 (5.4× in 9 months), 18,500 deals, 9,500 paid, 12% of Salesforce\'s 150K customer base',
        url: 'https://www.salesforce.com/agentforce/pricing/',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Agentforce only reasons over Salesforce Data Cloud — the agent\'s "world" is CRM. MCP support nascent; agents are first-class inside Salesforce walled garden, second-class everywhere else.' },
          { kind: 'Business model misalignment', detail: 'Flex Credits start at enterprise-volume floors. No founder is buying Agentforce for $19/mo. Salesforce hired 2,000 sales reps to sell Agentforce — that\'s not self-serve.' },
          { kind: 'Regulatory / channel dependency', detail: 'Locked to the Salesforce account model + Data Cloud. Pricing model mid-transition from seat → usage; reps are conflicted.' },
          { kind: 'Cultural / incentive trap', detail: '"Agentic enterprise" — Benioff\'s frame. Solo founders don\'t have an enterprise. Structurally incapable of shipping $19/mo indie without cannibalizing $120k Data Cloud.' },
        ],
      },
    ],
    winThesis: [
      'MCP-first is the wedge incumbents structurally can\'t copy. CrewAI is Python-framework-locked; Lindy is inbox-locked; Agentforce is Data-Cloud-locked. foundr.team treats MCP servers as the unit of agent capability.',
      'Budget caps are the missing primitive. Lindy\'s usage credits are a wallet, not governance. CrewAI delegates cost-tracking to acquired/maintenance-mode tools. A $19/mo indie running 10 agents needs hard per-agent spend ceilings before they need observability dashboards.',
      'Weekly retro = retention loop nobody else has. Sintra\'s pitch is "set up once, then it just works" — churn risk dressed as a feature. A weekly retro makes the $19/mo feel earned every Monday.',
      'Free quote-tweet tier is the Sintra/Lindy growth gap. Lindy has no free tier; Sintra\'s lowest paid is mid-tier; CrewAI is enterprise.',
      'Position against single-agent-as-employee, not multi-agent frameworks. Sintra/Lindy: "your one Lindy can\'t run your business — your team of MCP agents can, and here\'s the control plane."',
      'Price into the gap: $19 Solo / $49 Pro is exactly the unserved band. Below Lindy\'s $49.99 entry, above CrewAI\'s $0 / $99k cliff, an order of magnitude below Agentforce.',
    ],
  },

  'foundr-study': {
    tam: {
      headline: '~$425B / yr (2025) — corporate L&D + AI tutoring + edtech-AI combined',
      proxy: 'Corporate L&D ($401–412B, Bersin/Dataintelo 2025) + AI-in-education software ($5.9B 2024 → $32.3B by 2030, Grand View) + AI tutoring services ($3.7B 2025, FMI). Founder-relevant slice = "learn-a-tool/framework-fast with an artifact at the end" sits at the seam of all three.',
      calc: '$412.5B L&D + $5.88B AI-in-edu + $3.72B AI tutoring ≈ $422B. Rounding to ~$425B for the 2025 baseline.',
      sources: [
        s('Dataintelo — Corporate Training', 'https://dataintelo.com/report/corporate-training-market'),
        s('Grand View — AI in Education', 'https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-education-market-report'),
        s('Future Market Insights — AI Tutoring', 'https://www.futuremarketinsights.com/reports/ai-tutoring-services-market'),
      ],
    },
    sam: {
      headline: '~$8–12B / yr',
      proxy: 'Adult learners who bring their own source (docs, PDFs, repos, frameworks) and want a working artifact when they finish.',
      calc: 'ChatGPT has ~55M paying consumer subs Q1 2026; Claude ~3–5M Pro/Max; NotebookLM at 17M MAU after 7 months. If 10–15% of consumer-AI payers treat their tool as a "learn this thing" surface (55M+5M × $120–$200 ARPU), addressable spend ~$8–12B/yr.',
      sources: [
        s('PYMNTS — OpenAI nearly $6B quarter', 'https://www.pymnts.com/artificial-intelligence-2/2026/openais-codex-helps-drive-nearly-6-billion-quarter/'),
        s('Business of Apps — Claude Stats', 'https://www.businessofapps.com/data/claude-statistics/'),
      ],
    },
    som: {
      headline: '$30–60M / yr by year 5',
      proxy: 'Capture 15–30% of the AI-native solo founder learning surface via free quote-tweet funnel + 8–12% Solo conversion + Pro labs.',
      assumptions: [
        '1M actively-building solo founders globally (48K new solo startups 2025, +140% YoY per ShipSquad; 89% use AI coding tools; avg AI spend $127/mo)',
        '150–300K free users captured',
        '8–12% convert to Solo $19/mo, 1–2% to Pro $49/mo',
        'Base case: 200K free × 10% × $228 + 200K × 1.5% × $588 ≈ $6M ARR at modest penetration',
        'With 1M-user funnel + B2B/team upsell, $30–60M ARR band',
      ],
      analog: 'NotebookLM (3.5M → 17M MAU in 7 months — purpose-built AI tools fragment faster than chatbot giants can defend). Khanmigo (68K → 700K users year one, $4/mo). Synthesis Tutor (4.5× subscribed enrollment YoY, $11M FY25). Coursebox ($1M ARR, 1K paying, 100K courses).',
      sources: [
        s('ShipSquad — Solo Founder Index', 'https://shipsquad.ai/blog/solo-founder-index-2026'),
        s('AI for Cause — Khanmigo', 'https://aiforcause.org/stories/khanmigo-ai-tutor'),
        s('Coursebox Newsroom', 'https://www.coursebox.ai/newsroom'),
      ],
    },
    incumbents: [
      {
        name: 'NotebookLM (Google)',
        position: '17M MAU (Dec 2025, +5× in 7 months); 9.6% daily stickiness; bundled into Google One AI Premium $20/mo ($9.99 students)',
        url: 'https://notebooklm.google/plans',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Notebook UX is a research-assistant paradigm (sources → audio overview → chat), not a pedagogy paradigm — no adaptive depth, no scaffolded artifact, no agent-led lab. Repurposed product, not designed for "end with a working thing."' },
          { kind: 'Business model misalignment', detail: 'Sold as a $20/mo bundle add-on inside Google One AI Premium — economics mediated by Workspace/One bundle decisions, not by NotebookLM\'s own P&L. No standalone GTM motion.' },
          { kind: 'Regulatory / channel dependency', detail: 'Distribution piggybacks on Google account + Workspace; can\'t ship MCP servers, can\'t compose with third-party agents.' },
          { kind: 'Cultural / incentive trap', detail: 'Google\'s review process + ecosystem fealty make an MCP-first, source-agnostic, "drop any URL/PDF/repo/MCP and get an agent lab" product structurally improbable. Audio Overview is its bet; not learn-by-building.' },
        ],
      },
      {
        name: 'ChatGPT Study Mode (OpenAI)',
        position: 'Launched July 2025, free + Plus + Pro + Team + Edu; sits inside the ~55M paying consumer base',
        url: 'https://chatgpt.com/features/study-mode/',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Toggle-on-a-chatbot architecture; Socratic prompting layer, not a course engine. No syllabus, no progression, no artifact delivery, no agent-led lab. Easily defeated by users switching the toggle off.' },
          { kind: 'Business model misalignment', detail: 'Plus subscriber count projected to drop 80% (44M → 9M in 2026) as OpenAI pivots to ad-supported ChatGPT Go — Study Mode is a retention feature, not a product line. No willingness to spin out a dedicated study product.' },
          { kind: 'Regulatory / channel dependency', detail: 'Education K-12/edu rollout requires Edu SKU + institutional procurement; OpenAI\'s institutional motion is slow and centered on Edu, not solo founders.' },
          { kind: 'Cultural / incentive trap', detail: 'ChatGPT is "general-purpose answer engine first, learning second" — can\'t make the artifact (deployed app, working notebook, passed eval) first-class without re-architecting the product surface.' },
        ],
      },
      {
        name: 'Claude Learning Mode + Skills (Anthropic)',
        position: 'Learning Mode launched April 2025 for Claude for Education; Skills launched Oct 2025; ~20M consumer users, $1.2B Pro/Max revenue',
        url: 'https://claude.com/solutions/education',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Learning Mode is a Projects feature ("guide rather than answer"); Skills are reusable instruction bundles. Neither composes into "drop a source, get an adaptive course with a working artifact." Assembly is on the user.' },
          { kind: 'Business model misalignment', detail: 'Claude for Education is a university-license motion (campus-wide deals); ~55% of Anthropic\'s revenue is enterprise. Adult solo-founder self-serve is a side surface, not a roadmap priority.' },
          { kind: 'Regulatory / channel dependency', detail: 'University-partner GTM (Internet2, Instructure/Canvas) is slow and reputationally cautious; founder-focused, ship-fast positioning conflicts with the enterprise/edu trust posture.' },
          { kind: 'Cultural / incentive trap', detail: 'Anthropic\'s product instinct is "tools and primitives, you assemble." They ship Skills and Learning Mode separately and trust you to wire them. Unlikely to ship an opinionated, source-in/artifact-out, agent-led course product.' },
        ],
      },
    ],
    winThesis: [
      'Artifact as the primitive, not the chat. Every course terminates in a deployed app / working notebook / passing eval; foundr.world\'s existing primitives (room, agent, mission) map directly to "lab, tutor, completion."',
      'MCP-first. Drop any MCP server (Supabase, Stripe, Vercel, Linear) into a course and the lab becomes hands-on against the real tool. Incumbents can\'t ship this without rebuilding their auth/compose model.',
      'Source-in promiscuity. Accept any URL, PDF, repo, framework, or doc as the seed; agents author the course on the fly. NotebookLM accepts sources but doesn\'t author pedagogy; foundr.study does both.',
      'Solo-founder distribution loop. Free quote-tweet tier ties acquisition to founder-twitter where the customer already lives; $19/$49 sits above Khanmigo\'s $4 and below ChatGPT Plus.',
      'Multi-agent labs (Pro $49) use the same substrate as the rest of the foundr.* ecosystem — the Pro tier is genuinely differentiated, not a feature flag.',
      'Adaptive depth via agent-citizenship. Courses persist per-founder and adapt to demonstrated skill in the lab, not just self-reported level. ChatGPT Study Mode and Claude Learning Mode are stateless within session.',
    ],
  },

  'foundr-lol': {
    tam: {
      headline: '~$253B / yr (2024)',
      proxy: 'Creator economy market (patronage + sponsorship + launch/funding platforms + bounty marketplaces) — the broadest superset foundr.lol\'s quote-tweet/sponsor/fork model sits in.',
      calc: 'Emergen $253.07B (2024) ≈ Grand View $205.25B (2024); Goldman projects $480B by 2027. Constituents: Patreon ($2B annual creator earnings), Kickstarter ($706M pledged 2024), GitHub Sponsors ($50M+ cumulative to ~49K devs), Buy Me a Coffee ($4.9M ARR, 1M+ creators), Product Hunt ($3.9M ARR, 5.4M monthly visits).',
      sources: [
        s('Emergen — Creator Economy', 'https://www.emergenresearch.com/industry-report/creator-economy-market'),
        s('Grand View — Creator Economy', 'https://www.grandviewresearch.com/industry-analysis/creator-economy-market-report'),
        s('Goldman Sachs — Creator Economy', 'https://www.goldmansachs.com/insights/articles/the-creator-economy-could-approach-half-a-trillion-dollars-by-2027'),
      ],
    },
    sam: {
      headline: '~$2.4B / yr',
      proxy: 'AI-native developers sponsoring/consuming open experiments. ~67M global creators × ~5% technical/AI-adjacent ≈ 3.3M; intersect with ~180M GitHub devs × ~2% sponsoring + earning ≈ 3.6M active patronage participants.',
      calc: 'Patreon-style $2B annual creator earnings × ~12% dev-tools share + GitHub Sponsors run-rate (~$15M/yr) + Replit/agent-bounty TAM (~$200M est.) + Kickstarter Design/Tech slice (~$200M).',
      sources: [
        s('Goldman — Creator Economy Framing', 'https://creatorswithinfluence.com/wp-content/uploads/2025/04/Goldman-Sachs-Global-Investment-Research-Creator-Economy-Framing-Market-Opportunity-Download-Report-March-26-2025.pdf'),
        s('Backlinko — Patreon Users', 'https://backlinko.com/patreon-users'),
        s('Dev.to — Agent Bounty Platforms', 'https://dev.to/kas_storksoft/ai-agent-bounty-platforms-compared-replit-vs-sensay-vs-gaia-vs-virtuals-vs-fetchai-vs-agenthansa-d3p'),
      ],
    },
    som: {
      headline: '~$9–14M ARR by year 5',
      proxy: 'Subscriptions + 5% sponsorship take-rate + commissioned-build margin.',
      assumptions: [
        '150K registered free users (~0.1% of GitHub\'s 180M devs)',
        '4% paid conversion = 6,000 paying',
        'Mix: 4,800 Solo @ $12/mo ($691K/yr) + 1,200 Pro @ $49/mo ($706K/yr) = ~$1.4M subs ARR',
        'Sponsorship GMV at scale ≈ $150M/yr; 5% take = $7.5M',
        'Plus ~$2–5M in commissioned-build margin (Pro)',
      ],
      analog: 'HF Spaces went 0 → 100K deployed Spaces + 40K new/month in ~3 yrs. Buy Me a Coffee 0 → 1M creators + $5M ARR in 5 yrs. Patreon dev-tools cohort ~$240M/yr (12% of $2B). HF Spaces ($130M ARR / 50K customers) as ceiling.',
      sources: [
        s('Getlatka — Hugging Face', 'https://getlatka.com/companies/hugging-face'),
        s('Getlatka — Buy Me a Coffee', 'https://getlatka.com/companies/buymeacoffee.com'),
        s('Getlatka — Product Hunt', 'https://getlatka.com/companies/product-hunt'),
      ],
    },
    incumbents: [
      {
        name: 'Product Hunt',
        position: '5.4M monthly visits, $3.9M ARR, 77 employees, bootstrapped',
        url: 'https://www.producthunt.com/launch',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Feed-shaped daily-leaderboard model with no "experiment state" beyond Launched/Featured. No post-launch state machine (alive/paused/abandoned/forked) — every product is frozen in time at launch day.' },
          { kind: 'Business model misalignment', detail: 'Optimized for one-shot launches (sponsorship ads + featured slots), not living experiments. No post-mortems, no fork primitive, no patronage rails — winners exit to their own domain, leaving PH with traffic but no recurring graph value.' },
          { kind: 'Regulatory / channel dependency', detail: 'SEO-dependent (traffic dropped -5.21% MoM per Semrush); 19.66% of traffic from India suggests upvote-farm rings, eroding trust signal.' },
          { kind: 'Cultural / incentive trap', detail: 'Community optimized for upvote farming + "Product of the Day" gamification; failed experiments are invisible (hidden / unlaunched), so survivorship bias forbids the exact thing foundr.lol monetizes.' },
        ],
      },
      {
        name: 'Hugging Face Spaces',
        position: '100K+ deployed Spaces, 40K new/month, $130M ARR',
        url: 'https://huggingface.co/spaces',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Spaces are demos, not experiments — no notion of hypothesis/outcome/post-mortem; voting is a like-count, not capital allocation. No native sponsor/commission flow — patronage is bolted on via external Stripe links in READMEs.' },
          { kind: 'Business model misalignment', detail: 'ARR comes from enterprise GPU contracts (Nvidia/AWS/MS), so the consumer/indie experiment surface is a loss-leader with zero monetization roadmap for the long tail.' },
          { kind: 'Regulatory / channel dependency', detail: 'Compute-cost exposed (Inference API ~$5M/mo Q3 2024 in subsidized infra); model-license drift (Llama, Mistral terms) can yank entire Space categories.' },
          { kind: 'Cultural / incentive trap', detail: 'ML-researcher-centric, paper-adjacent — repels AI-native solo founders who don\'t want to write app.py in Gradio and don\'t think of themselves as researchers.' },
        ],
      },
      {
        name: 'GitHub Sponsors',
        position: '$50M+ paid to ~49K devs cumulative (~$10M/yr run-rate)',
        url: 'https://github.com/open-source/sponsors',
        vulnerabilities: [
          { kind: 'Tech debt', detail: 'Sponsorship is attached to a person/org, not an experiment. No "sponsor this specific failed branch / forked dead repo" primitive; no quote-tweet vote signal.' },
          { kind: 'Business model misalignment', detail: '0% fee from individuals + 3% from orgs = no platform incentive to discover/curate experiments; Sponsors is a passive billing rail bolted onto GitHub\'s social graph. Microsoft\'s strategic interest is Copilot ARPU, not patronage GMV.' },
          { kind: 'Regulatory / channel dependency', detail: 'KYC + tax forms gate every payee; restricted countries (sanctions list) cut off the long tail of global indie experimenters foundr.lol could enable via crypto/stablecoin.' },
          { kind: 'Cultural / incentive trap', detail: 'README-driven, maintainer-coded culture rewards mature, "respected" maintainers — hostile to the failed-experiment-as-asset thesis. Failed repos are archived/deleted, not memorialized.' },
        ],
      },
    ],
    winThesis: [
      'Failure as first-class object. Every dead experiment ships with a public post-mortem, fork-link, and sponsor button. Pioneer.app (RIP 2024, 60K updates, 600K feedbacks) proved demand; foundr.lol revives it with monetization rails Pioneer never bolted on.',
      'Quote-tweet voting beats upvote farming. A vote requires a public take with your name attached — kills the bot/ring problem decaying Product Hunt\'s signal, and produces durable distribution as a side effect.',
      'Sponsor an experiment, not a person. 5% take + commissioned-build flow gives a per-experiment ARPU model GitHub Sponsors structurally cannot ship (their unit is the maintainer).',
      'MCP-native from day one. Solo $12 ships an MCP that lets the founder\'s coding agent watch/fork/sponsor on their behalf — ride the 177K → 14M MCP tool-call wave (AISI Jan 2026).',
      'AI-native solo founder ICP, narrow on purpose. ~726 YC agent companies + ~15K Virtuals + the 14% AI bucket of IndieHackers\' 4,500 products is a tractable beachhead of ~10K paying-capable buyers — too small for Product Hunt/HF/GitHub to defend.',
      'Fork primitive as defensible moat. A fork carries lineage (parent experiment + sponsor history). Compounds into a graph no incumbent has — Kickstarter projects can\'t fork, Patreon tiers can\'t fork, GitHub forks have no funding lineage.',
    ],
  },
}

// ── Merge in the 4 strategic sections (strategic moves / moats / synthesis /
//    power-user pain) from product-market-extensions.ts ──────────────────────

export const marketBySlug: Record<string, MarketInsight> = Object.fromEntries(
  Object.entries(baseMarketBySlug).map(([slug, base]) => [
    slug,
    { ...base, ...(marketExtensionsBySlug[slug] ?? {}) },
  ]),
)
