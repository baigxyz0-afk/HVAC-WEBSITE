import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, getCategory } from "@/content/services";
import { publishedSubservices, getSubservice, subservicesOf } from "@/content/subservices";
import { categoryPhotos, servicePhotoOverrides } from "@/content/photos";
import { availability, site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { createLinker } from "@/lib/linker";
import { graph, ids, pageGraph } from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { FaqList, JsonLd } from "@/components/ui";
import { Icon } from "@/components/icons";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { PhoneLink } from "@/components/PhoneLink";
import { CtaBand } from "@/components/CtaBand";

export const dynamicParams = false;
export function generateStaticParams() {
  return publishedSubservices.map((s) => ({ service: s.parent, subservice: s.slug }));
}

type P = { params: Promise<{ service: string; subservice: string }> };

export async function generateMetadata({ params }: P) {
  const p = await params;
  const sub = getSubservice(p.service, p.subservice)!;
  return pageMeta({ title: sub.seoTitle, description: sub.metaDescription, path: routes.subservice(sub.parent, sub.slug) });
}

export default async function SubservicePage({ params }: P) {
  const p = await params;
  const sub = getSubservice(p.service, p.subservice);
  const parent = getService(p.service);
  if (!sub || !parent) notFound();
  const path = routes.subservice(sub.parent, sub.slug);
  const link = createLinker(path);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: routes.services() },
    { name: parent.name, path: routes.service(parent.slug) },
    { name: sub.name, path },
  ];
  const siblings = subservicesOf(parent.slug).filter((s) => s.slug !== sub.slug);
  const node = {
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: sub.name,
    url: `${site.url}${path}`,
    description: sub.answer,
    serviceType: sub.name,
    category: getCategory(parent.category).name,
    isRelatedTo: { "@id": ids.service(parent.slug) },
    broker: { "@id": ids.org },
    areaServed: { "@type": "Country", name: "United States" },
  };
  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: sub.seoTitle, description: sub.metaDescription, type: "ItemPage", crumbs, faqs: sub.faqs, about: [`${site.url}${path}#service`], extra: [node] }))} />
      <Hero
        crumbs={crumbs}
        eyebrow={`${getCategory(parent.category).name} · ${parent.name}`}
        title={sub.h1}
        lead={<p>{sub.answer}</p>}
        service={parent.slug}
        facts={[availability, "Quote before work"]}
        photo={servicePhotoOverrides[parent.slug] ?? categoryPhotos[parent.category]}
      />
      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="min-w-0 space-y-10">
            {sub.sections.map((s) => (
              <div key={s.heading} className="prose-cp text-lg">
                <h2 className="mb-3 text-3xl font-semibold">{s.heading}</h2>
                {s.body.map((b, i) => (
                  <p key={i}>{link(b)}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <h2 className="text-3xl font-semibold">Signs you need {sub.name.toLowerCase()}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {sub.signs.map((x) => (
                  <li key={x} className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-line">
                    <Icon name="check" className="h-5 w-5 shrink-0 text-sage" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold">What affects the cost</h2>
              <p className="mt-3 text-muted">The contractor quotes after diagnosing the system. These are the main factors:</p>
              <ul className="prose-cp mt-4">
                {sub.costFactors.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-alert-tint p-5 ring-1 ring-alert/20">
              <h2 className="font-sans text-lg font-semibold text-alert">Safety</h2>
              <p className="mt-1">{sub.safety}</p>
            </div>

            <FaqList faqs={sub.faqs} />

            <div className="card p-6">
              <h2 className="text-2xl font-semibold">Part of {parent.name.toLowerCase()}</h2>
              <p className="mt-2 text-muted">
                This is one specific repair. For other causes, what to check first and when to call, see the full{" "}
                <Link href={routes.service(parent.slug)} className="link">{parent.name.toLowerCase()} guide</Link>.
              </p>
              {siblings.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-3">
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link href={routes.subservice(s.parent, s.slug)} className="link">{s.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-32 lg:self-start">
            <LeadFormBlock defaultService={parent.slug} compact />
            <div className="card p-5">
              <p className="font-semibold">Prefer to talk?</p>
              <p className="mt-1 text-sm text-muted">{availability}.</p>
              <PhoneLink phone={site.phone} e164={site.phoneE164} location="sidebar" className="btn btn-secondary mt-3 w-full" label={`Call ${site.phone}`} />
            </div>
          </aside>
        </div>
      </section>
      <CtaBand service={parent.slug} title={`Need ${sub.name.toLowerCase()}?`} />
    </main>
  );
}
