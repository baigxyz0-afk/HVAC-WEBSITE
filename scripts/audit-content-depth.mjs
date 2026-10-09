import fs from "fs";

// Let's inspect all services
const servicesFile = fs.readFileSync("src/content/services.ts", "utf8");
const servicesMoreFile = fs.readFileSync("src/content/servicesMore.ts", "utf8");

// Count services
const serviceBlocks = (servicesFile + "\n" + servicesMoreFile).split(/\{\s*slug:\s*"/g).slice(1);
console.log(`Total services parsed: ${serviceBlocks.length}`);

for (const b of serviceBlocks) {
  const slug = b.split('"')[0];
  const hasDiy = b.includes("diy:");
  const faqsMatches = b.match(/\{\s*q:/g) || [];
  const glanceMatches = b.match(/\{\s*term:/g) || [];
  const processMatches = b.match(/\{\s*title:/g) || [];
  console.log(`Service: ${slug} | DIY: ${hasDiy} | FAQs: ${faqsMatches.length} | Glance: ${glanceMatches.length} | Process steps: ${processMatches.length}`);
}
