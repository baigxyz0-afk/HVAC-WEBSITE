import Link from "next/link";
import type { ReactNode } from "react";
import { routes } from "./routes";

// Contextual internal links: topic -> owning page, first mention only, no self-links, capped per page.
const TOPICS: [RegExp, string][] = [
  [/\bcapacitors?\b/i, routes.service("ac-repair")],
  [/\bload calculation\b|\bManual J\b/i, routes.service("ac-installation")],
  [/\bcottonwood\b|\bcoil cleaning\b/i, routes.service("ac-tune-up")],
  [/\bflame sensor\b|\bignitors?\b/i, routes.service("furnace-repair")],
  [/\bhigh-efficiency furnaces?\b|\bcondensing furnaces?\b|\bchimney liner\b/i, routes.service("furnace-installation")],
  [/\bcarbon monoxide\b|\bCO alarms?\b/i, routes.guide("carbon-monoxide-alarm-what-to-do")],
  [/\bsafety check\b/i, routes.service("furnace-tune-up")],
  [/\bdual-fuel\b/i, routes.guide("heat-pump-vs-furnace-denver")],
  [/\bheat pumps?\b/i, routes.service("heat-pump-installation")],
  [/\bdefrost\b/i, routes.service("heat-pump-repair")],
  [/\bmini-splits?\b|\bductless\b/i, routes.service("ductless-mini-splits")],
  [/\bmedia filters?\b|\bMERV\b|\bpollen\b/i, routes.service("air-filtration")],
  [/\bhumidifiers?\b|\bdehumidifiers?\b/i, routes.service("whole-house-humidifiers")],
  [/\bductwork\b|\bducts\b|\breturn air\b/i, routes.service("duct-sealing")],
  [/\bzoning\b/i, routes.service("zoning-systems")],
  [/\bthermostats?\b|\bC-wire\b/i, routes.service("smart-thermostats")],
  [/\bswamp coolers?\b|\bevaporative coolers?\b/i, routes.service("evaporative-coolers")],
  [/\bemergency (?:HVAC|heating|repair)\b/i, routes.emergency()],
  [/\b(?:high-altitude derating|altitude derating)\b/i, routes.cityService("colorado", "castle-rock", "furnace-installation")],
  [/\bhail-damaged? condensers?\b|\bhail damage\b/i, routes.cityService("colorado", "aurora", "ac-repair")],
  [/\badding central air\b/i, routes.cityService("colorado", "denver", "ac-installation")],
  [/\bfrozen coil\b|\biced coil\b/i, routes.guide("ac-frozen-coil")],
  [/\bR-22\b/i, routes.guide("repair-or-replace-hvac")],
  [/\bshort cycling\b/i, routes.guide("furnace-short-cycling")],
  [/\bfilters?\b/i, routes.guide("how-often-change-furnace-filter")],
  [/\biced over\b|\bheat pump iced\b/i, routes.guide("heat-pump-iced-over")],
];

const EXPLICIT = /\[([^\]]+)\]\(([^)]+)\)/g;

export function createLinker(currentPath: string, max = 6) {
  const used = new Set<string>([currentPath]);
  let count = 0;

  function auto(text: string, keyBase: string): ReactNode[] {
    if (count >= max) return [text];
    for (const [re, href] of TOPICS) {
      if (used.has(href)) continue;
      const m = re.exec(text);
      if (!m) continue;
      used.add(href);
      count++;
      const before = text.slice(0, m.index);
      const after = text.slice(m.index + m[0].length);
      return [
        before,
        <Link key={`${keyBase}-${href}`} href={href} className="link">
          {m[0]}
        </Link>,
        ...auto(after, keyBase + "a"),
      ];
    }
    return [text];
  }

  return function link(text: string): ReactNode[] {
    const out: ReactNode[] = [];
    let last = 0;
    let i = 0;
    for (const m of text.matchAll(EXPLICIT)) {
      out.push(...auto(text.slice(last, m.index), `t${i}`));
      const href = m[2];
      if (href === currentPath) out.push(m[1]);
      else {
        used.add(href);
        count++;
        out.push(
          <Link key={`x${i}`} href={href} className="link">
            {m[1]}
          </Link>,
        );
      }
      last = (m.index ?? 0) + m[0].length;
      i++;
    }
    out.push(...auto(text.slice(last), `t${i}`));
    return out;
  };
}

export function stripLinks(text: string) {
  return text.replace(EXPLICIT, "$1");
}
