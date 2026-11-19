---
layout: layouts/page.njk
permalink: /platform/
title: "DART platform overview: data, tracing, rules and scoring"
description: DART is an onchain risk engine built around stablecoins, with 200M labeled addresses, time-ordered fund tracing, 72 open rules and a 0–100 fund-attribution score. Console, API and MCP on one account.
breadcrumb:
  - { label: Platform overview }
sections:
  - type: hero
    compact: true
    eyebrow: Platform overview
    title: One engine, <em>from data to decision</em>
    lead: DART puts onchain data, fund tracing, rules and scoring into a single engine. Submit an address or a transaction and get back a score, a disposition and the reasoning behind every point.
    ctas:
      - { label: Get free access, href: /contact/ }
      - { label: Read the docs, href: "https://width.info/docs" }
    visual: result

  - type: steps
    eyebrow: Architecture
    title: Every layer is our own
    lead: Data, labels, rules and scoring are all built in-house, so they can follow your policy and every conclusion can be traced to its source.
    items:
      - { label: Layer 1, title: Onchain data, text: "USDT and USDC flows on 11 chains, updated in near real time." }
      - { label: Layer 2, title: Address labels, text: "200M labeled addresses, over 90% of them exchange addresses, plus continuously updated sanctions, freeze and hack labels." }
      - { label: Layer 3, title: Time-ordered tracing, text: "Hop-by-hop expansion upstream and downstream, keeping only paths that work in time." }
      - { label: Layer 4, title: Rules and scoring, text: "Path-matching rules flag violations; the scoring ruleset turns them into a 0–100 score and a disposition." }

  - type: cards
    tone: alt
    eyebrow: Capabilities
    title: Pick by the question you need answered
    columns: 3
    items:
      - { tag: KYA, title: Address screening, text: "Is this address safe to deal with? Self-hits, direct exposure and indirect exposure in one view.", href: /products/kya/ }
      - { tag: KYT, title: Transaction screening, text: "Where did this deposit come from, and where is this withdrawal going? Each direction judged on its own.", href: /products/kyt/ }
      - { tag: Sanctions, title: Sanctions screening, text: "Entities, individuals, companies and addresses on official sanctions lists, answered in under a second.", href: /products/sanctions/ }
      - { tag: Tracing, title: Fund tracing & investigations, text: "Follow funds across hops and chains, and export a tracing report.", href: /products/investigations/ }
      - { tag: Rules, title: Rulesets & scoring, text: "72 open rules and an editable scoring matrix. Your risk appetite, written as rules.", href: /products/rulesets/ }
      - { tag: MCP, title: AI agents, text: "19 MCP tools so an AI agent can screen, read results and edit rules.", href: /products/agents/ }

  - type: split
    eyebrow: Data
    title: 200 million labeled addresses, <em>kept current</em>
    text: To judge a transfer you first need to know who every counterparty along the way is. We run our own onchain data layer, with labels maintained by a dedicated intelligence team.
    points:
      - "**Exchanges**: over 90% of our 200M labels are exchange addresses, and exchange counterparties can be exempted by default"
      - "**Stablecoin issuer freezes**: frozen addresses and when they were frozen"
      - "**Sanctions and enforcement**: OFAC, UN, EU, UK and other official lists, plus law-enforcement freezes"
      - "**Cybercrime and obfuscation**: hacks, scams, phishing, mixers, darknet markets, gambling and more"
    visual: flow

  - type: split
    reverse: true
    tone: alt
    eyebrow: Disposition
    title: Four dispositions, <em>not block-all</em>
    text: Every screening returns a 0–100 score and one of four dispositions, so your team can triage instead of reviewing everything. Thresholds and the points behind each rule are yours to tune.
    points:
      - A self-hit on a severe label such as sanctions scores 100 and blocks outright
      - Inbound and outbound exposure are weighted separately, and further hops weigh less
      - Every screening is kept as an immutable snapshot
    visual: scores

  - type: table
    eyebrow: Access
    title: Four ways in, one account
    head: [Channel, Built for, What it does]
    rows:
      - [Console, Compliance analysts, "Paste an address or transaction, see the fund-flow graph, hits and snapshots, manage rulesets"]
      - [REST API, Your systems, "Sync calls return the result; async mode returns a job ID to poll"]
      - [MCP, AI agents, "19 tools for Claude, Cursor, Codex and other agents"]
      - [CSV batch, Back-screening, "Import a batch of addresses for historical review or a parallel test"]
    note: Console, API and MCP share one account, one quota and the same snapshots.

  - type: cards
    eyebrow: Width platform
    title: Onchain and offchain compliance in one place
    lead: The Width compliance platform adds case management, KYC / KYB, name screening and Travel Rule, and DART results can live in the same system.
    columns: 4
    items:
      - { title: Case management, text: "Review, due diligence and reporting records kept together.", href: "https://www.width.com/case-management" }
      - { title: KYC / KYB, text: "Identity verification and due diligence for individuals and businesses.", href: "https://www.width.com/kyc-onboarding" }
      - { title: Transaction monitoring, text: "Rule-based monitoring and alerts for offchain transactions.", href: "https://www.width.com/transaction-monitoring" }
      - { title: Travel Rule, text: "Originator and beneficiary data exchange for virtual-asset transfers.", href: "https://www.width.com/travel-rule" }

  - type: faq
    eyebrow: FAQ
    title: Common questions
    items:
      - q: Which chains and tokens does DART cover?
        a: DART focuses on USDT and USDC across 11 chains. Paste an address and DART finds every chain and token it has flow on, then screens them in one go. Keep your existing tools for BTC and other assets; each covers its own.
      - q: How many hops does it trace, and is it slow?
        a: Hop depth is configurable; for everyday screening we suggest 3 hops inbound and 1 outbound. Sanctions screening returns in under a second. Most address screenings return within a minute; very active addresses traced deep take longer and can run in async mode.
      - q: Can we change the rules?
        a: Yes. Built-in rulesets are read-only; clone one and change any condition, threshold or weight. Each ruleset is saved separately, so you can always show which rules were in force at a given time.
      - q: Can we show results to a regulator?
        a: Every point maps to a rule, and each result lists the path, hop, amount, share and points. Every screening is saved as an immutable snapshot you can pull from the console or API.
      - q: What does it cost?
        a: DART is free until 31 December 2028, with console, API and MCP included. See [pricing](/pricing/).

  - type: cta
    title: Test it <em>on your own data</em>
    text: Send us a batch of historical addresses, including ones you've confirmed as risky and ones you know are clean. We'll return a result, risk path and explanation for every one.
    ctas:
      - { label: Get free access, href: /contact/ }
      - { label: Book a demo, href: /contact/ }
---
