import Link from "next/link";

// Ridge mark (mountain ridge with an aspen leaf) + wordmark.
export function LogoMark({ className = "h-9 w-9", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" fill={light ? "#2f6b5a" : "#1b2838"} />
      <path d="M4 31l9-12 5 6 7-11 11 17z" fill="#9fd3c1" />
      <path d="M4 31l9-12 5 6 7-11 11 17" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M29 6c3 1 5 4 4 7-3 0-5-2-6-4 0-1 1-2 2-3z" fill="#e0a458" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Aspenridge Heating & Air home">
      <LogoMark light={light} />
      <span className="leading-none">
        <span className={`block font-serif text-xl font-semibold sm:text-2xl ${light ? "text-white" : "text-ink"}`}>Aspenridge</span>
        <span className={`block text-[0.65rem] font-bold tracking-[0.2em] ${light ? "text-teal-tint" : "text-teal-deep"}`}>HEATING &amp; AIR</span>
      </span>
    </Link>
  );
}
