// Turns a city's NOAA 1991–2020 climate normals into HVAC guidance. Every statement is derived from
// the numbers, so pages differ in substance (not just the city name). Thresholds are conservative,
// general industry rules of thumb.
import type { Faq } from "@/content/types";

export type Climate = {
  janLow: number; // winter (Dec–Feb) average daily low, °F
  julHigh: number; // summer (Jun–Aug) average daily high, °F
  hdd: number; // annual heating degree days, base 65°F
  cdd: number; // annual cooling degree days, base 65°F
  hot90: number; // average days per year with a high >= 90°F
  freeze32: number; // average days per year with a low <= 32°F
  below0: number; // average days per year with a low <= 0°F
  elevFt: number; // station elevation, feet
};

export type Load = "heating" | "cooling" | "mixed";

export function loadType(c: Climate): Load {
  if (c.hdd > 2 * c.cdd) return "heating";
  if (c.cdd > 1.5 * c.hdd) return "cooling";
  return "mixed";
}

// Small deterministic variation so sibling pages don't share identical sentences.
function pick<T>(seed: string, options: T[]): T {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return options[h % options.length];
}

const n = (x: number) => Math.round(x).toLocaleString("en-US");

export function summary(city: string, c: Climate, seed = city): string {
  const load = loadType(c);
  if (load === "heating")
    return pick(seed, [
      `${city} is heating country: winter nights average ${n(c.janLow)}°F and the area logs about ${n(c.hdd)} heating degree days a year, roughly ${n(c.hdd / Math.max(c.cdd, 1))} times its cooling load.`,
      `Heating carries most of the load in ${city}. Winter lows average ${n(c.janLow)}°F, and annual heating demand (${n(c.hdd)} degree days) far outweighs cooling (${n(c.cdd)}).`,
      `Plan for winter first in ${city}: about ${n(c.hdd)} heating degree days a year against ${n(c.cdd)} for cooling, and winter nights that average ${n(c.janLow)}°F.`,
    ]);
  if (load === "cooling")
    return pick(seed, [
      `${city} runs on air conditioning: summer highs average ${n(c.julHigh)}°F, with about ${n(c.hot90)} days a year at 90°F or above and ${n(c.cdd)} cooling degree days.`,
      `Cooling dominates in ${city}. Typical summer afternoons reach ${n(c.julHigh)}°F, roughly ${n(c.hot90)} days a year hit 90°F, and cooling demand (${n(c.cdd)} degree days) outweighs heating (${n(c.hdd)}).`,
      `In ${city}, the air conditioner is the system that matters most: ${n(c.cdd)} cooling degree days a year, summer afternoons near ${n(c.julHigh)}°F and about ${n(c.hot90)} days at 90°F or more.`,
    ]);
  return pick(seed, [
    `${city} needs both systems to pull their weight: summer highs average ${n(c.julHigh)}°F while winter nights average ${n(c.janLow)}°F, with ${n(c.hdd)} heating and ${n(c.cdd)} cooling degree days a year.`,
    `Homes in ${city} work hard in both seasons. Winter lows average ${n(c.janLow)}°F and summer highs ${n(c.julHigh)}°F, so the furnace or heat pump and the air conditioner both get heavy use.`,
    `${city} splits the year between heating and cooling: ${n(c.hdd)} heating and ${n(c.cdd)} cooling degree days, with summer highs near ${n(c.julHigh)}°F and winter lows near ${n(c.janLow)}°F.`,
  ]);
}

export function heatPumpFit(city: string, c: Climate, seed = city): string {
  const lo = n(c.janLow);
  if (c.janLow >= 30)
    return pick(seed + "hp", [
      `With winter lows averaging ${lo}°F, a standard air-source heat pump can handle nearly all of ${city}'s heating on its own.`,
      `${city}'s winters are mild for a heat pump: nights average ${lo}°F, well within what a standard model heats efficiently without backup most of the year.`,
      `Heat pumps suit ${city} well; with winter nights around ${lo}°F, backup heat rarely runs.`,
    ]);
  if (c.janLow >= 20)
    return pick(seed + "hp", [
      `Winter lows average ${lo}°F in ${city}, so a heat pump covers most winter days, with backup heat or a gas furnace (dual-fuel) for the coldest nights.`,
      `At an average winter low of ${lo}°F, a heat pump in ${city} carries most of the season; pairing it with a furnace or heat strips handles the coldest snaps.`,
      `A heat pump in ${city} handles most winter days at an average low of ${lo}°F, but plan backup heat for the coldest weeks.`,
    ]);
  if (c.janLow >= 5)
    return pick(seed + "hp", [
      `At an average winter low of ${lo}°F, ${city} homes usually choose a cold-climate heat pump or a dual-fuel system that switches to a gas furnace in deep cold.`,
      `Winter nights in ${city} average ${lo}°F, cold enough that a standard heat pump struggles; cold-climate models or dual-fuel setups are the usual choice.`,
      `${city}'s ${lo}°F average winter low calls for a cold-climate heat pump or a dual-fuel pairing with a furnace.`,
    ]);
  return pick(seed + "hp", [
    `With winter lows averaging ${lo}°F, only cold-climate heat pumps make sense in ${city}, and most homes keep a furnace or boiler as backup for the harshest weeks.`,
    `${city} averages ${lo}°F on winter nights, so a heat pump must be a cold-climate model, and a furnace or boiler remains the backup for extreme cold.`,
    `At ${lo}°F average winter lows, ${city} homes treat a heat pump as a supplement to a furnace or boiler, choosing cold-climate models only.`,
  ]);
}

export function advice(city: string, c: Climate, seed = city): { title: string; body: string }[] {
  const out: { title: string; body: string }[] = [];
  const v = (key: string, opts: string[]) => pick(seed + key, opts);
  out.push({ title: "Heat pumps", body: heatPumpFit(city, c, seed) });

  if (c.hot90 >= 60)
    out.push({
      title: "Long, hot summers",
      body: v("hot", [
        `About ${n(c.hot90)} days a year reach 90°F in ${city}, so air conditioners run for long stretches. Capacitors, contactors and fan motors wear fastest here; a spring check and a clean outdoor coil prevent many mid-summer failures.`,
        `With roughly ${n(c.hot90)} days of 90°F heat each year, ${city} air conditioners log long run times. Heat-stressed parts like capacitors fail most in July, so test them in spring and keep the condenser coil clean.`,
      ]),
    });
  else if (c.hot90 >= 15)
    out.push({
      title: "Summer heat waves",
      body: v("warm", [
        `${city} averages about ${n(c.hot90)} days a year at 90°F or above. Most breakdowns happen during the first heat wave, when parts that weakened over the winter finally fail, so service before then pays off.`,
        `Expect around ${n(c.hot90)} days at 90°F or hotter in ${city}. A tune-up before the first hot spell catches weak capacitors and dirty coils while there's still time to schedule.`,
      ]),
    });
  else
    out.push({
      title: "Mild summers",
      body: v("mild", [
        `Only about ${n(c.hot90)} days a year reach 90°F in ${city}, so many older homes were built without central air. When cooling is added, a heat pump or ductless mini-split usually makes more sense than an air conditioner alone, because it also heats.`,
        `${city} sees just ${n(c.hot90)} days a year at 90°F or above, and many homes have no central air. A heat pump or mini-split adds cooling for heat waves and doubles as efficient heat.`,
      ]),
    });

  if (c.below0 >= 5)
    out.push({
      title: "Subzero nights",
      body: v("sub", [
        `${city} averages ${n(c.below0)} nights a year at or below 0°F. A furnace failure on those nights can freeze pipes within hours, so a fall tune-up, a carbon monoxide check and a plan for emergency service matter.`,
        `About ${n(c.below0)} nights a year drop to 0°F or lower in ${city}. Losing heat then is an emergency; service the furnace each fall and know how to protect plumbing while help is on the way.`,
      ]),
    });
  else if (c.freeze32 >= 90)
    out.push({
      title: "Long freezing season",
      body: v("frz", [
        `With about ${n(c.freeze32)} nights a year at or below freezing, ${city} homes need reliable heat for months. High-efficiency furnaces should have their PVC vents and condensate lines checked so ice and snow can't shut them down.`,
        `${city} logs roughly ${n(c.freeze32)} freezing nights a year, a long heating season. Keep high-efficiency furnace vent pipes clear of snow and ice, and make sure condensate lines can't freeze.`,
      ]),
    });
  else if (c.freeze32 >= 20)
    out.push({
      title: "Occasional freezes",
      body: v("occ", [
        `${city} sees about ${n(c.freeze32)} freezing nights a year. Heat pumps need working defrost controls and backup heat for those nights, and outdoor condensate lines should be protected.`,
        `Around ${n(c.freeze32)} nights a year dip below freezing in ${city}. That's when weak heat pump defrost controls and backup heat strips show up, so check them in the fall.`,
      ]),
    });

  if (c.elevFt >= 2000)
    out.push({
      title: "Elevation",
      body: v("alt", [
        `At roughly ${n(c.elevFt)} feet, gas furnaces in the ${city} area are typically set up following the manufacturer's high-altitude instructions so they burn correctly and safely. Ask the installer to confirm it and check combustion after startup.`,
        `${city} sits around ${n(c.elevFt)} feet up, where gas appliances usually need high-altitude setup per the manufacturer. A proper installation includes a combustion check after the furnace is running.`,
      ]),
    });

  return out;
}

export function serviceTiming(city: string, c: Climate): string {
  const load = loadType(c);
  if (load === "cooling" && c.hot90 >= 60) return `In ${city}, schedule air conditioning service in February or March, before the long cooling season, and a quick heating check in the fall.`;
  if (load === "heating") return `In ${city}, schedule furnace or heat pump service in August or September, before the first cold snap, and air conditioning service in May.`;
  return `In ${city}, schedule air conditioning service in April or May and furnace or heat pump service in September or October, ahead of each season's first extreme.`;
}

export function servicesFor(c: Climate): string[] {
  const load = loadType(c);
  const base =
    load === "heating"
      ? ["furnace-repair", "furnace-tune-up", "heat-pump-installation", "whole-house-humidifiers"]
      : load === "cooling"
        ? ["ac-repair", "ac-tune-up", "duct-sealing", "heat-pump-installation"]
        : ["ac-repair", "furnace-repair", "heat-pump-installation", "duct-sealing"];
  if (c.hot90 < 15 && !base.includes("ductless-mini-splits")) base[base.length - 1] = "ductless-mini-splits";
  if (c.elevFt >= 2000 && !base.includes("furnace-installation")) base.push("furnace-installation");
  return base;
}

export function climateFaqs(city: string, c: Climate, station: string, miles: number, seed = city): Faq[] {
  return [
    { q: `Is a heat pump a good choice in ${city}?`, a: heatPumpFit(city, c, seed) },
    { q: `When should I schedule HVAC maintenance in ${city}?`, a: serviceTiming(city, c) },
    {
      q: `How hot and cold does ${city} get?`,
      a: `Based on NOAA's 1991–2020 climate normals for the ${station} station (about ${n(miles)} mile${miles === 1 ? "" : "s"} away), summer highs average ${n(c.julHigh)}°F and winter lows ${n(c.janLow)}°F, with about ${n(c.hot90)} days a year at 90°F or above and ${n(c.freeze32)} nights at or below freezing.`,
    },
  ];
}
