"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: "M4 13h7V4H4v9zm0 7h7v-5H4v5zm9 0h7V11h-7v9zm0-16v5h7V4h-7z" },
  { href: "/pipeline", label: "Pipeline", icon: "M4 5h16M4 5v14M10 5v14M16 5v14M4 19h16" },
  { href: "/contacts", label: "Contacts", icon: "M16 19v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1M10 11a3 3 0 100-6 3 3 0 000 6z" },
  { href: "/settings", label: "Settings", icon: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 13a7.5 7.5 0 000-2l2-1.5-2-3.4-2.3 1a7.5 7.5 0 00-1.7-1L14.9 3H10l-.4 2.6a7.5 7.5 0 00-1.7 1l-2.3-1-2 3.4 2 1.5a7.5 7.5 0 000 2l-2 1.5 2 3.4 2.3-1a7.5 7.5 0 001.7 1L10 21h4.9l.4-2.6a7.5 7.5 0 001.7-1l2.3 1 2-3.4-2-1.5z" },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-60 shrink-0 border-r border-border bg-card md:flex md:flex-col">
      <div className="flex h-16 items-center gap-2 px-5 font-semibold">
        <Logo /> Ledger
      </div>
      <nav className="flex-1 space-y-1 px-3 py-2">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                active ? "bg-brand text-brand-foreground" : "text-muted hover:bg-surface hover:text-foreground"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border p-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/15 text-xs font-semibold text-brand">MO</span>
          <span className="flex flex-col leading-tight">
            <span className="text-foreground">Michael O.</span>
            <span className="text-xs text-muted">Team plan</span>
          </span>
        </div>
      </div>
    </aside>
  );
}
