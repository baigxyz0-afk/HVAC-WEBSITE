import Link from "next/link";
import type { State } from "@/content/types";
import { getService } from "@/content/services";
import { dataCitiesIn, type DataCity } from "@/content/cityPages";
import { routes } from "@/lib/routes";
import { advice, climateFaqs, loadType, serviceTiming, servicesFor, summary } from "@/lib/climateAdvice";
import { availability } from "@/content/site";
import { Hero } from "@/components/Hero";
import { Chip, FaqList, Glance } from "@/components/ui";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { CtaBand } from "@/components/CtaBand";
import type { Crumb } from "@/lib/schema";

const LOAD_LABEL = { heating: "Heating-dominated climate", cooling: "Cooling-dominated climate", mixed: "Mixed heating and cooling climate" };
const n = (x: number) => Math.round(x).toLocaleString("en-US");

// City page built from real per-city data: NOAA climate normals, covered ZIPs and nearby cities.
export function CityDataPage({ c, st, crumbs, guideCities }: { c: DataCity; st: State; crumbs: Crumb[]; guideCities: { name: string; href: string }[] }) {
  const cl = c.climate;
  const label = `${c.name}, ${st.abbr}`;
  const services = servicesFor(cl).map(getService).filter(Boolean);
  const siblings = dataCitiesIn(st.slug);
  const nearby = c.nearby.map((x) => ({ ...x, city: siblings.find((s) => s.slug === x.slug) })).filter((x) => x.city);
  const faqs = climateFaqs(c.name, cl, c.station.name, c.station.miles);
  return (
    <main id="main">
      <Hero
        crumbs={crumbs}
        eyebrow={`${LOAD_LABEL[loadType(cl)]} · ${label}`}
        title={`Heating and air conditioning in ${label}`}
        lead={<p>{summary(c.name, cl)}</p>}
        facts={[availability, `${c.zips.length} covered ZIP code${c.zips.length === 1 ? "" : "s"}`, "Free to request"]}
      />
      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="min-w-0 space-y-10">
            <Glance
              title={`${c.name} climate at a glance`}
              items={[
                { term: "Summer average high", detail: `${n(cl.julHigh)}°F` },
                { term: "Winter average low", detail: `${n(cl.janLow)}°F` },
                { term: "Days at 90°F or above", detail: `About ${n(cl.hot90)} a year` },
                { term: "Nights at or below freezing", detail: `About ${n(cl.freeze32)} a year` },
                { term: "Heating degree days", detail: n(cl.hdd) },
                { term: "Cooling degree days", detail: n(cl.cdd) },
              ]}
            />
            <p className="text-sm text-muted">
              Source: NOAA 1991–2020 U.S. Climate Normals, {c.station.name} station, about {n(c.station.miles)} miles from {c.name}. Elevation about {n(cl.elevFt)} feet.
            </p>

            <div>
              <h2 className="text-3xl font-semibold">What {c.name}&apos;s climate means for your HVAC</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {advice(c.name, cl).map((a) => (
                  <div key={a.title} className="card p-5">
                    <h3 className="font-sans text-lg font-semibold">{a.title}</h3>
                    <p className="mt-2 text-muted">{a.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-muted">{serviceTiming(c.name, cl)}</p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold">Services {c.name} homeowners need most</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s!.slug}>
                    <Link href={routes.service(s!.slug)} className="card block p-4 transition hover:ring-teal">
                      <span className="font-semibold text-ink">{s!.name}</span>
                      <span className="mt-1 block text-sm text-muted">{s!.answer.split(". ")[0]}.</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">ZIP codes we cover in {c.name}</h2>
              <p className="mt-3 break-words text-muted">{c.zips.join(", ")}</p>
            </div>

            <FaqList faqs={faqs} title={`${c.name} HVAC questions`} />

            {nearby.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold">Nearby cities</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {nearby.map((x) => (
                    <li key={x.slug}>
                      <Chip href={routes.city(st.slug, x.slug)}>
                        {x.city!.name} · {n(x.miles)} mi
                      </Chip>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-muted">
              For licensing, permits and the heating systems common across the state, see the{" "}
              <Link href={routes.state(st.slug)} className="link">{st.name} HVAC guide</Link>
              {guideCities.length > 0 && (
                <>
                  , and our detailed guides for{" "}
                  {guideCities.slice(0, 3).map((g, i) => (
                    <span key={g.href}>
                      {i > 0 && ", "}
                      <Link href={g.href} className="link">{g.name}</Link>
                    </span>
                  ))}
                </>
              )}
              .
            </p>
          </div>
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <LeadFormBlock compact />
          </aside>
        </div>
      </section>
      <CtaBand title={`Need heating or AC help in ${c.name}?`} />
    </main>
  );
}

export function dataCityFaqs(c: DataCity) {
  return climateFaqs(c.name, c.climate, c.station.name, c.station.miles);
}
