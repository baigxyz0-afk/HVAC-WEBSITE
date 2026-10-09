import Link from "next/link";
import { categories, servicesInCategory } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { availability } from "@/content/site";
import { Hero } from "@/components/Hero";
import { photos } from "@/content/photos";
import { JsonLd, ServiceCard } from "@/components/ui";
import { Icon } from "@/components/icons";
import { CtaBand } from "@/components/CtaBand";

const title = "Heating & Cooling Services in Denver";
const description =
  "Every HVAC service we connect Denver homeowners with: AC repair and replacement, furnaces, heat pumps, mini-splits, air quality, ductwork and thermostats.";
const path = routes.services();

export const metadata = pageMeta({ title, description, path });

export default function ServicesHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path },
  ];
  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: title, description, type: "CollectionPage", crumbs, about: [ids.org] }))} />
      <Hero
        crumbs={crumbs}
        eyebrow="HVAC services"
        title="Heating and cooling services for Denver homes"
        lead={<p>7 categories, 17 services, each explained with the signs, the process, DIY checks, and what drives cost. Pick a service, or call and describe the problem.</p>}
        facts={[availability, "Licensed local contractors"]}
        photo={photos.technician}
      />
      <section className="py-14">
        <div className="container-x space-y-14">
          <nav aria-label="Categories" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <a key={c.slug} href={`#${c.slug}`} className="inline-flex min-h-10 items-center rounded-full bg-white px-4 text-sm font-medium ring-1 ring-line hover:ring-teal">
                {c.name}
              </a>
            ))}
            <Link href={routes.emergency()} className="inline-flex min-h-10 items-center rounded-full bg-alert-tint px-4 text-sm font-semibold text-alert">
              Emergency heating & AC
            </Link>
          </nav>
          {categories.map((c) => (
            <div key={c.slug} id={c.slug} className="scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-tint text-teal-deep">
                  <Icon name={c.icon} />
                </span>
                <h2 className="text-3xl font-semibold">{c.name}</h2>
              </div>
              <p className="mt-2 text-muted">{c.blurb}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {servicesInCategory(c.slug).map((s) => (
                  <ServiceCard key={s.slug} s={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
