// Prints the state quality-gate word count (intro + detail bodies + focus reasons) for every state hub.
import fs from "fs";
const w = (s) => s.split(/\s+/).filter(Boolean).length;
const str = (re, t) => [...t.matchAll(re)].map((m) => m[1]);
const out = [];
for (const f of ["northeastMidwest", "south", "west"]) {
  const t = fs.readFileSync(`src/content/states/${f}.ts`, "utf8");
  for (const blk of t.split(/\n  \{\n    slug: /).slice(1)) {
    const slug = blk.match(/^"([a-z-]+)"/)[1];
    const parts = [...str(/intro: "((?:[^"\\]|\\.)*)"/g, blk), ...str(/body: "((?:[^"\\]|\\.)*)"/g, blk), ...str(/why: "((?:[^"\\]|\\.)*)"/g, blk)];
    out.push([slug, parts.reduce((n, p) => n + w(p), 0)]);
  }
}
out.sort((a, b) => a[1] - b[1]);
console.log(out.map(([s, n]) => `${s}:${n}`).join(" "));
console.log("passing", out.filter(([, n]) => n >= 180).length, "of", out.length);
