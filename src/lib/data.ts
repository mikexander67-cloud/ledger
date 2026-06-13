export const STAGES = ["Lead", "Qualified", "Proposal", "Negotiation", "Won"] as const;
export type Stage = (typeof STAGES)[number];

export type Deal = {
  id: string;
  company: string;
  contact: string;
  value: number;
  stage: Stage;
  owner: string;
  updated: string;
};

export const initialDeals: Deal[] = [
  { id: "d1", company: "Acme Inc.", contact: "Dana Lee", value: 24000, stage: "Lead", owner: "MO", updated: "1d" },
  { id: "d2", company: "Northwind", contact: "Sam Patel", value: 12500, stage: "Lead", owner: "AK", updated: "2d" },
  { id: "d3", company: "Lumen Labs", contact: "Priya Rao", value: 38000, stage: "Qualified", owner: "MO", updated: "3h" },
  { id: "d4", company: "Cedar & Co", contact: "Tom Fisher", value: 9000, stage: "Qualified", owner: "JD", updated: "5h" },
  { id: "d5", company: "Orbit", contact: "Mia Chen", value: 52000, stage: "Proposal", owner: "MO", updated: "1d" },
  { id: "d6", company: "Bloom", contact: "Kate Ono", value: 17500, stage: "Proposal", owner: "AK", updated: "4d" },
  { id: "d7", company: "Harbor", contact: "Leo Marsh", value: 64000, stage: "Negotiation", owner: "JD", updated: "2h" },
  { id: "d8", company: "Vertex", contact: "Ivy Brooks", value: 28000, stage: "Negotiation", owner: "MO", updated: "6h" },
  { id: "d9", company: "Summit", contact: "Owen Reid", value: 41000, stage: "Won", owner: "MO", updated: "1w" },
  { id: "d10", company: "Pinecrest", contact: "Ada Vance", value: 15000, stage: "Won", owner: "AK", updated: "1w" },
];

export const stageMeta: Record<Stage, { color: string; prob: number }> = {
  Lead: { color: "#94a3b8", prob: 0.1 },
  Qualified: { color: "#0ea5e9", prob: 0.3 },
  Proposal: { color: "#6366f1", prob: 0.5 },
  Negotiation: { color: "#d97706", prob: 0.75 },
  Won: { color: "#16a34a", prob: 1 },
};

export type Contact = {
  name: string;
  title: string;
  company: string;
  email: string;
  deals: number;
  value: number;
};

export const contacts: Contact[] = [
  { name: "Dana Lee", title: "Head of Ops", company: "Acme Inc.", email: "dana@acme.io", deals: 1, value: 24000 },
  { name: "Priya Rao", title: "CTO", company: "Lumen Labs", email: "priya@lumen.dev", deals: 2, value: 38000 },
  { name: "Mia Chen", title: "VP Growth", company: "Orbit", email: "mia@orbit.app", deals: 1, value: 52000 },
  { name: "Leo Marsh", title: "Founder", company: "Harbor", email: "leo@harbor.so", deals: 3, value: 64000 },
  { name: "Ivy Brooks", title: "Procurement", company: "Vertex", email: "ivy@vertex.com", deals: 1, value: 28000 },
  { name: "Owen Reid", title: "CEO", company: "Summit", email: "owen@summit.co", deals: 2, value: 41000 },
  { name: "Kate Ono", title: "Marketing Lead", company: "Bloom", email: "kate@bloom.io", deals: 1, value: 17500 },
  { name: "Tom Fisher", title: "Director", company: "Cedar & Co", email: "tom@cedar.com", deals: 1, value: 9000 },
];

export const money = (n: number) =>
  n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`;
