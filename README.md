# Ledger — A Lightweight CRM for Small Sales Teams

Ledger is a clean, fast CRM built around an **interactive deal pipeline**: move deals between
stages, add and remove them, and watch your weighted forecast update in real time.

> Designed & built by **Michael Ojiemeke** with Claude Code. Next.js 16 · React 19 · TypeScript · Tailwind v4.

**🔗 Live demo:** _added after deploy_
**💻 Source:** _this repo_

---

## Why this project exists

CRMs are one of the most-requested builds on freelance platforms, and the part clients care about
most is the **pipeline** — does it feel good to move deals around? Ledger is a portfolio build that
shows I can implement real, stateful app logic (not just static pages): an interactive board,
derived metrics, and CRUD — all typed and fast.

## Features

- **Interactive pipeline** — five stages (Lead → Won). Move deals with ‹ › controls, add new deals
  inline, and remove them. **Open pipeline, weighted forecast, and won totals recalculate live.**
- **Dashboard** — KPIs (open pipeline, weighted forecast, win rate), a value-by-stage bar
  breakdown, and a recent-activity feed.
- **Contacts** — a card grid of people linked to their company, deal count, and value.
- **Settings** — workspace config and per-stage close probabilities that drive the forecast.
- **Marketing site + auth** — hero with a pipeline preview, features, pricing, sign in/up.

## The interesting part: live derived state

The pipeline is a client component holding deals in React state. Moving a card recomputes:

```
weighted forecast = Σ (deal.value × stageProbability[deal.stage])
```

So the forecast, stage totals, and summary cards all update the instant you move a deal — the kind
of reactive, derived-state UI that makes a CRM feel alive. See
[`src/components/pipeline-board.tsx`](src/components/pipeline-board.tsx).

## Tech stack

| Layer     | Choice                                  |
|-----------|------------------------------------------|
| Framework | Next.js 16 (App Router, route groups)   |
| Language  | TypeScript (strict)                     |
| State     | React hooks (`useState` / `useMemo`)    |
| UI        | Tailwind CSS v4, custom design system    |
| Deploy    | Vercel (zero-config)                    |

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

No backend required — deals start from a typed seed in `src/lib/data.ts` and live in app state.

## Project structure

```
src/
├── app/
│   ├── page.tsx                 # marketing site
│   ├── login / signup           # auth screens
│   └── (app)/                   # authenticated app (route group)
│       ├── layout.tsx           # sidebar shell
│       ├── dashboard/           # KPIs + charts
│       ├── pipeline/            # interactive board
│       ├── contacts/
│       └── settings/
├── components/
│   ├── pipeline-board.tsx       # the stateful board (client)
│   ├── app-sidebar.tsx, site-chrome.tsx, icons.tsx, auth-card.tsx
└── lib/
    ├── data.ts                  # typed CRM model + seed data
    └── site.ts
```

## Deploy

Standard Next.js → Vercel in ~2 minutes. See [DEPLOY.md](DEPLOY.md).

---

© Ledger — a demo SaaS product by Michael Ojiemeke. Companies and contacts shown are illustrative.
