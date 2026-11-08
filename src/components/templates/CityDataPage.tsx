import Link from "next/link";
import type { State } from "@/content/types";
import { getService } from "@/content/services";
import { dataCitiesIn, type DataCity } from "@/content/cityPages";
import { routes } from "@/lib/routes";
import { advice, climateFaqs, loadType, serviceTiming, servicesFor, summary } from "@/lib/climateAdvice";
import { availability, site } from "@/content/site";
import { Hero } from "@/components/Hero";
import { Chip, FaqList, Glance } from "@/components/ui";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { CtaBand } from "@/components/CtaBand";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/icons";
import type { Crumb } from "@/lib/schema";

const n = (x: number) => Math.round(x).toLocaleString("en-US");
const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};
// Share of the state's cities with a lower value than this one (0–100).
const pct = (list: DataCity[], f: (x: DataCity) => number, v: number) => Math.round((100 * list.filter((x) => f(x) < v).length) / list.length);

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
        eyebrow={`24/7 Heating & Cooling Referral · ${label}`}
        title={`Same-Day HVAC, AC & Furnace Repair in ${label}`}
        lead={
          <p>
            Need fast HVAC repair, seasonal tune-up, or a new system quote in {c.name}? We connect you with top-rated, licensed local heating and air conditioning contractors ready for emergency service across your area. Clear written quotes before any work begins.
          </p>
        }
        facts={[
          availability,
          "Same-Day Dispatch & 24/7 Emergency Service",
          "Licensed & Insured Local Contractors",
          "Upfront Written Quotes Before Work Begins",
          `Serving All ${c.name} ZIP Codes`,
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
              Heating or AC breakdown in {c.name}?
            </span>
            <span className="hidden text-muted md:inline">
              Licensed technicians on standby for same-day dispatch across {c.zips.length} ZIP codes.
            </span>
          </div>
          <PhoneLink
            phone={site.phone}
            e164={site.phoneE164}
            label={`Call ${site.phone}`}
            location="urgent_city_strip"
            className="btn btn-primary btn-sm shrink-0"
          />
        </div>
      </div>

      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 space-y-12">
            <div>
              <p className="eyebrow">Local Heating &amp; Cooling</p>
              <h2 className="mt-1 text-3xl font-semibold">
                HVAC Services Available in {c.name}
              </h2>
              <p className="mt-2 text-muted">
                Whether your system quit during peak seasonal temperatures or you need preventative maintenance, local technicians carry common replacement parts on their trucks for rapid repair.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link href="/hvac-services/ac-repair/" className="card p-5 transition hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-tint text-teal-deep">
                    <Icon name="snow" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 font-semibold text-ink">AC Repair &amp; Service</h3>
                  <p className="mt-1.5 text-sm text-muted">
                    Fast troubleshooting for warm air, iced coils, weak airflow, failed capacitors, and refrigerant leaks.
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold text-teal-deep">Learn more →</span>
                </Link>

                <Link href="/hvac-services/furnace-repair/" className="card p-5 transition hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-tint text-teal-deep">
                    <Icon name="flame" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 font-semibold text-ink">Furnace &amp; Heating Repair</h3>
                  <p className="mt-1.5 text-sm text-muted">
                    Restore heat fast: ignitor replacement, flame sensor cleaning, blower motor repair, and safety checks.
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold text-teal-deep">Learn more →</span>
                </Link>

                <Link href="/hvac-services/heat-pump-repair/" className="card p-5 transition hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-tint text-teal-deep">
                    <Icon name="heatpump" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 font-semibold text-ink">Heat Pump Service</h3>
                  <p className="mt-1.5 text-sm text-muted">
                    Year-round dual-fuel and electric heat pump diagnostics, defrost cycle fixes, and seasonal efficiency checks.
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold text-teal-deep">Learn more →</span>
                </Link>

                <Link href="/hvac-services/ac-tune-up/" className="card p-5 transition hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-tint text-teal-deep">
                    <Icon name="wrench" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 font-semibold text-ink">Seasonal HVAC Tune-Up</h3>
                  <p className="mt-1.5 text-sm text-muted">
                    Prevent sudden failures with a 21-point safety inspection, coil cleaning, electrical checks, and filter swaps.
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold text-teal-deep">Learn more →</span>
                </Link>

                <Link href="/hvac-services/ac-installation/" className="card p-5 transition hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-tint text-teal-deep">
                    <Icon name="shield" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 font-semibold text-ink">System Replacement</h3>
                  <p className="mt-1.5 text-sm text-muted">
                    Free in-home estimates on high-efficiency Carrier, Trane, Lennox, and Goodman systems sized to your square footage.
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold text-teal-deep">Learn more →</span>
                </Link>

                <Link href="/hvac-services/ductless-mini-splits/" className="card p-5 transition hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-tint text-teal-deep">
                    <Icon name="fan" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 font-semibold text-ink">Ductless Mini-Splits</h3>
                  <p className="mt-1.5 text-sm text-muted">
                    Targeted heating and cooling for home additions, sunrooms, and houses without existing ductwork.
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold text-teal-deep">Learn more →</span>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <h2 className="text-2xl font-semibold">How to Schedule Service in {c.name}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-tint font-bold text-teal-deep">1</div>
                  <h3 className="mt-3 font-semibold">Call or Submit Form</h3>
                  <p className="mt-1 text-sm text-muted">Describe what your equipment is doing and confirm your {c.name} ZIP code.</p>
                </div>
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-tint font-bold text-teal-deep">2</div>
                  <h3 className="mt-3 font-semibold">Local Contractor Match</h3>
                  <p className="mt-1 text-sm text-muted">We connect you with a verified, licensed HVAC professional who serves your neighborhood.</p>
                </div>
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-tint font-bold text-teal-deep">3</div>
                  <h3 className="mt-3 font-semibold">Upfront Quote &amp; Repair</h3>
                  <p className="mt-1 text-sm text-muted">The technician diagnoses the issue and provides a clear price before starting work.</p>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow">Common Warning Signs</p>
              <h2 className="mt-1 text-3xl font-semibold">
                HVAC Problems We Solve in {c.name}
              </h2>
              <p className="mt-2 text-muted">
                Addressing warning signs early prevents emergency breakdowns during extreme weather.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="card p-5">
                  <h3 className="font-semibold text-ink">AC Running Continuously with Weak Cooling</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    If your outdoor condenser runs nonstop but indoor temperatures stay uncomfortable, the cause is often a weak capacitor, dirty evaporator coil, or slow refrigerant leak. Technicians carry testing gauges and capacitors for immediate diagnosis.
                  </p>
                </div>
                <div className="card p-5">
                  <h3 className="font-semibold text-ink">Furnace Blowing Cool Air or Short-Cycling</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    When a furnace fires up and shuts off after just a few minutes, a dirty flame sensor, restricted air filter, or tripped high-limit safety switch is usually at fault. A professional cleaning and airflow check restores normal cycles.
                  </p>
                </div>
                <div className="card p-5">
                  <h3 className="font-semibold text-ink">Squealing, Grinding, or Buzzing Noises</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Unusual sounds indicate mechanical wear: blower motor bearings need lubrication, a fan blade has come loose, or a contactor is failing. Shutting the system down and scheduling an inspection prevents motor burnout.
                  </p>
                </div>
                <div className="card p-5">
                  <h3 className="font-semibold text-ink">Water Pooling Around the Indoor Unit</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    High humidity produces gallons of condensation daily. When drain lines clog with algae or sludge, overflow pans back up. Technicians flush drain lines and install safety float switches to prevent water damage.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow">Climate &amp; Performance</p>
              <h2 className="mt-1 text-3xl font-semibold">What {c.name}&apos;s Climate Means for Your HVAC</h2>
              <p className="mt-2 text-muted">{summary(c.name, cl, seed)}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {advice(c.name, cl, seed).map((a) => (
                  <div key={a.title} className="card p-5">
                    <h3 className="font-sans text-lg font-semibold">{a.title}</h3>
                    <p className="mt-2 text-muted">{a.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-muted">{serviceTiming(c.name, cl)}</p>
            </div>

            <Glance
              title={`${c.name} Climate at a Glance`}
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

            {siblings.length >= 5 && (
              <div>
                <h2 className="text-2xl font-semibold">How {c.name} Compares with Other {st.name} Cities</h2>
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
              <h2 className="text-2xl font-semibold">ZIP Codes Covered in {c.name}</h2>
              <p className="mt-3 break-words text-muted">{c.zips.join(", ")}</p>
            </div>

            {c.alsoServes && c.alsoServes.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold">Also Covered in This Area</h2>
                <p className="mt-2 text-muted">
                  These nearby communities share {c.name}&apos;s climate zone, and licensed network contractors take calls across these ZIP codes:
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

            <FaqList faqs={faqs} title={`${c.name} HVAC Questions & Answers`} />

            {nearby.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold">Nearby Cities We Service</h2>
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
              For licensing, permits and heating systems common across the state, see the{" "}
              <Link href={routes.state(st.slug)} className="link">{st.name} HVAC guide</Link>
              {guideCities.length > 0 && (
                <>
                  , and our detailed local guides for{" "}
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
                  location="sidebar_widget"
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
              <p className="font-semibold text-teal-deep">Emergency Breakdown?</p>
              <p className="mt-1 text-ink/80">
                Calling is always the fastest way to get a technician dispatched when your furnace quits in freezing weather or AC stops cooling in high heat.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand title={`Need Heating or AC Help in ${c.name}?`} />
    </main>
  );
}

// Must match the visible FAQs exactly (same seed), since they feed FAQPage markup.
export function dataCityFaqs(c: DataCity, stateAbbr: string) {
  return climateFaqs(c.name, c.climate, c.station.name, c.station.miles, `${c.name}|${stateAbbr}`);
}
