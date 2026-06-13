import { AppSidebar } from "@/components/app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-1">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border bg-background px-5">
          <div className="text-sm text-muted">
            Workspace <span className="text-foreground">/ Sales</span>
          </div>
          <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">Live demo</span>
        </header>
        <main className="flex-1 overflow-y-auto bg-background p-5 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
