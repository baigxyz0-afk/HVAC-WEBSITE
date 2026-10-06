import type { State } from "../types";

// State hubs: Northeast and Midwest. Climate and fuel facts are general, state-level and
// non-numeric where data varies; IECC zones are approximate ranges.
const U = "2026-10-06";

export const northeastMidwest: State[] = [
  {
    slug: "connecticut", name: "Connecticut", abbr: "CT", status: "PUBLISHED", region: "Northeast", updated: U,
    intro: "Connecticut homes need heating that can handle long, damp New England winters and cooling for humid summer stretches along the shoreline and the Connecticut River valley. Much of the housing stock is older, and many homes still heat with oil or gas boilers rather than forced air, which shapes almost every HVAC decision in the state.",
    details: [
      { heading: "Heating in older homes", body: "Colonial, Cape and early twentieth-century homes across Hartford, New Haven and Fairfield counties often use hot-water or steam radiators. Adding central air to these houses usually means ductless mini-splits or small-duct systems, because there is no ductwork to reuse." },
      { heading: "Moving off heating oil", body: "Heating oil remains common, and many owners are replacing aging oil boilers with gas equipment where a line is available or with cold-climate heat pumps. Keeping the existing boiler as backup for the coldest nights is a frequent first step." },
      { heading: "Shoreline humidity and storms", body: "Coastal towns face humid summers and nor'easters that can knock out power. Dehumidification, elevated outdoor units in flood-prone areas and a plan for no-heat outages matter more here than inland." },
    ],
    glance: [
      { term: "Climate zone", detail: "Mostly IECC zone 5" },
      { term: "Common heating", detail: "Oil and gas boilers, furnaces, growing heat pump use" },
      { term: "Cooling", detail: "Moderate season, humid on the coast" },
      { term: "Watch for", detail: "Boilers in older homes, nor'easter outages" },
    ],
    metros: ["Hartford", "New Haven", "Bridgeport", "Stamford", "Waterbury"],
    focus: [
      { service: "ductless-mini-splits", why: "Adds cooling and efficient heat to radiator-heated homes without ductwork." },
      { service: "heat-pump-installation", why: "A common path off heating oil, often keeping the boiler as backup." },
      { service: "furnace-tune-up", why: "Fall safety checks before the long heating season." },
    ],
    faqs: [
      { q: "Can I add central air to a Connecticut house with radiators?", a: "Yes. Ductless mini-splits or high-velocity small-duct systems add cooling without tearing into plaster walls." },
      { q: "Is a heat pump practical in Connecticut winters?", a: "Cold-climate heat pumps handle most Connecticut winter weather, and many homeowners keep an existing boiler as backup for the coldest nights." },
    ],
  },
  {
    slug: "maine", name: "Maine", abbr: "ME", status: "PUBLISHED", region: "Northeast", updated: U,
    intro: "Maine has some of the longest heating seasons in the lower 48, and heating, not cooling, drives most HVAC work here. The state has historically relied heavily on heating oil, and it has become one of the country's fastest adopters of cold-climate heat pumps, which changes what many homeowners ask for when they replace equipment.",
    details: [
      { heading: "Long, cold heating seasons", body: "Winters from Portland to Bangor and Presque Isle are long and cold, and northern Maine sees deep cold snaps. Heating systems run for most of the year, so efficiency and reliable backup heat carry real weight in replacement decisions." },
      { heading: "Heat pumps alongside oil", body: "Many Maine homes now pair ductless or ducted cold-climate heat pumps with an existing oil or propane system. The heat pump carries most of the load, and the older system covers the coldest nights and power outages." },
      { heading: "Summer cooling is growing", body: "Summers are mild by national standards, but hotter spells have made heat pumps' cooling a welcome bonus, especially in southern and coastal Maine." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 6–7" },
      { term: "Common heating", detail: "Heating oil, propane, wood, heat pumps" },
      { term: "Cooling", detail: "Short season" },
      { term: "Watch for", detail: "Frozen condensate lines, ice on outdoor units" },
    ],
    metros: ["Portland", "South Portland", "Lewiston", "Bangor", "Biddeford"],
    focus: [
      { service: "heat-pump-installation", why: "Cold-climate heat pumps are widely used alongside existing oil or propane heat." },
      { service: "ductless-mini-splits", why: "The usual way to add heat pump heat and cooling to homes without ducts." },
      { service: "furnace-repair", why: "Reliable heat matters through long winters and storms." },
    ],
    faqs: [
      { q: "Do heat pumps work in Maine winters?", a: "Cold-climate models keep heating well below zero. Most Maine homes keep a backup system for the coldest nights and outages." },
      { q: "Should I keep my oil boiler after adding a heat pump?", a: "Many homeowners do, using it as backup. A technician can set controls so the heat pump runs first." },
    ],
  },
  {
    slug: "massachusetts", name: "Massachusetts", abbr: "MA", status: "PUBLISHED", region: "Northeast", updated: U,
    intro: "Massachusetts combines dense, older housing in Boston, Worcester and Springfield with suburbs and Cape Cod homes that have very different HVAC setups. Long heating seasons, humid summers and strong state energy-efficiency programs make heat pumps, boiler replacement and duct-free cooling the most common topics.",
    details: [
      { heading: "Triple-deckers and older housing", body: "Boston-area triple-deckers, Victorians and colonials often heat with steam or hot-water boilers. Cooling usually means window units or ductless mini-splits, and each unit in a multi-family building may need its own system." },
      { heading: "Efficiency programs and heat pumps", body: "Utility-sponsored efficiency programs in the state have offered incentives for heat pumps and weatherization, so many replacements now compare a new boiler with a cold-climate heat pump. Ask the contractor about current programs before choosing." },
      { heading: "Coastal conditions", body: "Cape Cod and the South Shore deal with salt air that corrodes outdoor coils and with storms that cause outages. Coastal-rated equipment and careful placement extend equipment life there." },
    ],
    glance: [
      { term: "Climate zone", detail: "Mostly IECC zone 5" },
      { term: "Common heating", detail: "Gas and oil boilers, furnaces, heat pumps" },
      { term: "Cooling", detail: "Humid summers, often window units in older homes" },
      { term: "Watch for", detail: "Steam systems, salt-air corrosion on the coast" },
    ],
    metros: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge"],
    focus: [
      { service: "heat-pump-installation", why: "State efficiency programs have favored heat pumps at replacement time." },
      { service: "ductless-mini-splits", why: "Fits triple-deckers and older homes without ducts." },
      { service: "furnace-tune-up", why: "Annual safety checks matter for older gas equipment." },
    ],
    faqs: [
      { q: "Are there heat pump incentives in Massachusetts?", a: "Utility efficiency programs in the state have offered heat pump incentives. Programs change, so confirm current terms with the contractor or your utility." },
      { q: "Can each unit in a triple-decker have its own cooling?", a: "Yes. Ductless mini-splits are commonly installed per unit, each with its own outdoor unit or a shared multi-zone condenser." },
    ],
  },
  {
    slug: "new-hampshire", name: "New Hampshire", abbr: "NH", status: "PUBLISHED", region: "Northeast", updated: U,
    intro: "New Hampshire's heating needs dominate its HVAC market. Cold winters across the Merrimack Valley, the Lakes Region and the White Mountains mean homes rely on oil, propane, gas and increasingly heat pumps, while cooling demand is modest and concentrated in the southern tier near Nashua and Manchester.",
    details: [
      { heading: "Fuel varies by town", body: "Natural gas reaches mainly the larger southern cities. Rural and northern homes rely on heating oil, propane or wood, which affects fuel costs, equipment choices and how attractive a heat pump looks." },
      { heading: "Backup heat and outages", body: "Winter storms can cut power for days in wooded areas. Many homeowners keep a fuel-burning system or generator alongside a heat pump so the house stays above freezing." },
      { heading: "Cooling in the south", body: "Southern New Hampshire summers bring humid heat waves. Ducted central air is common in newer homes, while older homes add mini-splits." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 5–6" },
      { term: "Common heating", detail: "Oil, propane, gas, wood, heat pumps" },
      { term: "Cooling", detail: "Modest, mostly in the south" },
      { term: "Watch for", detail: "Ice and snow on outdoor units" },
    ],
    metros: ["Manchester", "Nashua", "Concord", "Portsmouth", "Dover"],
    focus: [
      { service: "heat-pump-installation", why: "Lowers dependence on oil and propane in rural homes." },
      { service: "furnace-repair", why: "No-heat calls are urgent in cold northern winters." },
      { service: "ductless-mini-splits", why: "Adds cooling to older homes in the southern tier." },
    ],
    faqs: [
      { q: "Is propane or a heat pump cheaper to heat with in New Hampshire?", a: "It depends on propane and electricity prices and your home's efficiency. A contractor can estimate both for your house." },
      { q: "How do I protect a heat pump from snow?", a: "Mount the outdoor unit on a stand above typical snow depth and keep the area clear after storms." },
    ],
  },
  {
    slug: "new-jersey", name: "New Jersey", abbr: "NJ", status: "PUBLISHED", region: "Northeast", updated: U,
    intro: "New Jersey's dense suburbs and older cities mix gas furnaces, hot-water boilers and central air in roughly equal measure. Hot, humid summers make air conditioning essential, while winters are cold enough that heating reliability matters just as much, from Bergen County to the Shore and the Delaware Valley.",
    details: [
      { heading: "Humid summers", body: "Summer humidity is often the biggest comfort complaint. Right-sized, properly charged air conditioners and good duct design control moisture better than oversized equipment." },
      { heading: "Older homes and boilers", body: "Older towns in North Jersey and around Trenton and Camden have many homes heated with radiators. Mini-splits or high-velocity systems add cooling without major demolition." },
      { heading: "Shore conditions", body: "Coastal homes face salt air, flood elevation requirements and storm outages. Outdoor units are often raised on platforms, and coastal coatings help coils last longer." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Natural gas furnaces and boilers" },
      { term: "Cooling", detail: "Hot, humid summers" },
      { term: "Watch for", detail: "Humidity control, flood-elevated equipment at the Shore" },
    ],
    metros: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"],
    focus: [
      { service: "ac-repair", why: "High summer demand and humidity strain air conditioners." },
      { service: "furnace-installation", why: "Gas furnaces are the most common heating replacement." },
      { service: "whole-house-humidifiers", why: "Balancing dry winter air and humid summers." },
    ],
    faqs: [
      { q: "Why does my New Jersey home feel clammy with the AC on?", a: "Oversized or poorly set-up systems cool quickly without removing enough moisture. A two-stage system or adjusted fan settings often help." },
      { q: "Do Shore homes need elevated HVAC equipment?", a: "Homes in flood zones often must elevate equipment under local floodplain rules. The contractor and building department confirm what applies." },
    ],
  },
  {
    slug: "new-york", name: "New York", abbr: "NY", status: "PUBLISHED", region: "Northeast", updated: U,
    intro: "New York's HVAC needs range from steam-heated apartment buildings and row houses in New York City to suburban forced-air homes on Long Island and in the Hudson Valley, and deep-winter heating demand in Buffalo, Rochester, Syracuse and the North Country. Heating reliability drives most upstate work, while cooling and building electrification dominate downstate.",
    details: [
      { heading: "City buildings and row houses", body: "Many New York City homes rely on building steam heat and window or through-wall air conditioners. Ductless mini-splits are a common upgrade for private homes and co-ops that allow them." },
      { heading: "Upstate winters", body: "Lake-effect snow and long cold seasons around Buffalo, Rochester and Syracuse make furnace reliability, venting that stays clear of snow and backup heat high priorities." },
      { heading: "Electrification and incentives", body: "State programs have encouraged heat pumps, and some local rules limit fossil-fuel equipment in new buildings. Confirm current incentives and rules for your area before choosing a system." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–6" },
      { term: "Common heating", detail: "Gas furnaces and boilers, steam, oil, heat pumps" },
      { term: "Cooling", detail: "Humid downstate summers" },
      { term: "Watch for", detail: "Lake-effect snow on vents, steam systems" },
    ],
    metros: ["New York City", "Brooklyn", "Buffalo", "Rochester", "Syracuse", "Albany"],
    focus: [
      { service: "ductless-mini-splits", why: "Fits apartments, row houses and homes without ducts." },
      { service: "furnace-repair", why: "Upstate winters make no-heat calls urgent." },
      { service: "heat-pump-installation", why: "State programs have encouraged electrification." },
    ],
    faqs: [
      { q: "Can I install a mini-split in a New York City apartment?", a: "Often yes, with building or co-op board approval. Outdoor unit placement is usually the main question." },
      { q: "How do I keep furnace vents clear in lake-effect snow?", a: "Mount sidewall vent terminations high enough to stay above drifts and check them after storms." },
    ],
  },
  {
    slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", status: "PUBLISHED", region: "Northeast", updated: U,
    intro: "Pennsylvania's HVAC market spans Philadelphia row homes, Pittsburgh's hillside neighborhoods and rural homes that heat with oil, propane or electric baseboard. Cold winters and humid summers mean most households need both dependable heat and air conditioning.",
    details: [
      { heading: "Row homes and older cities", body: "Philadelphia and Pittsburgh row homes often have boilers or older furnaces with limited ductwork. Rooftop or rear-mounted condensers and ductless systems are common ways to add cooling." },
      { heading: "Rural fuel mix", body: "Outside gas service areas, homes rely on heating oil, propane or electric heat. Heat pumps and dual-fuel systems can cut costs in all-electric or propane homes." },
      { heading: "Four-season wear", body: "Freeze-thaw cycles, humid summers and fall leaves mean outdoor coils, condensate drains and filters need regular attention." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–6" },
      { term: "Common heating", detail: "Gas furnaces and boilers, oil, propane, electric" },
      { term: "Cooling", detail: "Humid summers statewide" },
      { term: "Watch for", detail: "Limited ductwork in row homes" },
    ],
    metros: ["Philadelphia", "Pittsburgh", "Allentown", "Harrisburg", "Lancaster"],
    focus: [
      { service: "furnace-installation", why: "Gas furnace replacement is the most common heating upgrade." },
      { service: "ductless-mini-splits", why: "Fits row homes without ductwork." },
      { service: "heat-pump-installation", why: "Lowers costs in propane and electric-heat homes." },
    ],
    faqs: [
      { q: "How can I add AC to a Philadelphia row home?", a: "Ductless mini-splits or a compact central system with a rooftop condenser are common choices." },
      { q: "Is dual-fuel worth it in Pennsylvania?", a: "Often, especially in homes with propane or older furnaces. The heat pump handles mild weather and the furnace takes over in deep cold." },
    ],
  },
  {
    slug: "rhode-island", name: "Rhode Island", abbr: "RI", status: "PUBLISHED", region: "Northeast", updated: U,
    intro: "Rhode Island's compact cities and coastal towns share the HVAC concerns of southern New England: older homes with boilers, humid summers, salt air along Narragansett Bay and the ocean, and growing interest in heat pumps to replace oil heat.",
    details: [
      { heading: "Older homes in Providence and the Bay", body: "Triple-deckers and older single-family homes in Providence, Pawtucket and Cranston often heat with gas or oil boilers. Cooling is usually added with mini-splits or window units." },
      { heading: "Salt air and storms", body: "Waterfront homes face corrosion on outdoor coils and storm-related outages. Coastal-rated equipment and secure mounting extend equipment life." },
      { heading: "Replacing oil heat", body: "Homes still using oil often compare a new gas system, where available, with a cold-climate heat pump that also provides cooling." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 5" },
      { term: "Common heating", detail: "Gas and oil boilers, furnaces, heat pumps" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Coastal corrosion" },
    ],
    metros: ["Providence", "Warwick", "Cranston", "Pawtucket", "Newport"],
    focus: [
      { service: "ductless-mini-splits", why: "Common in triple-deckers and older homes." },
      { service: "heat-pump-installation", why: "A path off heating oil with built-in cooling." },
      { service: "ac-tune-up", why: "Salt air makes coil cleaning and inspection more important." },
    ],
    faqs: [
      { q: "Does salt air damage AC units in Rhode Island?", a: "It can corrode coils and fasteners faster. Rinsing coils and choosing coastal-rated equipment help." },
      { q: "Can I replace an oil boiler with a heat pump?", a: "Yes. Many homes add a cold-climate heat pump and keep or remove the boiler depending on comfort needs." },
    ],
  },
  {
    slug: "vermont", name: "Vermont", abbr: "VT", status: "PUBLISHED", region: "Northeast", updated: U,
    intro: "Vermont is a heating-first state: long, cold winters, rural homes outside gas service areas and a heavy reliance on oil, propane and wood. Efficiency programs and cold-climate heat pumps have reshaped the market, and cooling demand is small but rising.",
    details: [
      { heading: "Rural fuel reliance", body: "Most of Vermont lacks natural gas service, so homes heat with oil, propane, kerosene, wood or electricity. Fuel deliveries and costs shape equipment choices." },
      { heading: "Cold-climate heat pumps", body: "Ductless and ducted heat pumps designed for cold climates are now widely installed, usually alongside an existing system for backup during deep cold and outages." },
      { heading: "Snow and outages", body: "Outdoor units need stands above snow level, and long storm outages make backup heat that runs without grid power valuable." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 6–7" },
      { term: "Common heating", detail: "Oil, propane, wood, heat pumps" },
      { term: "Cooling", detail: "Short season" },
      { term: "Watch for", detail: "Snow on outdoor units, outages" },
    ],
    metros: ["Burlington", "Rutland", "South Burlington", "Barre", "Montpelier"],
    focus: [
      { service: "heat-pump-installation", why: "Widely used to cut oil and propane use." },
      { service: "ductless-mini-splits", why: "The most common heat pump format in older homes." },
      { service: "furnace-tune-up", why: "Annual service keeps fuel-burning backup systems safe." },
    ],
    faqs: [
      { q: "Are heat pumps enough to heat a Vermont home?", a: "Cold-climate heat pumps can carry most of the load, but most Vermont homes keep backup heat for extreme cold and outages." },
      { q: "Where should a heat pump go to avoid snow?", a: "On a stand or wall bracket above typical snow depth, away from roof drip lines." },
    ],
  },
  {
    slug: "illinois", name: "Illinois", abbr: "IL", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Illinois has cold winters across the state and hot, humid summers, especially in central and southern Illinois. Natural gas furnaces paired with central air are the standard setup from Chicago's bungalows to downstate ranch homes, so furnace and AC replacement drive most HVAC work.",
    details: [
      { heading: "Chicago bungalows and two-flats", body: "Chicago's bungalow belt and two-flats often have older gas furnaces or boilers, small returns and finished attics that run hot. Duct improvements, mini-splits or zoning help more than oversized equipment." },
      { heading: "Lake-effect cold and wind chill", body: "Northern Illinois winters bring subzero wind chills. Reliable ignition, clear vent terminations and a fall safety check prevent most no-heat calls." },
      { heading: "Downstate summers", body: "Central and southern Illinois summers are long and humid. Proper AC sizing and clean coils keep humidity down and bills lower." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Natural gas furnaces" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Hot finished attics, subzero cold snaps" },
    ],
    metros: ["Chicago", "Aurora", "Rockford", "Peoria", "Springfield"],
    focus: [
      { service: "furnace-installation", why: "Gas furnaces are the dominant heating system." },
      { service: "ac-repair", why: "Long, humid downstate summers keep AC running hard." },
      { service: "zoning-systems", why: "Balances hot finished attics in bungalows and two-stories." },
    ],
    faqs: [
      { q: "Why is my Chicago bungalow's upstairs so hot?", a: "Finished attics often have few supply ducts and no returns. Adding returns, a mini-split or zoning usually fixes it." },
      { q: "When should Illinois homeowners schedule a furnace tune-up?", a: "September or October, before the first hard freeze." },
    ],
  },
  {
    slug: "indiana", name: "Indiana", abbr: "IN", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Indiana homes need both strong heating for cold, windy winters and air conditioning for humid summers. Gas furnaces with central air are most common in Indianapolis, Fort Wayne and South Bend, while rural homes often use propane or heat pumps.",
    details: [
      { heading: "Suburban growth", body: "Suburbs around Indianapolis, such as Carmel, Fishers and Noblesville, have many two-story homes from the 1990s and 2000s whose original systems are reaching replacement age." },
      { heading: "Rural heating", body: "Outside gas service areas, propane furnaces and heat pumps are common. Dual-fuel systems can cut costs where propane prices are high." },
      { heading: "Storms and humidity", body: "Spring storms, high summer humidity and cottonwood season make coil cleaning and drain maintenance worthwhile before summer." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Gas furnaces, propane, heat pumps" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Aging 1990s–2000s systems" },
    ],
    metros: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Lafayette"],
    focus: [
      { service: "ac-installation", why: "Many suburban systems are reaching end of life." },
      { service: "heat-pump-installation", why: "Dual-fuel lowers costs in propane homes." },
      { service: "furnace-repair", why: "Cold snaps bring a rush of no-heat calls." },
    ],
    faqs: [
      { q: "Is a dual-fuel system worth it in rural Indiana?", a: "Often, when propane is expensive. The heat pump handles mild days and the furnace covers deep cold." },
      { q: "How long do furnaces last in Indiana?", a: "Typically 15 to 20 years with regular maintenance." },
    ],
  },
  {
    slug: "iowa", name: "Iowa", abbr: "IA", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Iowa's continental climate brings cold, windy winters and warm, humid summers. Natural gas furnaces dominate in Des Moines, Cedar Rapids and the Quad Cities, while rural homes rely on propane, so heating reliability and efficiency are the main HVAC concerns.",
    details: [
      { heading: "Wind and cold", body: "Open terrain means strong winter winds and wind chills well below zero. Sealed ductwork, good insulation and correctly sized furnaces keep homes comfortable." },
      { heading: "Propane in rural areas", body: "Farm and small-town homes often use propane. Heat pumps or dual-fuel systems can reduce propane use during milder months." },
      { heading: "Summer storms", body: "Severe thunderstorms and hail can damage condensers. Inspect outdoor units after storms and keep debris clear." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 5–6" },
      { term: "Common heating", detail: "Gas furnaces, propane" },
      { term: "Cooling", detail: "Warm, humid summers" },
      { term: "Watch for", detail: "Wind chill, hail" },
    ],
    metros: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"],
    focus: [
      { service: "furnace-installation", why: "Gas and propane furnaces carry most of the heating load." },
      { service: "heat-pump-installation", why: "Cuts propane use in rural homes." },
      { service: "ac-repair", why: "Hail and storms damage outdoor units." },
    ],
    faqs: [
      { q: "Should Iowa homes use a two-stage furnace?", a: "Two-stage furnaces run longer at low output, giving more even heat in windy, cold weather." },
      { q: "Can hail damage my AC?", a: "Yes. Bent fins reduce airflow. A technician can comb fins or document damage for insurance." },
    ],
  },
  {
    slug: "kansas", name: "Kansas", abbr: "KS", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Kansas has hot summers, cold winters and a lot of wind and severe weather in between. From Wichita and Topeka to the Johnson County suburbs of Kansas City, most homes run gas furnaces with central air, and hail, high summer cooling loads and winter cold snaps shape HVAC needs.",
    details: [
      { heading: "Severe weather", body: "Spring hail and wind storms regularly damage condensers and heat pumps. Many homeowners document damage for insurance before replacing equipment." },
      { heading: "Summer heat", body: "Central and western Kansas summers bring long stretches above 95°F. Clean coils, correct refrigerant charge and good attic insulation keep systems from running constantly." },
      { heading: "Kansas City suburbs", body: "Johnson County suburbs, including Overland Park, Olathe, Lenexa, Shawnee and Leawood, have many two-story homes with one system serving several levels. We cover these towns in detail on their own pages." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps" },
      { term: "Cooling", detail: "Hot summers" },
      { term: "Watch for", detail: "Hail, wind, extreme heat" },
    ],
    metros: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"],
    focus: [
      { service: "ac-repair", why: "Long hot summers and hail damage keep AC repair in demand." },
      { service: "furnace-repair", why: "Cold snaps find weak ignitors and flame sensors." },
      { service: "zoning-systems", why: "Balances two-story suburban homes." },
    ],
    faqs: [
      { q: "Does homeowner's insurance cover hail-damaged AC in Kansas?", a: "Often, if the storm is a covered event. Photograph the damage and contact your insurer before replacing the unit." },
      { q: "How do I check an HVAC contractor's license in Kansas?", a: "Licensing is handled locally in Kansas. Johnson County runs a contractor licensing program, and other cities license contractors themselves." },
    ],
  },
  {
    slug: "michigan", name: "Michigan", abbr: "MI", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Michigan is heating country. Cold, snowy winters around Detroit, Grand Rapids and Lansing, and even colder ones in the Upper Peninsula, make the furnace the most important appliance in most homes. Summers are warm and can be humid, especially in the southern Lower Peninsula.",
    details: [
      { heading: "Lake-effect snow", body: "West Michigan and the U.P. receive heavy lake-effect snow that can bury sidewall vents and outdoor units. Raised terminations and stands help keep systems running." },
      { heading: "Older Detroit-area housing", body: "Detroit and its inner suburbs have many older homes with original ductwork, chimney-vented furnaces and limited returns, which affect how new equipment performs." },
      { heading: "Propane up north", body: "Northern Michigan homes often rely on propane. Heat pumps and dual-fuel systems can help reduce fuel costs." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 5–7" },
      { term: "Common heating", detail: "Gas furnaces, propane up north" },
      { term: "Cooling", detail: "Warm summers" },
      { term: "Watch for", detail: "Snow-blocked vents" },
    ],
    metros: ["Detroit", "Grand Rapids", "Lansing", "Ann Arbor", "Kalamazoo"],
    focus: [
      { service: "furnace-repair", why: "No heat in a Michigan winter is urgent." },
      { service: "furnace-installation", why: "Furnace replacement is the most common major HVAC job." },
      { service: "whole-house-humidifiers", why: "Heated winter air gets very dry." },
    ],
    faqs: [
      { q: "My furnace shut off during a snowstorm. Why?", a: "Snow may be blocking the intake or exhaust pipe on a high-efficiency furnace. Clear it carefully and reset the furnace." },
      { q: "Do I need a humidifier in Michigan?", a: "Many homes do. Heated winter air can drop to very low humidity." },
    ],
  },
  {
    slug: "minnesota", name: "Minnesota", abbr: "MN", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Minnesota has some of the coldest winters in the lower 48, so furnaces and backup heat are the core of HVAC in the Twin Cities, Duluth, Rochester and across the state. Summers are short but can be hot and humid in the south.",
    details: [
      { heading: "Extreme cold", body: "Subzero stretches make furnace reliability, proper sizing and fast repair critical. A failed furnace can lead to frozen pipes within hours." },
      { heading: "Heat pumps with backup", body: "Cold-climate heat pumps are increasingly paired with gas or propane furnaces. The heat pump handles shoulder seasons and milder winter days." },
      { heading: "Ventilation in tight homes", body: "Newer, tightly built homes often need mechanical ventilation and humidity control to avoid window condensation in winter." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 6–7" },
      { term: "Common heating", detail: "Gas furnaces, propane" },
      { term: "Cooling", detail: "Short, sometimes humid summers" },
      { term: "Watch for", detail: "Subzero cold, window condensation" },
    ],
    metros: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Saint Cloud"],
    focus: [
      { service: "furnace-repair", why: "No heat in subzero weather is an emergency." },
      { service: "emergency-hvac-repair", why: "Fast response prevents frozen pipes." },
      { service: "heat-pump-installation", why: "Dual-fuel systems are growing." },
    ],
    faqs: [
      { q: "Can a heat pump heat a Minnesota home?", a: "Cold-climate heat pumps can handle much of the season, but most Minnesota homes pair them with a furnace for extreme cold." },
      { q: "Why do my windows sweat in winter?", a: "Indoor humidity is too high for the outdoor temperature. Lower the humidifier setting or add ventilation." },
    ],
  },
  {
    slug: "missouri", name: "Missouri", abbr: "MO", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Missouri has hot, humid summers and cold winters, so homes from Kansas City to St. Louis and Springfield need dependable cooling and heating. Gas furnaces with central air are the norm in the cities, while rural areas use more propane and heat pumps.",
    details: [
      { heading: "Older city housing", body: "Kansas City and St. Louis have large stocks of early twentieth-century brick homes with basement furnaces, chimney venting and hot upstairs rooms. Mini-splits and return-air improvements often help more than bigger equipment." },
      { heading: "Humidity and heat", body: "Summer heat indexes regularly top 100°F. Right-sized systems that remove moisture keep homes comfortable." },
      { heading: "Local licensing", body: "Missouri has no statewide HVAC license; cities such as Kansas City, St. Louis and Independence license contractors and issue mechanical permits." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps, propane" },
      { term: "Cooling", detail: "Hot, humid summers" },
      { term: "Watch for", detail: "Hot upstairs in older homes" },
    ],
    metros: ["Kansas City", "St. Louis", "Springfield", "Independence", "Lee's Summit"],
    focus: [
      { service: "ac-repair", why: "Long, humid summers drive AC repair demand." },
      { service: "ductless-mini-splits", why: "Cools hot upstairs rooms in older brick homes." },
      { service: "furnace-installation", why: "Basement gas furnaces are the standard." },
    ],
    faqs: [
      { q: "Does Missouri license HVAC contractors?", a: "Not at the state level. Cities such as Kansas City, St. Louis and Independence license contractors and require permits." },
      { q: "Who do I call if I smell gas in Missouri?", a: "Leave the home and call your gas utility's emergency line or 911 from outside." },
    ],
  },
  {
    slug: "nebraska", name: "Nebraska", abbr: "NE", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Nebraska's plains climate brings cold, windy winters, hot summers and frequent severe storms. Omaha and Lincoln homes mostly use gas furnaces with central air, while rural homes rely on propane, electric heat or heat pumps.",
    details: [
      { heading: "Wind and temperature swings", body: "Strong winds and rapid temperature swings stress heating systems. Tight ductwork and well-sized equipment keep homes comfortable." },
      { heading: "Hail on the plains", body: "Hail is common across Nebraska. Outdoor units with bent fins lose efficiency and may qualify for insurance claims." },
      { heading: "Rural heating options", body: "Heat pumps and dual-fuel systems reduce propane use in rural homes." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 5" },
      { term: "Common heating", detail: "Gas furnaces, propane, heat pumps" },
      { term: "Cooling", detail: "Hot summers" },
      { term: "Watch for", detail: "Hail, wind" },
    ],
    metros: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"],
    focus: [
      { service: "ac-repair", why: "Hail and heat damage outdoor units." },
      { service: "furnace-repair", why: "Winter wind chills make heat critical." },
      { service: "heat-pump-installation", why: "Reduces propane use in rural homes." },
    ],
    faqs: [
      { q: "Should I add a hail guard to my AC in Nebraska?", a: "Coil guards can reduce fin damage, but they must not block airflow. Ask the contractor about models made for your unit." },
      { q: "How often should Nebraska homes change filters?", a: "Every 1 to 3 months for 1-inch filters, more often during dusty or high-pollen periods." },
    ],
  },
  {
    slug: "north-dakota", name: "North Dakota", abbr: "ND", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "North Dakota has some of the harshest winters in the country, so heating dominates. Homes in Fargo, Bismarck and Grand Forks depend on gas or propane furnaces, and a failed furnace in January is a genuine emergency.",
    details: [
      { heading: "Extreme cold", body: "Long stretches below zero make reliable ignition, correct venting and quick repairs essential. Frozen pipes can follow a furnace failure quickly." },
      { heading: "Backup heat", body: "Heat pumps in North Dakota are typically paired with a furnace or electric backup sized for the coldest nights." },
      { heading: "Short summers", body: "Summers are short but can be hot. Central air is common in newer homes." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 6–7" },
      { term: "Common heating", detail: "Gas and propane furnaces" },
      { term: "Cooling", detail: "Short summers" },
      { term: "Watch for", detail: "Subzero cold, frozen pipes" },
    ],
    metros: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"],
    focus: [
      { service: "emergency-hvac-repair", why: "No heat in subzero weather can freeze pipes quickly." },
      { service: "furnace-tune-up", why: "Fall checks prevent winter breakdowns." },
      { service: "furnace-installation", why: "Furnaces carry nearly the whole heating load." },
    ],
    faqs: [
      { q: "What should I do if my furnace fails in a North Dakota winter?", a: "Call for service, open cabinet doors under sinks, let faucets drip and use space heaters safely until heat returns." },
      { q: "Do heat pumps work in North Dakota?", a: "Only with a backup heat source sized for extreme cold." },
    ],
  },
  {
    slug: "ohio", name: "Ohio", abbr: "OH", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Ohio's humid continental climate gives Columbus, Cleveland, Cincinnati and the rest of the state cold winters and warm, humid summers. Gas furnaces paired with central air are standard, and the state has a large stock of older homes with original ductwork.",
    details: [
      { heading: "Lake-effect snow in the north", body: "Cleveland and the northeast snow belt get heavy lake-effect snow. Keeping furnace vents and outdoor units clear prevents shutdowns." },
      { heading: "Older housing", body: "Many Ohio cities have early twentieth-century homes with basement furnaces and limited returns. Duct improvements make new equipment perform better." },
      { heading: "Humid summers", body: "Southern Ohio, including Cincinnati, has long, humid summers where right-sized AC matters for comfort." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Gas furnaces" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Snow-blocked vents, undersized returns" },
    ],
    metros: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    focus: [
      { service: "furnace-installation", why: "Gas furnace replacement is the most common major job." },
      { service: "duct-sealing", why: "Older ductwork limits new equipment." },
      { service: "ac-installation", why: "Humid summers make good cooling essential." },
    ],
    faqs: [
      { q: "Should I replace my AC and furnace together in Ohio?", a: "If both are over 15 years old, replacing them together saves labor and gives you a matched system." },
      { q: "How do I keep my furnace running in lake-effect snow?", a: "Keep intake and exhaust pipes clear and raise them if they're often buried." },
    ],
  },
  {
    slug: "south-dakota", name: "South Dakota", abbr: "SD", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "South Dakota has cold winters, hot summers and strong winds. Sioux Falls and Rapid City homes generally use gas furnaces with central air, while many rural homes use propane or electric heat.",
    details: [
      { heading: "Cold and wind", body: "Winter cold snaps and wind chills make furnace reliability critical. Sealing ducts and insulating attics improves comfort." },
      { heading: "Western South Dakota", body: "Rapid City and the Black Hills see rapid temperature swings and chinook winds, which favor responsive two-stage equipment." },
      { heading: "Rural options", body: "Heat pumps or dual-fuel systems can cut propane bills in rural homes." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 5–6" },
      { term: "Common heating", detail: "Gas furnaces, propane, electric" },
      { term: "Cooling", detail: "Hot summers" },
      { term: "Watch for", detail: "Wind chill, temperature swings" },
    ],
    metros: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"],
    focus: [
      { service: "furnace-repair", why: "Winter cold makes heat critical." },
      { service: "heat-pump-installation", why: "Reduces propane use in rural homes." },
      { service: "ac-repair", why: "Hot summers and storms strain AC units." },
    ],
    faqs: [
      { q: "Is a two-stage furnace worth it in South Dakota?", a: "It runs longer at low output for more even heat during swings and wind." },
      { q: "How do I prepare my HVAC for winter?", a: "Schedule a tune-up, replace the filter and test CO alarms in early fall." },
    ],
  },
  {
    slug: "wisconsin", name: "Wisconsin", abbr: "WI", status: "PUBLISHED", region: "Midwest", updated: U,
    intro: "Wisconsin's long, cold winters make the furnace central to home comfort in Milwaukee, Madison, Green Bay and beyond. Summers are warm and humid near Lake Michigan and in the south.",
    details: [
      { heading: "Cold winters", body: "Subzero stretches and lake-effect snow make reliable furnaces, clear vents and humidifiers common needs." },
      { heading: "Older Milwaukee housing", body: "Milwaukee's duplexes and bungalows often have older gas furnaces or boilers. Mini-splits add cooling to homes without ducts." },
      { heading: "Rural propane", body: "Northern and rural homes rely on propane. Dual-fuel heat pumps can reduce fuel use." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 6–7" },
      { term: "Common heating", detail: "Gas furnaces, propane" },
      { term: "Cooling", detail: "Warm summers" },
      { term: "Watch for", detail: "Cold snaps, dry winter air" },
    ],
    metros: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Appleton"],
    focus: [
      { service: "furnace-repair", why: "Winter cold makes no-heat calls urgent." },
      { service: "whole-house-humidifiers", why: "Heated air gets very dry in winter." },
      { service: "ductless-mini-splits", why: "Adds cooling to duplexes without ducts." },
    ],
    faqs: [
      { q: "What humidity should I keep in a Wisconsin winter?", a: "Around 30 to 35 percent, lower on the coldest days to avoid window condensation." },
      { q: "Can I add AC to a Milwaukee duplex?", a: "Yes. Mini-splits are a common choice for each unit." },
    ],
  },
];
