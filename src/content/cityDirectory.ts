import "server-only";
// Directory of popular covered cities per state (population >= 25,000 in LeadSmart's index),
// built by scripts/build-city-directory.mjs. These are listed on state pages, not separate pages:
// separate thin pages for every city would be doorway pages. Population is used only for ordering.
import data from "./cityDirectory.json";

type Raw = { dataDate: string; minPopulation: number; total: number; states: Record<string, { n: string; p: number; z: string[] }[]> };
const d = data as unknown as Raw;

export const directoryTotal = d.total;
export const directoryMinPopulation = d.minPopulation;

export function directoryFor(abbr: string) {
  return (d.states[abbr] ?? []).map((c) => ({ name: c.n, zips: c.z.slice(0, 6), zipCount: c.z.length }));
}
