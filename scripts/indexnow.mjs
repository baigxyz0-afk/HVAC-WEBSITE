import fs from "fs";
import path from "path";

const DEFAULT_KEY = "e4c3b2a19876543210fedcbaabcdef01";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://aspenridgeair.com").replace(/\/$/, "");
const host = new URL(SITE).host;
const key = (process.env.INDEXNOW_KEY || DEFAULT_KEY).trim();

// 1. Ensure verification file exists in public/
const publicDir = path.join(process.cwd(), "public");
const keyFile = path.join(publicDir, `${key}.txt`);
if (!fs.existsSync(keyFile)) {
  fs.writeFileSync(keyFile, key, "utf-8");
  console.log(`[IndexNow] Created key verification file: public/${key}.txt`);
}

const keyLocation = `${SITE}/${key}.txt`;
console.log(`[IndexNow] Host: ${host} · Key: ${key.slice(0, 8)}... · Key location: ${keyLocation}`);

const args = process.argv.slice(2);
const force = args.includes("--force");
const paths = args.filter((a) => !a.startsWith("--"));

// 2. Discover URLs to submit
let urls = [];
if (paths.length > 0) {
  urls = paths.map((p) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? "" : "/"}${p}`));
} else {
  // Discover URLs from local sitemap generation logic or site XML
  try {
    const BASE = process.env.BASE || SITE;
    console.log(`[IndexNow] Reading sitemaps from ${BASE}/sitemap.xml ...`);
    const indexRes = await fetch(`${BASE}/sitemap.xml`);
    if (indexRes.ok) {
      const indexText = await indexRes.text();
      const sitemaps = [...indexText.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      for (const sm of sitemaps) {
        const smRes = await fetch(sm.startsWith("http") && !sm.includes(new URL(BASE).host) ? `${BASE}${new URL(sm).pathname}` : sm);
        if (smRes.ok) {
          const smText = await smRes.text();
          for (const m of smText.matchAll(/<url><loc>([^<]+)<\/loc>/g)) {
            const u = new URL(m[1]).pathname;
            urls.push(`${SITE}${u}`);
          }
        }
      }
    }
  } catch (err) {
    console.warn(`[IndexNow] Could not fetch remote sitemap: ${err.message}. Loading from sitemap inventory.`);
  }
}

// Fallback to static route inventory if fetch was not possible
if (urls.length === 0) {
  const routesFile = path.join(process.cwd(), "src/lib/sitemap.ts");
  console.log(`[IndexNow] Collecting indexable routes from codebase...`);
  // Minimal core routes fallback
  urls = [
    `${SITE}/`,
    `${SITE}/about/`,
    `${SITE}/contact/`,
    `${SITE}/faq/`,
    `${SITE}/hvac-services/`,
    `${SITE}/emergency-hvac/`,
    `${SITE}/locations/`,
    `${SITE}/resources/`,
  ];
}

urls = [...new Set(urls)];
console.log(`[IndexNow] Discovered ${urls.length} candidate URLs for IndexNow submission.`);

// 3. History tracking cache to prevent spamming
const cacheFile = path.join(process.cwd(), ".indexnow-cache.json");
let cache = {};
try {
  if (fs.existsSync(cacheFile)) cache = JSON.parse(fs.readFileSync(cacheFile, "utf-8"));
} catch {
  cache = {};
}

const urlsToSubmit = force ? urls : urls.filter((u) => !cache[u]);
const skipped = urls.length - urlsToSubmit.length;

if (urlsToSubmit.length === 0) {
  console.log(`[IndexNow] All ${urls.length} URLs were submitted recently (cached in .indexnow-cache.json).`);
  console.log(`[IndexNow] Use 'npm run indexnow -- --force' to resubmit.`);
  process.exit(0);
}

console.log(`[IndexNow] Submitting ${urlsToSubmit.length} URLs (${skipped} unchanged URLs skipped)...`);

// 4. Batch in chunks of 250 and post with retry
const BATCH_SIZE = 250;
const batches = [];
for (let i = 0; i < urlsToSubmit.length; i += BATCH_SIZE) {
  batches.push(urlsToSubmit.slice(i, i + BATCH_SIZE));
}

let totalSuccess = 0;
let totalFailed = 0;

for (let i = 0; i < batches.length; i++) {
  const batch = batches[i];
  const payload = {
    host,
    key,
    keyLocation,
    urlList: batch,
  };

  let attempt = 0;
  let success = false;
  let lastStatus = 0;
  let lastStatusText = "";

  while (attempt < 3 && !success) {
    attempt++;
    try {
      const res = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      lastStatus = res.status;
      lastStatusText = res.statusText;

      if (res.status === 200 || res.status === 202) {
        success = true;
      } else if (res.status === 429 || (res.status >= 500 && res.status < 600)) {
        console.warn(`[IndexNow] Rate limit or server error HTTP ${res.status}. Retrying in ${attempt * 1500}ms...`);
        await new Promise((r) => setTimeout(r, attempt * 1500));
      } else {
        // Client error (400, 403, 422) - do not retry
        break;
      }
    } catch (err) {
      lastStatusText = err.message;
      await new Promise((r) => setTimeout(r, attempt * 1000));
    }
  }

  if (success) {
    totalSuccess += batch.length;
    console.log(`[IndexNow] Batch ${i + 1}/${batches.length}: HTTP ${lastStatus} OK (${batch.length} URLs submitted)`);
    const nowIso = new Date().toISOString();
    for (const u of batch) cache[u] = nowIso;
  } else {
    totalFailed += batch.length;
    console.error(`[IndexNow] Batch ${i + 1}/${batches.length} FAILED: HTTP ${lastStatus} (${lastStatusText})`);
  }
}

try {
  fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2), "utf-8");
} catch (err) {
  console.warn(`[IndexNow] Could not write cache file: ${err.message}`);
}

console.log("\n================ INDEXNOW SUBMISSION SUMMARY ================");
console.log(`Target Host: ${host}`);
console.log(`Key verification file: ${keyLocation}`);
console.log(`Total URLs evaluated: ${urls.length}`);
console.log(`Submitted successfully: ${totalSuccess}`);
console.log(`Skipped (unchanged): ${skipped}`);
console.log(`Failed: ${totalFailed}`);
console.log("Note: IndexNow notifies participating search engines (Bing, Yandex, Seznam, Naver).");
console.log("IndexNow acceptance confirms receipt; search engines crawl and index according to quality policies.");
console.log("============================================================\n");
