import type { Faq } from "./types";

// Extra local issues merged into city records (keeps the base files readable).
export const extraIssues: Record<string, { title: string; body: string }[]> = {
  lakewood: [
    { title: "Foothill smoke and filtration", body: "West Lakewood sits right against the foothills, so smoke from mountain wildfires often reaches it first. Homes that rely on swamp coolers have to shut them off on smoky days, and a sealed central system with a MERV 11 to 13 media filter keeps indoor air cleaner." },
  ],
  arvada: [
    { title: "Swamp coolers in Olde Town and central Arvada", body: "Many ranches near Olde Town still have roof-mounted evaporative coolers dropping into a hallway ceiling grille. Winterizing matters here: a cooler left connected can freeze its water line or leak cold air all winter through an open damper." },
  ],
  westminster: [
    { title: "Split jurisdiction", body: "Westminster straddles Adams and Jefferson counties, and some nearby addresses are actually unincorporated. The contractor confirms which building department issues the permit before scheduling the install." },
    { title: "Hail and cottonwood near the reservoirs", body: "Neighborhoods around Standley Lake and the Big Dry Creek trail see cottonwood fluff every June and regular hail storms. Both reduce airflow through the condenser coil, raising run times and power use until the coil is cleaned or the fins are straightened." },
  ],
  thornton: [
    { title: "First replacements in newer subdivisions", body: "Subdivisions built in north Thornton through the late 1990s and 2000s are reaching the age when original furnaces and air conditioners fail. Many owners use the first replacement to add a heat pump, a better filter cabinet or a smart thermostat rather than a like-for-like swap." },
  ],
  littleton: [
    { title: "Historic downtown homes", body: "The Victorian and early 20th-century homes around Main Street often have boilers or small basement furnaces and no central air. Mini-splits and small-duct systems are the usual way to add cooling without disturbing historic interiors." },
  ],
  englewood: [
    { title: "Swamp coolers on small ranches", body: "Englewood's compact postwar ranches often still use a roof cooler. Converting to a heat pump usually works on the existing furnace ducts, though small returns may need enlarging." },
    { title: "Aging furnaces in small basements", body: "Many Englewood bungalows and postwar homes have furnaces squeezed into small basements or closets next to the water heater. Replacement needs careful measuring, correct combustion air and a venting check, because shared chimneys can backdraft when the furnace changes." },
  ],
  centennial: [
    { title: "Aging 1970s and 80s split-levels", body: "Walnut Hills and Homestead split-levels often run warm upstairs and cool downstairs. Damper balancing, extra returns and a variable-speed blower even out the levels." },
    { title: "Cottonwood and trail-side homes", body: "Homes along the High Line Canal and Big Dry Creek trails sit under mature cottonwoods, which pack condenser coils with fluff each June. A spring coil cleaning and a mid-summer rinse keep the air conditioner from running longer and using more power than it needs to." },
  ],
  parker: [
    { title: "Hail on the Cherry Creek corridor", body: "Parker sits in a busy hail corridor along Cherry Creek. Condensers and heat pumps with bent fins lose efficiency, and many owners add coil guards or schedule an inspection after major storms so damage is documented for insurance while it is still fresh." },
  ],
  "castle-rock": [
    { title: "Dry air at 6,200 feet", body: "Castle Rock's winter air is extremely dry, which causes static shocks, cracked wood trim and dry sinuses. A furnace-mounted humidifier set to 30 to 35 percent helps, as long as it is turned down on the coldest nights to prevent window condensation." },
  ],
  boulder: [
    { title: "Historic district rules", body: "Homes in Mapleton Hill, Whittier and other landmark districts may need design review for outdoor equipment visible from the street, so condenser and heat pump placement is planned before installation." },
    { title: "Chinook winds and cold snaps", body: "Boulder's downslope winds can gust well over 60 mph, and temperatures can swing from 60 degrees to below zero within days. Outdoor units need secure mounting and clear surroundings, and heat pumps should be sized with backup heat for the coldest nights." },
  ],
};

// Extra authoritative FAQs merged into each city record for AEO, GEO, and search intent satisfaction.
export const extraFaqs: Record<string, Faq[]> = {
  denver: [
    {
      q: "What are Denver's rules on replacing a boiler with a mini-split?",
      a: "Denver allows ductless mini-splits as primary or supplemental heating. Mechanical permits are issued by Denver Community Planning and Development, and a dedicated electrical disconnect circuit is required by the electrical code.",
    },
    {
      q: "Can I add central air to a brick Denver Square or Victorian home without ducts?",
      a: "Yes. Ductless mini-split heat pumps or high-velocity small-duct systems (such as Unico) allow older homes with radiators to add cooling without cutting up historic lath and plaster walls.",
    },
  ],
  aurora: [
    {
      q: "How do I protect my Aurora AC outdoor condenser from plains hail?",
      a: "Install hail guards or protective coil mesh covers, and ensure outdoor units have at least 18 to 24 inches of clear airflow on all sides. After major hailstorms, check for bent aluminum fins.",
    },
    {
      q: "Are there heat pump rebates available in Aurora?",
      a: "Aurora homeowners served by Xcel Energy qualify for utility heat pump rebates alongside Colorado state Clean Heat tax credits when replacing old air conditioners or furnaces with qualifying cold-climate models.",
    },
  ],
  lakewood: [
    {
      q: "What permits does Lakewood require for HVAC installation?",
      a: "The City of Lakewood Building Division requires mechanical permits for furnace, AC, and heat pump installations. Contractors must hold an active Lakewood mechanical contractor license.",
    },
    {
      q: "Can a Lakewood postwar ranch handle central air on original 1950s ductwork?",
      a: "Most 1950s ranches have ductwork sized for heating. An HVAC technician tests static pressure, and often adding a dedicated return grille in a central hallway allows modern central AC without full duct replacement.",
    },
  ],
  arvada: [
    {
      q: "How does west Arvada foothill wind affect heat pumps and furnace exhaust vents?",
      a: "High downslope winds near the foothills can gust over 50 mph. Outdoor condensers require secure pad bolting, and high-efficiency furnace PVC flue vents must use wind-baffle tee terminations to prevent pressure switch lockouts.",
    },
    {
      q: "Do Arvada homes with swamp coolers need roof repairs when converting to central AC?",
      a: "Yes. When removing a roof-mounted cooler, the roof penetration must be framed, sheeted, and sealed by a roofer. The new AC coil sits in the basement furnace plenum, removing water from the roof.",
    },
  ],
  westminster: [
    {
      q: "Does Westminster require inspections after an HVAC replacement?",
      a: "Yes. The City of Westminster requires a final mechanical inspection to verify flue gas venting, gas shut-off valves, electrical grounding, and condensate drain line routing.",
    },
    {
      q: "Why is the second floor of my Westminster home so warm in July?",
      a: "Two-story homes near Standley Lake and Bradburn often have attic duct runs exposed to high summer attic temperatures. Sealing attic duct joints with mastic, verifying R-8 insulation wrap, and zoning the system restore upstairs comfort.",
    },
  ],
  thornton: [
    {
      q: "Who issues permits for furnace replacement in north Thornton?",
      a: "Thornton Community Development issues municipal mechanical permits within city limits, while unincorporated areas in Adams County near Eastlake fall under the Adams County Building Department.",
    },
    {
      q: "What should Thornton homeowners check before the first freeze?",
      a: "Disconnect garden hoses, replace the furnace filter, test the heating cycle on the thermostat for 15 minutes, and verify that outdoor PVC exhaust and intake vents are clear of leaves and debris.",
    },
  ],
  littleton: [
    {
      q: "How do I balance temperatures across a three-level Littleton home?",
      a: "Three-level homes benefit from seasonal manual damper adjustments (closing basement supply vents slightly in summer), smart thermostat multi-sensor averaging, or motorized zone damper systems.",
    },
    {
      q: "Who supplies electric and natural gas to Littleton homes?",
      a: "Most Littleton homes receive natural gas and electricity from Xcel Energy. A licensed technician can verify current rebate eligibility for high-efficiency furnace and heat pump installations.",
    },
  ],
  englewood: [
    {
      q: "What HVAC solutions work best in Arapahoe Acres mid-century homes?",
      a: "Mid-century modern homes with flat roofs and slab foundations often lack duct chases. Ductless mini-split heat pumps with wall-mounted or ceiling-recessed cassettes provide zoned heating and cooling without ceiling alterations.",
    },
    {
      q: "Do Englewood basement closets have enough combustion air for new furnaces?",
      a: "Small basement closets often lack sufficient cubic volume for open combustion. Modern 90%+ condensing furnaces solve this by drawing dedicated combustion air directly from outside through sealed PVC pipes.",
    },
  ],
  centennial: [
    {
      q: "What mechanical permits are required in Centennial?",
      a: "The City of Centennial Building Services department requires mechanical permits for all heating and cooling installations to ensure compliance with the International Mechanical Code (IMC).",
    },
    {
      q: "How can I prevent cottonwood fluff from damaging my Centennial AC condenser?",
      a: "Homes along the High Line Canal and Cherry Creek trails should gently hose down the outdoor coil with water (power turned off) every June once shedding stops, or install breathable mesh coil filter wraps.",
    },
  ],
  parker: [
    {
      q: "How does Parker's 5,900-foot elevation affect heating and cooling?",
      a: "At nearly 6,000 feet, natural gas appliances lose heating density and require derated gas manifold pressures or high-altitude orifices per manufacturer instructions to burn cleanly and safely.",
    },
    {
      q: "Do Parker homes qualify for CORE Electric Cooperative rebates?",
      a: "Yes. Many Parker neighborhoods are served by CORE Electric Cooperative (formerly IREA) rather than Xcel Energy. CORE offers dedicated heat pump rebates that licensed contractors can help submit.",
    },
  ],
  "castle-rock": [
    {
      q: "What elevation factors apply to Castle Rock furnaces at 6,200 feet?",
      a: "At 6,200 feet on the Palmer Divide, furnaces must be derated for high altitude. In addition, deep winter snow drifts require high-efficiency PVC flue terminations to be mounted at least 18 to 24 inches above expected snow lines.",
    },
    {
      q: "Does Castle Rock require mechanical permits for HVAC replacements?",
      a: "Yes. The Town of Castle Rock Building Division requires permits and post-installation inspections for all furnace, heat pump, and air conditioning replacements.",
    },
  ],
  boulder: [
    {
      q: "What energy codes apply to HVAC equipment replacement in Boulder?",
      a: "The City of Boulder enforces strict energy conservation codes that require high minimum equipment efficiency standards, and city/county programs provide substantial financial incentives for transitioning to cold-climate heat pumps.",
    },
    {
      q: "How do landmark district rules in Boulder affect outdoor AC placement?",
      a: "In historic districts such as Mapleton Hill and Whittier, outdoor heat pumps and AC condensers must be screened from the street or placed on rear building elevations to comply with local preservation design guidelines.",
    },
  ],
};
