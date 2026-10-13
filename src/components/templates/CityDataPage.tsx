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
const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};
// Share of the state's cities with a lower value than this one (0–100).
const pct = (list: DataCity[], f: (x: DataCity) => number, v: number) => Math.round((100 * list.filter((x) => f(x) < v).length) / list.length);

// City page built from real per-city data: NOAA climate normals, covered ZIPs and nearby cities.
export function CityDataPage({ c, st, crumbs, guideCities }: { c: DataCity; st: State; crumbs: Crumb[]; guideCities: { name: string; href: string }[] }) {
  const cl = c.climate;
  const label = `${c.name}, ${st.abbr}`;
  const services = servicesFor(cl).map(getService).filter(Boolean);
  const siblings = dataCitiesIn(st.slug);
  const nearby = c.nearby.map((x) => ({ ...x, city: siblings.find((s) => s.slug === x.slug) })).filter((x) => x.city);
  const seed = `${c.name}|${st.abbr}`;
  const faqs = climateFaqs(c.name, cl, c.station.name, c.station.miles, seed);
  return (
    <main id="main">
      <Hero
        crumbs={crumbs}
        eyebrow={`${LOAD_LABEL[loadType(cl)]} · ${label}`}
        title={`Heating and air conditioning in ${label}`}
        lead={<p>{summary(c.name, cl, seed)}</p>}
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
              Source: NOAA 1991–2020 U.S. Climate Normals, {c.station.name} station, about {n(c.station.miles)} mile{c.station.miles === 1 ? "" : "s"} from {c.name}. Elevation about {n(cl.elevFt)} feet.
            </p>

            <div>
              <h2 className="text-3xl font-semibold">What {c.name}&apos;s climate means for your HVAC</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {advice(c.name, cl, seed).map((a) => (
                  <div key={a.title} className="card p-5">
                    <h3 className="font-sans text-lg font-semibold">{a.title}</h3>
                    <p className="mt-2 text-muted">{a.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-muted">{serviceTiming(c.name, cl)}</p>
            </div>

            {siblings.length >= 5 && (
              <div>
                <h2 className="text-2xl font-semibold">How {c.name} compares with other {st.name} cities</h2>
                <ul className="prose-cp mt-3">
                  <li>
                    Winters are milder than in {pct(siblings, (x) => x.climate.janLow, cl.janLow)}% of the {siblings.length} {st.name} cities we have climate data for (average low {n(cl.janLow)}°F,
                    against a state median of {n(median(siblings.map((x) => x.climate.janLow)))}°F).
                  </li>
                  <li>
                    Summers bring more 90°F days than {pct(siblings, (x) => x.climate.hot90, cl.hot90)}% of those cities ({n(cl.hot90)} days, state median{" "}
                    {n(median(siblings.map((x) => x.climate.hot90)))}).
                  </li>
                  <li>
                    Annual heating demand is higher than in {pct(siblings, (x) => x.climate.hdd, cl.hdd)}% of them, and cooling demand higher than in{" "}
                    {pct(siblings, (x) => x.climate.cdd, cl.cdd)}%.
                  </li>
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-3xl font-semibold">Services {c.name} homeowners need most</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {services.map((s) => (
                  <li key={s!.slug}>
                    <Chip href={routes.service(s!.slug)}>{s!.name}</Chip>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">ZIP codes we cover in {c.name}</h2>
              <p className="mt-3 break-words text-muted">{c.zips.join(", ")}</p>
            </div>

            {c.alsoServes && c.alsoServes.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold">Also covered by this guide</h2>
                <p className="mt-2 text-muted">
                  These nearby towns share {c.name}&apos;s climate data, so the guidance above applies to them too.
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {c.alsoServes.map((a) => (
                    <li key={a.name} className="rounded-xl bg-white p-4 ring-1 ring-line">
                      <span className="font-semibold text-ink">{a.name}</span> <span className="text-sm text-muted">· {n(a.miles)} mi away</span>
                      <span className="mt-1 block text-sm break-words text-muted">ZIP {a.zips.join(", ")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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

// Must match the visible FAQs exactly (same seed), since they feed FAQPage markup.
export function dataCityFaqs(c: DataCity, stateAbbr: string) {
  return climateFaqs(c.name, c.climate, c.station.name, c.station.miles, `${c.name}|${stateAbbr}`);
}
