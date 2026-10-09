import type { Service } from "./types";

const U = "2026-09-28";

// Add new service records here. They're merged in services.ts.
export const servicesMore: Service[] = [
  {
    slug: "evaporative-coolers",
    name: "Evaporative (Swamp) Cooler Service",
    shortName: "Swamp coolers",
    category: "cooling",
    status: "PUBLISHED",
    seoTitle: "Swamp Cooler Repair & Service in Denver, CO",
    metaDescription:
      "Evaporative cooler start-up, winterizing, pad replacement, repair and replacement for Denver homes, plus when to switch to central air.",
    h1: "Evaporative (swamp) cooler service",
    answer:
      "An evaporative cooler cools air by pulling it through wet pads, which works well in Denver's dry climate for a fraction of the power an air conditioner uses. It needs a spring start-up, new pads every season or two, and a fall shutdown so the water line doesn't freeze.",
    intro: [
      "Swamp coolers are still common on postwar ranches in Lakewood, Arvada, Aurora, Englewood and Denver. On a typical dry summer day they drop incoming air temperature by 15 to 25 degrees.",
      "They lose effectiveness on humid monsoon days and bring in outside air, which is a problem during wildfire smoke. That's when many owners consider a heat pump or central air instead.",
    ],
    signs: ["Weak or warm airflow", "Musty or fishy smell", "Water leaking onto the roof or ceiling", "Pads crusted with minerals", "Motor or belt squealing"],
    process: [
      { title: "Spring start-up", body: "Reconnect water, replace pads, check the float, pump, belt and motor, and clean the reservoir." },
      { title: "Repair", body: "Replace failed pumps, motors, belts, floats or water lines." },
      { title: "Fall shutdown", body: "Drain the water line and pan, disconnect the supply and cover the unit to prevent freezing and drafts." },
    ],
    costFactors: ["Roof vs. window unit", "Pad type (aspen vs. rigid media)", "Parts replaced", "Replacing the cooler vs. converting to central air"],
    diy: { safe: ["Change pads", "Clean the reservoir", "Close the damper or cover the duct in winter"], stop: ["Working on a roof unit without fall protection", "Electrical repairs on the motor"] },
    faqs: [
      { q: "Is a swamp cooler or AC better in Denver?", a: "Coolers cost less to run and work well on dry days. Central AC or a heat pump cools reliably in humid weather and during smoke events." },
      { q: "When should I winterize my swamp cooler?", a: "Before the first hard freeze, usually by early October." },
      { q: "Why do swamp coolers struggle when monsoon humidity arrives in Denver?", a: "Evaporative cooling relies on water evaporating into dry air to drop the temperature. When late-summer monsoon moisture pushes Denver dew points into the mid-50s or 60s, evaporation slows down and output air feels humid and clammy." },
      { q: "What are the advantages of rigid media pads vs. aspen wood pads?", a: "Traditional aspen wood pads are inexpensive but need annual replacement and degrade faster. 8-to-12-inch rigid cellulose media pads (found on MasterCool or Breezair coolers) last 3 to 5 years, drop temperatures more efficiently, and resist mineral scale buildup." },
    ],
    related: ["ac-installation", "heat-pump-installation", "ductless-mini-splits", "air-filtration"],
    isEmergencyCapable: false,
    glance: [
      { term: "Works best", detail: "Hot, dry days" },
      { term: "Start-up", detail: "May" },
      { term: "Shutdown", detail: "Before the first hard freeze" },
    ],
    updated: U,
  },
];
