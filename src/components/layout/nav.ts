import { categories, servicesInCategory } from "@/content/services";
import { states, publishedCities, cityLabel } from "@/content/locations";
import { routes } from "@/lib/routes";
import type { IconName } from "@/content/types";

export type NavGroup = { title: string; href: string; icon?: IconName; links: { name: string; href: string }[] };

export function serviceGroups(): NavGroup[] {
  return categories.map((c) => ({
    title: c.name,
    href: routes.category(c.slug),
    icon: c.icon,
    links: servicesInCategory(c.slug).map((s) => ({ name: s.shortName ?? s.name, href: routes.service(s.slug) })),
  }));
}

// Top states per census region by LeadSmart HVAC coverage (docs/coverage-summary.json).
const TOP: Record<string, string[]> = {
  Northeast: ["new-york", "pennsylvania", "new-jersey", "massachusetts", "connecticut", "new-hampshire"],
  Midwest: ["ohio", "illinois", "indiana", "michigan", "minnesota", "missouri"],
  South: ["texas", "florida", "north-carolina", "georgia", "tennessee", "virginia"],
  West: ["california", "washington", "arizona", "colorado", "oregon", "nevada"],
};

export function locationGroups(): NavGroup[] {
  return Object.entries(TOP).map(([region, slugs]) => ({
    title: region,
    href: `${routes.locations()}#${region.toLowerCase()}`,
    links: slugs.map((s) => states.find((x) => x.slug === s)!).map((s) => ({ name: s.name, href: routes.state(s.slug) })),
  }));
}

export function cityLinks() {
  return publishedCities.map((c) => ({ name: cityLabel(c), href: routes.city(c.stateSlug, c.slug) }));
}

export const companyLinks = [
  { name: "Resources", href: routes.resources() },
  { name: "About", href: routes.about() },
  { name: "FAQ", href: routes.faq() },
  { name: "Contact", href: routes.contact() },
];
