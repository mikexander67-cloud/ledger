type IconProps = { className?: string };

export function Logo({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect width="32" height="32" rx="8" fill="url(#lg)" />
      <path d="M9 9v14h14" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18l3-4 3 2 4-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f46e5" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const paths: Record<string, string> = {
  board: "M4 5h16M4 5v14M10 5v14M16 5v14M4 19h16",
  contact: "M16 19v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1M10 11a3 3 0 100-6 3 3 0 000 6zM17 11l2 2 4-4",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  bell: "M18 16v-5a6 6 0 10-12 0v5l-2 2h16l-2-2zM10 21a2 2 0 004 0",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
  export: "M12 3v12m0-12l-4 4m4-4l4 4M5 15v4a2 2 0 002 2h10a2 2 0 002-2v-4",
};

export function FeatureIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={paths[name] ?? paths.board} />
    </svg>
  );
}

export function Check({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
