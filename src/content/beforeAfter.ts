import type { Photo } from "./photos";

// Before/after pairs. Stock examples (Pexels), always labelled "not our jobs".
// Swap in real job photos, with homeowner consent, as they come in.
export type BeforeAfter = {
  slug: string;
  title: string;
  body: string;
  services: string[];
  before: Photo;
  after: Photo;
};

const p = (name: string, alt: string): Photo => ({ src: `/photos/${name}.webp`, w: 1200, h: 800, alt });

export const beforeAfter: BeforeAfter[] = [
  {
    slug: "window-units-to-mini-split",
    title: "Window units replaced by a ductless mini-split",
    body: "Older homes without ducts often cool room by room with window units. A mini-split head does the same job quietly, heats in winter, and frees the window.",
    services: ["ductless-mini-splits", "heat-pump-installation", "evaporative-coolers"],
    before: p("before-window-ac-units", "Stack of old window air conditioning units"),
    after: p("after-ductless-mini-split", "Ductless mini-split head mounted high on a white wall"),
  },
  {
    slug: "worn-condenser-to-new",
    title: "Weathered outdoor units replaced with a new condenser",
    body: "Worn, rusting outdoor equipment loses efficiency and often runs on phased-out R-22. A new, properly sized unit on a clean mount cools better and uses less power.",
    services: ["ac-installation", "ac-repair", "heat-pump-installation"],
    before: p("before-weathered-outdoor-units", "Weathered outdoor air conditioning units on a stained wall"),
    after: p("after-new-condenser-unit", "New white outdoor condensing unit on a clean wall"),
  },
];

export function beforeAfterFor(serviceSlug: string) {
  return beforeAfter.filter((b) => b.services.includes(serviceSlug));
}
