import type { Category, Service } from "./types";
import { servicesMore } from "./servicesMore";

export const categories: Category[] = [
  { slug: "cooling", name: "Air Conditioning", blurb: "AC repair, replacement and tune-ups for Denver summers.", icon: "snow" },
  { slug: "heating", name: "Furnaces & Heating", blurb: "Gas furnace repair, replacement and safety checks.", icon: "flame" },
  { slug: "heat-pumps", name: "Heat Pumps", blurb: "Heat pump repair and installation, including cold-climate models.", icon: "heatpump" },
  { slug: "ductless", name: "Ductless Mini-Splits", blurb: "Mini-splits for additions, finished basements and hot rooms.", icon: "fan" },
  { slug: "air-quality", name: "Indoor Air Quality", blurb: "Filtration, humidifiers and dehumidifiers.", icon: "filter" },
  { slug: "ductwork", name: "Ductwork", blurb: "Duct sealing, repair and airflow problems.", icon: "duct" },
  { slug: "controls", name: "Thermostats & Zoning", blurb: "Smart thermostats and zoning for uneven floors.", icon: "thermostat" },
];

const U = "2026-09-28";

const core: Service[] = [
  {
    slug: "ac-repair",
    name: "AC Repair",
    shortName: "AC repair",
    category: "cooling",
    status: "PUBLISHED",
    seoTitle: "AC Repair in Denver, CO",
    metaDescription:
      "Air conditioner repair across the Denver metro: warm air, frozen coils, tripped breakers and dead condensers. Call or request service.",
    h1: "AC repair in the Denver metro",
    answer:
      "Most air conditioner failures come down to a handful of parts: the capacitor, the contactor, the condenser fan motor, a clogged condensate drain, low refrigerant from a leak, or restricted airflow. A licensed HVAC technician tests the system, names the failed part and quotes the repair before doing it.",
    intro: [
      "Denver summers bring strings of 90-degree afternoons under strong high-altitude sun, and that's when worn parts fail. Capacitors weaken in the heat, contactors pit after years of cycling, cottonwood fluff clogs condenser coils every June, and hail flattens fins.",
      "Before a technician arrives, check the simple things: the thermostat is set to cool, the filter isn't packed, the furnace door is closed, and the breaker for the outdoor unit hasn't tripped. If the indoor coil is iced over, switch the system off and run the fan so it thaws.",
    ],
    signs: [
      "Warm air from the vents while the outdoor unit runs",
      "Outdoor unit humming but the fan isn't spinning",
      "Ice on the refrigerant lines or indoor coil",
      "Water around the furnace or a full condensate pan",
      "Breaker trips when the AC starts",
    ],
    process: [
      { title: "Diagnose", body: "The technician checks thermostat call, airflow, electrical components and refrigerant pressures to find the actual failure." },
      { title: "Quote", body: "You get the repair price before any work starts, plus an honest note if the system's age makes replacement worth comparing." },
      { title: "Repair", body: "Common parts such as capacitors, contactors and fan motors are often on the truck." },
      { title: "Verify", body: "They confirm the temperature drop across the coil, amp draw and drain flow before leaving." },
    ],
    costFactors: [
      "Which part failed (a capacitor costs far less than a compressor)",
      "Refrigerant type: older R-22 systems are costly to recharge",
      "Whether a refrigerant leak must be found and repaired",
      "After-hours or weekend visits",
      "Access to the equipment (attic air handlers take longer)",
    ],
    diy: {
      safe: ["Replace a dirty filter", "Reset a tripped breaker once", "Rinse cottonwood off the condenser fins with a garden hose (power off)", "Shut the system off and run the fan to thaw an iced coil"],
      stop: ["Opening the electrical panel on the condenser", "Adding refrigerant yourself", "Resetting a breaker that trips again"],
    },
    faqs: [
      { q: "Why is my AC running but not cooling?", a: "The most common causes are a failed capacitor or condenser fan, a dirty filter or coil, or low refrigerant from a leak. If the outdoor fan isn't spinning, shut the system off to protect the compressor and call." },
      { q: "Should I repair or replace a 15-year-old air conditioner?", a: "If the repair is large, the system uses R-22, or it has needed repeated repairs, replacement is usually worth pricing. A small repair on an otherwise healthy system is often fine." },
      { q: "Is a frozen AC coil an emergency?", a: "Not by itself. Turn the cooling off and run the fan to thaw it, replace the filter, and have the airflow and refrigerant charge checked." },
      { q: "What causes an AC circuit breaker to repeatedly trip?", a: "A breaker that trips immediately usually indicates a grounded compressor, shorted condenser fan motor, or severe electrical fault. Never repeatedly reset a tripped HVAC breaker, as doing so can permanently destroy the compressor or cause an electrical fire. Keep it off and call a licensed technician." },
      { q: "How does Denver's high elevation affect AC cooling capacity?", a: "At 5,280 feet, thinner air holds less heat mass per cubic foot compared to sea level. As a result, air conditioners move slightly less cooling capacity and must run longer during intense 95°F+ afternoon sun. Proper airflow and clean condenser coils are critical to maintain design performance." },
    ],
    related: ["ac-installation", "ac-tune-up", "duct-sealing", "emergency-hvac-repair"],
    isEmergencyCapable: true,
    glance: [
      { term: "Most common fix", detail: "Capacitor or contactor replacement" },
      { term: "Busiest months", detail: "June through August" },
      { term: "Check first", detail: "Filter, breaker, thermostat mode" },
      { term: "Refrigerant", detail: "Handled only by EPA 608-certified technicians" },
    ],
    updated: U,
  },
  {
    slug: "ac-installation",
    name: "AC Replacement & Installation",
    shortName: "AC replacement",
    category: "cooling",
    status: "PUBLISHED",
    seoTitle: "AC Replacement & Installation, Denver",
    metaDescription:
      "Central air conditioner replacement in Denver: load calculation, matched coil, line set, pad and permit. Get connected with a licensed HVAC contractor.",
    h1: "Air conditioner replacement and installation",
    answer:
      "Replacing a central air conditioner means sizing it to the house with a load calculation, matching the outdoor unit to a compatible indoor coil, and flushing or replacing the refrigerant lines. Most replacements take one day and need a city mechanical permit.",
    intro: [
      "Many Denver homes added central air only in the last few decades, and plenty still run systems installed in the 2000s on the phased-out R-22 refrigerant. Others are moving off swamp coolers for the first time. When one of those needs a compressor or a large refrigerant repair, replacement usually makes more sense.",
      "Size matters more than brand. An oversized unit cools the air quickly but short-cycles, wears out faster and leaves far rooms uneven. A Manual J load calculation, not the old unit's tonnage, should set the size.",
    ],
    signs: [
      "System is 12 to 15 years old or older",
      "Uses R-22 refrigerant and needs a recharge",
      "Compressor failure or repeated refrigerant leaks",
      "Upstairs rooms never cool down",
      "Summer electric bills climbing year over year",
    ],
    process: [
      { title: "Load calculation", body: "The contractor measures the home and runs a Manual J to size the system." },
      { title: "Options", body: "You get written options for efficiency levels, with or without a matching furnace or air handler." },
      { title: "Install", body: "Old equipment is recovered, a matched coil is set, the line set is flushed or replaced, and the unit goes on a level pad." },
      { title: "Commission", body: "They charge the system to the manufacturer's specification, test airflow and schedule the permit inspection." },
    ],
    costFactors: [
      "Tonnage and efficiency (SEER2) rating",
      "Single-stage vs. two-stage or variable-speed",
      "Whether the indoor coil and furnace are replaced too",
      "Line set replacement and pad work",
      "Xcel Energy and Denver rebates for qualifying equipment",
    ],
    diy: {
      safe: [
        "Measure room dimensions and note rooms that stay too warm",
        "Collect 12 months of utility bills to evaluate cooling efficiency",
        "Maintain a clean 3-foot perimeter around the outdoor unit pad location",
        "Verify breaker panel capacity and main disconnect accessibility",
      ],
      stop: [
        "Purchasing equipment online sized solely by home square footage",
        "Handling or venting R-410A or R-32 refrigerant lines without EPA 608 certification",
        "Reusing undersized or corroded line sets without pressure testing",
        "Bypassing required municipal mechanical permits and inspections",
      ],
    },
    faqs: [
      { q: "Should I replace my furnace at the same time?", a: "If the furnace is over 15 years old, pairing them usually saves on labor and gets a matched system. A newer furnace can stay." },
      { q: "What size air conditioner do I need?", a: "It depends on insulation, windows, orientation and ductwork, not just square footage. Ask for a Manual J load calculation." },
      { q: "Are there rebates in Denver?", a: "Xcel Energy and the City of Denver have offered rebates on qualifying high-efficiency equipment and heat pumps, and state and federal credits have applied to some heat pumps. The contractor can confirm current programs." },
      { q: "How long does a new air conditioning installation take in Denver?", a: "A standard residential AC replacement typically takes one full day (6 to 8 hours). If ductwork modifications, electrical panel upgrades, or new refrigerant line sets are required, the project may extend into a second day." },
      { q: "Do I need a city mechanical permit for AC replacement?", a: "Yes. Denver Community Planning and Development and surrounding municipalities (including Aurora, Lakewood, Arvada, and Centennial) require a mechanical permit. A licensed contractor pulls the permit and coordinates the final municipal inspection." },
    ],
    related: ["ac-repair", "heat-pump-installation", "furnace-installation", "smart-thermostats"],
    isEmergencyCapable: false,
    glance: [
      { term: "Install time", detail: "Usually one day" },
      { term: "Permit", detail: "City mechanical permit in most metro cities" },
      { term: "Sizing", detail: "Manual J load calculation" },
      { term: "Consider", detail: "A heat pump in place of AC-only" },
    ],
    updated: U,
  },
  {
    slug: "ac-tune-up",
    name: "AC Tune-Up",
    shortName: "AC tune-up",
    category: "cooling",
    status: "PUBLISHED",
    seoTitle: "AC Tune-Up & Maintenance in Denver",
    metaDescription:
      "Spring AC tune-ups for Denver homes: coil cleaning, capacitor test, drain flush and refrigerant check before the summer heat.",
    h1: "Air conditioner tune-up and maintenance",
    answer:
      "An AC tune-up cleans the condenser coil, tests the capacitor and contactor, flushes the condensate drain, checks refrigerant pressures and measures airflow. Doing it in April or May catches weak parts before the first heat wave.",
    intro: [
      "Most no-cooling calls in July trace back to parts that were already weak in spring. A capacitor testing below its rating or a pitted contactor is cheap to replace on a scheduled visit.",
      "Denver's cottonwood season packs condenser fins with fluff in late May and June, which raises head pressure and power use. A proper coil cleaning is the most valuable part of the visit.",
    ],
    signs: ["No maintenance in the last two years", "Condenser fins matted with cottonwood or grass", "Longer run times than last summer", "Condensate drain has backed up before", "Musty smell when cooling starts"],
    process: [
      { title: "Outdoor unit", body: "Clean the coil, test the capacitor, contactor and fan motor, and check the disconnect." },
      { title: "Indoor side", body: "Check the filter, blower, evaporator coil and condensate drain and trap." },
      { title: "Performance", body: "Measure refrigerant pressures, temperature split and amp draw." },
      { title: "Report", body: "You get a written list of anything worn, with prices, and no pressure to fix it that day." },
    ],
    costFactors: ["Number of systems in the home", "Coil condition (heavy cleaning takes longer)", "Maintenance plan vs. one-time visit", "Parts found worn during the check"],
    diy: { safe: ["Change filters every 1–3 months", "Keep 2 feet of clearance around the condenser", "Pour a cup of vinegar in the condensate line each spring"], stop: ["Pressure-washing the fins", "Opening refrigerant ports"] },
    faqs: [
      { q: "How often does an AC need a tune-up?", a: "Once a year, in spring, is standard. Homes with pets or near cottonwoods benefit most." },
      { q: "Does a tune-up keep my warranty valid?", a: "Many manufacturers require proof of regular maintenance for warranty claims. Keep the invoices." },
      { q: "What does an AC tune-up include?", a: "A comprehensive tune-up includes cleaning the outdoor condenser coil, inspecting and testing run capacitors and contactors, checking refrigerant levels, inspecting the indoor evaporator coil, flushing the condensate drain line, and verifying supply-return temperature split." },
      { q: "Why do Denver cottonwood trees cause AC breakdowns?", a: "Cottonwood seed fluff peaks in late May and June across the metro, coating outdoor condenser fins like felt. This chokes airflow, drives head pressure and amperage up, and causes compressors to overheat or trip thermal limits unless professionally washed." },
    ],
    related: ["ac-repair", "furnace-tune-up", "air-filtration", "duct-sealing"],
    isEmergencyCapable: false,
    glance: [
      { term: "Best time", detail: "April–May" },
      { term: "Visit length", detail: "About an hour per system" },
      { term: "Biggest win", detail: "Clean coil and a tested capacitor" },
    ],
    updated: U,
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    shortName: "Furnace repair",
    category: "heating",
    status: "PUBLISHED",
    seoTitle: "Furnace Repair in Denver, CO",
    metaDescription:
      "Gas furnace repair in the Denver metro: no heat, short cycling, ignitor and flame sensor failures, and blower problems. Call or request service.",
    h1: "Furnace repair in the Denver metro",
    answer:
      "When a gas furnace won't heat, the usual causes are a dirty flame sensor, a failed hot-surface ignitor, a blocked condensate line or flue, a tripped limit switch from a clogged filter, or a failed inducer or blower motor. A technician reads the control board's error code, tests the parts and quotes the repair.",
    intro: [
      "Denver winters swing from sunny 60-degree days to cold fronts that drop below zero, and the first cold snap in November brings a wave of furnaces that haven't run since spring. Flame sensors and ignitors are the most common failures.",
      "High-efficiency furnaces drain condensate through plastic lines that can freeze where they exit the house, which shuts the furnace down in the coldest weather. If your furnace stops during a deep freeze, that line is worth checking.",
    ],
    signs: ["Furnace starts, then shuts off within a minute", "Blower runs but air is cold", "Clicking with no ignition", "Flashing light code on the control board", "Rattling, squealing or booming at startup"],
    process: [
      { title: "Safety first", body: "The technician checks for gas leaks and carbon monoxide before anything else." },
      { title: "Diagnose", body: "They read the fault code and test the ignitor, flame sensor, pressure switch and limits." },
      { title: "Repair", body: "Common parts are replaced on the spot, and you approve the price first." },
      { title: "Test", body: "They verify ignition, gas pressure, temperature rise and venting." },
    ],
    costFactors: ["Part that failed (flame sensor vs. inducer motor vs. control board)", "Furnace age and parts availability", "Nights, weekends and holidays", "Heat exchanger condition"],
    diy: {
      safe: ["Replace the filter", "Check that the furnace switch and breaker are on", "Make sure the front panel is seated", "Clear snow from the intake and exhaust pipes outside"],
      stop: ["Any gas smell: leave and call Xcel Energy or 911", "Removing gas valves or burners", "Bypassing a safety switch"],
    },
    faqs: [
      { q: "Why does my furnace keep shutting off?", a: "Short cycling usually points to a dirty flame sensor, a clogged filter tripping the high-limit switch, or a blocked vent or condensate line." },
      { q: "What do I do if I smell gas?", a: "Leave the house without flipping switches and call Xcel Energy's gas emergency line or 911 from outside." },
      { q: "Is a cracked heat exchanger dangerous?", a: "It can let combustion gases, including carbon monoxide, into the air stream. A technician who finds one will usually shut the furnace off, which is the correct call." },
      { q: "Why does my furnace blow cold air?", a: "If the blower is running but the air is cold, the furnace may be in safety lockout. Common causes include a failed hot surface ignitor, dirty flame sensor, closed gas valve, or a tripped high-limit switch caused by a clogged air filter." },
      { q: "How do Front Range winter temperature drops affect furnace ignitors?", a: "Sudden cold fronts dropping 40 degrees overnight place high thermal shock on silicon carbide and nitride ignitors. Aging ignitors with micro-cracks frequently fail on the first sub-freezing night when cycling frequency doubles." },
    ],
    related: ["furnace-installation", "furnace-tune-up", "emergency-hvac-repair", "heat-pump-repair"],
    isEmergencyCapable: true,
    glance: [
      { term: "Most common fix", detail: "Flame sensor cleaning or ignitor replacement" },
      { term: "Busiest months", detail: "November through February" },
      { term: "Gas smell", detail: "Leave and call the gas utility first" },
      { term: "CO", detail: "Every home with a furnace needs CO alarms" },
    ],
    updated: U,
  },
  {
    slug: "furnace-installation",
    name: "Furnace Replacement & Installation",
    shortName: "Furnace replacement",
    category: "heating",
    status: "PUBLISHED",
    seoTitle: "Furnace Replacement & Installation, Denver",
    metaDescription:
      "Gas furnace replacement for Denver homes: sizing, 80% vs. 96% efficiency, venting, condensate and permits. Get connected with a licensed HVAC pro.",
    h1: "Furnace replacement and installation",
    answer:
      "Replacing a furnace means choosing between an 80% furnace that vents through the existing chimney or flue and a 90%-plus condensing furnace that vents through PVC pipe and needs a condensate drain. Most installs take one day and need a mechanical permit.",
    intro: [
      "Many older Denver homes, especially the brick bungalows and Denver Squares in Washington Park, Highland and Park Hill, have basement furnaces that vent into a masonry chimney. Moving to a high-efficiency furnace means new PVC venting and often a chimney liner for the water heater left behind.",
      "In a climate with around 6,000 heating degree days a year, a condensing furnace pays back faster than it would farther south, but the venting work has to be planned.",
    ],
    signs: ["Furnace is 18–20 years old or more", "Cracked heat exchanger found", "Repeated repairs in the last two winters", "Uneven heat and rising gas bills", "Yellow, lazy burner flames"],
    process: [
      { title: "Assess", body: "The contractor sizes the furnace, checks the ductwork, gas line and venting, and looks at the chimney." },
      { title: "Options", body: "You get written quotes for 80% and 96% models, single-stage or variable-speed." },
      { title: "Install", body: "Remove the old furnace, set the new one, and connect gas, venting, condensate and the AC coil." },
      { title: "Commission", body: "Check gas pressure, combustion, temperature rise and CO, then schedule the permit inspection." },
    ],
    costFactors: ["80% vs. 90%+ efficiency", "Venting changes and chimney liner", "Single-stage, two-stage or modulating burner", "Whether the AC coil is replaced at the same time", "Xcel Energy rebates, when offered"],
    diy: {
      safe: [
        "Locate the gas shut-off valve near the furnace and confirm access",
        "Keep a 4-foot clear path around the basement or closet installation area",
        "Check existing chimney condition if replacing an older 80% draft-hood furnace",
        "Make a list of unevenly heated rooms for the load calculation",
      ],
      stop: [
        "Modifying gas supply piping, drip legs, or manifold pressures",
        "Venting high-efficiency PVC through an existing unlined masonry chimney",
        "Connecting electrical whip wiring without turning off power at the main breaker",
        "Operating a newly installed furnace before verifying combustion analysis and CO levels",
      ],
    },
    faqs: [
      { q: "How long does a furnace last?", a: "Typically 15 to 20 years with maintenance. Cracked heat exchangers and failing inducer motors are common end-of-life signs." },
      { q: "Is a 96% furnace worth it in Denver?", a: "Usually, given the long heating season, unless the venting changes would be unusually expensive. The contractor should show both options." },
      { q: "Why do gas furnaces need high-altitude adjustment in Denver?", a: "At 5,000 to 6,000+ feet, air has roughly 17% less oxygen than at sea level. Without proper high-altitude orifice sizing or manifold gas pressure adjustments per manufacturer specifications, gas furnaces burn rich, producing soot, excess carbon monoxide, and damaged heat exchangers." },
      { q: "What is the difference between single-stage, two-stage, and modulating furnaces?", a: "A single-stage furnace runs at 100% capacity whenever it turns on. A two-stage furnace runs on a quieter, lower 65% stage for mild days and jumps to high only in severe freezes. A modulating furnace adjusts in 1% increments, providing the most even temperatures and lowest gas consumption." },
    ],
    related: ["furnace-repair", "heat-pump-installation", "ac-installation", "whole-house-humidifiers"],
    isEmergencyCapable: false,
    glance: [
      { term: "Install time", detail: "One day for most basements" },
      { term: "Venting", detail: "Chimney for 80%; PVC for 90%+" },
      { term: "Permit", detail: "Required by most metro cities" },
      { term: "Elevation", detail: "Orifices derated for 5,000+ feet" },
    ],
    updated: U,
  },
  {
    slug: "furnace-tune-up",
    name: "Furnace Tune-Up & Safety Check",
    shortName: "Furnace tune-up",
    category: "heating",
    status: "PUBLISHED",
    seoTitle: "Furnace Tune-Up & Safety Check, Denver",
    metaDescription:
      "Fall furnace tune-ups for Denver homes: flame sensor cleaning, combustion and CO checks, venting inspection and filter change.",
    h1: "Furnace tune-up and safety check",
    answer:
      "A furnace tune-up cleans the flame sensor, checks the ignitor, burners, gas pressure and venting, tests for carbon monoxide, and inspects the heat exchanger. Doing it in September or October avoids the rush when the first cold front hits.",
    intro: [
      "The first cold snap of the year brings a wave of no-heat calls in the metro. A fall safety check finds the dirty flame sensor or cracked ignitor before you need the heat.",
      "The combustion and carbon monoxide check matters most for older furnaces and homes where the water heater shares the chimney.",
    ],
    signs: ["No service in two years", "Furnace needed a reset last winter", "Soot or rust near the burners", "CO alarm has sounded", "Water heater shares the flue"],
    process: [
      { title: "Burners and ignition", body: "Clean the flame sensor, inspect the ignitor and burners." },
      { title: "Safety", body: "Test limit switches, check the venting and draft, and measure CO." },
      { title: "Airflow", body: "Check the blower, belts or motor, filter and temperature rise." },
      { title: "Report", body: "A written list of findings and prices." },
    ],
    costFactors: ["Number of furnaces", "Maintenance plan pricing", "Parts found worn", "Combined AC and furnace plan"],
    diy: { safe: ["Test CO alarms monthly", "Change filters", "Keep storage away from the furnace"], stop: ["Adjusting the gas valve", "Removing the burner assembly"] },
    faqs: [
      { q: "When should I schedule a furnace tune-up?", a: "September and October, before the first hard freeze." },
      { q: "Where should carbon monoxide alarms go?", a: "On each level of the home and outside sleeping areas, following the alarm manufacturer's instructions." },
      { q: "What safety checks are performed during a furnace tune-up?", a: "The technician inspects the heat exchanger for cracks, tests safety limit switches, checks the flame rollout sensor, measures carbon monoxide in the flue and living area, tests the gas shut-off valve, and verifies draft pressure in the exhaust pipe." },
      { q: "Can a dirty flame sensor be cleaned or does it have to be replaced?", a: "In most cases, a technician can gently clean silica and carbon buildup off the flame sensor rod with fine abrasive cloth during a tune-up. If the ceramic insulator is cracked or corroded, replacement is inexpensive and recommended." },
    ],
    related: ["furnace-repair", "ac-tune-up", "whole-house-humidifiers", "air-filtration"],
    isEmergencyCapable: false,
    glance: [
      { term: "Best time", detail: "September–October" },
      { term: "Key test", detail: "Combustion and carbon monoxide" },
      { term: "Check", detail: "Flame sensor microamps and flue draft" },
    ],
    updated: U,
  },
  {
    slug: "emergency-hvac-repair",
    name: "Emergency Heating & AC Repair",
    shortName: "Emergency repair",
    category: "heating",
    status: "PUBLISHED",
    seoTitle: "Emergency Heating & AC Repair, Denver",
    metaDescription:
      "No heat in a cold snap or no AC in a heat wave? Get connected with an available licensed HVAC technician in the Denver metro.",
    h1: "Emergency heating and air conditioning repair",
    answer:
      "No heat when temperatures drop below freezing, or no cooling in extreme heat with elderly residents, infants or health conditions in the home, is worth an urgent call. Check the breaker, thermostat, filter and outdoor vent pipes first, then call.",
    intro: [
      "Denver's extremes are what make HVAC failures urgent. Pipes can freeze within hours in a house without heat during a subzero night, and summer heat indexes over 105 are dangerous for vulnerable people.",
      "If you smell gas or a carbon monoxide alarm sounds, leave the house and call the gas utility or 911 first. An HVAC technician comes after the home is safe.",
    ],
    signs: ["No heat and the house is dropping below 55°F", "No cooling during a heat advisory", "Burning smell from the furnace or air handler", "CO alarm sounding", "Breaker trips repeatedly"],
    process: [
      { title: "Triage by phone", body: "Quick checks for the breaker, thermostat, filter and vent pipes." },
      { title: "Connect", body: "Your call is connected to an independent technician with availability in your area." },
      { title: "Make safe and repair", body: "The technician restores heat or cooling, or makes the system safe and quotes the repair." },
    ],
    costFactors: ["After-hours and holiday rates set by the contractor", "Part availability", "Whether temporary heat is needed"],
    diy: {
      safe: [
        "Check the thermostat display, mode (Heat/Cool), and setpoint",
        "Verify the furnace service switch on the side of the unit is turned ON",
        "Check your main electrical panel for a tripped HVAC breaker and reset once",
        "Clear snow, ice, or leaves away from external PVC intake and exhaust pipes",
        "Open cabinet doors under exterior wall sinks during subzero nights to prevent burst pipes",
      ],
      stop: [
        "Staying inside if you smell natural gas or a CO alarm is sounding (evacuate immediately and call 911/Xcel Energy)",
        "Resetting a breaker that trips a second time",
        "Using charcoal grills, camping stoves, or unvented gas appliances for indoor emergency heat",
        "Using an open flame to thaw frozen pipes or HVAC drain lines",
      ],
    },
    faqs: [
      { q: "How do I keep pipes from freezing if the furnace dies?", a: "Open cabinet doors under sinks on exterior walls, let faucets drip, and use space heaters safely in the coldest rooms until heat is restored." },
      { q: "How fast can an emergency technician arrive in Denver?", a: "During subzero cold snaps or heat advisories, call volume is high. An independent local technician is connected based on real-time availability in your ZIP code, with many urgent calls dispatched within 2 to 4 hours." },
      { q: "What should I do if my carbon monoxide alarm goes off?", a: "Evacuate everyone, including pets, to fresh air immediately. Do not stop to open windows or investigate. Call 911 or Xcel Energy's emergency line from outside. Do not re-enter the home until emergency responders have cleared the air." },
      { q: "What happens if my high-efficiency furnace condensate line freezes?", a: "Condensing furnaces produce gallons of acidic water daily. If the drain pipe runs through an unconditioned crawlspace or exits outside without proper pitch or freeze protection, ice blocks the drain and trips the internal pressure switch, shutting down the furnace." },
    ],
    related: ["furnace-repair", "ac-repair", "heat-pump-repair", "furnace-tune-up"],
    isEmergencyCapable: true,
    glance: [
      { term: "Urgent when", detail: "Freezing temps, heat advisories, vulnerable residents" },
      { term: "Gas or CO", detail: "Leave and call the utility or 911 first" },
      { term: "First check", detail: "Breaker, power switch, filter, and outdoor flues" },
    ],
    updated: U,
  },
  {
    slug: "heat-pump-repair",
    name: "Heat Pump Repair",
    shortName: "Heat pump repair",
    category: "heat-pumps",
    status: "PUBLISHED",
    seoTitle: "Heat Pump Repair in Denver, CO",
    metaDescription:
      "Heat pump repair in the Denver metro: iced outdoor units, defrost problems, reversing valves and backup heat. Call or request service.",
    h1: "Heat pump repair",
    answer:
      "A heat pump that blows cool air in winter, stays coated in ice, or leans constantly on its electric backup heat usually has a defrost control, sensor, reversing valve or refrigerant problem. A technician tests the system in both heating and cooling modes.",
    intro: [
      "Some frost on a heat pump in winter is normal, and the unit should defrost itself every so often, sending up a cloud of steam. A unit that stays encased in ice has a defrost problem.",
      "In subzero weather most older heat pumps rely on electric strips or a gas furnace for backup. If your electric bill spikes during a cold month, the backup may be carrying the whole load.",
    ],
    signs: ["Outdoor unit solid with ice", "Lukewarm air in heating mode", "\"Aux\" or \"Emergency heat\" on constantly", "Won't switch between heating and cooling", "Loud whoosh or grinding"],
    process: [
      { title: "Test both modes", body: "Check heating and cooling operation, defrost cycle and reversing valve." },
      { title: "Check charge", body: "Measure refrigerant pressures and look for leaks." },
      { title: "Repair and verify", body: "Replace the failed part and confirm defrost and backup heat staging." },
    ],
    costFactors: ["Part failed (sensor vs. reversing valve vs. compressor)", "Refrigerant leak repair", "Backup heat strips", "System age"],
    diy: { safe: ["Clear snow and ice from around the base of the outdoor unit", "Change filters"], stop: ["Chipping ice off the coil", "Running on emergency heat for weeks"] },
    faqs: [
      { q: "Why is my heat pump blowing cold air?", a: "During defrost it briefly blows cooler air, which is normal. Constant cool air in heating mode points to a reversing valve, charge or control problem." },
      { q: "Is it normal for a heat pump to have frost on it in winter?", a: "A light, even coating of frost on the outdoor coil is normal in cold, damp weather. Every 30 to 90 minutes, the unit will enter a defrost cycle, reverse into cooling mode briefly, melt the frost with steam, and resume heating. A solid block of ice covering the entire unit is not normal." },
      { q: "Why is auxiliary heat running so often on my heat pump?", a: "Auxiliary heat kicks in when the outdoor temperature drops below the heat pump's thermal balance point, or when raising the thermostat more than 2 degrees at once. If it runs constantly in mild weather (above 35°F), the outdoor unit may have low refrigerant, a failed compressor, or a faulty outdoor temperature sensor." },
      { q: "Can a heat pump reversing valve fail?", a: "Yes. The reversing valve switches refrigerant flow between heating and cooling. If the solenoid coil fails or the internal slider gets stuck, the system will only heat or only cool. A technician tests the solenoid voltage and refrigerant pressures to diagnose it." },
    ],
    related: ["heat-pump-installation", "ductless-mini-splits", "furnace-repair", "smart-thermostats"],
    isEmergencyCapable: true,
    glance: [
      { term: "Normal", detail: "Light frost and brief defrost cycles" },
      { term: "Not normal", detail: "Unit encased in ice" },
      { term: "Check first", detail: "Thermostat aux heat indicator and breaker" },
    ],
    updated: U,
  },
  {
    slug: "heat-pump-installation",
    name: "Heat Pump Installation",
    shortName: "Heat pumps",
    category: "heat-pumps",
    status: "PUBLISHED",
    seoTitle: "Heat Pump Installation in Denver",
    metaDescription:
      "Heat pump and dual-fuel installation for Denver homes: cold-climate models, gas furnace backup, sizing and available tax credits.",
    h1: "Heat pump installation",
    answer:
      "A heat pump heats and cools with one outdoor unit. In Denver, many homes pair it with a gas furnace (a dual-fuel system) that takes over in the coldest weather, while cold-climate heat pumps can heat well below zero without gas backup.",
    intro: [
      "When an air conditioner needs replacing, swapping in a heat pump costs somewhat more and adds efficient heating for fall and spring. With a dual-fuel setup, the gas furnace still covers the January cold snaps.",
      "Federal tax credits have applied to qualifying heat pumps, and utilities have offered rebates. The contractor can confirm what's current for your home.",
    ],
    signs: ["AC due for replacement", "All-electric home with high winter bills", "Want less gas use", "Addition or area with no ductwork (see mini-splits)"],
    process: [
      { title: "Size and design", body: "Load calculation for both heating and cooling, plus a balance point for dual-fuel." },
      { title: "Install", body: "Outdoor unit, matched coil, line set, thermostat wiring and controls." },
      { title: "Commission", body: "Test heating, cooling, defrost and backup staging." },
    ],
    costFactors: ["Standard vs. cold-climate model", "Dual-fuel controls", "Electrical upgrades", "Tax credits and rebates"],
    diy: {
      safe: [
        "Review your winter natural gas and electric bills to calculate heating costs",
        "Identify an outdoor unit location protected from roof snow shedding and high winds",
        "Confirm electrical panel service rating (200-amp service is ideal for all-electric homes)",
        "Consult Xcel Energy rebate schedules and Colorado clean heat incentive programs",
      ],
      stop: [
        "Selecting equipment without a cold-climate COP rating at 5°F design temperature",
        "Installing an outdoor heat pump flat on the ground without a 6-to-12-inch snow stand in Denver",
        "Reusing undersized electrical conductors for supplementary electric heat strips",
      ],
    },
    faqs: [
      { q: "Do heat pumps work in Denver winters?", a: "Yes. Standard heat pumps handle most winter days, and cold-climate models keep heating well below zero. Dual-fuel systems use gas for the coldest hours." },
      { q: "What is a dual-fuel heat pump system?", a: "A dual-fuel system pairs an electric heat pump with a natural gas furnace. The heat pump provides ultra-efficient heating during mild autumn and spring days (down to roughly 25°F to 35°F), and the gas furnace automatically takes over during extreme subzero winter freezes." },
      { q: "Do cold-climate heat pumps work at 5,000+ feet altitude?", a: "Yes. Modern inverter-driven cold-climate heat pumps (such as Mitsubishi Hyper-Heating, Daikin, or Bosch) maintain 100% heating capacity down to 5°F and continue providing heat down to -13°F or lower, making them reliable options for Denver homes." },
      { q: "What rebates are available for heat pumps in Colorado?", a: "Homeowners can often combine federal Inflation Reduction Act tax credits (up to $2,000 for qualifying heat pumps) with Xcel Energy utility rebates and state Clean Heat incentives. Certified contractors help submit equipment AHRI certificates for qualification." },
    ],
    related: ["heat-pump-repair", "ac-installation", "ductless-mini-splits", "furnace-installation"],
    isEmergencyCapable: false,
    glance: [
      { term: "Best fit", detail: "Replacing an AC in a home with a gas furnace (dual-fuel)" },
      { term: "Incentives", detail: "Federal tax credits and utility rebates, when available" },
      { term: "Stand mount", detail: "Raised 6–12 inches above snow line" },
    ],
    updated: U,
  },
  {
    slug: "ductless-mini-splits",
    name: "Ductless Mini-Split Installation",
    shortName: "Mini-splits",
    category: "ductless",
    status: "PUBLISHED",
    seoTitle: "Ductless Mini-Split Installation, Denver",
    metaDescription:
      "Ductless mini-split installation for Denver additions, finished basements, sunrooms, garages and hot upstairs rooms.",
    h1: "Ductless mini-split installation",
    answer:
      "A ductless mini-split is a small heat pump with an outdoor unit and one or more wall, ceiling or floor heads. It heats and cools a room or zone without ductwork, which makes it a good fit for additions, finished attics, sunrooms and garages.",
    intro: [
      "Bungalows and story-and-a-half homes across the metro often have finished upstairs rooms that the basement furnace barely reaches. A mini-split head there fixes the hottest room in the house without new ducts.",
      "Mini-splits are also the clean answer for a new garage workshop or a basement office, where extending ductwork would be awkward.",
    ],
    signs: ["One room always too hot or cold", "Addition or sunroom without ducts", "Window units you want to retire", "Garage or workshop you use year-round"],
    process: [
      { title: "Plan heads", body: "Pick head locations and size by room." },
      { title: "Install", body: "Mount heads and the outdoor unit, drill a small line-set opening, and run the condensate drain." },
      { title: "Commission", body: "Pressure-test, evacuate, and set up remotes or thermostats." },
    ],
    costFactors: ["Number of heads", "Line-set length", "Electrical circuit", "Head style (wall, ceiling cassette, floor)"],
    diy: {
      safe: [
        "Wash the indoor unit nylon mesh filters under warm tap water every month",
        "Ensure unobstructed air clearance of at least 6 inches above and around wall heads",
        "Use the remote control to clean indoor coil surfaces with fan-only dry mode",
        "Keep plants and outdoor debris cleared 24 inches from the outdoor condenser",
      ],
      stop: [
        "Attempting DIY refrigerant flaring without specialized eccentric flaring tools",
        "Connecting high-voltage line voltage without an approved outdoor disconnect switch",
        "Bypassing vacuum decay tests (mini-splits require a vacuum below 500 microns)",
      ],
    },
    faqs: [
      { q: "Can a mini-split heat in winter here?", a: "Yes. Cold-climate mini-splits keep heating in single-digit weather and below." },
      { q: "How many rooms can one outdoor mini-split unit handle?", a: "Multi-zone outdoor condensers can support from two up to five or eight individual indoor heads, each with its own thermostat and independent temperature control for different rooms." },
      { q: "Are mini-splits good for older Denver homes with radiator heat?", a: "Yes, mini-splits are the #1 solution for historic Denver Squares, Victorians, and Tudor homes with hydronic boilers or steam radiators, providing efficient cooling without having to tear open plaster walls for bulky sheet metal ductwork." },
      { q: "How quiet are ductless mini-split units?", a: "Indoor mini-split heads typically operate between 19 and 30 decibels—quieter than a whisper or rustling leaves. Outdoor inverter units are significantly quieter than traditional central AC condensers." },
    ],
    related: ["heat-pump-installation", "zoning-systems", "smart-thermostats", "ac-installation"],
    isEmergencyCapable: false,
    glance: [
      { term: "Best for", detail: "Additions, bonus rooms, garages" },
      { term: "Install", detail: "Usually one day per zone" },
      { term: "Sound level", detail: "Whisper-quiet (19–30 dB)" },
    ],
    updated: U,
  },
  {
    slug: "air-filtration",
    name: "Air Filtration & Purification",
    shortName: "Air filtration",
    category: "air-quality",
    status: "PUBLISHED",
    seoTitle: "Whole-Home Air Filtration in Denver",
    metaDescription:
      "Whole-home air filters and purifiers for Denver homes: media filters, MERV ratings and help for spring and fall allergy seasons.",
    h1: "Whole-home air filtration",
    answer:
      "A whole-home media filter cabinet holds a 4- or 5-inch filter at MERV 11 to 13, which catches much more pollen and dust than a 1-inch filter without choking airflow. It's installed in the return duct next to the furnace.",
    intro: [
      "Denver sees spring tree pollen, dry-climate dust, and wildfire smoke that can drift in from Colorado and western fires for days at a time. A better filter is the simplest upgrade for allergy households.",
      "Thin, high-MERV 1-inch filters can restrict airflow enough to freeze AC coils. A deeper media cabinet solves that.",
    ],
    signs: ["Allergies worse indoors", "Dust returns quickly after cleaning", "Pets in the home", "Nearby construction or renovation"],
    process: [
      { title: "Check", body: "Measure the return and static pressure." },
      { title: "Install", body: "Add a media cabinet at the furnace." },
      { title: "Verify", body: "Confirm airflow is within spec." },
    ],
    costFactors: ["Cabinet size", "Return duct modifications", "Add-ons such as UV lights"],
    diy: {
      safe: [
        "Check filter dimensions (length x width x thickness) on the existing frame before ordering",
        "Confirm airflow directional arrow points toward the furnace blower motor",
        "Check and replace 1-inch filters every 30 to 90 days; 4-inch media filters every 6 to 12 months",
        "Wipe down return air grille louvers with a damp microfiber cloth",
      ],
      stop: [
        "Installing high-restriction 1-inch MERV 13 filters in systems with undersized returns",
        "Running the heating or cooling system without a filter installed",
        "Using chemical fragrance sprays directly on filter media",
      ],
    },
    faqs: [
      { q: "How often do media filters need changing?", a: "Usually every 6 to 12 months, depending on pets and dust." },
      { q: "What MERV rating is best for Denver wildfire smoke?", a: "A MERV 11 to MERV 13 filter captures the fine particulate matter (PM2.5) present in wildfire smoke. However, high-MERV filters must be housed in a 4- or 5-inch media cabinet to provide sufficient surface area so airflow isn't choked." },
      { q: "What is the difference between a standard filter and a media air cleaner?", a: "A standard 1-inch filter primarily protects equipment from large dust bunnies and hair. A 4- or 5-inch deep-pleated media air cleaner has up to 30 times more filter surface area, capturing pollen, mold spores, pet dander, and smoke particles for up to a full year." },
      { q: "Can an air filter damage my HVAC system?", a: "Yes. An overly restrictive or dirty filter creates high static pressure across the blower, leading to frozen evaporator coils in the summer, tripped furnace high-limit switches in the winter, and premature blower motor burnout." },
    ],
    related: ["whole-house-humidifiers", "duct-sealing", "ac-tune-up", "furnace-tune-up"],
    isEmergencyCapable: false,
    glance: [
      { term: "Typical rating", detail: "MERV 11–13" },
      { term: "Change", detail: "Every 6–12 months" },
      { term: "Best against", detail: "Wildfire smoke, dust, spring tree pollen" },
    ],
    updated: U,
  },
  {
    slug: "whole-house-humidifiers",
    name: "Whole-House Humidifiers & Dehumidifiers",
    shortName: "Humidity control",
    category: "air-quality",
    status: "PUBLISHED",
    seoTitle: "Whole-House Humidifiers in Denver",
    metaDescription:
      "Humidity control for Denver's dry climate: furnace-mounted bypass, fan-powered and steam humidifiers, plus dehumidifiers for damp basements.",
    h1: "Whole-house humidifiers and dehumidifiers",
    answer:
      "Denver's air is dry most of the year and very dry in winter. A furnace-mounted humidifier keeps winter indoor humidity around 30 to 40 percent; dehumidifiers are only needed in the occasional damp basement.",
    intro: [
      "Heated winter air in the metro can drop into the teens for relative humidity, which means static shocks, cracked wood floors and dry sinuses.",
      "At a mile high, dry air also makes rooms feel colder at the same thermostat setting, so a humidifier can let you run the heat a little lower.",
    ],
    signs: ["Static shocks and dry skin in winter", "Gaps opening in wood floors", "Musty basement", "Condensation on windows in winter (too much humidity)"],
    process: [
      { title: "Choose type", body: "Bypass, fan-powered or steam humidifier; ducted dehumidifier." },
      { title: "Install", body: "Mount on the duct, connect water, drain and controls." },
      { title: "Set", body: "Set targets that avoid window condensation." },
    ],
    costFactors: ["Humidifier type", "Water and drain access", "Dehumidifier capacity"],
    diy: {
      safe: [
        "Replace the evaporative water panel (pad) at the beginning of each heating season",
        "Turn the manual bypass damper to 'Winter' in October and 'Summer' in May",
        "Lower the humidistat setting down to 20-25% during severe subzero cold snaps to avoid window ice",
        "Clean the drain line and inspect the solenoid water valve for leaks",
      ],
      stop: [
        "Running continuous water through the unit when the furnace blower is idle",
        "Setting indoor relative humidity above 40% when outside temperatures are below 20°F",
        "Plumbing supply lines without an accessible manual shut-off valve",
      ],
    },
    faqs: [
      { q: "What indoor humidity should I aim for in winter?", a: "Around 30 to 40 percent, lower on the coldest days to avoid window condensation." },
      { q: "Why is a whole-house humidifier essential in Denver?", a: "Denver's semi-arid high-altitude climate causes winter outdoor humidity to plunge. When heated indoors, relative humidity can drop below 15%—drier than the Sahara Desert. This causes dry sinuses, bloody noses, static shocks, and shrunken hardwood flooring." },
      { q: "What is the difference between a bypass, fan-powered, and steam humidifier?", a: "Bypass humidifiers use furnace blower pressure to move air across a water panel; fan-powered units have an internal fan for higher capacity; steam humidifiers boil water into steam independently of furnace heat, offering the highest capacity for large homes." },
      { q: "Why do my windows get condensation or ice in winter?", a: "If indoor humidity is set too high during cold weather, warm moist air condenses on cold glass. When temperatures drop below 15°F outside, turn the humidistat down to 25% to prevent window sill rot and mold growth." },
    ],
    related: ["air-filtration", "furnace-tune-up", "furnace-installation", "smart-thermostats"],
    isEmergencyCapable: false,
    glance: [
      { term: "Winter target", detail: "30–40% RH" },
      { term: "Summer target", detail: "Below 50% RH" },
      { term: "Maintenance", detail: "Replace water panel annually each autumn" },
    ],
    updated: U,
  },
  {
    slug: "duct-sealing",
    name: "Duct Sealing & Repair",
    shortName: "Duct sealing",
    category: "ductwork",
    status: "PUBLISHED",
    seoTitle: "Duct Sealing & Repair in Denver",
    metaDescription:
      "Duct sealing and repair for Denver homes: leaky attic ducts, disconnected runs, weak airflow to upstairs rooms and hot bedrooms.",
    h1: "Duct sealing and repair",
    answer:
      "Leaky or disconnected ducts waste conditioned air into attics, crawlspaces and wall cavities, which leaves far rooms weak and bills high. A technician finds leaks, seals joints with mastic, reconnects runs and balances airflow.",
    intro: [
      "Two-story homes in Highlands Ranch, Westminster and Aurora often run upstairs ducts through hot attics. A disconnected or crushed run there explains the bedroom that never cools.",
      "Older homes may have undersized returns, which starve the system of air no matter how new the equipment is.",
    ],
    signs: ["One room much hotter or colder", "Weak airflow at far registers", "Dusty house", "Whistling returns"],
    process: [
      { title: "Measure", body: "Static pressure and room airflow readings." },
      { title: "Repair", body: "Seal joints with mastic, reconnect or replace runs, add insulation." },
      { title: "Balance", body: "Adjust dampers and confirm airflow improved." },
    ],
    costFactors: ["Access (attic vs. basement)", "Number of runs", "Return air upgrades"],
    diy: {
      safe: [
        "Inspect visible ductwork in basements, mechanical rooms, and attics for disconnected seams",
        "Check that furniture, drapes, and rugs are not blocking supply registers or return vents",
        "Seal accessible sheet metal joints with UL-181 rated mastic paste or foil tape",
        "Insulate bare duct runs passing through unconditioned crawlspaces or attics",
      ],
      stop: [
        "Using standard cloth adhesive 'duct tape' (which dries out, flakes, and fails in months)",
        "Sealing combustion air intake pipes or fresh air ventilation ducts",
        "Closing more than 20% of supply registers in a home (which spikes system static pressure)",
      ],
    },
    faqs: [
      { q: "Is duct cleaning the same as duct sealing?", a: "No. Cleaning removes debris; sealing fixes leaks. Sealing usually does more for comfort and bills." },
      { q: "How much energy is lost through leaky ductwork?", a: "According to the Department of Energy, the average home loses 20% to 30% of conditioned air through duct leaks, holes, and poorly connected seams in unconditioned spaces like attics and crawlspaces." },
      { q: "What are the signs of disconnected ductwork?", a: "Signs include a room that suddenly receives no airflow, whistling sounds, sudden spikes in energy bills, excessive dust accumulation near vents, and hot or cold air blowing into an attic or crawlspace." },
      { q: "What is aerosolized duct sealing (Aeroseal)?", a: "Aeroseal is an advanced technology where non-toxic sealant particles are pressurized through the duct system from the inside out, sealing hidden cracks and gaps behind drywall without tearing up ceilings or walls." },
    ],
    related: ["zoning-systems", "air-filtration", "ac-repair", "ductless-mini-splits"],
    isEmergencyCapable: false,
    glance: [
      { term: "Material", detail: "Mastic or UL-181 tape, not cloth duct tape" },
      { term: "Leak loss", detail: "Typical unsealed homes lose 20–30% of air" },
      { term: "Comfort fix", detail: "Fixes hot upstairs bedrooms and weak vents" },
    ],
    updated: U,
  },
  {
    slug: "smart-thermostats",
    name: "Smart Thermostat Installation",
    shortName: "Thermostats",
    category: "controls",
    status: "PUBLISHED",
    seoTitle: "Smart Thermostat Installation in Denver",
    metaDescription:
      "Smart thermostat installation in the Denver metro: C-wire, heat pump and dual-fuel wiring, and utility programs.",
    h1: "Smart thermostat installation",
    answer:
      "A smart thermostat learns your schedule and can be controlled by phone. Most need a C-wire for steady power, and heat pump or dual-fuel systems need correct staging setup, which is where a technician helps.",
    intro: [
      "Utility programs in the metro have offered thermostat rebates or bill credits for letting the utility adjust setpoints during peak summer demand. Check the terms before enrolling.",
      "Heat pumps are the most commonly mis-wired systems. A wrong setting can run expensive backup heat all winter.",
    ],
    signs: ["No C-wire at the old thermostat", "Heat pump or dual-fuel system", "Thermostat reads the wrong temperature", "Want remote control"],
    process: [
      { title: "Check wiring", body: "Confirm equipment type and wires, and add a C-wire if needed." },
      { title: "Install and set up", body: "Mount, configure staging, and connect to Wi-Fi." },
      { title: "Verify operation", body: "Test calls for heating, cooling, auxiliary stages, and reversing valve." },
    ],
    costFactors: ["C-wire addition", "Thermostat model", "Multiple zones"],
    diy: {
      safe: [
        "Turn off power to the furnace and AC at the main electrical breaker before removing old thermostat",
        "Take clear photos of the existing wiring terminals and apply wire labels before disconnecting",
        "Mount the new backplate level using a bubble level",
        "Configure mobile app controls, geofencing, and automated home/away schedules",
      ],
      stop: [
        "Connecting a C-wire to an unknown terminal without verifying 24VAC transformer polarity",
        "Tying Rc and Rh together on systems with separate heating and cooling transformers",
        "Configuring a heat pump as standard conventional heat (causes expensive backup heat strip overuse)",
      ],
    },
    faqs: [
      { q: "Do I need a C-wire?", a: "Most smart thermostats need one for reliable power. A technician can add one or install an adapter." },
      { q: "What is a C-wire and why is it needed?", a: "The 'C' or common wire provides continuous 24-volt power from the furnace control board to the smart thermostat, powering Wi-Fi radios and color screens without stealing power or draining internal batteries." },
      { q: "Can a smart thermostat save money on heating and cooling in Denver?", a: "Yes. EPA Energy Star certified smart thermostats save an average of 8% on heating and cooling bills (roughly $50 to $100 annually) by automatically lowering temperatures when you sleep or leave the home." },
      { q: "Do Denver utility companies offer smart thermostat rebates?", a: "Yes. Xcel Energy frequently offers instant rebates or bill credits (often $50 or more) when purchasing qualifying smart thermostats and enrolling in voluntary peak energy savings programs." },
    ],
    related: ["zoning-systems", "heat-pump-installation", "ac-tune-up", "whole-house-humidifiers"],
    isEmergencyCapable: false,
    glance: [
      { term: "Watch for", detail: "Heat pump staging set correctly" },
      { term: "Energy savings", detail: "Up to 8% annually on heating/cooling" },
      { term: "Power", detail: "Dedicated 24V C-wire recommended" },
    ],
    updated: U,
  },
  {
    slug: "zoning-systems",
    name: "HVAC Zoning Systems",
    shortName: "Zoning",
    category: "controls",
    status: "PUBLISHED",
    seoTitle: "HVAC Zoning Systems for Denver Homes",
    metaDescription:
      "HVAC zoning for Denver two-story homes: motorized dampers and separate thermostats to fix hot upstairs and cold basements.",
    h1: "HVAC zoning systems",
    answer:
      "Zoning uses motorized dampers in the ductwork and a thermostat per zone, so one furnace and AC can send air where it's needed. It's the common fix for two-story homes where upstairs is hot in summer and the basement is cold in winter.",
    intro: [
      "Many two-story homes built in the 1990s and 2000s across Highlands Ranch, Parker and Westminster have one thermostat downstairs. Upstairs runs several degrees warmer all summer.",
      "Zoning works best with a two-stage or variable-speed system and a bypass or proper duct design to protect the equipment.",
    ],
    signs: ["Upstairs 4°F or more warmer than downstairs", "Finished basement always cold", "Constant thermostat fights"],
    process: [
      { title: "Design", body: "Check duct layout and equipment staging." },
      { title: "Install", body: "Add dampers, zone panel and thermostats." },
      { title: "Test", body: "Confirm airflow and static pressure in each zone." },
    ],
    costFactors: ["Number of zones", "Duct access", "Equipment compatibility"],
    diy: {
      safe: [
        "Verify all manual register dampers across all floors are in the fully open position",
        "Replace batteries in individual zone thermostats twice a year",
        "Record temperature differences between upstairs and main level during peak 4 PM afternoon heat",
        "Keep return air grilles unobstructed on all levels",
      ],
      stop: [
        "Closing off whole floors of registers manually without a pressure relief bypass damper",
        "Wiring zone control boards without verifying transformer volt-amp (VA) capacity",
        "Attempting motorized damper installation on single-stage systems without static pressure testing",
      ],
    },
    faqs: [
      { q: "Can zoning be added to an existing system?", a: "Often, if the ducts are accessible and the equipment can handle reduced airflow. A variable-speed blower helps." },
      { q: "Why is the upstairs always so much hotter than downstairs in Denver homes?", a: "Heat naturally rises, and intense solar radiation heats Denver roofs and attics to 130°F+ in summer. With only one thermostat on the main floor, the system shuts off once the living room cools, leaving bedrooms 5 to 8 degrees warmer." },
      { q: "How does an HVAC zoning system work?", a: "An HVAC zoning system installs motorized dampers inside your ductwork and connects them to a central zone panel. Each floor or section has its own thermostat. When the upstairs calls for cooling, dampers route airflow upstairs while closing off cooler areas." },
      { q: "Do I need a new furnace or AC to add zoning?", a: "Not necessarily. Zoning can be retrofitted onto existing equipment if the ductwork is accessible and the system can accommodate airflow changes. Two-stage or variable-speed systems work best with zoning, but single-stage systems can work with an engineered bypass duct." },
    ],
    related: ["smart-thermostats", "duct-sealing", "ductless-mini-splits", "ac-installation"],
    isEmergencyCapable: false,
    glance: [
      { term: "Best for", detail: "Two-story homes with one thermostat" },
      { term: "Components", detail: "Motorized dampers, zone board, multi-thermostats" },
      { term: "Equipment fit", detail: "Works best with two-stage or variable speed blowers" },
    ],
    updated: U,
  },
];

export const services: Service[] = [...core, ...servicesMore];

export const publishedServices = services.filter((s) => s.status === "PUBLISHED");

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)!;
}

export function servicesInCategory(slug: string) {
  return publishedServices.filter((s) => s.category === slug);
}
