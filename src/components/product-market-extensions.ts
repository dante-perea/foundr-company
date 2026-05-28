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
      { title: 'Kill per-seat for agents — flat per-founder', body: 'Per-seat is "a dead man walking for AI-augmented SaaS" (Upverdict). "Your agents don\'t have butts" (artisancraft.dev). Solo $20 / Pro $95 — make "unlimited agents on your tower" the explicit anti-Jira/Linear wedge.' },
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
      { wedge: 'Flat $20/$95 vs per-seat tax', segment: 'Solo + 2-3 person teams burned by Asana/ClickUp/Linear seat math', vulnerability: 'Per-seat pricing is "structurally broken" for AI-augmented orgs', pain: 'Adding agents or a contractor doesn\'t bump the bill', status: 'shipped' },
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
        coverage: { status: 'shipped', detail: 'Solo $20 / Pro $95 flat with unlimited agents. Messaging needs to sharpen the wedge.' },
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
      { title: 'Lead with the per-PR price tag, not the monthly tier', body: 'Cursor\'s "$20 seat that became $500 in 3 days," Devin\'s "$20 plan that gets invoiced for $400" have made *predictability* the single most under-supplied attribute. Put "$X / merged PR, quoted before the crew picks up the ticket" on every surface.', timing: 'Q3' },
      { title: 'Make BYO key the headline plan benefit', body: 'Ivern\'s April 2026 survey: BYOK adoption doubled from 18% → 36% in one quarter. Warp, Cline, OSS gateways normalized it. Frame Solo $29 as "your Anthropic/OpenAI key, our crew, $29 flat — we make zero margin on tokens."' },
      { title: 'Build the crew around a "manager + spawnable workers" pattern', body: 'Stack Overflow May 2026 pulse: 68% of agent users prefer single-agent simplicity because multi-agent leaks coordination. Make the manager the only thing they talk to, show PR-level audit trails for each worker.' },
      { title: 'Target the 10–50-small-repos solo founder segment by repo count, not seat count', body: 'Kapil Paliwal ("10 SaaS products solo"), Loic Moncany ("4 SaaS at once"). Build the dashboard around repos managed and PRs shipped per repo, not "messages used."' },
      { title: 'Ship a free quote-tweet tier with a hard, transparent ceiling', body: 'Cursor\'s reputational damage comes from invisible overages on a "Pro" plan. A free tier that CANNOT surprise-bill is the trust-establishing wedge. Devin/Cursor cannot copy without cannibalising seats.' },
      { title: 'Publish a public "Crew Incident Ledger"', body: 'The April 2026 PocketOS database-deletion incident and Cursor "37GB wipe" forensic post are now reference docs in every procurement conversation. Pre-empting the trust question with radical transparency is cheaper than recovering from one viral incident.' },
      { title: 'Lock down the BYO-key trust story with a third-party security audit', body: 'A SOC2 + audited "we never see plaintext keys" claim closes enterprise deals that would otherwise stall at procurement.' },
    ],
    moats: {
      hold: [
        { title: 'Per-PR atomic pricing as a product, not a price page', body: 'Cursor and Devin cannot ship this without breaking the ACU/credit revenue model their boards already underwrote — Devin just raised at $26B on the ACU thesis.' },
        { title: 'Multi-repo crew memory as the founder\'s persistent context', body: '10–50 small repos is a workload Cursor\'s per-window context and Devin\'s per-session VM both fight against. The longer founders use foundr.work, the more crew memory accumulates — switching cost compounds per repo.' },
        { title: 'Quote-tweet activation as an unforgeable distribution channel', body: 'Cursor and Devin\'s incumbency is built on enterprise seat sales; a viral solo-dev acquisition motion is absent from their playbook AND would cannibalise the seat-based ARR Wall Street is paying for.' },
      ],
      cannotHold: [
        { title: '"Multi-agent orchestration"', body: 'Cursor 3.2 shipped /multitask async subagents (April 2026); d3n architecture is open-source from a Cognition hackathon; RepoOrch / Agent Karen / just-ship are all OSS. The pattern is commoditised.' },
        { title: '"BYO model key"', body: 'Warp, Cline, byokey, BYO can do this in a weekend. Requirement, not a moat.' },
        { title: '"Async, ships PRs"', body: 'Devin, Cursor Background Agents, Shippy, TicketToPR, Kill-The-Backlog all open PRs from a backlog. Table stakes by mid-2026.' },
      ],
      switchingFor: [
        'Crew memory across N repos compounds per merged PR; exporting the equivalent context to Cursor/Devin is a from-scratch rebuild per repo',
        'Per-PR pricing history becomes an audit/forecast asset (CFO-friendly), unlike Cursor invoice CSVs',
      ],
      switchingAgainst: [
        'Cursor and Copilot live in the editor — `Cmd+K` muscle memory is unbeaten',
        'GitHub Copilot\'s $19 seat is bundled into Microsoft EAs; enterprise procurement defaults to "we already pay for it"',
      ],
    },
    synthesis: [
      { wedge: 'Per-PR quote before pickup', segment: 'Solo founders, 10–50 repos', vulnerability: 'Devin ACU and Cursor cache-token bills are unforecastable; "$20 plan, $400 invoice" is the meme', pain: '"I didn\'t agree to this" / "$500 in 3 days"', status: 'shipped' },
      { wedge: 'BYO key with zero margin on tokens', segment: 'AI-native founders who already hold Anthropic/OpenAI credits', vulnerability: 'Cursor/Devin/Copilot all monetise the inference markup', pain: 'I\'m paying twice — once for the IDE, once for the model it calls', status: 'shipped' },
      { wedge: 'Manager-pattern crew over N repos', segment: 'Founders running 3+ small repos', vulnerability: 'Cursor Agents Window is per-workspace; multi-root disables cloud agents; Devin is per-session VM', pain: '62% of Ivern respondents: "keeping track of what each agent is doing"; 41% lost work to miscoordination', status: 'shipped' },
      { wedge: 'Free quote-tweet tier with hard ceiling', segment: 'Devs burned by surprise bills', vulnerability: 'Cursor refunds are denied as "policy"; trust deficit is structural', pain: 'I had a spend cap. The problem is that prepaid usage got consumed in a way impossible to see', status: 'shipped' },
      { wedge: 'Public per-PR audit ledger', segment: 'Buyers who saw PocketOS / 37GB-wipe headlines', vulnerability: 'Cursor\'s response to incidents is post-hoc forum threads; no proactive transparency surface', pain: 'Deleting a database volume is the most destructive action possible — and you never asked', status: 'shipped' },
      { wedge: 'Crew memory persisted across repos', segment: 'Founders whose CLAUDE.md / AGENTS.md drifts across tools', vulnerability: 'Cursor forum: "AGENTS.md gets stale… agents follow it with confidence and you waste a cycle"', pain: 'Memory rot across tools is a constant background tax', status: 'partial', note: 'Status SOON' },
      { wedge: 'Async work without IDE babysitting', segment: 'Founders who want to assign at night, review in morning', vulnerability: 'Cursor agents top out ~20min before needing input; Devin works but bills $11–$45 per task with no pre-quote', pain: 'Cursor agent mode tops out around 20 min; Devin can spend 60+ at unpredictable cost', status: 'partial' },
      { wedge: 'No per-seat tax on the second human or the agent itself', segment: '2-person dev shops, indie + contractor', vulnerability: 'Cursor Teams ($40/seat with only $20 of usage); Copilot Business ($19/seat + AI Credits overage)', pain: 'Cursor billed us $450 for a seat that existed for seconds', status: 'shipped' },
    ],
    powerUserPain: [
      {
        label: 'A',
        title: 'Surprise billing on plans marketed as "capped"',
        quotes: [
          { text: 'My usage went from a steady ~$60–100/month to $500+ in a few days, projecting ~$1,600/month. Support told me this was expected.', attribution: 'HN user, Cursor Ultra cancellation, id=46544838' },
          { text: 'I have been charged $500 in 3 days, which I didn\'t put a limit for, for a "new" pricing plan I didn\'t ask for.', attribution: 'Reddit r/cursor' },
          { text: 'We\'ve watched teams budget for $20 and get invoiced for $400. The gap isn\'t a scam — it\'s a mismatch between what the plan page says and how autonomous agents behave.', attribution: 'Brainroad, Devin Pricing 2026' },
        ],
        whyIncumbentsCantFix: 'Cursor\'s revenue depends on prompt-cache token replay it doesn\'t surface; Devin\'s $26B valuation is underwritten by the ACU model that produces these bills.',
        coverage: { status: 'shipped', detail: 'Per-PR quoted before pickup; the unit of billing matches the unit of work, and the quote is the cap.' },
      },
      {
        label: 'B',
        title: 'Paying the model vendor twice',
        quotes: [
          { text: 'BYOK adoption doubled from 18% in January to 36% in April 2026.', attribution: 'Ivern AI 2026 Developer Survey (n=312)' },
          { text: 'Warp never consumes your AI credits for requests routed through your own keys.', attribution: 'Warp BYOK docs' },
          { text: 'Anthropic rewrote enterprise pricing in April 2026 — agent-heavy teams are reporting 7-50x increases.', attribution: 'OpenClaw DC, April 18 2026' },
        ],
        whyIncumbentsCantFix: 'Cursor, Devin, Copilot all earn margin on inference resale; making BYO the default cannibalises the unit economics that justify their seat prices.',
        coverage: { status: 'shipped', detail: 'BYO model key is default on Solo $29; foundr.work makes zero margin on tokens and says so on the pricing page.' },
      },
      {
        label: 'C',
        title: 'Multi-agent coordination loss across multiple repos',
        quotes: [
          { text: '41% have lost work due to agent miscoordination… 62%: "keeping track of what each agent is doing."', attribution: 'Ivern 2026 Survey' },
          { text: 'Cursor indexes and searches the repository that is currently open. It does not have native awareness of sibling repositories.', attribution: 'Developer Toolkit, May 2026' },
          { text: 'Worktree agents sometimes unexpectedly create new workspaces or switch to unrelated branches mid-session.', attribution: 'Cursor staff response, forum thread 152512' },
        ],
        whyIncumbentsCantFix: 'Cursor\'s architecture is workspace-scoped; Devin is session-scoped per VM. Both would need to rebuild around a cross-repo manager pattern.',
        coverage: { status: 'shipped', detail: 'Manager-pattern crew with shared memory across all repos a founder registers; per-PR audit log shows which worker touched which repo when.' },
      },
      {
        label: 'D',
        title: 'Async work that requires synchronous babysitting',
        quotes: [
          { text: 'Cursor\'s agent mode tops out around 20 minutes before needing user input.', attribution: 'aiagentrank.io, Devin vs Cursor 2026' },
          { text: 'Cognition measured that agent success rates decrease after 35 minutes of continuous operation. Doubling task duration quadruples the failure rate.', attribution: 'Morph, Cursor Context Window 2026' },
          { text: '82% would use a mobile interface to monitor long-running agents.', attribution: 'Tactic Remote 2026 Developer Survey' },
        ],
        whyIncumbentsCantFix: 'Cursor is editor-resident by design; Devin\'s audit UI requires the dashboard. Neither is built around the asynchronous PR-review surface where solo founders already live.',
        coverage: { status: 'partial', detail: 'Async PR shipping is the product thesis; the manager pattern pushes work into PRs the founder reviews in GitHub.' },
      },
      {
        label: 'E',
        title: 'Per-seat pricing taxing agents and second humans',
        quotes: [
          { text: 'Cursor billed us $450 for a seat that existed for seconds.', attribution: 'HN, item 47381336' },
          { text: 'Per-seat pricing is fading fast for autonomous agents — 67% of vendors will move off it by 2027 (Gartner).', attribution: 'Bananalabs, April 2026' },
          { text: 'Adding a new team member to the workspace costs $15/month for the AI agent, there\'s a subtle pressure to restrict access.', attribution: 'Helenmireille, Medium, March 2026' },
        ],
        whyIncumbentsCantFix: 'GitHub Copilot Business is structurally per-seat; Cursor Teams charges $40/seat for $20 of usage. Their ARR is reported to investors on seat count.',
        coverage: { status: 'shipped', detail: 'Solo $29 and Pro $199 are flat per founder, not per seat; the crew (multiple agents) is included; collaborators don\'t incur seats.' },
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
}
