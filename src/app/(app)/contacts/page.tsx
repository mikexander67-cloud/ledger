import { contacts, money } from "@/lib/data";

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Contacts</h1>
          <p className="mt-1 text-sm text-muted">{contacts.length} people across your deals.</p>
        </div>
        <div className="flex gap-2">
          <input placeholder="Search contacts…" className="rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none transition focus:border-brand/50" />
          <button className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition hover:bg-brand-600">+ Add contact</button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c) => (
          <div key={c.email} className="rounded-2xl border border-border bg-card p-5 transition hover:shadow-lg hover:shadow-brand/5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                {c.name.split(" ").map((p) => p[0]).join("")}
              </span>
              <div>
                <p className="font-medium leading-tight">{c.name}</p>
                <p className="text-xs text-muted">{c.title} · {c.company}</p>
              </div>
            </div>
            <p className="mt-3 truncate text-sm text-muted">{c.email}</p>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm">
              <span className="text-muted">{c.deals} {c.deals === 1 ? "deal" : "deals"}</span>
              <span className="font-semibold text-brand">{money(c.value)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
