// Renders the Tallgrass logo mark to logo.png and the favicon bundle, then run `npm run icons` for favicon.ico.
import sharp from "sharp";
import fs from "fs";

const mark = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40">
<rect width="40" height="40" rx="9" fill="#14263a"/><circle cx="27" cy="13" r="5" fill="#e0a458"/>
<path d="M11 34c0-9 1-15 4-20M17 34c0-7 2-12 6-15M23 34c0-5 1-8 5-10M8 34c1-6 0-10-2-13" stroke="#a9d6b2" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg>`;

const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="160" viewBox="0 0 600 160">
<g transform="translate(10 10) scale(3.5)"><rect width="40" height="40" rx="9" fill="#14263a"/><circle cx="27" cy="13" r="5" fill="#e0a458"/>
<path d="M11 34c0-9 1-15 4-20M17 34c0-7 2-12 6-15M23 34c0-5 1-8 5-10M8 34c1-6 0-10-2-13" stroke="#a9d6b2" stroke-width="2.4" stroke-linecap="round" fill="none"/></g>
<text x="170" y="92" font-family="Georgia, serif" font-size="70" font-weight="600" fill="#14263a">Tallgrass</text>
<text x="173" y="130" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="5" fill="#2b5c37">HEATING &amp; AIR</text></svg>`;

await sharp(Buffer.from(logo)).png().toFile("public/brand/logo.png");
for (const [f, s] of [["favicon-16x16.png", 16], ["favicon-32x32.png", 32], ["android-chrome-192x192.png", 192], ["android-chrome-512x512.png", 512], ["apple-touch-icon.png", 180]]) {
  await sharp(Buffer.from(mark(s))).png().toFile(`public/${f}`);
}
fs.rmSync("public/favicon.ico", { force: true });
console.log("brand assets written");
