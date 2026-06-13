export const site = {
  name: "Ledger",
  tagline: "The CRM that keeps your pipeline moving",
  description:
    "A clean, fast CRM for small sales teams — pipeline, contacts, and deals without the enterprise bloat.",
  author: "Michael Ojiemeke",
  year: new Date().getFullYear(),
};

export const features = [
  { title: "Visual pipeline", body: "Drag-free, click-to-move deal stages so your whole team sees what's hot and what's stalling.", icon: "board" },
  { title: "Contacts that connect", body: "Every person linked to their company and deals — no more digging through email threads.", icon: "contact" },
  { title: "Deal intelligence", body: "Weighted forecasts, win rates, and stage velocity calculated automatically.", icon: "chart" },
  { title: "Tasks & reminders", body: "Never drop a follow-up. Ledger nudges you when a deal goes quiet.", icon: "bell" },
  { title: "Fast everywhere", body: "Built on modern web tech — it loads instantly and feels like a native app.", icon: "bolt" },
  { title: "Your data, exportable", body: "One-click CSV export. No lock-in, no hostage-taking of your own pipeline.", icon: "export" },
];

export const plans = [
  { name: "Solo", price: "$0", period: "/mo", blurb: "For freelancers and one-person shops.", cta: "Start free", featured: false,
    perks: ["1 user", "Up to 50 deals", "Pipeline & contacts", "CSV export"] },
  { name: "Team", price: "$19", period: "/user/mo", blurb: "For growing sales teams.", cta: "Start 14-day trial", featured: true,
    perks: ["Unlimited deals", "Forecasting & reports", "Tasks & reminders", "Custom stages", "Email support"] },
  { name: "Business", price: "$39", period: "/user/mo", blurb: "For teams that live in their CRM.", cta: "Talk to sales", featured: false,
    perks: ["Everything in Team", "Roles & permissions", "API & integrations", "Audit log", "Priority support"] },
];
