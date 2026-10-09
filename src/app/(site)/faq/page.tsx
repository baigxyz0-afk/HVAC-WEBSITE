import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { generalFaqs } from "@/content/misc";
import { states } from "@/content/locations";
import { FaqList, JsonLd } from "@/components/ui";
import { SimplePage } from "@/components/SimplePage";
import { CtaBand } from "@/components/CtaBand";

const title = "Heating & Cooling FAQ for Denver Homes";
const description = "Answers about how Aspenridge Heating & Air works, coverage, licensing and permits in Colorado, and what to expect from an HVAC visit.";
const path = routes.faq();
export const metadata = pageMeta({ title, description, path });

export default function Faq() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQ", path },
  ];
  const faqs = [...generalFaqs, ...states[0].faqs];
  return (
    <>
      <JsonLd data={graph(pageGraph({ path, name: title, description, type: "FAQPage", crumbs, faqs, about: [ids.org] }))} />
      <SimplePage title="Frequently asked questions" crumbs={crumbs}>
        <FaqList faqs={faqs} title="How it works, coverage and licensing" />
      </SimplePage>
      <CtaBand />
    </>
  );
}
