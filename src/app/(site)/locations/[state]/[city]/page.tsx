import Link from "next/link";
import { notFound } from "next/navigation";
import { getCity, getState, cityLabel, cities as allCities } from "@/content/locations";
import { getService } from "@/content/services";
import { publishedArticles } from "@/content/articles";
import { indexableCities, indexableCityServices } from "@/lib/sitemap";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { createLinker } from "@/lib/linker";
import { graph, ids, pageGraph } from "@/lib/schema";
import { availability, site } from "@/content/site";
import { Hero } from "@/components/Hero";
import { Chip, FaqList, Glance, JsonLd } from "@/components/ui";
import { Icon } from "@/components/icons";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { CtaBand } from "@/components/CtaBand";
import { PhoneLink } from "@/components/PhoneLink";
import type { Service } from "@/content/types";
import { getDataCity } from "@/content/cityPages";
import { CityDataPage, dataCityFaqs } from "@/components/templates/CityDataPage";
import { indexableDataCities } from "@/lib/sitemap";

export const dynamicParams = false;
export function generateStaticParams() {
  return [
    ...indexableCities().map((c) => ({ state: c.stateSlug, city: c.slug })),
    ...indexableDataCities().map((c) => ({ state: c.stateSlug, city: c.slug })),
  ];
}

type P = { params: Promise<{ state: string; city: string }> };

export async function generateMetadata({ params }: P) {
  const p = await params;
  const c = getCity(p.state, p.city);
  if (!c) {
    const dc = getDataCity(p.state, p.city)!;
    const st = getState(p.state)!;
    return pageMeta({
      title: `24/7 HVAC, AC & Furnace Repair in ${dc.name}, ${st.abbr} | Fast Quotes`,
      description: `Need fast HVAC repair in ${dc.name}, ${st.abbr}? Local licensed contractors ready for same-day AC repair, furnace troubleshooting & heat pump replacement. Call 24/7!`.slice(0, 158),
      path: routes.city(st.slug, dc.slug),
    });
  }
  const issues = c.localIssues ? c.localIssues.map((i) => i.title.toLowerCase()).slice(0, 2).join(", ") : "furnaces and AC";
  return pageMeta({
    title: `24/7 HVAC, AC & Furnace Repair in ${cityLabel(c)} | Same-Day Service`,
    description: `Top-rated heating & AC repair in ${c.name}: fast fixes for ${issues}. Licensed local technicians, upfront pricing & 24/7 emergency dispatch. Call now!`.slice(0, 158),
    path: routes.city(c.stateSlug, c.slug),
  });
}

export default async function CityPage({ params }: P) {
  const p = await params;
  const c = getCity(p.state, p.city);
  const st = getState(p.state);
  if (!st) notFound();
  if (!c) {
    const dc = getDataCity(p.state, p.city);
    if (!dc) notFound();
    const dpath = routes.city(st.slug, dc.slug);
    const dcrumbs = [
      { name: "Home", path: "/" },
      { name: "Locations", path: routes.locations() },
      { name: st.name, path: routes.state(st.slug) },
      { name: dc.name, path: dpath },
    ];
    const guideCities = indexableCities()
      .filter((x) => x.stateSlug === st.slug)
      .map((x) => ({ name: x.name, href: routes.city(st.slug, x.slug) }));
    return (
      <>
        <JsonLd data={graph(pageGraph({ path: dpath, name: `Heating and air conditioning in ${dc.name}, ${st.abbr}`, description: `HVAC guidance for ${dc.name} based on NOAA climate normals.`, crumbs: dcrumbs, faqs: dataCityFaqs(dc, st.abbr), about: [ids.state(st.slug)] }))} />
        <CityDataPage c={dc} st={st} crumbs={dcrumbs} guideCities={guideCities} />
      </>
    );
  }
  const path = routes.city(st.slug, c.slug);
  const link = createLinker(path);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: routes.locations() },
    { name: st.name, path: routes.state(st.slug) },
    { name: c.name, path },
  ];
  const combos = indexableCityServices().filter((cs) => cs.citySlug === c.slug);
  // Local service pages first (so each is always linked from its city), then the city's other common calls.
  const popular = [...new Set([...combos.map((x) => x.serviceSlug), ...c.popularServices])].map(getService).filter(Boolean) as Service[];
  const nearby = allCities.filter((x) => c.nearby.includes(x.slug));
  const guides = publishedArticles.filter((a) => a.services.some((s) => c.popularServices.includes(s))).slice(0, 3);

  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: `HVAC Repair in ${cityLabel(c)}`, description: c.intro, crumbs, faqs: c.faqs, about: [ids.place(c.slug)] }))} />
      <Hero
        crumbs={crumbs}
        eyebrow={`24/7 Local HVAC Referral · ${cityLabel(c)}`}
        title={`Same-Day HVAC, AC & Furnace Repair in ${cityLabel(c)}`}
        lead={<p>{c.intro}</p>}
        facts={[
          availability,
          "Same-Day Dispatch & 24/7 Emergency Service",
          "Licensed & Insured Local Contractors",
          "Upfront Written Pricing Before Work Starts",
        ]}
        aside={<LeadFormBlock defaultZip={c.zips[0]} compact id="hero-lead-form" />}
        requestHref="#hero-lead-form"
      />

      <div className="border-y border-line bg-sand-deep py-3.5">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal"></span>
            </span>
            <span className="font-semibold text-ink">
              Emergency heating or AC breakdown in {c.name}?
            </span>
            <span className="hidden text-muted md:inline">
              Licensed technicians on standby for same-day dispatch across {c.zips.length} ZIP codes.
            </span>
          </div>
          <PhoneLink
            phone={site.phone}
            e164={site.phoneE164}
            label={`Call ${site.phone}`}
            location="urgent_curated_strip"
            className="btn btn-primary btn-sm shrink-0"
          />
        </div>
      </div>

      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 space-y-12">
            <div>
              <p className="eyebrow">Local Homes &amp; Equipment</p>
              <h2 className="mt-1 text-3xl font-semibold">{c.name} Homes and Their Heating &amp; Cooling</h2>
              <p className="mt-4 text-lg leading-relaxed">{link(c.housingNotes)}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {c.localIssues.map((i) => (
                  <div key={i.title} className="card p-5">
                    <h3 className="font-sans text-lg font-semibold">{i.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{link(i.body)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold">Common HVAC Calls in {c.name}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {popular.map((s) => {
                  const combo = combos.find((x) => x.serviceSlug === s.slug);
                  return (
                    <li key={s.slug}>
                      <Link href={combo ? routes.cityService(st.slug, c.slug, s.slug) : routes.service(s.slug)} className="card flex items-center gap-3 p-4 font-semibold hover:text-teal-deep">
                        <Icon name="wrench" className="h-5 w-5 text-teal" />
                        {combo ? combo.h1 : s.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-muted">
                Also available in {c.name}:{" "}
                <Link href={routes.emergency()} className="link">emergency heating and AC</Link> and{" "}
                <Link href={routes.services()} className="link">every HVAC service</Link>.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <h2 className="text-2xl font-semibold">Areas &amp; Neighborhoods Served in {c.name}</h2>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {c.areas.map((a) => (
                  <li key={a} className="rounded-full bg-sand-deep px-3 py-1.5 font-medium text-ink">
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">Covered ZIP codes: {c.zips.join(", ")}</p>
            </div>

            <Glance
              title={`${c.name} at a glance`}
              items={[
                { term: "County", detail: `${c.county} County` },
                { term: "Utilities", detail: c.water },
                { term: "Permits", detail: c.permits },
                { term: "ZIP codes", detail: c.zips.join(", ") },
              ]}
            />

            <FaqList faqs={c.faqs} title={`${c.name} heating and cooling FAQ`} />

            {guides.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold">Guides for {c.name} homeowners</h2>
                <ul className="mt-4 grid gap-3 md:grid-cols-3">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link href={routes.guide(g.slug)} className="card block p-5 font-semibold hover:text-teal-deep">{g.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-semibold">Nearby towns</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <Chip key={n.slug} href={routes.city(n.stateSlug, n.slug)}>{n.name}</Chip>
                ))}
                <Chip href={routes.state(st.slug)}>All of {st.name}</Chip>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <h3 className="font-serif text-xl font-semibold text-ink">Need Fast Service in {c.name}?</h3>
              <p className="mt-2 text-sm text-muted">
                Connect with an independent, licensed contractor serving your ZIP code. Upfront pricing before any work begins.
              </p>
              <div className="mt-5 space-y-3">
                <PhoneLink
                  phone={site.phone}
                  e164={site.phoneE164}
                  label={`Call ${site.phone}`}
                  location="sidebar_curated_city"
                  className="btn btn-primary w-full"
                />
                <a href="#hero-lead-form" className="btn btn-secondary w-full text-center">
                  Request Quote Online
                </a>
              </div>
              <ul className="mt-5 space-y-2 border-t border-line pt-4 text-xs text-muted">
                <li className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal" /> Same-day &amp; emergency response
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal" /> Licensed &amp; insured technicians
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal" /> Free referral &amp; written quotes
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal" /> Zero obligation to buy
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-teal-tint p-5 text-sm ring-1 ring-teal/20">
              <p className="font-semibold text-teal-deep">Emergency Service Available</p>
              <p className="mt-1 text-ink/80">
                Calls are answered 24/7 for urgent failures, no heat in winter, or complete cooling breakdown in summer.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand title={`Need HVAC help in ${c.name}?`} />
    </main>
  );
}
