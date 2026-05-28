/**
 * Extensions to `product-market.ts` — adds the 4 strategic sections
 * (modeled after the agentik-host market report):
 *   1. 12-month strategic moves (ranked by leverage)
 *   2. Economic moats — what we can hold and what we can't
 *   3. Synthesis — where SAM × incumbent vulnerability × unaddressed pain converges
 *   4. Power-user pain — unaddressed pains with real quotes
 *
 * Synthesized from 13 parallel deep-research dossiers (Exa). Quotes are real
 * — sourced from HN, Reddit, GitHub Issues, IndieHackers, dev.to, Medium.
 */

import type { MarketInsight } from './product-market'

type MarketExt = Pick<
  MarketInsight,
  'strategicMoves' | 'moats' | 'synthesis' | 'powerUserPain'
>

export const marketExtensionsBySlug: Record<string, MarketExt> = {
  'foundr-world': {
    strategicMoves: [
      { title: 'Own "MCP-first PM" before Atlassian Rovo lands properly', body: 'Atlassian Rovo "hallucinates success on write actions"; Linear MCP "can\'t schedule follow-ups." Ship the write-quality + scheduling MCP surface incumbents are missing. Brand foundr.world as the tool where MCP is the product, not a bolt-on.', timing: '6-mo window' },
      { title: 'Free to join + credits economy — kill the subscription model entirely', body: 'Per-seat is "a dead man walking for AI-augmented SaaS" (Upverdict). "Your agents don\'t have butts" (artisancraft.dev). foundr.world goes one step further: no tiers, no subscription. Free to join + credits to buy decor, agent slots, and room expansions. The explicit anti-Jira/Linear/ClickUp wedge.' },
      { title: 'Ship a "shipped while you slept" morning digest', body: 'Overnight autonomy is the live category ("Just Ship", Shipwright, AI Night Shift). The persistent isometric tower is the asset nobody else has — animate the night\'s claims/PRs/completions on the room. This is the screenshot that ships on X.' },
      { title: 'Make backlog grooming a built-in agent, not an integration', body: 'Linear users buy third-party "Backlog Grooming Intelligence" for $99/mo. Surface a Groomer NPC that walks the tower nightly and re-sorts. Free leverage — the demand is already paying elsewhere.' },
      { title: 'Solve multi-agent collision at the workspace layer', body: 'Engineers running "several Claude Code or OpenAI Codex instances simultaneously" hit collisions. Position the tower as the shared task board — one MCP endpoint, claim-lease semantics, room-as-status.' },
      { title: 'Lean into anti-loneliness / parasocial wedge marketing', body: 'Solo founder isolation is a documented structural condition. A tower of agents visibly working is the only PM tool whose UI doubles as social presence. Make this an explicit value-prop.' },
      { title: 'Open the room API for embed', body: 'Let founders ship their tower on their landing page. Linear and Jira architecturally cannot match — no spatial primitive, no real-time render.' },
    ],
    moats: {
      hold: [
        { title: 'Persistent isometric room as the canonical agent surface', body: 'Linear reviewers list "no native document, no time tracking, no whiteboard" as philosophy. They will not bolt on a 3D tower. Spatial-presence-as-status is a category, not a feature.' },
        { title: 'MCP-first write semantics with confirmation guards', body: 'Rovo "hallucinates success on writes"; Linear MCP missing reminders/scheduling. Building the agent contract correctly day one is hard to retrofit on a 20-year codebase.' },
        { title: 'Cross-founder agent labor pool with claim-lease + reputation', body: 'Multi-sided dynamic Jira/Linear can\'t ship without rebuilding identity + billing.' },
      ],
      cannotHold: [
        { title: '"AI-native" branding alone', body: 'Atlassian shipped Rovo MCP, Linear shipped Agent automations, ClickUp has AI features. The phrase is free for everyone.' },
        { title: 'Raw UI speed', body: 'Linear is sub-100ms. We won\'t out-speed them on UI alone.' },
        { title: 'Backlog grooming agent', body: 'ForgeWorkflows and several OSS repos ship it for Linear/Jira. Differentiator is where it lives (the room), not that it exists.' },
      ],
      switchingFor: [
        'Agent muscle memory: once a founder\'s agents have rules wired to our MCP tool names, swapping is a rewrite of every `.claude/skills/*` they own',
        'Visual identity / room layout customization — attachment to a place, not just a database',
        'Cross-founder backlog leases — leaving means losing the labor pool, not just exporting CSVs',
      ],
      switchingAgainst: [
        'Tickets still mostly live in GitHub Issues / Linear — we have to be the better MCP target to win the agent\'s loyalty',
        'No SSO/SAML/audit log story — enterprise procurement is a wall',
      ],
    },
    synthesis: [
      { wedge: 'MCP write-quality with claim-leases', segment: 'Solo founders running ≥1 Claude/Cursor agent', vulnerability: 'Rovo hallucinates writes; Linear MCP has no reminders/scheduling', pain: 'Agents can self-schedule, claim, and report without polling or losing track', status: 'shipped' },
      { wedge: 'Overnight ship-while-you-sleep visualization', segment: 'Indie hackers shipping nights/weekends', vulnerability: 'Linear/Jira have no spatial surface; you stare at a list', pain: 'Morning dopamine — see what shipped on the tower vs. scanning a dashboard', status: 'partial', note: 'Status LIVE; needs night-digest render' },
      { wedge: 'Backlog grooming as in-world NPC', segment: 'Pro tier founders with 100+ backlog items', vulnerability: 'Linear sells third-party groomers ~$99/mo; Jira backlog-rot is a meme', pain: 'Stale items auto-flagged + re-prioritized, visible as the NPC walking the room', status: 'gap' },
      { wedge: 'Anti-loneliness presence layer', segment: 'Bootstrapped solo founders 6-24mo in', vulnerability: 'No PM tool addresses isolation; treated as HR/coaching problem', pain: '"Co-conspirator" feel — agents physically present, claiming, talking', status: 'shipped' },
      { wedge: 'Free to join, credits for the in-world economy', segment: 'Solo + 2-3 person teams burned by Asana/ClickUp/Linear per-seat math', vulnerability: 'Per-seat pricing is "structurally broken" for AI-augmented orgs; nobody ships a free-to-play + virtual-goods model for productivity', pain: 'Adding agents or a contractor never bumps the bill — credit packs are optional, never recurring', status: 'shipped' },
      { wedge: 'Quote-tweet onboarding', segment: 'Twitter-native founders inside the AI-builder cohort', vulnerability: 'Atlassian/Linear can\'t ship viral acquisition; brand-safety guardrails', pain: 'Free, low-friction trial that doubles as distribution', status: 'shipped' },
      { wedge: 'Multi-agent collision-free workspace', segment: 'Founders running 3+ parallel agents', vulnerability: 'No PM tool models claim-lease + worktree isolation natively', pain: '"Manually assign tasks by switching between terminal windows" goes away', status: 'partial', note: 'Claim-lease exists; needs worktree-aware UI' },
      { wedge: 'Embeddable room widget', segment: 'Pro founders building in public', vulnerability: 'Linear/Jira have no embeddable real-time surface', pain: 'Tower becomes the marketing asset on their own landing page', status: 'gap' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Agents that lie about writes / can\'t actually execute field updates',
        quotes: [
          { text: 'It always said it did it, but never does it.', attribution: 'Atlassian Community user on Rovo' },
          { text: 'It tends to hallucinate success on write actions rather than flagging that it couldn\'t complete them.', attribution: 'Atlassian Community responder' },
          { text: 'Rovo agents can only perform actions explicitly enabled — if not selected, the agent will simulate success.', attribution: 'Atlassian Community thread' },
        ],
        whyIncumbentsCantFix: 'Jira\'s field model is 20 years of accreted complexity; the MCP layer can\'t paper over the underlying ambiguity without breaking enterprise customizations.',
        coverage: { status: 'shipped', detail: 'foundr-backlog MCP enforces "DUPLICATE = success" semantics, claim-leases, and idempotency in the tool surface itself.' },
      },
      {
        label: 'B',
        title: 'Backlog rot — stale tickets pile up and nobody grooms them',
        quotes: [
          { text: 'Linear doesn\'t scale — the backlog ballooned to 400+ issues nobody can scan.', attribution: 'cotera.co Linear alternative guide' },
          { text: 'A PM showed us a backlog with 340 ungroomed tickets, some over a year old.', attribution: 'ForgeWorkflows product page' },
          { text: 'Jira rot — thousands of stale tickets make the backlog feel like a graveyard.', attribution: 'Justine, talking-tech-with-j.medium.com' },
        ],
        whyIncumbentsCantFix: 'Linear automation rules are single-trigger, single-action, single-issue scope; the API can\'t express cross-issue reasoning needed for grooming.',
        coverage: { status: 'gap', detail: 'A Groomer NPC walking the tower nightly is a near-free build on top of the existing MCP and would convert this pain into a marquee feature.' },
      },
      {
        label: 'C',
        title: 'Per-seat pricing punishes solo founders who add agents',
        quotes: [
          { text: 'My agents don\'t have butts. The pricing model assumes humans sitting in chairs.', attribution: 'artisancraft.dev' },
          { text: 'One solo entrepreneur fell in love with Asana, only to discover they couldn\'t purchase just one seat.', attribution: 'Heimin Blog' },
          { text: 'Per-seat creates a perverse incentive — vendors have zero motivation to make AI productive, because productivity shrinks seat count.', attribution: 'upverdict.com' },
        ],
        whyIncumbentsCantFix: 'Atlassian, Linear, ClickUp investor models all key off seat-count growth — switching off it is a revenue re-architecture, not a pricing tweak.',
        coverage: { status: 'shipped', detail: 'Free to join, no tiers. Credits run the in-world economy — earned by shipping, bought in packs ($5 / $20). No subscription line ever.' },
      },
      {
        label: 'D',
        title: 'Agents can\'t self-schedule or coordinate without polling',
        quotes: [
          { text: 'An AI agent opens a PR, needs to check CI in 30 minutes. Today it has no way to set a reminder via API — polls indefinitely or loses track.', attribution: 'paulodearaujo, Linear Issue #1033' },
          { text: 'A silent failure in a queue worker, for 4 hours. No alert fired because the worker didn\'t crash — it just stopped pulling jobs.', attribution: 'Rapid Claw founder, IndieHackers' },
          { text: 'Each agent runs in isolation. You manually assign tasks by switching between terminal windows.', attribution: 'Ivern AI multi-agent coordination guide' },
        ],
        whyIncumbentsCantFix: 'Linear shipped reminders for humans in Jan 2023; the GraphQL surface still has no `createReminder` mutation 3 years later. Agent-native primitives require designing for non-human callers from the schema up.',
        coverage: { status: 'partial', detail: 'Claim-lease + state transitions exist in the foundr-backlog MCP; need to expose self-scheduling and heartbeat tools as first-class.' },
      },
      {
        label: 'E',
        title: 'The tool itself is so slow it kills flow',
        quotes: [
          { text: 'Jira is incredibly slow, almost unusable. So awful.', attribution: 'binary132, HN 42462724' },
          { text: 'I am a 2-person team and sometimes 2 hours of work in ClickUp can take 4 hours because I am waiting for ClickUp to respond.', attribution: 'ClickUp feedback voter' },
          { text: 'The workload view takes about 60 seconds to load. Click anywhere after that and you\'ll have another 30sec to wait.', attribution: 'ClickUp feedback voter' },
        ],
        whyIncumbentsCantFix: 'ClickUp perf complaints have been open 4+ years on Canny with hundreds of voters and no resolution; Jira\'s slowness is a function of enterprise customization surface, not a fixable bug.',
        coverage: { status: 'partial', detail: 'Next.js 16 PPR + cached server loaders + sub-100ms optimistic mutations give us a credible speed story.' },
      },
    ],
  },

  'foundr-agency': {
    strategicMoves: [
      { title: 'Lead with the public price tag as wedge copy', body: 'Every horror-story thread converges on opaque proposals that "drift" into 3× quoted budget. A homepage that starts with `$8–15k fixed · scope locked · MCP backlog read access` IS the differentiator.', timing: '30 days' },
      { title: 'Publish the MCP backlog endpoint as the "watch us work" trust artifact', body: 'Reddit\'s #1 chronic agency complaint is invisibility between weekly status calls. Live read-only MCP access to the in-flight backlog is something no incumbent can offer without re-platforming.', timing: '60 days' },
      { title: 'Productize the free 30-min scope DM into a public scope-judgment artifact', body: 'Publish (with permission) a redacted "here\'s what we\'d build vs. what you asked for" doc weekly. Each becomes SEO + social proof AND demonstrates scoping discipline.' },
      { title: 'Add a Pro $6.5k/mo tier upsell at week 8 of every Solo build', body: 'Pre-script the conversion at handover. Undercut fractional CTOs ($8–50k/mo) who overshoot AI-native solos that already ship code.' },
      { title: 'Build a 6-engagement public case-study cadence', body: 'One case study per 2 months: quote → scope doc → MCP backlog screenshots → final price reconciliation. The reconciliation line ($X quoted, $X delivered, $0 change orders) is unique vs. competitors who never show the money.' },
      { title: 'Stand up a "second operator" referral mesh before you need it', body: '3–4 named, vetted solo operators with same-shape pricing. Frame as "consortium of one-operator agencies" not "team we\'re hiring."', timing: 'Months 6–9' },
      { title: 'Ship an open-source "agency-proposal lint" tool', body: 'Takes a proposal PDF and flags the 5 red flags (T&M with no fixed deliverables, vague discovery, no client repo from day 1). Drives qualified inbound at peak intent.' },
    ],
    moats: {
      hold: [
        { title: 'Public fixed price as forcing function', body: 'Big-4 and pod-model agencies structurally CANNOT publish prices — billable-hours utilization IS their P&L. Publishing is a business-model fork they can\'t cross.' },
        { title: 'MCP backlog read-access during build', body: 'Globant/Netguru ship through PM layers and weekly decks; opening the live work-tracker to clients requires re-architecting account management and change-orders.' },
        { title: 'One named operator on the contract', body: 'The bait-and-switch (senior in pitch, junior on work) is universal. Agency-of-one with the operator\'s name in the SOW is a structurally different product.' },
      ],
      cannotHold: [
        { title: '"AI-native tooling" claim', body: 'Every consultancy now claims "AI-accelerated delivery." Tooling is rented from the same handful of providers — no asymmetry.' },
        { title: 'Fixed-price contracts', body: 'Tessellate Labs ($5k MVPs), CogniMuse Retainer ($5k), and a long tail of indie shops already do fixed-price. The price tag doesn\'t moat; the publicness + scope discipline does.' },
        { title: '"Productized consultancy" framing', body: 'Pattern is well-documented and being copied by every agency owner. Not novel for long.' },
      ],
      switchingFor: [
        'Client repo from day one (their GitHub org, their Vercel, their Supabase) — they never have to migrate; every other agency hand-off has a 2–4 week transfer tax',
      ],
      switchingAgainst: [
        'One-operator capacity ceiling: if the founder needs a 3-week burst beyond what one human can ship, they\'ll bring in a second vendor',
      ],
    },
    synthesis: [
      { wedge: 'Public fixed price below $15k', segment: 'AI-native solo founder with $10–50k budget, ghosted by Big-4 (too small) and quoted $35k by AI-native agencies', vulnerability: 'Big-4 minimums $200k+; Netguru/Globant rates are quote-on-request; Thoughtbot $10k floor with $150–200/hr', pain: '$10k quote that ballooned to $35k black hole', status: 'shipped' },
      { wedge: 'MCP backlog read-only during build', segment: 'Solo + small AI-native teams already on Claude/Cursor', vulnerability: 'No incumbent exposes their PM tool to clients live; status updates are hand-curated Friday docs', pain: 'Working 60hr weeks, client thinks we\'re doing nothing', status: 'shipped' },
      { wedge: 'Named operator in SOW, no team swap', segment: 'Founders burned by bait-and-switch on a prior engagement', vulnerability: 'Pod models require swappable resources; Accenture/Deloitte staff change quarterly', pain: 'Promised dedicated teams, delivered B-team at A-team prices', status: 'shipped' },
      { wedge: 'Quote-tweet scoping DM', segment: 'Public-builder founders who live on X', vulnerability: 'Big-4 won\'t engage below $200k; AI-Native Agency requires sales call', pain: 'Spent weeks arguing about features instead of talking to users', status: 'shipped' },
      { wedge: 'Pro $6.5k/mo advisor seat for solo coders', segment: 'Solo technical founders who already ship — want pattern-matching not pair-programming', vulnerability: 'Fractional CTO market ($8–50k/mo) overshoots; existing fractional CTOs aren\'t AI-native operators', pain: 'Need a sounding board, not someone to do the IC work I\'m already doing', status: 'shipped' },
      { wedge: 'Reconciled invoice case studies', segment: 'Buyers in proposal-comparison mode', vulnerability: 'Incumbents can\'t publish reconciled numbers — would expose change-order revenue', pain: 'Couldn\'t find original scope doc, lost the client', status: 'partial' },
      { wedge: 'Client-owned repo/Vercel/Supabase from day 1', segment: 'Any founder who has heard a code-ownership horror story', vulnerability: 'Lovable/Bubble/proprietary platforms; agency-hosted stacks', pain: 'Tried to hire new dev, codebase locked in platform we can\'t export', status: 'shipped' },
      { wedge: 'Proposal-lint OSS tool', segment: 'Founders mid-proposal-comparison (peak intent)', vulnerability: 'No competitor can ship this without indicting their own SOWs', pain: 'Vague proposal doesn\'t become a precise project, it becomes an expensive argument', status: 'gap' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'The quote-to-actual ratio is a lie everyone has been burned by',
        quotes: [
          { text: '$80K spent. No app. Lawsuit they couldn\'t afford.', attribution: 'Shipanel founder horror-story interview' },
          { text: 'Initial MVP quote for $10,000 that balloons into a $35,000 black hole.', attribution: 'CogniMuse founder, IndieHackers' },
          { text: 'The project didn\'t break at the end. It drifted for weeks. Small scope changes. Senior people stepping in "just to help."', attribution: 'MarginPulse founder, IndieHackers' },
        ],
        whyIncumbentsCantFix: 'Their P&L requires T&M billing or change-order revenue. PwC\'s ex-consultant: "Promotions and bonuses were tied to how much you could sell and how many hours you could bill, not the results."',
        coverage: { status: 'shipped', detail: 'Solo $8–15k fixed; price is public; no change-order line item exists in the SOW.' },
      },
      {
        label: 'B',
        title: 'Senior-in-the-pitch, junior-on-the-work bait-and-switch',
        quotes: [
          { text: 'They promised dedicated teams but delivered their B-team while charging A-team prices.', attribution: 'anonymous founder, Shipanel' },
          { text: 'Team of 24-year-old kids where this is their first assignment... the people who worked on the original case study are long gone.', attribution: 'Hacker News on Accenture/Hertz' },
          { text: 'Your project gets handed to junior developers you\'ve never met. That "senior architect" is now a "borrowed resource."', attribution: 'Shipanel' },
        ],
        whyIncumbentsCantFix: 'The arbitrage between billed rate ($150–200/hr) and paid rate ($10–30/hr offshore) IS the business model. Senior-only staffing collapses Accenture/Deloitte margins 60%+.',
        coverage: { status: 'shipped', detail: 'One operator. Named in the SOW. No team to swap.' },
      },
      {
        label: 'C',
        title: 'Clients can\'t see what\'s happening between status meetings',
        quotes: [
          { text: 'We\'re working 60-hour weeks. All they see is a 30-min call every two weeks. They think we\'re doing nothing.', attribution: 'r/agencylife account manager' },
          { text: 'I spend my entire Friday afternoon copy-pasting from Asana into a Google Doc and rewriting so the client doesn\'t see jira-speak.', attribution: 'Real Problem AI account-manager interview' },
          { text: 'Status reports often drift from what\'s actually happening — information passes through layers.', attribution: 'IndieHackers post on status-report drift' },
        ],
        whyIncumbentsCantFix: 'Account management exists as a layer to sanitize and slow down information — opening the raw backlog removes the layer\'s reason to bill.',
        coverage: { status: 'shipped', detail: 'MCP backlog read-access during build. Client runs `backlog_list` whenever they want. Zero hand-curated status decks.' },
      },
      {
        label: 'D',
        title: 'Code ownership and platform lock-in surface only after the relationship sours',
        quotes: [
          { text: 'If your contract doesn\'t have a clear IP assignment clause, you might be paying for software that legally belongs to someone else.', attribution: 'Zelifcam' },
          { text: 'Tried to hire a new developer and were told the codebase is locked inside a platform they can\'t export from.', attribution: 'Zelifcam' },
          { text: 'AI agreements that lack clear exit mechanics can leave the customer stranded if costs increase or roadmap changes.', attribution: 'Morgan Lewis, Tech & Sourcing 2026' },
        ],
        whyIncumbentsCantFix: 'Lock-in is a retention mechanism, not a bug. AI-Native Agency-style "we host your agents" is structurally incompatible with client-owned-from-day-1.',
        coverage: { status: 'shipped', detail: 'Client\'s GitHub org, client\'s Vercel, client\'s Supabase from commit #1. Nothing to transfer at end of engagement.' },
      },
      {
        label: 'E',
        title: 'The Big-4 PowerPoint deliverable that costs $440k and includes hallucinations',
        quotes: [
          { text: 'Deloitte to refund the Australian government after using AI in $440k report — included fabricated academic citations.', attribution: 'Computerworld' },
          { text: 'Our consulting division had a sister team that specialized in SAP. Our job was to recommend SAP so the implementation team could take over.', attribution: 'ex-PwC consultant, Third Stage Consulting' },
          { text: 'Clients can\'t justify spending money on agencies when they can do these things internally.', attribution: 'City AM, May 2026' },
        ],
        whyIncumbentsCantFix: 'The deck IS the deliverable in the traditional model — they sell artifacts of analysis, not running systems.',
        coverage: { status: 'shipped', detail: 'There is no deck. The deliverable is shipped code in the client\'s repo, behind a working URL, with an open backlog.' },
      },
    ],
  },

  'foundr-run': {
    strategicMoves: [
      { title: 'Lead with "agent-native" as the category, not "yet another tracker"', body: 'Linear ships agent features behind beta gates ($16/user/mo Business); GitHub Projects v2 still has no API mutation to move a card between status columns. Own the wedge before Linear\'s Agent Platform matures out of beta.', timing: 'Q3' },
      { title: 'Make per-workspace pricing the loudest line on the homepage', body: 'A 50-person Linear team pays $4,800/yr; a Jira service-account costs a paid seat. Lead every comparison: "Your agent fleet doesn\'t pay rent." Solo $9 / Pro $29 = $29/mo for one human + unlimited claude/codex sessions.' },
      { title: 'Ship an "MCP-native" certification + receipts page', body: 'Most "MCP servers" for PM are read-only wrappers around GitHub/Linear APIs inheriting their rate limits. foundr.run was designed AS an MCP server. Publish the spec + benchmarks against github-mcp-server and Composio Linear wrappers.' },
      { title: 'Build the "agent-claim lease" into the marketing story', body: 'Race-conditions filed against claude-code (#22239), gh-aw (#26836), paperclip (PR #2643) all describe two agents both claiming the same task. Turn `backlog_claim` into a 90-second demo: "two Claude windows, one ticket, no duplicate work."', timing: 'Q1' },
      { title: 'Cut a free tier that solo founders cannot outgrow', body: 'Linear\'s 250-issue free cap forces upgrade within weeks. Free: unlimited issues, 1 workspace, unlimited agents, quote-tweet attribution. Convert on the second project, not the 251st issue.' },
      { title: 'Open-source the MCP server, monetize the workspace', body: 'Backlog.md / sdvg.io / alice-mcp playbook. MCP server MIT, self-hostable; hosted multi-workspace + realtime collab + analytics as paid. Neutralizes "you\'ll die like Height" objection.' },
      { title: 'Win the agent-fleet operator persona by name', body: 'Pieter Levels, Justin Paul (V4D, 34 agents), Maciek Marchlewski (Agent0). Ship case studies + presets ("the Levels.io workspace") + a CLI that drops into Claude Code / Codex / Cursor in one line.' },
    ],
    moats: {
      hold: [
        { title: 'MCP-native data model', body: 'Linear and Jira retrofitted MCP onto existing REST/GraphQL APIs. We designed the schema and tool surface around `backlog_claim` / `backlog_complete` from day zero. Retrofit is a year of API redesign for them.' },
        { title: 'Atomic claim-lease primitive in the DB', body: 'Race conditions filed against claude-code, gh-aw, multica, paperclip all stem from missing CAS semantics. Our agent_backlog table enforces single-winner claims via Postgres row locks.' },
        { title: 'Per-workspace billing infra', body: 'Atlassian, Linear, Salesforce, Microsoft 365 all have ARR forecasting pinned to seat counts ($285B SaaS valuation wiped Feb 2026 specifically because per-seat ARR is mispriced for agents). Switching costs them more than us.' },
      ],
      cannotHold: [
        { title: 'The backlog data model itself', body: 'Kanban + status + priority + assignee is a 30-year-old schema. Backlog.md, Alice, tpm-mcp, kanban-mcp all ship this in a weekend.' },
        { title: '"Fast keyboard-first UI"', body: 'Linear already owns this perception. Copying with shadcn + the Linear-clone tutorial circuit is solved.' },
        { title: 'AI-generated issue triage / PRD parsing', body: 'Linear Triage Intelligence, Atlassian Rovo, GitHub\'s kunwarVivek/mcp-github-project-manager all ship this. Undifferentiated.' },
      ],
      switchingFor: [
        'Agents written against `backlog_*` MCP tools won\'t port to Linear\'s `LINEAR_CREATE_LINEAR_ISSUE` without rewriting every prompt and tool call',
      ],
      switchingAgainst: [
        'A human teammate who shows up later expects Linear/Jira UI vocabulary (sprints, epics, JQL) — we have to teach our model',
      ],
    },
    synthesis: [
      { wedge: 'MCP-as-the-API (not REST wrapper)', segment: 'Solo + small AI-native teams running Claude Code / Cursor / Codex', vulnerability: 'github-mcp-server STILL cannot update Projects v2 status (Issue #2255 open)', pain: 'Agent can finish workflow without a human dragging a card', status: 'shipped' },
      { wedge: 'Per-workspace, not per-seat', segment: 'Solo founders with 3–15 agent identities', vulnerability: 'Linear at 50 seats = $4.8k/yr; Atlassian service accounts require paid license', pain: '"My agents don\'t have butts" pricing', status: 'shipped' },
      { wedge: 'Atomic claim-lease', segment: 'Multi-agent fleets', vulnerability: 'claude-code #22239, gh-aw #26836, paperclip PR #2643 all shipping fixes for duplicate execution', pain: 'No two agents grab the same ticket', status: 'shipped' },
      { wedge: 'Quote-tweet free tier', segment: 'First-time builders from X/HN', vulnerability: 'Linear\'s 250-issue cap; Jira\'s 10-user cap', pain: 'Frictionless 0→1 without credit card', status: 'partial', note: 'Needs more virality loop' },
      { wedge: 'Self-hostable MCP open core', segment: 'Engineers burned by Height shutdown (Sept 2025)', vulnerability: 'Height deleted all data; 6mo migration window', pain: 'Vendor lock-in / shutdown risk', status: 'gap' },
      { wedge: 'Agent-session lifecycle as first-class object', segment: 'Operators running 5+ projects', vulnerability: 'Linear AgentSession is OAuth-app-only, Business tier; GitHub Projects has no projects_v2_item agentic trigger', pain: 'One source of truth across agents and humans', status: 'partial' },
      { wedge: 'Native dedup + claim webhook receipts', segment: 'Operators paranoid about agent budget burn', vulnerability: 'Atlassian automation throttles at 1,700 execs/mo on Standard', pain: 'Predictable cost per agent action, not per seat', status: 'gap' },
      { wedge: 'Workspace-as-podcast (publish backlog to /changelog)', segment: 'Build-in-public founders', vulnerability: 'None of Linear/Jira/GH ship a public "this is what shipped" surface', pain: 'Marketing + accountability in one place', status: 'partial', note: 'Adjacent — foundr-world has it' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Per-seat pricing penalizes agent fleets',
        quotes: [
          { text: 'My agents don\'t have butts.', attribution: 'artisancraft.dev' },
          { text: 'Per-seat pricing for an AI agent is pricing based on the thing that least correlates with cost.', attribution: 'Helenmireille, Medium' },
          { text: '$285 billion in SaaS valuation was wiped in 48 hours — the model itself was mispriced.', attribution: 'The SaaS Library' },
        ],
        whyIncumbentsCantFix: 'Atlassian / Linear / Salesforce sales comp, ARR forecasts, and Wall Street multiples are anchored to seat count. Moving off it means re-pricing existing contracts downward.',
        coverage: { status: 'shipped', detail: 'foundr.run prices per workspace ($9 Solo / $29 Pro), unlimited agent identities included.' },
      },
      {
        label: 'B',
        title: 'Agents cannot move cards through workflow states',
        quotes: [
          { text: 'Issue content can be updated programmatically, but the board workflow still has to be moved manually in the GitHub UI.', attribution: 'Charliepsycho, github/github-mcp-server #2255' },
          { text: 'The mutation correctly updates the underlying data store, but fails to update the board-view\'s grouping index.', attribution: 'devactivity.com bug writeup' },
          { text: 'There is no way to trigger an agentic workflow when an issue is added to a project.', attribution: 'johnpreed, github/gh-aw #25336' },
        ],
        whyIncumbentsCantFix: 'GitHub Projects v2\'s GraphQL `updateProjectV2ItemFieldValue` has been broken for the MOVE path for months; the GitHub MCP server\'s `projects` toolset is read-mostly.',
        coverage: { status: 'shipped', detail: 'foundr-backlog status transitions are atomic Postgres updates via the same MCP tool that fetches them. No drag, no race.' },
      },
      {
        label: 'C',
        title: 'Two agents claim the same ticket and both do the work',
        quotes: [
          { text: '3-worker swarm, 6 tasks. Both alpha and beta saw Task #1 available, both claimed it, both executed it.', attribution: 'odysseus0, anthropics/claude-code #22239' },
          { text: 'Two sessions execute the same step. The losing session does not detect that it lost the claim.', attribution: 'rileywhite, gastownhall/gascity #1052' },
          { text: 'Both passed the guard. Two issues created when only one was permitted.', attribution: 'github-actions[bot], github/gh-aw #26836' },
        ],
        whyIncumbentsCantFix: 'Linear\'s API has no claim primitive — agents simulate it via `assignee` updates (a TOCTOU window). Adding atomic claim semantics requires a schema change incumbents won\'t risk.',
        coverage: { status: 'shipped', detail: '`backlog_claim` enforces single-winner via Postgres row lock + lease timeout.' },
      },
      {
        label: 'D',
        title: 'Automation execution quotas throttle real workloads',
        quotes: [
          { text: 'We are on the standard plan at 1,700 execution a month and we are struggling to not exceed the monthly limit.', attribution: 'Atlassian Community thread' },
          { text: 'For my case it\'s a bullet in the foot. We have 8 users and my usage is about 15000 per month.', attribution: 'same thread' },
          { text: 'Atlassian cripples Jira automation for all but enterprise customers.', attribution: 'HN #37595898, 100 points' },
        ],
        whyIncumbentsCantFix: 'Atlassian\'s automation cap is a deliberate upsell lever to Premium/Enterprise — it IS the pricing model, not a bug.',
        coverage: { status: 'partial', detail: 'foundr.run has no per-rule cap today, but needs a published "no execution quota on agent actions" guarantee on pricing.foundr.run.' },
      },
      {
        label: 'E',
        title: 'Service accounts / bots cost a full paid seat',
        quotes: [
          { text: 'I\'d prefer not to pay for a full user license for this. You\'re out of luck. Access to the REST API is via a licensed user account.', attribution: 'Atlassian Community thread' },
          { text: 'GitHub App bots cannot be added as collaborators to private Projects v2, blocking them from accessing project items.', attribution: 'devactivity.com analysis' },
          { text: 'Bot IDs are not accepted. Manage access UI does not list GitHub App bot users as inviteable collaborators.', attribution: 'GitHub GraphQL error documentation' },
        ],
        whyIncumbentsCantFix: 'GitHub\'s `ProjectV2Actor` GraphQL union literally omits the `Bot` type. Atlassian Jira Software still consumes a license per assignment. Fixing requires schema changes.',
        coverage: { status: 'shipped', detail: 'Every agent identity in foundr.run is a free principal in the workspace; the workspace itself is the billable unit.' },
      },
    ],
  },

  'foundr-host': {
    strategicMoves: [
      { title: 'Ship the MCP server as the install path, not an add-on', body: 'Every onboarding doc opens with one line in `claude_desktop_config.json`. Founders never see a bucket, key, or IAM JSON.', timing: 'Q3' },
      { title: 'Lock in the "no dashboard" promise as positioning wedge', body: 'Cloudflare, AWS, B2 are all adding UI. Make "no dashboard, by design" the t-shirt. Land 3 founder quotes saying "I never had to log in."', timing: 'Q2' },
      { title: 'Quote-tweet free tier as paid acquisition channel', body: '1GB-for-a-quote-tweet converts organic distribution into a measurable funnel. Public leaderboard + Zapier/n8n connector pulls non-coders in.', timing: 'Q2' },
      { title: 'JWT-per-agent: ship a `spawn_agent_credential` MCP tool', body: 'Solo founders running fleets want one credential per agent revokable without rotating the keychain. The structural moat — no incumbent issues short-lived per-agent JWTs scoped to a sub-prefix.', timing: 'Q3' },
      { title: 'Egress-priced parity with R2, communicated as "no $1,300 surprises"', body: 'Run a monthly "this is what your bill could have been on S3" comparison page.', timing: 'Q3' },
      { title: 'Land 5 lighthouse MCP-server SaaS integrations', body: 'Fast.io, SeetYah, agent-fs, Convex, InstantDB co-publish "we use foundr.host as our blob layer." Each becomes a referral spigot.', timing: 'Q4' },
      { title: 'Public roadmap: vector-aware object metadata', body: 'When agents write a file, they emit context too. Storing the embedding alongside the blob (no separate vector DB) is the natural next layer and no incumbent ships it.', timing: 'Q4 research' },
    ],
    moats: {
      hold: [
        { title: 'MCP-native interface as primary surface', body: 'Incumbents will ship MCP wrappers, but their auth model (IAM users, R2 API tokens, B2 application keys) was never designed for ephemeral per-agent credentials. Refactoring AWS IAM to issue JWTs scoped to one prefix per agent is a multi-year platform change.' },
        { title: 'JWT tenancy on top of B2 (not under it)', body: 'Tenancy lives in our control plane, not B2\'s permission system, so we own issuance, scoping, revocation paths. B2 cannot replicate without giving up its primitives.' },
        { title: '"No dashboard" as covenant', body: 'Every dashboard we DON\'T ship is part of the product. Incumbents\' product orgs are structurally incapable of NOT shipping a console — there\'s always a PM who wins next quarter by adding tabs.' },
      ],
      cannotHold: [
        { title: 'Storage price', body: 'B2 sits underneath us. R2 already prices at $0.015/GB with $0 egress. We cannot win on cost-per-byte; we can only win on cost-per-headache.' },
        { title: 'Durability / availability', body: 'All three incumbents are eleven-nines. Anyone who entered believing this was a moat is already wrong.' },
        { title: 'S3 compatibility', body: '`@aws-sdk/client-s3` works against R2, B2, MinIO, Wasabi, Tigris. Compatibility is table stakes, not a wedge.' },
      ],
      switchingFor: [
        'MCP tool surface — once an agent calls `foundr_host.upload(...)` in 50 prompts, swapping providers means rewriting prompts and re-testing every agent',
        'Per-agent JWT scopes embedded in agent identity files — moving to a new provider means re-issuing the entire fleet',
      ],
      switchingAgainst: [
        'We sit on top of B2. If we ever need to migrate to R2 or self-managed Ceph, the data plane churn is on us',
        'Agents that bypassed our MCP layer and went straight to the underlying S3 URL can swap providers with one env var',
      ],
    },
    synthesis: [
      { wedge: 'MCP-native install (no SDK, no console)', segment: 'Solo founders running Claude/Cursor agents', vulnerability: 'AWS/R2/B2 require SDK + credential management before first upload', pain: 'I just want my agent to save a PDF', status: 'shipped' },
      { wedge: 'Per-agent JWT scoped to prefix', segment: 'Founders running 5+ agents in parallel', vulnerability: 'IAM access keys are account-wide; revoking one rotates all', pain: 'Lost-key panic; can\'t revoke a single misbehaving agent', status: 'shipped' },
      { wedge: 'Quote-tweet 1GB free tier', segment: 'Indie hackers, "I\'ll try anything free"', vulnerability: 'Incumbents require credit card before first byte', pain: 'Cold-start friction; bill-fear', status: 'shipped' },
      { wedge: 'Predictable flat tiers ($9 / $29)', segment: 'Founders who got a Pocwierz-style bill once', vulnerability: 'S3 PUT/egress meters; unauthorized requests historically chargeable', pain: 'I\'m afraid to leave this running', status: 'shipped' },
      { wedge: 'No bucket-name globals (handle-scoped namespace)', segment: 'Anyone who\'s hit `BucketAlreadyExists`', vulnerability: 'S3\'s global partition namespace; bucket-squatting', pain: 'Why is `my-app-files` taken by someone else?', status: 'shipped' },
      { wedge: 'Agent identity ↔ storage identity binding', segment: 'Multi-agent fleets, agent platforms', vulnerability: 'Object stores work but the agent now owns secrets to a cloud account', pain: 'Auth shape mismatch between platform identity and storage', status: 'partial' },
      { wedge: 'Embedding-aware blob metadata', segment: 'RAG-shaped agents', vulnerability: 'No incumbent ships vector metadata at the object layer', pain: 'Separate vector DB just to remember "what was in this file"', status: 'gap' },
      { wedge: 'Realtime tail / event hose over MCP', segment: 'Agent operators watching multiple runs', vulnerability: 'S3 Event Notifications → SNS → Lambda glue', pain: 'I just want to see what my agent wrote, live', status: 'partial' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'IAM is a multi-day debugging tax even for senior engineers',
        quotes: [
          { text: 'Spent 6 hours debugging why our GitOps pipeline kept blocking a critical deployment. IAM Access Analyzer doesn\'t care about your Permission Boundaries.', attribution: 'abestdev, dev.to' },
          { text: 'Three weeks of my life I will never get back… iam:PassRole Nightmare.', attribution: 'cdatta, dev.to' },
          { text: 'Even engineers internally at AWS frequently get tripped up with IAM permissions. It\'s rare that someone gets them right on the first try.', attribution: 'HN commenter, "IAM Is the Worst", id=39714155' },
        ],
        whyIncumbentsCantFix: 'IAM\'s union-of-Allow / Deny-always-wins evaluation is load-bearing for every AWS service. Simplifying breaks the security posture of every Fortune-500 deployment.',
        coverage: { status: 'shipped', detail: 'foundr.host issues a JWT per agent scoped to a path prefix. No policy JSON, no Deny vs Allow evaluation. The credential IS the permission.' },
      },
      {
        label: 'B',
        title: 'The S3 global bucket namespace is a foot-gun',
        quotes: [
          { text: 'Bucket name already exists — but it is not listed on the S3 Mgmt Console.', attribution: 'AWS re:Post, QU1M5o_SwQTL24RN17n9ukjw' },
          { text: 'Worked for a company which ran into an S3 bucket naming collision when working with a client — both decided hyphenated-company-name was a good S3 bucket name (my company lost that race).', attribution: 'HN, id=39635591' },
          { text: 'Globally unique names of S3 could be problematic with just the metadata of name — you could figure out how a company names their S3 buckets.', attribution: 'redserk4, HN id=43895607' },
        ],
        whyIncumbentsCantFix: 'AWS shipped "Account Regional Namespaces" in 2026 but kept the global namespace as default because two decades of `bucket.s3.amazonaws.com` URLs are load-bearing. R2 inherits the same pattern.',
        coverage: { status: 'shipped', detail: 'foundr.host scopes everything under the founder\'s handle (`handle.host.foundr.world/<path>`). No global namespace, no squatting.' },
      },
      {
        label: 'C',
        title: 'Dashboards are operational friction, not control planes',
        quotes: [
          { text: 'R2 is a great product and a really annoying one to use in the browser once the work stops being trivial.', attribution: 'Stefan Greeff, R2 Desk Pro author' },
          { text: 'The AWS Management Console. The very phrase sends shivers down the spine of even seasoned developers.', attribution: 'Sthitaprajna Sahoo, Medium' },
          { text: 'I just destroyed my Backblaze buckets recently and realized they didn\'t have a delete button. You have to make a deletion API request for every single item.', attribution: 'HN, id=20624544' },
        ],
        whyIncumbentsCantFix: 'Every cloud product org has a PM whose career advances by shipping more dashboard tabs. The console is the demo surface for sales; deleting it is a political non-starter.',
        coverage: { status: 'shipped', detail: 'foundr.host has no dashboard, by design. State changes happen through MCP tools; the "console" is the chat transcript.' },
      },
      {
        label: 'D',
        title: 'Surprise bills from PUT / unauthorized-request / egress meters',
        quotes: [
          { text: 'Charges of over $1,300 in a single day… nearly 100 million PUT requests… all happened just a few days after I ensured my client that the price will be negligible, like $20 at most for the entire month.', attribution: 'Maciej Pocwierz, Semantive' },
          { text: 'Welcome to July, time to get your bill, and it was $2700.', attribution: 'Corey Quinn, Whiteboard Confessional' },
          { text: '$58,000 to AWS — the billing appeared all at once, jumping from $140 to over $56,000 in a single night.', attribution: 'Damiano Giorgi, Bedrock incident' },
        ],
        whyIncumbentsCantFix: 'Per-operation metering IS the revenue model. AWS waiving unauthorized-PUT charges in May 2024 was the first concession in a decade. R2 zeroed egress but kept Class A ops at $4.50/M.',
        coverage: { status: 'shipped', detail: 'Free / $9 / $29 flat. The customer literally cannot get a surprise bill because there is no per-operation meter exposed to them.' },
      },
      {
        label: 'E',
        title: 'Agents need credentials that match their identity, not a human\'s IAM user',
        quotes: [
          { text: 'Object stores work fine, but the agent now owns secrets to a cloud account, has to manage IAM, and the storage is unauthenticated from the platform\'s perspective.', attribution: 'colonistone_34, dev.to' },
          { text: 'Every agent platform that asks "do you have an S3 account?" is asking the wrong question.', attribution: 'same essay' },
          { text: 'I have an aws account with more than 1000 iam users. I need to rotate access / secret keys in an effective way.', attribution: 'AWS re:Post, QUCwWbdfydQ7S4-UEfteiHNw' },
        ],
        whyIncumbentsCantFix: 'IAM was designed for humans and EC2 instances. Issuing thousands of short-lived per-agent credentials means standing up Cognito + STS + a token-vending Lambda — a 200-line architecture diagram before the first byte uploads.',
        coverage: { status: 'shipped', detail: 'foundr.host\'s JWT-per-agent issuance is one MCP tool call. The credential IS bound to the agent\'s identity, and revoking it is a single tool call away.' },
      },
    ],
  },

  'foundr-work': {
    strategicMoves: [
      { title: 'Ship the Claude Code skill bundle as the install path', body: '`claude mcp add foundr-work` should be the README\'s first command. Distribution into 100K+ Claude Code seats beats any landing-page funnel. Time-pressured: the Claude Code adoption curve is steepest now.', timing: 'Q1' },
      { title: 'Steal the LangChain exit narrative', body: 'Every week brings a fresh "we replaced LangChain with 200 lines" post (Medium, AWS in Plain English, OctoClaw, Logic.inc). Publish a `langchain-to-foundr-work` codemod + migration guide. Free attention.', timing: 'Q1' },
      { title: 'Open-source a public registry of `worker.yaml` recipes', body: 'Copy the Vercel "starter kits" playbook that drove their OSS → paid funnel ("clone repo, add Stripe key, deploy"). Recipes = SEO + share virality + zero-to-running in 5 minutes.', timing: 'Q2' },
      { title: 'Ship durability as a Postgres / SQLite adapter, not a hosted service', body: 'Cloudflare Agents already has 790K weekly npm DLs by being free + persistent on Durable Objects. Make self-hosted durability work; let `$29/mo Hosted Solo` be the convenience tax, not the only option.' },
      { title: 'Land 5 indie-hacker design partners running 5 production foundr-workers each', body: 'Mastra closed PayPal/Adobe/Replit via case studies; our audience is a tier below — easier to land, faster to ship. Case-study copy beats any ad spend.', timing: 'Q2' },
      { title: 'Compete head-on with Inngest AgentKit (845 stars)', body: 'They have the right idea (deterministic routing, MCP-first) but no declarative surface. Frame foundr.work as "AgentKit + YAML + portable." Their tiny star count means the niche is still wide open.' },
      { title: 'Mint a benchmark: "Stateful agent ops per dollar"', body: 'Temporal Cloud $100/mo, LangGraph Platform usage-priced, Mastra Cloud tiered, foundr.work Hosted Solo $29. Publish a head-to-head benchmark. Cheap PR with a moat-shaped narrative.', timing: 'Q3' },
    ],
    moats: {
      hold: [
        { title: 'Claude Code / Codex skill-native distribution', body: 'Anthropic\'s CLI is the agent-engineer\'s IDE. A skill bundle installed via `claude mcp add` becomes muscle-memory. CrewAI/LangChain cannot retrofit this without abandoning their Python-decorator surface.' },
        { title: 'YAML spec as the artifact', body: 'Once a team has 20 `worker.yaml` files in git, that\'s a corpus of reproducible specs that compounds. Frameworks store agents as code — harder to lift, but also harder to audit/share. We win on portability + auditability.' },
        { title: 'Recipe registry network effect', body: 'Every published recipe lowers time-to-first-worker for the next user. Vercel\'s starter-kits playbook proved this; LangChain has integrations, not recipes — different graph entirely.' },
      ],
      cannotHold: [
        { title: 'Durability / replay', body: 'Temporal / Inngest / LangGraph Platform all have it. Ours is table stakes — the price point ($29) and indie-shape are the wedge, not the capability.' },
        { title: 'Multi-provider LLM routing', body: 'LiteLLM / OpenRouter commoditized this. Every framework supports it; nobody can sell on it alone.' },
        { title: 'MIT license + BYO key', body: 'Pydantic-AI, smolagents, Agno, Mastra OSS all do this already. Required to enter, not a moat.' },
      ],
      switchingFor: [
        'Once the founder has cron\'d 5 foundr-workers, ripping them out means recreating the YAML in Python — the spec IS the lock-in (without being closed)',
        'Skill-bundle install means uninstalling foundr-work breaks the founder\'s Claude Code muscle-memory',
        'Recipe registry membership: published recipes earn citations + traffic that stay tied to the contributor',
      ],
      switchingAgainst: [
        'Solo founders churn fast — if Hosted Solo gives them durability they can replicate with `pg-boss` + Postgres, they will. The hosted tier needs replay + dashboards to defend $29/mo',
        'A vibe coder who paid $29 will downgrade to BYO Postgres the moment cash is tight',
        'YAML is portable: a competitor could write a "foundr-work → LangGraph" transpiler in a weekend',
      ],
    },
    synthesis: [
      { wedge: 'YAML over Python decorators', segment: 'Solo founders / Claude Code natives', vulnerability: 'CrewAI/LangChain locked to Python class hierarchies', pain: 'Framework forces me to think like the framework', status: 'shipped' },
      { wedge: 'Claude Code skill-bundle install', segment: 'AI-native solo devs in Claude Code', vulnerability: 'LangChain/CrewAI need `pip install` + tutorial', pain: 'I want it in my IDE, not another CLI to learn', status: 'partial', note: 'SOON — depends on framework launch' },
      { wedge: '$29 hosted durability tier', segment: 'Indie hackers running 1–10 agents', vulnerability: 'Temporal $100 floor; CrewAI Enterprise = "talk to sales"; Mastra Teams $250 next step', pain: 'Durable execution priced for indie scale', status: 'partial' },
      { wedge: 'Stateful by spec, not by checkpoint plumbing', segment: 'TS/Py devs hit by LangGraph state-loss bugs', vulnerability: 'LangGraph Issues #10144, #2040, #36957 — state silently disappears', pain: 'Production agent silently loses memory', status: 'gap', note: 'Core differentiator — need to ship runtime' },
      { wedge: 'OSS + BYO key + zero account', segment: 'Solo founders allergic to vendor lock-in', vulnerability: 'Hyperscaler agents lock to AWS/Azure/GCP; Mastra Cloud + LangSmith require signup', pain: 'Don\'t make me create another account', status: 'shipped' },
      { wedge: 'Portable spec across runtimes', segment: 'Multi-cloud / sovereign customers', vulnerability: '"Control-plane lock-in is the deepest layer" (SoftwareSeni)', pain: 'Run the same agent on my laptop, lab, prod, customer\'s VPC', status: 'gap' },
      { wedge: 'Replay + audit trail in OSS core', segment: 'Compliance-aware solo founders', vulnerability: 'Temporal puts replay behind Cloud; LangSmith is paid', pain: 'I need replay without a paid plan', status: 'gap' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Abstraction tax + debugging through framework internals',
        quotes: [
          { text: 'Spent a good amount of time trying to use it… ultimately dropped it. It made my head hurt.', attribution: 'HN user — news.ycombinator.com/item?id=40739982' },
          { text: 'Five layers of abstraction just to change a minute detail.', attribution: 'HN user — news.ycombinator.com/item?id=40739982' },
          { text: 'Stack traces become unreadable and overwhelming. Engineers spend hours debugging framework logic they did not write.', attribution: 'upgrad.com — Why Are Developers Quitting LangChain?' },
        ],
        whyIncumbentsCantFix: 'LangChain\'s $125M Series B explicitly funds LangGraph (the lower-level orchestrator). Removing abstraction means orphaning their 1.0 release and 90M monthly DLs.',
        coverage: { status: 'shipped', detail: 'YAML spec has no class hierarchies. Engine traces map 1:1 to spec lines. The thing that runs is the thing you wrote.' },
      },
      {
        label: 'B',
        title: 'State silently lost across threads / restarts / checkpoint boundaries',
        quotes: [
          { text: 'Cross-thread checkpoint data contamination… Data from one conversation appears inside another thread\'s checkpoint and LLM responses.', attribution: 'pepinogttv — github.com/langchain-ai/langgraphjs/issues/2040' },
          { text: 'When invoking the tool-call subgraph, the main agent loses the memory of previous tool invocations.', attribution: 'education-01 — github.com/langchain-ai/langgraph/issues/7117' },
          { text: 'Messages are silently lost… Inspecting `.langgraphjs_api.checkpointer.json` shows it stays empty.', attribution: 'anishgurjar — github.com/langchain-ai/langchainjs/issues/10144' },
        ],
        whyIncumbentsCantFix: 'State management is split across langchain, langgraph, langgraph-checkpoint-postgres packages with separate release trains. The singleton `AsyncLocalStorageProviderSingleton` design choice is load-bearing.',
        coverage: { status: 'gap', detail: 'foundr.work\'s declarative state machine is the differentiator we need to ship before the $29 hosted tier matters. State as a first-class spec field, persisted by the runtime, not by user-wired checkpointers.' },
      },
      {
        label: 'C',
        title: 'Agent runtime crashes container on transient LLM error',
        quotes: [
          { text: '`ChatWithCrewFlow.__init__` triggers synchronous blocking LLM calls at module import time… ANY LLM provider hiccup during container startup causes the Python process to crash before the HTTP server is listening.', attribution: 'jpr5 — github.com/crewAIInc/crewAI/issues/5510' },
          { text: 'Failed to parse ledger information after multiple retries… `progress_ledger = json.loads(ledger_str)` is not capable to handle the json string.', attribution: 'vamsithumma2812 — github.com/microsoft/autogen/issues/6599' },
          { text: 'Invalid response from LLM call - None or empty… Agent executor doesn\'t proactively check message length before calling the model — it only handles it after an exception is thrown.', attribution: 'phuihock — github.com/crewAIInc/crewAI/issues/3454' },
        ],
        whyIncumbentsCantFix: 'Eager-init patterns and unvalidated LLM JSON parsing are baked into CrewAI / AutoGen execution loops. Fixing requires breaking-change API redesign.',
        coverage: { status: 'partial', detail: 'Hosted Solo durability tier resumes from last checkpoint on crash. OSS core needs the same default — lazy-init + validated parsing baked into the compile step.' },
      },
      {
        label: 'D',
        title: 'Vendor / control-plane lock-in once you adopt a platform',
        quotes: [
          { text: 'Pick a control plane, and lock-in starts — quietly, across multiple layers, compounding with every month of deployment.', attribution: 'softwareseni.com — How to Avoid Enterprise AI Agent Platform Lock-In' },
          { text: 'Vendor lock-in… is the most common regret teams report after their first year of agent deployment.', attribution: 'agentmelt.com — AI Agent Vendor Lock-In' },
          { text: 'Every other AI agent platform requires you to use their cloud.', attribution: 'JieGou — jiegou.ai/blog/ai-agent-platform-cloud-lock-in/' },
        ],
        whyIncumbentsCantFix: 'Hyperscaler platforms (Bedrock, Foundry, Vertex) ARE the lock-in. LangGraph\'s Platform/Cloud monetization requires gravity. CrewAI AOP IS the moat.',
        coverage: { status: 'shipped', detail: 'YAML spec + MIT + BYO key + npm install. The spec runs anywhere npm runs. No control plane, no cloud dependency for the OSS path.' },
      },
      {
        label: 'E',
        title: 'Agent frameworks are overkill for the actual problem most solo founders have',
        quotes: [
          { text: 'I don\'t see the point of agent frameworks. Other than durability and checkpoints how does it help me? Claude code already works as an agent.', attribution: 'HN — news.ycombinator.com/item?id=47070455' },
          { text: 'I\'m a full stack developer and have looked into LangChain and am daunted by its surface area. I\'m trying to understand where and how exactly does it add value.', attribution: 'HN — news.ycombinator.com/item?id=41141305' },
          { text: 'After spending more time trying to decypher the LangChain docs than it would take to roll-my-own, everything I\'ve done so far has involved rolling-my-own.', attribution: 'HN — news.ycombinator.com/item?id=41141305' },
        ],
        whyIncumbentsCantFix: 'LangChain / CrewAI / Mastra are sized for enterprise feature parity. Acknowledging "solo founders don\'t need most of this" cannibalizes their TAM pitch to VCs.',
        coverage: { status: 'shipped', detail: 'foundr.work IS the "small surface area + durability + checkpoints" the HN crowd asked for. The README needs to say it in their words — "rolling-your-own + state + replay, in a YAML file."' },
      },
    ],
  },

  'foundr-credit': {
    strategicMoves: [
      { title: 'Ship the MCP-apply primitive before any competitor does', body: 'F6S, SaaSOffers, AI Credit Ladder are human-curated browse-and-click directories. None expose `credit.match` / `credit.apply` as MCP tools. Owning the verb "agent applies for you" while incumbents are SEO-curating PDFs is the only durable wedge.', timing: 'Q1' },
      { title: 'Index by founder *state*, not vendor logo', body: 'Every incumbent is a vendor-grid. Pivot the schema to `{stage, stack, entity_type, prior_claims, last_funding_date, country}` → matched offers. Beat them by making "what I qualify for today" the only query.' },
      { title: 'Eligibility-confidence score per offer, refreshed weekly', body: 'The #1 unfixed complaint is opaque "internal requirements" (AWS). Scrape acceptance posts + rejection threads + program T&Cs → produce `P(approval | founder_state)`. Surface as a 0–100 score. Nobody does this.' },
      { title: 'Hard-cull stale offers — verify weekly, kill on first dead link', body: 'Every directory above 100 offers (Surya-saka, SaaSOffers 477, startupperks.xyz) decays into a graveyard of expired tiers and 404s. A small, verified index ("57 offers, all reapplied in the last 7 days") signals trust the bloated incumbents can\'t.' },
      { title: 'Anti-burn alert layer (Pro tier)', body: 'AI inference bills jumped 500% at Boston startups in 6 mo; 40-60% of seed runway burns on infra. Wire credit-balance + cloud-cost telemetry → "your $25K Anthropic credits run out in 11 days at current burn."' },
      { title: 'Become the canonical referral provider for the long tail', body: 'Anthropic Anthology Fund, Modal, Together, Vast.ai all need partner channels. Become an Activate Provider with an Org ID; route founders through us for higher tiers. Converts index → distribution → margin.' },
      { title: 'Quote-tweet engine as top-of-funnel', body: 'Every new program → auto-quote-tweet from @foundrcredit with the eligibility-confidence diff. Build the credit-news beat the same way Polymarket built the prediction beat.', timing: 'Months 6–12' },
    ],
    moats: {
      hold: [
        { title: 'MCP-native distribution', body: 'Once a founder wires foundr.credit into Claude Code / Cursor as an MCP server, the switching cost is wiring a competing server AND re-validating their state. Incumbents are SEO/UI plays that don\'t survive the migration from "human browses" to "agent calls tool."' },
        { title: 'State-graph dataset (founder × outcome)', body: 'Every Pro/concierge application produces a labeled row: (founder_state, program, outcome, rejection_reason). After 6 months this is a unique training set no static directory can scrape into existence.' },
        { title: 'Live-verification flywheel', body: 'Pro members apply → we see acceptances/rejections in real time → free quote-tweet broadcasts the freshness → more sign-ups → more verification data. Same loop Stripe used for fraud signal.' },
      ],
      cannotHold: [
        { title: 'The list itself', body: '10+ directories already exist (Surya-saka, CreditsGull, startupperks.xyz, SaaSOffers, AI Credit Ladder, JoinSecret). Vendors WANT their offer indexed. Incumbents copy any new program within days.' },
        { title: 'Concierge applications', body: 'SaaSOffers Premium is $79/yr, JoinSecret $149/yr, StartupWalah does AWS+OpenAI concierge at $399/yr. The unit is commoditized; price floor heading to $0.' },
        { title: '"AI-native" framing', body: 'Every competitor will slap "AI-powered recommendations" on their homepage by Q3. The phrase has zero defensibility; only the MCP-apply primitive does.' },
      ],
      switchingFor: [
        'Founder\'s `founder_state` (entity, stack, prior credits, last raise) lives in our DB; re-entering it elsewhere is 20+ minutes of friction',
        'MCP server already wired into the agent loop — uninstalling is a deliberate act, not a forgotten tab',
        'Eligibility-confidence history (programs we\'ve gotten you into) builds a personal track record competitors can\'t import',
      ],
      switchingAgainst: [
        'Founders apply for credits once per program per company — after claiming AWS/Anthropic/Cloudflare top tiers, marginal value of the index collapses',
        'Founders distrust paid concierge ("I can just google it") — see SaaSOffers Premium $79 vs free debate',
      ],
    },
    synthesis: [
      { wedge: 'MCP `credit.apply` tool callable from Claude Code / Cursor', segment: 'AI-native solo founders who live in the agent loop (~150K globally)', vulnerability: 'F6S/SaaSOffers/Ladder ship browsers, not tools; no MCP roadmap visible', pain: 'I have to context-switch out of Cursor to apply, then forget', status: 'partial', note: 'SOON' },
      { wedge: 'Eligibility-confidence score with cited rejection threads', segment: 'Bootstrapped founders ineligible for VC-gated tracks (~70% of solos)', vulnerability: 'Microsoft Founders Hub now requires VC referral; AWS won\'t disclose rejection reasons', pain: '"Internal requirements" rejections with no path forward', status: 'partial' },
      { wedge: 'Auto-detect prior-credit ceiling (< $350K Azure, < $20K AWS)', segment: 'Founders who\'ve already claimed lower tiers and want the diff', vulnerability: 'AWS Inception forum: 4 mo unanswered on tier-mapping; auto-rejects "already received credits"', pain: 'Repeated tier-upgrade rejections that should be approved', status: 'gap' },
      { wedge: 'Burn-aware credit routing (credits expiring vs runway)', segment: 'Pro $79/mo segment — solo founders with ~$1–10K/mo AI spend', vulnerability: 'Boston survey: 500% AI cost jump in 6 mo; no directory ties offers to actual burn', pain: 'Got $100K Microsoft credits, they\'ll be gone before expiration', status: 'partial' },
      { wedge: 'Equity-free GPU credit matching (Vast.ai, Modal, Together)', segment: 'AI-native founders dodging the OpenAI/YC $2M-for-uncapped-SAFE trap', vulnerability: 'F6S and FoundersCard index zero serverless-GPU programs', pain: 'I want compute, not a cap-table line item', status: 'shipped' },
      { wedge: 'Sub-domain match: bootstrapped + non-US + no entity yet', segment: 'Solo builders in EU/India/LATAM locked out of AWS Activate', vulnerability: 'Most incumbents are US/SF-coded; SaaSOffers ranks by deal size not jurisdiction fit', pain: 'I\'m in Italy with a Revolut card — every program assumes US LLC', status: 'partial', note: 'Needs jurisdiction tag schema' },
      { wedge: 'Concierge proof-of-application (screenshots, rejection reasons logged)', segment: 'Pro tier founders skeptical of "we\'ll apply for you"', vulnerability: 'StartupWalah charges $399 with no transparency; SaaSOffers Premium has billing complaints', pain: 'I paid $79, did anything actually happen?', status: 'partial' },
      { wedge: 'Cross-program de-duplication ("don\'t claim $1K AWS Founders if you\'ll need $100K Portfolio")', segment: 'Pre-incorporation builders', vulnerability: 'No directory warns about lock-in; founders waste their one-shot at higher tier', pain: 'I applied for AWS Founders, now Portfolio auto-rejects me', status: 'gap' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Opaque "internal requirements" rejections with no recoverable signal',
        quotes: [
          { text: 'Received a rejection email citing "does not meet one or more internal requirements." No specific item listed.', attribution: 'AWS re:Post, May 2025' },
          { text: 'I have been rejected three times (twice for Founders, once for Portfolio) and am struggling to understand the specific reason.', attribution: 'AWS re:Post, Jul 2025' },
          { text: 'AWS typically doesn\'t provide detailed rejection reasons due to their internal policies.', attribution: 'AWS re:Post recurring answer' },
        ],
        whyIncumbentsCantFix: 'AWS, Microsoft, OpenAI deliberately keep eligibility opaque to deter gaming. Static directories only publish vendor-side criteria; they have zero feedback loop.',
        coverage: { status: 'shipped', detail: 'foundr.credit ingests rejection emails from Pro members, clusters them, surfaces the real failure modes with citation count.' },
      },
      {
        label: 'B',
        title: 'The bootstrapped / no-VC trapdoor',
        quotes: [
          { text: 'It\'s disheartening to see a program that once stood for a greater purpose suddenly shift toward investor-partnered backing.', attribution: 'Microsoft Q&A, on Founders Hub change' },
          { text: 'For founders who\'d budgeted runway around the old $150K ceiling, the June 27 announcement was a rude shock.', attribution: 'The Register, Jul 2025' },
          { text: 'Without an investor referral code, this investor offer path is not available.', attribution: 'Microsoft Q&A, bootstrapped solo founder' },
        ],
        whyIncumbentsCantFix: 'F6S and FoundersCard are funnels into VC programs — their unit economics assume the user HAS an investor.',
        coverage: { status: 'shipped', detail: 'Default filter is `no_VC_required = true`; programs gated by referral codes are explicitly demoted. We publish the bootstrapped-accessible $230K stack as the on-ramp.' },
      },
      {
        label: 'C',
        title: 'Tier-upgrade rejections when the founder is mathematically entitled',
        quotes: [
          { text: 'Application keeps getting auto-rejected with "you have already received credits at the same or greater amount." That doesn\'t track. $10K is less than $25K.', attribution: 'NVIDIA Developer Forums, May 2026' },
          { text: 'Four months in, still no answer on the Org ID / tier-mapping question.', attribution: 'same thread' },
          { text: 'I sent this information three times in separate instances, but never received a follow-up response from the support team.', attribution: 'AWS re:Post, Jul 2025' },
        ],
        whyIncumbentsCantFix: 'Tier-upgrade logic lives inside AWS/Microsoft internal CRMs; no third-party directory tracks per-founder credit history. The data doesn\'t exist outside the founder\'s own inbox.',
        coverage: { status: 'shipped', detail: '`founder_state.prior_credits[]` is a first-class schema field. We compute `diff_eligible(program, prior_credits)` and pre-flight the application before submission.' },
      },
      {
        label: 'D',
        title: 'Inbox spam from "free network" platforms',
        quotes: [
          { text: 'Receiving huge amounts of spam mail, SMS and more from them. All our requests to stop receiving those spams were ignored.', attribution: 'Product Hunt review of Pioneer' },
          { text: 'My inbox is filled with cold-email outreach BS... a dozen emails per day.', attribution: 'Fastlane Entrepreneur Forum, Apr 2026' },
          { text: 'F6S Customer Service — Issue Resolution Rate: Low (0% reported full resolution).', attribution: 'PissedConsumer aggregated rating' },
        ],
        whyIncumbentsCantFix: 'F6S, Pioneer monetize founder attention → spam IS the business model, not a bug.',
        coverage: { status: 'partial', detail: 'foundr.credit ships zero outbound marketing email to free-tier users; the only notification is "a new program you qualify for went live."' },
      },
      {
        label: 'E',
        title: 'Stale lists, dead links, and "verified" claims that aren\'t',
        quotes: [
          { text: 'Founders shouldn\'t rebuild the credit spreadsheet alone... programs are scattered across dozens of vendor sites, program PDFs, and blog posts.', attribution: 'AI Credit Ladder, About page' },
          { text: 'Some platforms charge $200+/year for deals you can find for free. Others give you affiliate links disguised as "exclusive partnerships."', attribution: 'SaaSOffers comparison page' },
          { text: 'The realistic stack for a smart bootstrapped solo developer is $5K-$10K, not the advertised $1.5M ceiling.', attribution: 'Klymentiev, Apr 2026' },
        ],
        whyIncumbentsCantFix: 'The bigger the directory (SaaSOffers 477, Surya-saka 180), the higher the decay rate per program. Verifying 477 offers weekly is uneconomical for a hand-curated team.',
        coverage: { status: 'shipped', detail: 'Each program carries a `last_verified_at` timestamp + the agent that verified it. Programs unverified >14 days auto-demoted; >30 days removed.' },
      },
    ],
  },

  'foundr-money': {
    strategicMoves: [
      { title: 'Ship the "no entity, no $25K cash" wedge as the headline', body: 'Every Brex/Ramp marketing page brags about "no personal guarantee" while burying a $25K–$50K cash floor and EIN requirement. Lead: "Track P&L on your 5 side projects today. No LLC, no $25K cash, no EIN."' },
      { title: 'Build the agentic MCP tagging layer before any UI polish', body: 'Cursor/Claude Code users already pay Anthropic $200/mo. If foundr-money exposes `money_tag(charge_id, project)` their coding agent can auto-attribute Vercel/OpenAI/Supabase charges as they happen.', timing: 'Q1' },
      { title: 'One-click "what is this charge?" for OpenAI/Anthropic/Vercel/Cursor', body: 'Indie hackers shipped AgentGuard, LLMeter, StackSpend, MRR Empire — five point solutions for the same workflow. Bundle the read paths into one unified project-tagged ledger.' },
      { title: 'Quarterly-estimated-tax mode (Schedule C–first)', body: 'Line up with June 15 indie-hacker-special deadline. CPA Twitter calls Q2 "the indie hacker special." Auto-classify per-project income into Schedule C and surface a "set aside this much for Q2" number. QBO Solopreneur explicitly does NOT support this.', timing: 'Q2' },
      { title: 'Accountant export at Pro tier — formatted as "what your CPA actually wants"', body: 'Reddit is full of bookkeepers saying "your books aren\'t usable" and charging cleanup fees. Ship one-button export mirroring the format CPAs already accept — we become the only tool a founder hands their CPA without apology.' },
      { title: '"Promote a project to entity" upgrade path', body: 'Don\'t compete with Stripe Atlas / Mercury — partner with them. When one micro-startup hits ~$50K ARR, surface "this one\'s earned an LLC — promote it" flow that keeps the historical books linked. Captures the moment incumbents currently win the customer.' },
      { title: 'Quote-tweet onboarding as the acquisition vector', body: 'Free tier (1 project, quote-tweet activation) is the single cheapest CAC in the AI-founder demographic. Make the quote-tweet auto-create the project, scrape the domain, and start the cost stream immediately.', timing: 'Q3' },
    ],
    moats: {
      hold: [
        { title: 'Agentic MCP surface as a first-class billing primitive', body: 'Ramp/Brex/QBO are owned by incumbents who think "AI" = a chatbot bolted onto an enterprise dashboard. Building MCP-native means Claude Code, Cursor, and every future coding agent can tag spend at the point of creation.' },
        { title: 'No-entity, no-cash-minimum positioning', body: 'Brex requires $50K+ cash and an EIN. Ramp requires $25K bank balance. QBO Solopreneur tops out at $200K and won\'t admit S-corps. Their underwriting cannot serve sole props with five projects and zero EINs.' },
        { title: 'Per-project P&L as the unit of work', body: 'Every incumbent assumes one entity = one P&L. QBO multi-entity is a $200+/mo enterprise SKU. Once we anchor "project" as the rollup primitive, switching costs compound.' },
      ],
      cannotHold: [
        { title: 'Bank feeds (Plaid/Teller)', body: 'Every accounting tool has these. Plaid is a commodity.' },
        { title: 'Pretty dashboards / "Linear for accounting" aesthetic', body: 'Lots of crafted-UI bookkeeping startups (Nummo, Indie Buckets, MarginPulse, MRR Empire). Copy-paste in a 2-week sprint.' },
        { title: 'Auto-categorisation via LLM', body: 'Botkeeper, ClawKeeper, Deelo and a dozen others ship "AI bookkeeper" demos. The model is the same model everyone has API access to.' },
      ],
      switchingFor: [
        '12+ months of historical per-project P&L data tagged by the user\'s own AI agent — irreproducible elsewhere',
        'MCP tool definitions wired into the founder\'s Claude Code config',
        'Quote-tweet history publicly attests "I track on foundr.money" — social proof becomes lock-in',
      ],
      switchingAgainst: [
        'CPA familiarity with QBO — "my CPA needs QuickBooks" is the #1 reason solopreneurs stay',
        'Stripe/Vercel/OpenAI native dashboards exist and are free — founders may treat us as redundant',
        'When a founder incorporates a winning project, the natural next move is a "real" stack (Mercury + Ramp) — we must own the handoff',
      ],
    },
    synthesis: [
      { wedge: 'MCP-native cost tagging from coding agents', segment: '~2M+ Claude Code / Cursor / Codex users with ≥1 paid project', vulnerability: 'Ramp/Brex/QBO have no agent-callable APIs; Stripe Organizations is enterprise-only', pain: 'Which project caused that $800 Vercel bill? answered at the deploy', status: 'shipped' },
      { wedge: 'No-EIN, no-cash-min charge tracking', segment: '~10M US sole-prop founders earning <$50K/yr per side project', vulnerability: 'Brex requires $50K cash; Ramp requires $25K; both require LLC + EIN', pain: 'I got denied by Brex/Ramp for being too small → instant onboarding instead', status: 'shipped' },
      { wedge: 'Cross-provider AI-spend attribution', segment: '~500K founders running multi-LLM apps in prod', vulnerability: 'Provider Usage APIs are org-aggregate; no native cross-provider rollup; LiteLLM/StackSpend are point solutions', pain: '$58K Bedrock bill in a week, $1,243 surprise from one connection pool — attributed per project', status: 'shipped' },
      { wedge: 'Quote-tweet onboarding → 1 free project', segment: '~1M X-active indie founders', vulnerability: 'Mercury/Ramp/Brex onboarding takes days, requires legal docs', pain: 'Founder ships project, quote-tweets, P&L exists 30 seconds later', status: 'shipped' },
      { wedge: 'Schedule-C-first quarterly estimated tax mode', segment: '~5M US self-employed who miss Q2 every year', vulnerability: 'QBO Solopreneur explicitly doesn\'t do S-corp; FreshBooks/Wave don\'t model quarterly tax', pain: 'Forgot Q2, IRS underpayment penalty accruing at 7%', status: 'partial', note: 'Needs tax-attorney review per state' },
      { wedge: 'Per-project cost attribution on shared Stripe account', segment: 'Indie hackers running 3-10 SaaS through one Stripe account using product IDs', vulnerability: 'Stripe Sigma is per-account; ChartMogul/Baremetrics are subscription-only and per-account-priced', pain: 'Which of my 5 SaaS is actually profitable? — currently a manual spreadsheet', status: 'shipped' },
      { wedge: '"Promote project to entity" Atlas/Doola handoff', segment: 'Founders graduating 1 winning project from a portfolio of 10', vulnerability: 'Atlas/Doola own incorporation; nobody owns the books-handoff', pain: 'Continuous P&L across pre-LLC and post-LLC life of the project', status: 'partial', note: 'Needs partnership' },
      { wedge: 'CPA-friendly export at Pro', segment: '~30K bookkeepers/CPAs serving the indie demographic', vulnerability: 'QBD export takes "15-20 hours per client to clean up"; QBO export is mainly for QBO-using CPAs', pain: 'My CPA says my books aren\'t usable', status: 'shipped' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Which project caused that surprise bill?',
        quotes: [
          { text: '$800 Vercel bill after just two weeks. A jump scare, a sum so disproportionate to the project\'s nascent stage.', attribution: 'Matthew Berman, on Stork.AI' },
          { text: 'My bill this cycle? $602.21. 99.7% of my bill was build minutes. No alerts. No warnings.', attribution: 'Vercel Community user, monorepo with 6 projects' },
          { text: '$56,265.59 in a single night. Kimi K2.5 input tokens alone totaled $46,336.92.', attribution: 'Damiano Giorgi, AWS Bedrock bug story' },
        ],
        whyIncumbentsCantFix: 'Vercel/AWS/OpenAI bill the org, not the project. Their pricing models depend on aggregate metering being authoritative.',
        coverage: { status: 'shipped', detail: 'foundr.money\'s MCP tagging captures project_id at call site, before the bill consolidates.' },
      },
      {
        label: 'B',
        title: 'I have multiple Stripe accounts and no idea what my total MRR is',
        quotes: [
          { text: 'I open a spreadsheet, start adding numbers manually, and realize I\'m wasting 30 minutes every week just to answer "What\'s my total MRR?"', attribution: 'MultiMMR guide author' },
          { text: 'Most are designed for single-account scenarios. Multi-account support is either absent or requires expensive enterprise plans.', attribution: 'Culta.ai, on ChartMogul/Baremetrics' },
          { text: 'Stripe wasn\'t built for portfolio builders. No way to see your combined MRR, total customers, or overall churn across projects.', attribution: 'MRR Empire' },
        ],
        whyIncumbentsCantFix: 'Stripe Organizations is built for legal multi-entity (one global corp with regional subs), not operational multi-project (one human with five product IDs across two Stripe accounts).',
        coverage: { status: 'shipped', detail: 'foundr.money treats "project" as the primary key; Stripe accounts and product IDs are children.' },
      },
      {
        label: 'C',
        title: 'I got denied by Brex/Ramp for being too small',
        quotes: [
          { text: 'The $25,000 signal is the gate that surprises most Canadian solo founders.', attribution: 'Auteur, on Ramp underwriting' },
          { text: 'Founders report approximately $50,000 in operating cash or a recent institutional funding round as the soft floor.', attribution: 'Brex requirements analysis' },
          { text: 'Sole proprietorships rarely qualify for true EIN-only cards, even with an EIN number.', attribution: 'VirtueCPAs' },
        ],
        whyIncumbentsCantFix: 'Brex/Ramp\'s "no personal guarantee" pitch is underwritten by the cash-balance floor. Drop the floor and the unsecured charge-card model collapses.',
        coverage: { status: 'shipped', detail: 'foundr.money isn\'t a card; it\'s a P&L tracker. No underwriting, no cash floor, no EIN — works on day one of a project.' },
      },
      {
        label: 'D',
        title: 'QuickBooks is solving a problem I don\'t have',
        quotes: [
          { text: '87% of our jobs have no cost data attached. We\'re flying blind on which jobs actually made money.', attribution: 'Reddit r/smallbusiness, via Level CFO' },
          { text: 'QuickBooks is overkill. I just need invoicing and a year-end export.', attribution: 'r/smallbusiness via Boring Utility Weekly' },
          { text: 'Two invoices per month unless you enable QuickBooks Payments. I hit the wall on day fifteen.', attribution: 'Expert Freelancing review of QBO Solopreneur' },
        ],
        whyIncumbentsCantFix: 'Intuit\'s revenue model depends on tier-escalation. Adding multi-project P&L to Solopreneur would cannibalize Plus ($115/mo). They\'ve raised prices 52-64% since 2020 because they\'re trapped.',
        coverage: { status: 'shipped', detail: 'foundr.money is project-first by design. P&L per project is the default view, not a $200/mo upgrade.' },
      },
      {
        label: 'E',
        title: 'Tax time = shoebox + panic + bookkeeper cleanup fees',
        quotes: [
          { text: 'Every tax season I was digging through a shoebox of receipts, trying to remember which client that dinner was for.', attribution: 'IndieHackers post, AI expense tracker thread' },
          { text: 'I sat down to do my taxes. The bill was $11,000. I had set aside almost nothing. Five mistakes cost me roughly $4,800 in penalties.', attribution: 'Jordan Kennedy, BalancePro' },
          { text: 'Q1 covers 3 months but is due 15 days after the period ends. Q2 covers only 2 months. Many first-time filers pay Q1, exhale, and forget about taxes until October.', attribution: '1 Person Finance, "the indie hacker special"' },
        ],
        whyIncumbentsCantFix: 'QBO Solopreneur "does not support S-Corp filings. No balance sheet, no payroll tracking." FreshBooks/Wave don\'t do quarterly tax math at all.',
        coverage: { status: 'partial', detail: 'Solo tier tracks per-project P&L feeding Schedule C; "set aside for Q2" feature is on the 12-month roadmap.' },
      },
    ],
  },

  'foundr-courses': {
    strategicMoves: [
      { title: 'Repo IS the curriculum', body: 'Each foundr.* product\'s public GitHub repo is the source-of-truth lesson; courses are auto-generated walkthroughs of real commits, PRs, and post-mortems. When the framework breaks, students see the migration commit, not a re-recorded video.' },
      { title: 'Free-forever as the wedge, not the loss leader', body: 'Lock the entire library to a single quote-tweet. Cuts ShipFast\'s $199 anchor and Maven\'s $500–$3,500 floor out of the conversation entirely.', timing: 'Q3 2026' },
      { title: 'Ship one course per foundr.* launch', body: 'Every new foundr.* product spawns its own course within 7 days. Forces freshness as a system property, not a maintenance to-do. Maven instructors burn out at one cohort; we ship one course per ship.' },
      { title: '1:1 build reviews ($199/mo) as the moat', body: 'Frontend Masters can\'t review your specific Cursor session. ShipFast\'s Discord is asynchronous. A weekly 30-min reviewer-on-your-actual-repo is the only tier incumbents structurally cannot match.' },
      { title: 'Cursor/Claude Code session recordings, not slide decks', body: 'Record real agent loops with timestamps, mistakes, and rollbacks. Most "AI engineering" courses show finished demos. The pain is the loop, not the result.' },
      { title: 'Discord with the actual maintainer answering', body: 'Marc Lou\'s Discord costs $49 extra and replies are slow. Make founder presence a baseline of the $19 tier, with response-time SLOs published publicly.', timing: 'Q4 2026' },
      { title: 'Capstones graded against a live production repo, not a notebook', body: 'Maven/AiBricks "deploy to Vercel as Demo Day" is a one-shot. Capstone = open PR against a real foundr.* repo; merging it is the certificate.' },
    ],
    moats: {
      hold: [
        { title: 'Repo-as-course substrate', body: 'Curriculum drift is a structural problem for every recorded-video platform. Ours is a build artifact, not a content artifact. Replicating it requires also operating the products being taught.' },
        { title: 'One-course-per-ship cadence', body: 'Bound to our product-shipping rate, not a content team\'s calendar. Maven instructors fund cohorts from their own time; FrontendMasters books a 3-day shoot. Neither can match a 7-day SLO.' },
        { title: '1:1 review on the student\'s specific repo', body: 'Requires senior reviewers willing to read random code at $199/mo margins. Marc Lou\'s economics reward volume; Maven instructors burn out. We\'re the only ones whose business model rewards depth here.' },
      ],
      cannotHold: [
        { title: '"Free courses" as positioning', body: 'freeCodeCamp, Microsoft AI Agents for Beginners (61k stars), ai-engineering-from-scratch (22k stars) all already free. Price isn\'t the moat — substrate is.' },
        { title: '"Modern stack" content', body: 'LaunchKit, ZeroDrag, every 2026-launched boilerplate is racing on App Router + Auth.js v5 + AI SDK. Any incumbent can re-record.' },
        { title: 'AI-agent-specific curriculum', body: 'DeepLearning.AI, Anthropic\'s cookbooks, AiBricks, Maven\'s End-to-End AI Engineering Bootcamp cover this. Topic is contested.' },
      ],
      switchingFor: [
        'Student\'s open PRs on foundr.* repos accumulate as a public portfolio they can\'t take with them',
        'Discord context (founder-on-the-thread, prior reviews) lives inside the foundr ecosystem',
        'Pro-tier 1:1 reviewer learns their codebase across months, like a part-time CTO — high re-onboarding cost elsewhere',
      ],
      switchingAgainst: [
        'Zero certification weight vs. AWS/Coursera credentials hiring managers recognize',
        'Free tier creates no commitment; quote-tweet is reversible in one click',
        'If foundr.* products plateau, the substrate stops producing new courses — competitors don\'t have that dependency',
      ],
    },
    synthesis: [
      { wedge: 'Course = live repo diff, not a recording', segment: 'Solo AI-native founders, 1-3yr exp', vulnerability: 'ShipFast/Mosh/Codecademy structurally can\'t keep recordings in sync with framework releases', pain: 'Course is outdated, files three years old (LinkedIn Learning #28)', status: 'shipped' },
      { wedge: 'Real Cursor/Claude Code session playback with mistakes intact', segment: 'Vibe-coders trying to escape regression hell', vulnerability: 'Bootcamps show finished demos; "they teach demos, not systems"', pain: '1 hour saved = 3 hours debugging', status: 'shipped' },
      { wedge: '1:1 review on student\'s actual repo, weekly, $199/mo', segment: 'Founders past tutorial-hell, pre-PMF', vulnerability: 'Marc Lou\'s Discord = $49 extra + "creator not bothered to answer"; Maven scheduled office hours only', pain: 'AI-generated code typically calls APIs without checking response status — no one reviews the silent fails', status: 'shipped' },
      { wedge: 'Capstone = merged PR to a live foundr.* product', segment: 'AI-engineers wanting a hireable artifact', vulnerability: 'Maven Demo Day = throwaway URL; AiBricks "live URL" not real product', pain: 'Build something no one pays for — capstones don\'t produce case studies', status: 'shipped' },
      { wedge: 'Founder-in-the-Discord with response-time SLO', segment: 'Solo founders at 2am hitting auth/Stripe/CORS walls', vulnerability: 'ShipFast unanswered weeks (AppSumo); Maven instructor west-coast timezone problem', pain: 'Week 3: Stripe webhooks failing in production… still no real feature shipped', status: 'partial' },
      { wedge: 'One course shipped per foundr.* product launch (7-day SLO)', segment: 'Buyers of "Next.js boilerplate in 2026" comparing stacks weekly', vulnerability: 'ShipFast still on Pages Router in 2026; Mosh React course "well out-dated now"', pain: 'Sadly the content is well out-dated now… cannot recommend', status: 'partial' },
      { wedge: 'Lessons literally are the migration commits', segment: 'Devs hitting framework-version drift', vulnerability: 'LinkedIn Learning repo "three years too long out of date"', pain: 'Codecademy\'s Next.js course uses an outdated version… code is broken', status: 'shipped' },
      { wedge: 'Forever-free as the funnel, not the discount', segment: 'Cost-conscious students, students, hobbyists', vulnerability: 'FrontendMasters $39/mo with "no free trial"; Maven $500–$3,500/cohort', pain: 'I really want your course but it\'s too expensive… I am a student', status: 'shipped' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Course content rots faster than instructors maintain it',
        quotes: [
          { text: 'All the files are three years old. Three years is too long for a repo to be out of date.', attribution: 'IgorGanapolskyGit, LinkedIn Learning Issue #28' },
          { text: 'Codecademy\'s Next.js course uses an outdated version… a lot of the code in the course is broken.', attribution: 'Olivia Arizona, Medium (Nov 2024)' },
          { text: 'Sadly the content is well out-dated now. It CAN be worked around but it\'s not easy.', attribution: 'southside, Code with Mosh Forum' },
        ],
        whyIncumbentsCantFix: 'Recorded video has a fixed cost-of-update equal to a re-shoot. The more popular the course, the more expensive every re-record. Maven instructors burn out at one cohort/quarter.',
        coverage: { status: 'shipped', detail: 'foundr.courses are diffs against a live repo; when the framework upgrades, the migration commit IS the new lesson. Update cost approaches zero.' },
      },
      {
        label: 'B',
        title: 'Boilerplates teach you the happy path, prod breaks you',
        quotes: [
          { text: 'Week 3: Stripe webhooks failing in production. Month 1: Still no real feature shipped.', attribution: 'Oscar, LaunchStack (Indie Hackers)' },
          { text: 'AI-generated code typically calls APIs without checking response status, and when the network drops, the app crashes.', attribution: 'Afterbuild Labs' },
          { text: 'I let Cursor write my entire SaaS. Then spent 3 weeks fixing what it broke.', attribution: 'Aditya Suryawanshi, Stackademic' },
        ],
        whyIncumbentsCantFix: 'ShipFast is closed-source so failure modes aren\'t auditable; the Discord answers questions but doesn\'t watch your prod logs. Bootcamps end at "deploy to Vercel" because reviewing post-launch doesn\'t scale.',
        coverage: { status: 'shipped', detail: 'Pro tier ($199/mo) 1:1 review reads the actual repo + Sentry trace, not a stack-trace screenshot in Discord.' },
      },
      {
        label: 'C',
        title: 'Cohort scheduling assumes a single timezone and a clear quarter',
        quotes: [
          { text: 'I taught the course in my NYC evenings (7-9pm)… I got emails from prospective students in India and Europe who wanted to participate but didn\'t due to timezones.', attribution: 'Ben Erez, Maven Cohort 1 (LinkedIn)' },
          { text: 'Fixed cohort schedules mean next available enrollment may be weeks or months away — no immediate access.', attribution: 'SpecialOffers.com Maven Review' },
          { text: 'Per-course pricing at $500–$3,000 per cohort is significantly higher than self-paced platform subscriptions.', attribution: 'same review' },
        ],
        whyIncumbentsCantFix: 'Maven\'s whole pedagogy thesis (social accountability + live feedback) IS the cohort schedule. Removing it removes the pricing power.',
        coverage: { status: 'partial', detail: 'Async-by-default with founder-on-the-Discord narrows the gap, but we don\'t deliver Maven\'s peer-pressure dynamic.' },
      },
      {
        label: 'D',
        title: 'Communities are pay-to-enter or unanswered',
        quotes: [
          { text: 'Looks like the Creator is not bothered to answer anything here. All the questions are left unanswered for weeks.', attribution: 'SomeonePLUS, AppSumo (ShipFast)' },
          { text: 'Why is it $49 to join your discord?', attribution: 'mango-manPLUS, AppSumo (ShipFast)' },
          { text: 'If you get stuck on a FEM lesson, you\'re kinda out of luck unfortunately.', attribution: 'Beznet, DEV Community (100 hours of Frontend Masters)' },
        ],
        whyIncumbentsCantFix: 'ShipFast\'s economics ($199 one-time × 8,000 users) don\'t fund maintainer response time. Closed-source means no PRs can fix what the maintainer ignores.',
        coverage: { status: 'shipped', detail: 'Founder-on-Discord is the $19 Solo tier baseline, not a $49 surcharge.' },
      },
      {
        label: 'E',
        title: 'Capstone projects produce demos, not portfolio assets',
        quotes: [
          { text: 'They take 3-6 months… solve zero new problems… produce no clients, no revenue, no case studies.', attribution: 'Shahzaib, DEV Community ("Tutorial Hell Trap")' },
          { text: 'Most courses end with "nice work." We end with a live URL.', attribution: 'AiBricks (admitting the problem is industry-wide)' },
          { text: 'You\'ll work on real applications… not just notebooks. — but the project is still throwaway', attribution: 'Agent Engineering Bootcamp marketing' },
        ],
        whyIncumbentsCantFix: 'A bootcamp capstone is by definition a fresh repo built in a few weeks. Reviewing it against a real production codebase requires both that codebase to exist AND reviewers willing to take PRs into it. Incumbents don\'t operate products.',
        coverage: { status: 'shipped', detail: 'Capstone = a merged PR to a live foundr.* repo. Student walks away with github.com/foundr-world/...#pr/<n> on their resume.' },
      },
    ],
  },

  'foundr-website': {
    strategicMoves: [
      { title: 'Lead with "the repo IS the site" everywhere', body: 'Every Squarespace/Webflow/Framer migration thread ends with "I just want code I own on GitHub." Make the repo the hero of the landing, the demo, and every ad. Incumbents cannot match without burning their hosting margin.' },
      { title: 'Ship the MCP edit surface before the agent-update product page', body: 'The "agent edits my site via MCP" wedge is currently 1–2 quarters ahead of Flint, Stormy, Modulify. Get the indie/solo equivalent shipped and documented before Lovable or v0 absorbs MCP into their default flow.', timing: 'Q1' },
      { title: 'Counter-position against credit-burn pricing with the $1 stake', body: 'The single loudest complaint across Lovable/Bolt threads is "I burned $50 in an afternoon fixing a button." A $1 one-time + own-domain offer is a category reframe. Run the math publicly: "Lovable Pro $25/mo × 12 = $300. foundr.website Solo = $1, forever."' },
      { title: 'Build a one-command Squarespace/Webflow/Framer importer', body: 'The Frigade and Vellum migration posts confirm voice-driven + Claude-assisted migration is now a one-week job. A `foundr migrate <url>` CLI that produces a working Next.js + Tailwind PR in their GitHub is the single highest-conversion demo on the internet right now.', timing: 'Q2' },
      { title: 'Productize anti-AI-slop as a default, not an upsell', body: 'Every Lovable/v0/Bolt thread complains about the purple-gradient/Inter-700/3-card-grid look. Bake Hallmark-style design constraints + a randomized non-mean design system into the generator on the free tier.' },
      { title: 'Launch a free "Vibe-Coded Detector" + migration funnel', body: 'SEOJuice already runs one. Build ours, fingerprint Lovable/v0/Bolt/Framer/Squarespace defaults, and offer one-click "regenerate this in your GitHub repo for $1."', timing: 'Q2–Q3' },
      { title: 'Stand up status pages as the Pro hook', body: 'Status pages are the cleanest agent-MCP-update use case. Ship them as the visible Pro feature so $19/mo has a tangible artifact, not just "unlimited + brand kit."', timing: 'Q3–Q4' },
    ],
    moats: {
      hold: [
        { title: 'Code-in-customer\'s-GitHub-repo as architecture', body: 'Framer, Squarespace, Wix, and Webflow can\'t ship this without nuking their hosting/CDN business model. Framer\'s own help page admits this. It\'s a strategic constraint, not a product gap.' },
        { title: 'MCP-native edit surface for the solo-founder tier', body: 'Flint built it for enterprise marketing teams at high price points. Lovable/Bolt expose code over GitHub but not the editing protocol. A solo-tier MCP at $1–$19 is a wedge incumbents can\'t economically chase down-market.' },
        { title: 'Real Next.js + Tailwind output (no proprietary runtime)', body: 'Lovable, v0, Bolt also export code, but their codebases are described as "tangled web of AI-generated dependencies" requiring $20K–$100K to harden. Shipping conventional, opinionated, hand-maintainable code is a quality moat that compounds with reputation.' },
      ],
      cannotHold: [
        { title: 'AI generation speed', body: 'Every builder claims "60 seconds to a page." v0, Bolt, Lovable, Faster all match this. Not a differentiator.' },
        { title: 'Tailwind + shadcn output quality', body: 'v0 is already category-leading per independent benchmarks. We can match, not exceed.' },
        { title: 'Custom-domain support', body: 'Table stakes. Carrd, Framer paid, Squarespace, Wix all ship it. Including it at $1 is a pricing move, not a moat.' },
      ],
      switchingFor: [
        'Once your site is a Next.js repo on your GitHub with your domain, leaving foundr.website costs zero — and that\'s the pitch',
        'Agent-MCP loop creates a soft lock: the personal agent learns your site\'s structure and brand voice over time',
      ],
      switchingAgainst: [
        'Anyone who masters the MCP edit flow can swap us for a competitor\'s MCP server if one ships with similar tooling',
        'The repo-on-GitHub promise cuts both ways: customers can fork themselves off the platform anytime',
      ],
    },
    synthesis: [
      { wedge: 'Repo-in-your-GitHub at $1 one-time', segment: 'Solo founders / indie hackers refusing Squarespace/Webflow lock-in', vulnerability: 'Framer/Wix/Squarespace structurally can\'t export; Webflow exports break JS', pain: 'Migrating off costs $5K–$50K / I rebuild from scratch when I leave', status: 'shipped' },
      { wedge: 'Flat-rate vs credit-burn', segment: 'Vibe-coders escaping Lovable/Bolt after a $200+ token bill', vulnerability: 'Credit pricing is the #1 cited switch reason', pain: 'Burned $50/8M tokens on one auth bug', status: 'shipped' },
      { wedge: 'MCP edit loop for solo tier', segment: 'Founders running personal agents who want their site as a tool surface', vulnerability: 'Flint serves enterprise only; Lovable/v0/Bolt are chat-UI, not protocol', pain: 'I want my agent to ship a section without me opening a dashboard', status: 'partial', note: 'Pro tier — needs to ship' },
      { wedge: 'Anti-AI-slop as default', segment: 'Founders who tried v0/Lovable and rejected the output as "indistinguishable"', vulnerability: 'All builders trained on same corpus → same purple-gradient/3-card output', pain: 'Every Lovable site looks the same', status: 'partial' },
      { wedge: 'One-command migration from incumbents', segment: 'Webflow/Framer/Squarespace customers churning under price hikes', vulnerability: 'Their exports are partial or non-existent', pain: '$30K/year Webflow bill / no export button / rebuild from scratch', status: 'gap' },
      { wedge: 'Real status pages over MCP', segment: 'Indie SaaS founders ($29/mo Atlassian StatusPage is overkill)', vulnerability: 'AI builders don\'t ship incident-response surfaces', pain: 'Updating my status page during an outage is the last thing I want to do', status: 'gap' },
      { wedge: 'Free quote-tweet on foundr.lol', segment: 'Twitter founders who just want a shareable link', vulnerability: 'None of the AI builders ship a free, no-auth, instant-publish primitive', pain: 'I need a page in 30 seconds to tweet', status: 'shipped' },
      { wedge: 'Brand-kit auto-extraction on Pro', segment: 'Solo founders running multiple landing pages who want them on-brand', vulnerability: 'Leadpages and Flint own this at $49–$99/mo; nothing at $19', pain: 'Every new page I ship looks off-brand', status: 'partial' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Credit-burn anxiety — every prompt is a slot machine',
        quotes: [
          { text: 'Watching that same magic burn through 40 credits trying to fix a single misaligned button.', attribution: 'Genius Firms, 90-day Lovable review' },
          { text: '8 million tokens burned in three hours fighting one auth bug — 80% of monthly quota.', attribution: 'Reddit founder via Rohit Raj' },
          { text: 'The app is costing me a fortune in credits fixing problems that should be done for free.', attribution: 'Trustpilot reviewer (cited in Indie Hackers)' },
        ],
        whyIncumbentsCantFix: 'Token/credit pricing IS the revenue model. Going flat-rate would tank their unit economics and conflict with the AI-cost passthrough story they tell investors.',
        coverage: { status: 'shipped', detail: 'Solo $1 one-time and Pro $19/mo flat. No per-prompt meter. No "Attempt Fix" button that costs tokens whether it works or not.' },
      },
      {
        label: 'B',
        title: 'I can\'t take my site with me — the export wall',
        quotes: [
          { text: 'Framer does not offer HTML exporting functionality for self-hosting.', attribution: 'Framer official help center' },
          { text: 'There is no export button, no "Export to ZIP," no API endpoint. Stop paying and your site goes offline.', attribution: 'letaiworkforme on Framer' },
          { text: 'Wix offers no full export. None. If you decide to leave, you are starting over.', attribution: 'Graphic ReDesign' },
        ],
        whyIncumbentsCantFix: 'Their hosting/CDN business is the upsell. Webflow exports HTML/CSS but strips every JS interaction; Framer admits dynamic services prevent export.',
        coverage: { status: 'shipped', detail: 'The site IS a Next.js repo in your GitHub from minute one. There\'s nothing to export because there\'s nothing held hostage.' },
      },
      {
        label: 'C',
        title: 'Every AI-built site looks identical',
        quotes: [
          { text: 'Every AI coding agent produces the same website. Inter font. Purple gradient hero. Three nested feature cards.', attribution: 'Hallmark README (1.8k stars)' },
          { text: 'Aggressively-mediocre. Indistinguishable from every other output. Stock photography for landing pages.', attribution: 'Rottoways' },
          { text: 'AI slop telegraphs which builder produced it within two seconds of opening the tab.', attribution: '8B blog' },
        ],
        whyIncumbentsCantFix: 'Lovable, v0, Bolt, Framer AI, Wix AI all train on the same shadcn/Tailwind/canonical-YC corpus. The convergence is structural.',
        coverage: { status: 'partial', detail: 'Code output is conventional Next.js + Tailwind today, but no shipped anti-slop design-gate layer yet. Highest-leverage feature gap.' },
      },
      {
        label: 'D',
        title: 'I want my agent to edit the site, not me',
        quotes: [
          { text: 'MCP integration enables users to create, edit, and publish landing pages through natural conversation in Claude.', attribution: 'Flint marketing (enterprise pricing, not indie)' },
          { text: 'Claude had a hard time interacting with the MCP. I couldn\'t build the things I wanted to build.', attribution: 'Ido Vadavker (cancelled his Webflow stack)' },
          { text: 'Claude can autonomously build the internal linking structure between these pages.', attribution: 'Stormy AI on agentic SEO' },
        ],
        whyIncumbentsCantFix: 'Squarespace/Wix/Webflow are dashboard-shaped, not protocol-shaped. Lovable/v0/Bolt expose code over GitHub but the editing surface is their chat UI, not a programmable protocol.',
        coverage: { status: 'partial', detail: 'Pro $19/mo claims MCP. Needs to actually ship the verb surface at indie pricing before Lovable/v0 absorb MCP.' },
      },
      {
        label: 'E',
        title: 'I outgrew the free tier and the bill exploded silently',
        quotes: [
          { text: '$468/year plan to being quoted $15,000/year because of bandwidth overages.', attribution: 'HN-cited Webflow user via PandaCodeGen' },
          { text: '$25 to $170 overnight when Webflow silently upgraded them from CMS plan to Business plan.', attribution: 'same source' },
          { text: 'You sign up when the product is free. By the time you need enterprise pricing, you\'re locked in.', attribution: 'HN thread on Webflow bandwidth pricing' },
        ],
        whyIncumbentsCantFix: 'Tier-jumping at growth thresholds is how Webflow, Squarespace, Wix monetize their best customers.',
        coverage: { status: 'shipped', detail: '$1 one-time is one-time. $19/mo is flat with no per-page, per-language, per-editor, or bandwidth-overage line.' },
      },
    ],
  },

  'foundr-today': {
    strategicMoves: [
      { title: 'Lead with the TODO, not the news', body: 'Every issue ends with one concrete, ≤2-hour build/ship action keyed to the day\'s news. Incumbents bury the reader in 6–10 stories with no "so what now." This is the single hardest line for TLDR/Rundown to copy without rewriting their format.' },
      { title: 'Ship the MCP archive as the wedge, not the upsell', body: 'Make the searchable, agent-readable archive accessible from day one for Solo ($12/mo). Coding agents are writing 40%+ of code at companies like Cursor; their bottleneck is context, not generation. A brief your agent can query is structurally new.', timing: 'Q2 2026' },
      { title: 'Free tier = quote-tweet, not free email', body: 'Free = daily quote-tweetable card on X + public RSS, not a daily email. Avoids the Gmail Promotions "Most Relevant" trap (Sept 2025 change buries cold senders), keeps CAC at zero via organic X distribution.' },
      { title: 'Personalized weekly Pro = "tuned to your stack"', body: 'Pro ($49/mo) reads the founder\'s GitHub, package.json, and last 30 days of Claude Code transcripts (opt-in MCP) to filter the firehose. The only tier that can defensibly charge $588/yr because output is co-produced with the reader\'s private context.', timing: 'Q3 2026' },
      { title: 'Promise a 5-min cap and refund violators', body: 'Hard SLA: every issue ≤5 min read. Auto-credit Solo subscribers $1 for any issue that misses the cap. Turns a soft promise into a deliverable.' },
      { title: 'Dedupe + cross-source synthesis as a visible feature', body: 'Show "this story appeared in 7 other newsletters, here\'s what\'s actually new" inline. Direct attack on the #1 complaint: "every newsletter is the same five stories rephrased."' },
      { title: 'Discord = the human moat, not a perk', body: 'Solo gets Discord access where the editor + 100 other AI-native solo founders triage today\'s TODO together for 30 min at noon UTC. Incumbents at 2M+ subs structurally can\'t offer this.' },
    ],
    moats: {
      hold: [
        { title: 'MCP-readable archive', body: 'Once founders point their coding agents at our archive and tune prompts around our schema, switching means re-training every agent in their stack. Format lock-in compounds weekly. No incumbent has shipped this; rebuilding it is a year of work plus an OAuth/MCP server.' },
        { title: 'TODO-tier voice + curatorial taste', body: 'A first-person editor who has shipped AI products is a person, not a workflow. Rajiv Shah\'s pipeline post and Dan Moskowitz\'s "they all read the same" essay converge: the only thing AI-generated digests can\'t fake is a specific human\'s judgment.' },
        { title: 'Pro-tier private context', body: 'Once a founder\'s repo/stack/transcripts feed our personalization, the brief gets sharper monthly. Incumbents would need a per-reader pipeline + permission they don\'t have. Same moat-shape as Cursor\'s Memories.' },
      ],
      cannotHold: [
        { title: '5-minute format', body: 'TLDR, Superhuman, Rundown, Five, Founder Dispatch all promise this. Table stakes, not a moat.' },
        { title: 'Daily cadence', body: 'A cron, a feed scraper, and a Gemini summarization pass = $2.50/month of compute. Anyone with a credit card can ship this.' },
        { title: '"Curated by an AI builder"', body: 'Every newsletter founder claims this. Bot Eat Brain, Ben Tossell, Rowan Cheung, Zain Kahn all position the same way.' },
      ],
      switchingFor: [
        'Coding agents trained on our MCP archive schema (per-agent prompt tuning compounds)',
        'Pro-tier personalization that grows with the reader\'s repo history',
        'Discord relationships and shipping-buddy pairs formed in noon UTC triage',
      ],
      switchingAgainst: [
        'Email is portable: a competitor can offer a one-click import of our subscriber list',
        '"Read TLDR + ours" costs the reader nothing — we\'re additive, not replacing',
        'Gmail Promotions tab "Most Relevant" sorting actively rewards the incumbent with higher historic open rate',
      ],
    },
    synthesis: [
      { wedge: 'Ends with TODO you ship today', segment: 'AI-native solo founders building with Claude Code, Cursor, v0 (~250K globally)', vulnerability: 'TLDR/Rundown end with link list — no "now what"', pain: 'I read 5 newsletters and built nothing', status: 'shipped' },
      { wedge: 'MCP-readable archive', segment: 'Founders running coding agents on their stack', vulnerability: 'Zero incumbent ships this — newsletter ≠ API surface', pain: 'My agent can\'t access yesterday\'s launches without me copy-pasting', status: 'shipped' },
      { wedge: 'Pro = personalized to your repo/stack', segment: 'Founders with 1 active product, $0–$50K MRR', vulnerability: 'Rundown/Superhuman blast same brief to 2M people', pain: 'Most stories don\'t apply to my stack', status: 'shipped' },
      { wedge: 'Quote-tweet free tier (no email)', segment: 'X-native founders, Gmail-Promotions-buried readers', vulnerability: 'All incumbents lead with email signup, hit the new "Most Relevant" wall', pain: 'Newsletters never land in my Primary tab anymore', status: 'shipped' },
      { wedge: 'Dedupe + "you\'ve seen this in N others" badge', segment: 'Readers of 3+ AI newsletters (~30% of segment)', vulnerability: 'Each newsletter pretends it\'s the source — incentive misalignment', pain: 'Every newsletter has the same 5 stories', status: 'shipped' },
      { wedge: 'Discord noon-UTC ship session', segment: 'Solo founders with no co-founder accountability', vulnerability: 'Rundown\'s University = async videos, not live ship pressure', pain: 'I have no one to commit to building this today', status: 'shipped' },
      { wedge: '5-min hard cap with refund SLA', segment: 'Time-boxed readers (parents, second jobbers)', vulnerability: 'Substack rewards length; incumbents drift to 8–12 min', pain: 'Issues keep getting longer and I skip them', status: 'partial' },
      { wedge: '"Boring repo" coverage', segment: 'Founders ignoring AI-wrapper hype, building niche SaaS', vulnerability: 'Rundown/TLDR chase frontier-model headlines', pain: 'I need infra/dev news, not GPT-6 rumors', status: 'partial' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'All AI newsletters are the same 5 stories rephrased',
        quotes: [
          { text: 'Same format. Same tools section. Same five news stories repackaged with different headlines.', attribution: 'Dan Moskowitz, Subscribly (Substack, May 2026)' },
          { text: 'When you summarize the same announcement from five sources, you realize four are paraphrasing the fifth.', attribution: 'Alex Morgan, DEV.to (May 2026)' },
          { text: 'When GPT-5 launches it\'s in 15 newsletters. You read the same breakthrough 10 times.', attribution: 'Readless AI/ML Digest (Jan 2026)' },
        ],
        whyIncumbentsCantFix: 'Ad-funded models reward volume + speed, not deletion. Every newsletter sourcing from the same X accounts + press releases converges on the same shape regardless of editor.',
        coverage: { status: 'shipped', detail: 'foundr.today dedupes across 50+ AI newsletters before drafting, surfaces a "seen in N others" badge, refuses to publish stories already covered identically.' },
      },
      {
        label: 'B',
        title: 'I read the brief and built nothing',
        quotes: [
          { text: 'I\'ve now read 40 minutes of opinions about a model I haven\'t actually tried. Close laptop. Feel slightly worse.', attribution: 'Alex Morgan, DEV.to (May 2026)' },
          { text: 'Stop collecting vague ideas. Start reading what builders and buyers are already doing.', attribution: 'BuilderPulse' },
          { text: '80% of SaaS founders are building solutions to problems that do not exist.', attribution: 'u/findur20, r/startups via Discury (April 2026)' },
        ],
        whyIncumbentsCantFix: 'TLDR/Rundown/Superhuman optimize for read-time-to-complete, not action-completed. Adding a TODO breaks their "5-minute" promise unless the whole structure inverts.',
        coverage: { status: 'shipped', detail: 'Every foundr.today issue ends with one concrete ≤2-hour shippable TODO keyed to today\'s news. The brief is judged by what got built.' },
      },
      {
        label: 'C',
        title: 'My agent can\'t read yesterday\'s launches without me babysitting',
        quotes: [
          { text: 'Frustrating lack of RSS filters or API export for The Rundown; forces manual scraping for dev pipelines.', attribution: 'engineer cited in AdTools.org Rundown review (Dec 2025)' },
          { text: 'Agents are writing half of Cursor\'s code… as models get smarter they need less oversight.', attribution: 'Cursor team via Code Newsletter (May 2026)' },
          { text: 'Every new session I have to re-explain my whole project.', attribution: 'Contextable.me user testimonial (2026)' },
        ],
        whyIncumbentsCantFix: 'Their archive is an HTML blog optimized for human eyeballs and ad impressions. An MCP server would cannibalize sponsor CPMs (agents skip ads).',
        coverage: { status: 'shipped', detail: 'Solo + Pro tiers expose the full back-catalog as an MCP server. Agents query "what shipped this week relevant to my Next.js + Supabase stack."' },
      },
      {
        label: 'D',
        title: 'Gmail buries my newsletters in Promotions',
        quotes: [
          { text: 'Gmail changed the Promotions tab from "Most Recent" to "Most Relevant." Cold subscribers are now actively hurting you.', attribution: 'Holly Darling, hollydarlinghq.com (2026)' },
          { text: 'Up to 40% of messages that technically reach Gmail inboxes are being deprioritized by Gemini.', attribution: 'Jennifer Gibbs, triage.helpmynewsletter.com (Feb 2026)' },
          { text: 'Drag it to Primary so Gmail doesn\'t bury it.', attribution: 'indiehacker.news welcome flow (2026)' },
        ],
        whyIncumbentsCantFix: 'Their entire growth motion is email-first. Pivoting the free tier off email breaks the sponsor inventory model.',
        coverage: { status: 'shipped', detail: 'Free tier is a daily quote-tweetable card on X with public RSS; email starts at Solo ($12). The Gmail wall becomes a filter, not a leak.' },
      },
      {
        label: 'E',
        title: 'Rundown billed me silently, Ben\'s Bites went paid, no one stays free',
        quotes: [
          { text: 'Money taken out of my bank account without my permission. Such a rip off.', attribution: 'Trustpilot reviewer on Rundown.ai (Mar 2026)' },
          { text: 'I don\'t appreciate when I am silently charged fees just to access a 14-day trial.', attribution: 'Trustpilot reviewer on Rundown.ai (Dec 2025)' },
          { text: 'Pro is $150 instead of $250 for a limited time.', attribution: 'Ben\'s Bites Pro upgrade page (Dec 2024)' },
        ],
        whyIncumbentsCantFix: 'Once a free newsletter has 500K+ subs, the ad market plateaus; path of least resistance is a $150–$250/yr course upsell with dark-pattern billing.',
        coverage: { status: 'partial', detail: 'Pricing is published flat: Free quote-tweet, Solo $12/mo, Pro $49/mo. No trial dark patterns, no $250 surprise.' },
      },
    ],
  },

  'foundr-team': {
    strategicMoves: [
      { title: 'Lead with the MCP-roster wedge, not "AI agents"', body: 'Position foundr.team as "the roster your MCP clients can already see" rather than another agent platform. Every Claude Desktop / Cursor user is one `mcp add` away from your agents — incumbents (CrewAI, Lindy, Sintra) require a UI rewire.' },
      { title: 'Make "hard $/wk cap, refused pre-flight" the headline feature', body: 'Not soft alerts. A `402 Payment Required` that fires BEFORE the model call. The $6k Reddit story, the $1,800 Max-subscriber API leak all share the same root cause: post-hoc accounting.' },
      { title: 'Ship the weekly retro as a product surface, not a feature', body: 'Sunday email + dashboard tile: what each agent did, what it cost, where it looped, what to delete. Anchor to a named ritual ("Sunday Retro") so it becomes a habit, not a settings page.' },
      { title: 'Flat $/mo, never per-seat — turn it into a moat narrative', body: 'Per-seat is collapsing (Bessemer: 21% → 15% in 12 months). Build the pricing page around "your agent fleet costs the same at 3 or 300 agent-runs/day" and call out CrewAI by name.' },
      { title: 'Open the roster schema, then host a registry', body: 'Publish a foundr.team agent manifest format and let anyone publish agents to a public registry (think `homebrew tap` for AI teammates). Sintra\'s 12 closed personas are the foil.', timing: 'Q2-Q3' },
      { title: 'Outcome-token billing for the Pro tier', body: 'Layer an optional "pay only for completed retros / shipped PRs / closed tickets" SKU on top of flat $49. Mirrors Intercom Fin ($0.99/resolution → $100M ARR in 24 months).', timing: 'Q3-Q4' },
      { title: 'Ship "import from Claude Code" as the onboarding path', body: 'Auto-discover the MCP servers + skills + agents in a user\'s `~/.claude` config and reify them as a roster on first login. Zero-typing onboarding is the only way to beat Sintra\'s "polished demo."' },
    ],
    moats: {
      hold: [
        { title: 'MCP-native roster surface', body: 'Every roster member is addressable from any MCP client (Claude Desktop, Cursor, Claude Code, future entrants). CrewAI/Lindy/Sintra are closed UIs — they cannot retrofit MCP-native multi-client addressing without rebuilding their orchestrator.' },
        { title: 'Hard pre-flight budget caps + atomic reserve-commit pool', body: 'Documented as missing from Helicone, Langfuse, LangSmith, OpenAI/Anthropic dashboards, and every incumbent roster. Implementing correctly (atomic reservation, race-free across N agents) is non-trivial engineering.' },
        { title: 'Flat-fee SKU as positioning identity', body: 'Once you brand as "the flat-fee roster," every move to per-seat is a public retreat. CrewAI/Salesforce can\'t credibly mirror without cannibalising existing per-seat ARR.' },
      ],
      cannotHold: [
        { title: 'The agent personas themselves', body: 'Sintra, Lindy, Arahi all ship named personas (Cassie, Penn, Maya). Copying a roster of named characters is a weekend\'s work.' },
        { title: 'Budget caps as a feature', body: 'AgentBudget, Magicrails, Circuit Breaker, Agent Fuse, Shekel, baar-core all ship some version. Caps alone are commodity; the integration with roster + retro + flat pricing is what compounds.' },
        { title: 'Multi-agent orchestration', body: '50+ open-source orchestration frameworks already. If you market on it, you lose to whichever framework fits the user\'s IDE.' },
      ],
      switchingFor: [
        'Retros accrete: 12 weeks of retro history is a personalised performance record that doesn\'t export',
        'Budget history + per-agent ROI data lives in your DB — incumbents starting from zero have no baseline',
        'MCP server URL is wired into every client config — uninstalling means re-onboarding agents in N IDEs',
      ],
      switchingAgainst: [
        'Agent prompts/skills are markdown files — trivially portable to any other roster',
        'MCP itself is an open standard — competitors can match the entry surface in a sprint',
        'Anthropic could ship "Claude Roster" natively and erase our entry advantage overnight',
      ],
    },
    synthesis: [
      { wedge: 'MCP-first roster (no UI rewire)', segment: 'Solo founders already using Claude Desktop / Cursor / Claude Code', vulnerability: 'CrewAI, Lindy, Sintra all force you into their UI; Anthropic ships no roster primitive', pain: 'I run 6-8 agents in different terminal panes; I want one roster, not 6 windows', status: 'shipped' },
      { wedge: 'Hard pre-flight $/wk cap per agent', segment: 'Devs burned by overnight loops ($47, $80, $313, $400, $1,800, $6,000 documented stories)', vulnerability: 'Anthropic dashboard updates "with a delay of several days"; no `--max-cost` flag in `claude -p`', pain: 'I want my AI bill to be a known number on Sunday', status: 'shipped' },
      { wedge: 'Flat $/mo, agents as infra not seats', segment: 'Solo founders running 4-23 agents across 3-15 projects', vulnerability: 'Per-seat fell 21%→15% in 12mo; CrewAI tier ladder $99→$12k', pain: 'Adding an agent shouldn\'t be a budget conversation', status: 'shipped' },
      { wedge: 'Weekly retro (per-agent perf, ROI, kills)', segment: 'Multi-agent operators ("14 agents daily", "23-agent system")', vulnerability: 'Langfuse/Helicone/LangSmith give traces, not retros; the "iterate on AGENTS.md weekly" pattern is hand-rolled', pain: 'Which of my agents earned their keep this week, which to delete', status: 'shipped' },
      { wedge: 'Free quote-tweet onboarding (3 slots)', segment: 'First-time agent-curious solo founders', vulnerability: 'Lindy free plan "basically useless" (premium actions gated); Sintra paywalls everything', pain: 'I want to try a roster without giving you a card', status: 'shipped' },
      { wedge: 'Open agent registry (BYO personas)', segment: 'Builders who reject Sintra\'s closed cast', vulnerability: 'Sintra: 12 fixed Brains, no custom builder; Marblism: 6 fixed', pain: 'Let me bring my own agent and let others install mine', status: 'partial' },
      { wedge: 'Outcome-based billing tier (per shipped PR / retro / ticket)', segment: 'Operators who can attribute outcomes', vulnerability: 'Intercom Fin proved the model ($1M→$100M ARR / 24mo); CrewAI/Lindy/Sintra all consumption-based', pain: 'Pay vendor when work shipped, not when tokens burned', status: 'partial' },
      { wedge: 'Cross-IDE handoff (vibe-switch style)', segment: '6-8 parallel-pane orchestrators', vulnerability: 'None of CrewAI/Lindy/Sintra integrate with terminal-native CLIs', pain: 'Hand off context from Claude Code agent to Codex agent without copy-paste', status: 'gap' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Overnight runaway bills with no pre-flight cap',
        quotes: [
          { text: 'I left a loop running longer than I realized... I forgot about it, went to bed, and woke up $80 lighter. No alerts. No cap. No warning. Just a bill.', attribution: 'godnick, dev.to (Apr 2026)' },
          { text: 'I accidentally burned ~$6,000 of Claude usage overnight with one command.', attribution: 'Reddit user via DevToolPicks (May 2026)' },
          { text: '$313.23 burned in 8.5h on a single retry-stuck item... NO per-invocation cost echo. NO spend cap flag.', attribution: 'jwtrading1000, Claude Code Issue #57719' },
        ],
        whyIncumbentsCantFix: 'Anthropic, OpenAI, CrewAI, Lindy, Salesforce all account for spend AFTER the response arrives. Implementing pre-flight reserve-commit requires re-architecting billing as an execution constraint — and incumbents profit from the burn.',
        coverage: { status: 'shipped', detail: 'foundr.team budget caps are pre-flight, atomic, per-agent, refusing the call entirely when reservation > remaining.' },
      },
      {
        label: 'B',
        title: 'Per-seat pricing punishes adding agents',
        quotes: [
          { text: 'If adding a new team member to the workspace costs $15/month for the AI agent, there\'s a subtle pressure to restrict access.', attribution: 'Helenmireille, Medium (Mar 2026)' },
          { text: 'Per-seat pricing for an AI agent is pricing based on the thing that least correlates with cost. Either lazy or deliberately exploitative.', attribution: 'Helenmireille, Medium (Mar 2026)' },
          { text: 'Pure per-seat fell from 21% to 15% of SaaS companies between 2025 and 2026, per Bessemer\'s tracking.', attribution: 'Korix, DEV Community (May 2026)' },
        ],
        whyIncumbentsCantFix: 'Salesforce ($125-$550/user), CrewAI ($99→$1,000/mo ladder), Lindy ($50/5k credits), Sintra ($47-$97/mo) all anchor pricing to seats or credits. Each is locked in by existing ARR.',
        coverage: { status: 'shipped', detail: 'Solo $19/mo, Pro $49/mo, both flat regardless of slot count. Free tier (3 slots, quote-tweet) is genuinely usable.' },
      },
      {
        label: 'C',
        title: 'Closed roster — can\'t add the agent you actually need',
        quotes: [
          { text: 'Sintra ships 12 fixed Brain personas with locked roles. There is no custom agent builder.', attribution: 'Arahi AI alternatives (2026)' },
          { text: 'What if I don\'t want a Soshie? What if I want a bot that reads Reddit for complaints about my competitor, makes them into a haiku... Sintra can\'t do that.', attribution: 'Noca, Emergent vs Sintra (Jan 2026)' },
          { text: 'Sintra Brains don\'t carry context between chats — every conversation resets.', attribution: 'Arahi AI alternatives (2026)' },
        ],
        whyIncumbentsCantFix: 'Sintra\'s brand IS the cast (Cassie/Penn/Soshie/Emmie). Opening the roster dilutes the marketing wedge and forces a builder UI that contradicts "hire, don\'t build."',
        coverage: { status: 'shipped', detail: 'foundr.team roster is open: any MCP-conformant agent slots in. Pro tier removes the slot cap entirely.' },
      },
      {
        label: 'D',
        title: 'Credit anxiety blocks experimentation',
        quotes: [
          { text: 'I burned through those credits incredibly fast... I was so worried about running out that I couldn\'t properly test everything I wanted to build.', attribution: 'Annika Helendi, Lindy review (Jul 2025)' },
          { text: 'I found myself avoiding experimenting or having casual conversations with my AI agents because each interaction costs credits.', attribution: 'Annika Helendi, Lindy review (Jul 2025)' },
          { text: 'Lindy Builder got stuck and consumed over 1,000 credits. I had to delete the task, not sure if it even stopped consuming credits.', attribution: 'Nitai B., Lindy Community (Aug 2025)' },
        ],
        whyIncumbentsCantFix: 'Lindy, Sintra, CrewAI all use consumption-based credits because LLM costs scale with usage. Removing credits requires absorbing token cost into a flat fee — which their unit economics make unprofitable.',
        coverage: { status: 'shipped', detail: 'Flat $/mo + hard per-agent budget cap means experimentation is bounded by a known weekly number, not eroded by silent credit drain.' },
      },
      {
        label: 'E',
        title: 'No weekly retro / per-agent ROI surface',
        quotes: [
          { text: 'Production agents fail silently. The user says "it didn\'t work" and you have nothing to look at. No tool call log. No decision trace. No cost record. Just a black box.', attribution: 'Mukunda Katta, dev.to (May 2026)' },
          { text: 'Once I started spending fifteen minutes every Friday reviewing my Antigravity sessions and adding a line or two to AGENTS.md, the agent\'s behaviour visibly settled down.', attribution: 'Masaki Hirokawa, Antigravity Lab (Apr 2026)' },
          { text: 'Six weeks of production traffic had gone through the system with no traces, no per-step latency tracking, no cost attribution.', attribution: 'Sapota, dev.to (May 2026)' },
        ],
        whyIncumbentsCantFix: 'Helicone, Langfuse, LangSmith all stop at traces — they\'re observability primitives, not retro rituals. Productising the retro requires opinions about cadence and format that observability vendors refuse to take.',
        coverage: { status: 'shipped', detail: 'foundr.team Sunday retro is a built-in product surface: per-agent cost, loop detections, top tool calls, kill recommendations, editable skill diff.' },
      },
    ],
  },

  'foundr-study': {
    strategicMoves: [
      { title: 'Ship "Source → Working Artifact" as the single irreducible promise', body: 'Every course ends in a runnable repo, deployed lab, working notebook, or shippable doc — not a transcript. NotebookLM (chat-and-podcast), ChatGPT Study Mode (Socratic chat-only), Claude Learning Mode (questions-only) all structurally lack this.', timing: 'Now → Q3 2026' },
      { title: 'Wire MCP-first ingestion before the next OpenAI/Anthropic learning update', body: 'Drop-any-source means anything a Founder already uses: a GitHub repo via MCP, a Linear backlog via MCP, a Notion workspace. The competitor moat is "upload PDFs to our walled garden"; ours is "the course knows your codebase Tuesday because Cursor and Claude Code already do."', timing: 'Q2 → Q3' },
      { title: 'Adaptive depth as a first-class diagnostic, not a system-prompt trick', body: 'Probe-then-pace: a 60-second pre-flight that calibrates by MAKING the learner do a small thing. ChatGPT Study Mode\'s adaptivity is sycophancy ("strong question!"); Claude\'s Learning Mode resets every session. We persist a true skill graph.', timing: 'Q3' },
      { title: 'Lab as the cheating-resistant moat', body: 'Generate a unique-to-the-learner build target (their repo, their data, their stack). Learner can\'t paste it into ChatGPT — there is no answer until they wire it. Structural fix for the Apology Loop.', timing: 'Q3-Q4' },
      { title: 'Multi-agent labs at Pro tier — sell the Founder a TEAM, not a tutor', body: 'Pair an Instructor agent with a Reviewer agent and a Devil\'s-Advocate agent so the learner defends decisions. No incumbent ships this.', timing: 'Q4' },
      { title: 'Free-tier quote-tweet flywheel as distribution', body: 'Each quote-tweet generates one course AND publishes a 60-second "what I just learned + the artifact" tweet by default. Compounding social proof; competitors have zero social surface.', timing: 'Q2 → Q3' },
      { title: 'Founder-curriculum catalog: the 30 things every AI-native founder learns this year', body: 'Pre-baked sources for Next.js 16, Cache Components, MCP, Clerk, Supabase, Stripe, Vercel Functions, AI SDK, Tailwind v4, View Transitions. Cold-start the "what do I learn" problem.', timing: 'Q3-Q4' },
    ],
    moats: {
      hold: [
        { title: 'Per-learner skill graph + artifact history', body: 'Once we know what a learner has built, debugged, and reviewed across 40+ courses, no incumbent can synthesize an equivalent starting point — ChatGPT memory bleeds across non-learning chats; Claude Learning Mode is a template, not a profile.' },
        { title: 'MCP-native ingestion of working developer surfaces', body: 'Pulling live state from a Founder\'s GitHub + Linear + Vercel + Supabase + Stripe via MCP is a real integration moat. NotebookLM is PDF-and-URL bound; ChatGPT Connectors are enterprise-gated; Claude requires manual Skill authoring.' },
        { title: 'The artifact archive itself', body: 'A Founder accumulating 50 working artifacts (working repos, deployed labs, signed documents) creates real switching cost — their last 12 months of output lives here, not just their notes.' },
      ],
      cannotHold: [
        { title: 'The Socratic prompt', body: 'OpenAI, Anthropic, Google already ship Socratic system prompts; Anthropic open-sourced their pedagogy approach. Any tuning we do, they match in a launch post.' },
        { title: 'Course quality from a frontier model', body: 'We don\'t own the model. Sonnet 4.6 / Opus 4.7 explanations get better at incumbents\' pace, not ours.' },
        { title: '"From any source" as a slogan', body: 'NotebookLM accepts PDFs, Docs, YouTube, sites, audio. ChatGPT has Connectors. Source ingest is table stakes by EOY.' },
      ],
      switchingFor: [
        'Multi-month artifact + skill-graph archive only re-creatable by re-doing every course',
        'MCP server bindings the Founder already authorized — re-auth friction for any clone',
        'A library of personal labs that map to this Founder\'s stack, not a generic Next.js demo',
      ],
      switchingAgainst: [
        'ChatGPT Plus / Claude Pro / Google AI Pro already paid for by most of our SAM ($19.99/mo each) — we are an additional line item',
        'Anthropic Skills + Claude Code already give power users a make-your-own-tutor primitive at zero marginal cost',
        'The "learning" use case lives inside the same chat surface the user is already in',
      ],
    },
    synthesis: [
      { wedge: 'Course ends in a runnable artifact', segment: 'AI-native solo founder shipping weekly', vulnerability: 'All three ship transcripts; none ships a working repo', pain: 'I "studied" for 3 hrs and have nothing to push', status: 'shipped' },
      { wedge: 'MCP ingestion of the Founder\'s live stack', segment: 'Founders already on Cursor/Claude Code', vulnerability: 'Connectors are enterprise; Skills are author-yourself', pain: 'It teaches generic Next.js, not MY Next.js', status: 'shipped' },
      { wedge: 'Per-learner skill graph that persists across courses', segment: 'Founders learning 5+ frameworks/yr', vulnerability: 'Study Mode memory leaks across non-study chats; Learning Mode is stateless', pain: 'Every session restarts from scratch', status: 'shipped' },
      { wedge: 'Adaptive depth via lab-task difficulty, not explanation length', segment: 'Mid-level builders past tutorial hell', vulnerability: 'Sycophantic adaptation; "strong question!" theatre', pain: 'It treats me like a beginner forever', status: 'shipped' },
      { wedge: 'Multi-agent labs (Instructor + Reviewer + Adversary)', segment: 'Pro-tier teams + serious solo learners', vulnerability: 'None of the three ship multi-agent learning loops', pain: 'No one pushes back on my mental model', status: 'shipped' },
      { wedge: 'Cheating-resistant unique build targets', segment: 'Founders who want to actually learn, not paste-answer', vulnerability: 'LLMs willingly solve the homework when asked', pain: 'I can\'t tell if I learned or if Claude did', status: 'partial' },
      { wedge: 'Founder-curriculum catalog (30 stacks)', segment: 'Founders bouncing between Next.js, Stripe, MCP, etc.', vulnerability: 'NotebookLM Discover surfaces sources, not curricula', pain: 'Where do I even start with [new framework]', status: 'partial' },
      { wedge: 'Quote-tweet → 1 free course/mo viral loop', segment: 'Solo founders on X', vulnerability: 'Incumbents have no social distribution layer', pain: 'AI tools have zero word-of-mouth surface', status: 'partial' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Sessions end as chat transcripts, not as something you can ship',
        quotes: [
          { text: 'If the session ends as chat history, the learning loop is incomplete.', attribution: 'hisocra.com, "Why Studying with AI Doesn\'t Stick"' },
          { text: 'It gave me information, but no wisdom. It gave me facts, but no framework.', attribution: 'Abhijit Dutta, Medium ("I Asked ChatGPT to Teach Me AI")' },
          { text: 'AI is a Catalyst, Not a Curriculum… You still need a human-designed path.', attribution: 'Abhijit Dutta, Medium' },
        ],
        whyIncumbentsCantFix: 'NotebookLM, Study Mode, Learning Mode all live inside chat surfaces optimized for messages, not artifacts. Adding "export to file" doesn\'t change that the unit of work is a turn.',
        coverage: { status: 'shipped', detail: 'foundr.study\'s irreducible output is a runnable artifact (repo, deployed lab, notebook, doc) committed to the Founder\'s archive.' },
      },
      {
        label: 'B',
        title: '"Adaptive" tutoring isn\'t adaptive — it\'s sycophancy',
        quotes: [
          { text: 'ChatGPT, like a good little sycophantic robot, rewarded my petulance with praise.', attribution: 'Leon Furze, First Impressions of ChatGPT\'s Study Mode' },
          { text: 'The LLM will enthusiastically encourage me and build upon my "insight"… I realize this insight is not actually that central.', attribution: 'moderndescartes.com (AI-tutor startup founder)' },
          { text: 'Sometimes it asks too many questions and you just want to move on.', attribution: 'Dev Yusuf Seyitoglu on Claude Learning Mode (Medium)' },
        ],
        whyIncumbentsCantFix: 'RLHF-tuned base models are trained to be agreeable; layering a study system prompt on top doesn\'t override the underlying reward signal.',
        coverage: { status: 'shipped', detail: 'Adaptive depth is measured against artifact difficulty in the lab (did the build target ratchet up?), not against the learner\'s self-rating.' },
      },
      {
        label: 'C',
        title: 'The Apology Loop — AI eliminates the productive struggle that builds skill',
        quotes: [
          { text: 'If you spend more than 30 minutes a day pasting error logs into an LLM, you are not debugging. You are gambling.', attribution: 'Saqib Shah Dev, DEV Community ("Prompt Hell")' },
          { text: 'Learned to Code With AI. Got Hired. Couldn\'t Debug My Own Code. Fired in 3 Months.', attribution: 'CodexLab, Medium' },
          { text: 'They are missing all of the understanding… they skip both [watching and typing].', attribution: 'Danny Thompson, LinkedIn ("ChatGPT Hell")' },
        ],
        whyIncumbentsCantFix: 'Their business model rewards turn count and "helpfulness." Throttling the model to NOT answer is a direct revenue hit and a worse demo.',
        coverage: { status: 'shipped', detail: 'Labs hand the learner a UNIQUE build target (their repo, their data); there is no canonical answer to paste-and-fix. The struggle is structurally preserved.' },
      },
      {
        label: 'D',
        title: 'One-size-fits-all output level',
        quotes: [
          { text: 'My B1+ students were completely lost… NotebookLM doesn\'t have a built-in option to select CEFR levels.', attribution: 'Mariana Ramirez, marianaslearning.space' },
          { text: 'Asking it for personal advice or critiques, like "Is this UX approach good?" yields robotic, unhelpful outputs.', attribution: 'Aaron Blake, IMD Tech News (on NotebookLM)' },
          { text: 'Long-form outputs have been compressed into short summaries… breaks workflows, study plans, and thesis drafts.', attribution: 'AI Report Digest, r/notebooklm thread' },
        ],
        whyIncumbentsCantFix: 'RAG-grounded systems (NotebookLM) inherit the source\'s register; chat-based systems have no persistent learner model to calibrate against. A "Customize" textarea on every generation is the workaround they ship — doesn\'t scale.',
        coverage: { status: 'shipped', detail: 'Pre-flight probe + per-learner skill graph persists across courses, so depth and prerequisites are inferred, not re-typed.' },
      },
      {
        label: 'E',
        title: 'AI teaches in a vacuum — disconnected from the Founder\'s actual stack',
        quotes: [
          { text: 'It might suggest Godot 3 syntax when you are working with Godot 4.', attribution: 'Hacker News, HN id=35588361' },
          { text: 'Documentation is useless if you start here — it\'s written for people who already understand basics.', attribution: 'Wyndo, aimaker.substack.com' },
          { text: 'Most AI tutoring optimizes for process efficiency… The tacit knowledge of when to apply which approach doesn\'t transfer through templates.', attribution: 'Dr. Joshua Read, drjoshuaread.com' },
        ],
        whyIncumbentsCantFix: 'NotebookLM is hard-walled from the open web and any non-uploaded source. ChatGPT Connectors are enterprise-tier and read-only. Claude Skills require the user to author the integration.',
        coverage: { status: 'shipped', detail: 'MCP-first ingestion (GitHub, Linear, Vercel, Supabase, Stripe, the Founder\'s own MCP servers); courses are generated against the CURRENT state of the Founder\'s stack.' },
      },
    ],
  },

  'foundr-lol': {
    strategicMoves: [
      { title: 'Ship the MCP-readable API as the homepage demo, not a footnote', body: 'Every Claude/Cursor user already lives inside an agent. Make "your agent can fork this experiment via `agent://foundr.lol`" the hero. The MCP discovery vacuum is wide open and no failure-discovery surface exists for agents yet.', timing: 'Q1' },
      { title: 'Launch with 50 real public post-mortems, not a waitlist', body: 'Pioneer\'s "300+ founders, 60,000 updates" died because the updates were vanity. Seed foundr.lol with 50 honest deaths (raised, burned, why) before the first "live" project. Trust is the moat; transparency at launch is unfakeable.' },
      { title: 'Make "Fork" the dominant verb on every card, not "Vote"', body: 'Product Hunt\'s pathology is upvotes-as-currency. If the primary action is a one-click `gh repo fork` + spin-up-on-Vercel button, you sidestep the entire vote-farming game.' },
      { title: 'Sponsor flow = single-button Stripe checkout, no KYC for the patron', body: 'The patron pays foundr.lol (Merchant of Record via Polar). Founder gets a payout later. This collapses the Stripe Connect/KYC wall that has kept GitHub Sponsors and indie Patreon clones unusable for non-US makers.', timing: 'Q2' },
      { title: 'Build the "Failed-and-Live" registry as the SEO play', body: 'Every dead experiment gets a permanent URL with structured data: cause-of-death, MRR-at-shutdown, repo, founder lessons. SaaS Heaven, YC Graveyard, and Coordinal\'s postmortem are all read; none are systematically indexed or forkable.', timing: 'Q2-Q3' },
      { title: 'Land 3 anchor "Sponsor Pros" in Q3 by going B2B-marketing-budget, not B2C-charity', body: 'The 2019 HN comment on GitHub Sponsors is still true: "Virtually no company has a donations budget, almost every company has a $$$ marketing budget." Pitch foundr.lol Sponsor tier to dev-tool brands (Polar, Vercel, Convex) as ad spend.' },
      { title: 'Open the "Commission" tier last', body: 'Sponsor-a-build introduces escrow + IP + scope-creep complexity that will eat the team. Defer until 100+ active experiments + 3 sponsor case studies make demand legible.', timing: 'Q4' },
    ],
    moats: {
      hold: [
        { title: 'Failure-data flywheel', body: 'Every shutdown becomes a forkable artifact. PH/HF/GitHub have no equivalent surface and won\'t add one — failures contradict their growth narratives.' },
        { title: 'MCP-native from day one', body: 'Agent-readable schema for `discover_experiments`, `fork_experiment`, `sponsor_experiment` baked into the protocol. Retrofitting MCP into PH or Kickstarter is a board-level decision.' },
        { title: 'MoR sponsor flow with no patron KYC', body: 'One Stripe relationship on our side absorbs the global tax + payout pain. Replicating this on GitHub Sponsors requires re-architecting their entire payouts stack.' },
      ],
      cannotHold: [
        { title: '"Community of indie makers"', body: 'IndieHackers, r/SideProject, Build-in-Public Twitter already exist and have 100k+ users each. We will not out-community them.' },
        { title: 'Voting as a discovery signal', body: 'HF Spaces likes, PH upvotes, GitHub stars — every incumbent has this. Adding our own vote count is a commodity feature.' },
        { title: '"Better launch day"', body: 'Every PH retrospective ends with "you need an audience pre-built." A new platform can\'t manufacture that for the founder.' },
      ],
      switchingFor: [
        'Sponsor relationships compound on-platform (Pro tier dashboard = patron CRM). Leaving = losing your sponsor history',
        'MCP integrations: once an agent has foundr.lol in its tool list, swapping requires rewriting prompts',
        'Forks reference upstream — pulling your project off foundr.lol orphans every downstream fork\'s lineage graph',
      ],
      switchingAgainst: [
        'The code lives on GitHub, not us. A founder can leave with one repo move',
        'Sponsors can pay the founder directly via Stripe/PayPal once they\'ve connected. Our cut depends on staying useful, not lock-in',
        '"Open" means anyone can build a competing reader on top of our MCP feed',
      ],
    },
    synthesis: [
      { wedge: 'Agent-fork-able experiment registry', segment: 'AI-native solos using Claude/Cursor (~2M devs)', vulnerability: 'No incumbent ships MCP — fragmented across 10k+ servers, no failure index', pain: 'I want my agent to find + fork early-stage work, not just tools', status: 'shipped' },
      { wedge: 'Public post-mortem permalink with structured cause-of-death', segment: 'Indie founders shutting down (~thousands/yr)', vulnerability: 'YC Graveyard / SaaS Heaven are read-only blogs, not forkable; PH hides dead projects', pain: 'Where do failed experiments go — currently a dead Vercel alias', status: 'shipped' },
      { wedge: 'Sponsor checkout with no patron KYC + no creator Stripe Connect onboarding', segment: 'Non-US solo founders (India, SEA, LATAM — Stripe rejects ~30%)', vulnerability: 'GitHub Sponsors requires PAN/W-8BEN; Patreon takes 5–12%', pain: 'Stripe rejected my account as an Indian indie dev', status: 'shipped' },
      { wedge: 'Quote-tweet-to-vote (free tier, viral surface)', segment: 'Twitter founder subgraph (~500k build-in-public)', vulnerability: 'PH upvote is gated behind a PH account nobody opens twice', pain: 'Vote-farming + "open mic for PMs" dead audience', status: 'shipped' },
      { wedge: 'Commission-a-build (Pro $49) for power patrons', segment: 'Dev-tool brands with marketing budget ($100k+/yr each)', vulnerability: 'GH Sponsors has no UTM, no logo placement, no campaign attribution', pain: '"Almost every company has a $$$ marketing budget" — but no SKU to spend it on early-stage', status: 'partial', note: 'Q4 — needs anchor cases first' },
      { wedge: 'Early-access tier (Solo $12) for fork-before-launch', segment: 'Power indie hackers + scouts (~10k who pay for IH Pro / Lenny\'s)', vulnerability: 'PH "coming soon" requires PH audience; HF Spaces is ML-only', pain: 'Watching live experiments evolve, not consuming polished launches', status: 'shipped' },
      { wedge: 'Failure-cause SEO pages (forever-traffic)', segment: 'Founders Googling "why did X fail" + LLMs citing post-mortems', vulnerability: 'YC Graveyard isn\'t structured data; PH actively hides shutdowns', pain: '"I cataloged 127 failed startups" hand-built — should be a platform', status: 'shipped' },
      { wedge: 'Lineage graph of forks (who built on whose dead idea)', segment: 'Researchers + agent builders looking for prior art', vulnerability: 'GitHub forks have no narrative / no shutdown context', pain: 'This idea was tried 3x — here\'s what broke each time', status: 'partial' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Vote farming has made every "discovery" platform a meta-game',
        quotes: [
          { text: 'Upvotes are the new fake currency... Most PH users are not real customers; they are just looking for product ideas.', attribution: 'paalfe, HN 40844727' },
          { text: 'For years, "#1 on ProductHunt" is a strong signal to me to stay away. It means the product is not much more than a landing page.', attribution: 'Hacker News user, HN 30509760' },
          { text: 'The audience is almost literally no one, the people doing the upvoting are doing it for subhuman wages in developing countries.', attribution: 'Hacker News user, HN 45362569' },
        ],
        whyIncumbentsCantFix: 'PH\'s revenue depends on launches buying boosts and badges — killing the vote-economy kills the product.',
        coverage: { status: 'shipped', detail: 'foundr.lol demotes votes to a secondary signal; the dominant CTA is Fork, which can\'t be farmed without forking real code.' },
      },
      {
        label: 'B',
        title: 'Failed experiments vanish — there\'s no canonical place for the post-mortem',
        quotes: [
          { text: 'The graveyard isn\'t just full of ideas — it\'s full of founders who burned out before they ever launched.', attribution: 'IndieHackers post, Nov 2025' },
          { text: '95% of startups fail, but we usually hear the success stories. This is my attempt to fill that gap.', attribution: 'Jacek Migdal, Quesma postmortem' },
          { text: 'Learn from failure, not just success.', attribution: 'VulcanWM, SaaS Heaven README' },
        ],
        whyIncumbentsCantFix: 'PH, Kickstarter, and HF Spaces are growth-narrative platforms — surfacing dead projects depresses their topline metric.',
        coverage: { status: 'shipped', detail: 'Failure is a first-class state in foundr.lol\'s schema. Every shutdown gets a permalink + structured cause + forkable repo.' },
      },
      {
        label: 'C',
        title: 'Non-US solo founders are walled off from sponsorship by Stripe Connect + KYC',
        quotes: [
          { text: 'Stripe is excellent if you\'re a registered US business. It\'s a wall if you\'re a solo person in a country they\'re cautious about.', attribution: 'Tejas Giri, DEV.to, May 2026' },
          { text: 'Common payout blockers are name or PAN mismatches and bank detail errors, fix details in Stripe, then wait for re verification.', attribution: 'Karbon, GitHub Sponsors India guide' },
          { text: 'Four days of waiting on Stripe support kills it. By day five I didn\'t even feel like opening the project.', attribution: 'Tejas Giri, DEV.to' },
        ],
        whyIncumbentsCantFix: 'GitHub Sponsors is contractually wired to Stripe Connect; replacing that touches every payout in the system. Patreon\'s 5–12% take is the business model.',
        coverage: { status: 'shipped', detail: 'foundr.lol Pro becomes the Merchant of Record (Polar-style). Patrons checkout with a card, no KYC; payouts to founders go through a single MoR rail.' },
      },
      {
        label: 'D',
        title: '"Build in public" only works if you already had distribution',
        quotes: [
          { text: 'Your voice echoes into the void, unanswered.', attribution: 'Wisp CMS founder guide' },
          { text: 'If you\'re building in public there\'s a 99% chance you\'re going to end up building products for other indie hackers.', attribution: 'Hacker News, via Sydium retrospective' },
          { text: 'Reddit will eat you alive as a new account. r/SideProject removed my post within minutes.', attribution: 'Sabahattin, IndieHackers, April 2026' },
        ],
        whyIncumbentsCantFix: 'Reddit karma walls, Twitter\'s algorithmic suppression, and PH\'s "you need a pre-built audience" reality are platform-level — none can manufacture an audience for an unknown solo.',
        coverage: { status: 'partial', detail: 'foundr.lol can\'t grant audience, but the free-tier quote-tweet-to-vote loop borrows Twitter\'s distribution while letting voters arrive without a new account.' },
      },
      {
        label: 'E',
        title: 'No canonical directory where agents can discover, evaluate, and act on experiments',
        quotes: [
          { text: 'MCP is supposed to make agents composable... But composability breaks down when you can\'t find the components.', attribution: 'Seakai, DEV.to, Feb 2026' },
          { text: 'Directories list tools, not agents... That\'s not discovery — that\'s word of mouth.', attribution: 'Agenium, DEV.to, Feb 2026' },
          { text: '10,000 MCP servers and the discovery problem... no standardized way to compare reliability.', attribution: 'AgentMarketCap, April 2026' },
        ],
        whyIncumbentsCantFix: 'PH/HF Spaces/GH Sponsors all assume a human in the loop with a browser. Adding an MCP surface requires rebuilding their permission, rate-limit, and identity models for non-human callers.',
        coverage: { status: 'shipped', detail: 'MCP-readable is a launch-day requirement, not a roadmap item. Experiments expose `fork`, `sponsor`, `subscribe` as tool calls.' },
      },
    ],
  },

  'foundr-mobile': {
    strategicMoves: [
      { title: 'Ship the voice-drop primitive first', body: 'Single-screen MVP that records, transcribes (on-device + cloud fallback), and routes to foundr-backlog via the existing MCP. Only feature that needs to exist on day 1.', timing: 'Q1' },
      { title: 'Native Swift / Kotlin from day 0 — not React Native, not Capacitor', body: 'Linear Mobile proved the user perception delta; Notion\'s web-wrapper apology thread is the cautionary tale.', timing: 'Q1' },
      { title: 'Push-with-context API', body: 'Agents on desktop/server post a "Need approval: <args>" → phone wakes → inline tap-to-approve. The OpenClaw/Aerostack gap that exists in production today.', timing: 'Q2' },
      { title: 'Live Activity for the foundr.world room', body: 'Render the founder\'s current room with avatar + agent count + recent event on Lock Screen / Dynamic Island. Steals 6 wake-ups/day of mindshare from Slack and ChatGPT.', timing: 'Q2' },
      { title: 'Quote-tweet free tier with shareable audio cards', body: 'Every drop is exportable as a 9:16 audio-card → IG/TikTok/X. Founders are creators; this is the install loop.', timing: 'Q2' },
      { title: 'MCP-over-mobile SDK', body: 'Third-party founder tools (foundr.host, foundr.company) register their MCP server with foundr.mobile and inherit voice + push + approval UI. Network effect compounds.', timing: 'Q3' },
      { title: 'Apple Watch + Vision Pro companion stubs', body: 'Wrist drop is the next voice-drop, headset is the next room-glance. Cheap to stub, expensive for incumbents to copy without their own ecosystem.', timing: 'Q4' },
    ],
    moats: {
      hold: [
        { title: 'Ecosystem identity (foundr.you) × cross-product graph', body: 'Every foundr.* product feeds the same identity and event stream; the mobile client gets richer the more verticals ship. ChatGPT/Claude cannot fake this without buying a SaaS suite.' },
        { title: 'First-class push semantics tied to agents the user owns', body: 'Agents live in the founder\'s room/server/laptop, not on Anthropic\'s relay. Push is end-to-end ours — the Claude /remote-control bug list is proof the relay-based approach is a graveyard.' },
        { title: 'Free-quote-tweet viral loop', body: 'Audio-card share format ties install attribution to a creator graph the App Store cannot rate-limit. ChatGPT/Claude do not have a shareable artifact at all.' },
      ],
      cannotHold: [
        { title: 'Generic voice-to-text', body: 'Whisper, Fish, ElevenLabs, Apple on-device dictation, Granola, Otter all commoditize this. Don\'t market it as a moat.' },
        { title: '"Native iOS speed"', body: 'Linear already proved it; ChatGPT/Claude can hire iOS teams next quarter. Native speed is a prerequisite, not a moat.' },
        { title: 'MCP support per se', body: 'Open protocol Anthropic owns the spec. Expo / Cursor / VS Code all ship MCP-over-mobile patterns. The moat is WHICH MCP servers and WHOSE identity, not the protocol.' },
      ],
      switchingFor: [
        'Room layout, agent fleet, backlog history, credit balance all live in foundr.you — leaving foundr.mobile means leaving their world, not just a chat history',
        'Inbound push wiring (Stripe sub event → Slack DM → foundr.mobile approval card) is per-tool OAuth setup the founder will not redo at a competitor',
      ],
      switchingAgainst: [
        'Founders already pay for ChatGPT and Claude mobile; we are a third sub unless we displace one — pricing has to be defensible against "I already have Claude"',
        'Notion / Linear / Granola already have meeting-notes + project muscle memory; we cannot beat them at their core jobs, only at the ecosystem orchestrator job they aren\'t aiming for',
      ],
    },
    synthesis: [
      { wedge: 'Voice-drop to agent backlog', segment: 'AI-native solo founder', vulnerability: 'ChatGPT voice capped 1h/day; Claude has none', pain: 'Idea-loss between desk sessions', status: 'shipped' },
      { wedge: 'Push when agent needs human', segment: 'Claude Code / Cursor / OpenClaw users', vulnerability: 'Claude RC broken (#60208, #29726); GitHub mobile has only PR-review push', pain: '"I keep walking back to my laptop at 11pm"', status: 'shipped' },
      { wedge: 'MCP-over-mobile with founder-owned servers', segment: 'Multi-tool founders w/ Stripe/Linear/Supabase', vulnerability: 'None ship it; Expo/Cursor only support remote MCP for IDE work', pain: 'I want my actual stack callable from my phone', status: 'shipped' },
      { wedge: 'One identity across .you/.company/.host/.mobile', segment: 'Founders running ≥2 foundr.* products', vulnerability: 'ChatGPT/Claude single-tenant; Notion mobile is web wrapper', pain: 'Stop making me re-auth on each phone app', status: 'shipped' },
      { wedge: 'Glanceable office (Live Activity / widget)', segment: 'Habitual phone-checkers (i.e. all of them)', vulnerability: 'None of ChatGPT/Claude/Lindy ship Live Activities', pain: 'I open my phone 100×/day, none show my agents', status: 'shipped' },
      { wedge: 'Shareable quote-tweet voice card', segment: 'Founder-creators (X/IG/TikTok overlap)', vulnerability: 'No competitor offers shareable artifact', pain: 'I want to post the insight I just dictated', status: 'partial', note: 'Depends on tier mix' },
      { wedge: 'Offline-capable drafts/queue', segment: 'Subway/plane/lab commuters', vulnerability: 'Linear loses data, Notion timeouts, Claude drafts vanish', pain: 'I lost my prompt when I backgrounded the app', status: 'shipped' },
      { wedge: 'iPad/tablet-first parity', segment: 'Founders who edit on iPad', vulnerability: 'Claude iPad has no Code section at all', pain: 'iPad is invisible to the agent stack', status: 'partial', note: 'Ship Y2' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Long-running agent sessions break silently on mobile and eat user input',
        quotes: [
          { text: 'Mobile App Session Breaks After Long Tasks — Message Loss… User\'s typed message disappears completely, cannot be recovered.', attribution: 'StopGamer — anthropics/claude-code#16881' },
          { text: 'Drafts not persisting on mobile (iOS)… whatever I\'ve typed is silently discarded. When I return, the input is empty.', attribution: 'kdiallo-00 — anthropics/claude-code#53598' },
          { text: 'Switching to another iOS app and returning to Claude kills the connection. The app still shows the session as "active" but responses stop flowing.', attribution: 'MikeBarta — anthropics/claude-code#29726' },
        ],
        whyIncumbentsCantFix: 'Claude/ChatGPT push session state through a central relay optimized for short-form chat. Long agent sessions + iOS background lifecycle + permission prompts cross three teams (mobile, relay, agent runtime) and no one owns the integration test.',
        coverage: { status: 'shipped', detail: 'foundr.mobile pairs phone↔founder-machine over an end-to-end channel, persists drafts locally per-conversation, treats permission prompts as first-class push payloads.' },
      },
      {
        label: 'B',
        title: 'Push when the agent needs me — promised, rarely delivered',
        quotes: [
          { text: 'Push notifications from Claude Code are not being delivered to linked mobile devices… long-running task in Claude Code, no push notification received.', attribution: 'luckygreen — anthropics/claude-code#60208' },
          { text: 'I caught myself walking back to my laptop at 11pm for the third time that night, just to check what the OpenClaw agent was doing. So I built the iOS app I kept wishing existed.', attribution: 'Aerostack founder — indiehackers.com/post/openclaw-mobile' },
          { text: 'Agent Sessions with no PR should show in mobile app… those sessions don\'t show up making it hard for me to be productive on the go.', attribution: 'Power-Maverick — github.com/orgs/community/discussions/190967' },
        ],
        whyIncumbentsCantFix: 'Push routing requires owning identity + agent runtime + device token + per-tool semantics. Anthropic/OpenAI/GitHub each own one slice. The OpenClaw clone validates the demand — founders WILL build their own iOS app rather than wait.',
        coverage: { status: 'shipped', detail: 'Push is a first-class MCP-emitted payload; agent says "I need approval", phone wakes, tap approves from lock screen.' },
      },
      {
        label: 'C',
        title: 'The "mobile is a web wrapper" tax',
        quotes: [
          { text: 'Notion\'s mobile app is fundamentally a web wrapper, leading to performance issues like large initial payloads, heavy client-side processing… on a spotty 4G connection in an elevator, it\'s an eternity.', attribution: 'techresolve.blog 2026/03/09' },
          { text: '(I work at Notion)… On Android devices the situation is still not usable.', attribution: 'jitl, Notion engineer — HN id=25522104' },
          { text: 'There\'s no offline support at all [in Linear iOS], unlike the desktop app. If you\'re using Linear Mobile to organize your work during a commute, prepare for a frustrating and painful experience.', attribution: 'karantalati — Linear Mobile App Store review' },
        ],
        whyIncumbentsCantFix: 'Notion\'s web wrapper is an architectural decision a decade deep; rewriting native means rewriting block engine, sync engine, plugin runtime. Linear shipped native and STILL lost offline because the sync engine was the hard part.',
        coverage: { status: 'shipped', detail: 'foundr.mobile is native-first day 0, queues every drop locally, treats offline as the steady state.' },
      },
      {
        label: 'D',
        title: 'Productivity tools are a sub graveyard with no glanceable surface',
        quotes: [
          { text: 'ChatGPT consumes 15-20% battery per hour in background, even when not actively used. Voice Mode Active (WiFi): 18-22%/hour, Device Heat: High.', attribution: 'gowavesapp.com — Why ChatGPT can destroy productivity' },
          { text: 'For a product as great as Linear, I can\'t believe the mobile app does not display a COUNT of the issues on each view.', attribution: 'Mister Modem — Linear Mobile App Store' },
          { text: 'Lots of glitches. I archive tickets and they reappear, I reassign tickets to the team they never see them.', attribution: 'Asana mobile user — forum.asana.com/t/952108' },
        ],
        whyIncumbentsCantFix: 'None of ChatGPT/Claude/Notion/Asana ship Live Activities or widgets that show meaningful live state — only icons and badge counts. Building a glanceable office requires a domain model with rooms/agents/events; chat apps don\'t have one.',
        coverage: { status: 'shipped', detail: 'Live Activity surface backed by the founder\'s foundr.world room. Tap = open the world.' },
      },
      {
        label: 'E',
        title: 'Cannot drive my actual stack from my phone — only the vendor\'s chat',
        quotes: [
          { text: 'There\'s absolutely no way to create a pull request [in GitHub mobile]. No button. Changing to the feature branch doesn\'t help either.', attribution: 'mary.codes/blog/programming/why_cant_i_make_a_pr_in_github_mobile' },
          { text: 'Plug Claude, Hermes, or OpenClaw into a real mobile device to automate any app… Open source · MIT · LLM agnostic.', attribution: 'mobilerun.ai (the fact this exists is the pain)' },
          { text: 'Cloud-only — No self-hosting option [for Lindy]. Your data lives on Lindy\'s infrastructure, which may concern privacy-focused users.', attribution: 'rywalker.com/research/lindy' },
        ],
        whyIncumbentsCantFix: 'GitHub mobile blocks PRs because mobile is treated as a review surface; Lindy refuses self-host because cloud-only is the business model. The MCP-over-mobile pattern is shipping in adjacent communities — but no one wires the founder\'s OWN MCP servers into a unified cockpit.',
        coverage: { status: 'shipped', detail: 'foundr.mobile ships an MCP client SDK with founder-owned servers (foundr-backlog, supabase, playwright, perea-mcp), each callable by voice or tap.' },
      },
    ],
  },

  'foundr-you': {
    strategicMoves: [
      { title: 'Ship the MCP server first, brand second', body: 'Get into Claude Desktop / Cursor / Codex MCP registry within 60 days. This is where memory-mcp, projectmem, agentmemory, mcp-memento are landing — be the most polished one with a real brand.', timing: 'Q1' },
      { title: 'Quote-tweet onboarding', body: 'Make claiming a profile a public act. Every claim is a tweet. Asymmetric distribution vs Mem0\'s dev-funnel.', timing: 'Q1' },
      { title: 'Pre-built founder schemas', body: '6 archetypes (Solo SaaS, Solo Agency, AI-native, Solo content, Solo hardware, Solo dev tools). Schema becomes the differentiator no general memory layer can copy without forking.', timing: 'Q2' },
      { title: 'Audit-log + GDPR-deletion-proof from day one', body: 'Directly counter Mem0/Zep\'s documented governance gaps and OpenAI\'s Nov 2025 mass-deletion trauma. Free certification badge.' },
      { title: 'First-class "Forget" gestures', body: 'Project-scoped memory walls, explicit-forget, diffable history. Solve the #1 HN/Reddit complaint pattern.' },
      { title: 'foundr.* ecosystem reads-from contract', body: 'Every other foundr.* product reads from foundr.you by default. Bundle becomes structural moat.' },
      { title: 'Acquire/partner with one MCP-memory OSS project', body: 'Memento, projectmem, or agentmemory for instant credibility + contributor base.' },
    ],
    moats: {
      hold: [
        { title: 'Founder-schema vocabulary', body: 'A canonical taxonomy of founder primitives (stack, role, taste, audience) is a brand + content asset that horizontal memory players can\'t ship without a vertical pivot.' },
        { title: 'foundr.* ecosystem reads-from', body: 'Every other foundr.* product is a captive integration. Cross-product retention compounds.' },
        { title: 'Public profile graph', body: 'Quote-tweet flywheel produces a public founder graph (think GitHub for founder context). Network effect; data moat over time.' },
      ],
      cannotHold: [
        { title: 'Memory tech', body: 'Mem0, Zep, Letta, Graphiti are all open-source, all better-funded, all benchmarked. We will not out-build them on retrieval quality.' },
        { title: 'MCP protocol', body: 'Open standard. Any client can switch servers in a config-file edit. No protocol-level lock-in possible.' },
        { title: 'Storage', body: 'Postgres + pgvector is commodity. Nothing proprietary.' },
      ],
      switchingFor: [
        'Switching TO foundr.you: when a founder hits ChatGPT memory limit (~10K chars), Mem0\'s $249/mo graph paywall, a silent memory deletion on an incumbent, or signs up for a second foundr.* product and gets prefilled context for free',
      ],
      switchingAgainst: [
        'Switching AWAY: when OpenAI/Anthropic ship cross-vendor MCP-readable memory (low odds — incentive misaligned), or a horizontal player (Mem0) ships a founder-vertical SKU after seeing our traction',
      ],
    },
    synthesis: [
      { wedge: 'Versioned typed facts, not chat-log scraping', segment: 'AI-native founders tired of fuzzy context', vulnerability: 'OpenAI Memory: hidden second layer, no edit/export. Mem0: raw conversation embedded as single vector.', pain: '"I want to see and edit what my agent knows about me"', status: 'shipped' },
      { wedge: 'MCP-native on free tier', segment: 'Multi-tool founders (Claude + Cursor + ChatGPT)', vulnerability: 'Mem0 $249 for graph; LangSmith $39/seat; ChatGPT memory not MCP-exposed', pain: 'I want every agent reading from one profile, not three silos', status: 'shipped' },
      { wedge: 'Founder-shaped schema', segment: 'Solo founders who don\'t fit "generic preferences"', vulnerability: 'No incumbent ships a typed schema for stack/repos/projects/taste/wins/kills', pain: '"Remember Dante is solo, ships on Vercel, dislikes lime-green"', status: 'shipped' },
      { wedge: 'Project-scoped memory + explicit forget', segment: 'Founders worried about personal context leaking into work', vulnerability: 'ChatGPT: "memory cross-pollutes work and personal contexts" (HN 44052246); Simon Willison documented chat-history pollution', pain: 'Hobby project context leaks into pitch deck', status: 'shipped' },
      { wedge: 'foundr.* ecosystem reads-from contract', segment: 'Founders running multiple foundr.* products', vulnerability: 'No horizontal memory player has a captive ecosystem', pain: 'foundr.world doesn\'t know what I built in foundr.host', status: 'partial' },
      { wedge: 'Audit log + signed snapshots', segment: 'Founders sharing context with contractors/collaborators', vulnerability: 'No incumbent ships per-agent audit (who read what when)', pain: 'I want to know which agent saw my pricing strategy', status: 'partial' },
      { wedge: 'Quote-tweet public profile graph', segment: 'Founder-creators wanting share-able profile', vulnerability: 'Mem0/Letta have no consumer surface; ChatGPT memory non-portable', pain: 'No way to publish "what my agents know about me"', status: 'gap' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: '"I re-explain my stack to every new chat"',
        quotes: [
          { text: 'Across Claude, Cursor, Codex, Antigravity — agents are stateless between sessions. Each new conversation pays 5,000–20,000 tokens to rebuild context that existed yesterday.', attribution: 'riponcm — dev.to/riponcm/projectmem' },
          { text: 'AI tools remember now, but they remember in separate silos. Claude has projects, ChatGPT has personalization, Cursor indexes your codebase, and somehow you still end up re-explaining the same decisions, constraints, preferences, and project state every time.', attribution: '_boweii — dev.to/contextfabric' },
          { text: 'Every time you start a new conversation with an LLM, it forgets everything. No memory of your preferences, your codebase, your past mistakes, or your project context. You end up repeating yourself.', attribution: 'lymy1205 — dev.to/ai-memory-is-broken' },
        ],
        whyIncumbentsCantFix: 'Memory tied to vendor walls (ChatGPT memory, Claude Projects, Cursor Rules). Each vendor monetizes lock-in inside their tool — opening cross-vendor MCP-readable memory removes the moat.',
        coverage: { status: 'shipped', detail: 'foundr.you ships an MCP server every agent reads from. One profile, every tool — Claude / Cursor / ChatGPT all see the same canonical facts.' },
      },
      {
        label: 'B',
        title: '"ChatGPT silently profiled me and I can\'t see / control it"',
        quotes: [
          { text: 'Just yesterday I asked ChatGPT 4o something in a new chat and after answering, it referred to a plan from a multiple weeks old chat that was 100% not in current context. This hit me as being incredibly scary.', attribution: 'HN 40631694' },
          { text: 'ChatGPT memory seems weird to me. It knows the company I work at and pretty much our entire stack — but when I go to view its stored memories none of that is written anywhere.', attribution: 'HN 45218761' },
          { text: 'ChatGPT has a memory you cannot see, besides chat history and besides memory. You cannot purge or manage this memory.', attribution: 'HN 44059140' },
        ],
        whyIncumbentsCantFix: 'OpenAI/Anthropic monetize stickiness via opaque memory. NYT court order forces OpenAI to retain logs indefinitely → privacy ceiling. Cannot ship an inspectable memory layer without contradicting the moat.',
        coverage: { status: 'shipped', detail: 'Every fact in foundr.you is typed, visible, editable, version-tracked. Audit log shows which agent read which fact, when.' },
      },
      {
        label: 'C',
        title: '"Memory cross-pollutes work and personal contexts"',
        quotes: [
          { text: 'I\'ve been impressed with the memory feature, but I do see how it could be dangerous, especially if you use it for hobby projects and serious projects. I would not want that context to spill over into a personal project.', attribution: 'HN 44052246' },
          { text: 'If I\'m debugging something with ChatGPT and I hit an error loop, my fix is to start a new conversation. Now I can\'t be sure ChatGPT won\'t include notes from that previous conversation\'s context that I was trying to get rid of!', attribution: 'Simon Willison — HN 44428446' },
          { text: 'I\'d love a version of this that was tied to projects — then I could maintain way more control over my context without worrying that weird stupid stuff was leaking into my real work.', attribution: 'HN 43886594' },
        ],
        whyIncumbentsCantFix: 'OpenAI per-project memory is "a huge miss right now… global behavior so far is some architectural limitation" (HN 44052246). Project scoping requires rebuilding the memory architecture, which contradicts their stickiness funnel.',
        coverage: { status: 'shipped', detail: 'Project-scoped memory walls + explicit forget gestures. Each project namespace is isolated; founders explicitly cross-link if they want.' },
      },
      {
        label: 'D',
        title: '"Memory infrastructure silently breaks and I lose data"',
        quotes: [
          { text: 'When calling memory.add(), the library concatenates the full raw conversation into a single string … If the conversation exceeds the embedding model\'s token limit, the call fails with a 400 Bad Request before any memory is extracted or stored.', attribution: 'Mem0 Issue #5148' },
          { text: 'When the LLM returns an action.id that doesn\'t exist in the internal tempUuidMapping, the resolved realMemoryId becomes undefined. This causes updateMemory(undefined, ...) or deleteMemory(undefined) to throw, and the memory operation is silently dropped — resulting in data loss.', attribution: 'Mem0 Issue #4708' },
          { text: 'Graph memory search returns empty results when filtering by user_id with Neo4j backend … This breaks the core multi-user capability.', attribution: 'Mem0 Issue #4232' },
        ],
        whyIncumbentsCantFix: 'Mem0 and Letta have dual revenue pressure (raise + ship) and treat memory as agent-infra not user-data. Silent failures are documented in their own issue trackers but unprioritized vs new-customer wins.',
        coverage: { status: 'gap', detail: 'foundr.you ships explicit failure modes: write returns success/fail with reason; version diff before commit; daily corpus integrity check. Status: needs to ship before paid tier launches.' },
      },
      {
        label: 'E',
        title: '"Memory full / lost mid-project, no recovery, no portability"',
        quotes: [
          { text: 'If you\'re a ChatGPT power user, you may have recently encountered the dreaded "Memory is full" screen. Seeing a memory full warning in the middle of a time-sensitive project can be extremely frustrating.', attribution: 'Unite.AI — ChatGPT\'s memory limit' },
          { text: 'My ChatGPT was writing a recipe to memory, and after it was done, the entire "saved memory" panel was blank, with no history at all. Everything is just gone.', attribution: 'Reddit user — via aquartia.in 2025-11-14' },
          { text: 'The minute you switch to Claude for a long-context summary, or Gemini for a Google Workspace task, the past month of carefully training your assistant evaporates the moment you change tabs.', attribution: 'rethread.dev/blog/why-chatgpt-forgets' },
        ],
        whyIncumbentsCantFix: 'Each vendor optimizes for memory inside their tool. Cross-vendor portability would destroy the moat. ChatGPT\'s Nov 2025 mass deletion event went un-acknowledged for days.',
        coverage: { status: 'shipped', detail: 'Full JSON + markdown export anytime. Encrypted backups on Pro. Signed canonical-profile snapshots for sharing read-only with collaborators.' },
      },
    ],
  },

  'foundr-bio': {
    strategicMoves: [
      { title: 'Ship the MCP server first, web UI second', body: 'Distribution wedge inside Claude Desktop, Cursor, ChatGPT custom GPTs. The web UI is a marketing surface; the MCP is the product.', timing: 'Q1' },
      { title: 'Index PubMed daily + bioRxiv weekly + clinicaltrials.gov hourly for the 50 longevity topics that have demand', body: 'Rapamycin, fisetin, GLP-1, NAD precursors, senolytics, peptide cocktails. Skip the long tail.', timing: 'Q1' },
      { title: 'Launch the free /quote tier', body: 'Share-card image with citation chain, optimized for X virality (Consensus\'s playbook).', timing: 'Q2' },
      { title: 'Partner-integrate with 2 longevity telehealth clinics', body: 'AgelessRx, Healthspan, Lin Health as a referral data source — they have the prescribing wedge.', timing: 'Q2' },
      { title: 'Build the podcast-transcript index', body: 'Huberman, Attia, FMF, Bryan Johnson — every show citation becomes a foundr.bio deep-link, instant SEO juice.', timing: 'Q3' },
      { title: 'Cohort-launch in AI-native-founder Discord cluster', body: 'NewLimit\'s open-source orbit, Sam Altman / Retro circle, Hugging Face bio channels — before the broader biohacker market.', timing: 'Q3' },
      { title: 'Weekly bio-brief newsletter at 5K subs', body: 'Free top-of-funnel + cited-snippet generator for Pro upsell.', timing: 'Q4' },
    ],
    moats: {
      hold: [
        { title: 'MCP-native distribution inside agent IDEs', body: 'First-mover before Elicit/Consensus ship MCP. Once a founder\'s agent has the namespace, switching means re-prompting every agent.' },
        { title: 'Curated longevity-specific corpus', body: 'clinicaltrials.gov + bioRxiv + podcast transcripts + protocol forums all in one queryable namespace. Generic research tools (Elicit/Consensus) don\'t want to manage the vertical taxonomy.' },
        { title: 'Editorial stance', body: 'Willingness to surface dosing protocols with evidence grades that Elicit/Consensus refuse to. Examine.com proves the trust moat but doesn\'t scale to AI-native.' },
      ],
      cannotHold: [
        { title: '"Better AI synthesis"', body: 'Consensus/Elicit have years of head start on retrieval + summarization quality.' },
        { title: '"Larger index"', body: 'PubMed/bioRxiv/clinicaltrials are public; anyone can index them.' },
        { title: 'Network effects from user queries', body: 'Search-style products have weak network effects until they\'re at Google scale.' },
      ],
      switchingFor: [
        'Saved protocols + query bundles in user account = sticky once the user has 5+ tracked topics',
        'API/MCP key in Claude/Cursor config = forgotten infrastructure, hard to dislodge',
        'Personalized "what\'s new in your topics" digest = email habit moat (FMF/Levels playbook)',
      ],
      switchingAgainst: [
        'Elicit or Consensus ships MCP — closes our distribution wedge',
        'A longevity-vertical fork of Consensus targets the same audience',
        'Examine.com retools toward agent-native delivery (unlikely culturally)',
      ],
    },
    synthesis: [
      { wedge: 'MCP-native distribution', segment: 'AI-native founders + biohackers in Claude/Cursor', vulnerability: 'Elicit/Examine require context-switch to website; Consensus MCP shallow', pain: 'I want to ask longevity questions from my IDE without a tab change', status: 'shipped' },
      { wedge: 'Vertical longevity opinion', segment: 'Indie biohackers tired of "consult your doctor" hedging', vulnerability: 'Elicit/Consensus claim-hedge; Examine doesn\'t cover rapamycin/senolytics', pain: '"Just tell me the dose people actually use"', status: 'shipped' },
      { wedge: 'Protocol-graded output', segment: 'n-of-1 self-experimenters', vulnerability: 'No incumbent outputs Mayo-style protocol skeletons with evidence grades', pain: 'I have to read 20 papers to assemble a dosing protocol', status: 'shipped' },
      { wedge: 'Free quote-tweet tier (share-card)', segment: 'Founder-creators with bio interest', vulnerability: 'Elicit/Examine have no viral share surface', pain: 'No way to share what I learned on X', status: 'partial' },
      { wedge: 'Topic threads that walk-the-literature daily', segment: 'Researchers tracking 3-5 active topics', vulnerability: 'Elicit answers one question; Litmaps Monitor is map-shaped not synthesis-shaped', pain: 'I want a daily digest, not a search bar', status: 'shipped' },
      { wedge: 'Replication-aware ranker', segment: 'Burned-by-hype biohackers', vulnerability: 'No incumbent surfaces contradictions inline', pain: '"This paper says one thing, the next says the opposite"', status: 'partial' },
      { wedge: 'n-of-1 protocol journal linked to literature', segment: 'Founders running personal protocols', vulnerability: 'Examine doesn\'t track personal use; foundr.you cross-product unique', pain: 'I tried rapamycin for 90 days and have no record of what happened', status: 'partial' },
      { wedge: 'Podcast-transcript index', segment: 'Huberman/Attia/FMF listeners', vulnerability: 'No search engine indexes podcast transcripts as a primary source', pain: '"What did Attia say about NAD on episode 247?"', status: 'gap' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'PubMed is overwhelming and missing the "tolerance / real-world dose" answer',
        quotes: [
          { text: 'A Google search for "modafinil tolerance" produces many dozens of blog posts, forum comments etc., of people reporting building tolerance. However, searches of PubMed or Google Scholar do not produce any substantive results.', attribution: 'r/Nootropics — archived gwern.net' },
          { text: 'Within any scientific field of sufficient intellectual depth to deserve the name, there is far too much happening in the literature for any individual to absorb, digest and assimilate it all without making that task their full-time job.', attribution: 'Ouroboros aging blog — pmc.ncbi.nlm.nih.gov/PMC2650186' },
          { text: 'Researchers report up to 80% time savings using Elicit for systematic reviews.', attribution: 'elicit.com — implication: pre-Elicit pain was a full week per review' },
        ],
        whyIncumbentsCantFix: 'PubMed is keyword-only and doesn\'t index forums; Elicit/Consensus surface papers but not real-world dose conversations. Examine doesn\'t cover longevity-novel molecules. The gap is structural across information silos.',
        coverage: { status: 'shipped', detail: 'foundr.bio crosses PubMed + bioRxiv + clinicaltrials + r/longevity + LongeCity + protocols.io in one queryable namespace.' },
      },
      {
        label: 'B',
        title: 'Conflicting protocols for the same molecule, no synthesis layer',
        quotes: [
          { text: 'I\'m so confused. I am seeing in many places folks are talking about daily use of fisetin in the 400mg-800mg range, but everything I read here talks about using the 2 day protocol. So what\'s the story?', attribution: 'JimWoodall — LongeCity Senolytics forum' },
          { text: 'The Information Overload: You spend hours trying to decide between NMN and NR. One expert swears by NMN, another presents data favoring NR. You fall down a rabbit hole leaving you more confused.', attribution: 'Staqc blog summarizing r/longevity NAD-precursor confusion' },
          { text: 'Sublingual drops, IV drips, nasal sprays, oral capsules, injections. Everyone\'s claiming a different delivery method is the best. Some people swear an IV infusion left them feeling like they were 30 again. Others took NMN for six months and felt nothing.', attribution: 'Healthspan — gethealthspan.com NAD article' },
        ],
        whyIncumbentsCantFix: 'Elicit/Consensus refuse to synthesize directional protocols (medical-claim hedging). Examine doesn\'t cover novel molecules. The synthesis is a brand stance most academic-coded tools won\'t take.',
        coverage: { status: 'shipped', detail: 'Protocol-graded output: "Mayo fisetin 20 mg/kg day 1 + day 30" with evidence grade and the 4 alternative protocols ranked.' },
      },
      {
        label: 'C',
        title: 'Where-to-buy / dose-finding info scattered across rapamycin.news forums, never aggregated',
        quotes: [
          { text: 'Currently looking at buying rapamycin online, likely via India, and I see there are a number of brands, including: Biocon (Rapacan), Zydus Cadila (Siromus), Rocas, Panacea Biotec (Siropan), Actiza, Pfizer (Rapamune).', attribution: 'Age-Reversal Forum — forum.age-reversal.net' },
          { text: 'Latest Biocon Rapamycin / Rapacan / Sirolimus quote through Jagdish (NIBA Health) is $7 USD for 10 mg.', attribution: 'rapamycin.news pricing wiki' },
          { text: 'The price range for rapamycin is genuinely confusing. One pharmacy might quote you $1,270 for a month\'s supply. Another might say $80. A telehealth clinic might charge $290.', attribution: 'WinAging — winaging.com/blog/rapamycin-cost' },
        ],
        whyIncumbentsCantFix: 'Elicit/Consensus don\'t index forums or pharmacy quotes. Examine doesn\'t cover sourcing. The "where to actually buy" question lives in scattered forum wikis with no agentic interface.',
        coverage: { status: 'partial', detail: 'foundr.bio indexes rapamycin.news + Age-Reversal Forum + LongeCity for sourcing + dose data. Roadmap: pharmacy-quote scraping for transparency.' },
      },
      {
        label: 'D',
        title: 'Senolytics — even experts say the field is contradictory and "stack at your own risk"',
        quotes: [
          { text: 'It\'s hard to imagine that anyone would build up a significant number of senolytic cells in 3 weeks. Cellular senescence doesn\'t work that way. The answer to this riddle is that fisetin is not just a senolytic but also senomorphic.', attribution: 'LongeCity user reasoning through conflicting claims' },
          { text: 'At this point in senolytic research, it would be unwise (IMO) to "stack" various substances which have not even been through human trials. You are more likely to do serious damage than help yourself.', attribution: 'LongeCity — longecity.org/forum/topic/103978' },
          { text: 'Significant challenges remain, including the lack of standardized biomarkers, the heterogeneity of senescent cell populations, and questions about safety and long-term efficacy. Some experts go as far as questioning the senescence paradigm itself.', attribution: 'Steve H — LongeCity expert roundup 2026' },
        ],
        whyIncumbentsCantFix: 'Elicit/Consensus won\'t make the call. Examine doesn\'t cover senolytics. The "is this paradigm even real" question requires editorial stance most tools avoid.',
        coverage: { status: 'shipped', detail: 'Replication-aware ranker surfaces contradictions + retraction watch + sample-size warnings inline. Editorial stance baked into ranker tuning.' },
      },
      {
        label: 'E',
        title: 'Industry-sponsored / hyped studies are missing or hidden — biohackers feel actively misled',
        quotes: [
          { text: 'Checking right now… Pubmed still records no human trials [for magnesium l-threonate]; a search turns up 3 studies — 2 mice studies and 1 editorial. Between the total absence of publications and the steady deletion of details from their science page, it doesn\'t look like the USC or CRO studies will be published anytime soon.', attribution: 'r/Nootropics — archived gwern.net' },
          { text: 'The theory took off and "outpaced the actual data," Dr Kaeberlein said. [on NAD+ blood-level decline being a 20-year-old assumption that didn\'t hold up in 2026]', attribution: 'Straits Times reporting on May 2026 Nature Metabolism paper' },
          { text: 'Nootropics communities like to wave these details away because they like positive results. This leads to an all too common scenario on nootropics forums where someone suffers from depression for months or years before realizing that their supplement stack containing cholinergic substances is making it worse.', attribution: 'HN id=47112719' },
        ],
        whyIncumbentsCantFix: 'Examine.com\'s human-curation is slow. Elicit/Consensus don\'t flag missing studies or industry-sponsorship bias. The "what\'s missing from the literature" question is meta and requires editorial judgment.',
        coverage: { status: 'partial', detail: 'foundr.bio surfaces "no human trials" flags + industry-sponsorship metadata + retraction watch. Editorial stance: side with skeptics, link the contrarian evidence prominently.' },
      },
    ],
  },

  'foundr-lifestyle': {
    strategicMoves: [
      { title: 'Ship the ACP/MCP product feed before the website', body: 'Be the first apparel brand on Anthropic\'s tool registry. When ChatGPT Instant Checkout / Stripe ACP hit critical mass, brands without agent feeds become invisible.', timing: 'Q1' },
      { title: 'Drop 1 = 200 units of a single hero piece', body: 'Heavyweight t-shirt, $85. Limit to existing Founder World users for 48h, then open. Prove sell-through, prove the agent-buy flow.', timing: 'Q1' },
      { title: 'Wire foundr.you taste profile to push a Slack/DM 24h before public drop', body: 'Pro tier autobuys. The agent-watches-the-drop primitive is the entire pitch.', timing: 'Q2' },
      { title: 'Provenance: signed card + on-chain record per garment', body: 'Use existing perea infra; no new chain. Each piece links back to its agent designer or human curator.', timing: 'Q2' },
      { title: 'Cap drops at 8–12/year', body: 'Don\'t compete with Supreme\'s weekly cadence — compete with ALD\'s restraint. The audience is exhausted by drop calendars.' },
      { title: 'Pro tier bundled at foundr.you Pro upgrade for 50% off year one', body: 'Drives attach across the ecosystem.', timing: 'Q3' },
      { title: 'Sign one co-drop with a respected operator', body: 'Levels.io, Marc Lou, a founder with an X audience >100K. Borrow tribe within 6 months.', timing: 'Q3' },
    ],
    moats: {
      hold: [
        { title: 'foundr.you taste graph + agent integration', body: 'Proprietary data nobody else has. Once a founder has 6+ months of style data, switching to a stylist like Astrid/Styl10 means re-onboarding.' },
        { title: 'Founder World audience as captive distribution channel', body: 'Zero-CAC compound. Lifestyle is the first foundr.* product where the customer base is captive.' },
        { title: 'ACP-first technical integration', body: '12–24 month lead over incumbents who still think of agents as a threat. Stripe ACP / Anthropic Tool Registry are the new picks-and-shovels.' },
      ],
      cannotHold: [
        { title: 'Fabric / silhouette / Pyca-like technical claims', body: 'Commodifiable in 1 season. Aelfric Eden can copy a Cuts fabric in 90 days.' },
        { title: 'Visual aesthetic alone', body: 'Copyable. Aelfric Eden copies ALD\'s aesthetic in 90 days; Buck Mason copies anything anyone ships.' },
        { title: 'Founder cult of personality', body: 'Pieter Levels proves the ceiling — single-persona brand caps at low-six-figures because brand IS Pieter.' },
      ],
      switchingFor: [
        'Taste profile lock-in — once foundr.you has 6+ months of style data, switching to Astrid/Styl10 means re-onboarding',
        'Provenance per piece creates a soft collection effect — you want the matching numbered piece from drop 3',
        'foundr.world credits stack only against foundr.lifestyle drops — credits-as-soft-loyalty',
      ],
      switchingAgainst: [
        'The garments themselves are physical and don\'t lock in — a competing brand with better fits wins',
        'Apparel resale market (StockX, Grailed) is liquid — pieces leave the ecosystem easily',
        'A horizontal AI-shopping agent (OpenAI Operator, Anthropic Tool) could in theory cross all brands',
      ],
    },
    synthesis: [
      { wedge: 'Agent-watches-the-drop + flags', segment: 'Founders exhausted by Supreme/ALD drop calendars', vulnerability: 'ALD/Supreme have no agent feed, no taste-profile binding', pain: '"I miss every drop because I\'m shipping at 11am Thursday"', status: 'shipped' },
      { wedge: 'MCP checkout with autobuy cap', segment: 'Founders who want to delegate shopping but cap the spend', vulnerability: 'No apparel brand exposes ACP-compliant checkout yet', pain: 'I want my agent to grab a size M tee under $80 without asking', status: 'partial' },
      { wedge: 'foundr.you taste profile binding', segment: 'Multi-product foundr.* users', vulnerability: 'No competitor has access to the founder\'s sizing + palette + brand-trust graph', pain: '"Every site asks me my size from scratch"', status: 'partial' },
      { wedge: 'Provenance per piece (NFC + signed record)', segment: 'Quiet-luxury + craft-signaling buyers', vulnerability: 'Only LV/Hermès do this; nobody does it in $40-$140 tier', pain: '"How do I know this was actually limited?"', status: 'partial' },
      { wedge: 'foundr.world credits cross-redemption', segment: 'Multi-product foundr.* users earning credits', vulnerability: 'No apparel brand has a sibling-product credit economy', pain: '"What can I spend foundr.world credits on?"', status: 'partial' },
      { wedge: 'Limited drops (no SKU sprawl)', segment: 'Buyers tired of True Classic-style infinite catalog', vulnerability: 'Cuts/True Classic optimize for always-in-stock — opposite shape', pain: '"Too many SKUs, I can\'t pick"', status: 'shipped' },
      { wedge: 'AI-native founder aesthetic', segment: 'Quiet-luxury × e/acc tribe', vulnerability: 'ALD reads Brooklyn-creative; Cuts reads gym-bro; Levels.io reads e/acc-only', pain: '"None of them speak to me as a builder who also wants taste"', status: 'shipped' },
      { wedge: 'Quote-tweet drop calendar', segment: 'X-native founder-creators', vulnerability: 'No competitor has a viral free-tier with social-graph attribution', pain: 'Drop calendars require Discord membership; I\'m on X', status: 'shipped' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Drop fatigue and restock burnout',
        quotes: [
          { text: 'Fatigue has fully settled in, and people are shopping at places they don\'t fully trust. With every brand coordinating drops, people are suffocated by constant newness.', attribution: 'Gavôn Owen — righthype.substack.com/p/the-post-hype-economy' },
          { text: 'It is the physical, mental, and emotional exhaustion that comes from sustained, high-intensity engagement with restocking activities. Waking up for early-morning drops and losing sleep. Feeling anxious about missing restocks during work, meals, or social events.', attribution: 'restock.blog/blog/restock-burnout-guide' },
          { text: 'FOMO-fatigue. Community sentiment, particularly within Reddit, indicates a growing skepticism. The audience is sophisticated; they recognize that when everything is special, nothing is.', attribution: 'fazbuy.com/blogs/news/the-end-of-brand-mythology' },
        ],
        whyIncumbentsCantFix: 'Supreme/ALD/Eric Emanuel\'s entire model is the drop calendar. Removing the FOMO mechanic removes the resale-economy halo. Cannot reposition without breaking the brand.',
        coverage: { status: 'shipped', detail: 'Agent watches the drop calendar for you. You literally cannot miss a piece you\'d like. Position as the anti-FOMO drop brand.' },
      },
      {
        label: 'B',
        title: 'Bots and resale ruin the actual drop',
        quotes: [
          { text: 'Bots have become a nuisance in the release of just about any hyped product that can be resold at a markup. Nike has said they can account for as much as 50 percent of raffle entries for some releases on its SNKRS app.', attribution: 'BoF — businessoffashion.com/articles/technology/how-brands-are-beating-bots' },
          { text: 'Hope no one buys this. Several users also reported website slowdowns and crashes during the launch period due to the overwhelming demand. Sold-out CKJK items being listed on resale platforms at significantly higher prices.', attribution: 'Sportskeeda — Jungkook x Calvin Klein review' },
          { text: 'It looks like people got crazy to get a Royal Pop to make money through resale, not because they are fans. People want money. Royal Pop is not like a cool product, but a way to make easy money.', attribution: 'Prof. Pierre-Yves Donze — cebudailynews.inquirer.net' },
        ],
        whyIncumbentsCantFix: 'Bots are an arms race; every CAPTCHA spawns a counter-bot. Real founder-aesthetic buyers lose to scalpers. Brand cannot solve without verified-buyer identity.',
        coverage: { status: 'shipped', detail: 'foundr.you verified identity required for checkout. Bots cannot replicate a real founder profile. Resale is allowed but provenance chip travels with the garment.' },
      },
      {
        label: 'C',
        title: 'Quality and customer-service collapse at hyped DTC brands',
        quotes: [
          { text: 'Above the Clouds. 71% of Trustpilot reviews are 1-star, with widespread reports of ignored emails, refused returns, and extreme refund delays. The jacket uses a cheap, unbranded plastic zipper instead of an industry-standard YKK®.', attribution: 'couponsscout.com/reviews/above-the-clouds-review-verdict' },
          { text: 'I returned my items for a refund and they will not process my refund.', attribution: 'BBB complaint on Aelfric Eden — bbb.org' },
          { text: 'On Trustpilot, the company averages a low rating, with hundreds of 1-star reviews citing delayed shipping, wrong orders, and unresponsive support.', attribution: 'Rockstar Original review — firmsuggest.com' },
        ],
        whyIncumbentsCantFix: 'High-margin DTC brands optimize for top-line; service is a cost center. Hyped drop brands compound this — every drop ships fast, returns process slow.',
        coverage: { status: 'shipped', detail: 'Made-to-last fabrics with named factories (Portugal / USA). YKK zippers as a hard requirement. 30-day exchange-for-size on every piece. Customer service handled by the founder for the first 1000 customers.' },
      },
      {
        label: 'D',
        title: 'Founder decision fatigue around getting dressed',
        quotes: [
          { text: 'You can\'t wear the same gray t-shirt to a pitch meeting at Andreessen Horowitz, a coworking session in Brooklyn, and a networking dinner at a rooftop bar in March.', attribution: 'Grey Journal — greyjournal.net/style/spring-capsule-wardrobe-2026-founder-guide' },
          { text: 'Navigating the complex maze of entrepreneurship, I was grappling with decision fatigue – that relentless fog where every choice feels like a hurdle. To clear my mind I made a decisive move to eliminate one decision – what to wear.', attribution: 'thedailydrip.com/post/how-a-capsule-wardrobe-relieved-decision-fatigue' },
          { text: 'I really want to clear my life to make it so that I have to make as few decisions as possible about anything except how to best serve this community.', attribution: 'Mark Zuckerberg — cnn.com/2012/10/03/tech/social-media/zuckerberg-today-show' },
        ],
        whyIncumbentsCantFix: 'Capsule-wardrobe brands (Buck Mason, Uniform) solve at SKU-sprawl level. Agentic stylists (Astrid, Styl10) solve at horizontal level. Nobody solves at the AI-native-founder-aesthetic intersection.',
        coverage: { status: 'shipped', detail: 'foundr.you taste profile + foundr.lifestyle drop watcher = personalized capsule wardrobe assembled by your agent. Limited runs mean no analysis paralysis.' },
      },
      {
        label: 'E',
        title: 'Online apparel discovery is fundamentally broken',
        quotes: [
          { text: 'Shopping isn\'t the problem — wearing what you bought is. The 7:30 am decision is already made.', attribution: 'Styl10 landing — styl10.ai/ai-stylist-for-women' },
          { text: 'All the research, none of the rabbit holes. Astrid eliminates the tedious stuff—filtering through thousands of options, checking sizing across brands, opening seventeen browser tabs.', attribution: 'astrid.style' },
          { text: 'r/malefashionadvice drew 498 million views over the past year, up 175 per cent year-over-year. They\'re advice communities for people who don\'t really know where to start.', attribution: 'Vogue — vogue.com/article/men-are-using-reddit-to-shop' },
        ],
        whyIncumbentsCantFix: 'Generic AI stylists (Astrid, Styl10) work across all brands but don\'t make brand decisions. Apparel brands themselves don\'t expose agent feeds. The wedge requires both halves.',
        coverage: { status: 'shipped', detail: 'foundr.lifestyle is both the brand (limited drops, founder aesthetic) AND the agent surface (ACP feed, taste-match, autobuy cap). One vendor, both halves.' },
      },
    ],
  },
}
