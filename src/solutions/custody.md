---
layout: layouts/page.njk
permalink: /solutions/custody/
title: KYA and KYT for custodians and wallet-as-a-service
description: Custodians, WaaS and MPC wallet providers integrate DART once and screen every deposit and withdrawal for each enterprise client. KYA and KYT out of the box, with per-client rulesets.
breadcrumb:
  - { label: Solutions, href: /solutions/ }
  - { label: Custody & WaaS }
sections:
  - type: hero
    compact: true
    eyebrow: Solutions · Custody & WaaS
    title: KYA and KYT, <em>Built In for Every Client You Serve</em>
    lead: Every business on your platform needs deposit and withdrawal screening, but not every one can buy and run it. Integrate DART once and screening becomes part of your wallet infrastructure.
    ctas:
      - { label: Get Free Access, href: "/contact/?type=custody" }
      - { label: Read the Docs, href: "https://width.info/docs" }
    note: Free until 31 December 2028
    visual: result

  - type: problems
    eyebrow: Custody challenges
    title: What Custodians and WaaS Providers Face
    items:
      - problem: Every Client Needs Compliance, and Each Buys It Alone
        detail: A separate KYT contract per client is slow and expensive, so smaller clients often skip it.
        solution: |
          - **Integrate once** and screen deposits and withdrawals for every enterprise wallet on your platform
          - Downstream clients get KYA and KYT out of the box, with nothing to procure
        proof: A wallet and custody infrastructure provider runs 17,000–18,000 screenings every working day.
      - problem: Different Clients, Different Risk Appetite
        detail: Payment firms, trading platforms and token projects tolerate very different levels of risk. One ruleset won't fit.
        solution: |
          - **One ruleset per client**: copy a built-in ruleset and set thresholds and rules to each client's policy
          - Pass the client's ruleset with each screening; results and snapshots are kept per client
        proof: Built-in rulesets are read-only and custom ones are saved separately, so you can show which rules applied at any point.
      - problem: Bad Funds Get Swept Into the Main Wallet
        detail: Once deposit addresses sweep into an MPC main wallet, tainted funds mix with clean ones and are hard to separate.
        solution: |
          - **Screen before sweeping**: run inbound screening on deposits and pause the sweep for any address that hits
          - Trace upstream in time order, counting only money that arrived before it left
        proof: There's a ready-made guide for adding KYT to MPC sweeps, and we map the flow with you during onboarding.
      - problem: High Volume, and Screening Can't Slow Deposits
        detail: Custody volume peaks on working days. Slow screening means downstream complaints.
        solution: |
          - Sanctions checks return in **under a second**; sync calls return directly, deep traces run async
          - Console, API and CSV batch share one account and one quota
        proof: DART handles 300,000–400,000 API calls a day in production.

  - type: steps
    tone: alt
    eyebrow: Where DART sits
    title: "Three Checkpoints: Deposit, Sweep and Withdrawal"
    items:
      - { label: Deposit, title: A Client Wallet Receives Funds, text: A sub-address receives USDT or USDC and you have the transaction hash. }
      - { label: KYT-IN, title: Screen Before Sweeping, text: Screen the source against the client's ruleset; pause the sweep on a hit and hand it to the client. }
      - { label: Sweep, title: Clean Funds Move On, text: Passed funds sweep as normal; results and snapshots are kept per client. }
      - { label: Withdrawal, title: Screen the Destination, text: When a client withdraws, run KYA or KYT-OUT on the target address. }

  - type: table
    eyebrow: Recommended setup
    title: How Custodians Typically Integrate
    head: [Checkpoint, Endpoint, Ruleset, Hops, Notes]
    rows:
      - ["On deposit, before sweep", "`POST /api/v3/screen/kyt`", Client's KYT-IN ruleset, Inbound 3 (default), Pause the sweep on a hit]
      - [Before a client withdrawal, "`POST /api/v3/screen/kyt` or `/screen/kya`", Client's KYT-OUT / KYA ruleset, Outbound 1 (default), Critical hits blocked]
      - [Backfill for a new client, CSV batch import, AML KYA Default, Default, One-off rescreen of existing addresses]
      - [High volume or deep traces, "`mode: async`", Same as above, Deeper as needed, Returns a job ID; nothing blocks]
    note: Exchange counterparties are exempt by default. Hops, thresholds and rules can be set per client.

  - type: cases
    eyebrow: Customers
    title: Custodians Already on DART
    columns: 2
    items:
      - tag: Custody · WaaS
        metric: 17,000–18,000
        metricLabel: Screenings every working day
        title: A Wallet and Custody Infrastructure Provider
        text: Screens every deposit and withdrawal for its enterprise wallets. Its clients get KYA and KYT without buying their own.
      - tag: Guide
        title: KYT for MPC Sweeps
        text: Teams that run their own sweeps on MPC custody can follow the guide to put KYT into the sweep flow.
    note: Customer names withheld for confidentiality. Figures from DART production data, November 2026.

  - type: cards
    tone: alt
    eyebrow: Related products
    title: What Custodians Use
    columns: 3
    items:
      - { title: Transaction Screening (KYT), text: Source on deposit, destination on withdrawal, a gate before sweeping., href: /products/kyt/ }
      - { title: Address Screening (KYA), text: New clients and withdrawal targets across every chain and token., href: /products/kya/ }
      - { title: Rulesets & Scoring, text: One ruleset per client, set to their own policy., href: /products/rulesets/ }
      - { title: Sanctions Screening, text: Official lists in under a second., href: /products/sanctions/ }
      - { title: Fund Tracing & Investigations, text: When a client has an incident, follow the money across hops and chains., href: /products/investigations/ }
      - { title: Integration Guides, text: Step-by-step guides including KYT for MPC sweeps., href: /blog/category/guides/, link: Read the Guides }

  - type: faq
    eyebrow: FAQ
    title: Questions Custodians Ask
    items:
      - q: Can each downstream client have its own rules?
        a: Yes. Copy a built-in ruleset per client and pass it with each screening. Results and snapshots are kept per client.
      - q: Where in the sweep flow should screening happen?
        a: Screen the source when a deposit lands and before it sweeps. Pause the sweep for any address that hits and hand it to the client, so tainted funds never mix into the main wallet. We map the flow with you during onboarding.
      - q: What about existing addresses?
        a: Import them by CSV for a one-off rescreen, then switch to real-time screening.
      - q: Will volume affect speed?
        a: Sanctions checks return in under a second and sync calls return directly. For large batches and deep traces, async mode returns a job ID to poll, so deposits and withdrawals aren't blocked.
      - q: Can we use the console and the API together?
        a: Yes. Console, REST API, MCP and CSV batch share one account, one quota and the same snapshots.

  - type: cta
    eyebrow: Free access
    title: Run It <em>Next to Your Current Tools</em>
    text: Nothing to switch off. Send us a batch of historical client deposit and withdrawal addresses (anonymized is fine) and we explain every difference.
    points:
      - A result for every address, with the path behind it and a **diff against your current tools**
      - Stablecoins on DART, everything else stays where it is
      - Free until **31 December 2028**
    ctas:
      - { label: Get Free Access, href: "/contact/?type=custody" }
      - { label: Book a Demo, href: "/contact/?type=custody" }
---
