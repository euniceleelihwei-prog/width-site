---
layout: layouts/page.njk
permalink: /developers/
title: "Developers: KYT and KYA API, MCP, OpenAPI"
description: DART's REST API, MCP server, OpenAPI 3.1, llms.txt and agent skill. One API key and a few lines of code for address and transaction screening, plus full ruleset management over the API.
breadcrumb:
  - { label: Developers }
sections:
  - type: hero
    compact: true
    eyebrow: Developers
    title: One API key, <em>a few lines of code</em>
    lead: Address screening, transaction screening, snapshots and ruleset management all run through one REST API. AI agents get the same capabilities over MCP.
    ctas:
      - { label: API reference, href: "https://width.info/api-reference" }
      - { label: Get an API key, href: /contact/, style: ghost }
    visual: code
    code:
      title: curl · KYA
      body: |
        curl -X POST https://api.width.live/api/v3/screen/kya \
          -H "X-Api-Key: $DART_API_KEY" \
          -H "Content-Type: application/json" \
          -d '{
            "chain_name": "Tron",
            "address": "T…",
            "token": "usdt",
            "inflow_hops": 3,
            "outflow_hops": 1
          }'

  - type: steps
    eyebrow: Quickstart
    title: Your first screening in four steps
    items:
      - { label: STEP 01, title: Get an API key, text: "Create a key in the console and send it in the X-Api-Key header." }
      - { label: STEP 02, title: Screen an address, text: "POST /api/v3/screen/kya returns the result synchronously by default; add \"mode\": \"async\" to get a job ID." }
      - { label: STEP 03, title: Read the result, text: "Check score.verdict and hits. Every hit carries its rule, hop, amount and share, and the snapshot can be pulled by ID any time." }
      - { label: STEP 04, title: Tune it to your policy, text: "Clone a built-in ruleset, edit conditions and weights, and pass ruleset_id and scoring_ruleset_id when you screen." }

  - type: table
    tone: alt
    eyebrow: Endpoints
    title: The endpoints you'll use most
    head: [Endpoint, What it does]
    rows:
      - ["`POST /api/v3/screen/kya`", Address screening (KYA)]
      - ["`POST /api/v3/screen/kya/multi`", "Screen one address on every chain and token it has flow on"]
      - ["`POST /api/v3/screen/kyt`", "Transaction screening (KYT), judged by deposit or withdrawal direction"]
      - ["`POST /api/v3/transaction-transfers`", "List the token transfers inside one transaction, to pick KYT's event_index"]
      - ["`GET /api/v3/screen/result/{jobId}`", Poll an async job]
      - ["`GET /api/v3/snapshots/{snapshotId}`", Read back a recorded screening]
      - ["`GET /api/v3/chains`", "Supported chains and tokens, read live"]
      - ["`POST /api/v3/rulesets/*`", "Create, read, update, delete and clone rulesets and rules"]
    note: "Production `https://api.width.live`; test environment `https://test-api.width.live` (separate database, so ruleset IDs differ)."

  - type: cards
    eyebrow: Resources
    title: Docs and tools
    columns: 3
    items:
      - { tag: DOCS, title: API reference, text: "Every endpoint's parameters, responses and examples, with a try-it panel.", href: "https://width.info/api-reference" }
      - { tag: MANUAL, title: Product manual, text: "Both rulesets, the scoring formula and the console, explained with screenshots.", href: "https://width.info/docs" }
      - { tag: OPENAPI, title: OpenAPI 3.1, text: "Schemas for every endpoint, for SDK or tool generation.", href: "https://width.info/openapi.json" }
      - { tag: LLMS, title: llms.txt, text: "API notes written for language models; llms-full.txt has everything in one file.", href: "https://width.info/llms.txt" }
      - { tag: SKILL, title: Agent skill, text: "A ready-made skill file to drop into your AI agent.", href: "https://width.info/agent/SKILL.md" }
      - { tag: OPEN SOURCE, title: AMLClaw, text: "An open-source compliance desk built on the DART API, with screening, address and transaction monitoring, and evidence reports.", href: "https://github.com/amlclaw/amlclaw.com" }

  - type: split
    eyebrow: MCP
    title: Plug it into your AI agent
    text: "The MCP endpoint is `https://api.width.live/mcp`, authenticated with `Authorization: Bearer <API key>`. 19 tools cover screening, results, rulesets and rules."
    ctas:
      - { label: AI agents, href: /products/agents/, style: ghost }
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

  - type: cta
    title: Get an API key and try it
    text: DART is free until 31 December 2028, and our engineers support your integration directly in a shared group.
    ctas:
      - { label: Get an API key, href: /contact/ }
      - { label: API reference, href: "https://width.info/api-reference", style: ghost }
---
