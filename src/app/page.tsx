import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { FeatureIcon, Check } from "@/components/icons";
import { features, plans, site } from "@/lib/site";
import { money } from "@/lib/data";

const previewCols = [
  { stage: "Qualified", color: "#0ea5e9", deals: [["Lumen Labs", 38000], ["Cedar & Co", 9000]] as const },
  { stage: "Proposal", color: "#6366f1", deals: [["Orbit", 52000], ["Bloom", 17500]] as const },
  { stage: "Negotiation", color: "#d97706", deals: [["Harbor", 64000]] as const },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent_75%)]" />
          <div className="absolute inset-0 bg-radial-brand" />
          <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 text-center sm:pt-28">
            <div className="animate-fade-up mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              The CRM that gets out of your way
            </div>
            <h1 className="animate-fade-up mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Close more deals with{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">a CRM you'll actually use</span>
            </h1>
            <p className="animate-fade-up mx-auto mt-5 max-w-xl text-pretty text-lg text-muted">
              {site.description} Move deals through your pipeline in one click and always know what to do next.
            </p>
            <div className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/pipeline" className="w-full rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:bg-brand-600 sm:w-auto">
                Try the live pipeline →
              </Link>
              <a href="#features" className="w-full rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:bg-surface sm:w-auto">
                See features
              </a>
            </div>
            <p className="animate-fade-up mt-3 text-xs text-muted">Interactive demo · Move real deals around</p>

            {/* Pipeline preview */}
            <div className="animate-fade-up mx-auto mt-14 max-w-4xl">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-brand/10">
                <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-danger/60" />
                  <span className="h-3 w-3 rounded-full bg-warn/60" />
                  <span className="h-3 w-3 rounded-full bg-success/60" />
                  <span className="ml-3 text-xs text-muted">app.ledger.io / pipeline</span>
                </div>
                <div className="grid gap-3 p-5 sm:grid-cols-3">
                  {previewCols.map((col) => (
                    <div key={col.stage} className="rounded-xl bg-surface p-3 text-left">
                      <div className="mb-2 flex items-center gap-2 text-xs font-semibold">
                        <span className="h-2 w-2 rounded-full" style={{ background: col.color }} />
                        {col.stage}
                      </div>
                      <div className="space-y-2">
                        {col.deals.map(([name, val]) => (
                          <div key={name} className="rounded-lg border border-border bg-card p-2.5">
                            <p className="text-sm font-medium">{name}</p>
                            <p className="mt-0.5 text-xs text-muted">{money(val as number)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 text-sm font-medium text-muted">
            <span className="text-xs uppercase tracking-widest">Loved by lean sales teams</span>
            {["Acme", "Orbit", "Harbor", "Summit", "Vertex"].map((b) => (
              <span key={b} className="text-foreground/60">{b}</span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need, nothing you don't</h2>
            <p className="mt-3 text-muted">Ledger does the 20% of CRM you use every day — beautifully — and skips the rest.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-lg hover:shadow-brand/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Set up in minutes</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { n: "01", t: "Add your deals", d: "Import a CSV or add deals by hand. Ledger organizes them into a clean pipeline." },
                { n: "02", t: "Work the board", d: "Move deals through stages with a click. Forecasts update in real time." },
                { n: "03", t: "Close & repeat", d: "Track win rates and velocity, then double down on what's working." },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-border bg-surface p-6">
                  <span className="font-mono text-sm font-semibold text-brand">{s.n}</span>
                  <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Fair pricing, no surprises</h2>
            <p className="mt-3 text-muted">Start free forever. Upgrade when your team grows.</p>
          </div>
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-2xl border p-7 ${p.featured ? "border-brand bg-card shadow-xl shadow-brand/10" : "border-border bg-card"}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">Most popular</span>
                )}
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.blurb}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                  <span className="text-sm text-muted">{p.period}</span>
                </div>
                <Link href="/pipeline" className={`mt-5 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition ${p.featured ? "bg-brand text-brand-foreground hover:bg-brand-600" : "border border-border hover:bg-surface"}`}>
                  {p.cta}
                </Link>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-brand"><Check /></span>
                      <span className="text-muted">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-600 px-8 py-16 text-center text-brand-foreground">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your pipeline, finally under control</h2>
              <p className="mx-auto mt-3 max-w-md text-white/80">Open the interactive demo and move some deals around.</p>
              <Link href="/pipeline" className="mt-7 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand shadow-lg transition hover:bg-white/90">
                Open the Ledger pipeline →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
