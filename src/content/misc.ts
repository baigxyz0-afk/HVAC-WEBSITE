import type { Faq, LandingPage, Review } from "./types";

// Content dates for sitemap lastmod. Never the build time.
export const dates = {
  site: "2026-09-28",
  services: "2026-09-28",
  locations: "2026-09-28",
  guides: "2026-09-28",
  legal: "2026-09-28",
};

// Only real, verified reviews. Empty until the Google Business Profile collects them.
export const reviews: Review[] = [];

export const redirects: { source: string; destination: string; permanent: boolean }[] = [
  { source: "/services/", destination: "/hvac-services/", permanent: true },
  { source: "/service-areas/", destination: "/locations/", permanent: true },
  { source: "/blog/", destination: "/resources/", permanent: true },
];

export const generalFaqs: Faq[] = [
  { q: "How does Aspenridge Heating & Air work?", a: "You call or send a request, and we connect you with an independent, licensed heating and cooling contractor who serves your ZIP code. The contractor quotes and performs the work directly." },
  { q: "Is Aspenridge Heating & Air an HVAC company?", a: "No. We're a referral service. The contractors in our network are independent businesses responsible for their own licensing, pricing and work." },
  { q: "What areas do you cover?", a: "The Denver metro, including Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, Englewood, Centennial, Parker, Castle Rock and Boulder. Check your ZIP on the locations page." },
  { q: "Does it cost anything to request service?", a: "No. Requesting service is free. You only pay the contractor for work you approve." },
  { q: "How do I check an HVAC contractor's license?", a: "Colorado has no statewide HVAC license; Denver and many metro cities license mechanical contractors locally, and your city's building department can confirm a license." },
  { q: "Do you give prices over the phone?", a: "HVAC prices depend on what the technician finds, so each service page explains the cost factors and the contractor quotes after seeing the system." },
];

export const problems = [
  { symptom: "AC runs but no cold air", cause: "Failed capacitor, dirty coil or low refrigerant", service: "ac-repair", guide: "ac-running-but-not-cooling" },
  { symptom: "Ice on the AC lines", cause: "Low airflow or a refrigerant leak", service: "ac-repair", guide: "ac-frozen-coil" },
  { symptom: "Furnace won't start", cause: "Ignitor, flame sensor or blocked vent", service: "furnace-repair", guide: "furnace-not-turning-on" },
  { symptom: "Furnace turns on and off", cause: "Dirty flame sensor or overheating", service: "furnace-repair", guide: "furnace-short-cycling" },
  { symptom: "CO alarm sounding", cause: "Combustion or venting problem: get outside first", service: "furnace-tune-up", guide: "carbon-monoxide-alarm-what-to-do" },
  { symptom: "Heat pump encased in ice", cause: "Defrost or refrigerant problem", service: "heat-pump-repair", guide: "heat-pump-iced-over" },
  { symptom: "Upstairs too hot", cause: "Duct design, returns or one thermostat", service: "zoning-systems", guide: "repair-or-replace-hvac" },
  { symptom: "System 15+ years old", cause: "End of service life", service: "ac-installation", guide: "repair-or-replace-hvac" },
];

export const landingPages: LandingPage[] = [
  {
    slug: "ac-repair",
    service: "ac-repair",
    canonical: "/hvac-services/ac-repair/",
    headline: "AC not cooling? Talk to a local HVAC technician",
    sub: "Warm air, an iced coil or an outdoor unit that just hums. Get connected with a licensed Denver HVAC contractor who diagnoses before quoting.",
    bullets: ["Capacitors, contactors and fan motors often fixed on the first visit", "Price quoted before any work", "Independent, licensed local contractors"],
    signs: ["Warm air from vents", "Outdoor fan not spinning", "Ice on refrigerant lines"],
    expect: ["A short call about what the system is doing", "Connection with a contractor serving your ZIP", "Diagnosis and a written price before repair"],
    faqs: [{ q: "How fast can a technician come out?", a: "It depends on the day and demand. Many requests are scheduled the same or next day." }],
    kw: { "not-cooling": "AC running but not cooling? Get help now", "frozen": "AC frozen up? Talk to a technician", "aurora": "AC repair in Aurora" },
  },
  {
    slug: "furnace-repair",
    service: "furnace-repair",
    canonical: "/hvac-services/furnace-repair/",
    headline: "No heat? Get a furnace technician",
    sub: "Furnace won't light, keeps shutting off or blows cold air. Get connected with a licensed Denver heating contractor.",
    bullets: ["Ignitor, flame sensor and control board repairs", "Safety and CO checks", "Independent, licensed local contractors"],
    signs: ["No heat", "Furnace short cycling", "Blinking error code"],
    expect: ["Quick checks by phone", "A contractor serving your ZIP", "A quote before any work"],
    faqs: [{ q: "What if I smell gas?", a: "Leave the home and call Xcel Energy's gas emergency line or 911 from outside first." }],
    kw: { "no-heat": "No heat? Talk to a technician now", "furnace-not-working": "Furnace not working? Get help now" },
  },
  {
    slug: "ac-replacement",
    service: "ac-installation",
    canonical: "/hvac-services/ac-installation/",
    headline: "Replace your air conditioner the right way",
    sub: "Old R-22 system or a failed compressor? Get a written quote from a licensed contractor who sizes with a load calculation.",
    bullets: ["Manual J sizing", "Matched coil and new line set where needed", "Permit handled by the contractor"],
    signs: ["System 12–15+ years old", "R-22 refrigerant", "Compressor failure"],
    expect: ["A call about your home and system", "An in-home visit", "Written options"],
    faqs: [{ q: "Should I also replace the furnace?", a: "If it's over 15 years old, pairing them is often worth it." }],
    kw: { "heat-pump": "Considering a heat pump? Get a quote", "new-ac": "New AC installation in Denver" },
  },
];

export function getLanding(slug: string) {
  return landingPages.find((l) => l.slug === slug);
}
