import type { Article } from "./types";

const P = "2026-09-28";

export const articles: Article[] = [
  {
    slug: "ac-running-but-not-cooling",
    title: "AC running but not cooling? Check these six things first",
    seoTitle: "AC Running but Not Cooling? 6 Things to Check",
    metaDescription:
      "Your AC runs but the house stays warm. Six checks you can do in 15 minutes, what each result means, and when to shut it off and call.",
    category: "Cooling",
    status: "PUBLISHED",
    answer:
      "When an air conditioner runs but doesn't cool, check the thermostat setting, the filter, the outdoor unit's fan, the breaker, the coil for ice and the condensate drain. If the outdoor fan isn't spinning or the lines are iced, shut the cooling off to protect the compressor and call a technician.",
    sections: [
      {
        heading: "1. Thermostat and filter",
        body: ["Most \"broken\" air conditioners are set to heat, set to fan \"on\" instead of \"auto\", or starved of air by a clogged filter."],
        list: [
          "Confirm the mode is Cool and the setpoint is below room temperature.",
          "Set the fan to Auto. With the fan on, it blows room-temperature air between cycles.",
          "Pull the filter. If light can't pass through it, replace it.",
        ],
      },
      {
        heading: "2. The outdoor unit",
        body: ["Go outside while the system is calling for cooling."],
        list: [
          "The top fan should be spinning and warm air blowing up.",
          "If it hums without the fan turning, shut the system off. That's often a failed capacitor, and running it can overheat the compressor.",
          "If it's completely silent, check the breaker and the disconnect switch by the unit.",
          "Look for cottonwood fluff, hail damage or grass matted on the fins. Rinse gently with a hose after switching power off.",
        ],
      },
      {
        heading: "3. Ice on the lines or coil",
        body: [
          "Frost on the large copper line or ice on the indoor coil means too little airflow or low refrigerant. Switch the cooling off, run the fan for a few hours to thaw it, and replace the filter. If it freezes again, low refrigerant from a leak is likely, and that needs a technician.",
        ],
      },
      {
        heading: "4. The condensate drain",
        body: [
          "Many systems have a safety float switch that shuts the AC down when the condensate drain backs up. Look for water in the pan under the coil or around the furnace. Clearing the drain line can bring cooling back.",
        ],
      },
      {
        heading: "When it's just too hot outside",
        body: [
          "On a 97°F Denver afternoon, most systems are designed to hold about 75°F indoors, not 68°F. If the air at the vents is 15 to 20 degrees cooler than the air at the return, the system is probably working and simply at capacity.",
        ],
      },
    ],
    whenToCall: [
      "The outdoor fan doesn't spin or the unit hums without starting.",
      "The coil ices again after thawing and a new filter.",
      "A breaker trips when the AC starts.",
    ],
    faqs: [
      { q: "How cold should the air from my vents be?", a: "Typically 15 to 20°F cooler than the air going into the return. Less than that points to an airflow, charge or component problem." },
      { q: "Can I add refrigerant myself?", a: "No. Refrigerant handling requires EPA 608 certification, and low refrigerant means a leak that should be found." },
    ],
    services: ["ac-repair", "ac-tune-up"],
    relatedArticles: ["ac-frozen-coil", "repair-or-replace-hvac"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "ac-frozen-coil",
    title: "Why is there ice on my air conditioner?",
    seoTitle: "Ice on Your Air Conditioner? Causes and Fixes",
    metaDescription:
      "Ice on the AC lines or indoor coil means low airflow or low refrigerant. How to thaw it safely, what causes it, and when to call.",
    category: "Cooling",
    status: "PUBLISHED",
    answer:
      "Ice on an air conditioner's refrigerant lines or indoor coil comes from too little airflow (a dirty filter, closed vents or a failing blower) or low refrigerant from a leak. Turn cooling off, run the fan to thaw it, fix the airflow, and call if it refreezes.",
    sections: [
      {
        heading: "How to thaw it",
        body: ["Thawing takes two to four hours with the fan running."],
        list: [
          "Set the thermostat to Off and the fan to On.",
          "Place towels near the furnace; a lot of water drains as the ice melts.",
          "Replace the filter while you wait.",
          "Don't chip at the ice. The coil fins are easily damaged.",
        ],
      },
      {
        heading: "Airflow causes",
        body: [
          "A clogged filter is the most common cause. Closing too many vents to push air upstairs, crushed return ducts and a blower motor that's slowing down all do the same thing. Less air across the coil lets it drop below freezing.",
        ],
      },
      {
        heading: "Refrigerant causes",
        body: [
          "Low refrigerant lowers coil pressure and temperature, so the coil freezes even with good airflow. Refrigerant doesn't get used up, so low charge means a leak. A technician finds and repairs the leak before recharging, especially on older R-22 systems where refrigerant is expensive.",
        ],
      },
      {
        heading: "Cool night operation",
        body: [
          "Running the AC on a cool night in late spring or early fall, with outdoor temperatures in the 50s, can also ice some systems. If it only happens then, raise the setpoint or open windows.",
        ],
      },
    ],
    whenToCall: ["The coil refreezes within a day of thawing with a clean filter.", "You see oily spots on refrigerant lines or fittings.", "The blower sounds weak or makes noise."],
    faqs: [
      { q: "Will a frozen AC damage the compressor?", a: "It can, if liquid refrigerant returns to the compressor. Turning cooling off until it thaws protects it." },
    ],
    services: ["ac-repair", "duct-sealing"],
    relatedArticles: ["ac-running-but-not-cooling", "how-often-change-furnace-filter"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "furnace-not-turning-on",
    title: "Furnace not turning on? A step-by-step check",
    seoTitle: "Furnace Not Turning On? Step-by-Step Checks",
    metaDescription:
      "No heat from your gas furnace? Check the thermostat, switch, filter, door, vent pipes and error code before calling a technician.",
    category: "Heating",
    status: "PUBLISHED",
    answer:
      "When a gas furnace won't turn on, check that the thermostat is calling for heat, the furnace switch and breaker are on, the front door is seated, the filter isn't clogged and the outdoor PVC vent pipes aren't blocked by snow. Then read the blinking light code and call a technician with it.",
    sections: [
      {
        heading: "Quick checks",
        body: ["Most no-heat calls in the first cold week of the year have a simple cause."],
        list: [
          "Thermostat set to Heat, setpoint above room temperature, fresh batteries.",
          "The light-switch-style furnace switch near the unit is on.",
          "The breaker is on.",
          "The blower door is fully closed; a safety switch keeps the furnace off if it isn't.",
          "The filter is clean.",
        ],
      },
      {
        heading: "Outdoor vent pipes",
        body: [
          "High-efficiency furnaces have two white PVC pipes on an outside wall or the roof. Drifting snow and ice can block them after a Denver storm. Clear them gently, then reset the furnace by turning the switch off for 30 seconds and back on.",
        ],
      },
      {
        heading: "Read the error code",
        body: [
          "Most furnaces have a small window where an LED blinks a code. The code chart is usually on the inside of the door. Write it down; it tells the technician whether it's an ignition, pressure switch or limit problem before they arrive.",
        ],
      },
      {
        heading: "Common failed parts",
        body: [
          "A dirty flame sensor makes the burners light, then shut off within seconds. A cracked hot-surface ignitor means clicking with no glow. A clogged condensate trap trips the pressure switch. These are routine repairs for a technician.",
        ],
      },
    ],
    whenToCall: ["The reset doesn't help or the furnace locks out again.", "You smell gas or a CO alarm sounds: leave first and call the gas utility.", "Temperatures are below freezing and the house is cooling fast."],
    faqs: [
      { q: "Can I clean the flame sensor myself?", a: "Many handy homeowners do with fine steel wool, but it means removing a part near the gas burners. If you aren't comfortable, have a technician do it." },
      { q: "Is it safe to keep resetting my furnace?", a: "A reset or two is fine. Repeated lockouts mean a safety device is doing its job, and the cause needs diagnosis." },
    ],
    services: ["furnace-repair", "emergency-hvac-repair", "furnace-tune-up"],
    relatedArticles: ["furnace-short-cycling", "carbon-monoxide-alarm-what-to-do"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "furnace-short-cycling",
    title: "Why does my furnace turn on and off so often?",
    seoTitle: "Furnace Short Cycling: Causes and Fixes",
    metaDescription:
      "A furnace that runs a few minutes and shuts off is short cycling. The common causes, from a dirty flame sensor to an oversized furnace.",
    category: "Heating",
    status: "PUBLISHED",
    answer:
      "Short cycling, where a furnace runs briefly and shuts off repeatedly, is usually caused by a dirty flame sensor, a clogged filter tripping the high-limit switch, a poorly placed thermostat, or an oversized furnace. The first two are quick fixes; the last is a design problem.",
    sections: [
      {
        heading: "Burners shut off within seconds",
        body: ["If the burners light and go out within a few seconds, the flame sensor isn't detecting flame. Cleaning it is a common, inexpensive repair."],
      },
      {
        heading: "Runs a few minutes, then stops",
        body: ["If it heats for a few minutes and shuts off while the blower keeps running, the furnace is overheating and the limit switch is protecting it."],
        list: ["Replace the filter.", "Open closed supply registers.", "Check that return grilles aren't blocked by furniture.", "Have the blower and heat exchanger checked if it continues."],
      },
      {
        heading: "Thermostat placement",
        body: ["A thermostat near a supply register, above a lamp or on a sunny wall satisfies too quickly. Moving it or adjusting cycle settings helps."],
      },
      {
        heading: "Oversized equipment",
        body: ["Many furnaces are larger than the home needs. Oversized furnaces heat quickly and shut off, wearing parts and leaving rooms uneven. The fix comes at replacement: a load calculation and a two-stage or modulating furnace."],
      },
    ],
    whenToCall: ["Short cycling continues with a new filter.", "You hear booming at ignition.", "The furnace is locking out."],
    faqs: [{ q: "Does short cycling waste gas?", a: "Yes. Each start-up is less efficient, and it wears the ignitor and blower faster." }],
    services: ["furnace-repair", "furnace-tune-up", "smart-thermostats"],
    relatedArticles: ["furnace-not-turning-on", "how-often-change-furnace-filter"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "carbon-monoxide-alarm-what-to-do",
    title: "Carbon monoxide alarm going off? What to do right now",
    seoTitle: "Carbon Monoxide Alarm Going Off? What to Do",
    metaDescription:
      "If your CO alarm sounds, get everyone outside and call 911 or your gas utility. Then have the furnace, water heater and venting checked.",
    category: "Emergencies",
    status: "PUBLISHED",
    answer:
      "If a carbon monoxide alarm sounds, get everyone, including pets, outside into fresh air and call 911 or your gas utility's emergency line. Don't go back in until responders say it's safe. Then have a licensed technician inspect the furnace, water heater and venting before using them.",
    sections: [
      {
        heading: "Right now",
        body: ["Carbon monoxide is odorless, and symptoms such as headache, dizziness and nausea feel like the flu."],
        list: ["Leave the house and leave the door open behind you.", "Call 911 or Xcel Energy's gas emergency line from outside.", "Get medical help for anyone with symptoms."],
      },
      {
        heading: "Common sources",
        body: ["In Denver homes, the most common sources are a cracked furnace heat exchanger, a blocked or disconnected flue, a water heater backdrafting into a shared chimney, a car running in an attached garage, and generators or grills used too close to the house."],
      },
      {
        heading: "Before using the furnace again",
        body: ["A technician should inspect the heat exchanger, test combustion, check the flue and draft, and confirm the water heater vents properly."],
      },
    ],
    whenToCall: ["Any time the alarm sounds, after the home has been cleared.", "The alarm chirps with low battery or is past its replacement date."],
    faqs: [
      { q: "Where should CO alarms be installed?", a: "On every level and outside sleeping areas, following the manufacturer's instructions." },
      { q: "How long do CO alarms last?", a: "Usually 5 to 10 years. Check the date on the back." },
    ],
    services: ["furnace-tune-up", "furnace-repair", "emergency-hvac-repair"],
    relatedArticles: ["furnace-not-turning-on", "furnace-short-cycling"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "heat-pump-vs-furnace-denver",
    title: "Heat pump or furnace in Denver?",
    seoTitle: "Heat Pump vs. Furnace in Denver",
    metaDescription:
      "Comparing heat pumps, gas furnaces and dual-fuel systems for Denver's winters: comfort, operating cost and when each makes sense.",
    category: "Heat pumps",
    status: "PUBLISHED",
    answer:
      "In Denver, a cold-climate heat pump or a dual-fuel system, with a heat pump plus a gas furnace for the coldest days, is often the best balance of comfort and operating cost. Cold-climate heat pumps can heat alone in homes without gas, while a furnace with AC remains the simplest choice when budgets are tight.",
    sections: [
      {
        heading: "How each one heats",
        body: ["A furnace burns natural gas to heat air. A heat pump moves heat from outdoor air into the house using electricity, which is very efficient in mild weather and less so as it gets colder."],
      },
      {
        heading: "The dual-fuel option",
        body: ["Dual-fuel pairs a heat pump with a gas furnace. The heat pump handles fall, spring and most winter days; the furnace takes over below a set balance point, often around 25 to 35°F. It makes sense when you're replacing the AC anyway."],
      },
      {
        heading: "Cold-climate heat pumps",
        body: ["Newer cold-climate models keep producing useful heat well below zero. They suit all-electric homes and owners who want to drop gas service, but backup heat is still wise for the rare arctic outbreak."],
      },
      {
        heading: "What drives the decision",
        list: ["Electric and gas rates at your address", "Whether gas service already exists", "Age of the furnace and AC", "Available federal tax credits and utility rebates"],
        body: ["A contractor can model operating costs for your home."],
      },
    ],
    whenToCall: ["Your AC or furnace is due for replacement.", "You want a written comparison with operating cost estimates."],
    faqs: [{ q: "Are heat pumps noisy in winter?", a: "Defrost cycles make a whoosh and some steam, which is normal. Modern units are quiet otherwise." }],
    services: ["heat-pump-installation", "furnace-installation", "ac-installation"],
    relatedArticles: ["repair-or-replace-hvac", "heat-pump-iced-over"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "heat-pump-iced-over",
    title: "Heat pump covered in ice? When it's normal and when it isn't",
    seoTitle: "Heat Pump Covered in Ice? Normal vs. Problem",
    metaDescription:
      "Light frost on a heat pump in winter is normal. A unit encased in ice isn't. How defrost works and what to check.",
    category: "Heat pumps",
    status: "PUBLISHED",
    answer:
      "Light frost on a heat pump's outdoor coil in winter is normal, and the unit clears it with periodic defrost cycles. A unit encased in solid ice, or ice that never clears, points to a defrost control problem, low refrigerant, a failed fan or water dripping onto it from above.",
    sections: [
      {
        heading: "Normal defrost",
        body: ["Every 30 to 90 minutes in frosty weather, a heat pump reverses briefly to warm the outdoor coil. You'll see steam and hear a whoosh. That's normal."],
      },
      {
        heading: "Signs of a problem",
        list: ["The coil and top of the unit are solid ice.", "The fan is blocked by ice.", "Ice builds after freezing rain and never clears.", "Backup heat runs constantly."],
        body: [],
      },
      {
        heading: "What you can do",
        body: ["Make sure the unit sits above snow level, clear snow away from the base, and check that a gutter isn't dripping on it. Don't chip at the ice. Warm water poured gently over the coil can clear it after an ice storm."],
      },
    ],
    whenToCall: ["The unit stays encased in ice for more than a few hours.", "Heating output drops and emergency heat runs constantly."],
    faqs: [{ q: "Should I switch to emergency heat?", a: "Only temporarily while you wait for service. Emergency heat is expensive to run." }],
    services: ["heat-pump-repair", "heat-pump-installation"],
    relatedArticles: ["heat-pump-vs-furnace-denver"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "repair-or-replace-hvac",
    title: "Repair or replace your furnace or AC?",
    seoTitle: "Repair or Replace Your Furnace or AC?",
    metaDescription:
      "How to decide between repairing and replacing a furnace or air conditioner: age, repair cost, refrigerant, safety and efficiency.",
    category: "Energy & cost",
    status: "PUBLISHED",
    answer:
      "Repair when the system is under about 10 to 12 years old and the fix is modest. Consider replacement when the equipment is near the end of its life (roughly 12 to 15 years for AC, 15 to 20 for a furnace), the repair is large, the AC uses R-22, or there's a safety issue like a cracked heat exchanger.",
    sections: [
      {
        heading: "Rules of thumb",
        list: ["Multiply the equipment age by the repair cost. If it's higher than about $5,000, pricing replacement makes sense.", "Compressor failures on older ACs usually favor replacement.", "R-22 systems are expensive to recharge.", "A cracked heat exchanger is a safety issue, not a repair."],
        body: [],
      },
      {
        heading: "Replace as a pair?",
        body: ["If the furnace and AC are both over 15 years old, replacing them together saves labor and ensures matched equipment. A new AC on a very old furnace can be limited by the old blower."],
      },
      {
        heading: "Get the right quote",
        body: ["Ask for a load calculation, model numbers, efficiency ratings, warranty terms and whether permits are included. Compare two or three written quotes."],
      },
    ],
    whenToCall: ["You've had two or more repairs in two years.", "Your system uses R-22 and needs refrigerant."],
    faqs: [{ q: "How long do HVAC systems last in Denver?", a: "Air conditioners typically 12 to 15 years and furnaces 15 to 20, depending on maintenance." }],
    services: ["ac-installation", "furnace-installation", "heat-pump-installation"],
    relatedArticles: ["heat-pump-vs-furnace-denver", "ac-running-but-not-cooling"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "how-often-change-furnace-filter",
    title: "How often should you change your furnace filter?",
    seoTitle: "How Often to Change Your Furnace Filter",
    metaDescription:
      "1-inch filters every 1 to 3 months, 4-inch media filters every 6 to 12. How MERV ratings, pets and allergies change the schedule.",
    category: "Air quality",
    status: "PUBLISHED",
    answer:
      "Change a 1-inch furnace filter every one to three months and a 4- or 5-inch media filter every six to twelve months. Change more often with pets, allergies, construction dust or heavy summer and winter use.",
    sections: [
      {
        heading: "Why it matters",
        body: ["A clogged filter restricts airflow, which can freeze the AC coil in summer and trip the furnace's high-limit switch in winter. It also raises energy use."],
      },
      {
        heading: "Choosing a MERV rating",
        list: ["MERV 8: good basic protection for equipment.", "MERV 11–13: better for allergies; best in a 4-inch media cabinet.", "Very restrictive 1-inch filters can choke airflow."],
        body: [],
      },
      {
        heading: "Denver pollen seasons",
        body: ["Spring tree pollen, summer wildfire smoke and dry-climate dust make filter changes at the start of each season a good habit."],
      },
    ],
    whenToCall: ["You want to upgrade to a media filter cabinet.", "The filter gets dirty within weeks."],
    faqs: [{ q: "Which way does the arrow go?", a: "The airflow arrow points toward the furnace, away from the return." }],
    services: ["air-filtration", "ac-tune-up", "furnace-tune-up"],
    relatedArticles: ["ac-frozen-coil", "furnace-short-cycling"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
];

export const publishedArticles = articles.filter((a) => a.status === "PUBLISHED");
export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
