---
layout: layouts/page.njk
permalink: /solutions/exchanges/
title: Crypto exchange KYT for deposits and withdrawals
description: Crypto exchange KYT for USDT and USDC deposits and withdrawals. Time-ordered tracing cuts false positives, exchange counterparties are exempt, and every score is explained.
breadcrumb:
  - { label: Solutions, href: /solutions/ }
  - { label: Exchanges }
sections:
  - type: hero
    compact: true
    eyebrow: Solutions · Exchanges
    title: Screen every deposit and withdrawal, <em>without the false alarms</em>
    lead: Deposits are about where the money came from; withdrawals are about where it is going. DART traces funds hop by hop in time order and drops paths the money could not have taken, so your compliance team only works the cases that matter.
    ctas:
      - { label: Get free access, href: "/contact/?type=exchange" }
      - { label: Read the docs, href: "https://width.info/docs" }
    note: Free until 31 December 2028
    visual: result

  - type: problems
    eyebrow: Exchange compliance
    title: Sound familiar?
    items:
      - problem: Too many deposit alerts for the review team
        detail: If a tool only asks "are these addresses connected?", ordinary deposits get traced a few hops out to something risky, and most alerts end up as false positives.
        solution: |
          - A hop only counts if the funds **arrived before they left**. Paths that run backwards in time are dropped
          - **Share of funds matters**: the further the hop, the higher the threshold, so a trace amount of bad money doesn't condemn an address
          - Four dispositions (pass, review, EDD, block) mean reviewers only see the middle two
        proof: In one payment company's test, another tool rated an address "medium-low risk, needs review". DART scored it 0. Broken down transfer by transfer, the risky funds could not have reached it in time.
      - problem: Getting dragged in by other exchanges' users
        detail: A hot wallet touches thousands of addresses a day. Trace through another exchange and you will almost always hit something risky.
        solution: |
          - **Exchange counterparties are exempt by default**: tracing stops at another exchange, so other users of that exchange don't count against you
          - Switch the exemption off for strict scenarios such as sanctions screening
        proof: A Middle East exchange runs deposit and withdrawal screening with the exemption on by default.
      - problem: New regulatory actions outpace your rules
        detail: Official lists and enforcement orders change faster every year. Maintaining rules in-house is slow and easy to get wrong.
        solution: |
          - We turn new official actions into **built-in rulesets** you can select in the console or API
          - Every rule is readable. Copy a ruleset and adjust it to your own policy
        proof: FinCEN's 9714 order was published on 6 November. The DART built-in ruleset went live the same day.
      - problem: Licensing reviews ask why you blocked or passed
        detail: A bare score with no reasoning leaves you exposed in VASP licensing reviews and regulatory inspections.
        solution: |
          - **Every point maps to a rule**: path, hop, amount, share of funds and points added, all listed
          - Every screening is saved as an **immutable snapshot**, with the ruleset version on record
        proof: Pull any snapshot from the console or API, and build screening and disposition reports for any period.

  - type: steps
    tone: alt
    eyebrow: Where DART sits
    title: One check on the way in, one on the way out
    lead: Deposits are screened inbound and withdrawals outbound, each with its own ruleset and hop depth.
    items:
      - { label: DEPOSIT, title: Funds land onchain, text: A user's deposit confirms and your system has the transaction hash. }
      - { label: KYT-IN, title: Screen the source, text: Trace upstream in time order against the inbound ruleset and get a 0–100 score. }
      - { label: DECIDE, title: Credit or hold, text: Pass credits straight away; review and EDD go to a queue; block freezes and escalates. }
      - { label: WITHDRAWAL, title: Screen the destination, text: Before release, run KYA or KYT-OUT on the target address. Critical hits such as sanctions are blocked. }

  - type: table
    eyebrow: Recommended setup
    title: How exchanges typically integrate
    head: [Checkpoint, Endpoint, Ruleset, Hops, Exchange exemption]
    rows:
      - [Before crediting a deposit, "`POST /api/v3/screen/kyt`", Built-in KYT-IN + default scoring, Inbound 3 (default), "On"]
      - [Before releasing a withdrawal, "`POST /api/v3/screen/kyt` or `/screen/kya`", Built-in KYT-OUT / AML KYA Default, Outbound 1 (default), "On"]
      - [First or large deposits, "`POST /api/v3/screen/kya/multi`", AML KYA Default, Deeper as needed, "On"]
      - [Dedicated sanctions checks, "`POST /api/v3/screen/kya`", Sanctions rulesets, Configurable, "Off if required"]
    note: "Hops, thresholds and rules are all adjustable. Sync calls return the result directly; for very active addresses, use async mode (`mode: async`) so nothing blocks."

  - type: cases
    eyebrow: Customers
    title: Exchanges already on DART
    columns: 2
    items:
      - tag: Exchange · Middle East
        title: A Middle East exchange
        text: Screens deposits and withdrawals automatically, with exchange counterparties exempt by default, so it isn't dragged in by other exchanges' users.
      - tag: Regulatory update
        metric: Same day
        metricLabel: From new order to built-in ruleset
        title: FinCEN 9714 order
        text: Published on 6 November, live as a DART built-in ruleset the same day. Customers selected it in the console and could identify related funds in their deposits and withdrawals.
    note: Customer names withheld for confidentiality. Figures from DART production data, November 2026.

  - type: cards
    tone: alt
    eyebrow: Related products
    title: What exchanges use
    columns: 3
    items:
      - { title: Transaction screening (KYT), text: Source of funds on deposits, destination on withdrawals, with rules per direction., href: /products/kyt/ }
      - { title: Address screening (KYA), text: New users, large amounts and withdrawal targets, across every chain the address uses., href: /products/kya/ }
      - { title: Sanctions screening, text: Official lists in under a second. A natural fit before releasing withdrawals., href: /products/sanctions/ }
      - { title: Rulesets & scoring, text: Write your risk appetite as rules. Copy a built-in ruleset and edit., href: /products/rulesets/ }
      - { title: Fund tracing & investigations, text: Follow suspicious funds across hops and chains and export a tracing report., href: /products/investigations/ }
      - { title: AI agents (MCP), text: Let analysts screen and explain addresses from their AI assistant., href: /products/agents/ }

  - type: faq
    eyebrow: FAQ
    title: Questions exchanges ask
    items:
      - q: Does the exchange exemption let risk slip through?
        a: The exemption only stops tracing once a path reaches another exchange. If the screened address carries a risk label itself, or a path hits a rule before it reaches an exchange, it still counts. Turn the exemption off for strict scenarios such as sanctions screening.
      - q: Should deposits and withdrawals use the same rules?
        a: We don't recommend it. Deposits look at where funds came from (inbound) and withdrawals at where they go (outbound). DART ships separate KYT-IN and KYT-OUT rulesets. Hops default to 3 inbound and 1 outbound, and both are adjustable.
      - q: Will screening slow down crediting?
        a: Sanctions checks return in under a second, and sync calls return the result directly. Deep traces on very active addresses take longer, so use async mode and either credit then act on the result, or hold then release.
      - q: Do we have to add rules when a new list is published?
        a: No. We turn new official actions into built-in rulesets. The FinCEN 9714 order, for example, was live the day it was published. You can still copy and edit any ruleset.
      - q: What can we show an examiner?
        a: Every screening has an immutable snapshot recording the request and the full result. Pull them in bulk over the API to report on any period. The product manual documents rule definitions and the scoring formula, so it can sit alongside your internal policy.

  - type: cta
    eyebrow: Free access
    title: Run it <em>next to your current tools</em>
    text: Nothing to switch off. Send us a batch of historical deposit and withdrawal addresses (anonymized is fine) and we explain every difference.
    points:
      - A result for every address, with the path behind it and a **diff against your current tools**
      - Stablecoins on DART, everything else stays where it is
      - Free until **31 December 2028**
    ctas:
      - { label: Get free access, href: "/contact/?type=exchange" }
      - { label: Book a demo, href: "/contact/?type=exchange" }
---
