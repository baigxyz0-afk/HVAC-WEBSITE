import "server-only";
import { site } from "@/content/site";
import { publishedServices } from "@/content/services";
import { states, cityLabel } from "@/content/locations";
import { indexableCities } from "./sitemap";
import { routes } from "./routes";
import type { Faq } from "@/content/types";

// Connected JSON-LD graph with stable @ids. Every @id referenced on a page is defined on that page.
const U = site.url;
export const ids = {
  org: `${U}/#organization`,
  website: `${U}/#website`,
  logo: `${U}/#logo`,
  service: (slug: string) => `${U}${routes.service(slug)}#service`,
  place: (city: string) => `${U}/#place-${city}`,
  county: (slug: string) => `${U}/#place-${slug}-county`,
  state: (s: string) => `${U}/#place-${s}`,
  country: `${U}/#place-united-states`,
  page: (path: string) => `${U}${path}#webpage`,
  breadcrumb: (path: string) => `${U}${path}#breadcrumb`,
  faq: (path: string) => `${U}${path}#faq`,
};

// Sitewide nodes only: the business, its logo and the website. Places and services are
// defined per page, only when that page references them (see withDefinitions), which keeps
// every page's JSON-LD small while every referenced @id stays defined on the page.
export function siteGraph() {
  const org: Record<string, unknown> = {
    "@type": "Organization",
    "@id": ids.org,
    name: site.name,
    alternateName: site.shortName,
    url: `${U}/`,
    logo: { "@id": ids.logo },
    description:
      "HVAC Services Hub is a nationwide heating and cooling referral service in the United States. It connects homeowners with independent, licensed HVAC contractors for AC repair and replacement, furnaces, heat pumps, ductless mini-splits, ductwork, indoor air quality and thermostats.",
    areaServed: { "@type": "Country", name: "United States" },
    knowsAbout: ["Air conditioning repair", "Furnace repair", "Heat pumps", "Dual-fuel systems", "Ductless mini-splits", "Duct sealing", "Indoor air quality", "HVAC zoning"],
  };
  if (site.phoneIsReal) org.telephone = site.phoneE164;
  if (site.email) org.email = site.email;
  if (site.googleProfileUrl) org.sameAs = [site.googleProfileUrl];

  return [
    org,
    { "@type": "ImageObject", "@id": ids.logo, url: `${U}/brand/logo.png`, width: 760, height: 160, caption: site.name },
    { "@type": "WebSite", "@id": ids.website, url: `${U}/`, name: site.name, publisher: { "@id": ids.org }, inLanguage: "en-US" },
  ];
}

const SITEWIDE = new Set([ids.org, ids.logo, ids.website]);
let defs: Map<string, Record<string, unknown>> | null = null;

// Minimal definitions for every place and service @id a page might reference.
function definitions() {
  if (defs) return defs;
  defs = new Map();
  defs.set(ids.country, { "@type": "Country", "@id": ids.country, name: "United States" });
  for (const s of states) defs.set(ids.state(s.slug), { "@type": "State", "@id": ids.state(s.slug), name: s.name, containedInPlace: { "@id": ids.country } });
  for (const c of indexableCities()) {
    const county = ids.county(`${c.county.toLowerCase().replace(/\s+/g, "-")}-${c.stateSlug}`);
    defs.set(county, { "@type": "AdministrativeArea", "@id": county, name: `${c.county} County`, containedInPlace: { "@id": ids.state(c.stateSlug) } });
    defs.set(ids.place(c.slug), { "@type": "City", "@id": ids.place(c.slug), name: cityLabel(c), containedInPlace: { "@id": county } });
  }
  for (const s of publishedServices) defs.set(ids.service(s.slug), { "@type": "Service", "@id": ids.service(s.slug), name: s.name, url: `${U}${routes.service(s.slug)}` });
  return defs;
}

/** Adds minimal definitions for any referenced-but-undefined @id (and what those reference in turn). */
export function withDefinitions(nodes: Record<string, unknown>[]) {
  const out = [...nodes];
  const d = definitions();
  for (;;) {
    const json = JSON.stringify(out);
    const defined = new Set(out.map((n) => n["@id"]).filter(Boolean) as string[]);
    const missing = [...new Set([...json.matchAll(/"@id":"([^"]+)"/g)].map((m) => m[1]))].filter((id) => !defined.has(id) && !SITEWIDE.has(id) && d.has(id));
    if (!missing.length) return out;
    for (const id of missing) out.push(d.get(id)!);
  }
}

export type Crumb = { name: string; path: string };

export function pageGraph(opts: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "ItemPage" | "AboutPage" | "ContactPage" | "FAQPage";
  crumbs: Crumb[];
  faqs?: Faq[];
  about?: string[];
  extra?: Record<string, unknown>[];
}) {
  const { path, name, description, crumbs, faqs, about, extra } = opts;
  const type = opts.type ?? "WebPage";
  const pageTypes = faqs?.length && type !== "FAQPage" ? [type, "FAQPage"] : type;
  const page: Record<string, unknown> = {
    "@type": pageTypes,
    "@id": ids.page(path),
    url: `${U}${path}`,
    name,
    description,
    isPartOf: { "@id": ids.website },
    publisher: { "@id": ids.org },
    breadcrumb: { "@id": ids.breadcrumb(path) },
    inLanguage: "en-US",
  };
  if (about?.length) page.about = about.map((id) => ({ "@id": id }));
  if (faqs?.length)
    page.mainEntity = faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }));
  const bc = {
    "@type": "BreadcrumbList",
    "@id": ids.breadcrumb(path),
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${U}${c.path}` })),
  };
  return withDefinitions([page, bc, ...(extra ?? [])]);
}

export function graph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
