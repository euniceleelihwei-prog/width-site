---
layout: layouts/page.njk
title: Stablecoin AML screening for USDT and USDC
fullTitle: Width DART | Stablecoin AML screening, KYT and address risk for USDT & USDC
description: DART screens USDT and USDC flows in time order, so exchanges, wallets and payment companies keep tainted funds out without false alarms. Sanctions checks in under a second. Free until 31 December 2028.
sections:
  - type: hero
    eyebrow: WIDTH DART · Stablecoin risk screening
    title: Know Where the Money Came from <em>Before You Accept It</em>
    lead: DART is onchain risk screening built for USDT and USDC. It follows funds hop by hop in time order, so only money that actually arrived before it moved on counts as exposure. Exchanges, wallets and payment companies use it to keep bad funds out without blocking good customers.
    ctas:
      - { label: Get Free Access, href: /contact/ }
      - { label: See How It Works, href: "#how" }
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
    title: What Kind of Team Are You? Here's the Problem We Solve for You
    lead: One data layer and one engine, set up for the exact points where your business takes on risk.
    items:
      - label: Exchanges
        title: Screen Every Deposit and Withdrawal, Without False Alarms
        text: Check where deposits came from and where withdrawals are going. Paths that can't have happened in time are dropped, so your compliance team only works the cases that matter.
        points:
          - "**Deposits judged in time order**: only funds that arrived before they moved on are counted"
          - "**Exchange counterparties are exempt by default**, so another exchange's users never drag you in"
          - "**New rules the same day**: the FinCEN 9714 order was published on 6 November, and a built-in ruleset was live that same day"
          - Every result carries its risk path and an immutable snapshot, ready for your regulator
        href: /solutions/exchanges/
        link: Solutions for Exchanges
      - label: Wallets
        title: Warn Users Before They Send, and After They Receive
        text: Wallet users mostly hold and move USDT and USDC. One accurate warning at the moment of sending or receiving is the most direct protection a wallet can give.
        points:
          - "**Before send**: flag recipients tied to sanctions, terrorist financing or scams"
          - "**After receive**: alert users when incoming funds trace back to frozen, hacked or scam funds, before their own balance gets caught in a freeze"
          - "**Safety that pays for itself**: one platform bundles DART into a paid membership"
          - A leading self-custody wallet went from first calls to 70,000+ screenings a day within a week
        href: /solutions/wallets/
        link: Solutions for Wallets
      - label: Payments & Cards
        title: Keep Tainted Funds Out of Card Schemes and Fiat Rails
        text: Screen the source of funds before a card top-up, an off-ramp or a merchant payout. When your bank or card scheme asks, every decision has evidence behind it.
        points:
          - "**Screen before funds land**: sanctions, issuer freezes, hacks and scams are tiered, not lumped together"
          - "**Four dispositions, not block-all**: pass, review, enhanced due diligence, block, with thresholds you set"
          - "**Rulesets per banking partner** or card scheme requirement"
          - Every screening is saved as an immutable snapshot for reconciliation and audit
        href: /solutions/payments/
        link: Solutions for Payments
      - label: Custody & WaaS
        title: KYA and KYT, Built In for Every Client You Serve
        text: Every business on your platform needs deposit and withdrawal screening. Integrate DART once and your clients don't have to buy their own.
        points:
          - "**Automatic screening for every enterprise wallet**, with results kept per client"
          - "**MPC sweep setups** come with a ready integration guide"
          - A wallet and custody infrastructure provider screens 17,000–18,000 transfers every working day
          - Console, API and CSV batch share one account
        href: /solutions/custody/
        link: Solutions for Custody
      - label: Law Enforcement
        title: Turn Scattered Transfers Into One Complete Money Trail
        text: Start from a single address, follow the funds across hops and chains, and export tracing reports you can use in a case.
        points:
          - "**Fund tracing**: hop-by-hop upstream and downstream, with cross-chain USDC tracing via CCTP"
          - "**Case support**: our analysts write tracing reports for priority cases and prepare evidence packs for freeze requests"
          - "**Hands-on training** in onchain tracing for investigators"
          - Accounts opened after identity verification; every query is logged
        href: /partners/lea/
        link: Partner with Us
      - label: Individuals
        title: Check an Address Before You Receive USDT
        text: "The question OTC buyers, merchants and individuals ask most: is this address safe? And if my USDT was frozen, why?"
        points:
          - "**Address check**: paste an address, the chain and token are detected, you get a three-level answer"
          - "**Freeze check**: has this address been frozen by a stablecoin issuer, and when"
          - We only report which public sources matched. We never label a person's address
        href: /check/
        link: About the Address Check

  - type: problems
    id: problems
    tone: alt
    eyebrow: Problems we solve
    title: Six Problems Compliance Teams Run Into Every Day
    lead: Each one maps to a specific design choice in DART, with evidence from production.
    items:
      - problem: Too Many False Alarms Burying Compliance and Support
        detail: Ignore time and almost any address touches a risky one within a few hops.
        solution: |
          - Each hop only counts if the funds **arrived before they moved on**; paths that run backwards in time are dropped
          - **Exposure is weighed by share of funds**, with a higher bar the further away it is: by default 5% / 10% / 15% / 20% at hops 2 / 3 / 4 / 5
          - **Exchange counterparties are exempt by default**, so another exchange's users don't drag you in
        proof: "A payment company's side-by-side test: for the same address another tool said \"medium-low risk, needs review\"; DART scored it 0 and passed it. Broken down transfer by transfer, the risky funds could never have reached it in time."
      - problem: Accepting Tainted Funds and Getting Frozen with Them
        detail: If incoming USDT came from frozen, hacked or scam funds, the freeze can land on you and your users.
        solution: |
          - Screen the source before you credit: **issuer freezes, sanctions, hacks and scams** are each identified and weighted
          - Four dispositions: pass, review, enhanced due diligence, block; at EDD you ask the user for source of funds
        proof: Stablecoin issuer-freeze labels are live in production.
      - problem: New Rules Land Faster Than You Can Update Yours
        detail: Official lists and enforcement orders change constantly. Maintaining rules in-house can't keep up.
        solution: |
          - Every rule is readable; copy a built-in ruleset and change anything
          - We turn new official actions into **built-in rulesets** you can switch on
        proof: The FinCEN 9714 order was published on 6 November; DART shipped a built-in ruleset the same day.
      - problem: The Regulator Asks Why You Blocked It, and You Can't Say
        detail: A bare score with no reasoning leaves internal reviews and inspections on the back foot.
        solution: |
          - **Every point maps to a rule**: which path, which hop, how much, what share, how many points
          - Every screening is saved as an **immutable snapshot**, with the ruleset version it ran on
        proof: Pull the exact snapshot from the console or API whenever an auditor asks.
      - problem: Slow Checks That Stall User Transfers
        detail: A pre-send check that takes a few seconds too long costs you users.
        solution: |
          - **Sanctions screening returns in under a second**
          - Sync calls return the result directly; deep traces on very active addresses can run async without blocking the flow
        proof: 300,000–400,000 API calls a day in production.
      - problem: Chain-Hopping and Multi-Chain Addresses Slip Through
        detail: An EVM address is the same wallet on every EVM chain. Checking one chain proves nothing about the others.
        solution: |
          - **Paste and check**: DART finds every chain and token the address has stablecoin flow on, and screens USDT and USDC in one go
          - USDC transfers are followed **across chains via CCTP**
        proof: 11 chains covered; one address, every lane with flow, one call.

  - type: steps
    id: how
    eyebrow: How it works
    title: One Screening, Four Steps to a Decision
    lead: The path-matching ruleset decides what counts as a violation. The scoring ruleset decides how serious it is and what to do. You can change both.
    items:
      - { label: Input, title: Submit an Address or Transaction, text: An address (KYA) or a transaction hash (KYT). Chain and token are detected for you. }
      - { label: Step 1, title: Build the Fund-Flow Graph in Time Order, text: Expand upstream and downstream hop by hop with a label on every counterparty; keep only paths that work in time. }
      - { label: Step 2, title: Match the Rules, text: 72 rules decide which fund-flow paths count as violations, and which rule each one breaks. }
      - { label: Step 3, title: Score by Share of Funds, text: "Direction, hop distance, severity and share of funds become a 0–100 score." }
      - { label: Output, title: A Disposition with Evidence, text: "Pass, review, EDD or block, with the hit list and a snapshot." }

  - type: split
    eyebrow: Explainable
    title: Every Point Has a Reason
    text: The result isn't a black-box number. Which path hit, at which hop, how much money, what share and how many points are all in the result, and excluded paths say why they were excluded.
    points:
      - "**Four dispositions**: 0–19 pass, 20–49 review, 50–79 EDD, 80–100 block, all adjustable"
      - "**Rules you can change**: built-in rulesets are read-only; clone one and edit any condition or weight"
      - "**Evidence on file**: every screening is stored as a snapshot you can pull back any time"
    ctas:
      - { label: Rulesets & Scoring, href: /products/rulesets/, style: ghost }
    visual: result

  - type: cases
    tone: alt
    eyebrow: In production
    title: Teams Already Running on DART
    items:
      - tag: Wallet
        metric: 70,000+
        metricLabel: screenings a day, within a week of going live
        title: A Leading Self-Custody Wallet
        text: On the day the FinCEN 9714 order was published, it could flag related funds in deposits and withdrawals. Hop depth and other settings are tuned to its own risk policy.
      - tag: Social · payments
        metric: Paid tier
        metricLabel: safety turned into revenue
        title: A Web3 Social Platform
        text: Bundled DART into its paid membership. Every incoming and outgoing transfer is fully checked, so members don't send USDT to terrorist-financing addresses.
      - tag: Custody · WaaS
        metric: 17–18K
        metricLabel: screenings every working day
        title: A Wallet and Custody Infrastructure Provider
        text: Screens every deposit and withdrawal for its enterprise wallets. Its clients get KYA and KYT out of the box instead of buying their own.
    note: Customer names withheld for confidentiality. Figures from DART production data, November 2026.

  - type: split
    reverse: true
    eyebrow: For AI agents
    title: Let Your AI Agent Check Addresses
    text: DART runs an MCP server with 19 typed tools for screening, reading results and managing rulesets. Plug it into Claude, Cursor, Codex or any agent. Console, API and MCP share one account and the same snapshots.
    points:
      - Ask your agent to screen an address and explain the result
      - Let it draft and edit rulesets for you
      - llms.txt, OpenAPI 3.1 and a ready-made agent skill included
    ctas:
      - { label: Developer Docs, href: /developers/, style: ghost }
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
    title: Public Data, Kept Current
    lead: Public trackers built on the same onchain data. Each one ships with a methodology note and uses only public, traceable event-level data.
    columns: 3
    items:
      - { tag: Daily, title: Stablecoin Freeze Tracker, text: Addresses and amounts frozen by issuers, by chain and by week., href: /data/#freeze, link: View Tracker }
      - { tag: Weekly, title: Security Incidents, text: "Hacks and exploits ranked by loss, with where the funds went: unmoved, bridged, sent to exchanges, frozen.", href: /data/#incidents, link: View Tracker }
      - { tag: On every new action, title: Sanctions & Enforcement Actions, text: "New OFAC, FinCEN and UN listings, and how many onchain addresses they involve.", href: /data/#sanctions, link: View Tracker }

  - type: posts
    eyebrow: Blog
    title: Latest Articles
    limit: 3

  - type: cta
    eyebrow: Free access
    title: Run It <em>Next to Your Current Tools</em>
    text: Nothing to switch off. Send us a batch of historical addresses (anonymized is fine) and judge the results yourself.
    points:
      - We return a result and risk path for every address, with a **diff against your current tools**
      - Stablecoins on DART, other assets stay where they are
      - Free until **31 December 2028**, with engineers on hand in a shared group
    ctas:
      - { label: Get Free Access, href: /contact/ }
      - { label: Read the Docs, href: "https://width.info/docs" }
---
