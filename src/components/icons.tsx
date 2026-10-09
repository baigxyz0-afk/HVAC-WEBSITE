import type { IconName } from "@/content/types";

// Monoline 1.5px icons.
const paths: Record<IconName, string> = {
  snow: "M12 2v20M4.9 7l14.2 10M19.1 7 4.9 17M9 3.5l3 2 3-2M9 20.5l3-2 3 2",
  flame: "M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .5 2 1.5 3 2.5 3 0-3-1-5 0-8z",
  heatpump: "M3 6h18v12H3zM9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M12 9v6M9 12h6M17 8.5h2M17 15.5h2",
  fan: "M12 12c0-4 1-8 4-8s2 5-4 8zM12 12c4 0 8 1 8 4s-5 2-8-4zM12 12c0 4-1 8-4 8s-2-5 4-8zM12 12c-4 0-8-1-8-4s5-2 8 4z",
  filter: "M4 5h16l-6 7v6l-4 2v-8L4 5z",
  duct: "M3 8h10a4 4 0 0 1 4 4v9M3 13h7a2 2 0 0 1 2 2v6M17 3v3M21 3v18",
  thermostat: "M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0zM12 17v.01M12 9v5",
  drop: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
  gauge: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 12l4-4M7 16h10",
  gas: "M6 21V8l6-5 6 5v13M10 21v-5h4v5",
  alert: "M12 3l9.5 17h-19L12 3zM12 10v4M12 17v.01",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  check: "M5 12l5 5L20 7",
  pin: "M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zM12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  clock: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 7v5l3 2",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z",
  wrench: "M14.5 5.5a4 4 0 0 0 5 5L11 19a2 2 0 0 1-3-3l8.5-8.5a4 4 0 0 0-2-2z",
  sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
