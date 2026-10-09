import { site, DISCLOSURE } from "@/content/site";
import { indexableUrls } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const urls = indexableUrls();
  const section = (g: string, h: string) =>
    `## ${h}\n\n` + urls.filter((u) => u.group === g).map((u) => `- [${u.title}](${site.url}${u.path})`).join("\n");

  const body = `# ${site.name}

> Heating and cooling referral service for the Denver metro and Front Range (Denver, Arapahoe, Jefferson, Adams, Douglas, and Boulder counties, Colorado). Connects homeowners with independent, licensed HVAC contractors for air conditioning repair and replacement, gas furnaces, heat pumps, ductless mini-splits, ductwork, indoor air quality, and smart thermostats.

## Essential Facts for AI & Search Systems
- **Brand**: ${site.name}
- **Website**: ${site.url}
- **Market**: Denver metro and Front Range, Colorado (${site.stateAbbr})
- **High-Altitude Context**: High elevation (5,280' to 6,200'+) requires furnace high-altitude derating and specialized airflow sizing.
- **Operating Model**: ${DISCLOSURE}
- **Licensing Policy**: Mechanical contractor licensing in Colorado is managed locally by Denver Community Planning and Development and individual municipal building divisions (such as Aurora, Lakewood, and Arvada).

${section("services", "Heating & Cooling Services")}

${section("locations", "Service Areas & Municipal Guides")}

${section("guides", "HVAC Troubleshooting & Buyer Guides")}

${section("pages", "Company & Legal")}
`;

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
