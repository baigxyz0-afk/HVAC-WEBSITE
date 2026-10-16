// Service × location coverage matrix (playbook QA). Every published service × every covered city is
// listed with its eligibility and publication status, so "not eligible" is kept apart from
// "not yet developed". Optional BASE crawls each published URL for its live status code.
// Usage: node scripts/coverage-matrix.mjs            → reports/coverage-matrix.{csv,json}
//        BASE=http://localhost:3102 node scripts/coverage-matrix.mjs   (adds HTTP status)
import fs from "fs";
import path from "path";
import { createJiti } from "jiti";

const root = process.cwd();
const jiti = createJiti(import.meta.url, {
  alias: { "@/content/cityPages": path.join(root, "src/content/cityPages.ts"), "@/content/cityDirectory": path.join(root, "src/content/cityDirectory.ts"), "@": path.join(root, "src"), "server-only": path.join(root, "scripts/empty.cjs") },
  extensions: [".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
});
const { publishedServices } = await jiti.import(root + "/src/content/services.ts");
const { cities, states, allCityServices } = await jiti.import(root + "/src/content/locations.ts");
const { allDataCities, dataCityOk } = await jiti.import(root + "/src/content/cityPages.ts");
const { indexableUrls, indexableCities, indexableCityServices } = await jiti.import(root + "/src/lib/sitemap.ts");
const { cityServiceQuality } = await jiti.import(root + "/src/lib/quality.ts");
const { routes } = await jiti.import(root + "/src/lib/routes.ts");

const inSitemap = new Set(indexableUrls().map((u) => u.path));
const guideOk = new Set(indexableCities().map((c) => c.slug));
const csOk = new Set(indexableCityServices().map((cs) => `${cs.citySlug}|${cs.serviceSlug}`));
const stateName = Object.fromEntries(states.map((s) => [s.slug, s.name]));

// Inbound internal links, from a crawl when BASE is given.
const BASE = process.env.BASE?.replace(/\/$/, "");
const inbound = new Map();
const status = new Map();

const rows = [];
const add = (r) => rows.push({ inbound: "", status: "", ...r, inSitemap: inSitemap.has(r.url) });

// Hand-written city guides: city page + every published service.
for (const c of cities) {
  add({ url: routes.city(c.stateSlug, c.slug), type: "city", service: "", city: c.name, state: stateName[c.stateSlug], eligibility: guideOk.has(c.slug) ? "eligible" : "needs verification", publication: guideOk.has(c.slug) ? "published" : "not yet developed", issues: guideOk.has(c.slug) ? "" : "below city quality gate" });
  for (const s of publishedServices) {
    const cs = allCityServices.find((x) => x.citySlug === c.slug && x.serviceSlug === s.slug);
    const url = routes.cityService(c.stateSlug, c.slug, s.slug);
    if (!cs) add({ url, type: "city-service", service: s.name, city: c.name, state: stateName[c.stateSlug], eligibility: "eligible", publication: "not yet developed", issues: "no local content written yet" });
    else {
      const q = cityServiceQuality(cs);
      const ok = csOk.has(`${c.slug}|${s.slug}`);
      add({ url, type: "city-service", service: s.name, city: c.name, state: stateName[c.stateSlug], eligibility: ok ? "eligible" : "needs verification", publication: ok ? "published" : "not yet developed", issues: ok ? "" : (q.reasons ?? []).join("; ") || "below quality gate" });
    }
  }
}
// Data-backed city pages (NOAA climate): city page only. City × service pages for these would reuse
// the generic service text with a city name swapped in, so they are deliberately not eligible.
for (const c of allDataCities()) {
  const ok = dataCityOk(c);
  add({ url: routes.city(c.stateSlug, c.slug), type: "city", service: "", city: c.name, state: stateName[c.stateSlug], eligibility: ok ? "eligible" : "not eligible", publication: ok ? "published" : "not eligible", issues: ok ? "" : "climate station too far or no neighbors" });
  for (const s of publishedServices)
    add({ url: routes.cityService(c.stateSlug, c.slug, s.slug), type: "city-service", service: s.name, city: c.name, state: stateName[c.stateSlug], eligibility: "not eligible", publication: "not eligible", issues: "no city-specific service content beyond climate data (would be city-swapped duplicate)" });
}

if (BASE) {
  const published = rows.filter((r) => r.publication === "published");
  for (const r of published) {
    const res = await fetch(BASE + r.url, { redirect: "manual" }).catch(() => null);
    status.set(r.url, res?.status ?? "ERR");
    if (res?.ok) for (const m of (await res.text()).matchAll(/<a[^>]+href="(\/[^"#?]*)/g)) inbound.set(m[1], (inbound.get(m[1]) ?? 0) + (m[1] === r.url ? 0 : 1));
  }
  for (const r of rows) if (status.has(r.url)) Object.assign(r, { status: status.get(r.url), inbound: inbound.get(r.url) ?? 0 });
}

fs.mkdirSync("reports", { recursive: true });
const cols = ["url", "type", "service", "city", "state", "eligibility", "publication", "inSitemap", "status", "inbound", "issues"];
const esc = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
fs.writeFileSync("reports/coverage-matrix.csv", [cols.join(","), ...rows.map((r) => cols.map((k) => esc(r[k])).join(","))].join("\n"));
const count = (f) => rows.filter(f).length;
const summary = {
  combinations: rows.length,
  eligible: count((r) => r.eligibility === "eligible"),
  published: count((r) => r.publication === "published"),
  notYetDeveloped: count((r) => r.publication === "not yet developed"),
  notEligible: count((r) => r.publication === "not eligible"),
  publishedNotInSitemap: count((r) => r.publication === "published" && !r.inSitemap),
  ...(BASE && { non200: count((r) => r.status && r.status !== 200), zeroInbound: count((r) => r.status === 200 && r.inbound === 0) }),
};
fs.writeFileSync("reports/coverage-matrix.json", JSON.stringify({ summary, rows }, null, 1));
console.log(summary);
