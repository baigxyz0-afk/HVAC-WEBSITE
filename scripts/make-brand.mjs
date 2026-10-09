// Renders the Aspenridge logo mark to logo.png and the favicon bundle, then run `npm run icons` for favicon.ico.
import sharp from "sharp";
import fs from "fs";

const mark = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40">
<rect width="40" height="40" rx="9" fill="#1b2838"/><path d="M4 31l9-12 5 6 7-11 11 17z" fill="#9fd3c1"/><path d="M4 31l9-12 5 6 7-11 11 17" fill="none" stroke="#ffffff" stroke-width="1.4" stroke-linejoin="round"/><path d="M29 6c3 1 5 4 4 7-3 0-5-2-6-4 0-1 1-2 2-3z" fill="#e0a458"/></svg>`;

const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="160" viewBox="0 0 600 160">
<g transform="translate(10 10) scale(3.5)"><rect width="40" height="40" rx="9" fill="#1b2838"/><path d="M4 31l9-12 5 6 7-11 11 17z" fill="#9fd3c1"/><path d="M4 31l9-12 5 6 7-11 11 17" fill="none" stroke="#ffffff" stroke-width="1.4" stroke-linejoin="round"/><path d="M29 6c3 1 5 4 4 7-3 0-5-2-6-4 0-1 1-2 2-3z" fill="#e0a458"/></g>
<text x="170" y="92" font-family="Georgia, serif" font-size="62" font-weight="600" fill="#1b2838">Aspenridge</text>
<text x="173" y="130" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="5" fill="#22503f">HEATING &amp; AIR</text></svg>`;

await sharp(Buffer.from(logo)).png().toFile("public/brand/logo.png");
for (const [f, s] of [["favicon-16x16.png", 16], ["favicon-32x32.png", 32], ["android-chrome-192x192.png", 192], ["android-chrome-512x512.png", 512], ["apple-touch-icon.png", 180]]) {
  await sharp(Buffer.from(mark(s))).png().toFile(`public/${f}`);
}
fs.rmSync("public/favicon.ico", { force: true });
console.log("brand assets written");
