import Link from "next/link";
import { Logo } from "@/components/icons";

export function AuthCard({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-16">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]" />
      <div className="absolute inset-0 bg-radial-brand" />
      <div className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-xl shadow-brand/10">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Logo /> Ledger
        </Link>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">
          {isLogin ? "Welcome back" : "Create your account"}
        </h1>
        <p className="mt-1 text-sm text-muted">
          {isLogin ? "Sign in to your pipeline." : "Get your sales organized in minutes."}
        </p>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition hover:bg-surface">
          <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 01-2.2 3.3v2.7h3.6c2.1-1.9 3.2-4.8 3.2-7.8z"/><path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.2-1.9-6-4.5H2.3v2.8A11 11 0 0012 23z"/><path fill="#FBBC05" d="M6 14.3a6.6 6.6 0 010-4.2V7.3H2.3a11 11 0 000 9.8L6 14.3z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 002.3 7.3L6 10.1c.8-2.6 3.2-4.5 6-4.5z"/></svg>
          Continue with Google
        </button>

        <div className="my-5 flex items-center gap-3 text-xs text-muted">
          <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
        </div>

        <form className="space-y-3">
          {!isLogin && <Field label="Full name" type="text" placeholder="Jane Doe" />}
          <Field label="Work email" type="email" placeholder="jane@company.com" />
          <Field label="Password" type="password" placeholder="••••••••" />
          <Link href="/pipeline" className="mt-2 block rounded-xl bg-brand px-4 py-2.5 text-center text-sm font-semibold text-brand-foreground transition hover:bg-brand-600">
            {isLogin ? "Sign in" : "Create account"}
          </Link>
        </form>

        <p className="mt-5 text-center text-sm text-muted">
          {isLogin ? "New to Ledger? " : "Already have an account? "}
          <Link href={isLogin ? "/signup" : "/login"} className="font-medium text-brand hover:underline">
            {isLogin ? "Create an account" : "Sign in"}
          </Link>
        </p>
      </div>
    </main>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}
