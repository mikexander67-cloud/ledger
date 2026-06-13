"use client";

import { useMemo, useState } from "react";
import { STAGES, type Stage, type Deal, initialDeals, stageMeta, money } from "@/lib/data";

export function PipelineBoard() {
  const [deals, setDeals] = useState<Deal[]>(initialDeals);
  const [adding, setAdding] = useState<Stage | null>(null);

  const move = (id: string, dir: -1 | 1) =>
    setDeals((prev) =>
      prev.map((d) => {
        if (d.id !== id) return d;
        const idx = STAGES.indexOf(d.stage) + dir;
        if (idx < 0 || idx >= STAGES.length) return d;
        return { ...d, stage: STAGES[idx], updated: "now" };
      })
    );

  const remove = (id: string) => setDeals((prev) => prev.filter((d) => d.id !== id));

  const addDeal = (stage: Stage, company: string, value: number) => {
    setDeals((prev) => [
      { id: `n${Date.now()}`, company, contact: "New contact", value, stage, owner: "MO", updated: "now" },
      ...prev,
    ]);
    setAdding(null);
  };

  const totals = useMemo(() => {
    const open = deals.filter((d) => d.stage !== "Won");
    const weighted = deals.reduce((s, d) => s + d.value * stageMeta[d.stage].prob, 0);
    const won = deals.filter((d) => d.stage === "Won").reduce((s, d) => s + d.value, 0);
    return {
      pipeline: open.reduce((s, d) => s + d.value, 0),
      weighted,
      won,
      count: deals.length,
    };
  }, [deals]);

  return (
    <div>
      {/* Summary */}
      <div className="mb-5 grid gap-4 sm:grid-cols-4">
        <Summary label="Open pipeline" value={money(totals.pipeline)} />
        <Summary label="Weighted forecast" value={money(Math.round(totals.weighted))} accent />
        <Summary label="Won this quarter" value={money(totals.won)} />
        <Summary label="Total deals" value={String(totals.count)} />
      </div>

      {/* Board */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {STAGES.map((stage) => {
          const cards = deals.filter((d) => d.stage === stage);
          const sum = cards.reduce((s, d) => s + d.value, 0);
          return (
            <div key={stage} className="flex flex-col rounded-xl bg-surface p-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: stageMeta[stage].color }} />
                  {stage}
                </div>
                <span className="rounded-full bg-card px-2 py-0.5 text-xs text-muted">{cards.length}</span>
              </div>
              <p className="mb-2 text-xs text-muted">{money(sum)}</p>

              <div className="flex-1 space-y-2">
                {cards.map((d) => (
                  <DealCard key={d.id} deal={d} onMove={move} onRemove={remove} />
                ))}
              </div>

              {adding === stage ? (
                <AddForm onAdd={(c, v) => addDeal(stage, c, v)} onCancel={() => setAdding(null)} />
              ) : (
                <button
                  onClick={() => setAdding(stage)}
                  className="mt-2 rounded-lg border border-dashed border-border py-1.5 text-xs font-medium text-muted transition hover:border-brand/40 hover:text-brand"
                >
                  + Add deal
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Summary({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border p-4 ${accent ? "border-brand/30 bg-brand/5" : "border-border bg-card"}`}>
      <p className="text-xs text-muted">{label}</p>
      <p className={`mt-1 text-xl font-semibold tracking-tight ${accent ? "text-brand" : ""}`}>{value}</p>
    </div>
  );
}

function DealCard({
  deal,
  onMove,
  onRemove,
}: {
  deal: Deal;
  onMove: (id: string, dir: -1 | 1) => void;
  onRemove: (id: string) => void;
}) {
  const i = STAGES.indexOf(deal.stage);
  return (
    <div className="group animate-pop rounded-lg border border-border bg-card p-2.5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium leading-tight">{deal.company}</p>
        <button
          onClick={() => onRemove(deal.id)}
          className="text-muted opacity-0 transition group-hover:opacity-100 hover:text-danger"
          aria-label="Remove deal"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" /></svg>
        </button>
      </div>
      <p className="mt-0.5 text-xs text-muted">{deal.contact}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-brand">{money(deal.value)}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onMove(deal.id, -1)}
            disabled={i === 0}
            className="flex h-6 w-6 items-center justify-center rounded border border-border text-muted transition hover:bg-surface disabled:opacity-30"
            aria-label="Move back"
          >
            ‹
          </button>
          <button
            onClick={() => onMove(deal.id, 1)}
            disabled={i === STAGES.length - 1}
            className="flex h-6 w-6 items-center justify-center rounded border border-border text-muted transition hover:bg-surface disabled:opacity-30"
            aria-label="Move forward"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

function AddForm({ onAdd, onCancel }: { onAdd: (company: string, value: number) => void; onCancel: () => void }) {
  const [company, setCompany] = useState("");
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!company.trim()) return;
        onAdd(company.trim(), Number(value) || 5000);
      }}
      className="mt-2 animate-pop space-y-1.5 rounded-lg border border-brand/30 bg-card p-2"
    >
      <input
        autoFocus
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        className="w-full rounded border border-border bg-surface px-2 py-1 text-sm outline-none focus:border-brand"
      />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value ($)"
        inputMode="numeric"
        className="w-full rounded border border-border bg-surface px-2 py-1 text-sm outline-none focus:border-brand"
      />
      <div className="flex gap-1.5">
        <button type="submit" className="flex-1 rounded bg-brand py-1 text-xs font-semibold text-brand-foreground hover:bg-brand-600">
          Add
        </button>
        <button type="button" onClick={onCancel} className="rounded border border-border px-2 py-1 text-xs text-muted hover:bg-surface">
          Cancel
        </button>
      </div>
    </form>
  );
}
