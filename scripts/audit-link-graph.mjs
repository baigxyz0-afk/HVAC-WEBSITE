const BASE = "http://localhost:3103";

async function run() {
  const index = await fetch(`${BASE}/sitemap.xml`).then(r => r.text());
  const smUrls = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname);
  const allUrls = [];
  for (const sm of smUrls) {
    const text = await fetch(BASE + sm).then(r => r.text());
    for (const m of text.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      allUrls.push(new URL(m[1]).pathname);
    }
  }

  const inLinks = new Map();
  for (const u of allUrls) inLinks.set(u, 0);

  for (const u of allUrls) {
    const html = await fetch(BASE + u).then(r => r.text());
    const links = new Set();
    for (const m of html.matchAll(/<a[^>]+href="(\/[^"#?]*)/g)) {
      links.add(m[1]);
    }
    for (const target of links) {
      if (inLinks.has(target)) {
        inLinks.set(target, inLinks.get(target) + 1);
      }
    }
  }

  console.log("=== INCOMING INTERNAL LINK COUNTS ===");
  const sorted = [...inLinks.entries()].sort((a, b) => a[1] - b[1]);
  for (const [url, count] of sorted) {
    console.log(`${count.toString().padStart(3)} links <- ${url}`);
  }
}

run();
