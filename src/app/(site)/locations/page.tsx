import Link from "next/link";
import { cityBySlug, cityLabel } from "@/content/locations";
import { zipCountForState } from "@/content/coverage";
import { indexableCities, indexableCityServices, indexableStates } from "@/lib/sitemap";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/ui";
import { ZipChecker } from "@/components/ZipChecker";
import { CtaBand } from "@/components/CtaBand";

const title = "HVAC Service Areas: All 50 States & D.C.";
const description =
  "Find heating and air conditioning help in every U.S. state and Washington, D.C. Check your ZIP code or browse state guides to climate and common HVAC needs.";
const path = routes.locations();

export const metadata = pageMeta({ title, description, path });

const REGIONS = ["Northeast", "Midwest", "South", "West"] as const;
const REGION_NOTES: Record<(typeof REGIONS)[number], string> = {
  Northeast: "Long heating seasons, older homes with boilers and radiators, and a fast shift from heating oil to cold-climate heat pumps.",
  Midwest: "Cold winters built around gas furnaces, humid summers, and lake-effect snow, wind and hail that test outdoor equipment.",
  South: "Long, humid cooling seasons where heat pumps dominate, plus hurricanes, salt air and attic ductwork to manage.",
  West: "From desert heat and dust to mountain cold, altitude, dry air and wildfire smoke, with climates that change within a single state.",
};

export default function LocationsHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path },
  ];
  const states = indexableStates();
  const cities = indexableCities();
  const combos = indexableCityServices();
  const totalZips = states.reduce((n, s) => n + zipCountForState(s.abbr), 0);
  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: title, description, type: "CollectionPage", crumbs, about: states.map((s) => ids.state(s.slug)) }))} />
      <Hero
        crumbs={crumbs}
        eyebrow="Service areas"
        title="Heating and air conditioning help in every state"
        lead={
          <p>
            We connect homeowners with independent, licensed HVAC contractors across the United States. Each state guide covers the local climate, the heating
            systems homes there usually rely on and the problems contractors see most. Check your ZIP code to confirm coverage at your address.
          </p>
        }
        facts={[`${states.length} state and D.C. guides`, `Network coverage in ${totalZips.toLocaleString()} ZIP codes`]}
        aside={
          <div className="rounded-2xl bg-ink-soft p-6 ring-1 ring-white/10">
            <ZipChecker dark />
          </div>
        }
      />

      <section className="py-14">
        <div className="container-x space-y-12">
          {REGIONS.map((r) => {
            const list = states.filter((s) => s.region === r);
            return (
              <div key={r} id={r.toLowerCase()} className="scroll-mt-28">
                <h2 className="text-3xl font-semibold">{r}</h2>
                <p className="mt-2 max-w-3xl text-muted">{REGION_NOTES[r]}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {list.map((s) => (
                    <li key={s.slug}>
                      <Link href={routes.state(s.slug)} className="card block p-4 transition hover:ring-teal">
                        <span className="font-semibold text-ink">{s.name}</span>
                        <span className="mt-1 block text-sm text-muted">{s.glance?.find((g) => g.term === "Watch for")?.detail}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">City guides</h2>
            <p className="mt-2 text-muted">In-depth local pages covering housing, utilities and permits. We add cities as we write genuinely local guides for them.</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={routes.city(c.stateSlug, c.slug)} className="link">
                    {cityLabel(c)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Local service pages</h2>
            <ul className="mt-4 space-y-2">
              {combos.map((cs) => (
                <li key={cs.citySlug + cs.serviceSlug}>
                  <Link href={routes.cityService(cityBySlug(cs.citySlug)!.stateSlug, cs.citySlug, cs.serviceSlug)} className="link">
                    {cs.h1}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-2xl font-semibold">How service areas work</h2>
            <p className="mt-2 text-muted">
              Tallgrass is a referral service. When you call or send a request, we route it to an independent, licensed HVAC contractor who has chosen to serve
              your ZIP code. Licensing and permit rules vary by state and city, so each state guide notes what to check.
            </p>
            <p className="mt-2 text-muted">
              Looking for a service instead? <Link href={routes.services()} className="link">All HVAC services</Link>
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
