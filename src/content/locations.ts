import type { City, CityService, State } from "./types";
import { citiesMore } from "./locationsMore";
import { extraIssues, extraFaqs } from "./locationDepth";

const U = "2026-09-28";

export const states: State[] = [
  {
    slug: "colorado",
    name: "Colorado",
    abbr: "CO",
    status: "PUBLISHED",
    intro:
      "Aspenridge Heating & Air connects homeowners across the Denver metro, in Denver, Arapahoe, Jefferson, Adams, Douglas and Boulder counties, with independent, licensed HVAC contractors. Front Range heating and cooling has its own rules: high altitude, dry air, hail, fast temperature swings, and a housing stock where many older homes never had central air.",
    details: [
      { heading: "Housing stock", body: "Central Denver neighborhoods such as Capitol Hill, Highland, Washington Park and Park Hill hold Victorian homes, bungalows and Denver Squares from the 1890s through the 1930s, often with boilers or retrofitted basement furnaces. Postwar ranches spread across Lakewood, Arvada, Aurora and Englewood in the 1950s through 1970s, many with swamp coolers. Highlands Ranch, Parker, Castle Rock, Thornton and southeast Aurora grew from the 1980s on with two-story homes and central air." },
      { heading: "Utilities", body: "Xcel Energy supplies electricity and natural gas to most of the metro. Parts of Douglas County and the northern and eastern suburbs get electricity from co-ops such as IREA or United Power, and Black Hills Energy supplies gas in some communities. Rebate programs from Xcel, the City of Denver and the state change often, so ask the contractor what currently applies." },
      { heading: "Permits and licensing", body: "Colorado has no statewide HVAC contractor license. Denver licenses mechanical contractors, and cities such as Aurora, Lakewood and Arvada register or license contractors and issue mechanical permits. Unincorporated areas go through the county building department." },
      { heading: "Climate and altitude", body: "At roughly 5,300 feet and higher, furnaces must be set up for altitude, and air conditioners move less mass per cubic foot of air. Summers are hot and dry, winters bring cold fronts and snow between sunny days, spring and summer hail damages condensers, and wildfire smoke periodically affects indoor air." },
    ],
    faqs: [
      { q: "Does Colorado license HVAC contractors?", a: "Not at the state level. Denver and many metro cities license or register mechanical contractors and require permits for furnace and AC replacement." },
      { q: "Do furnaces need adjusting for Denver's altitude?", a: "Yes. Gas appliances are derated or fitted for high altitude so they burn correctly. Installers follow the manufacturer's high-altitude instructions." },
    ],
    updated: U,
  },
];

export const regions = [
  { slug: "denver", name: "Denver" },
  { slug: "west", name: "West metro" },
  { slug: "north", name: "North metro & Boulder" },
  { slug: "east", name: "Aurora & east metro" },
  { slug: "south", name: "South metro" },
] as const;

const core: City[] = [
  {
    slug: "denver",
    name: "Denver",
    stateSlug: "colorado",
    county: "Denver",
    region: "denver",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80202", "80203", "80204", "80205", "80206", "80207", "80209", "80210", "80211", "80212", "80216", "80218", "80219", "80220", "80222", "80223", "80224", "80230", "80231", "80236", "80237", "80238", "80239", "80246", "80247", "80249"],
    areas: ["Capitol Hill", "Highland", "Washington Park", "Park Hill", "Congress Park", "Baker", "Sloan's Lake", "Central Park", "Hampden", "Green Valley Ranch"],
    intro:
      "Denver's housing runs from 1890s Victorians and brick Denver Squares in Capitol Hill and Highland to postwar ranches in Harvey Park and new construction in Central Park and Green Valley Ranch. Many older homes were built with boilers or gravity furnaces and no air conditioning, so a large share of HVAC work here is adding or upgrading cooling in houses that were never designed for it.",
    housingNotes:
      "Pre-war homes often have radiators, small basement ductwork, or no ducts upstairs at all. Many postwar ranches still rely on swamp coolers mounted on the roof or in a window. Newer homes in Central Park and Green Valley Ranch have standard furnace and AC systems, often with attic ductwork serving upstairs bedrooms.",
    localIssues: [
      { title: "Adding cooling to older homes", body: "Homes with radiators or tiny ducts usually get ductless mini-splits or high-velocity small-duct systems rather than new ducts cut through plaster. See [ductless mini-splits](/hvac-services/ductless-mini-splits/)." },
      { title: "Swamp cooler to central air", body: "Evaporative coolers work well in Denver's dry air, but many owners replace them with central air or heat pumps when the roof unit wears out or wildfire smoke makes bringing in outside air a problem." },
      { title: "Heat pump incentives", body: "The City of Denver's climate programs and Xcel Energy have offered rebates for heat pumps, which has made cold-climate heat pumps a common choice at replacement time." },
    ],
    popularServices: ["ac-installation", "ductless-mini-splits", "heat-pump-installation", "furnace-repair", "evaporative-coolers", "ac-repair"],
    nearby: ["aurora", "lakewood", "englewood", "arvada"],
    water: "Xcel Energy supplies electricity and natural gas to most Denver homes.",
    permits: "Denver Community Planning and Development issues mechanical permits, and contractors must hold a Denver mechanical contractor license.",
    faqs: [
      { q: "Do I need a permit to install AC in Denver?", a: "Yes. Furnace, AC and heat pump installs need a mechanical permit, which a Denver-licensed contractor pulls." },
      { q: "How do I add AC to an old Denver house with radiators?", a: "Ductless mini-splits or small-duct high-velocity systems add cooling without major wall work." },
    ],
    updated: U,
  },
  {
    slug: "aurora",
    name: "Aurora",
    stateSlug: "colorado",
    county: "Arapahoe",
    region: "east",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80010", "80011", "80012", "80013", "80014", "80015", "80016", "80017", "80018", "80019", "80045", "80046", "80047"],
    areas: ["Original Aurora", "Del Mar Park", "Heather Gardens", "Saddle Rock", "Tallyn's Reach", "Southlands", "Murphy Creek"],
    intro:
      "Aurora is Colorado's third-largest city and stretches from 1950s neighborhoods near Colfax to large master-planned communities in the southeast. North and central Aurora hold postwar ranches and 1970s split-levels; southeast Aurora around Saddle Rock, Tallyn's Reach and Southlands is mostly two-story homes built since the 1990s.",
    housingNotes:
      "Older Aurora homes often have original furnaces replaced two or three times but still use the first ductwork, along with swamp coolers or AC added later. Newer southeast homes have central air, attic ductwork and builder-grade systems that are now reaching replacement age.",
    localIssues: [
      { title: "Hail-damaged condensers", body: "The eastern metro sits in one of the most hail-prone parts of the country. Flattened fins cut airflow and efficiency, and severe damage is often an insurance claim. Photograph it before any repair." },
      { title: "Upstairs heat in two-story homes", body: "Southeast Aurora two-stories often run 4 to 6 degrees warmer upstairs in summer. Duct balancing, return air and zoning are the usual fixes." },
      { title: "Wind and dust on the plains edge", body: "Eastern neighborhoods catch more wind-blown dust, which loads filters and condenser coils faster than in the west metro." },
    ],
    popularServices: ["ac-repair", "ac-installation", "zoning-systems", "furnace-repair", "air-filtration"],
    nearby: ["denver", "centennial", "parker"],
    water: "Xcel Energy supplies electricity and natural gas to most Aurora homes; some eastern areas are served by co-op electric utilities.",
    permits: "The City of Aurora's Building Division issues mechanical permits and requires contractors to hold an Aurora contractor license.",
    faqs: [
      { q: "Will insurance cover a hail-damaged AC in Aurora?", a: "Often, if the damage is from a covered storm. Photograph the unit and contact your insurer before replacing it." },
      { q: "Does Aurora require a permit for a new furnace?", a: "Yes. A licensed contractor pulls the mechanical permit." },
    ],
    updated: U,
  },
  {
    slug: "lakewood",
    name: "Lakewood",
    stateSlug: "colorado",
    county: "Jefferson",
    region: "west",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80214", "80215", "80226", "80227", "80228", "80232", "80235"],
    areas: ["Belmar", "Green Mountain", "Bear Creek", "Applewood border", "Lakewood Heights", "Union Square"],
    intro:
      "Lakewood grew quickly after World War II, and most of its homes are brick ranches, split-levels and bi-levels built from the 1950s through the 1970s, climbing toward Green Mountain and the foothills. Many still have their original ductwork and were built without central air.",
    housingNotes:
      "Bi-level and split-level homes put living space half below grade, where the lower level stays cool and the upper level overheats. Swamp coolers are common on 1950s and 60s ranches. Homes near Green Mountain sit higher and see stronger winter winds.",
    localIssues: [
      { title: "Swamp coolers on postwar ranches", body: "Evaporative coolers are efficient in dry air but need spring start-up and fall winterizing, and they bring in outside air during wildfire smoke events. Many owners now pair or replace them with a heat pump." },
      { title: "Split-level comfort", body: "One thermostat can't balance a bi-level. Adjusting dampers, adding returns or a mini-split for the upper level usually helps." },
    ],
    popularServices: ["evaporative-coolers", "ac-installation", "heat-pump-installation", "furnace-repair", "duct-sealing"],
    nearby: ["denver", "arvada", "littleton"],
    water: "Xcel Energy supplies electricity and natural gas to most Lakewood homes.",
    permits: "The City of Lakewood issues mechanical permits and requires contractors to be licensed with the city.",
    faqs: [
      { q: "Should I replace my swamp cooler with central air?", a: "If the cooler is worn out, smoke bothers you, or you want cooling in every room, central AC or a heat pump makes sense. Coolers still work well and cheaply in dry weather." },
      { q: "Do I need a permit in Lakewood?", a: "Yes, for furnace, AC and heat pump installs." },
    ],
    updated: U,
  },
  {
    slug: "arvada",
    name: "Arvada",
    stateSlug: "colorado",
    county: "Jefferson",
    region: "west",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80001", "80002", "80003", "80004", "80005", "80007"],
    areas: ["Olde Town Arvada", "Candelas", "Leyden Rock", "Ralston Valley", "Lake Arbor", "West Woods"],
    intro:
      "Arvada combines a historic Olde Town with large postwar neighborhoods and newer foothill communities such as Candelas and Leyden Rock. The range of housing means everything from 1950s furnaces with swamp coolers to new high-efficiency systems in energy-code homes.",
    housingNotes:
      "Central Arvada neighborhoods built from the 1950s through the 1970s often have basement furnaces with original ductwork, and many added central air later with coils sitting on older furnaces. Newer west Arvada homes are tighter and larger, with attic ductwork and two-stage equipment.",
    localIssues: [
      { title: "Mismatched AC and furnace", body: "When AC was added to an older furnace, the blower and coil often weren't matched. Replacing both together fixes weak airflow and frozen coils." },
      { title: "Foothill wind and cold", body: "West Arvada homes near the foothills face stronger winds and colder nights, which make furnace sizing and duct insulation more important." },
    ],
    popularServices: ["furnace-installation", "ac-installation", "ac-repair", "heat-pump-installation", "furnace-tune-up"],
    nearby: ["westminster", "lakewood", "denver"],
    water: "Xcel Energy supplies electricity and natural gas to most Arvada homes.",
    permits: "The City of Arvada issues mechanical permits and requires contractor licensing.",
    faqs: [
      { q: "Why does my AC freeze up?", a: "In older homes the coil and furnace blower are often mismatched, which starves the coil of air. A technician can check airflow." },
      { q: "Do I need a permit in Arvada?", a: "Yes, for equipment replacement." },
    ],
    updated: U,
  },
  {
    slug: "westminster",
    name: "Westminster",
    stateSlug: "colorado",
    county: "Adams",
    region: "north",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80030", "80031", "80035", "80036", "80234"],
    areas: ["Harris Park", "Hyland Hills", "Legacy Ridge", "Countryside", "Westminster Station", "Bradburn"],
    intro:
      "Westminster straddles Adams and Jefferson counties, with 1960s and 70s neighborhoods near Harris Park and larger two-story homes built in the 1980s and 1990s around Legacy Ridge and Countryside. Many homes are on their second or third air conditioner and furnace.",
    housingNotes:
      "Split-level and ranch homes in south Westminster have basement systems with short runs. Newer north Westminster two-story homes have attic ductwork to upstairs bedrooms, where summer heat builds up under the roof.",
    localIssues: [
      { title: "Attic ductwork in two-story homes", body: "Uninsulated or leaky attic ducts lose cooling before it reaches bedrooms. Sealing and insulation often fix hot rooms without new equipment." },
      { title: "1990s systems at end of life", body: "Much of Westminster's newer housing was built in the 1990s, so many original R-22 air conditioners are being replaced now." },
    ],
    popularServices: ["ac-installation", "duct-sealing", "ac-repair", "furnace-repair", "smart-thermostats"],
    nearby: ["arvada", "thornton", "boulder"],
    water: "Xcel Energy supplies electricity and natural gas to most Westminster homes.",
    permits: "The City of Westminster issues mechanical permits and requires contractor licensing.",
    faqs: [
      { q: "Is it worth replacing a 1990s R-22 air conditioner?", a: "Usually, if it needs a refrigerant repair or a major part. R-22 is expensive and newer systems are far more efficient." },
      { q: "Do I need a permit in Westminster?", a: "Yes, for furnace and AC replacement." },
    ],
    updated: U,
  },
  {
    slug: "thornton",
    name: "Thornton",
    stateSlug: "colorado",
    county: "Adams",
    region: "north",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80229", "80233", "80241", "80260", "80602"],
    areas: ["Original Thornton", "Eastlake", "Northglenn border", "Hunters Glen", "Cherry Creek Park", "Thorncreek"],
    intro:
      "Thornton began as a 1950s planned community of small brick ranch homes and has grown north into large subdivisions built from the 1990s through today. Original Thornton and newer north Thornton need very different heating and cooling work.",
    housingNotes:
      "Original Thornton's ranches have compact basement or crawlspace systems, often with swamp coolers or window units. North Thornton's newer homes are larger two-story houses with central air, and many are due for their first equipment replacement.",
    localIssues: [
      { title: "Small ranches without central air", body: "Many original Thornton homes never had central air. A single-zone heat pump or a mini-split often cools them efficiently without major duct changes." },
      { title: "Open-plains weather", body: "Thornton's north end is exposed to wind, hail and fast cold fronts coming across the plains, which stresses outdoor units and makes a working furnace critical during overnight temperature drops." },
    ],
    popularServices: ["ac-installation", "heat-pump-installation", "ductless-mini-splits", "furnace-repair", "ac-repair"],
    nearby: ["westminster", "denver"],
    water: "Xcel Energy supplies natural gas and most electricity; some north areas receive electricity from United Power.",
    permits: "The City of Thornton issues mechanical permits and requires contractor licensing.",
    faqs: [
      { q: "Can I add AC to a small Thornton ranch?", a: "Yes. A heat pump on the existing ducts or a mini-split are common, cost-effective options." },
      { q: "Do I need a permit in Thornton?", a: "Yes, for equipment installation." },
    ],
    updated: U,
  },
  {
    slug: "littleton",
    name: "Littleton",
    stateSlug: "colorado",
    county: "Arapahoe",
    region: "south",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80120", "80121", "80122", "80123", "80125", "80126", "80127", "80128", "80129", "80130"],
    areas: ["Downtown Littleton", "Columbine", "Ken Caryl", "Highlands Ranch", "Roxborough", "Southglenn"],
    intro:
      "Littleton mailing addresses cover a wide area: the historic downtown, postwar neighborhoods around it, 1970s Columbine and Ken Caryl, and much of Highlands Ranch, built from the 1980s onward. Most homes have basements and two-story layouts with central air.",
    housingNotes:
      "Highlands Ranch and Ken Caryl homes built in the 1980s and 1990s commonly have one furnace and AC in the basement serving three levels, which leaves upstairs warm in summer. Downtown's older homes have smaller systems, some with swamp coolers.",
    localIssues: [
      { title: "Three levels on one system", body: "Basements stay cool while upstairs bedrooms overheat. Zoning or a second system is the lasting fix; balancing dampers help in the meantime." },
      { title: "Foothill homes near Roxborough and Ken Caryl", body: "Homes closer to the foothills face bigger day-night temperature swings and wildfire smoke, making filtration and tight ductwork more valuable." },
    ],
    popularServices: ["zoning-systems", "ac-installation", "air-filtration", "furnace-installation", "ac-repair"],
    nearby: ["englewood", "centennial", "lakewood"],
    water: "Xcel Energy supplies electricity and natural gas to most homes.",
    permits: "The City of Littleton, or Arapahoe, Jefferson or Douglas County, issues mechanical permits depending on where the home is.",
    faqs: [
      { q: "Who issues my permit with a Littleton address?", a: "It depends on whether you're in the city or in unincorporated Arapahoe, Jefferson or Douglas County. The contractor confirms and pulls it." },
      { q: "How can I cool a hot upstairs in Highlands Ranch?", a: "Balance the ducts first, then consider zoning or a separate upstairs system." },
    ],
    updated: U,
  },
  {
    slug: "englewood",
    name: "Englewood",
    stateSlug: "colorado",
    county: "Arapahoe",
    region: "south",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80110", "80111", "80112", "80113"],
    areas: ["Downtown Englewood", "Hampden Hills", "Cherry Hills Village border", "Greenwood Village border", "Arapahoe Acres"],
    intro:
      "Englewood is a compact, older inner-ring suburb with bungalows and postwar ranches, including the mid-century modern homes of Arapahoe Acres. Nearby Greenwood Village and Cherry Hills Village share Englewood ZIP codes but have much larger homes.",
    housingNotes:
      "Small postwar homes often have undersized ducts and returns, and many were cooled by swamp coolers. Mid-century modern homes with flat roofs and large windows present special challenges for duct routing and equipment placement.",
    localIssues: [
      { title: "Mid-century modern homes", body: "Arapahoe Acres and similar homes have slab floors, flat roofs and glass walls. Mini-splits or carefully routed ducts preserve their design while adding comfort." },
      { title: "Large homes in shared ZIPs", body: "Greenwood Village and Cherry Hills Village homes often run multiple systems with zoning and communicating controls, which need technicians familiar with those brands." },
    ],
    popularServices: ["ductless-mini-splits", "ac-installation", "evaporative-coolers", "zoning-systems", "furnace-repair"],
    nearby: ["littleton", "denver", "centennial"],
    water: "Xcel Energy supplies electricity and natural gas.",
    permits: "The City of Englewood issues mechanical permits and requires contractor licensing.",
    faqs: [
      { q: "Can I add AC to a mid-century home without ducts?", a: "Yes. Ductless mini-splits are the usual choice for slab-floor, flat-roof homes." },
      { q: "Do I need a permit in Englewood?", a: "Yes, for furnace, AC and heat pump installs." },
    ],
    updated: U,
  },
  {
    slug: "centennial",
    name: "Centennial",
    stateSlug: "colorado",
    county: "Arapahoe",
    region: "south",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80015", "80016", "80112", "80121", "80122"],
    areas: ["Southglenn", "Willow Creek", "Homestead", "Walnut Hills", "Piney Creek", "Cherry Creek Vista"],
    intro:
      "Centennial incorporated in 2001 from existing suburbs, and most of its homes were built in the 1970s through the 1990s. Neighborhoods like Willow Creek, Homestead and Piney Creek have two-story and ranch homes with basements and central air.",
    housingNotes:
      "Many Centennial homes are on their second air conditioner and third furnace but still use original ductwork and a single return. Homes from the 1970s often have undersized returns that limit how well a new system performs.",
    localIssues: [
      { title: "Original ductwork with new equipment", body: "New high-efficiency equipment underperforms on undersized returns. Measuring static pressure before replacement avoids noisy, short-lived systems." },
      { title: "Hail along the east side", body: "East Centennial near Piney Creek sees frequent hail. Coil guards and prompt inspection after storms protect condensers." },
    ],
    popularServices: ["ac-installation", "furnace-installation", "duct-sealing", "ac-repair", "air-filtration"],
    nearby: ["littleton", "englewood", "aurora", "parker"],
    water: "Xcel Energy supplies electricity and natural gas.",
    permits: "The City of Centennial's building services issue mechanical permits for homes in city limits.",
    faqs: [
      { q: "Should ductwork be checked when replacing my AC?", a: "Yes. A static pressure test shows whether returns are adequate for the new system." },
      { q: "Do I need a permit in Centennial?", a: "Yes, for equipment replacement." },
    ],
    updated: U,
  },
  {
    slug: "parker",
    name: "Parker",
    stateSlug: "colorado",
    county: "Douglas",
    region: "south",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80134", "80138"],
    areas: ["Downtown Parker", "Stonegate", "Pradera", "Idyllwilde", "Clarke Farms", "Canterberry Crossing"],
    intro:
      "Parker grew from a small town into a suburb mostly after 1990, and the majority of its homes are two-story and ranch houses with finished basements and central air. Its higher elevation and open terrain bring colder nights and more wind than central Denver.",
    housingNotes:
      "Builder-grade systems installed in the 1990s and 2000s are now reaching the end of their life. Larger homes often have two systems or zoning, and many finished basements were added after the original system was sized.",
    localIssues: [
      { title: "Finished basements added later", body: "Basements finished after construction often have too few supplies and returns. A small mini-split or added ductwork improves comfort without oversizing the main system." },
      { title: "Colder nights at higher elevation", body: "Parker sits higher than Denver and cools off quickly at night, so furnaces run more and altitude setup matters." },
    ],
    popularServices: ["furnace-installation", "ac-installation", "zoning-systems", "ductless-mini-splits", "furnace-tune-up"],
    nearby: ["castle-rock", "centennial", "aurora"],
    water: "Xcel Energy supplies natural gas to much of Parker, while IREA supplies electricity to many homes.",
    permits: "The Town of Parker issues mechanical permits for homes in town limits; Douglas County covers unincorporated areas.",
    faqs: [
      { q: "Who supplies electricity in Parker?", a: "Many homes are served by IREA, an electric co-op, while others are on Xcel Energy. Check your bill." },
      { q: "Do I need a permit in Parker?", a: "Yes, for furnace and AC replacement." },
    ],
    updated: U,
  },
  {
    slug: "castle-rock",
    name: "Castle Rock",
    stateSlug: "colorado",
    county: "Douglas",
    region: "south",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80104", "80108", "80109"],
    areas: ["Downtown Castle Rock", "The Meadows", "Crystal Valley Ranch", "Castle Pines", "Plum Creek", "Terrain"],
    intro:
      "Castle Rock sits about 6,200 feet up, halfway between Denver and Colorado Springs, and has grown rapidly since the 1990s. Most homes are newer two-story houses with basements, central air and gas furnaces set up for high altitude.",
    housingNotes:
      "Newer neighborhoods like The Meadows and Crystal Valley Ranch have tight, energy-code homes where ventilation and humidity matter. Older homes near downtown are smaller, with basement systems and original ductwork.",
    localIssues: [
      { title: "High-altitude furnace setup", body: "At 6,000-plus feet, gas furnaces need correct altitude derating. An incorrectly set furnace can overheat, soot up or produce carbon monoxide." },
      { title: "Hail and snow on outdoor units", body: "The Palmer Divide gets heavy spring snow and hail. Keeping condensers and heat pumps clear and inspected avoids damage." },
    ],
    popularServices: ["furnace-installation", "furnace-tune-up", "ac-installation", "heat-pump-installation", "whole-house-humidifiers"],
    nearby: ["parker", "littleton"],
    water: "Castle Rock homes are generally served by IREA or Xcel Energy for electricity and Black Hills Energy or Xcel Energy for natural gas, depending on the neighborhood.",
    permits: "The Town of Castle Rock issues mechanical permits and requires contractor licensing.",
    faqs: [
      { q: "Does altitude affect my furnace in Castle Rock?", a: "Yes. Gas appliances are adjusted for altitude so they burn cleanly and safely." },
      { q: "Do I need a permit in Castle Rock?", a: "Yes, for equipment installation." },
    ],
    updated: U,
  },
  {
    slug: "boulder",
    name: "Boulder",
    stateSlug: "colorado",
    county: "Boulder",
    region: "north",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["80301", "80302", "80303", "80304", "80305"],
    areas: ["Mapleton Hill", "Newlands", "Table Mesa", "Martin Acres", "Gunbarrel", "North Boulder"],
    intro:
      "Boulder has historic homes in Mapleton Hill and Whittier, postwar ranches in Martin Acres and Table Mesa, and newer homes in Gunbarrel and North Boulder. Its energy codes and climate goals push many homeowners toward heat pumps and high-efficiency equipment.",
    housingNotes:
      "Older homes often have boilers or small ducts and no central air. Postwar ranches frequently have swamp coolers. Remodeled homes may need to meet Boulder's energy code requirements when equipment is replaced.",
    localIssues: [
      { title: "Electrification and heat pumps", body: "Boulder's climate programs and rebates encourage heat pumps, and many replacements now move from gas furnaces to cold-climate heat pumps or dual-fuel systems." },
      { title: "Wildfire smoke", body: "Smoke from foothill fires makes filtration and sealed homes a priority. High-MERV media filters and closing outside air help." },
    ],
    popularServices: ["heat-pump-installation", "ductless-mini-splits", "air-filtration", "evaporative-coolers", "furnace-repair"],
    nearby: ["westminster", "arvada"],
    water: "Xcel Energy supplies electricity and natural gas.",
    permits: "The City of Boulder issues mechanical permits and enforces its energy code on equipment replacement.",
    faqs: [
      { q: "Are there heat pump rebates in Boulder?", a: "Boulder, Boulder County, Xcel Energy and the state have offered heat pump incentives. The contractor can confirm current programs." },
      { q: "Does Boulder require permits for HVAC replacement?", a: "Yes, and equipment must meet the city's energy code." },
    ],
    updated: U,
  },
];

export const cities: City[] = [...core, ...citiesMore].map((c) => ({
  ...c,
  localIssues: [...c.localIssues, ...(extraIssues[c.slug] ?? [])],
  faqs: [...c.faqs, ...(extraFaqs[c.slug] ?? [])],
}));
export const publishedCities = cities.filter((c) => c.status === "PUBLISHED");

export function getState(slug: string) {
  return states.find((s) => s.slug === slug);
}
export function getCity(stateSlug: string, slug: string) {
  return cities.find((c) => c.stateSlug === stateSlug && c.slug === slug);
}
export function cityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
export function cityLabel(c: City) {
  const st = states.find((s) => s.slug === c.stateSlug);
  return `${c.name}, ${st?.abbr ?? ""}`;
}

export const cityServices: CityService[] = [
  {
    citySlug: "denver",
    serviceSlug: "ac-installation",
    status: "PUBLISHED",
    h1: "Adding central air in Denver",
    seoTitle: "Central AC Installation in Denver, CO",
    metaDescription:
      "Central air and heat pump installation for Denver homes: replacing swamp coolers, cooling older homes, permits and rebates.",
    answer:
      "Many Denver homes are adding central air for the first time, usually when a swamp cooler wears out or wildfire smoke makes bringing in outside air a problem. Homes with existing ducts can add AC or a heat pump; homes with radiators usually get mini-splits.",
    localAngle: [
      "Denver's older neighborhoods were built before central air was common, and for decades evaporative coolers handled summer heat well in the dry climate. As summers have grown hotter and smoke events more common, many owners are switching to refrigerated cooling. If the house has a forced-air furnace, a coil and outdoor unit or a heat pump can use the same ducts, though small returns may need upgrading.",
      "Heat pumps have become a common choice in Denver because city and utility programs have offered rebates for them, and a cold-climate model can also cover most of the heating load. Installations need a Denver mechanical permit pulled by a Denver-licensed contractor.",
    ],
    localFaqs: [
      { q: "Should I choose AC or a heat pump in Denver?", a: "If you're adding cooling anyway, price a heat pump. Rebates can narrow the difference, and it heats efficiently for much of the winter." },
    ],
    updated: U,
  },
  {
    citySlug: "aurora",
    serviceSlug: "ac-repair",
    status: "PUBLISHED",
    h1: "AC repair in Aurora",
    seoTitle: "AC Repair in Aurora, CO",
    metaDescription:
      "Air conditioner repair in Aurora: hail-damaged condensers, failed capacitors, frozen coils and upstairs heat in two-story homes.",
    answer:
      "In Aurora, AC repairs often follow hail storms that flatten condenser fins, along with the usual summer failures: capacitors, contactors, fan motors and frozen coils from dirty filters.",
    localAngle: [
      "Aurora and the eastern metro see some of the most frequent hail in Colorado. Hail can bend condenser fins enough to cut airflow and raise operating pressure, which makes the system run longer and can shorten compressor life. A technician can comb fins on light damage and document heavier damage for an insurance claim.",
      "Two-story homes in southeast Aurora often push their air conditioners hard to cool upstairs bedrooms, and cottonwood and dust from the plains edge load coils quickly. An annual coil cleaning and a mid-summer filter change prevent many breakdown calls. Contractors need an Aurora license for work that requires a permit.",
    ],
    localFaqs: [
      { q: "Can hail-bent fins be repaired?", a: "Light damage can be combed straight. Severe damage usually means a coil or condenser replacement, which may be covered by insurance." },
    ],
    updated: U,
  },
  {
    citySlug: "castle-rock",
    serviceSlug: "furnace-installation",
    status: "PUBLISHED",
    h1: "Furnace replacement in Castle Rock",
    seoTitle: "Furnace Replacement in Castle Rock, CO",
    metaDescription:
      "Furnace replacement for Castle Rock homes: high-altitude setup, sizing for cold Palmer Divide nights, venting and Town permits.",
    answer:
      "Replacing a furnace in Castle Rock means setting it up correctly for about 6,200 feet of elevation, sizing it for colder nights than Denver sees, and planning PVC venting that won't be buried by Palmer Divide snow.",
    localAngle: [
      "Gas furnaces lose capacity at altitude, and manufacturers publish high-altitude instructions for orifices, gas pressure and derating. A furnace that isn't set up correctly can overheat its heat exchanger, produce soot or raise carbon monoxide levels, so ask the installer to measure combustion after installation.",
      "The Palmer Divide collects heavier snow than the rest of the metro, which can drift over sidewall vent terminations. Installers usually raise terminations or route them where snow won't block them. Many Castle Rock homes built in the late 1990s and 2000s are now replacing original builder-grade furnaces, and a Town of Castle Rock mechanical permit is required.",
    ],
    localFaqs: [
      { q: "Why does altitude matter for a new furnace?", a: "Thinner air changes combustion. Correct high-altitude setup keeps the furnace efficient and safe." },
    ],
    updated: U,
  },
];

export const publishedCityServices = cityServices.filter((cs) => cs.status === "PUBLISHED");
