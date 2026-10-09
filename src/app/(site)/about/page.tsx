import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { DISCLOSURE, site } from "@/content/site";
import { JsonLd } from "@/components/ui";
import { SimplePage } from "@/components/SimplePage";
import { CtaBand } from "@/components/CtaBand";

const title = "About Aspenridge Heating & Air";
const description = "Aspenridge Heating & Air connects Denver homeowners with independent, licensed HVAC contractors and publishes plain-language HVAC guides.";
const path = routes.about();
export const metadata = pageMeta({ title, description, path });

export default function About() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path },
  ];
  return (
    <>
      <JsonLd data={graph(pageGraph({ path, name: title, description, type: "AboutPage", crumbs, about: [ids.org] }))} />
      <SimplePage title="About Aspenridge Heating & Air" crumbs={crumbs} lead="A faster, clearer way to find a heating and cooling contractor in Denver.">
        <p>
          The name comes from the aspen groves on the ridges west of Denver. Front Range weather comes off those mountains fast: 95-degree afternoons, sudden hail and cold fronts that drop temperatures 40 degrees in a day, which is why heating and cooling here have to handle both.
        </p>
        <h2>What we do</h2>
        <p>
          {site.name} is a referral service. When you call or send a request, we connect you with an independent, licensed HVAC contractor who serves your ZIP code. The contractor diagnoses the problem, quotes the work, and does the job directly with you.
        </p>
        <p>
          We also publish guides and service pages written specifically for Denver homes: <Link href={routes.guide("ac-running-but-not-cooling")} className="link">AC problems</Link>,{" "}
          <Link href={routes.guide("furnace-not-turning-on")} className="link">furnace failures</Link>,{" "}
          <Link href={routes.guide("heat-pump-vs-furnace-denver")} className="link">heat pumps</Link> and the rest, so you know what you're dealing with before anyone arrives.
        </p>
        <h2>What we don't do</h2>
        <p>
          We don't perform HVAC work, employ technicians, or set prices. We don't publish reviews we haven't verified, or claims we can't back up. Before hiring any contractor, you can check their license with your city or county building department.
        </p>
        <h2>Disclosure</h2>
        <p>{DISCLOSURE}</p>
      </SimplePage>
      <CtaBand />
    </>
  );
}
