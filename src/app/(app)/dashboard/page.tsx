import Link from "next/link";
import { initialDeals, STAGES, stageMeta, money } from "@/lib/data";

export default function DashboardPage() {
  const open = initialDeals.filter((d) => d.stage !== "Won");
  const pipeline = open.reduce((s, d) => s + d.value, 0);
  const weighted = initialDeals.reduce((s, d) => s + d.value * stageMeta[d.stage].prob, 0);
  const won = initialDeals.filter((d) => d.stage === "Won").reduce((s, d) => s + d.value, 0);
  const winRate = Math.round(
    (initialDeals.filter((d) => d.stage === "Won").length / initialDeals.length) * 100
  );
  const maxStage = Math.max(...STAGES.map((s) => initialDeals.filter((d) => d.stage === s).reduce((a, d) => a + d.value, 0)));

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-muted">Your sales at a glance.</p>
        </div>
        <Link href="/pipeline" className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:bg-brand-600">
          Open pipeline →
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Open pipeline" value={money(pipeline)} hint={`${open.length} active deals`} />
        <Stat label="Weighted forecast" value={money(Math.round(weighted))} hint="probability-adjusted" />
        <Stat label="Won this quarter" value={money(won)} hint="closed-won" />
        <Stat label="Win rate" value={`${winRate}%`} hint="last 90 days" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-5">
          <h2 className="font-semibold">Value by stage</h2>
          <div className="mt-4 space-y-3">
            {STAGES.map((s) => {
              const v = initialDeals.filter((d) => d.stage === s).reduce((a, d) => a + d.value, 0);
              return (
                <div key={s}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: stageMeta[s].color }} /> {s}
                    </span>
                    <span className="font-medium">{money(v)}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-surface">
                    <div className="h-full rounded-full" style={{ width: `${(v / maxStage) * 100}%`, background: stageMeta[s].color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <h2 className="font-semibold">Recent activity</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {initialDeals.slice(0, 6).map((d) => (
              <li key={d.id} className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                    {d.owner}
                  </span>
                  <span>
                    <span className="font-medium">{d.company}</span>{" "}
                    <span className="text-muted">→ {d.stage}</span>
                  </span>
                </span>
                <span className="text-xs text-muted">{d.updated}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-0.5 text-xs text-muted">{hint}</p>
    </div>
  );
}
