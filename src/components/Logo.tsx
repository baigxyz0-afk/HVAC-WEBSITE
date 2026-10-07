import Link from "next/link";

// House roofline with a snowflake (cooling) and a flame (heating). Same artwork as scripts/make-brand.mjs.
export function LogoMark({ className = "h-9 w-9" }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="#14263a" />
      <path d="M7.5 19.5 20 8.5l12.5 11" fill="none" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 17.2v14.3h17V17.2" fill="none" stroke="#ffffff" strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M16 21.4v7.4M12.8 23.25l6.4 3.7M12.8 26.95l6.4-3.7" fill="none" stroke="#4aa8ec" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M24.3 20.6c2 1.7 3.5 3.5 3.5 5.5a3.4 3.4 0 0 1-6.8 0c0-1.25.6-2.2 1.35-2.9.2 1 .8 1.65 1.45 1.65 0-1.65-.3-2.85.5-4.25z" fill="#f08a35" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="HVAC Services Hub home">
      <LogoMark light={light} className={`h-9 w-9 ${light ? "rounded-[9px] ring-1 ring-white/25" : ""}`} />
      <span className="leading-none">
        <span className={`block font-serif text-lg font-bold whitespace-nowrap sm:text-xl lg:text-lg xl:text-xl ${light ? "text-white" : "text-ink"}`}>HVAC Services Hub</span>
        <span className={`mt-0.5 block text-[0.6rem] font-bold tracking-[0.18em] ${light ? "text-[#9cc9ee]" : "text-teal-deep"}`}>HEATING · COOLING · AIR</span>
      </span>
    </Link>
  );
}
