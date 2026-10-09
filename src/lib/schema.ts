import "server-only";
import { site } from "@/content/site";
import { publishedServices, categories } from "@/content/services";
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
  page: (path: string) => `${U}${path}#webpage`,
  breadcrumb: (path: string) => `${U}${path}#breadcrumb`,
  faq: (path: string) => `${U}${path}#faq`,
};

export function siteGraph() {
  const cities = indexableCities();
  const org: Record<string, unknown> = {
    "@type": "Organization",
    "@id": ids.org,
    name: site.name,
    alternateName: site.shortName,
    url: `${U}/`,
    logo: { "@id": ids.logo },
    description:
      "Aspenridge Heating & Air is a heating and cooling referral service for the Denver metro and Front Range. It connects homeowners with independent, licensed HVAC contractors for AC repair and replacement, furnaces, heat pumps, ductless mini-splits, ductwork, indoor air quality and thermostats.",
    areaServed: cities.map((c) => ({ "@id": ids.place(c.slug) })),
    knowsAbout: [
      "Air conditioning repair",
      "Central AC replacement",
      "Furnace repair",
      "Furnace replacement",
      "Heat pumps",
      "Cold-climate heat pumps",
      "Dual-fuel HVAC systems",
      "Ductless mini-splits",
      "Evaporative swamp coolers",
      "Duct sealing & airflow balancing",
      "Indoor air quality filtration",
      "Whole-house humidifiers",
      "HVAC zoning systems",
      "High-altitude gas furnace combustion",
      "Manual J load calculations",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Heating and cooling services",
      itemListElement: categories.map((cat) => ({
        "@type": "OfferCatalog",
        name: cat.name,
        itemListElement: publishedServices
          .filter((s) => s.category === cat.slug)
          .map((s) => ({ "@type": "Offer", itemOffered: { "@id": ids.service(s.slug) } })),
      })),
    },
  };
  if (site.phoneIsReal) org.telephone = site.phoneE164;
  if (site.email) org.email = site.email;
  if (site.googleProfileUrl) org.sameAs = [site.googleProfileUrl];

  return [
    org,
    { "@type": "ImageObject", "@id": ids.logo, url: `${U}/brand/logo.png`, width: 600, height: 160, caption: site.name },
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: `${U}/`,
      name: site.name,
      publisher: { "@id": ids.org },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${U}/hvac-services/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    ...publishedServices.map((s) => ({ "@type": "Service", "@id": ids.service(s.slug), name: s.name, url: `${U}${routes.service(s.slug)}` })),
    ...states.map((s) => ({ "@type": "State", "@id": ids.state(s.slug), name: s.name })),
    ...[...new Map(cities.map((c) => [`${c.county}-${c.stateSlug}`, c])).values()].map((c) => ({
      "@type": "AdministrativeArea",
      "@id": ids.county(`${c.county.toLowerCase()}-${c.stateSlug}`),
      name: `${c.county} County`,
      containedInPlace: { "@id": ids.state(c.stateSlug) },
    })),
    ...cities.map((c) => ({
      "@type": "City",
      "@id": ids.place(c.slug),
      name: cityLabel(c),
      containedInPlace: { "@id": ids.county(`${c.county.toLowerCase()}-${c.stateSlug}`) },
    })),
  ];
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
  return [page, bc, ...(extra ?? [])];
}

export function graph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
