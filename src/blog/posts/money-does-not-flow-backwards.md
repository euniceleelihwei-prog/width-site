---
title: "Money doesn't flow backwards: why KYT that ignores time flags good addresses as risky"
slug: money-does-not-flow-backwards
description: For the same TRON address, another KYT tool said "medium-low risk, review", while DART scored 0. Broken down transfer by transfer, the risky funds were flowing backwards in time.
date: 2026-11-12
category: research
author: Width DART team
cover: /assets/uploads/blog/dart-timing-cover.webp
coverAlt: "Money doesn't flow backwards: two KYT tools, two verdicts on the same address"
tags: [KYT, fund tracing, false positives]
---

A customer's technical lead recently asked us a very good question.

He had screened the same TRON address with another KYT tool and with DART:

- **The other tool:** on the outbound side, the address was linked to 6 addresses frozen by Tether, the nearest 2 hops away and the furthest 8, involving about $110,000. Verdict: "medium-low risk, review advised."
- **DART (default settings):** score 0, pass, no rules triggered.

Did DART miss something?

## 1. Change two settings and the risk "appears"

We screened the same address again in DART, this time **turning off "enforce time order"** and raising outbound tracing from 1 hop to 5.

All the paths to frozen and sanctioned addresses showed up, triggering rules such as "frozen address exposure" and "sanctioned address exposure", which was essentially what the other tool reported.

**Both tools were looking at the same onchain data. The only difference was whether they respected the order in which money actually moved.**

Once we broke those paths down and lined up the timestamp of every transfer, the answer was clear: **the money on those paths was flowing backwards.**

## 2. Money doesn't flow backwards

A simplified example (addresses and amounts are illustrative).

**Inbound:**

| Time | What happened |
|-|-|
| 1 Oct, 09:00 | Address A withdraws 5,000 USDT from an exchange |
| 1 Oct, 10:00 | A sends 3,000 USDT to B (your user) |
| 3 Oct, 14:00 | H, an address holding stolen funds, sends 8,000 USDT to A |

Looking only at connections: H → A → B. B is 2 hops from stolen funds, so it's high risk.

Adding time: B received its 3,000 USDT on 1 October, when A held nothing but money withdrawn from an exchange. H's money arrived two days later. **Not a single cent B received could have been stolen funds.**

**Outbound works the same way:**

| Time | What happened |
|-|-|
| 1 Oct | Address A sends 2,000 USDT to F, a frozen address |
| 3 Oct | Your user B sends 5,000 USDT to A |

Looking only at connections: B → A → F. B's funds "went to" a frozen address, 2 hops away.

Adding time: A's transfer to F happened before B's money ever arrived. **B's money could not have reached F.**

These paths exist on the graph. They don't exist in the money.

## 3. Ignore time and almost every address looks risky

The chain is a densely connected network. Popular relay addresses, exchange hot wallets, DEXs and bridges interact with thousands of addresses every day.

Expand by connection alone and you will almost always hit a risky address eventually, more so the more hops you allow. In the example above, the other tool went 8 hops out. Add a scoring model where "further hops score less, but still score" and the result is that **most addresses carry some risk score.**

It looks strict, but it's expensive:

- **Alert floods.** Compliance teams review piles of "risky" addresses every day, and most of them are false positives.
- **Good users get hurt.** When reviews can't keep up, everything gets delayed or blocked, and normal deposits and payments stall.
- **Real risk gets buried.** When every address is red, red stops meaning anything.

**Strict is not the same as accurate.** We went down that road ourselves early on.

## 4. How DART decides

1. **Trace funds in time order.** Every hop must be "in first, then out": only money that arrived before the funds moved on counts toward the path. Paths that run backwards are dropped.
2. **Weigh the share of funds, not just whether there's a connection.** What matters is how much of the money is risky. The further the hop, the higher the bar: 5% / 10% / 15% / 20% at hops 2 / 3 / 4 / 5.
3. **Exchange addresses are exempt by default.** Tracing stops at other exchanges, which run their own KYC and controls, so one exchange user's brush with a risky address doesn't land on you.
4. **Every score has a path behind it.** Which path hit, at which hop, how much, what share: all of it is shown, so compliance can decide and explain the decision to a regulator.
5. **Rules follow your business.** How many hops inbound and outbound (3 in and 1 out by default, adjustable), whether time order is enforced, and the base points and share thresholds for each risk can all be tuned.

## 5. Want it stricter? You can

Different businesses need different levels of strictness. Tighten it for large withdrawals or before custody signing; relax it a little for small deposits and everyday payments.

If you prefer a "better safe than sorry" policy, do what we did above: turn off enforced time order, trace more hops and raise the base points for multi-hop hits. The results will look much like those tools.

**The reverse isn't possible.** A tool that ignores time has no way to drop paths that run backwards.

**Strictness is a dial you set per business. Understanding the order money moves in is the foundation.**

---

DART covers USDT and USDC on 11 chains, with 200 million labeled addresses and 72 risk rules, available through the console, API and MCP. If you have addresses you think were judged too harshly, [send them to us](/contact/) and we'll take them apart together, transfer by transfer.
