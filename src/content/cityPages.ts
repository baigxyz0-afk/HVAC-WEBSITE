import "server-only";
// Data-backed city pages (built by scripts/build-city-pages.mjs). Each has its own NOAA 1991–2020
// climate normals from the nearest station, covered ZIPs and nearest neighboring cities.
import data from "./cityPages.json";
import type { Climate } from "@/lib/climateAdvice";

export type DataCity = {
  slug: string;
  name: string;
  zips: string[];
  station: { name: string; miles: number };
  climate: Climate;
  nearby: { slug: string; miles: number }[];
  /** Nearby towns that share this climate station and are covered on this page. */
  alsoServes?: { name: string; zips: string[]; miles: number }[];
};

const d = data as unknown as { source: string; states: Record<string, DataCity[]> };
export const climateSource = d.source;

export function dataCitiesIn(stateSlug: string): DataCity[] {
  return d.states[stateSlug] ?? [];
}

export function getDataCity(stateSlug: string, slug: string) {
  return dataCitiesIn(stateSlug).find((c) => c.slug === slug);
}

export function allDataCities() {
  return Object.entries(d.states).flatMap(([stateSlug, list]) => list.map((c) => ({ stateSlug, ...c })));
}

/** Quality gate: a nearby climate station, at least one covered ZIP and at least one neighbor link. */
export function dataCityOk(c: DataCity) {
  return c.station.miles <= 31 && c.zips.length >= 1 && c.nearby.length >= 1;
}
