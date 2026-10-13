// Builds src/content/cityPages.json: data-backed city pages for directory cities that don't have a
// hand-written guide. Each city is matched to its nearest NOAA 1991–2020 Climate Normals station
// (public domain) within MAX_KM; cities without a nearby station get no page (they stay in the
// state-page directory).
// Usage: node scripts/build-city-pages.mjs <path-to-extracted-noaa-normals-csv-folder>
import fs from "fs";
import path from "path";

const NOAA_DIR = process.argv[2];
const MAX_KM = 50;
if (!NOAA_DIR || !fs.existsSync(NOAA_DIR)) throw new Error("Pass the folder of extracted NOAA annual/seasonal normals CSVs");

const COLS = {
  hdd: "ANN-HTDD-NORMAL",
  cdd: "ANN-CLDD-NORMAL",
  janLow: "DJF-TMIN-NORMAL",
  julHigh: "JJA-TMAX-NORMAL",
  hot90: "ANN-TMAX-AVGNDS-GRTH090",
  freeze32: "ANN-TMIN-AVGNDS-LSTH032",
  below0: "ANN-TMIN-AVGNDS-LSTH000",
};

function parseCsvLine(line) {
  const out = [];
  let cur = "", q = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (q) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch;
    } else if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = ""; } else cur += ch;
  }
  out.push(cur);
  return out;
}

// 1. Load stations that have every value we need.
const stations = [];
for (const f of fs.readdirSync(NOAA_DIR).filter((x) => x.endsWith(".csv"))) {
  const lines = fs.readFileSync(path.join(NOAA_DIR, f), "utf8").trim().split(/\r?\n/);
  if (lines.length < 2) continue;
  const head = parseCsvLine(lines[0]);
  const row = parseCsvLine(lines[1]);
  const get = (k) => row[head.indexOf(k)];
  const vals = {};
  let ok = true;
  for (const [k, col] of Object.entries(COLS)) {
    const v = parseFloat(get(col));
    if (!Number.isFinite(v) || v < -500) { ok = false; break; }
    vals[k] = v;
  }
  if (!ok) continue;
  const lat = parseFloat(get("LATITUDE")), lng = parseFloat(get("LONGITUDE")), elevM = parseFloat(get("ELEVATION"));
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) continue;
  const name = (get("NAME") || "").replace(/,\s*[A-Z]{2}\s+US$/, "").replace(/\s+/g, " ").trim();
  stations.push({ id: get("STATION"), name, lat, lng, elevFt: Number.isFinite(elevM) ? elevM * 3.28084 : 0, ...vals });
}
console.log("stations with full data:", stations.length);

const toRad = (d) => (d * Math.PI) / 180;
function km(a, b) {
  const dLat = toRad(b.lat - a.lat), dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

// 2. City coordinates from the LeadSmart index.
const raw = JSON.parse(fs.readFileSync("scripts/.cities-raw.json", "utf8"));
const norm = (s) => s.toUpperCase().replace(/[^A-Z0-9 ]/g, "").replace(/\bSAINT\b/g, "ST").replace(/\s+/g, " ").trim();
const coords = new Map();
for (const [city, st, , , , lat, lng] of raw.rows) if (lat != null && lng != null) coords.set(`${norm(city)}|${st}`, { lat, lng });

// 3. Skip cities that already have a hand-written guide.
const guides = new Set(
  [...fs.readFileSync("src/content/locations.ts", "utf8").matchAll(/name: "([^"]+)",\n\s+stateSlug: "([a-z-]+)"/g), ...fs.readFileSync("src/content/locationsMore.ts", "utf8").matchAll(/name: "([^"]+)",\n\s+stateSlug: "([a-z-]+)"/g)].map((m) => `${norm(m[1])}|${m[2]}`),
);
const stateSlugs = Object.fromEntries(
  [...fs.readFileSync("src/content/states/northeastMidwest.ts", "utf8").matchAll(/slug: "([a-z-]+)", name: "[^"]+", abbr: "([A-Z]{2})"/g),
   ...fs.readFileSync("src/content/states/south.ts", "utf8").matchAll(/slug: "([a-z-]+)", name: "[^"]+", abbr: "([A-Z]{2})"/g),
   ...fs.readFileSync("src/content/states/west.ts", "utf8").matchAll(/slug: "([a-z-]+)", name: "[^"]+", abbr: "([A-Z]{2})"/g)].map((m) => [m[2], m[1]]),
);
const guideSlugs = new Set([...fs.readFileSync("src/content/locations.ts", "utf8").matchAll(/slug: "([a-z-]+)",\n\s+name:/g), ...fs.readFileSync("src/content/locationsMore.ts", "utf8").matchAll(/slug: "([a-z-]+)",\n\s+name:/g)].map((m) => m[1]));

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const dir = JSON.parse(fs.readFileSync("src/content/cityDirectory.json", "utf8"));

const out = {};
let made = 0, noStation = 0, skipped = 0;
for (const [st, list] of Object.entries(dir.states)) {
  const stateSlug = stateSlugs[st];
  if (!stateSlug) continue;
  const used = new Set();
  const pages = [];
  for (const c of list) {
    const key = `${norm(c.n)}|${st}`;
    if (guides.has(`${norm(c.n)}|${stateSlug}`)) { skipped++; continue; }
    const pos = coords.get(key);
    if (!pos) { noStation++; continue; }
    let best = null, bestKm = Infinity;
    for (const s of stations) {
      if (Math.abs(s.lat - pos.lat) > 1 || Math.abs(s.lng - pos.lng) > 1.3) continue;
      const d = km(pos, s);
      if (d < bestKm) { bestKm = d; best = s; }
    }
    if (!best || bestKm > MAX_KM) { noStation++; continue; }
    let slug = slugify(c.n);
    if (guideSlugs.has(slug) || used.has(slug)) slug = `${slug}-${st.toLowerCase()}`;
    if (used.has(slug)) continue;
    used.add(slug);
    pages.push({
      slug, name: c.n, lat: pos.lat, lng: pos.lng, zips: c.z,
      station: { name: best.name, miles: Math.round(bestKm * 0.621371) },
      climate: {
        janLow: Math.round(best.janLow), julHigh: Math.round(best.julHigh), hdd: Math.round(best.hdd), cdd: Math.round(best.cdd),
        hot90: Math.round(best.hot90), freeze32: Math.round(best.freeze32), below0: Math.round(best.below0), elevFt: Math.round(best.elevFt),
      },
    });
  }
  // Nearby: the closest other city pages in the same state.
  for (const p of pages) {
    p.nearby = pages.filter((x) => x !== p).map((x) => [x.slug, km(p, x)]).sort((a, b) => a[1] - b[1]).slice(0, 6).map(([s, d]) => ({ slug: s, miles: Math.round(d * 0.621371) }));
  }
  for (const p of pages) { delete p.lat; delete p.lng; }
  if (pages.length) out[stateSlug] = pages;
  made += pages.length;
}
fs.writeFileSync("src/content/cityPages.json", JSON.stringify({ source: "NOAA NCEI U.S. Climate Normals 1991–2020 (annual/seasonal)", builtFrom: dir.dataDate, states: out }));
console.log(`${made} city pages · skipped ${skipped} with full guides · ${noStation} without a station within ${MAX_KM} km`);
