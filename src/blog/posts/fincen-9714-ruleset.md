---
title: "FinCEN's 9714 order: DART shipped a built-in ruleset the same day"
slug: fincen-9714-ruleset
description: On 6 November 2026, FinCEN issued a Section 9714 order against MEXC. It isn't an OFAC sanction, but the impact on institutions with US exposure is direct. DART shipped a built-in ruleset the same day.
date: 2026-11-06
category: regulation
author: Width DART team
cover: /assets/uploads/blog/mexc-ruleset-shot.webp
coverAlt: The FinCEN 9714 built-in ruleset in the DART console
tags: [FinCEN, "9714", rulesets, regulation]
---

On 6 November 2026, the US Treasury's Financial Crimes Enforcement Network (FinCEN) issued an order against MEXC Global under Section 9714(a) of the Combating Russian Money Laundering Act, prohibiting US financial institutions from handling transmittals of funds involving it. The order takes effect 30 days after publication in the Federal Register.

The same day, DART shipped a matching built-in ruleset that customers can select in the console and over the API.

## First, the distinction: this is not an OFAC sanction

Much of the coverage calls this a "sanction". That isn't accurate:

- It is a **FinCEN order under Section 9714**, not an OFAC sanctions action;
- MEXC has **not been added to the SDN list**, and **no assets have been frozen**;
- What it restricts is **US financial institutions** handling funds transfers involving it.

For a compliance team, that distinction drives the response: block, review or simply flag depends on your exposure to the US financial system and the rules in your jurisdiction. Confirm your approach with legal counsel.

## How DART handles it

- **A built-in ruleset, ready to select.** The ruleset covers the entities involved in this action. Select it when you screen, or clone it and set your own points and dispositions.
- **Not waved through by the exchange exemption.** DART exempts exchange counterparties by default, but under default settings the addresses covered by this action are **not** passed automatically on that basis.
- **Visible across hops.** When a fund-flow path runs through a related address, the result shows the hop, the amount and its share of funds.

## How we shipped it the same day

DART's rules are open and readable, and rulesets are data, not logic hard-coded into the engine. When a new official action lands, we add the entities and addresses to the label store and publish a built-in ruleset. Customers don't change a line of code.

That's the point we keep coming back to: **rules have to keep pace with regulators, and you have to be able to explain every block.**

---

Want to know whether any of your deposits or withdrawals touch related funds? [Get free access](/contact/). DART is free until 31 December 2028.
