import type { Category, Service } from "./types";
import { servicesMore } from "./servicesMore";

export const categories: Category[] = [
  { slug: "cooling", name: "Air Conditioning", blurb: "AC repair, replacement and tune-ups for every climate.", icon: "snow" },
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
    seoTitle: "AC Repair: Common Causes, Fixes & Costs",
    metaDescription:
      "Air conditioner repair explained: warm air, frozen coils, tripped breakers and dead condensers. Call or request service.",
    h1: "Air conditioner repair",
    answer:
      "Most air conditioner failures come down to a handful of parts: the capacitor, the contactor, the condenser fan motor, a clogged condensate drain, low refrigerant from a leak, or restricted airflow. A licensed HVAC technician tests the system, names the failed part and quotes the repair before doing it.",
    intro: [
      "Most breakdowns happen during the first long heat wave of the year, when worn parts finally fail. Capacitors weaken in the heat, contactors pit after years of cycling, and pollen, cottonwood fluff and dust clog condenser coils. In humid climates, clogged condensate drains are a leading cause of shutdowns.",
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
    seoTitle: "AC Replacement & Installation: Sizing and Costs",
    metaDescription:
      "Central air conditioner replacement explained: load calculation, matched coil, line set, pad and permit. Get connected with a licensed HVAC contractor.",
    h1: "Air conditioner replacement and installation",
    answer:
      "Replacing a central air conditioner means sizing it to the house with a load calculation, matching the outdoor unit to a compatible indoor coil, and flushing or replacing the refrigerant lines. Most replacements take one day and need a city mechanical permit.",
    intro: [
      "Millions of homes still run air conditioners installed in the 2000s, some on the phased-out R-22 refrigerant. When one of those needs a compressor or a large refrigerant repair, replacement usually makes more sense.",
      "Size matters more than brand. An oversized unit cools the air quickly but leaves the house clammy in humid weather and short-cycles in dry climates. A Manual J load calculation, not the old unit's tonnage, should set the size.",
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
      "Utility and state rebates for qualifying equipment",
    ],
    faqs: [
      { q: "Should I replace my furnace at the same time?", a: "If the furnace is over 15 years old, pairing them usually saves on labor and gets a matched system. A newer furnace can stay." },
      { q: "What size air conditioner do I need?", a: "It depends on insulation, windows, orientation and ductwork, not just square footage. Ask for a Manual J load calculation." },
      { q: "Are there rebates for a new air conditioner?", a: "Many utilities and states offer rebates on qualifying high-efficiency equipment, and federal tax credits have applied to some heat pumps. The contractor can confirm what applies at your address." },
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
    seoTitle: "AC Tune-Up & Maintenance Checklist",
    metaDescription:
      "What a spring AC tune-up includes: coil cleaning, capacitor test, drain flush and refrigerant check before the summer heat.",
    h1: "Air conditioner tune-up and maintenance",
    answer:
      "An AC tune-up cleans the condenser coil, tests the capacitor and contactor, flushes the condensate drain, checks refrigerant pressures and measures airflow. Doing it in April or May catches weak parts before the first heat wave.",
    intro: [
      "Most no-cooling calls in July trace back to parts that were already weak in spring. A capacitor testing below its rating or a pitted contactor is cheap to replace on a scheduled visit.",
      "Pollen, cottonwood fluff, dust and grass clippings pack condenser fins every season, which raises head pressure and power use. A proper coil cleaning is the most valuable part of the visit.",
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
    seoTitle: "Furnace Repair: No Heat Causes & Fixes",
    metaDescription:
      "Gas furnace repair explained: no heat, short cycling, ignitor and flame sensor failures, and blower problems. Call or request service.",
    h1: "Furnace repair",
    answer:
      "When a gas furnace won't heat, the usual causes are a dirty flame sensor, a failed hot-surface ignitor, a blocked condensate line or flue, a tripped limit switch from a clogged filter, or a failed inducer or blower motor. A technician reads the control board's error code, tests the parts and quotes the repair.",
    intro: [
      "The first cold snap of every heating season brings a wave of furnaces that haven't run since spring. Flame sensors and ignitors are the most common failures.",
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
      stop: ["Any gas smell: leave and call your gas utility or 911", "Removing gas valves or burners", "Bypassing a safety switch"],
    },
    faqs: [
      { q: "Why does my furnace keep shutting off?", a: "Short cycling usually points to a dirty flame sensor, a clogged filter tripping the high-limit switch, or a blocked vent or condensate line." },
      { q: "What do I do if I smell gas?", a: "Leave the house without flipping switches and call your gas utility's emergency line or 911 from outside." },
      { q: "Is a cracked heat exchanger dangerous?", a: "It can let combustion gases, including carbon monoxide, into the air stream. A technician who finds one will usually shut the furnace off, which is the correct call." },
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
    seoTitle: "Furnace Replacement: 80% vs. 96% & Costs",
    metaDescription:
      "Gas furnace replacement explained: sizing, 80% vs. 96% efficiency, venting, condensate and permits. Get connected with a licensed HVAC pro.",
    h1: "Furnace replacement and installation",
    answer:
      "Replacing a furnace means choosing between an 80% furnace that vents through the existing chimney or flue and a 90%-plus condensing furnace that vents through PVC pipe and needs a condensate drain. Most installs take one day and need a mechanical permit.",
    intro: [
      "Many older homes, especially pre-war brick and frame houses in Northern and Midwestern cities, have basement furnaces that vent into a masonry chimney. Moving to a high-efficiency furnace means new PVC venting and often a chimney liner for the water heater left behind.",
      "In cold climates with long heating seasons, a condensing furnace pays back faster than it would in the South, but the venting work has to be planned.",
    ],
    signs: ["Furnace is 18–20 years old or more", "Cracked heat exchanger found", "Repeated repairs in the last two winters", "Uneven heat and rising gas bills", "Yellow, lazy burner flames"],
    process: [
      { title: "Assess", body: "The contractor sizes the furnace, checks the ductwork, gas line and venting, and looks at the chimney." },
      { title: "Options", body: "You get written quotes for 80% and 96% models, single-stage or variable-speed." },
      { title: "Install", body: "Remove the old furnace, set the new one, and connect gas, venting, condensate and the AC coil." },
      { title: "Commission", body: "Check gas pressure, combustion, temperature rise and CO, then schedule the permit inspection." },
    ],
    costFactors: ["80% vs. 90%+ efficiency", "Venting changes and chimney liner", "Single-stage, two-stage or modulating burner", "Whether the AC coil is replaced at the same time", "Gas utility rebates, when offered"],
    faqs: [
      { q: "How long does a furnace last?", a: "Typically 15 to 20 years with maintenance. Cracked heat exchangers and failing inducer motors are common end-of-life signs." },
      { q: "Is a 96% furnace worth it?", a: "In cold and mixed climates it usually is, unless the venting changes would be unusually expensive. In warm climates an 80% furnace or a heat pump often makes more sense. The contractor should show both options." },
    ],
    related: ["furnace-repair", "heat-pump-installation", "ac-installation", "whole-house-humidifiers"],
    isEmergencyCapable: false,
    glance: [
      { term: "Install time", detail: "One day for most basements" },
      { term: "Venting", detail: "Chimney for 80%; PVC for 90%+" },
      { term: "Permit", detail: "Required by most metro cities" },
    ],
    updated: U,
  },
  {
    slug: "furnace-tune-up",
    name: "Furnace Tune-Up & Safety Check",
    shortName: "Furnace tune-up",
    category: "heating",
    status: "PUBLISHED",
    seoTitle: "Furnace Tune-Up & Safety Check Checklist",
    metaDescription:
      "What a fall furnace tune-up includes: flame sensor cleaning, combustion and CO checks, venting inspection and filter change.",
    h1: "Furnace tune-up and safety check",
    answer:
      "A furnace tune-up cleans the flame sensor, checks the ignitor, burners, gas pressure and venting, tests for carbon monoxide, and inspects the heat exchanger. Doing it in September or October avoids the rush when the first cold front hits.",
    intro: [
      "The first cold snap of the year brings a wave of no-heat calls everywhere. A fall safety check finds the dirty flame sensor or cracked ignitor before you need the heat.",
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
    ],
    related: ["furnace-repair", "ac-tune-up", "whole-house-humidifiers", "air-filtration"],
    isEmergencyCapable: false,
    glance: [
      { term: "Best time", detail: "September–October" },
      { term: "Key test", detail: "Combustion and carbon monoxide" },
    ],
    updated: U,
  },
  {
    slug: "emergency-hvac-repair",
    name: "Emergency Heating & AC Repair",
    shortName: "Emergency repair",
    category: "heating",
    status: "PUBLISHED",
    seoTitle: "Emergency Heating & AC Repair: What Counts",
    metaDescription:
      "No heat in a cold snap or no AC in a heat wave? Get connected with an available licensed HVAC technician near you.",
    h1: "Emergency heating and air conditioning repair",
    answer:
      "No heat when temperatures drop below freezing, or no cooling in extreme heat with elderly residents, infants or health conditions in the home, is worth an urgent call. Check the breaker, thermostat, filter and outdoor vent pipes first, then call.",
    intro: [
      "Weather extremes are what make HVAC failures urgent. Pipes can freeze within hours in a house without heat during a hard freeze, and summer heat indexes over 105 are dangerous for vulnerable people.",
      "If you smell gas or a carbon monoxide alarm sounds, leave the house and call the gas utility or 911 first. An HVAC technician comes after the home is safe.",
    ],
    signs: ["No heat and the house is dropping below 55°F", "No cooling during a heat advisory", "Burning smell from the furnace or air handler", "CO alarm sounding", "Breaker trips repeatedly"],
    process: [
      { title: "Triage by phone", body: "Quick checks for the breaker, thermostat, filter and vent pipes." },
      { title: "Connect", body: "Your call is connected to an independent technician with availability in your area." },
      { title: "Make safe and repair", body: "The technician restores heat or cooling, or makes the system safe and quotes the repair." },
    ],
    costFactors: ["After-hours and holiday rates set by the contractor", "Part availability", "Whether temporary heat is needed"],
    faqs: [
      { q: "How do I keep pipes from freezing if the furnace dies?", a: "Open cabinet doors under sinks on exterior walls, let faucets drip, and use space heaters safely in the coldest rooms until heat is restored." },
    ],
    related: ["furnace-repair", "ac-repair", "heat-pump-repair", "furnace-tune-up"],
    isEmergencyCapable: true,
    glance: [
      { term: "Urgent when", detail: "Freezing temps, heat advisories, vulnerable residents" },
      { term: "Gas or CO", detail: "Leave and call the utility or 911 first" },
    ],
    updated: U,
  },
  {
    slug: "heat-pump-repair",
    name: "Heat Pump Repair",
    shortName: "Heat pump repair",
    category: "heat-pumps",
    status: "PUBLISHED",
    seoTitle: "Heat Pump Repair: Ice, Defrost & Cold Air",
    metaDescription:
      "Heat pump repair explained: iced outdoor units, defrost problems, reversing valves and backup heat. Call or request service.",
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
    ],
    related: ["heat-pump-installation", "ductless-mini-splits", "furnace-repair", "smart-thermostats"],
    isEmergencyCapable: true,
    glance: [
      { term: "Normal", detail: "Light frost and brief defrost cycles" },
      { term: "Not normal", detail: "Unit encased in ice" },
    ],
    updated: U,
  },
  {
    slug: "heat-pump-installation",
    name: "Heat Pump Installation",
    shortName: "Heat pumps",
    category: "heat-pumps",
    status: "PUBLISHED",
    seoTitle: "Heat Pump Installation: Cold-Climate & Dual-Fuel",
    metaDescription:
      "Heat pump and dual-fuel installation explained: cold-climate models, gas furnace backup, sizing and available tax credits.",
    h1: "Heat pump installation",
    answer:
      "A heat pump heats and cools with one outdoor unit. In warm climates a heat pump usually handles all the heating. In colder regions, many homes pair it with a gas furnace (a dual-fuel system), while cold-climate heat pumps can heat well below zero.",
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
    faqs: [
      { q: "Do heat pumps work in cold climates?", a: "Yes. Cold-climate models keep heating well below zero, and dual-fuel systems use gas for the coldest hours. Check your state guide for how common they are where you live." },
    ],
    related: ["heat-pump-repair", "ac-installation", "ductless-mini-splits", "furnace-installation"],
    isEmergencyCapable: false,
    glance: [
      { term: "Best fit", detail: "Replacing an AC in a home with a gas furnace (dual-fuel)" },
      { term: "Incentives", detail: "Federal tax credits and utility rebates, when available" },
    ],
    updated: U,
  },
  {
    slug: "ductless-mini-splits",
    name: "Ductless Mini-Split Installation",
    shortName: "Mini-splits",
    category: "ductless",
    status: "PUBLISHED",
    seoTitle: "Ductless Mini-Split Installation Guide",
    metaDescription:
      "Ductless mini-split installation for additions, finished basements, sunrooms, garages and hot upstairs rooms.",
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
    faqs: [{ q: "Can a mini-split heat in winter here?", a: "Yes. Cold-climate mini-splits keep heating in single-digit weather and below." }],
    related: ["heat-pump-installation", "zoning-systems", "smart-thermostats", "ac-installation"],
    isEmergencyCapable: false,
    glance: [
      { term: "Best for", detail: "Additions, bonus rooms, garages" },
      { term: "Install", detail: "Usually one day per zone" },
    ],
    updated: U,
  },
  {
    slug: "air-filtration",
    name: "Air Filtration & Purification",
    shortName: "Air filtration",
    category: "air-quality",
    status: "PUBLISHED",
    seoTitle: "Whole-Home Air Filtration & MERV Ratings",
    metaDescription:
      "Whole-home air filters and purifiers: media filters, MERV ratings and help for allergy seasons and wildfire smoke.",
    h1: "Whole-home air filtration",
    answer:
      "A whole-home media filter cabinet holds a 4- or 5-inch filter at MERV 11 to 13, which catches much more pollen and dust than a 1-inch filter without choking airflow. It's installed in the return duct next to the furnace.",
    intro: [
      "Pollen seasons, dust and wildfire smoke affect indoor air across much of the country. A better filter is the simplest upgrade for allergy households.",
      "Thin, high-MERV 1-inch filters can restrict airflow enough to freeze AC coils. A deeper media cabinet solves that.",
    ],
    signs: ["Allergies worse indoors", "Dust returns quickly after cleaning", "Pets in the home", "Nearby construction or renovation"],
    process: [
      { title: "Check", body: "Measure the return and static pressure." },
      { title: "Install", body: "Add a media cabinet at the furnace." },
      { title: "Verify", body: "Confirm airflow is within spec." },
    ],
    costFactors: ["Cabinet size", "Return duct modifications", "Add-ons such as UV lights"],
    faqs: [{ q: "How often do media filters need changing?", a: "Usually every 6 to 12 months, depending on pets and dust." }],
    related: ["whole-house-humidifiers", "duct-sealing", "ac-tune-up", "furnace-tune-up"],
    isEmergencyCapable: false,
    glance: [{ term: "Typical rating", detail: "MERV 11–13" }, { term: "Change", detail: "Every 6–12 months" }],
    updated: U,
  },
  {
    slug: "whole-house-humidifiers",
    name: "Whole-House Humidifiers & Dehumidifiers",
    shortName: "Humidity control",
    category: "air-quality",
    status: "PUBLISHED",
    seoTitle: "Whole-House Humidifiers & Dehumidifiers",
    metaDescription:
      "Whole-house humidity control: furnace-mounted humidifiers for dry winters and whole-house dehumidifiers for humid basements.",
    h1: "Whole-house humidifiers and dehumidifiers",
    answer:
      "Heated winter air is dry almost everywhere, and summers are humid across much of the East and South. A furnace-mounted humidifier keeps winter humidity around 30 to 40 percent, and a whole-house dehumidifier keeps basements and summer air below about 50 percent.",
    intro: [
      "Heated winter air in the metro can drop into the teens for relative humidity, which means static shocks, cracked wood floors and dry sinuses.",
      "In summer, basements stay damp and musty. A ducted dehumidifier handles that better than a portable unit you have to empty.",
    ],
    signs: ["Static shocks and dry skin in winter", "Gaps opening in wood floors", "Musty basement", "Condensation on windows in winter (too much humidity)"],
    process: [
      { title: "Choose type", body: "Bypass, fan-powered or steam humidifier; ducted dehumidifier." },
      { title: "Install", body: "Mount on the duct, connect water, drain and controls." },
      { title: "Set", body: "Set targets that avoid window condensation." },
    ],
    costFactors: ["Humidifier type", "Water and drain access", "Dehumidifier capacity"],
    faqs: [{ q: "What indoor humidity should I aim for in winter?", a: "Around 30 to 40 percent, lower on the coldest days to avoid window condensation." }],
    related: ["air-filtration", "furnace-tune-up", "furnace-installation", "smart-thermostats"],
    isEmergencyCapable: false,
    glance: [{ term: "Winter target", detail: "30–40% RH" }, { term: "Summer target", detail: "Below 50% RH" }],
    updated: U,
  },
  {
    slug: "duct-sealing",
    name: "Duct Sealing & Repair",
    shortName: "Duct sealing",
    category: "ductwork",
    status: "PUBLISHED",
    seoTitle: "Duct Sealing & Repair: Fix Hot Rooms",
    metaDescription:
      "Duct sealing and repair: leaky attic ducts, disconnected runs, weak airflow to upstairs rooms and hot bedrooms.",
    h1: "Duct sealing and repair",
    answer:
      "Leaky or disconnected ducts waste conditioned air into attics, crawlspaces and wall cavities, which leaves far rooms weak and bills high. A technician finds leaks, seals joints with mastic, reconnects runs and balances airflow.",
    intro: [
      "Two-story homes often run upstairs ducts through hot attics, and Southern homes frequently have ducts in crawlspaces. A disconnected or crushed run there explains the bedroom that never cools.",
      "Older homes may have undersized returns, which starve the system of air no matter how new the equipment is.",
    ],
    signs: ["One room much hotter or colder", "Weak airflow at far registers", "Dusty house", "Whistling returns"],
    process: [
      { title: "Measure", body: "Static pressure and room airflow readings." },
      { title: "Repair", body: "Seal joints with mastic, reconnect or replace runs, add insulation." },
      { title: "Balance", body: "Adjust dampers and confirm airflow improved." },
    ],
    costFactors: ["Access (attic vs. basement)", "Number of runs", "Return air upgrades"],
    faqs: [{ q: "Is duct cleaning the same as duct sealing?", a: "No. Cleaning removes debris; sealing fixes leaks. Sealing usually does more for comfort and bills." }],
    related: ["zoning-systems", "air-filtration", "ac-repair", "ductless-mini-splits"],
    isEmergencyCapable: false,
    glance: [{ term: "Material", detail: "Mastic or UL-181 tape, not cloth duct tape" }],
    updated: U,
  },
  {
    slug: "smart-thermostats",
    name: "Smart Thermostat Installation",
    shortName: "Thermostats",
    category: "controls",
    status: "PUBLISHED",
    seoTitle: "Smart Thermostat Installation & C-Wire Help",
    metaDescription:
      "Smart thermostat installation: C-wire, heat pump and dual-fuel wiring, and utility programs.",
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
    ],
    costFactors: ["C-wire addition", "Thermostat model", "Multiple zones"],
    faqs: [{ q: "Do I need a C-wire?", a: "Most smart thermostats need one for reliable power. A technician can add one or install an adapter." }],
    related: ["zoning-systems", "heat-pump-installation", "ac-tune-up", "whole-house-humidifiers"],
    isEmergencyCapable: false,
    glance: [{ term: "Watch for", detail: "Heat pump staging set correctly" }],
    updated: U,
  },
  {
    slug: "zoning-systems",
    name: "HVAC Zoning Systems",
    shortName: "Zoning",
    category: "controls",
    status: "PUBLISHED",
    seoTitle: "HVAC Zoning Systems for Multi-Level Homes",
    metaDescription:
      "HVAC zoning for two-story and multi-level homes: motorized dampers and separate thermostats to fix hot upstairs and cold basements.",
    h1: "HVAC zoning systems",
    answer:
      "Zoning uses motorized dampers in the ductwork and a thermostat per zone, so one furnace and AC can send air where it's needed. It's the common fix for two-story homes where upstairs is hot in summer and the basement is cold in winter.",
    intro: [
      "Many two-story homes built in the 1990s and 2000s across the suburbs of most U.S. metros have one thermostat downstairs. Upstairs runs several degrees warmer all summer.",
      "Zoning works best with a two-stage or variable-speed system and a bypass or proper duct design to protect the equipment.",
    ],
    signs: ["Upstairs 4°F or more warmer than downstairs", "Finished basement always cold", "Constant thermostat fights"],
    process: [
      { title: "Design", body: "Check duct layout and equipment staging." },
      { title: "Install", body: "Add dampers, zone panel and thermostats." },
      { title: "Test", body: "Confirm airflow and static pressure in each zone." },
    ],
    costFactors: ["Number of zones", "Duct access", "Equipment compatibility"],
    faqs: [{ q: "Can zoning be added to an existing system?", a: "Often, if the ducts are accessible and the equipment can handle reduced airflow. A variable-speed blower helps." }],
    related: ["smart-thermostats", "duct-sealing", "ductless-mini-splits", "ac-installation"],
    isEmergencyCapable: false,
    glance: [{ term: "Best for", detail: "Two-story homes with one thermostat" }],
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
