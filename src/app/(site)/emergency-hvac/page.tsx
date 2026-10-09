import Link from "next/link";
import { publishedServices } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { availability, site } from "@/content/site";
import { Hero } from "@/components/Hero";
import { photos } from "@/content/photos";
import { FaqList, JsonLd, ServiceCard } from "@/components/ui";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { CtaBand } from "@/components/CtaBand";

const title = "Emergency Heating & AC Repair in Denver";
const description =
  "No heat in a cold snap, no AC in a heat wave, a CO alarm or a gas smell? What to do right now and how to reach a licensed Denver HVAC technician fast.";
const path = routes.emergency();

const faqs = [
  { q: "How do I keep pipes from freezing if the furnace quits?", a: "Open cabinet doors under sinks on outside walls, let faucets drip, close off unused rooms and use space heaters safely until heat is restored." },
  { q: "What counts as an HVAC emergency?", a: "No heat when it's below freezing, no cooling during a heat advisory with vulnerable people at home, a burning smell, or a CO alarm or gas smell (leave and call 911 or the gas utility first)." },
  { q: `Is emergency service available ${site.emergency247 ? "24/7" : "at night"}?`, a: site.emergency247 ? "Yes, emergency calls are answered 24/7." : "Availability after hours depends on the contractors serving your area. Call and we'll connect you with whoever is available." },
];

export const metadata = pageMeta({ title, description, path });

export default function Emergency() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Emergency heating & AC", path },
  ];
  const list = publishedServices.filter((s) => s.isEmergencyCapable);
  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: title, description, crumbs, faqs, about: [ids.org] }))} />
      <Hero
        emergency
        crumbs={crumbs}
        eyebrow="Emergency heating & AC"
        title="No heat or no AC? Make it safe, then call"
        lead={<p>If you smell gas or a CO alarm sounds, get everyone outside and call 911 or the gas utility first. Otherwise, check the breaker, thermostat and filter, then call and we'll connect you with a licensed HVAC technician in your part of Denver.</p>}
        facts={[availability, "No heat · no cooling · furnace lockouts"]}
        photo={photos.condenser}
      />
      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="min-w-0 space-y-10">
            <div className="prose-cp text-lg">
              <h2 className="mb-4 text-3xl font-semibold">What to do in the first 10 minutes</h2>
              <p>
                In winter, protect the house from freezing while you wait: open sink cabinets on outside walls and let faucets drip. In summer, close blinds, move to the lowest level and keep vulnerable people cool. Our{" "}
                <Link href={routes.guide("furnace-not-turning-on")} className="link">no-heat checklist</Link> covers quick checks. If a CO alarm sounds, follow the{" "}
                <Link href={routes.guide("carbon-monoxide-alarm-what-to-do")} className="link">CO alarm steps</Link> instead.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Urgent problems HVAC technicians handle</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {list.map((s) => (
                  <ServiceCard key={s.slug} s={s} />
                ))}
              </div>
            </div>
            <FaqList faqs={faqs} />
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <LeadFormBlock compact id="emergency-form" />
          </aside>
        </div>
      </section>
      <CtaBand title="No heat or no AC? Call now" />
    </main>
  );
}
