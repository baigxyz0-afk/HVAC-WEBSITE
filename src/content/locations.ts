import type { City, CityService, State } from "./types";
import { citiesMore } from "./locationsMore";
import { extraIssues } from "./locationDepth";
import { northeastMidwest } from "./states/northeastMidwest";
import { south } from "./states/south";
import { west } from "./states/west";
import { stateDepth } from "./states/depth";
import { stateDepth2 } from "./states/depth2";

const U = "2026-09-28";

// All 50 states + DC. Kansas City metro towns have their own city pages under Missouri and Kansas.
export const states: State[] = [...northeastMidwest, ...south, ...west]
  .map((s) => ({ ...s, details: [...s.details, ...(stateDepth[s.slug] ?? []), ...(stateDepth2[s.slug] ? [stateDepth2[s.slug]] : [])] }))
  .sort((x, y) => x.name.localeCompare(y.name));

export const regions = [
  { slug: "urban", name: "Kansas City core" },
  { slug: "johnson", name: "Johnson County, KS" },
  { slug: "east", name: "Eastern Jackson County" },
  { slug: "northland", name: "Northland" },
  { slug: "denver-metro", name: "Denver metro" },
  { slug: "las-vegas-valley", name: "Las Vegas Valley" },
  { slug: "salt-lake-valley", name: "Salt Lake Valley" },
  { slug: "phoenix-metro", name: "Phoenix metro" },
  { slug: "pikes-peak", name: "Pikes Peak region" },
  { slug: "northern-colorado", name: "Northern Colorado" },
  { slug: "tucson", name: "Tucson area" },
  { slug: "reno", name: "Reno–Sparks" },
  { slug: "delaware", name: "Delaware" },
  { slug: "greater-boston", name: "Greater Boston" },
  { slug: "central-massachusetts", name: "Central Massachusetts" },
  { slug: "portland-metro", name: "Portland metro" },
  { slug: "willamette-valley", name: "Willamette Valley" },
  { slug: "sacramento", name: "Sacramento area" },
  { slug: "san-diego", name: "San Diego area" },
  { slug: "houston", name: "Greater Houston" },
  { slug: "dallas-fort-worth", name: "Dallas–Fort Worth" },
  { slug: "tampa-bay", name: "Tampa Bay" },
  { slug: "central-florida", name: "Central Florida" },
] as const;

const core: City[] = [
  {
    slug: "kansas-city",
    name: "Kansas City",
    stateSlug: "missouri",
    county: "Jackson",
    region: "urban",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["64105", "64106", "64108", "64109", "64110", "64111", "64112", "64113", "64114", "64123", "64124", "64127", "64128", "64129", "64130", "64131", "64132", "64133", "64134", "64137", "64138", "64145", "64146"],
    areas: ["Brookside", "Waldo", "Midtown", "Westport", "Crossroads", "Plaza", "Northeast", "Hyde Park", "Waldo", "South KC", "Red Bridge"],
    intro:
      "Kansas City, Missouri, has some of the metro's oldest housing: brick Tudors and bungalows in Brookside and Waldo, large foursquares in Hyde Park and Midtown, and postwar ranches in south Kansas City. Heating and cooling problems follow the age of the house, and many homes have systems that were retrofitted into buildings never designed for central air.",
    housingNotes:
      "Pre-1940 homes often have basement furnaces venting into masonry chimneys, small or missing return air ducts, and upstairs rooms that were added to the duct system as an afterthought. Central air was added later, so coils sit on old furnaces and line sets run through tight chases. South Kansas City's 1950s and 60s ranches are simpler, with basement systems and short duct runs.",
    localIssues: [
      { title: "Hot second floors in older homes", body: "Story-and-a-half bungalows and Tudors lose cooling upstairs because supply ducts are few and returns are missing. A [ductless mini-split](/hvac-services/ductless-mini-splits/) head or return air improvements fix it more reliably than a bigger AC." },
      { title: "Chimney venting after furnace upgrades", body: "When an 80% furnace is replaced with a high-efficiency model, the water heater may be left alone in an oversized masonry chimney. That can cause poor draft and condensation, so a liner is often needed." },
      { title: "Asbestos on old ductwork", body: "Some pre-1980 homes have white asbestos-containing tape or insulation on basement ducts and old boilers. A contractor should identify it before cutting into the ducts." },
    ],
    popularServices: ["furnace-repair", "ac-repair", "furnace-installation", "ductless-mini-splits", "duct-sealing", "ac-installation"],
    nearby: ["kansas-city-ks", "independence", "overland-park", "gladstone"],
    water: "Evergy supplies electricity and Spire supplies natural gas to most homes.",
    permits: "The City of Kansas City, Missouri, requires licensed mechanical contractors and permits for furnace and AC replacement and new ductwork.",
    faqs: [
      { q: "Do I need a permit to replace a furnace in Kansas City, Missouri?", a: "Yes. The city requires a mechanical permit, which the licensed contractor normally pulls." },
      { q: "Why is my bungalow's upstairs so hot?", a: "Most older homes have few upstairs supply ducts and little or no return air up there. Adding a return or a mini-split usually helps more than a bigger air conditioner." },
    ],
    updated: U,
  },
  {
    slug: "independence",
    name: "Independence",
    stateSlug: "missouri",
    county: "Jackson",
    region: "east",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["64050", "64052", "64053", "64054", "64055", "64056", "64057", "64058"],
    areas: ["Englewood", "Fairmount", "Maywood", "Sugar Creek border", "Little Blue Valley", "Crysler"],
    intro:
      "Independence is a mix of early-1900s homes near the historic square, a large stock of postwar ranches and split-levels from the 1950s through the 1970s, and newer subdivisions in the Little Blue Valley. Many homes are on their second or third furnace and air conditioner.",
    housingNotes:
      "Postwar ranches usually have a basement or crawlspace furnace with short duct runs, which makes replacement straightforward. Homes from the 1970s often still have original undersized returns and flex duct in crawlspaces that has sagged or separated over time.",
    localIssues: [
      { title: "Independence Power & Light", body: "Unlike most of the Missouri side, Independence has its own electric utility. Rebate programs and time-of-use options differ from Evergy's, so check current programs before replacing an air conditioner or heat pump." },
      { title: "Crawlspace ductwork", body: "Split-levels and ranches over crawlspaces lose conditioned air through disconnected or crushed flex duct. Sealing and reconnecting it is often the fix for weak rooms and high bills." },
      { title: "Aging 1990s equipment", body: "Many furnaces and ACs installed during the 1990s are now past their service life, and some still use R-22 refrigerant." },
    ],
    popularServices: ["furnace-repair", "ac-repair", "duct-sealing", "furnace-installation", "heat-pump-installation"],
    nearby: ["kansas-city", "blue-springs", "lees-summit"],
    water: "Independence Power & Light supplies electricity and Spire supplies natural gas.",
    permits: "The City of Independence issues mechanical permits and licenses contractors working in the city.",
    faqs: [
      { q: "Does Independence have different utility rebates?", a: "Yes. Independence Power & Light runs its own programs, separate from Evergy. Ask the contractor what applies." },
      { q: "Do I need a permit for AC replacement in Independence?", a: "Generally yes. The contractor pulls the city mechanical permit." },
    ],
    updated: U,
  },
  {
    slug: "lees-summit",
    name: "Lee's Summit",
    stateSlug: "missouri",
    county: "Jackson",
    region: "east",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["64063", "64064", "64081", "64082", "64086"],
    areas: ["Downtown Lee's Summit", "Lakewood", "Raintree", "Longview", "New Longview", "Winterset", "Woods Chapel"],
    intro:
      "Lee's Summit grew quickly from the 1980s onward, and most homes are two-story or reverse-story-and-a-half houses with basements. Downtown has older homes, while Lakewood and Raintree have lake-lot houses that are often larger with multiple systems.",
    housingNotes:
      "Two-story homes from the 1990s and 2000s commonly have a single system in the basement serving three floors, with long supply runs to upstairs bedrooms. Larger homes may have a second system in the attic. Reverse story-and-a-half homes put living space in finished walkout basements that run cool in summer.",
    localIssues: [
      { title: "Upstairs bedrooms that won't cool", body: "One thermostat on the main floor and long duct runs leave upstairs rooms several degrees warmer. Zoning, duct balancing or a second system are the usual solutions." },
      { title: "Attic air handlers", body: "Second systems in attics are hard to service and prone to condensate overflows onto ceilings. A float switch and a clean drain line prevent water damage." },
      { title: "End-of-life 2000s systems", body: "Homes from the building boom of the late 1990s and early 2000s are now due for AC and furnace replacements, often at the same time." },
    ],
    popularServices: ["ac-repair", "zoning-systems", "ac-installation", "furnace-installation", "smart-thermostats"],
    nearby: ["independence", "blue-springs", "kansas-city"],
    water: "Evergy supplies electricity and Spire supplies natural gas to most homes.",
    permits: "The City of Lee's Summit issues mechanical permits for HVAC replacement and requires licensed contractors.",
    faqs: [
      { q: "How do I fix a hot upstairs in a Lee's Summit two-story?", a: "Start with duct balancing and return air. If that isn't enough, zoning or a second system for upstairs is the lasting fix." },
      { q: "Does Lee's Summit require an HVAC permit?", a: "Yes, for furnace and air conditioner replacements. The contractor pulls it." },
    ],
    updated: U,
  },
  {
    slug: "blue-springs",
    name: "Blue Springs",
    stateSlug: "missouri",
    county: "Jackson",
    region: "east",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["64013", "64014", "64015"],
    areas: ["Downtown Blue Springs", "Lake Tapawingo border", "Adams Dairy", "Chapel Ridge", "Burr Oak"],
    intro:
      "Blue Springs is mostly ranch, split-level and two-story homes built from the 1970s through the 2000s, with newer subdivisions to the south and east. Many homes are on the original ductwork with second- or third-generation equipment.",
    housingNotes:
      "Split-level homes, common from the 1970s and 80s, have short runs to the main level but struggle to condition the lower level and upstairs bedrooms evenly. Two-story homes from the 1990s often have basement systems with long attic or joist runs upstairs.",
    localIssues: [
      { title: "Uneven split-level comfort", body: "Lower levels run cold in winter while bedrooms run warm in summer. Damper adjustment, return air and fan settings often help before any equipment change." },
      { title: "Hail-damaged condensers", body: "Spring hail can flatten condenser fins and reduce airflow. Fins can sometimes be combed straight; severe damage may be an insurance claim." },
    ],
    popularServices: ["ac-repair", "furnace-repair", "duct-sealing", "ac-installation", "air-filtration"],
    nearby: ["independence", "lees-summit"],
    water: "Evergy supplies electricity and Spire supplies natural gas.",
    permits: "The City of Blue Springs issues mechanical permits for equipment replacement and requires registered contractors.",
    faqs: [
      { q: "Can hail damage my air conditioner?", a: "Yes. Hail bends condenser fins, which cuts airflow and efficiency. A technician can assess whether it needs fin combing or replacement." },
      { q: "Why is my split-level's lower level always cold?", a: "Cold air settles there and many lower levels have few supplies and returns. Balancing and return air improvements usually help." },
    ],
    updated: U,
  },
  {
    slug: "liberty",
    name: "Liberty",
    stateSlug: "missouri",
    county: "Clay",
    region: "northland",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["64068", "64069"],
    areas: ["Historic downtown", "Clay Hills", "Heritage", "Cooley Lake Road area", "Kansas City North border"],
    intro:
      "Liberty combines a historic downtown around the courthouse square, home to many 19th- and early 20th-century houses, with growing subdivisions of two-story and ranch homes built since the 1990s. Older homes and new ones need very different HVAC work.",
    housingNotes:
      "Historic homes near downtown and William Jewell College often have boilers or retrofitted furnaces with limited ductwork, which makes mini-splits and high-velocity systems common choices for adding air conditioning. Newer subdivisions have standard basement systems with attic runs upstairs.",
    localIssues: [
      { title: "Adding AC to historic homes", body: "Houses with radiators or limited ductwork often get ductless mini-splits or small-duct systems rather than full new duct runs through plaster walls." },
      { title: "Open-country wind exposure", body: "Homes on the edges of town catch strong winter winds that can blow out pilot lights on older equipment or push snow into high-efficiency vent terminations." },
    ],
    popularServices: ["ductless-mini-splits", "furnace-repair", "ac-repair", "heat-pump-installation", "furnace-installation"],
    nearby: ["gladstone", "kansas-city"],
    water: "Evergy supplies electricity and Spire supplies natural gas to most homes.",
    permits: "The City of Liberty issues mechanical permits and licenses contractors.",
    faqs: [
      { q: "How can I add AC to an older Liberty home with radiators?", a: "Ductless mini-splits or small-duct high-velocity systems avoid tearing into plaster walls." },
      { q: "Do I need a permit in Liberty?", a: "Yes, for furnace and AC replacement. Your contractor pulls it." },
    ],
    updated: U,
  },
  {
    slug: "gladstone",
    name: "Gladstone",
    stateSlug: "missouri",
    county: "Clay",
    region: "northland",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["64116", "64118", "64119"],
    areas: ["Linden", "Oak Grove", "Happy Rock", "Antioch corridor"],
    intro:
      "Gladstone was largely built in the 1950s through the 1970s, with ranch, split-level and raised-ranch homes across compact neighborhoods. Most homes have basement systems and the original sheet-metal ductwork.",
    housingNotes:
      "The original ductwork in these homes is usually sound but leaky at the joints, and returns are often limited to a single central grille. Many homes are on their third furnace, and chimneys originally built for older furnaces may no longer suit today's equipment.",
    localIssues: [
      { title: "Single central returns", body: "One hallway return makes bedrooms with closed doors run hot or cold. Transfer grilles or added returns balance the house." },
      { title: "Chimney-vented furnaces and water heaters", body: "Many homes still vent both appliances through a masonry chimney. Changing the furnace can affect water heater venting, so the contractor should check draft." },
    ],
    popularServices: ["furnace-repair", "ac-repair", "furnace-installation", "duct-sealing", "furnace-tune-up"],
    nearby: ["liberty", "kansas-city"],
    water: "Evergy supplies electricity and Spire supplies natural gas.",
    permits: "The City of Gladstone issues mechanical permits and requires licensed contractors for HVAC replacement.",
    faqs: [
      { q: "Why do bedrooms get hot with the doors closed?", a: "With one central return, closed doors cut off return air. Transfer grilles or jumper ducts fix that." },
      { q: "Is my furnace venting safe with my water heater?", a: "A technician can check draft and CO. Changing to a high-efficiency furnace often requires a chimney liner for the water heater." },
    ],
    updated: U,
  },
  {
    slug: "overland-park",
    name: "Overland Park",
    stateSlug: "kansas",
    county: "Johnson",
    region: "johnson",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["66204", "66207", "66210", "66212", "66213", "66221", "66223", "66209", "66211", "66214"],
    areas: ["Downtown Overland Park", "Nall Hills", "Corporate Woods", "Deer Creek", "Blue Valley", "Hawthorne Valley", "Pinehurst", "Wycliff"],
    intro:
      "Overland Park stretches from 1950s ranches and split-levels north of I-435 to large two-story homes built from the 1980s through today in south Overland Park and the Blue Valley area. The north end deals with aging original ductwork; the south end deals with big homes, multiple systems and hot upstairs rooms.",
    housingNotes:
      "North Overland Park homes typically have a basement furnace with short runs and a single return. South Overland Park homes often have two systems, one in the basement and one in the attic, or a single large system with zoning. Many 1990s homes are now replacing their second set of equipment.",
    localIssues: [
      { title: "Two-system homes", body: "Attic systems in south Overland Park face high summer temperatures and are prone to condensate overflow. A float switch and annual drain cleaning prevent ceiling damage." },
      { title: "Hail and cottonwood", body: "Spring hail and cottonwood fluff clog and damage condenser coils, especially in neighborhoods along Tomahawk and Indian creeks." },
      { title: "Postwar returns", body: "Older north-end homes often have undersized returns that limit how well a new high-efficiency system can perform." },
    ],
    popularServices: ["ac-repair", "ac-installation", "furnace-installation", "zoning-systems", "heat-pump-installation", "ac-tune-up"],
    nearby: ["leawood", "olathe", "lenexa", "kansas-city"],
    water: "Evergy supplies electricity and Kansas Gas Service supplies natural gas.",
    permits: "The City of Overland Park issues mechanical permits, and contractors must hold a Johnson County contractor license.",
    faqs: [
      { q: "Do I need a permit to replace my AC in Overland Park?", a: "Yes. The contractor needs a Johnson County license and pulls the city permit." },
      { q: "Should my attic air handler have a float switch?", a: "Yes. It shuts the system off if the drain clogs, preventing water damage to ceilings." },
    ],
    updated: U,
  },
  {
    slug: "olathe",
    name: "Olathe",
    stateSlug: "kansas",
    county: "Johnson",
    region: "johnson",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["66061", "66062", "66051"],
    areas: ["Downtown Olathe", "Cedar Creek", "Prairie Haven", "Heritage", "Arbor Creek", "Brittany Hill"],
    intro:
      "Olathe is the county seat, with an older core around downtown and some of the metro's fastest-growing subdivisions to the south and west. Most homes were built after 1980 and use basement systems, with newer builds often including attic air handlers or heat pumps.",
    housingNotes:
      "Cedar Creek and other newer neighborhoods have larger homes with high ceilings and big windows that heat up in the afternoon sun. Builder-grade systems installed in the 2000s building boom are now reaching replacement age, often at the same time as the ductwork shows leaks.",
    localIssues: [
      { title: "Builder-grade equipment reaching end of life", body: "Many homes built from 1998 to 2008 have single-stage builder-grade equipment. Replacement is a chance to right-size and upgrade to two-stage or a heat pump." },
      { title: "West-facing great rooms", body: "Large windows on west- and south-facing great rooms overheat in the late afternoon. Zoning or duct changes help more than oversized equipment." },
    ],
    popularServices: ["ac-installation", "furnace-installation", "heat-pump-installation", "ac-repair", "zoning-systems"],
    nearby: ["overland-park", "lenexa", "shawnee"],
    water: "Evergy supplies electricity and Kansas Gas Service supplies natural gas.",
    permits: "The City of Olathe issues mechanical permits, and contractors need a Johnson County contractor license.",
    faqs: [
      { q: "Is it time to replace my 2005 builder-grade AC?", a: "It's near the end of its expected life. If it needs a major repair or uses R-22, compare replacement costs." },
      { q: "Does Olathe require licensed contractors?", a: "Yes. Contractors need a Johnson County license and a city permit for replacements." },
    ],
    updated: U,
  },
  {
    slug: "lenexa",
    name: "Lenexa",
    stateSlug: "kansas",
    county: "Johnson",
    region: "johnson",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["66215", "66219", "66220", "66227"],
    areas: ["Old Town Lenexa", "City Center", "Falcon Ridge", "Canyon Creek", "Sar-Ko-Par"],
    intro:
      "Lenexa has older 1960s and 70s neighborhoods east of I-435, and newer homes to the west around City Center and Canyon Creek. Its housing is mostly two-story and ranch homes with basements.",
    housingNotes:
      "East Lenexa homes have basement furnaces with original ductwork and often limited upstairs returns. West Lenexa homes from the 2000s and 2010s tend to have higher-efficiency equipment, attic ductwork and sealed, tighter construction that makes ventilation and humidity control more important.",
    localIssues: [
      { title: "Tight new homes and humidity", body: "Newer, tightly built homes can hold summer humidity and winter moisture. Dehumidifiers, humidifiers and ventilation matter more than in older, leakier homes." },
      { title: "Older east-side ductwork", body: "Leaky joints in 1960s and 70s ductwork waste conditioned air into basements and wall cavities." },
    ],
    popularServices: ["ac-repair", "whole-house-humidifiers", "duct-sealing", "furnace-repair", "smart-thermostats"],
    nearby: ["olathe", "shawnee", "overland-park"],
    water: "Evergy supplies electricity and Kansas Gas Service supplies natural gas.",
    permits: "The City of Lenexa issues mechanical permits, and contractors need a Johnson County contractor license.",
    faqs: [
      { q: "Why is my new Lenexa home humid in summer?", a: "Tight construction and an oversized AC that short-cycles can leave humidity high. A dehumidifier or right-sized system helps." },
      { q: "Do I need a permit in Lenexa?", a: "Yes, for furnace and AC replacement." },
    ],
    updated: U,
  },
  {
    slug: "shawnee",
    name: "Shawnee",
    stateSlug: "kansas",
    county: "Johnson",
    region: "johnson",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["66203", "66216", "66217", "66218", "66226"],
    areas: ["Downtown Shawnee", "Western Shawnee", "Clear Creek", "Monticello", "Shawnee Mission Park area"],
    intro:
      "Shawnee has postwar and 1970s homes in the east near downtown and larger homes built since the 1990s in western Shawnee. Hilly lots and wooded ravines along Clear Creek shape how homes are built and how outdoor units are placed.",
    housingNotes:
      "Walkout basements are common on sloped lots, with finished lower levels that run cool and main levels that run warm. Outdoor units on hillsides and under trees collect leaves and debris faster than on flat lots.",
    localIssues: [
      { title: "Walkout basements", body: "Finished walkouts often need their own zone or a mini-split for comfort, since the main system is sized for upstairs loads." },
      { title: "Tree debris on condensers", body: "Wooded lots load condenser coils with leaves, seeds and cottonwood. Clearing and an annual coil cleaning keep the unit efficient." },
    ],
    popularServices: ["ac-tune-up", "ac-repair", "ductless-mini-splits", "furnace-repair", "zoning-systems"],
    nearby: ["lenexa", "olathe", "kansas-city-ks"],
    water: "Evergy supplies electricity and Kansas Gas Service supplies natural gas.",
    permits: "The City of Shawnee issues mechanical permits and requires a Johnson County contractor license.",
    faqs: [
      { q: "How do I heat and cool a walkout basement evenly?", a: "Zoning or a dedicated mini-split is the usual fix, since one thermostat can't balance both levels." },
      { q: "Do I need a permit in Shawnee?", a: "Yes, for replacements. The contractor pulls it." },
    ],
    updated: U,
  },
  {
    slug: "leawood",
    name: "Leawood",
    stateSlug: "kansas",
    county: "Johnson",
    region: "johnson",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["66206", "66209", "66211", "66224"],
    areas: ["Old Leawood", "Leawood South", "Ironhorse", "Hallbrook", "Mission Farms"],
    intro:
      "Leawood is known for larger homes, from mid-century ranches in Old Leawood to large estate homes in Hallbrook and south Leawood. Many homes have multiple systems, zoning, and high-end equipment that needs careful service.",
    housingNotes:
      "Old Leawood's 1950s and 60s ranches were often expanded with additions that the original system doesn't reach well. Newer large homes may run three or more systems, including attic units, with zoning and variable-speed equipment.",
    localIssues: [
      { title: "Additions beyond the original system", body: "Additions on older ranches are often tied into ductwork that was never sized for them. A separate mini-split or system is usually the cleaner fix." },
      { title: "Variable-speed and communicating systems", body: "Premium systems with communicating controls need technicians familiar with the specific brand's diagnostics." },
    ],
    popularServices: ["ac-installation", "zoning-systems", "ductless-mini-splits", "heat-pump-installation", "air-filtration"],
    nearby: ["overland-park", "kansas-city"],
    water: "Evergy supplies electricity and Kansas Gas Service supplies natural gas.",
    permits: "The City of Leawood issues mechanical permits, and contractors need a Johnson County contractor license.",
    faqs: [
      { q: "Can my addition share the main HVAC system?", a: "Only if the equipment and ducts have spare capacity. Many additions work better with a dedicated mini-split." },
      { q: "Do communicating systems need special service?", a: "They use brand-specific diagnostics, so ask for a technician familiar with your equipment." },
    ],
    updated: U,
  },
  {
    slug: "kansas-city-ks",
    name: "Kansas City",
    stateSlug: "kansas",
    county: "Wyandotte",
    region: "urban",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["66101", "66102", "66103", "66104", "66105", "66106", "66109", "66111", "66112"],
    areas: ["Strawberry Hill", "Rosedale", "Argentine", "Armourdale", "Piper", "Turner", "Quindaro"],
    intro:
      "Kansas City, Kansas, has some of the metro's oldest neighborhoods, including Strawberry Hill, Rosedale and Argentine, alongside postwar homes and newer subdivisions in the Piper area to the west. Heating and cooling needs range from century-old houses with limited ductwork to newly built homes.",
    housingNotes:
      "Early-1900s homes may still have converted gravity furnaces, few returns and window air conditioners. Postwar homes have basement furnaces and simple duct layouts. Piper's newer homes have standard modern systems with attic runs.",
    localIssues: [
      { title: "BPU electric service", body: "The Board of Public Utilities, not Evergy, supplies electricity in most of Kansas City, Kansas. Rebate and program options differ, so check BPU's current programs." },
      { title: "Older homes without central air", body: "Homes that still rely on window units are good candidates for mini-splits or small-duct systems rather than new ductwork through plaster walls." },
    ],
    popularServices: ["furnace-repair", "ac-repair", "ductless-mini-splits", "furnace-installation", "ac-installation"],
    nearby: ["kansas-city", "shawnee"],
    water: "The Board of Public Utilities (BPU) supplies electricity and Kansas Gas Service supplies natural gas.",
    permits: "The Unified Government of Wyandotte County and Kansas City, Kansas, issues mechanical permits and licenses contractors.",
    faqs: [
      { q: "Who supplies electricity in Kansas City, Kansas?", a: "The Board of Public Utilities (BPU) serves most of the city." },
      { q: "How do I add central air to a house with no ducts?", a: "Ductless mini-splits or small-duct systems avoid major wall work." },
    ],
    updated: U,
  },
];

export const cities: City[] = [...core, ...citiesMore].map((c) => ({ ...c, localIssues: [...c.localIssues, ...(extraIssues[c.slug] ?? [])] }));
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
    citySlug: "kansas-city",
    serviceSlug: "furnace-installation",
    status: "PUBLISHED",
    h1: "Furnace replacement in Kansas City, Missouri",
    seoTitle: "Furnace Replacement in Kansas City, MO",
    metaDescription:
      "Furnace replacement for Kansas City, Missouri homes: basement furnaces, chimney venting, liners and city mechanical permits.",
    answer:
      "Most Kansas City, Missouri furnace replacements are in basements of older homes, where the key decision is venting: keep an 80% furnace in the chimney, or move to a 96% model with PVC venting and a liner for the water heater.",
    localAngle: [
      "Brookside, Waldo and Midtown homes commonly vent the furnace and water heater into a shared masonry chimney. When a high-efficiency furnace moves to PVC venting, the water heater is left alone in a chimney built for much more heat, which can cause poor draft and condensation damage. Contractors usually add a chimney liner or change the water heater venting at the same time.",
      "Older homes also tend to have small return air paths. A new furnace with a variable-speed blower performs best when returns are improved, so ask the contractor to measure static pressure. Replacements inside city limits need a Kansas City, Missouri mechanical permit.",
    ],
    localFaqs: [
      { q: "Do I need a chimney liner with a new furnace in Kansas City?", a: "Often, if you switch to a high-efficiency furnace and the water heater stays in the chimney. The contractor should check draft and size." },
    ],
    updated: U,
  },
  {
    citySlug: "overland-park",
    serviceSlug: "ac-installation",
    status: "PUBLISHED",
    h1: "AC replacement in Overland Park",
    seoTitle: "AC Replacement in Overland Park, KS",
    metaDescription:
      "Air conditioner replacement for Overland Park homes: right-sizing two-story homes, attic systems, hail damage and Johnson County licensing.",
    answer:
      "In Overland Park, AC replacement often means right-sizing equipment in two-story homes built in the 1990s and 2000s, and deciding whether an attic system should be replaced at the same time as the basement unit.",
    localAngle: [
      "South Overland Park homes were often fitted with oversized builder-grade air conditioners, which cool quickly but leave humid, clammy air in July. A load calculation at replacement time frequently shows a smaller, two-stage unit will keep the house drier and more even.",
      "Spring hail storms regularly damage condensers across Johnson County. If your unit was damaged in a storm, document it before replacement, because homeowner's insurance may cover part of the cost. Contractors working in the city need a Johnson County license and an Overland Park mechanical permit.",
    ],
    localFaqs: [
      { q: "Will insurance cover a hail-damaged AC in Overland Park?", a: "Sometimes. Photograph the damage and talk to your insurer before replacing the unit." },
    ],
    updated: U,
  },
  {
    citySlug: "lees-summit",
    serviceSlug: "zoning-systems",
    status: "PUBLISHED",
    h1: "HVAC zoning in Lee's Summit",
    seoTitle: "HVAC Zoning Systems in Lee's Summit, MO",
    metaDescription:
      "HVAC zoning for Lee's Summit two-story and reverse story-and-a-half homes: fixing hot upstairs bedrooms and cool walkout basements.",
    answer:
      "Lee's Summit's two-story and reverse story-and-a-half homes often have one system serving three levels. Zoning adds dampers and thermostats so upstairs bedrooms and walkout basements each get the air they need.",
    localAngle: [
      "Many Lee's Summit homes built from the 1990s through the 2000s put a single thermostat on the main floor, so the system shuts off before upstairs bedrooms cool and runs too long for the walkout basement. A two- or three-zone system lets each level call for heating or cooling on its own.",
      "Zoning works best when the equipment is two-stage or variable-speed, so it's often added when the air conditioner or furnace is replaced. Contractors need a City of Lee's Summit permit for the equipment work.",
    ],
    localFaqs: [
      { q: "Can I add zoning without replacing my system?", a: "Sometimes, if the ducts are accessible and the blower can handle it. Many homeowners add zoning at replacement time." },
    ],
    updated: U,
  },
  // Wave 4: strongest combinations in the highest-payout metros.
  {
    citySlug: "las-vegas",
    serviceSlug: "ac-repair",
    status: "PUBLISHED",
    h1: "AC repair in Las Vegas",
    seoTitle: "AC Repair in Las Vegas, NV",
    metaDescription:
      "Air conditioner repair in Las Vegas: heat-killed capacitors and fan motors, hot attic ducts, dust-clogged coils, and city vs. Clark County permits.",
    answer:
      "Most Las Vegas AC breakdowns happen in June through August, when capacitors, contactors and condenser fan motors fail under extreme heat. A technician tests these parts, checks refrigerant and airflow, and quotes the repair before starting.",
    localAngle: [
      "With summer highs above 105°F and nights that often stay above 85°F, Las Vegas air conditioners can run almost nonstop for weeks. That constant duty is why weak capacitors and worn contactors fail here more often than in milder cities, and why a failing part can quickly take out a compressor if the system keeps running. If the outdoor fan stops but the unit hums, switch the system off and call.",
      "Two-story homes in Summerlin, Centennial Hills and Mountains Edge often have a second air handler in an attic that can exceed 140°F, so upstairs repairs take longer and duct leaks there cost more cooling. Many valley addresses are in unincorporated Clark County rather than the City of Las Vegas, which matters for any repair that needs a permit.",
    ],
    localFaqs: [
      { q: "What's the most common AC repair in Las Vegas?", a: "Capacitor and contactor replacement, followed by condenser fan motors. Testing them in spring prevents many summer breakdowns." },
    ],
    updated: "2026-10-06",
  },
  {
    citySlug: "phoenix",
    serviceSlug: "ac-repair",
    status: "PUBLISHED",
    h1: "AC repair in Phoenix",
    seoTitle: "AC Repair in Phoenix, AZ",
    metaDescription:
      "Air conditioner repair in Phoenix: summer part failures, rooftop units, monsoon dust, refrigerant leaks and checking an Arizona ROC license.",
    answer:
      "Phoenix air conditioners fail most often between June and September, when 110-degree days push capacitors, contactors and fan motors past their limits. A technician diagnoses the failed part and quotes the repair, and a licensed contractor's Arizona ROC number is worth checking first.",
    localAngle: [
      "Phoenix has one of the longest cooling seasons in the country, and many systems run from April into October. Rooftop package units on older central Phoenix homes sit in direct sun on the roof, while split systems in newer homes push air through ducts in attics that bake all summer. Both make airflow and refrigerant problems show up quickly as warm air at the vents.",
      "Monsoon storms and haboobs coat condenser coils with dust, which raises operating pressure and power use. After a big storm, check the filter and rinse the outdoor coil with the power off. Contractors performing repairs must be licensed by the Arizona Registrar of Contractors, and the ROC website shows license status and complaint history.",
    ],
    localFaqs: [
      { q: "How fast should I get AC repair in a Phoenix summer?", a: "Treat it as urgent, especially for elderly residents, infants or anyone with health conditions. Keep blinds closed and stay on the lowest floor while you wait." },
    ],
    updated: "2026-10-06",
  },
  {
    citySlug: "salt-lake-city",
    serviceSlug: "furnace-installation",
    status: "PUBLISHED",
    h1: "Furnace replacement in Salt Lake City",
    seoTitle: "Furnace Replacement in Salt Lake City, UT",
    metaDescription:
      "Furnace replacement in Salt Lake City: altitude setup, venting in older Avenues and Sugar House homes, inversion-season filtration and permits.",
    answer:
      "Replacing a furnace in Salt Lake City means setting it up for about 4,300 feet of elevation, planning venting for older homes, and choosing filtration that helps during winter inversions. Most installs take a day and need a city mechanical permit.",
    localAngle: [
      "Many Sugar House and Liberty Wells bungalows have basement furnaces that vent into masonry chimneys shared with the water heater. Moving to a high-efficiency furnace switches it to PVC venting, which can leave the water heater alone in a chimney that is now too large for proper draft, so a liner or venting change is often part of the job. Homes in the Avenues may have older boilers, where a furnace replacement is not a like-for-like swap.",
      "Because winter inversions trap pollution in the valley for days, replacement is a good time to add a media filter cabinet that holds a MERV 11 to 13 filter without restricting airflow. Installers also follow the manufacturer's altitude instructions, and contractors are licensed through the Utah Division of Professional Licensing.",
    ],
    localFaqs: [
      { q: "Does a new furnace in Salt Lake City need altitude adjustment?", a: "Often. Installers follow the manufacturer's high-altitude instructions and check combustion after startup." },
    ],
    updated: "2026-10-06",
  },
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
    updated: "2026-10-06",
  },
  {
    citySlug: "aurora",
    serviceSlug: "ac-repair",
    status: "PUBLISHED",
    h1: "AC repair in Aurora, Colorado",
    seoTitle: "AC Repair in Aurora, CO",
    metaDescription:
      "Air conditioner repair in Aurora, Colorado: hail-damaged condensers, failed capacitors, frozen coils and upstairs heat in two-story homes.",
    answer:
      "In Aurora, AC repairs often follow hail storms that flatten condenser fins, along with the usual summer failures: capacitors, contactors, fan motors and frozen coils from dirty filters.",
    localAngle: [
      "Aurora and the eastern metro see some of the most frequent hail in Colorado. Hail can bend condenser fins enough to cut airflow and raise operating pressure, which makes the system run longer and can shorten compressor life. A technician can comb fins on light damage and document heavier damage for an insurance claim.",
      "Two-story homes in southeast Aurora often push their air conditioners hard to cool upstairs bedrooms, and cottonwood and dust from the plains edge load coils quickly. An annual coil cleaning and a mid-summer filter change prevent many breakdown calls. Contractors need an Aurora license for work that requires a permit.",
    ],
    localFaqs: [
      { q: "Can hail-bent fins be repaired?", a: "Light damage can be combed straight. Severe damage usually means a coil or condenser replacement, which may be covered by insurance." },
    ],
    updated: "2026-10-06",
  },
  // Wave 4 batch 2: a mix of services so same-service siblings stay few and distinct.
  {
    citySlug: "houston",
    serviceSlug: "ac-repair",
    status: "PUBLISHED",
    h1: "AC repair in Houston",
    seoTitle: "AC Repair in Houston, TX",
    metaDescription:
      "Air conditioner repair in Houston: humidity problems, clogged attic drain pans, flood-damaged units, refrigerant leaks and checking a TDLR license.",
    answer:
      "In Houston, many AC repair calls trace back to humidity: clogged condensate drains that trip float switches, frozen coils, and systems that cool but leave the house sticky. A technician checks drains, airflow and refrigerant charge before quoting, and should hold a Texas TDLR air conditioning license.",
    localAngle: [
      "Houston's long, muggy season means air conditioners remove large amounts of water every day. When an attic drain line clogs with algae, the safety switch shuts the system off or the secondary pan overflows into the ceiling. Clearing and treating the drain often restores cooling the same day, and adding a cleanout makes the next flush easier.",
      "After tropical storms and flooding, outdoor units that sat in water need inspection before they're restarted, because electrical components and the compressor can be damaged. In Houston's deregulated electricity market, a high summer bill can also signal a struggling system: low refrigerant, a dirty coil or leaky attic ducts all increase run time in the heat.",
    ],
    localFaqs: [
      { q: "Why does my Houston AC shut off with water in the pan?", a: "The condensate drain is likely clogged, tripping the float switch. Clearing and treating the drain usually restores cooling." },
    ],
    updated: "2026-10-07",
  },
  {
    citySlug: "tampa",
    serviceSlug: "ac-tune-up",
    status: "PUBLISHED",
    h1: "AC tune-up in Tampa",
    seoTitle: "AC Tune-Up & Maintenance in Tampa, FL",
    metaDescription:
      "AC maintenance for Tampa homes: twice-a-year service, condensate drain flushing, salt-air coil care near the bay and hurricane-season prep.",
    answer:
      "Because Tampa air conditioners run most of the year, many homeowners schedule maintenance twice: in spring before the heat and in late summer or fall. A Tampa tune-up should include flushing the condensate drain, cleaning the coils, testing the capacitor and checking refrigerant charge.",
    localAngle: [
      "Algae growth in condensate lines is the most common reason Tampa systems shut down, so drain flushing and treatment is the most valuable part of a visit. Homes on Davis Islands, in South Tampa and near the bay also benefit from rinsing salt deposits off outdoor coils, which corrode faster in salty air.",
      "A spring visit is also a good time for hurricane-season preparation: checking that the outdoor unit is securely anchored or elevated where required, confirming surge protection, and making sure the electrical disconnect is in good shape. After a storm, a quick inspection before restarting the system can prevent damage from water or debris.",
    ],
    localFaqs: [
      { q: "How often should Tampa homes get AC maintenance?", a: "Twice a year is common because systems run most of the year: once in spring and once in late summer or fall." },
    ],
    updated: "2026-10-07",
  },
  {
    citySlug: "sacramento",
    serviceSlug: "heat-pump-installation",
    status: "PUBLISHED",
    h1: "Heat pump installation in Sacramento",
    seoTitle: "Heat Pump Installation in Sacramento, CA",
    metaDescription:
      "Heat pump installation in Sacramento: replacing gas furnaces and old AC, SMUD programs, Title 24 permits and duct testing, and sizing for valley heat.",
    answer:
      "Sacramento's hot summers and mild winters suit heat pumps well, and many homeowners replace an aging air conditioner and gas furnace with a single heat pump system. Installations typically need a permit and Title 24 duct testing, and SMUD has offered heat pump rebates.",
    localAngle: [
      "Winter lows in Sacramento rarely drop far below freezing, so a properly sized heat pump can handle the heating season without gas backup in most homes. The bigger sizing challenge is summer: long stretches above 100°F mean the system must be sized for cooling, with attention to attic ducts that lose capacity in the heat.",
      "Because SMUD, the city's electric utility, has run programs encouraging homes to switch from gas to electric heating, it's worth checking current rebates before buying. California's Title 24 energy code usually requires a permit, duct leakage testing and third-party verification, so ask whether these are included in the quote. Older homes in Land Park and East Sacramento may need duct repairs to pass.",
    ],
    localFaqs: [
      { q: "Can a heat pump replace my gas furnace in Sacramento?", a: "In most homes, yes. Sacramento's mild winters are well within a modern heat pump's range." },
    ],
    updated: "2026-10-07",
  },
  {
    citySlug: "boston",
    serviceSlug: "ductless-mini-splits",
    status: "PUBLISHED",
    h1: "Ductless mini-splits in Boston",
    seoTitle: "Ductless Mini-Split Installation in Boston, MA",
    metaDescription:
      "Ductless mini-splits for Boston brownstones, condos and triple-deckers: adding cooling to radiator-heated homes, condo approvals and cold-climate heat pumps.",
    answer:
      "Ductless mini-splits are the most common way to add air conditioning to Boston's brownstones, condos and triple-deckers, which usually have radiator heat and no ductwork. Cold-climate models also provide efficient heat, often letting the boiler run less.",
    localAngle: [
      "Most Boston homes were built long before central air, with steam or hot-water radiators and no ducts. Mini-splits need only a small hole for the refrigerant line, so heads can be mounted in bedrooms and living rooms without opening plaster walls. Outdoor units typically go on a rear deck, flat roof or wall bracket.",
      "Condo buildings usually require association approval for outdoor units and line-set routing, and homes in historic districts like Beacon Hill or the South End may need review of anything visible from the street. Massachusetts efficiency programs have offered heat pump incentives, and many owners use mini-splits for spring and fall heating while keeping the boiler for the coldest weather.",
    ],
    localFaqs: [
      { q: "Do I need condo board approval for a mini-split in Boston?", a: "Usually. Most associations regulate outdoor units and exterior wall penetrations." },
    ],
    updated: "2026-10-07",
  },
  {
    citySlug: "dallas",
    serviceSlug: "ac-installation",
    status: "PUBLISHED",
    h1: "AC replacement in Dallas",
    seoTitle: "AC Replacement & Installation in Dallas, TX",
    metaDescription:
      "Air conditioner replacement in Dallas: hail-damaged condensers and insurance, sizing for 100-degree summers, attic ducts, permits and TDLR licensing.",
    answer:
      "Many Dallas AC replacements follow hail damage or a failed compressor after years of 100-degree summers. A good replacement starts with a load calculation, checks the attic ductwork, and includes a City of Dallas permit pulled by a TDLR-licensed contractor.",
    localAngle: [
      "North Texas hail can crush condenser coils and fins badly enough that replacement is more practical than repair. If a storm caused the damage, photograph it and contact your insurer before the old unit is removed, since adjusters often want to see it. Some homeowners use the replacement to upgrade efficiency or switch to a heat pump.",
      "Because Dallas summers bring long stretches near 100°F, and attic temperatures run even higher, the new system should be sized with a Manual J load calculation rather than matched to the old unit. Sealing and insulating attic ducts at the same time often does more for upstairs comfort than buying a larger air conditioner.",
    ],
    localFaqs: [
      { q: "Should I replace my hail-damaged AC or repair it?", a: "Light fin damage can be repaired; crushed coils usually mean replacement. Document the damage for insurance first." },
    ],
    updated: "2026-10-07",
  },
  {
    citySlug: "colorado-springs",
    serviceSlug: "furnace-repair",
    status: "PUBLISHED",
    h1: "Furnace repair in Colorado Springs",
    seoTitle: "Furnace Repair in Colorado Springs, CO",
    metaDescription:
      "Furnace repair in Colorado Springs: altitude-related ignition problems, cold-front breakdowns, downslope winds and Pikes Peak Regional permits.",
    answer:
      "Colorado Springs furnace calls spike when the first strong cold fronts arrive in fall. Common causes are dirty flame sensors, failed ignitors and pressure switch problems, and at 6,000 feet a furnace that wasn't set up for altitude can overheat or burn poorly.",
    localAngle: [
      "Temperatures in Colorado Springs can drop dramatically within hours when a cold front comes off the mountains, and furnaces that sat idle all summer are often the ones that fail. A fall check of the flame sensor, ignitor and venting prevents most of these breakdowns.",
      "At this elevation, furnaces must be set up following the manufacturer's high-altitude instructions. A furnace that wasn't adjusted can trip limit switches, produce soot or raise carbon monoxide levels, so a technician should check gas pressure and combustion as part of any repair. West-side homes exposed to strong downslope winds can also see vent terminations blown out or iced over.",
    ],
    localFaqs: [
      { q: "Why does my furnace keep shutting off in Colorado Springs?", a: "Common causes are a dirty flame sensor, a clogged filter tripping the limit switch, or incorrect altitude setup. A technician can test each." },
    ],
    updated: "2026-10-07",
  },
];

export const publishedCityServices = cityServices.filter((cs) => cs.status === "PUBLISHED");
