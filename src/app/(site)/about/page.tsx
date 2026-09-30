import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { DISCLOSURE, site } from "@/content/site";
import { JsonLd } from "@/components/ui";
import { SimplePage } from "@/components/SimplePage";
import { CtaBand } from "@/components/CtaBand";

const title = "About Tallgrass Heating & Air";
const description = "Tallgrass Heating & Air connects Kansas City homeowners with independent, licensed HVAC contractors and publishes plain-language HVAC guides.";
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
      <SimplePage title="About Tallgrass Heating & Air" crumbs={crumbs} lead="A faster, clearer way to find a heating and cooling contractor in Kansas City.">
        <p>
          The name comes from the tallgrass prairie that once covered the land where Kansas City grew. The region's weather still comes straight across those plains: humid 100-degree summers and arctic cold fronts, which is why heating and cooling here have to handle both extremes.
        </p>
        <h2>What we do</h2>
        <p>
          {site.name} is a referral service. When you call or send a request, we connect you with an independent, licensed HVAC contractor who serves your ZIP code. The contractor diagnoses the problem, quotes the work, and does the job directly with you.
        </p>
        <p>
          We also publish guides and service pages written specifically for Kansas City homes: <Link href={routes.guide("ac-running-but-not-cooling")} className="link">AC problems</Link>,{" "}
          <Link href={routes.guide("furnace-not-turning-on")} className="link">furnace failures</Link>,{" "}
          <Link href={routes.guide("heat-pump-vs-furnace-kansas-city")} className="link">heat pumps</Link> and the rest, so you know what you're dealing with before anyone arrives.
        </p>
        <h2>What we don't do</h2>
        <p>
          We don't perform HVAC work, employ technicians, or set prices. We don't publish reviews we haven't verified, or claims we can't back up. Before hiring any contractor, you can check their license with your city's permit office or Johnson County's contractor licensing program.
        </p>
        <h2>Disclosure</h2>
        <p>{DISCLOSURE}</p>
      </SimplePage>
      <CtaBand />
    </>
  );
}
