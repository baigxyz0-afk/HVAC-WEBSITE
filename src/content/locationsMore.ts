import type { City } from "./types";

// Wave 3 city guides: highest-payout HVAC metros (LeadSmart data 2026-10-05). Merged in locations.ts.
// Utility, permit and licensing facts are general; verify with each city before launch.
const U = "2026-10-06";

export const citiesMore: City[] = [
  {
    slug: "denver",
    name: "Denver",
    stateSlug: "colorado",
    county: "Denver",
    region: "denver-metro",
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
      { title: "Altitude and hail", body: "At about 5,280 feet, gas furnaces must be set up for altitude, and spring and summer hail regularly bends condenser fins. Photograph hail damage before repairs, because it is often an insurance claim." },
    ],
    popularServices: ["ac-installation", "ductless-mini-splits", "heat-pump-installation", "furnace-repair", "ac-repair"],
    nearby: ["aurora"],
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
    region: "denver-metro",
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
    nearby: ["denver"],
    water: "Xcel Energy supplies electricity and natural gas to most Aurora homes; some eastern areas are served by co-op electric utilities.",
    permits: "The City of Aurora's Building Division issues mechanical permits and requires contractors to hold an Aurora contractor license.",
    faqs: [
      { q: "Will insurance cover a hail-damaged AC in Aurora?", a: "Often, if the damage is from a covered storm. Photograph the unit and contact your insurer before replacing it." },
      { q: "Does Aurora require a permit for a new furnace?", a: "Yes. A licensed contractor pulls the mechanical permit." },
    ],
    updated: U,
  },
  {
    slug: "las-vegas",
    name: "Las Vegas",
    stateSlug: "nevada",
    county: "Clark",
    region: "las-vegas-valley",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["89101", "89102", "89103", "89104", "89107", "89108", "89110", "89113", "89117", "89118", "89119", "89120", "89121", "89122", "89123", "89128", "89129", "89130", "89131", "89134", "89135", "89138", "89139", "89141", "89142", "89143", "89144", "89145", "89146", "89147", "89148", "89149", "89156", "89166", "89178", "89183"],
    areas: ["Summerlin", "Spring Valley", "Enterprise", "Paradise", "Centennial Hills", "Mountains Edge", "Downtown", "Sunrise Manor", "Whitney Ranch border"],
    intro:
      "Las Vegas air conditioners work harder than almost anywhere in the country. Summer highs regularly pass 105°F and nights often stay above 85°F, so systems can run around the clock for months. Most homes in the valley were built after 1980, from stucco ranches near downtown to master-planned Summerlin and Mountains Edge, and nearly all rely on central air with attic ductwork.",
    housingNotes:
      "Homes near downtown and in older east-valley neighborhoods date from the 1950s through the 1970s and often have rooftop package units or older split systems. Summerlin, Centennial Hills, Enterprise and Mountains Edge are mostly two-story homes from the 1990s onward, frequently with two systems: one for each floor, with the upstairs air handler in a very hot attic.",
    localIssues: [
      { title: "Heat-related part failures", body: "Capacitors, contactors and condenser fan motors fail far more often in extreme heat. Testing these parts in spring, before temperatures climb, prevents many mid-July breakdowns." },
      { title: "Attic temperatures and ductwork", body: "Attics can exceed 140°F in summer. Leaky or poorly insulated ducts lose much of their cooling before air reaches the rooms, which is why upstairs bedrooms often stay warm. Sealing and insulating attic ducts is one of the most effective upgrades." },
      { title: "Dust and filters", body: "Desert dust and wind storms clog filters and coils quickly. Monthly filter checks in summer and an annual coil cleaning keep systems running efficiently." },
    ],
    popularServices: ["ac-repair", "ac-tune-up", "duct-sealing", "ac-installation", "zoning-systems"],
    nearby: ["henderson"],
    water: "NV Energy supplies electricity and Southwest Gas supplies natural gas to most homes in the valley.",
    permits: "The City of Las Vegas issues permits within city limits, while many valley addresses, including Paradise, Spring Valley and Enterprise, are unincorporated and permitted by Clark County. Contractors are licensed by the Nevada State Contractors Board.",
    faqs: [
      { q: "Is my Las Vegas address in the city or the county?", a: "Many Las Vegas mailing addresses are in unincorporated Clark County. The contractor confirms which building department issues the permit." },
      { q: "How do I check a Nevada HVAC contractor's license?", a: "Search the Nevada State Contractors Board website by name or license number." },
    ],
    updated: U,
  },
  {
    slug: "henderson",
    name: "Henderson",
    stateSlug: "nevada",
    county: "Clark",
    region: "las-vegas-valley",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["89002", "89011", "89012", "89014", "89015", "89044", "89052", "89074"],
    areas: ["Green Valley", "Anthem", "Seven Hills", "MacDonald Highlands", "Inspirada", "Cadence", "Old Henderson"],
    intro:
      "Henderson grew from a wartime industrial town into one of Nevada's largest cities, and most homes were built from the 1980s onward in master-planned communities like Green Valley, Anthem, Seven Hills, Inspirada and Cadence. Like the rest of the valley, its air conditioners face extreme summer heat, but Henderson's hillside neighborhoods add their own considerations.",
    housingNotes:
      "Green Valley homes from the 1980s and 1990s are now on their second or third air conditioner, often still using original ductwork. Anthem and MacDonald Highlands sit higher on the slopes of the McCullough Range, with larger homes, multiple systems and more exposure to wind. Newer communities like Inspirada and Cadence have tighter, energy-code construction.",
    localIssues: [
      { title: "Original ductwork in Green Valley", body: "Many older Green Valley homes have replaced equipment several times on the original ducts. Leaks, undersized returns and crushed flex duct in the attic limit how well a new system performs, so a duct inspection is worth including in any replacement quote." },
      { title: "Hillside wind and dust", body: "Homes in Anthem and the foothills catch stronger winds that carry dust into outdoor coils and filters. More frequent filter changes and coil cleaning help keep efficiency up." },
      { title: "Multiple-system homes", body: "Larger homes often run two or three systems. Keeping controls and refrigerant types compatible, and replacing systems on a planned schedule, avoids mismatched equipment." },
    ],
    popularServices: ["ac-repair", "ac-installation", "duct-sealing", "ac-tune-up", "smart-thermostats"],
    nearby: ["las-vegas"],
    water: "NV Energy supplies electricity and Southwest Gas supplies natural gas.",
    permits: "The City of Henderson's building department issues mechanical permits, and contractors are licensed by the Nevada State Contractors Board.",
    faqs: [
      { q: "How often should Henderson homeowners service their AC?", a: "At least once a year in early spring, with monthly filter checks during summer." },
      { q: "Do I need a permit to replace my AC in Henderson?", a: "Yes. The licensed contractor pulls the city permit." },
    ],
    updated: U,
  },
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    stateSlug: "utah",
    county: "Salt Lake",
    region: "salt-lake-valley",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["84101", "84102", "84103", "84104", "84105", "84106", "84108", "84109", "84111", "84115", "84116"],
    areas: ["The Avenues", "Sugar House", "Liberty Wells", "Federal Heights", "Rose Park", "Glendale", "East Bench", "Capitol Hill"],
    intro:
      "Salt Lake City sits at about 4,300 feet in a valley with hot, dry summers, cold winters and winter inversions that trap pollution near the ground. Its housing includes Victorian and early twentieth-century homes in the Avenues and Capitol Hill, bungalows in Sugar House and Liberty Wells, and postwar homes on the west side and the East Bench.",
    housingNotes:
      "Older homes in the Avenues and Federal Heights often have boilers or older furnaces with limited ductwork, and many were cooled by evaporative coolers. Sugar House bungalows commonly have basement furnaces and small returns. Postwar homes in Rose Park and Glendale often still use swamp coolers, while newer infill homes have central air and heat pumps.",
    localIssues: [
      { title: "Winter inversions", body: "During inversions, polluted air settles in the valley for days. High-MERV media filters and keeping the home sealed help indoor air quality. See [air filtration](/hvac-services/air-filtration/)." },
      { title: "Swamp coolers versus central air", body: "Evaporative coolers work well on dry summer days and use little power, but they bring in outside air during smoke events and need spring start-up and fall winterizing. Many homeowners are switching to central air or heat pumps." },
      { title: "Dry winter air", body: "Heated winter air gets very dry, causing static and cracked wood. A furnace-mounted humidifier set to around 30 to 35 percent improves comfort." },
    ],
    popularServices: ["furnace-repair", "ac-installation", "air-filtration", "whole-house-humidifiers", "heat-pump-installation"],
    nearby: ["sandy"],
    water: "Rocky Mountain Power supplies electricity and Enbridge Gas Utah (formerly Dominion Energy Utah) supplies natural gas to most homes.",
    permits: "Salt Lake City's building services division issues mechanical permits, and contractors are licensed through the Utah Division of Professional Licensing.",
    faqs: [
      { q: "How can I improve indoor air during Salt Lake inversions?", a: "Use a MERV 11–13 media filter, run the furnace fan and keep windows closed." },
      { q: "Should I replace my swamp cooler with central air?", a: "If you want reliable cooling during smoke events or humid spells, yes. Coolers still work well and cheaply on dry days." },
    ],
    updated: U,
  },
  {
    slug: "sandy",
    name: "Sandy",
    stateSlug: "utah",
    county: "Salt Lake",
    region: "salt-lake-valley",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["84070", "84090", "84091", "84092", "84093", "84094"],
    areas: ["Historic Sandy", "Alta Canyon", "Dimple Dell", "Granite", "Willow Creek", "Bell Canyon"],
    intro:
      "Sandy sits on the southeast side of the Salt Lake Valley at the mouths of Little Cottonwood and Big Cottonwood canyons, climbing toward the Wasatch Range. Most homes were built from the 1970s through the 1990s, with larger homes on the benches near the mountains, so furnace and AC replacements make up a large share of HVAC work.",
    housingNotes:
      "Many Sandy homes are two-story or rambler-style houses with finished basements and a single furnace and air conditioner serving every level. Bench homes near Alta Canyon, Granite and Bell Canyon sit higher, see colder winter nights and catch canyon winds.",
    localIssues: [
      { title: "Finished basements and uneven floors", body: "Basements finished after construction often have too few supplies and returns, leaving them cold in winter while upper floors overheat in summer. Duct balancing, added returns or zoning even out the floors." },
      { title: "Canyon winds and colder bench homes", body: "Homes near the canyon mouths face strong downslope winds and colder nights than the valley floor, which makes furnace sizing, sealed ducts and tight windows more important." },
      { title: "1980s and 1990s systems", body: "Many original furnaces and air conditioners from the area's main growth period are at or past the end of their service life, and some still use R-22 refrigerant." },
    ],
    popularServices: ["furnace-installation", "ac-installation", "zoning-systems", "furnace-repair", "whole-house-humidifiers"],
    nearby: ["salt-lake-city"],
    water: "Rocky Mountain Power supplies electricity and Enbridge Gas Utah supplies natural gas.",
    permits: "Sandy City's building division issues mechanical permits, and contractors are licensed through the Utah Division of Professional Licensing.",
    faqs: [
      { q: "Why is my Sandy basement cold while upstairs is hot?", a: "Finished basements often lack enough supply and return air. Balancing, added returns or zoning usually help." },
      { q: "Is it time to replace my 1990s furnace?", a: "If it's over 20 years old or needs a major repair, compare replacement costs, especially if the AC is also aging." },
    ],
    updated: U,
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    stateSlug: "arizona",
    county: "Maricopa",
    region: "phoenix-metro",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["85003", "85004", "85006", "85008", "85013", "85014", "85015", "85016", "85018", "85020", "85021", "85022", "85023", "85024", "85028", "85029", "85032", "85033", "85035", "85041", "85042", "85044", "85048", "85050", "85054", "85083", "85085", "85086"],
    areas: ["Arcadia", "Willo & Encanto", "Maryvale", "Moon Valley", "Deer Valley", "Desert Ridge", "Ahwatukee", "Laveen", "South Mountain"],
    intro:
      "Phoenix has one of the longest and hottest cooling seasons in the country, with summer highs regularly above 110°F and warm nights that give systems little rest. Housing ranges from 1920s bungalows in the Willo and Encanto districts and postwar ranches in Maryvale to 1980s and newer homes in Ahwatukee, Deer Valley and Desert Ridge, nearly all on slab foundations with ductwork in the attic.",
    housingNotes:
      "Older central Phoenix homes often have rooftop package units or air handlers in small closets, with ducts in very hot attics. Postwar Maryvale homes were built quickly and many still have original ductwork. North Phoenix and Ahwatukee homes from the 1980s onward usually have split systems and are now on their second or third air conditioner.",
    localIssues: [
      { title: "Extreme heat and part failures", body: "Capacitors, contactors and fan motors fail more often in Phoenix summers, and a weak part can take out a compressor. Spring maintenance before the first 100-degree day prevents many breakdowns." },
      { title: "Rooftop units and attic ducts", body: "Rooftop package units and attic ducts are exposed to extreme heat. Sealing and insulating ducts and shading or maintaining rooftop units improve efficiency noticeably." },
      { title: "Monsoon dust", body: "Summer monsoon storms and haboobs load filters and coils with dust. Changing filters after storms and cleaning coils each year keeps systems running efficiently." },
    ],
    popularServices: ["ac-repair", "ac-tune-up", "ac-installation", "duct-sealing", "heat-pump-repair"],
    nearby: ["mesa"],
    water: "Arizona Public Service (APS) and Salt River Project (SRP) supply electricity in different parts of Phoenix, and Southwest Gas supplies natural gas.",
    permits: "The City of Phoenix Planning and Development Department issues mechanical permits, and contractors are licensed by the Arizona Registrar of Contractors.",
    faqs: [
      { q: "Is APS or SRP my electric utility in Phoenix?", a: "It depends on your address. Both serve parts of the city; check your electric bill." },
      { q: "How do I check a Phoenix HVAC contractor's license?", a: "Search the Arizona Registrar of Contractors website by name or license number." },
    ],
    updated: U,
  },
  {
    slug: "mesa",
    name: "Mesa",
    stateSlug: "arizona",
    county: "Maricopa",
    region: "phoenix-metro",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["85201", "85202", "85203", "85204", "85205", "85206", "85207", "85208", "85209", "85210", "85212", "85213", "85215"],
    areas: ["Downtown Mesa", "Dobson Ranch", "Red Mountain", "Las Sendas", "Eastmark", "Superstition Springs", "Lehi"],
    intro:
      "Mesa is the largest city in the East Valley, with older neighborhoods near downtown, large 1970s and 1980s subdivisions like Dobson Ranch, and newer communities such as Eastmark and Las Sendas. Its many retirement and seasonal communities mean some homes sit empty for months while still needing their air conditioning managed through the summer heat.",
    housingNotes:
      "Many Mesa homes from the 1970s and 1980s are single-story with attic ductwork and have replaced their air conditioners several times. Manufactured-home and RV communities in east Mesa use packaged units or heat pumps. Newer homes in Eastmark and the far east side have modern, efficient systems.",
    localIssues: [
      { title: "Seasonal homes and summer settings", body: "Winter residents who leave for the summer often set thermostats around 85°F and use a smart thermostat or a neighbor to check on the system, because a failed air conditioner in an empty house can lead to heat damage and humidity problems." },
      { title: "Packaged units in manufactured homes", body: "Manufactured homes often use packaged AC or heat pump units with ducts under the floor. Duct connections and the crossover duct are common sources of leaks." },
      { title: "Aging 1980s systems", body: "Homes from the 1980s growth boom are often on older equipment and original ductwork, making duct inspection worthwhile at replacement time." },
    ],
    popularServices: ["ac-repair", "ac-installation", "smart-thermostats", "duct-sealing", "heat-pump-installation"],
    nearby: ["phoenix"],
    water: "Salt River Project (SRP) supplies electricity to most Mesa homes, the City of Mesa provides electricity and natural gas in parts of the city, and Southwest Gas serves other areas.",
    permits: "The City of Mesa's development services department issues mechanical permits, and contractors are licensed by the Arizona Registrar of Contractors.",
    faqs: [
      { q: "What thermostat setting should I use while away for the summer?", a: "Many owners use around 85°F with a smart thermostat they can monitor remotely, and arrange regular checks." },
      { q: "Who supplies natural gas in Mesa?", a: "It depends on the neighborhood: the City of Mesa serves some areas and Southwest Gas others." },
    ],
    updated: U,
  },
];
