import type { State } from "../types";

// State hubs: South + DC.
const U = "2026-10-06";

export const south: State[] = [
  {
    slug: "alabama", name: "Alabama", abbr: "AL", status: "PUBLISHED", region: "South", updated: U,
    intro: "Alabama's long, hot and humid summers make air conditioning the most important home system from Huntsville to Birmingham, Montgomery and Mobile. Winters are short and mostly mild, so electric heat pumps are widespread, with gas furnaces common in older and northern homes.",
    details: [
      { heading: "Humidity control", body: "High humidity for much of the year means oversized air conditioners leave homes clammy. Correct sizing, longer run times and clean coils remove more moisture." },
      { heading: "Heat pumps", body: "Heat pumps heat most Alabama homes efficiently, with electric or gas backup for the occasional hard freeze." },
      { heading: "Gulf Coast storms", body: "Mobile and Baldwin County face hurricanes and salt air. Secure mounting, surge protection and coastal-rated coils help equipment survive storm season." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 2–3" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Long, humid season" },
      { term: "Watch for", detail: "Humidity, hurricanes on the coast" },
    ],
    metros: ["Birmingham", "Huntsville", "Montgomery", "Mobile", "Tuscaloosa"],
    focus: [
      { service: "ac-repair", why: "AC runs most of the year in Alabama's heat." },
      { service: "heat-pump-installation", why: "The most common heating and cooling system." },
      { service: "whole-house-humidifiers", why: "Humidity control matters more than temperature for comfort." },
    ],
    faqs: [
      { q: "Why does my Alabama home feel humid even with the AC running?", a: "An oversized or low-charge system may cool without removing enough moisture. A technician can check sizing, charge and fan settings." },
      { q: "Is a heat pump enough for Alabama winters?", a: "Yes for most homes, with backup heat for the few hard freezes each year." },
    ],
  },
  {
    slug: "arkansas", name: "Arkansas", abbr: "AR", status: "PUBLISHED", region: "South", updated: U,
    intro: "Arkansas has hot, humid summers and mild to cool winters with occasional ice storms. Air conditioning carries the heaviest load in Little Rock, Fort Smith and Northwest Arkansas, and both heat pumps and gas furnaces are common for heating.",
    details: [
      { heading: "Northwest Arkansas growth", body: "Fayetteville, Springdale, Rogers and Bentonville have many newer homes with heat pumps and attic ductwork, where duct insulation and sealing matter in summer heat." },
      { heading: "Ice storms", body: "Winter ice storms can cause outages and coat outdoor units. Heat pumps should be on stands, and backup heat sized for cold snaps." },
      { heading: "Humid summers", body: "Long humid summers make correct AC sizing and coil maintenance important for comfort and efficiency." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 3–4" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Hot, humid summers" },
      { term: "Watch for", detail: "Ice storms, attic duct losses" },
    ],
    metros: ["Little Rock", "Fayetteville", "Fort Smith", "Springdale", "Rogers"],
    focus: [
      { service: "ac-repair", why: "Long humid summers strain air conditioners." },
      { service: "duct-sealing", why: "Attic ducts lose cooling in newer homes." },
      { service: "heat-pump-repair", why: "Ice storms and cold snaps test heat pumps." },
    ],
    faqs: [
      { q: "My heat pump iced over in an Arkansas ice storm. What do I do?", a: "Don't chip at the ice. Switch to emergency heat if needed and call for service if it doesn't clear after the storm." },
      { q: "How often should Arkansas homes service their AC?", a: "Once a year in spring, before summer heat arrives." },
    ],
  },
  {
    slug: "delaware", name: "Delaware", abbr: "DE", status: "PUBLISHED", region: "South", updated: U,
    intro: "Delaware's mid-Atlantic climate brings humid summers and moderately cold winters. Homes in Wilmington, Newark and Dover use a mix of gas furnaces, heat pumps and central air, while coastal Sussex County adds salt air and storm concerns.",
    details: [
      { heading: "Heat pumps are common", body: "Mild winters make heat pumps a practical primary heat source in much of the state, especially in newer homes in Kent and Sussex counties." },
      { heading: "Beach-area conditions", body: "Rehoboth, Lewes and the beach towns face salt air and storm surge. Elevated, coastal-rated equipment lasts longer." },
      { heading: "Older Wilmington homes", body: "Older rowhouses and twins in Wilmington often have boilers or limited ductwork, where mini-splits add cooling." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 4" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Salt air at the beaches" },
    ],
    metros: ["Wilmington", "Dover", "Newark", "Middletown", "Bear"],
    focus: [
      { service: "heat-pump-installation", why: "Mild winters suit heat pumps." },
      { service: "ac-tune-up", why: "Salt air and humidity make coil cleaning important." },
      { service: "ductless-mini-splits", why: "Adds cooling to older rowhouses." },
    ],
    faqs: [
      { q: "Does a heat pump work well in Delaware?", a: "Yes. Winters are mild enough that a heat pump handles most of the heating season." },
      { q: "How do I protect AC units at the beach?", a: "Rinse coils periodically and choose coastal-rated equipment where available." },
    ],
  },
  {
    slug: "district-of-columbia", name: "Washington, D.C.", abbr: "DC", status: "PUBLISHED", region: "South", updated: U,
    intro: "Washington, D.C. has hot, humid summers and cool winters, and its housing is dominated by rowhouses, older apartment buildings and historic homes. Cooling and humidity control are the main concerns, and many homes rely on boilers, older furnaces or ductless systems.",
    details: [
      { heading: "Rowhouses and historic homes", body: "Capitol Hill, Georgetown and other historic neighborhoods have rowhouses with limited space for ductwork. High-velocity systems and mini-splits are common, and outdoor equipment may need historic-district review." },
      { heading: "Summer humidity", body: "D.C. summers are humid. Systems that run longer at lower speed remove more moisture and keep rowhouses comfortable." },
      { heading: "Electrification", body: "District programs have encouraged heat pumps and efficiency upgrades. Confirm current incentives with the contractor." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 4" },
      { term: "Common heating", detail: "Gas boilers and furnaces, heat pumps" },
      { term: "Cooling", detail: "Hot, humid summers" },
      { term: "Watch for", detail: "Historic-district rules, tight spaces" },
    ],
    metros: ["Washington"],
    focus: [
      { service: "ductless-mini-splits", why: "Fits rowhouses and historic homes without ducts." },
      { service: "ac-repair", why: "Humid summers keep AC running hard." },
      { service: "heat-pump-installation", why: "District programs have encouraged electrification." },
    ],
    faqs: [
      { q: "Can I install an outdoor AC unit on a historic D.C. rowhouse?", a: "Usually, but placement visible from the street may need historic preservation review." },
      { q: "What's the best way to cool a D.C. rowhouse?", a: "Ductless mini-splits or high-velocity small-duct systems avoid major demolition." },
    ],
  },
  {
    slug: "florida", name: "Florida", abbr: "FL", status: "PUBLISHED", region: "South", updated: U,
    intro: "Florida runs on air conditioning. Hot, humid weather for most of the year, salt air along both coasts and hurricane season make AC reliability, humidity control and storm preparation the core of HVAC across Miami, Tampa, Orlando and Jacksonville.",
    details: [
      { heading: "Year-round cooling", body: "Air conditioners in South and Central Florida run for much of the year. Coil cleaning, clear condensate drains and correct refrigerant charge prevent the most common breakdowns." },
      { heading: "Humidity and mold", body: "Humidity drives comfort and indoor air quality. Right-sized systems, dehumidifiers and sealed ductwork help prevent mold and musty odors." },
      { heading: "Hurricanes and salt air", body: "Outdoor units should be securely anchored, and coastal homes benefit from corrosion-resistant coils. Florida licenses HVAC contractors at the state level, so check a contractor's license before work." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 1–2" },
      { term: "Common heating", detail: "Heat pumps, electric strips" },
      { term: "Cooling", detail: "Most of the year" },
      { term: "Watch for", detail: "Hurricanes, salt air, clogged drains" },
    ],
    metros: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale"],
    focus: [
      { service: "ac-repair", why: "Year-round cooling makes AC failures urgent." },
      { service: "ac-tune-up", why: "Drain clogs and dirty coils are common in humid heat." },
      { service: "air-filtration", why: "Humidity and pollen affect indoor air quality." },
    ],
    faqs: [
      { q: "Why does my Florida AC keep shutting off with water in the pan?", a: "The condensate drain is likely clogged, tripping a safety switch. Clearing and treating the drain usually restores cooling." },
      { q: "How do I prepare my AC for a hurricane?", a: "Turn it off before the storm, make sure it's anchored, and have it inspected if it was flooded." },
    ],
  },
  {
    slug: "georgia", name: "Georgia", abbr: "GA", status: "PUBLISHED", region: "South", updated: U,
    intro: "Georgia's hot, humid summers make air conditioning essential from metro Atlanta to Savannah, Augusta and Macon. Winters are mild in the south and cooler in the north Georgia mountains, so heat pumps and gas furnaces are both common.",
    details: [
      { heading: "Metro Atlanta homes", body: "Many Atlanta suburbs have two-story homes with attic systems serving the upstairs. Attic heat, duct leakage and condensate overflows are common summer issues." },
      { heading: "Coastal Georgia", body: "Savannah and the Golden Isles face salt air, humidity and storms. Coastal-rated equipment and secure mounting help." },
      { heading: "Mountain winters", body: "North Georgia sees colder nights and occasional snow, where heat pumps benefit from backup heat." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 2–4" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Long, humid summers" },
      { term: "Watch for", detail: "Attic systems, condensate overflow" },
    ],
    metros: ["Atlanta", "Augusta", "Savannah", "Macon", "Athens"],
    focus: [
      { service: "ac-repair", why: "Long summers drive AC repair demand." },
      { service: "duct-sealing", why: "Attic ducts lose cooling in two-story homes." },
      { service: "zoning-systems", why: "Balances upstairs and downstairs comfort." },
    ],
    faqs: [
      { q: "Why is my upstairs so hot in Atlanta?", a: "Attic ductwork and heat gain make upstairs harder to cool. Sealing ducts, adding returns or zoning helps." },
      { q: "Do I need a float switch on my attic AC?", a: "Yes. It shuts the system off if the drain clogs, preventing ceiling damage." },
    ],
  },
  {
    slug: "kentucky", name: "Kentucky", abbr: "KY", status: "PUBLISHED", region: "South", updated: U,
    intro: "Kentucky has hot, humid summers and cold winters with occasional ice. Louisville and Lexington homes use gas furnaces and heat pumps in similar numbers, and rural homes often depend on heat pumps or propane.",
    details: [
      { heading: "Four-season demand", body: "Kentucky homes need both reliable cooling and real winter heating. Dual-fuel systems pair a heat pump with a gas furnace for efficiency in both seasons." },
      { heading: "Ice storms", body: "Ice storms can coat outdoor units and cause outages. Heat pumps should sit above ground level, with backup heat ready." },
      { heading: "Humidity", body: "The Ohio River valley is humid in summer. Proper AC sizing keeps indoor humidity in check." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 4" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Ice storms" },
    ],
    metros: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington"],
    focus: [
      { service: "heat-pump-installation", why: "Dual-fuel systems suit the four-season climate." },
      { service: "ac-repair", why: "Humid summers strain air conditioners." },
      { service: "furnace-repair", why: "Winter cold snaps cause no-heat calls." },
    ],
    faqs: [
      { q: "Is a heat pump or a gas furnace better in Kentucky?", a: "Many homes use both in a dual-fuel setup: the heat pump for mild weather and the furnace for cold snaps." },
      { q: "How do I protect my heat pump during ice storms?", a: "Keep it on a stand, clear ice from around the base and call if it stays encased." },
    ],
  },
  {
    slug: "louisiana", name: "Louisiana", abbr: "LA", status: "PUBLISHED", region: "South", updated: U,
    intro: "Louisiana's hot, humid climate and hurricane exposure make air conditioning and humidity control the core of HVAC in New Orleans, Baton Rouge, Shreveport and Lafayette. Heating needs are light, and heat pumps are common.",
    details: [
      { heading: "Humidity and mold", body: "Moist air year-round means drains, coils and ductwork need regular attention to prevent mold and musty odors." },
      { heading: "Hurricanes and flooding", body: "Outdoor units in flood-prone areas are often raised on platforms. After a flood, equipment should be inspected before it's turned back on." },
      { heading: "Older New Orleans homes", body: "Raised shotgun houses and older homes may have ductwork under the floor or none at all. Mini-splits are common there." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 2" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Most of the year" },
      { term: "Watch for", detail: "Flooding, hurricanes, humidity" },
    ],
    metros: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Metairie"],
    focus: [
      { service: "ac-repair", why: "Heat and humidity keep AC running most of the year." },
      { service: "ductless-mini-splits", why: "Fits shotgun houses and older homes." },
      { service: "air-filtration", why: "Humidity and mold affect indoor air." },
    ],
    faqs: [
      { q: "Can I use my AC after it was flooded?", a: "Not until a technician inspects it. Floodwater can damage electrical parts and contaminate the unit." },
      { q: "Why does my house smell musty?", a: "High humidity and wet coils or ducts can grow mold. Check drains, coils and humidity levels." },
    ],
  },
  {
    slug: "maryland", name: "Maryland", abbr: "MD", status: "PUBLISHED", region: "South", updated: U,
    intro: "Maryland's humid summers and cool winters call for dependable AC and heat. Baltimore rowhouses, Montgomery and Prince George's County suburbs, and Eastern Shore homes have very different HVAC setups, from boilers to heat pumps and gas furnaces.",
    details: [
      { heading: "Baltimore rowhouses", body: "Many rowhouses have boilers or small furnaces and limited ductwork. Mini-splits and rooftop condensers are common cooling solutions." },
      { heading: "Suburban systems", body: "DC-area suburbs have many two-story homes with gas furnaces or heat pumps and attic ducts serving upstairs bedrooms." },
      { heading: "Eastern Shore", body: "Coastal and bay-side homes deal with humidity and salt air. Heat pumps are common where natural gas isn't available." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps, boilers" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Rowhouse duct limits" },
    ],
    metros: ["Baltimore", "Silver Spring", "Frederick", "Rockville", "Annapolis"],
    focus: [
      { service: "ductless-mini-splits", why: "Fits rowhouses without ducts." },
      { service: "heat-pump-installation", why: "Common where gas isn't available." },
      { service: "ac-installation", why: "Humid summers make good cooling essential." },
    ],
    faqs: [
      { q: "How do I add AC to a Baltimore rowhouse?", a: "Ductless mini-splits or a compact system with a rooftop condenser are common choices." },
      { q: "Are heat pumps common in Maryland?", a: "Yes, especially in newer homes and areas without natural gas." },
    ],
  },
  {
    slug: "mississippi", name: "Mississippi", abbr: "MS", status: "PUBLISHED", region: "South", updated: U,
    intro: "Mississippi's long, hot and humid summers make air conditioning the essential home system from Jackson to the Gulf Coast. Winters are mild, so heat pumps handle heating in many homes.",
    details: [
      { heading: "Heat and humidity", body: "Humidity control is as important as cooling. Clean coils, correct refrigerant charge and proper sizing keep homes comfortable." },
      { heading: "Gulf Coast storms", body: "Gulfport and Biloxi face hurricanes and salt air. Anchored, coastal-rated units last longer." },
      { heading: "Heat pumps", body: "Heat pumps are common for heating, with backup heat for occasional freezes." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 2–3" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Long, humid season" },
      { term: "Watch for", detail: "Hurricanes on the coast" },
    ],
    metros: ["Jackson", "Gulfport", "Biloxi", "Hattiesburg", "Southaven"],
    focus: [
      { service: "ac-repair", why: "Long summers keep AC running hard." },
      { service: "heat-pump-installation", why: "Mild winters suit heat pumps." },
      { service: "ac-tune-up", why: "Humidity and pollen clog coils and drains." },
    ],
    faqs: [
      { q: "How often should I change my AC filter in Mississippi?", a: "Every 1 to 3 months, more often during heavy-use summer months." },
      { q: "What should I do with my AC before a hurricane?", a: "Turn it off and make sure it's anchored. Have it inspected after flooding." },
    ],
  },
  {
    slug: "north-carolina", name: "North Carolina", abbr: "NC", status: "PUBLISHED", region: "South", updated: U,
    intro: "North Carolina spans three climates: the humid coastal plain, the Piedmont around Charlotte, Raleigh and Greensboro, and the colder mountains near Asheville. Heat pumps are the most common system statewide, with gas furnaces in many cities.",
    details: [
      { heading: "Piedmont suburbs", body: "Charlotte, Raleigh and the Triad have many two-story homes with crawlspace or attic ductwork. Duct sealing and zoning help balance floors." },
      { heading: "Coast and humidity", body: "Wilmington and the Outer Banks deal with salt air, humidity and hurricanes. Coastal-rated equipment and elevated units help." },
      { heading: "Mountain winters", body: "Asheville and the High Country see colder winters, where heat pumps need backup heat sized for cold snaps. North Carolina licenses HVAC contractors at the state level." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 3–5" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Crawlspace ducts, coastal storms" },
    ],
    metros: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Wilmington"],
    focus: [
      { service: "heat-pump-repair", why: "Heat pumps are the most common system." },
      { service: "duct-sealing", why: "Crawlspace and attic ducts lose conditioned air." },
      { service: "zoning-systems", why: "Balances two-story Piedmont homes." },
    ],
    faqs: [
      { q: "Are heat pumps good in North Carolina?", a: "Yes. They're the most common system statewide, with backup heat in the mountains." },
      { q: "Should crawlspace ductwork be sealed?", a: "Yes. Leaky crawlspace ducts waste energy and can pull in humid, musty air." },
    ],
  },
  {
    slug: "oklahoma", name: "Oklahoma", abbr: "OK", status: "PUBLISHED", region: "South", updated: U,
    intro: "Oklahoma has hot summers, cold winter snaps, frequent severe storms and hail. Oklahoma City and Tulsa homes mostly use gas furnaces with central air, though heat pumps are common in newer and rural homes.",
    details: [
      { heading: "Severe weather and hail", body: "Spring storms and hail regularly damage outdoor units. Document damage before repairs for insurance claims." },
      { heading: "Summer heat", body: "Long stretches above 95°F make clean coils, correct charge and insulated attic ducts important." },
      { heading: "Winter cold snaps", body: "Arctic fronts can drop temperatures quickly. Furnace tune-ups and heat pump backup heat prevent no-heat nights." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 3" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps" },
      { term: "Cooling", detail: "Hot summers" },
      { term: "Watch for", detail: "Hail, sudden cold fronts" },
    ],
    metros: ["Oklahoma City", "Tulsa", "Norman", "Edmond", "Broken Arrow"],
    focus: [
      { service: "ac-repair", why: "Heat and hail strain outdoor units." },
      { service: "furnace-repair", why: "Cold fronts cause sudden no-heat calls." },
      { service: "ac-installation", why: "Hail damage often leads to replacement." },
    ],
    faqs: [
      { q: "Will insurance replace a hail-damaged AC in Oklahoma?", a: "Often, if hail caused the damage. Photograph it and contact your insurer first." },
      { q: "How do I prepare for an Oklahoma cold snap?", a: "Schedule a fall tune-up, replace filters and check that heat pump backup heat works." },
    ],
  },
  {
    slug: "south-carolina", name: "South Carolina", abbr: "SC", status: "PUBLISHED", region: "South", updated: U,
    intro: "South Carolina's hot, humid summers make air conditioning the main HVAC concern from Greenville and Columbia to Charleston and Myrtle Beach. Heat pumps are the most common heating system, and coastal homes face salt air and hurricanes.",
    details: [
      { heading: "Lowcountry humidity", body: "Charleston-area homes battle humidity much of the year. Dehumidification and sealed crawlspaces or ducts help prevent mold." },
      { heading: "Coastal storms", body: "Hurricanes and salt air shorten equipment life along the coast. Elevated, anchored and coastal-rated units last longer." },
      { heading: "Upstate", body: "Greenville and Spartanburg see cooler winters, where heat pumps benefit from backup heat." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zone 3" },
      { term: "Common heating", detail: "Heat pumps" },
      { term: "Cooling", detail: "Long, humid summers" },
      { term: "Watch for", detail: "Salt air, hurricanes" },
    ],
    metros: ["Columbia", "Charleston", "Greenville", "Myrtle Beach", "Spartanburg"],
    focus: [
      { service: "ac-repair", why: "Long summers keep AC running." },
      { service: "heat-pump-installation", why: "The dominant heating system." },
      { service: "duct-sealing", why: "Crawlspace ducts bring in humid air." },
    ],
    faqs: [
      { q: "How do I reduce humidity in a Charleston home?", a: "Right-size the AC, seal ducts and consider a whole-house dehumidifier." },
      { q: "Do I need coastal-rated equipment near the beach?", a: "It helps resist salt-air corrosion and usually lasts longer near the ocean." },
    ],
  },
  {
    slug: "tennessee", name: "Tennessee", abbr: "TN", status: "PUBLISHED", region: "South", updated: U,
    intro: "Tennessee has hot, humid summers and mild to cool winters, with colder conditions in the east. Heat pumps are common across Nashville, Memphis, Knoxville and Chattanooga, alongside gas furnaces in many homes.",
    details: [
      { heading: "Heat pump country", body: "Heat pumps heat and cool a large share of Tennessee homes. Regular service keeps defrost and backup heat working through winter cold snaps." },
      { heading: "Middle Tennessee growth", body: "Fast-growing suburbs around Nashville have many newer two-story homes with attic systems, where duct sealing and zoning help." },
      { heading: "East Tennessee", body: "Knoxville and the mountains see colder winters, where dual-fuel systems or backup heat are common." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 3–4" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Attic systems, ice storms" },
    ],
    metros: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Murfreesboro"],
    focus: [
      { service: "heat-pump-repair", why: "Heat pumps are common statewide." },
      { service: "ac-repair", why: "Humid summers drive AC demand." },
      { service: "zoning-systems", why: "Balances newer two-story homes." },
    ],
    faqs: [
      { q: "Why does my heat pump blow cool air in winter?", a: "During defrost it briefly blows cooler air, which is normal. Constant cool air needs a service call." },
      { q: "Is dual-fuel worth it in East Tennessee?", a: "Often, because winters are colder there than in the rest of the state." },
    ],
  },
  {
    slug: "texas", name: "Texas", abbr: "TX", status: "PUBLISHED", region: "South", updated: U,
    intro: "Texas is one of the largest air conditioning markets in the country. Long, hot summers across Houston, Dallas–Fort Worth, San Antonio and Austin make AC reliability the top priority, while winter freezes, humidity on the Gulf Coast and hail in North Texas add their own challenges.",
    details: [
      { heading: "Extreme summer heat", body: "Systems run hard for months. Clean coils, correct charge, good attic insulation and sealed ducts keep bills and breakdowns down." },
      { heading: "Gulf Coast humidity and storms", body: "Houston and the coast face high humidity and hurricanes. Dehumidification and secure, elevated equipment matter there." },
      { heading: "Freezes and hail", body: "Occasional hard freezes stress heat pumps and pipes, and North Texas hail damages condensers. Texas licenses air conditioning contractors at the state level, so check a contractor's license." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 2–4" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps, electric" },
      { term: "Cooling", detail: "Long, hot summers" },
      { term: "Watch for", detail: "Attic heat, hail, hard freezes" },
    ],
    metros: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth"],
    focus: [
      { service: "ac-repair", why: "Summer heat makes AC failures urgent." },
      { service: "ac-installation", why: "Heavy use shortens system life." },
      { service: "duct-sealing", why: "Attic ducts lose cooling in extreme heat." },
    ],
    faqs: [
      { q: "How long do AC units last in Texas?", a: "Often 10 to 15 years, sometimes less with heavy use. Regular maintenance extends life." },
      { q: "How do I check a Texas HVAC contractor's license?", a: "Texas licenses air conditioning contractors at the state level. Ask for the license number and verify it with the state." },
    ],
  },
  {
    slug: "virginia", name: "Virginia", abbr: "VA", status: "PUBLISHED", region: "South", updated: U,
    intro: "Virginia ranges from the humid coastal plain around Virginia Beach and Norfolk to Richmond, Northern Virginia's suburbs and the cooler Blue Ridge and Shenandoah Valley. Heat pumps are very common statewide, with gas furnaces in many suburbs.",
    details: [
      { heading: "Northern Virginia suburbs", body: "Many two-story and townhouse communities have heat pumps or gas furnaces with attic ducts. Zoning and duct sealing balance floors." },
      { heading: "Hampton Roads", body: "Coastal homes face humidity, salt air and storms. Coastal-rated equipment and drain maintenance help." },
      { heading: "Mountain areas", body: "Western Virginia winters are colder, where heat pumps benefit from backup heat or dual-fuel setups." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Heat pumps, gas furnaces" },
      { term: "Cooling", detail: "Humid summers" },
      { term: "Watch for", detail: "Coastal humidity, townhouse duct limits" },
    ],
    metros: ["Virginia Beach", "Richmond", "Arlington", "Norfolk", "Alexandria"],
    focus: [
      { service: "heat-pump-repair", why: "Heat pumps are common statewide." },
      { service: "zoning-systems", why: "Balances multi-level suburban homes." },
      { service: "ac-tune-up", why: "Humidity and salt air call for regular service." },
    ],
    faqs: [
      { q: "Are heat pumps common in Virginia?", a: "Yes, they're one of the most common heating systems in the state." },
      { q: "Why is the top floor of my townhouse so hot?", a: "Attic heat gain and long duct runs. Sealing ducts, adding returns or zoning helps." },
    ],
  },
  {
    slug: "west-virginia", name: "West Virginia", abbr: "WV", status: "PUBLISHED", region: "South", updated: U,
    intro: "West Virginia's mountainous terrain creates cold winters and warm, humid summers in the valleys. Charleston, Huntington and Morgantown homes use a mix of gas furnaces and heat pumps, while rural homes may rely on propane or electric heat.",
    details: [
      { heading: "Mountain winters", body: "Higher elevations see long, cold winters. Reliable furnaces and backup heat for heat pumps matter." },
      { heading: "Older housing", body: "Many homes are older, with original ductwork and chimney-vented furnaces. A venting check is important when equipment changes." },
      { heading: "Rural options", body: "Heat pumps and dual-fuel systems can reduce propane or electric heating costs in rural homes." },
    ],
    glance: [
      { term: "Climate zone", detail: "IECC zones 4–5" },
      { term: "Common heating", detail: "Gas furnaces, heat pumps, propane" },
      { term: "Cooling", detail: "Warm valley summers" },
      { term: "Watch for", detail: "Older venting, mountain cold" },
    ],
    metros: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling"],
    focus: [
      { service: "furnace-repair", why: "Mountain winters make heat critical." },
      { service: "heat-pump-installation", why: "Cuts costs in rural electric and propane homes." },
      { service: "furnace-tune-up", why: "Older venting needs safety checks." },
    ],
    faqs: [
      { q: "Do I need a chimney liner with a new furnace?", a: "Possibly. If the water heater is left alone in the chimney, a liner may be needed for safe draft." },
      { q: "Is a heat pump practical in West Virginia?", a: "Yes, with backup heat for the coldest weather." },
    ],
  },
];
