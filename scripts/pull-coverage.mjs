// Pulls LeadSmart HVAC (Call) coverage for all 50 states + DC from the public coverage site
// into src/content/coverage-data.json (server-only; never shipped to the browser).
// Usage: node scripts/pull-coverage.mjs
import fs from "fs";

const BASE = "https://leadsmart-coverage.netlify.app/api/";
const STATES = "AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ");

const meta = await fetch(BASE + "meta.json").then((r) => r.json());
const zips = {};
const summary = {};
for (const st of STATES) {
  const r = await fetch(`${BASE}state/${st}.json`);
  if (!r.ok) { summary[st] = { zips: 0, avg: 0, max: 0, topCities: [] }; continue; }
  const shard = await r.json();
  const cities = {};
  let n = 0, sum = 0, max = 0;
  for (const raw of shard.rows) {
    if ((raw[2] < 0 ? "" : shard.niche[raw[2]]) !== "HVAC") continue;
    if ((raw[3] < 0 ? "" : shard.ptype[raw[3]]) !== "Call") continue;
    const city = raw[0] < 0 ? "" : shard.city[raw[0]];
    const zip = String(raw[1]).padStart(5, "0");
    zips[zip] = [city, st];
    n++; sum += raw[4]; max = Math.max(max, raw[4]);
    const c = (cities[city] ??= { zips: 0, pop: 0, max: 0 });
    c.zips++; c.pop += raw[5] || 0; c.max = Math.max(c.max, raw[4]);
  }
  const topCities = Object.entries(cities).sort((a, b) => b[1].pop - a[1].pop).slice(0, 12).map(([name, c]) => ({ name, zips: c.zips, maxPayout: c.max }));
  summary[st] = { zips: n, avg: n ? +(sum / n).toFixed(2) : 0, max, topCities };
  console.log(st, n);
}
fs.writeFileSync("src/content/coverage-data.json", JSON.stringify({ dataDate: meta.data_date, zips }));
fs.writeFileSync("docs/coverage-summary.json", JSON.stringify({ dataDate: meta.data_date, states: summary }, null, 1));
console.log("total", Object.keys(zips).length);
