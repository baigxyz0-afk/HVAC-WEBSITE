import "server-only";
// LeadSmart HVAC (Call) coverage for all 50 states + DC, pulled by scripts/pull-coverage.mjs.
// Server-only: the national ZIP list is never shipped to the browser.
import data from "./coverage-data.json";

const zips = (data as unknown as { zips: Record<string, [string, string]> }).zips;
export const coverageDate = (data as unknown as { dataDate: string }).dataDate;

export function zipCoverage(zip: string) {
  const z = zips[zip];
  return z ? { city: titleCase(z[0]), state: z[1] } : null;
}

function titleCase(s: string) {
  return s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

const countByState: Record<string, number> = {};
for (const [, st] of Object.values(zips)) countByState[st] = (countByState[st] ?? 0) + 1;

/** Number of ZIP codes in a state where network contractors take HVAC calls. */
export function zipCountForState(abbr: string) {
  return countByState[abbr] ?? 0;
}
