---
layout: layouts/page.njk
title: Stablecoin AML screening for USDT and USDC
fullTitle: Width DART | Stablecoin AML screening, KYT and address risk for USDT & USDC
description: DART screens USDT and USDC flows in time order, so exchanges, wallets and payment companies keep tainted funds out without false alarms. Sanctions checks in under a second. Free until 31 December 2028.
sections:
  - type: hero
    eyebrow: WIDTH DART · STABLECOIN RISK SCREENING
    title: Know where the money came from <em>before you accept it</em>
    lead: DART is onchain risk screening built for USDT and USDC. It follows funds hop by hop in time order, so only money that actually arrived before it moved on counts as exposure. Exchanges, wallets and payment companies use it to keep bad funds out without blocking good customers.
    ctas:
      - { label: Get free access, href: /contact/ }
      - { label: See how it works, href: "#how" }
    note: Free until 31 December 2028 · Console, API and MCP included
    visual: flow
    stats:
      - { value: 300K+, label: API calls a day in production }
      - { value: "< 1", unit: s, label: sanctions screening response }
      - { value: 200M, label: "labeled addresses, with sanctions, freeze and hack labels kept current" }
      - { value: Same day, label: "FinCEN 9714 order published, ruleset live" }

  - type: audiences
    id: who
    eyebrow: Start with your business
    title: What kind of team are you? Here's the problem we solve for you
    lead: One data layer and one engine, set up for the exact points where your business takes on risk.
    items:
      - label: Exchanges
        title: Screen every deposit and withdrawal, without false alarms
        text: Check where deposits came from and where withdrawals are going. Paths that can't have happened in time are dropped, so your compliance team only works the cases that matter.
        points:
          - "**Deposits judged in time order**: only funds that arrived before they moved on are counted"
          - "**Exchange counterparties are exempt by default**, so another exchange's users never drag you in"
          - "**New rules the same day**: the FinCEN 9714 order was published on 6 November, and a built-in ruleset was live that same day"
          - Every result carries its risk path and an immutable snapshot, ready for your regulator
        href: /solutions/exchanges/
        link: Solutions for exchanges
      - label: Wallets
        title: Warn users before they send, and after they receive
        text: Wallet users mostly hold and move USDT and USDC. One accurate warning at the moment of sending or receiving is the most direct protection a wallet can give.
        points:
          - "**Before send**: flag recipients tied to sanctions, terrorist financing or scams"
          - "**After receive**: alert users when incoming funds trace back to frozen, hacked or scam funds, before their own balance gets caught in a freeze"
          - "**Safety that pays for itself**: one platform bundles DART into a paid membership"
          - A leading self-custody wallet went from first calls to 70,000+ screenings a day within a week
        href: /solutions/wallets/
        link: Solutions for wallets
      - label: Payments & cards
        title: Keep tainted funds out of card schemes and fiat rails
        text: Screen the source of funds before a card top-up, an off-ramp or a merchant payout. When your bank or card scheme asks, every decision has evidence behind it.
        points:
          - "**Screen before funds land**: sanctions, issuer freezes, hacks and scams are tiered, not lumped together"
          - "**Four dispositions, not block-all**: pass, review, enhanced due diligence, block, with thresholds you set"
          - "**Rulesets per banking partner** or card scheme requirement"
          - Every screening is saved as an immutable snapshot for reconciliation and audit
        href: /solutions/payments/
        link: Solutions for payments
      - label: Custody & WaaS
        title: KYA and KYT, built in for every client you serve
        text: Every business on your platform needs deposit and withdrawal screening. Integrate DART once and your clients don't have to buy their own.
        points:
          - "**Automatic screening for every enterprise wallet**, with results kept per client"
          - "**MPC sweep setups** come with a ready integration guide"
          - A wallet and custody infrastructure provider screens 17,000–18,000 transfers every working day
          - Console, API and CSV batch share one account
        href: /solutions/custody/
        link: Solutions for custody
      - label: Law enforcement
        title: Turn scattered transfers into one complete money trail
        text: Start from a single address, follow the funds across hops and chains, and export tracing reports you can use in a case.
        points:
          - "**Fund tracing**: hop-by-hop upstream and downstream, with cross-chain USDC tracing via CCTP"
          - "**Case support**: our analysts write tracing reports for priority cases and prepare evidence packs for freeze requests"
          - "**Hands-on training** in onchain tracing for investigators"
          - Accounts opened after identity verification; every query is logged
        href: /partners/lea/
        link: Partner with us
      - label: Individuals
        title: Check an address before you receive USDT
        text: "The question OTC buyers, merchants and individuals ask most: is this address safe? And if my USDT was frozen, why?"
        points:
          - "**Address check**: paste an address, the chain and token are detected, you get a three-level answer"
          - "**Freeze check**: has this address been frozen by a stablecoin issuer, and when"
          - We only report which public sources matched. We never label a person's address
        href: /check/
        link: About the address check

  - type: problems
    id: problems
    tone: alt
    eyebrow: Problems we solve
    title: Six problems compliance teams run into every day
    lead: Each one maps to a specific design choice in DART, with evidence from production.
    items:
      - problem: Too many false alarms burying compliance and support
        detail: Ignore time and almost any address touches a risky one within a few hops.
        solution: |
          - Each hop only counts if the funds **arrived before they moved on**; paths that run backwards in time are dropped
          - **Exposure is weighed by share of funds**, with a higher bar the further away it is: by default 5% / 10% / 15% / 20% at hops 2 / 3 / 4 / 5
          - **Exchange counterparties are exempt by default**, so another exchange's users don't drag you in
        proof: "A payment company's side-by-side test: for the same address another tool said \"medium-low risk, needs review\"; DART scored it 0 and passed it. Broken down transfer by transfer, the risky funds could never have reached it in time."
      - problem: Accepting tainted funds and getting frozen with them
        detail: If incoming USDT came from frozen, hacked or scam funds, the freeze can land on you and your users.
        solution: |
          - Screen the source before you credit: **issuer freezes, sanctions, hacks and scams** are each identified and weighted
          - Four dispositions: pass, review, enhanced due diligence, block; at EDD you ask the user for source of funds
        proof: Stablecoin issuer-freeze labels are live in production.
      - problem: New rules land faster than you can update yours
        detail: Official lists and enforcement orders change constantly. Maintaining rules in-house can't keep up.
        solution: |
          - Every rule is readable; copy a built-in ruleset and change anything
          - We turn new official actions into **built-in rulesets** you can switch on
        proof: The FinCEN 9714 order was published on 6 November; DART shipped a built-in ruleset the same day.
      - problem: The regulator asks why you blocked it, and you can't say
        detail: A bare score with no reasoning leaves internal reviews and inspections on the back foot.
        solution: |
          - **Every point maps to a rule**: which path, which hop, how much, what share, how many points
          - Every screening is saved as an **immutable snapshot**, with the ruleset version it ran on
        proof: Pull the exact snapshot from the console or API whenever an auditor asks.
      - problem: Slow checks that stall user transfers
        detail: A pre-send check that takes a few seconds too long costs you users.
        solution: |
          - **Sanctions screening returns in under a second**
          - Sync calls return the result directly; deep traces on very active addresses can run async without blocking the flow
        proof: 300,000–400,000 API calls a day in production.
      - problem: Chain-hopping and multi-chain addresses slip through
        detail: An EVM address is the same wallet on every EVM chain. Checking one chain proves nothing about the others.
        solution: |
          - **Paste and check**: DART finds every chain and token the address has stablecoin flow on, and screens USDT and USDC in one go
          - USDC transfers are followed **across chains via CCTP**
        proof: 11 chains covered; one address, every lane with flow, one call.

  - type: steps
    id: how
    eyebrow: How it works
    title: One screening, four steps to a decision
    lead: The path-matching ruleset decides what counts as a violation. The scoring ruleset decides how serious it is and what to do. You can change both.
    items:
      - { label: INPUT, title: Submit an address or transaction, text: An address (KYA) or a transaction hash (KYT). Chain and token are detected for you. }
      - { label: STEP 01, title: Build the fund-flow graph in time order, text: Expand upstream and downstream hop by hop with a label on every counterparty; keep only paths that work in time. }
      - { label: STEP 02, title: Match the rules, text: 72 rules decide which fund-flow paths count as violations, and which rule each one breaks. }
      - { label: STEP 03, title: Score by share of funds, text: "Direction, hop distance, severity and share of funds become a 0–100 score." }
      - { label: OUTPUT, title: A disposition with evidence, text: "Pass, review, EDD or block, with the hit list and a snapshot." }

  - type: split
    eyebrow: Explainable
    title: Every point has a reason
    text: The result isn't a black-box number. Which path hit, at which hop, how much money, what share and how many points are all in the result, and excluded paths say why they were excluded.
    points:
      - "**Four dispositions**: 0–19 pass, 20–49 review, 50–79 EDD, 80–100 block, all adjustable"
      - "**Rules you can change**: built-in rulesets are read-only; clone one and edit any condition or weight"
      - "**Evidence on file**: every screening is stored as a snapshot you can pull back any time"
    ctas:
      - { label: Rulesets & scoring, href: /products/rulesets/, style: ghost }
    visual: result

  - type: cases
    tone: alt
    eyebrow: In production
    title: Teams already running on DART
    items:
      - tag: Wallet
        metric: 70,000+
        metricLabel: screenings a day, within a week of going live
        title: A leading self-custody wallet
        text: On the day the FinCEN 9714 order was published, it could flag related funds in deposits and withdrawals. Hop depth and other settings are tuned to its own risk policy.
      - tag: Social · payments
        metric: Paid tier
        metricLabel: safety turned into revenue
        title: A Web3 social platform
        text: Bundled DART into its paid membership. Every incoming and outgoing transfer is fully checked, so members don't send USDT to terrorist-financing addresses.
      - tag: Custody · WaaS
        metric: 17–18K
        metricLabel: screenings every working day
        title: A wallet and custody infrastructure provider
        text: Screens every deposit and withdrawal for its enterprise wallets. Its clients get KYA and KYT out of the box instead of buying their own.
    note: Customer names withheld for confidentiality. Figures from DART production data, November 2026.

  - type: split
    reverse: true
    eyebrow: For AI agents
    title: Let your AI agent check addresses
    text: DART runs an MCP server with 19 typed tools for screening, reading results and managing rulesets. Plug it into Claude, Cursor, Codex or any agent. Console, API and MCP share one account and the same snapshots.
    points:
      - Ask your agent to screen an address and explain the result
      - Let it draft and edit rulesets for you
      - llms.txt, OpenAPI 3.1 and a ready-made agent skill included
    ctas:
      - { label: Developer docs, href: /developers/, style: ghost }
    visual: code
    code:
      title: mcp.json
      body: |
        {
          "mcpServers": {
            "width-dart": {
              "url": "https://api.width.live/mcp",
              "headers": {
                "Authorization": "Bearer <YOUR_API_KEY>"
              }
            }
          }
        }

  - type: cards
    eyebrow: Width Data
    title: Public data, kept current
    lead: Public trackers built on the same onchain data. Each one ships with a methodology note and uses only public, traceable event-level data.
    columns: 3
    items:
      - { tag: Daily, title: Stablecoin freeze tracker, text: Addresses and amounts frozen by issuers, by chain and by week., href: /data/#freeze, link: View tracker }
      - { tag: Weekly, title: Security incidents, text: "Hacks and exploits ranked by loss, with where the funds went: unmoved, bridged, sent to exchanges, frozen.", href: /data/#incidents, link: View tracker }
      - { tag: On every new action, title: Sanctions & enforcement actions, text: "New OFAC, FinCEN and UN listings, and how many onchain addresses they involve.", href: /data/#sanctions, link: View tracker }

  - type: posts
    eyebrow: Blog
    title: Latest articles
    limit: 3

  - type: cta
    eyebrow: Free access
    title: Run it <em>next to your current tools</em>
    text: Nothing to switch off. Send us a batch of historical addresses (anonymized is fine) and judge the results yourself.
    points:
      - We return a result and risk path for every address, with a **diff against your current tools**
      - Stablecoins on DART, other assets stay where they are
      - Free until **31 December 2028**, with engineers on hand in a shared group
    ctas:
      - { label: Get free access, href: /contact/ }
      - { label: Read the docs, href: "https://width.info/docs" }
---
