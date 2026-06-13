import { STAGES, stageMeta } from "@/lib/data";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
      <p className="mt-1 text-sm text-muted">Configure your workspace and pipeline.</p>

      <div className="mt-6 space-y-4">
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold">Workspace</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Team name" value="Sales" />
            <Field label="Currency" value="USD ($)" />
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold">Pipeline stages</h2>
          <p className="mt-1 text-sm text-muted">Default close probability per stage drives your weighted forecast.</p>
          <ul className="mt-4 space-y-2">
            {STAGES.map((s) => (
              <li key={s} className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: stageMeta[s].color }} /> {s}
                </span>
                <span className="text-muted">{Math.round(stageMeta[s].prob * 100)}%</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Plan</h2>
              <p className="mt-1 text-sm text-muted">Team — unlimited deals & forecasting.</p>
            </div>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">Team</span>
          </div>
        </section>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input defaultValue={value} className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-brand/50" />
    </label>
  );
}
