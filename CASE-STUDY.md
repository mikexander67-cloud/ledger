# Case Study — Ledger: a Lightweight CRM with an Interactive Pipeline

**Role:** Product design & full-stack development
**Built with:** Claude Code · Next.js 16 · React 19 · TypeScript · Tailwind v4
**Type:** Demo SaaS product (built to production standard)
**Live demo:** https://ledger-gamma-eosin.vercel.app · **Source:** https://github.com/mikexander67-cloud/ledger

---

## The problem this product solves

Small sales teams don't need a 200-feature enterprise CRM they'll never fully use. They need to
answer three questions fast: *What's in my pipeline? What's likely to close? What needs a nudge
today?* Most tools bury that under complexity.

**Ledger** is the opposite — a focused CRM where the pipeline is the product, and moving a deal
forward takes one click.

> Built as a portfolio product to demonstrate **real, stateful application logic** — the thing
> that separates "a nice-looking site" from "a working app," and exactly what CRM clients are
> buying.

## What I built

- **An interactive pipeline board** — five stages (Lead → Won). You can move deals forward/back,
  add new deals inline, and remove them. It's not a screenshot — it's a working app.
- **Live derived metrics** — open pipeline value, a probability-**weighted forecast**, won totals,
  and deal count all recompute the instant you change anything.
- **A dashboard** — KPIs, a value-by-stage breakdown, win rate, and a recent-activity feed.
- **Contacts** — people linked to their company, deal count, and total value.
- **Settings** — per-stage close probabilities that feed the forecast, plus workspace config.
- **Marketing site + auth** to complete the product.

## The engineering that matters here

The pipeline holds deals in React state and derives everything else from it:

```ts
weightedForecast = deals.reduce(
  (sum, d) => sum + d.value * stageProbability[d.stage],
  0
);
```

Because the forecast and stage totals are **derived** (via `useMemo`) rather than stored, the UI is
always consistent — move a $64k deal from Negotiation to Won and every number updates correctly in
one render. The data model (`src/lib/data.ts`) is fully typed, so swapping the in-memory seed for a
real API/database is a contained change. This is how I'd structure a client's CRM MVP so it can
grow without a rewrite.

## How Claude Code accelerated the build

I used Claude Code to design the typed CRM model, generate the stateful board and its derived
metrics, and scaffold the dashboard/contacts/settings screens against a shared design system —
producing a consistent, fully typed, genuinely interactive app quickly.

## The outcome

A fast, attractive CRM with a **genuinely interactive** core, clean derived-state architecture, and
a typed, extensible codebase that deploys in minutes.

## What this demonstrates for clients

If you need a CRM, internal tool, kanban/board UI, or any app with real interactivity and live
calculations — Ledger shows I build working software, not just static pages.

---

*Ledger is a demonstration product designed and built by Michael Ojiemeke. Companies, contacts, and
deal values shown are illustrative sample data.*
