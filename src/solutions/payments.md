---
layout: layouts/page.njk
permalink: /solutions/payments/
title: Source-of-funds screening for payments and crypto cards
description: Stablecoin source-of-funds screening for PSPs, crypto card issuers, OTC desks and merchants. Screen USDT and USDC before top-up or off-ramp, with four dispositions and audit snapshots.
breadcrumb:
  - { label: Solutions, href: /solutions/ }
  - { label: Payments & card issuers }
sections:
  - type: hero
    compact: true
    eyebrow: Solutions · Payments & card issuers
    title: Keep tainted funds <em>out of card and fiat rails</em>
    lead: Before a card top-up, a fiat off-ramp or a merchant payout, check where the USDT came from. When a banking partner or card scheme asks, every decision comes with its evidence.
    ctas:
      - { label: Get free access, href: "/contact/?type=payments" }
      - { label: Read the docs, href: "https://width.info/docs" }
    note: Free until 31 December 2028
    visual: scores

  - type: problems
    eyebrow: Payments challenges
    title: What PSPs and card issuers deal with
    items:
      - problem: One bad deposit can put a whole rail at risk
        detail: Once tainted funds reach a card scheme or bank, partners start looking hard at your entire business.
        solution: |
          - **Screen the source before top-up or deposit**: sanctions, issuer freezes, hacks and scams are handled by disposition level
          - Trace upstream in time order, counting only money that arrived before it left
        proof: A Middle East card issuer screens every top-up source, so tainted funds never reach card schemes or fiat rails.
      - problem: Block everything or let everything through
        detail: With only pass or reject, blocking too much loses customers and passing too much takes on risk.
        solution: |
          - **Four dispositions**: 0–19 pass, 20–49 review, 50–79 EDD, 80–100 block
          - EDD asks the customer for source of funds instead of refusing outright
          - Thresholds and rule weights follow your own risk appetite
        proof: Dispositions and rule weights are documented in the product manual, ready to attach to internal policy.
      - problem: Another tool flags risk but can't say why
        detail: A "medium-low risk" verdict with no reasoning leaves you unable to pass the payment or justify blocking it.
        solution: |
          - A hop only counts if funds **arrived before they left**. Backwards paths are dropped
          - Results list path, hop, amount, share of funds and points
        proof: In one payment company's test, another tool rated an address "medium-low risk, needs review". DART scored it 0. Broken down, the risky funds could not have reached it in time.
      - problem: Every banking partner wants something different
        detail: Each bank and card scheme has its own view on risk categories and thresholds.
        solution: |
          - **One ruleset per partner**: copy a built-in ruleset, change conditions and weights, and save each separately
          - Every screening records which ruleset it ran under
        proof: Every screening is saved as an immutable snapshot you can pull in bulk over the API.

  - type: steps
    tone: alt
    eyebrow: Where DART sits
    title: A check before money reaches fiat
    items:
      - { label: TOP-UP, title: Customer funds a card, text: Stablecoins arrive and you have the transaction hash. }
      - { label: KYT-IN, title: Screen the source, text: Trace upstream in time order against your ruleset for a 0–100 score and a disposition. }
      - { label: DECIDE, title: Route by level, text: Pass tops up the card; review and EDD go to a queue; block returns or freezes funds. }
      - { label: OFF-RAMP, title: Check again before payout, text: Screen the target and funds before fiat payout or merchant settlement, and keep the snapshot. }

  - type: table
    eyebrow: Recommended setup
    title: How payments businesses typically integrate
    head: [Checkpoint, Endpoint, Ruleset, Hops, Notes]
    rows:
      - [Before top-up or deposit, "`POST /api/v3/screen/kyt`", Built-in KYT-IN + default scoring, Inbound 3 (default), Source of funds by disposition]
      - [OTC or merchant receipts, "`POST /api/v3/screen/kya/multi`", AML KYA Default, Default, Screens every chain and token of the payer]
      - [Before payout or settlement, "`POST /api/v3/screen/kyt`", Built-in KYT-OUT, Outbound 1 (default), Critical hits blocked]
      - [Per banking partner, Same as above, Your copied ruleset, As required, One ruleset per partner]
    note: Exchange counterparties are exempt by default. Hops, thresholds and rules are all adjustable, and every screening is snapshotted.

  - type: cases
    eyebrow: Customers
    title: How payments companies use DART
    columns: 2
    items:
      - tag: Card issuer · Middle East
        title: A Middle East card issuer
        text: Screens the source of every card top-up, so tainted funds stay out of card schemes and fiat rails.
      - tag: Payment company
        metric: Score 0
        metricLabel: Same address another tool sent to review
        title: A payment company's comparison
        text: Broken down transfer by transfer, the funds on the risky paths flowed backwards in time. The customer's money could not have come from the risky address.
    note: Customer names withheld for confidentiality.

  - type: cards
    tone: alt
    eyebrow: Related products
    title: What payments teams use
    columns: 3
    items:
      - { title: Transaction screening (KYT), text: Source on the way in, destination on the way out., href: /products/kyt/ }
      - { title: Address screening (KYA), text: Check the payer before OTC or merchant receipts., href: /products/kya/ }
      - { title: Sanctions screening, text: Official lists in under a second., href: /products/sanctions/ }
      - { title: Rulesets & scoring, text: One ruleset per banking partner, thresholds as required., href: /products/rulesets/ }
      - { title: Fund tracing & investigations, text: When something goes wrong, follow the money across hops and chains., href: /products/investigations/ }
      - { title: AI agents (MCP), text: Let analysts screen and explain addresses from their AI assistant., href: /products/agents/ }

  - type: faq
    eyebrow: FAQ
    title: Questions payments companies ask
    items:
      - q: Our bank partner wants zero tolerance. How do we configure DART?
        a: Set sanctions, terrorist financing and similar categories to block and lower the score thresholds. Rulesets are saved separately, so you can show exactly which rules applied at any point in time.
      - q: What does EDD look like in practice?
        a: Ask the customer for a source-of-funds explanation, then have compliance review it alongside the path, amount and share listed in the result, rather than refusing outright.
      - q: What can we hand an auditor?
        a: Every screening has an immutable snapshot of the request and the full result. Pull them in bulk over the API to report on any period.
      - q: We work with several banks. Can rules differ per partner?
        a: Yes. Copy a built-in ruleset per partner and pass the matching ruleset with each screening.
      - q: We only handle stablecoins. Is DART enough?
        a: DART covers USDT and USDC on 11 chains. If your business is mostly stablecoins it can run on its own; if you also handle other assets, run it alongside your existing tools, each covering its own assets.

  - type: cta
    eyebrow: Free access
    title: Run it <em>next to your current tools</em>
    text: Nothing to switch off. Send us a batch of historical deposit addresses (anonymized is fine) and we explain every difference.
    points:
      - A result for every address, with the path behind it and a **diff against your current tools**
      - Stablecoins on DART, everything else stays where it is
      - Free until **31 December 2028**
    ctas:
      - { label: Get free access, href: "/contact/?type=payments" }
      - { label: Book a demo, href: "/contact/?type=payments" }
---
