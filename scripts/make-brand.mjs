// Renders the HVAC Services Hub logo and favicon bundle from SVG, then run `npm run icons` for favicon.ico.
// Outputs: public/brand/logo.png (760x160, header/schema), logo@2x.png, logo.svg, logo-icon-512.png,
// logo-light.png (for dark backgrounds), and the favicon PNGs.
import sharp from "sharp";
import fs from "fs";

const NAVY = "#14263a";
const BLUE = "#4aa8ec";
const ORANGE = "#f08a35";

// House roofline with a snowflake (cooling) and a flame (heating) inside. 40x40 grid.
const MARK = `
<rect width="40" height="40" rx="9" fill="${NAVY}"/>
<path d="M7.5 19.5 20 8.5l12.5 11" fill="none" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 17.2v14.3h17V17.2" fill="none" stroke="#ffffff" stroke-width="2.3" stroke-linejoin="round"/>
<path d="M16 21.4v7.4M12.8 23.25l6.4 3.7M12.8 26.95l6.4-3.7" fill="none" stroke="${BLUE}" stroke-width="1.7" stroke-linecap="round"/>
<path d="M24.3 20.6c2 1.7 3.5 3.5 3.5 5.5a3.4 3.4 0 0 1-6.8 0c0-1.25.6-2.2 1.35-2.9.2 1 .8 1.65 1.45 1.65 0-1.65-.3-2.85.5-4.25z" fill="${ORANGE}"/>`;

const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40">${MARK}</svg>`;

const logo = (w, h, light = false) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 760 160">
<g transform="translate(10 10) scale(3.5)">${MARK}</g>
<text x="168" y="86" font-family="Georgia, 'Times New Roman', serif" font-size="54" font-weight="700" fill="${light ? "#ffffff" : NAVY}">HVAC Services Hub</text>
<text x="171" y="124" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="700" letter-spacing="5" fill="${light ? "#9cc9ee" : "#175a91"}">HEATING · COOLING · AIR</text>
</svg>`;

fs.mkdirSync("public/brand", { recursive: true });
await sharp(Buffer.from(logo(760, 160))).png().toFile("public/brand/logo.png");
await sharp(Buffer.from(logo(1520, 320))).png().toFile("public/brand/logo@2x.png");
await sharp(Buffer.from(logo(1520, 320, true))).png().toFile("public/brand/logo-light.png");
await sharp(Buffer.from(icon(512))).png().toFile("public/brand/logo-icon-512.png");
fs.writeFileSync("public/brand/logo.svg", logo(760, 160));
for (const [f, s] of [["favicon-16x16.png", 16], ["favicon-32x32.png", 32], ["android-chrome-192x192.png", 192], ["android-chrome-512x512.png", 512], ["apple-touch-icon.png", 180]]) {
  await sharp(Buffer.from(icon(s))).png().toFile(`public/${f}`);
}
fs.rmSync("public/favicon.ico", { force: true });
console.log("brand assets written");
