// Builds src/content/cityDirectory.json: every covered city (LeadSmart HVAC coverage) with a
// population of at least MIN_POP, grouped by state, with its covered ZIP codes.
// Population and coordinates come from the LeadSmart city index (scripts/.cities-raw.json,
// downloaded from leadsmart-coverage.netlify.app/api/cities.json).
// Usage: node scripts/pull-coverage.mjs && node scripts/build-city-directory.mjs
import fs from "fs";

const MIN_POP = 25000;
// Military installations: on-base housing isn't something homeowners hire contractors for.
// (Real cities named Fort, like Fort Worth and Fort Collins, are not matched.)
const MILITARY = /\b(AFB|JBSA|JBLM|JB|Naval|Air Station|Air Force|Army|Marine|MCAS|NAS|Navy)\b|^(Fort|Ft) (Leavenworth|Bragg|Hood|Cavazos|Campbell|Carson|Shafter|Gordon|Eisenhower|Stewart|Benning|Moore|Riley|Sill|Polk|Johnson|Knox|Drum|Jackson|Lee|Gregg-Adams|Meade|Myer|Belvoir|Huachuca|Bliss|Irwin|Wainwright|Greely|Dix|Lewis|Leonard Wood|Rucker|Novosel)\b|Ft Sam Houston|Wright-Patterson|Camp Lejeune|Camp Pendleton|Quantico|West Point/i;
const cov = JSON.parse(fs.readFileSync("src/content/coverage-data.json", "utf8"));
const raw = JSON.parse(fs.readFileSync("scripts/.cities-raw.json", "utf8"));

const norm = (s) => s.toUpperCase().replace(/[^A-Z0-9 ]/g, "").replace(/\bSAINT\b/g, "ST").replace(/\s+/g, " ").trim();
const info = new Map();
for (const [city, st, , , pop] of raw.rows) info.set(`${norm(city)}|${st}`, { name: city, pop: pop || 0 });

const byCity = new Map();
for (const [zip, [city, st]] of Object.entries(cov.zips)) {
  const key = `${norm(city)}|${st}`;
  if (!byCity.has(key)) byCity.set(key, { st, name: info.get(key)?.name ?? city, pop: info.get(key)?.pop ?? 0, zips: [] });
  byCity.get(key).zips.push(zip);
}

// The source assigns a whole metro's population to every postal place in that metro (e.g. every
// Queens neighborhood shows ~19M). Treat a population shared by 3+ places in a state as unreliable:
// keep those places only when they have at least 2 covered ZIPs (real neighborhoods), which drops
// small towns that merely inherited a metro figure. Population is used for ranking, never displayed.
const shared = new Map();
for (const c of byCity.values()) if (c.pop) shared.set(`${c.pop}|${c.st}`, (shared.get(`${c.pop}|${c.st}`) ?? 0) + 1);

const states = {};
for (const c of byCity.values()) {
  if (c.pop < MIN_POP) continue;
  if ((shared.get(`${c.pop}|${c.st}`) ?? 0) >= 3 && c.zips.length < 2) continue;
  if (MILITARY.test(c.name)) continue;
  (states[c.st] ??= []).push({ n: c.name, p: c.pop, z: c.zips.sort() });
}
for (const list of Object.values(states)) list.sort((a, b) => b.p - a.p || a.n.localeCompare(b.n));

const total = Object.values(states).reduce((n, l) => n + l.length, 0);
fs.writeFileSync("src/content/cityDirectory.json", JSON.stringify({ dataDate: cov.dataDate, minPopulation: MIN_POP, total, states }));
console.log(`${total} cities in ${Object.keys(states).length} states`);
