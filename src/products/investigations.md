---
layout: layouts/page.njk
permalink: /products/investigations/
title: Fund tracing & investigations
fullTitle: Onchain fund tracing for USDT & USDC investigations | Width DART
description: Trace USDT and USDC hop by hop from any address or transaction, with labeled counterparties, time-ordered paths and USDC cross-chain tracing via CCTP. Built for compliance investigators and law enforcement.
breadcrumb:
  - { label: Platform, href: /platform/ }
  - { label: Fund tracing & investigations }
sections:
  - type: hero
    compact: true
    eyebrow: Investigations · Fund tracing
    title: Where the money came from and where it went, <em>on one graph</em>
    lead: A suspicious deposit to review, stolen funds to chase, a case report to write. Start from an address or a transaction and DART expands the flow upstream and downstream, labels every counterparty, drops paths that can't hold up in time, and follows funds across chains.
    ctas:
      - { label: Book a demo, href: /contact/ }
      - { label: For law enforcement, href: /partners/lea/ }
    visual: flow

  - type: problems
    eyebrow: What investigators need
    title: Where tracing time actually goes
    items:
      - problem: A few hops out, the graph turns into a hairball
        detail: Busy addresses have hundreds of counterparties at every hop. Nobody can read that by hand.
        solution: |
          - Keep only paths that **hold up in time**: funds arrive before they move on
          - Set a minimum amount and a node limit per hop to see the main flow first
          - Paths stop at exchanges and other known entities instead of expanding into noise
        proof: The same engine handles 300,000–400,000 API calls a day in production.
      - problem: You don't know who the counterparties are
        solution: |
          - 200 million labeled addresses, over 90% of them exchange addresses, plus sanctions, issuer-freeze, hack, scam and mixer labels
          - Every node on the graph shows its label and risk level
        proof: Labels are verified and updated continuously by our intelligence team.
      - problem: The trail goes cold when funds change chains
        solution: |
          - USDC moved through **Circle CCTP** is followed onto the destination chain
          - An address is checked on every chain and token where it has activity
        proof: USDT and USDC across 11 chains.

  - type: steps
    tone: alt
    eyebrow: How it works
    title: From one lead to a case file
    items:
      - { label: Start, title: Enter an address or transaction, text: "A victim's address, a suspicious deposit or a reported address. Chain and token are detected automatically." }
      - { label: Expand, title: Trace upstream and downstream, text: "See where funds came from and where they went, with hop depth set for the case." }
      - { label: Assess, title: Let labels and shares decide, text: "Each path shows hops, amounts, timestamps and the share of risky funds, so the real money trail stands out." }
      - { label: Record, title: Snapshots and reports, text: "Every query is saved as an immutable snapshot. For priority cases our analysts write the tracing report." }

  - type: cards
    eyebrow: Who it's for
    title: Two kinds of investigation
    columns: 2
    items:
      - tag: Compliance teams
        title: Reviewing flagged transactions
        text: When a screening lands in review or EDD, open the fund graph, see the whole story behind the transfer, then release it or escalate.
        points:
          - Hit paths link straight from the screening result
          - The basis for each decision is kept with the snapshot
      - tag: Law enforcement
        title: Case tracing and evidence
        text: Follow funds from a victim or suspect address and get evidence packs when working with exchanges and issuers on freezes. Investigator accounts open after identity verification.
        points:
          - Priority cases get a tracing report from our analysts
          - Every query is logged
        href: /partners/lea/
        link: Law enforcement partnership

  - type: faq
    eyebrow: FAQ
    title: Fund tracing questions
    items:
      - q: How many hops can DART trace?
        a: Hop depth is configurable. For daily screening we suggest 3 inbound and 1 outbound; investigations can go deeper, with a minimum amount and a per-hop node limit to keep the graph readable.
      - q: Why were some paths excluded?
        a: DART requires funds to arrive at each hop before they move on. A path that runs backwards in time means the money could not have come from that source, so it is excluded, and the result says so.
      - q: Does DART trace across chains?
        a: Yes for USDC moved through Circle CCTP. The path continues on the destination chain.
      - q: How can a law enforcement agency get access?
        a: Apply through the law enforcement partnership page. We verify the agency before opening investigator accounts and agree the terms of cooperation directly.
      - q: Are queries recorded?
        a: Yes. Every query is saved as an immutable snapshot with its parameters and full result, available at any time.

  - type: cta
    eyebrow: Book a demo
    title: Bring a real lead. <em>We'll trace it with you.</em>
    text: Compliance teams and law enforcement agencies can book a live session, and we expand the fund graph on your own case.
    points:
      - "Compliance teams: free until **31 December 2028**"
      - "Law enforcement: access after agency verification, terms agreed directly"
    ctas:
      - { label: Book a demo, href: /contact/ }
      - { label: For law enforcement, href: /partners/lea/ }
---
