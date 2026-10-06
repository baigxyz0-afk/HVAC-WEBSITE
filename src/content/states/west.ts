import type { State } from "../types";

// State hubs: West.
const U = "2026-10-06";

export const west: State[] = [
  {
    slug: "alaska", name: "Alaska", abbr: "AK", status: "PUBLISHED", region: "West", updated: U,
    intro: "Alaska's HVAC needs are almost entirely about heating. Long, dark, cold winters in Anchorage, Fairbanks and the Interior make reliable heat, safe venting and freeze protection essential, and air conditioning is rarely needed outside brief summer warm spells.",
    details: [
      { heading: "Extreme cold in the Interior", body: "Fairbanks and the Interior see deep subzero cold, where a heating failure can freeze a house within hours. Backup heat and fast service are critical." },
      { heading: "Fuel varies by place", body: "Anchorage-area homes often use natural gas, while many other communities rely on heating oil, propane or wood. Fuel availability drives equipment choices." },
      { heading: "Ventilation and moisture", body: "Tight, well-insulated homes need ventilation, often with heat recovery, to control moisture and indoor air quality during long closed-up winters." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 7–8" },
      { term: "Common heating", detail: "Gas, oil, propane, wood" },
      { term: "Cooling", detail: "Rarely needed" },
      { term: "Watch for", detail: "Extreme cold, frozen vents" },
    ],
    metros: ["Anchorage", "Fairbanks", "Juneau", "Wasilla"],
    focus: [
      { service: "furnace-repair", why: "Heating failures are emergencies in Alaskan winters." },
      { service: "emergency-hvac-repair", why: "Freeze protection depends on fast response." },
      { service: "furnace-tune-up", why: "Venting and combustion checks matter in sealed homes." },
    ],
    faqs: [
      { q: "What should I do if my heat fails in an Alaska winter?", a: "Call for service, use safe backup heat, and protect plumbing by opening cabinets and letting faucets drip." },
      { q: "Do Alaska homes need air conditioning?", a: "Rarely. Ventilation and moisture control are usually more important." },
    ],
  },
  {
    slug: "arizona", name: "Arizona", abbr: "AZ", status: "PUBLISHED", region: "West", updated: U,
    intro: "Arizona's desert climate makes air conditioning a necessity for much of the year in Phoenix, Tucson and Yuma, while Flagstaff and the high country need real winter heat. Extreme heat, dust and monsoon storms shape how HVAC systems are maintained and replaced.",
    details: [
      { heading: "Extreme summer heat", body: "Phoenix-area summers push air conditioners to their limits. Capacitors, contactors and fan motors fail more often, and attic ducts lose cooling to superheated attics." },
      { heading: "Dust and monsoons", body: "Dust storms and monsoon debris clog filters and coils. Frequent filter changes and coil cleaning keep systems running efficiently." },
      { heading: "High-country winters", body: "Flagstaff and Prescott have cold, snowy winters where gas furnaces or heat pumps with backup heat are needed. Arizona licenses contractors through the Registrar of Contractors." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 2–5" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Very long, extreme season" },
      { term: "Watch for", detail: "Heat-related part failures, dust" },
    ],
    metros: ["Phoenix", "Tucson", "Mesa", "Scottsdale", "Chandler"],
    focus: [
      { service: "ac-repair", why: "Extreme heat makes AC failures urgent." },
      { service: "ac-tune-up", why: "Dust and heat demand pre-summer maintenance." },
      { service: "duct-sealing", why: "Hot attics waste cooling through leaky ducts." },
    ],
    faqs: [
      { q: "How do I check an Arizona HVAC contractor's license?", a: "Search the Arizona Registrar of Contractors website by name or license number." },
      { q: "How often should I change filters in Arizona?", a: "Every month during peak summer and dusty periods." },
    ],
  },
  {
    slug: "california", name: "California", abbr: "CA", status: "PUBLISHED", region: "West", updated: U,
    intro: "California's climates range from mild coastal cities to hot inland valleys and deserts and cold mountain towns. HVAC needs differ sharply between San Francisco, Los Angeles, Sacramento, the Central Valley and the Inland Empire, and state energy rules and incentives strongly favor efficient equipment.",
    details: [
      { heading: "Coast versus inland", body: "Coastal homes may need little cooling, while inland valleys and deserts see extreme summer heat. Correct sizing depends heavily on where in the state the home is." },
      { heading: "Wildfire smoke", body: "Smoke events make sealed homes and high-MERV filtration important. Systems that bring in outside air may need to be closed off during smoke." },
      { heading: "Energy rules and permits", body: "California's energy code (Title 24) affects equipment replacement, often requiring permits and duct testing. Contractors are licensed by the state Contractors State License Board." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 2–6 (state uses its own zones)" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps" },
      { term: "Cooling", detail: "Mild coast, extreme inland" },
      { term: "Watch for", detail: "Wildfire smoke, Title 24 requirements" },
    ],
    metros: ["Los Angeles", "San Diego", "San Jose", "Sacramento", "San Francisco"],
    focus: [
      { service: "heat-pump-installation", why: "State programs and rules favor heat pumps." },
      { service: "air-filtration", why: "Wildfire smoke affects indoor air." },
      { service: "duct-sealing", why: "Duct testing is often required at replacement." },
    ],
    faqs: [
      { q: "Do I need a permit to replace my HVAC in California?", a: "Usually yes. Title 24 often requires a permit and duct leakage testing." },
      { q: "How do I protect indoor air during wildfire smoke?", a: "Keep windows closed, run the fan with a high-MERV filter and avoid bringing in outside air." },
    ],
  },
  {
    slug: "colorado", name: "Colorado", abbr: "CO", status: "PUBLISHED", region: "West", updated: U,
    intro: "Colorado's high-altitude climate brings dry air, intense sun, hail and big temperature swings. Denver, Colorado Springs and the Front Range need both heating and cooling, and mountain towns need serious winter heat.",
    details: [
      { heading: "Altitude", body: "Gas furnaces must be set up for altitude to burn correctly and safely, and installers follow manufacturer high-altitude instructions." },
      { heading: "Hail and dry air", body: "Front Range hail damages condensers, and very dry winter air makes humidifiers common." },
      { heading: "Evaporative coolers", body: "Dry summers let swamp coolers work well, though many homes now switch to central AC or heat pumps for reliability during smoke events." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–7" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps" },
      { term: "Cooling", detail: "Hot, dry summers" },
      { term: "Watch for", detail: "Altitude setup, hail, dry air" },
    ],
    metros: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Boulder"],
    focus: [
      { service: "furnace-installation", why: "High-altitude setup matters for safety." },
      { service: "whole-house-humidifiers", why: "Dry winter air causes discomfort." },
      { service: "heat-pump-installation", why: "Incentives have favored heat pumps." },
    ],
    faqs: [
      { q: "Does altitude affect my furnace?", a: "Yes. Gas appliances are adjusted for altitude to burn cleanly." },
      { q: "Is a swamp cooler or AC better in Colorado?", a: "Swamp coolers are cheaper to run in dry weather; AC or heat pumps cool reliably in humid weather and smoke." },
    ],
  },
  {
    slug: "hawaii", name: "Hawaii", abbr: "HI", status: "PUBLISHED", region: "West", updated: U,
    intro: "Hawaii's warm, humid tropical climate means heating is rarely needed, and HVAC work centers on cooling, dehumidification and ventilation. Salt air and high electricity costs make efficient, corrosion-resistant equipment especially valuable in Honolulu and across the islands.",
    details: [
      { heading: "Cooling and humidity", body: "Many homes were built without central air and rely on trade winds. Ductless mini-splits are the most common way to add cooling efficiently." },
      { heading: "Salt air", body: "Corrosion is a constant issue near the ocean. Coastal-rated coils and regular rinsing extend equipment life." },
      { heading: "Energy costs", body: "High electricity prices make efficient inverter equipment and good insulation especially worthwhile." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 1" },
      { term: "Common heating", detail: "Rarely needed" },
      { term: "Cooling", detail: "Year-round, humid" },
      { term: "Watch for", detail: "Salt-air corrosion, energy costs" },
    ],
    metros: ["Honolulu", "Kailua", "Hilo", "Kahului", "Kapolei"],
    focus: [
      { service: "ductless-mini-splits", why: "The common way to add efficient cooling." },
      { service: "ac-tune-up", why: "Salt air and humidity call for regular service." },
      { service: "air-filtration", why: "Humidity and mold affect indoor air." },
    ],
    faqs: [
      { q: "What's the most efficient way to cool a Hawaii home?", a: "Inverter-driven ductless mini-splits are usually the most efficient option." },
      { q: "How do I reduce AC corrosion near the ocean?", a: "Choose coastal-rated equipment and rinse coils periodically." },
    ],
  },
  {
    slug: "idaho", name: "Idaho", abbr: "ID", status: "PUBLISHED", region: "West", updated: U,
    intro: "Idaho has hot, dry summers in the Treasure Valley and cold winters statewide, colder in the mountains and east. Boise, Nampa and Meridian homes typically use gas furnaces with central air, and the region's fast growth means many newer systems.",
    details: [
      { heading: "Treasure Valley growth", body: "Rapid growth around Boise, Meridian and Nampa has added many newer homes with attic ductwork and builder-grade equipment." },
      { heading: "Winter inversions and smoke", body: "Valley inversions and summer wildfire smoke make filtration and ventilation important." },
      { heading: "Eastern and mountain winters", body: "Idaho Falls, Pocatello and mountain towns see cold winters where reliable furnaces and backup heat are critical." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 5–6" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps" },
      { term: "Cooling", detail: "Hot, dry summers" },
      { term: "Watch for", detail: "Wildfire smoke, inversions" },
    ],
    metros: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"],
    focus: [
      { service: "air-filtration", why: "Smoke and inversions affect indoor air." },
      { service: "ac-installation", why: "Hot summers in a growing region." },
      { service: "furnace-repair", why: "Cold winters make heat critical." },
    ],
    faqs: [
      { q: "How do I keep smoke out of my Idaho home?", a: "Close windows, use a high-MERV filter and run the fan." },
      { q: "Do heat pumps work in Boise?", a: "Yes, especially cold-climate models or dual-fuel systems." },
    ],
  },
  {
    slug: "montana", name: "Montana", abbr: "MT", status: "PUBLISHED", region: "West", updated: U,
    intro: "Montana's cold winters, mountain terrain and dry air make heating the central HVAC concern in Billings, Missoula, Bozeman and beyond. Summers are generally short and dry, though wildfire smoke has made filtration and cooling more common.",
    details: [
      { heading: "Cold and wind", body: "Arctic air and chinook swings stress heating systems. Reliable furnaces and backup heat are essential." },
      { heading: "Wildfire smoke", body: "Summer smoke makes sealed homes, high-MERV filters and cooling without outside air more valuable." },
      { heading: "Rural fuels", body: "Many rural homes use propane or electric heat, where heat pumps with backup can lower costs." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 6" },
      { term: "Common heating", detail: "Gas furnaces, propane" },
      { term: "Cooling", detail: "Short, dry summers" },
      { term: "Watch for", detail: "Extreme cold, wildfire smoke" },
    ],
    metros: ["Billings", "Missoula", "Bozeman", "Great Falls", "Helena"],
    focus: [
      { service: "furnace-repair", why: "Winter cold makes heat critical." },
      { service: "air-filtration", why: "Wildfire smoke affects indoor air." },
      { service: "heat-pump-installation", why: "Cuts costs in propane homes." },
    ],
    faqs: [
      { q: "Do I need AC in Montana?", a: "Many homes manage without it, but smoke events have made sealed cooling more common." },
      { q: "Can heat pumps handle Montana winters?", a: "Cold-climate models with backup heat can." },
    ],
  },
  {
    slug: "nevada", name: "Nevada", abbr: "NV", status: "PUBLISHED", region: "West", updated: U,
    intro: "Nevada's desert climate makes air conditioning essential in Las Vegas, Henderson and North Las Vegas, where summers are extremely hot and dry. Reno and northern Nevada have colder winters that require real heating.",
    details: [
      { heading: "Las Vegas heat", body: "Long stretches of extreme heat push air conditioners hard. Capacitors, motors and refrigerant leaks are common summer failures." },
      { heading: "Dust and filters", body: "Desert dust clogs filters and coils quickly, so monthly filter checks and annual coil cleaning matter." },
      { heading: "Northern Nevada winters", body: "Reno and Carson City see cold winters and wildfire smoke, where furnaces and filtration are important." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 3–5" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Extreme in the south" },
      { term: "Watch for", detail: "Heat-related failures, dust" },
    ],
    metros: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"],
    focus: [
      { service: "ac-repair", why: "Extreme heat makes AC failures urgent." },
      { service: "ac-tune-up", why: "Dust and heat call for spring service." },
      { service: "furnace-repair", why: "Northern Nevada winters require heat." },
    ],
    faqs: [
      { q: "How long do AC units last in Las Vegas?", a: "Often 10 to 15 years, shorter without maintenance due to the heat." },
      { q: "How often should I change filters in Nevada?", a: "Monthly during summer and dusty periods." },
    ],
  },
  {
    slug: "new-mexico", name: "New Mexico", abbr: "NM", status: "PUBLISHED", region: "West", updated: U,
    intro: "New Mexico's high, dry climate brings hot summer days, cool nights and cold winters at elevation. Albuquerque, Santa Fe and Las Cruces homes use gas furnaces, heat pumps and, in many older homes, evaporative coolers.",
    details: [
      { heading: "Evaporative cooling", body: "Dry air makes swamp coolers effective and common, especially in older homes. They need spring start-up and fall winterizing." },
      { heading: "Altitude and winter", body: "Santa Fe and northern towns sit high and see cold winters, where furnaces must be set up for altitude." },
      { heading: "Adobe and older homes", body: "Adobe and pueblo-style homes often lack ductwork, making mini-splits a good fit." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 3–5" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps" },
      { term: "Cooling", detail: "Hot, dry days" },
      { term: "Watch for", detail: "Swamp cooler upkeep, altitude" },
    ],
    metros: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"],
    focus: [
      { service: "ductless-mini-splits", why: "Fits adobe and ductless homes." },
      { service: "furnace-installation", why: "Altitude setup matters." },
      { service: "ac-installation", why: "Many homes are switching from swamp coolers." },
    ],
    faqs: [
      { q: "When should I winterize my swamp cooler?", a: "Before the first hard freeze, usually in October." },
      { q: "Can I add AC to an adobe home?", a: "Yes. Mini-splits avoid cutting into thick walls for ductwork." },
    ],
  },
  {
    slug: "oregon", name: "Oregon", abbr: "OR", status: "PUBLISHED", region: "West", updated: U,
    intro: "Oregon's climates range from the mild, damp Willamette Valley around Portland, Salem and Eugene to hot, dry summers and cold winters east of the Cascades in Bend and Medford. Heat pumps are common, and recent summer heat waves have pushed many homes to add cooling.",
    details: [
      { heading: "Heat pumps west of the Cascades", body: "Mild, wet winters make heat pumps efficient for heating, and they add cooling for summer heat waves." },
      { heading: "Wildfire smoke", body: "Smoke events have made high-MERV filtration and sealed cooling important statewide." },
      { heading: "Central and southern Oregon", body: "Bend and Medford see hot summers and colder winters, where heat pumps need backup heat." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Growing need during heat waves" },
      { term: "Watch for", detail: "Wildfire smoke" },
    ],
    metros: ["Portland", "Salem", "Eugene", "Bend", "Medford"],
    focus: [
      { service: "heat-pump-installation", why: "Efficient heating plus summer cooling." },
      { service: "air-filtration", why: "Wildfire smoke affects indoor air." },
      { service: "ductless-mini-splits", why: "Adds cooling to homes without ducts." },
    ],
    faqs: [
      { q: "Do I need AC in Portland?", a: "Summer heat waves have made cooling much more common. A heat pump provides both heat and AC." },
      { q: "How do I keep wildfire smoke out?", a: "Keep windows closed and run the fan with a high-MERV filter." },
    ],
  },
  {
    slug: "utah", name: "Utah", abbr: "UT", status: "PUBLISHED", region: "West", updated: U,
    intro: "Utah's high-desert climate brings hot, dry summers, cold winters and winter inversions along the Wasatch Front. Salt Lake City, Provo and Ogden homes mostly use gas furnaces with central air, and many older homes still use evaporative coolers.",
    details: [
      { heading: "Winter inversions", body: "Inversions trap pollution in the valleys. Good filtration helps indoor air quality during these periods." },
      { heading: "Dry air", body: "Low humidity makes evaporative coolers effective in summer and humidifiers common in winter." },
      { heading: "Growth and newer homes", body: "Fast-growing suburbs have many newer two-story homes where zoning and duct balancing matter." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 3–6" },
      { term: "Common heating", detail: "Gas furnaces" },
      { term: "Cooling", detail: "Hot, dry summers" },
      { term: "Watch for", detail: "Inversions, dry air" },
    ],
    metros: ["Salt Lake City", "Provo", "Ogden", "West Valley City", "St. George"],
    focus: [
      { service: "air-filtration", why: "Inversions affect indoor air quality." },
      { service: "furnace-installation", why: "Gas furnaces carry winter heating." },
      { service: "ac-installation", why: "Hot summers and growing suburbs." },
    ],
    faqs: [
      { q: "Should I replace my swamp cooler with AC in Utah?", a: "If you want reliable cooling during smoke or humid spells, yes. Coolers still work well on dry days." },
      { q: "How do I improve indoor air during inversions?", a: "Use a high-MERV filter and keep the home sealed." },
    ],
  },
  {
    slug: "washington", name: "Washington", abbr: "WA", status: "PUBLISHED", region: "West", updated: U,
    intro: "Washington's climate splits at the Cascades: mild, wet winters and dry summers around Seattle, Tacoma and Olympia, and hot summers with cold winters in Spokane and the east. Heat pumps are common in the west, and recent heat waves have made cooling far more common.",
    details: [
      { heading: "Western Washington", body: "Many homes were built without AC. Heat pumps and ductless mini-splits add efficient heating and cooling." },
      { heading: "Eastern Washington", body: "Spokane and the Tri-Cities see hot summers and cold winters, where gas furnaces or dual-fuel systems are common." },
      { heading: "Smoke and filtration", body: "Wildfire smoke affects both sides of the state, making filtration important." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–6" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces, electric" },
      { term: "Cooling", detail: "Growing need" },
      { term: "Watch for", detail: "Wildfire smoke, homes without AC" },
    ],
    metros: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"],
    focus: [
      { service: "heat-pump-installation", why: "Efficient heat and new cooling for western homes." },
      { service: "ductless-mini-splits", why: "Adds cooling where there's no ductwork." },
      { service: "air-filtration", why: "Smoke affects the whole state." },
    ],
    faqs: [
      { q: "Should I add AC to my Seattle home?", a: "Recent heat waves have made cooling much more common. A heat pump provides both heating and AC." },
      { q: "Do heat pumps work in Spokane?", a: "Cold-climate or dual-fuel systems handle eastern Washington winters." },
    ],
  },
  {
    slug: "wyoming", name: "Wyoming", abbr: "WY", status: "PUBLISHED", region: "West", updated: U,
    intro: "Wyoming has cold, windy winters, high elevations and short, dry summers. Heating dominates HVAC needs in Cheyenne, Casper, Laramie and the mountain towns, and many rural homes rely on propane.",
    details: [
      { heading: "Wind and cold", body: "Strong winds and cold temperatures make reliable furnaces and sealed ducts essential." },
      { heading: "Altitude", body: "High elevations mean gas furnaces must be set up for altitude to burn safely." },
      { heading: "Rural fuels", body: "Propane and electric heat are common in rural areas, where heat pumps with backup can cut costs." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 5–7" },
      { term: "Common heating", detail: "Gas and propane furnaces" },
      { term: "Cooling", detail: "Short summers" },
      { term: "Watch for", detail: "Wind, altitude setup" },
    ],
    metros: ["Cheyenne", "Casper", "Laramie", "Gillette", "Sheridan"],
    focus: [
      { service: "furnace-repair", why: "Cold, windy winters make heat critical." },
      { service: "furnace-tune-up", why: "Altitude and venting need checks." },
      { service: "heat-pump-installation", why: "Cuts propane costs with backup heat." },
    ],
    faqs: [
      { q: "Does altitude affect my furnace in Wyoming?", a: "Yes. Furnaces are set up for altitude to burn cleanly." },
      { q: "Do I need AC in Wyoming?", a: "Many homes manage without it, though summer heat waves have increased demand." },
    ],
  },
];
