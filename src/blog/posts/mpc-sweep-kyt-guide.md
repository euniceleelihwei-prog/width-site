---
title: "Running your own sweeps on MPC custody, with KYT built in"
slug: mpc-sweep-kyt-guide
description: Payment, card, exchange and wallet teams on MPC custody can run their own sweeps. Screen each deposit with DART first, then sweep, so tainted funds never reach your hot wallet and fees come down.
date: 2026-11-05
category: guides
author: Width DART team
cover: /assets/uploads/blog/mpc-sweep-cover.webp
coverAlt: Running your own sweeps on MPC custody, with KYT built in
tags: [MPC, sweeping, KYT, custody]
---

> For teams on MPC custody wallets, whether payments, card programs, exchanges or wallets. This guide covers three things: how sweeping works, how to run it yourself, and where DART fits in as your KYT step.

Your MPC custodian handles signing. Sweeping is something you can run yourself, and doing so changes two things:

1. **You choose your KYT.** Rules, thresholds and hop depth are yours. Screen with DART before sweeping and tainted funds never reach your hot wallet.
2. **Fees come down.** Custodian-paid fees are usually on the expensive side. On Tron, renting energy from an external market or staking your own TRX costs less.

## 1. What MPC custody actually does for you

MPC custody solves key security: **the key is split into shares and signing is a joint operation**, so the full private key never exists on any one machine. Keep that with your custodian.

Onchain, a sweep is just a transfer from a user's deposit address to your collection address: a TRC20 `transfer` on Tron, an ERC20 `transfer` on EVM chains, signed via MPC.

A custodian's "auto-sweep" breaks down into three steps:

1. A scheduled job finds deposit addresses with enough balance;
2. It tops up their fees (energy and bandwidth on Tron, the native coin on EVM chains);
3. It calls the custodian's signing API to move the funds.

All three can be done yourself with the custodian's transfer API.

| | Bundled | Run it yourself |
|-|-|-|
| Sweep rules | The custodian's frequency and thresholds | Your own thresholds, batches and time windows, tuned to your peaks |
| Fees | Paid by the custodian, usually pricier | Rent energy or stake TRX on Tron; top up native coin on EVM. Costs are visible |
| KYT | The custodian's chosen vendor | Your choice, with your own rules, thresholds and hop depth |
| When screening happens | Depends on the custodian | Screen first, sweep second, so tainted funds stay out of the hot wallet |

Signing, key security and the custodian's transfer API stay exactly as they are. You only replace the policy layer above signing.

## 2. Five steps to your own sweeps

The order is always **screen first, then sweep**.

### Step 1: Receive deposit notifications

Use the custodian's webhook, or poll its deposit history endpoint. Record chain, transaction hash, deposit address, token and amount for each deposit.

### Step 2: Screen the deposit with DART

Submit the transaction hash with direction `in`, meaning "where did this money come from":

```json
POST https://api.width.live/api/v3/screen/kyt
X-Api-Key: YOUR_KEY

{
  "chain_name": "Tron",
  "tx_id": "<deposit tx hash>",
  "token": "usdt",
  "screen_direction": "in",
  "mode": "async"
}
```

Async mode returns a `job_id` right away; fetch the result with `GET /api/v3/screen/result/{job_id}`. It contains a 0–100 risk score, a disposition, and which rules hit, at which hop and for how much. See the [API reference](https://width.info/api-reference) for every parameter, with a try-it panel.

### Step 3: Act on the verdict

| Verdict | Score | Suggested handling |
|-|-|-|
| Pass | 0–19 | Credit as normal and queue for sweeping |
| Review | 20–49 | Hold the credit; compliance checks the risk path first |
| EDD | 50–79 | Freeze the credit and ask the user for source-of-funds evidence |
| Block | 80–100 | Don't credit, don't sweep; leave funds in place or move them to a quarantine address pending review |

These bands are DART's default scoring; adjust thresholds to your risk appetite.

**Why blocked funds must not be swept:** once tainted funds mix into your hot wallet, anyone screening that wallet will see the link. Exchanges, banks and partners may refuse funds or ask questions. Screen first and your hot wallet only ever holds clean money.

### Step 4: Top up fees

**Tron:** USDT transfers consume energy and bandwidth. With no energy, TRX is burned instead, which is the most expensive option. Cheaper: stake TRX for energy and delegate it to the deposit address, reclaiming it after the sweep; or rent energy on demand. Compare an energy market quote with your custodian's price before launch and multiply by your monthly sweep count.

**EVM chains:** a deposit address without ETH, BNB or similar can't move USDT, so top it up from a dedicated gas wallet first.

**Tip:** set a minimum sweep amount so small balances accumulate instead of paying more in fees than they're worth.

### Step 5: Sweep via the custodian's transfer API

Move funds from the deposit address to your collection address with an MPC signature. Record the transaction hash, amount and the matching DART result for every sweep. DART saves every screening as an immutable snapshot, so audits can trace back directly.

```python
# run every N minutes
for addr in deposit_addresses:
    deposits = pending_deposits(addr)              # credited, not yet swept
    if any(d.verdict != "pass" for d in deposits):
        continue                                   # anything not passed: leave the address
    balance = custody.get_balance(addr, "USDT")
    if balance < MIN_SWEEP_AMOUNT:
        continue                                   # too small, let it accumulate
    ensure_fee(addr)                               # delegate energy (Tron) / top up gas (EVM)
    tx = custody.transfer(addr, COLLECT_ADDRESS, "USDT", balance)   # MPC signature
    save_sweep_record(addr, tx, deposits)          # link to DART results for audit
```

### Withdrawals: screen the destination before signing

Before signing a withdrawal, screen the destination with DART (`POST /api/v3/screen/kya`) to check where the money is going. Pass goes to signing; everything else goes to a person. **Deposits: check the source. Withdrawals: check the destination.**

## 3. Why screening needs more than one hop

Dirty money rarely lands on your address directly. It's usually split into small amounts and passed through a few layers of freshly created throwaway addresses before the deposit. Look only one hop back and you see a brand-new, unlabeled address that passes.

DART's hop depth is configurable. For everyday screening we suggest 3 hops inbound and 1 outbound, a good balance of speed and coverage.

## 4. Getting started

1. [Contact us](/contact/) to open a DART account. It's free until 31 December 2028.
2. Create an API key in the console.
3. Run last month's deposits through DART, look at the score distribution and set your thresholds.
4. Wire screening into deposits and withdrawals and launch your own sweeps.

Already using another KYT tool? Run both in parallel for a while and compare before you decide. Our engineers support you throughout.
