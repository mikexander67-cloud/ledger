# Deploying Ledger (free, ~3 minutes)

Ledger is a standard Next.js app with no backend — it deploys to **Vercel** with zero config.

## One-click via GitHub

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Ledger: CRM pipeline"
   git branch -M main
   git remote add origin https://github.com/<you>/ledger.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new → import the `ledger` repo → **Deploy**.
3. You get a live URL like `https://ledger-<you>.vercel.app`.

## Vercel CLI

```bash
pnpm i -g vercel
vercel --prod
```

## Notes

- No environment variables or database required — seed data lives in `src/lib/data.ts`.
- All pipeline interactivity is client-side React state.
