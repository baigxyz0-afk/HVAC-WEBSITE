// Service-area ZIPs, derived from the published city records.
// Replace with the LeadSmart HVAC coverage list when it's available.
import { publishedCities } from "./locations";

export const coverageDate = "2026-09-28";

export const coveredZips: Record<string, { city: string; tier: "A" | "B" }> = {};

for (const c of publishedCities) {
  for (const zip of c.zips) coveredZips[zip] ??= { city: c.name, tier: "A" };
}

export function zipCoverage(zip: string) {
  return coveredZips[zip] ?? null;
}
