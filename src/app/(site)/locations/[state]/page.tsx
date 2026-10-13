import Link from "next/link";
import { notFound } from "next/navigation";
import { getState, regions } from "@/content/locations";
import { getService } from "@/content/services";
import { zipCountForState } from "@/content/coverage";
import { indexableCities, indexableDataCities, indexableStates } from "@/lib/sitemap";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { Chip, FaqList, Glance, JsonLd } from "@/components/ui";
import { ZipChecker } from "@/components/ZipChecker";
import { CtaBand } from "@/components/CtaBand";
import { CityDirectory } from "@/components/CityDirectory";
import { directoryFor } from "@/content/cityDirectory";

export const dynamicParams = false;
export function generateStaticParams() {
  return indexableStates().map((s) => ({ state: s.slug }));
}

type P = { params: Promise<{ state: string }> };

export async function generateMetadata({ params }: P) {
  const st = getState((await params).state)!;
  const climate = st.glance?.find((g) => g.term === "Watch for")?.detail.toLowerCase();
  return pageMeta({
    title: `Heating & AC Repair in ${st.name}`,
    description: `HVAC help in ${st.name}: ${climate ?? "local climate"}, common heating systems and when to call. Connect with a licensed local contractor.`.slice(0, 158),
    path: routes.state(st.slug),
  });
}

export default async function StatePage({ params }: P) {
  const st = getState((await params).state);
  if (!st) notFound();
  const path = routes.state(st.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: routes.locations() },
    { name: st.name, path },
  ];
  const cities = indexableCities().filter((c) => c.stateSlug === st.slug);
  const zipCount = zipCountForState(st.abbr);
  const focus = (st.focus ?? []).map((f) => ({ ...f, s: getService(f.service) })).filter((f) => f.s);
  const neighbors = indexableStates().filter((s) => s.region === st.region && s.slug !== st.slug);
  const cityFor = (name: string) => cities.find((c) => c.name.toLowerCase() === name.toLowerCase());
  const dataPages = indexableDataCities().filter((x) => x.stateSlug === st.slug);
  const directory = directoryFor(st.abbr).map((d) => {
    const guide = cityFor(d.name);
    if (guide) return { ...d, guide: routes.city(st.slug, guide.slug) };
    const dc = dataPages.find((x) => x.name === d.name);
    return dc ? { ...d, guide: routes.city(st.slug, dc.slug) } : d;
  });
  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: `Heating and air conditioning help in ${st.name}`, description: st.intro, type: "CollectionPage", crumbs, faqs: st.faqs, about: [ids.state(st.slug)] }))} />
      <Hero
        crumbs={crumbs}
        eyebrow={`${st.region ?? "United States"} · ${st.abbr}`}
        title={`Heating and air conditioning help in ${st.name}`}
        lead={<p>{st.intro}</p>}
        facts={zipCount ? [`Contractors in our network take calls in ${zipCount.toLocaleString()} ${st.abbr} ZIP codes`, "Free to request"] : ["Free to request"]}
        aside={
          <div className="rounded-2xl bg-ink-soft p-6 ring-1 ring-white/10">
            <ZipChecker dark />
          </div>
        }
      />

      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {st.details.map((d) => (
                <div key={d.heading} className="card p-6">
                  <h2 className="text-2xl font-semibold">{d.heading}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
          {st.glance && <Glance title={`${st.name} at a glance`} items={st.glance} />}
        </div>
      </section>

      {focus.length > 0 && (
        <section className="bg-white py-14">
          <div className="container-x">
            <h2 className="text-3xl font-semibold">What {st.name} homeowners call about most</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {focus.map((f) => (
                <Link key={f.service} href={routes.service(f.service)} className="card block p-6 transition hover:ring-teal">
                  <h3 className="text-xl font-semibold">{f.s!.name}</h3>
                  <p className="mt-2 text-muted">{f.why}</p>
                  <span className="mt-3 inline-block font-semibold text-teal-deep">How it works →</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-muted">
              Need something else? See <Link href={routes.services()} className="link">all heating and cooling services</Link> or{" "}
              <Link href={routes.emergency()} className="link">what to do in a no-heat or no-AC emergency</Link>.
            </p>
          </div>
        </section>
      )}

      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Major {st.name} metros</h2>
            <p className="mt-2 text-muted">Check your ZIP code above to confirm coverage at your address.</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {(st.metros ?? []).map((m) => {
                const c = cityFor(m);
                return (
                  <li key={m}>
                    {c ? (
                      <Chip href={routes.city(st.slug, c.slug)}>{m}</Chip>
                    ) : (
                      <span className="inline-block rounded-full bg-white px-3 py-1.5 text-sm ring-1 ring-line">{m}</span>
                    )}
                  </li>
                );
              })}
            </ul>
            {cities.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold">Towns with local guides</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  {regions.map((r) => {
                    const list = cities.filter((c) => c.region === r.slug);
                    if (!list.length) return null;
                    return (
                      <div key={r.slug}>
                        <p className="text-sm font-semibold tracking-wider text-muted uppercase">{r.name}</p>
                        <ul className="mt-1 space-y-1">
                          {list.map((c) => (
                            <li key={c.slug}>
                              <Link href={routes.city(st.slug, c.slug)} className="link">{c.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <FaqList faqs={st.faqs} title={`${st.name} HVAC questions`} />
        </div>
      </section>

      {directory.length > 0 && (
        <section id="cities" className="scroll-mt-28 bg-sand-deep py-14">
          <div className="container-x">
            <h2 className="text-3xl font-semibold">
              {st.name} cities we serve ({directory.length})
            </h2>
            <p className="mt-2 max-w-3xl text-muted">
              Contractors in our network take heating and air conditioning calls in these {st.name} cities. Open a city to see its covered ZIP codes. Smaller
              towns are covered too; use the ZIP checker above to confirm your address.
            </p>
            <div className="mt-6">
              <CityDirectory state={st.name} cities={directory} requestHref={routes.request()} />
            </div>
          </div>
        </section>
      )}

      {neighbors.length > 0 && (
        <section className="bg-white py-12">
          <div className="container-x">
            <h2 className="text-2xl font-semibold">Other states in the {st.region}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {neighbors.map((s) => (
                <li key={s.slug}>
                  <Chip href={routes.state(s.slug)}>{s.name}</Chip>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              <Link href={routes.locations()} className="link">All 50 states and Washington, D.C.</Link>
            </p>
          </div>
        </section>
      )}
      <CtaBand title={`Need heating or AC help in ${st.name}?`} />
    </main>
  );
}
