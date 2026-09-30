import Link from "next/link";

// Prairie mark (sun over tallgrass blades) + wordmark.
export function LogoMark({ className = "h-9 w-9", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" fill={light ? "#3a7a4a" : "#14263a"} />
      <circle cx="27" cy="13" r="5" fill="#e0a458" />
      <path d="M11 34c0-9 1-15 4-20M17 34c0-7 2-12 6-15M23 34c0-5 1-8 5-10M8 34c1-6 0-10-2-13" stroke="#a9d6b2" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Tallgrass Heating & Air home">
      <LogoMark light={light} />
      <span className="leading-none">
        <span className={`block font-serif text-2xl font-semibold ${light ? "text-white" : "text-ink"}`}>Tallgrass</span>
        <span className={`block text-[0.65rem] font-bold tracking-[0.2em] ${light ? "text-teal-tint" : "text-teal-deep"}`}>HEATING &amp; AIR</span>
      </span>
    </Link>
  );
}
