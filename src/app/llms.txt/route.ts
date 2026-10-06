import { site, DISCLOSURE } from "@/content/site";
import { indexableUrls } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const urls = indexableUrls();
  const section = (g: string, h: string) =>
    `## ${h}\n\n` + urls.filter((u) => u.group === g).map((u) => `- [${u.title}](${site.url}${u.path})`).join("\n");
  const body = `# ${site.name}

> Nationwide heating and cooling referral service covering all 50 U.S. states and Washington, D.C., with in-depth city guides for the Kansas City metro. Connects homeowners with independent, licensed HVAC contractors for AC repair and replacement, furnaces, heat pumps, ductless mini-splits, ductwork, indoor air quality and thermostats.

${DISCLOSURE}

${section("services", "Services")}

${section("subservices", "Specific repairs")}

${section("states", "States")}

${section("cities", "Cities")}

${section("local-services", "Local service pages")}

${section("guides", "Guides")}

${section("pages", "Company")}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
