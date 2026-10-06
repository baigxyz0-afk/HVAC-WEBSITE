// Crawler-based technical SEO audit. Usage: BASE=http://localhost:3002 node scripts/seo-audit.mjs
// Exit code 1 when any error is found.
const BASE = (process.env.BASE || "http://localhost:3000").replace(/\/$/, "");
const errors = [];
const warns = [];
const err = (u, m) => errors.push(`${u}: ${m}`);
const warn = (u, m) => warns.push(`${u}: ${m}`);

const BANNED = [/in today's fast-paced world/i, /look no further/i, /your trusted partner/i, /we understand that/i, /comprehensive solutions/i, /world-class/i, /one-stop shop/i, /hassle-free/i, /state-of-the-art/i, /peace of mind/i, /lorem ipsum/i, /\{\{[A-Z_]+\}\}/];

async function get(path, opts = {}) {
  const res = await fetch(BASE + path, { redirect: "manual", ...opts });
  return { res, text: res.status < 300 ? await res.text() : "" };
}
const toPath = (loc) => new URL(loc).pathname;
const STATE_ABBR = Object.fromEntries(
  "alabama:AL alaska:AK arizona:AZ arkansas:AR california:CA colorado:CO connecticut:CT delaware:DE district-of-columbia:DC florida:FL georgia:GA hawaii:HI idaho:ID illinois:IL indiana:IN iowa:IA kansas:KS kentucky:KY louisiana:LA maine:ME maryland:MD massachusetts:MA michigan:MI minnesota:MN mississippi:MS missouri:MO montana:MT nebraska:NE nevada:NV new-hampshire:NH new-jersey:NJ new-mexico:NM new-york:NY north-carolina:NC north-dakota:ND ohio:OH oklahoma:OK oregon:OR pennsylvania:PA rhode-island:RI south-carolina:SC south-dakota:SD tennessee:TN texas:TX utah:UT vermont:VT virginia:VA washington:WA west-virginia:WV wisconsin:WI wyoming:WY"
    .split(" ")
    .map((p) => p.split(":")),
);
// Near-duplicate detection: 5-word shingles of each page's <main> text (form markup excluded).
const bodies = new Map();
function shingles(s) {
  const w = s.split(/\W+/).filter(Boolean);
  const out = new Set();
  for (let i = 0; i + 5 <= w.length; i++) out.add(w.slice(i, i + 5).join(" "));
  return out;
}
function jaccard(a, b) {
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return n / (a.size + b.size - n || 1);
}
const attr = (html, re) => (html.match(re) || [])[1];

// 1. robots + sitemaps
const robots = (await get("/robots.txt")).text;
if (!robots) err("/robots.txt", "missing");
const index = (await get("/sitemap.xml")).text;
const subs = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => toPath(m[1]));
if (subs.length !== 6) err("/sitemap.xml", `expected 6 sitemaps, got ${subs.length}`);
const urls = [];
for (const s of subs) {
  const x = (await get(s)).text;
  for (const m of x.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod>/g)) urls.push(toPath(m[1]));
  if (/<url><loc>[^<]+<\/loc><\/url>/.test(x)) err(s, "url without lastmod");
}
const dupes = urls.filter((u, i) => urls.indexOf(u) !== i);
if (dupes.length) err("sitemaps", `duplicates: ${dupes.join(", ")}`);

// 2. per-page checks
const titles = new Map();
const descs = new Map();
const h1s = new Map();
const links = new Map();
for (const path of urls) {
  const { res, text: html } = await get(path);
  if (res.status !== 200) {
    err(path, `status ${res.status}`);
    continue;
  }
  const dec = (s) => s && s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
  const title = dec(attr(html, /<title>([^<]*)<\/title>/));
  const desc = dec(attr(html, /<meta name="description" content="([^"]*)"/));
  const canon = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const robotsMeta = attr(html, /<meta name="robots" content="([^"]*)"/) || "";
  if (!title) err(path, "no title");
  else if (title.length > 65) warn(path, `title ${title.length} chars`);
  if (!desc) err(path, "no description");
  else if (desc.length < 70 || desc.length > 160) warn(path, `description ${desc.length} chars`);
  if (!canon) err(path, "no canonical");
  else if (toPath(canon) !== path) err(path, `canonical points to ${toPath(canon)}`);
  if (/noindex/.test(robotsMeta)) err(path, "noindex page in sitemap");
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  if (h1.length !== 1) err(path, `${h1.length} h1 tags`);
  const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  for (const re of BANNED) if (re.test(text)) err(path, `banned phrase ${re}`);
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0].replace(/<script[\s\S]*?<\/script>/g, "").replace(/<form[\s\S]*?<\/form>/g, "").replace(/<[^>]+>/g, " ").toLowerCase();
  bodies.set(path, shingles(main));
  // City and city+service pages: the ", XX" state in the title must match the state in the URL.
  const locMatch = path.match(/^\/locations\/([a-z-]+)\/[a-z-]+\//);
  const titleAbbr = (title || "").match(/, ([A-Z]{2})\b/);
  if (locMatch && titleAbbr && STATE_ABBR[locMatch[1]] && STATE_ABBR[locMatch[1]] !== titleAbbr[1]) err(path, `wrong state in title (${titleAbbr[1]})`);
  for (const [m, v] of [[titles, title], [descs, desc], [h1s, h1[0]?.[1]]]) {
    if (!v) continue;
    m.set(v, [...(m.get(v) || []), path]);
  }
  // headings skip
  let last = 1;
  for (const m of html.matchAll(/<h([1-6])[\s>]/g)) {
    const lvl = Number(m[1]);
    if (lvl > last + 1) warn(path, `heading skip h${last}→h${lvl}`);
    last = lvl;
  }
  // images alt
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt="/.test(m[0])) err(path, "img without alt");
  // JSON-LD
  const defined = new Set();
  const referenced = new Set();
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch {
      err(path, "invalid JSON-LD");
      continue;
    }
    const walk = (n, top) => {
      if (Array.isArray(n)) return n.forEach((x) => walk(x, top));
      if (n && typeof n === "object") {
        if (n["@id"]) (top || Object.keys(n).length > 1 ? defined : referenced).add(n["@id"]);
        if (n.aggregateRating || n.review) err(path, "rating/review markup");
        for (const [k, v] of Object.entries(n)) if (k !== "@id") walk(v, false);
      }
    };
    walk(data["@graph"] || data, true);
    if (/"FAQPage"/.test(m[1])) {
      for (const q of JSON.parse(m[1])["@graph"].flatMap((n) => n.mainEntity || [])) {
        if (q.name && !text.includes(q.name.replace(/&/g, "&amp;").slice(0, 30).replace(/'/g, "&#x27;")) && !text.includes(q.name.slice(0, 30))) warn(path, `FAQ not visible: ${q.name.slice(0, 40)}`);
      }
    }
  }
  for (const id of referenced) if (!defined.has(id)) err(path, `dangling @id ${id}`);
  // internal links
  const out = new Set();
  for (const m of html.matchAll(/<a[^>]+href="(\/[^"#?]*)/g)) out.add(m[1]);
  links.set(path, out);
}
for (const [m, label] of [[titles, "title"], [descs, "description"], [h1s, "h1"]])
  for (const [v, ps] of m) if (ps.length > 1) err(ps.join(", "), `duplicate ${label}: ${v.slice(0, 50)}`);

// 3. orphans + click depth (BFS from home)
const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const p = queue.shift();
  for (const l of links.get(p) || []) if (!depth.has(l) && urls.includes(l)) {
    depth.set(l, depth.get(p) + 1);
    queue.push(l);
  }
}
for (const u of urls) {
  if (!depth.has(u)) err(u, "orphan (unreachable from home)");
  else if (depth.get(u) > 3) err(u, `click depth ${depth.get(u)}`);
}
const maxDepth = Math.max(...depth.values());

// 3b. near-duplicate clusters among sibling pages (same URL depth and section)
const sib = (p) => p.split("/").filter(Boolean).slice(0, -1).map((s, i) => (i === 0 ? s : "*")).join("/") + "#" + p.split("/").filter(Boolean).length;
const groupsBySib = new Map();
for (const p of bodies.keys()) groupsBySib.set(sib(p), [...(groupsBySib.get(sib(p)) || []), p]);
let maxSim = 0;
for (const list of groupsBySib.values()) {
  for (let i = 0; i < list.length; i++)
    for (let j = i + 1; j < list.length; j++) {
      const s = jaccard(bodies.get(list[i]), bodies.get(list[j]));
      maxSim = Math.max(maxSim, s);
      if (s > 0.6) err(list[i], `near-duplicate of ${list[j]} (${s.toFixed(2)})`);
      else if (s > 0.45) warn(list[i], `similar to ${list[j]} (${s.toFixed(2)})`);
    }
}

// 4. behavior checks
const nf = await get("/definitely-not-a-page/");
if (nf.res.status !== 404) err("/definitely-not-a-page/", `soft 404 (status ${nf.res.status})`);
const slash = await get("/about");
if (![301, 308].includes(slash.res.status)) err("/about", "no trailing-slash redirect");
const param = await get("/about/?utm_source=x");
if (toPath(attr(param.text, /<link rel="canonical" href="([^"]*)"/) || "http://x/") !== "/about/") err("/about/?utm_source=x", "param canonical wrong");
for (const p of ["/lp/ac-repair/", "/request-service/", "/thank-you/"]) {
  const { res, text } = await get(p);
  if (!/noindex/.test(text) || !/noindex/.test(res.headers.get("x-robots-tag") || "")) err(p, "missing noindex meta or header");
}
const kw = await get("/lp/ac-repair/?kw=%3Cscript%3Ealert(1)%3C/script%3E");
if (/<script>alert/.test(kw.text)) err("/lp/ac-repair/", "kw reflected");
const llms = (await get("/llms.txt")).text;
for (const u of urls) if (!llms.includes(u === "/" ? "](" : u)) err("/llms.txt", `missing ${u}`);
const cross = await fetch(BASE + "/api/lead", { method: "POST", headers: { "content-type": "application/json", origin: "https://evil.example" }, body: "{}" });
if (cross.status !== 403) err("/api/lead", `cross-origin not rejected (${cross.status})`);

const zipOk = await (await get("/api/zip/?zip=10001")).res.status;
if (zipOk !== 200) err("/api/zip/", `lookup failed (${zipOk})`);
console.log(`Audited ${urls.length} sitemap URLs · max click depth ${maxDepth} · max sibling similarity ${maxSim.toFixed(2)}`);
if (warns.length) console.log(`\nWarnings (${warns.length}):\n  ` + warns.join("\n  "));
console.log(errors.length ? `\nErrors (${errors.length}):\n  ` + errors.join("\n  ") : "\n0 errors");
process.exit(errors.length ? 1 : 0);
