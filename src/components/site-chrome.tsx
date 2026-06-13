import Link from "next/link";
import { Logo } from "@/components/icons";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Logo />
          <span className="text-lg">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted hover:text-foreground sm:block">
            Sign in
          </Link>
          <Link href="/pipeline" className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition hover:bg-brand-600">
            Open Ledger
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-medium text-foreground">
          <Logo className="h-5 w-5" />
          {site.name}
        </div>
        <p>A SaaS product designed &amp; built by {site.author} with Claude Code &middot; Next.js &amp; TypeScript</p>
        <p>&copy; {site.year} {site.name}. Demo product.</p>
      </div>
    </footer>
  );
}
