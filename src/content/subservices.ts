import type { Faq, Status } from "./types";

// Level-3 subservice pages: only repairs with their own search intent that the parent service
// page doesn't answer in depth. URL: /hvac-services/{parent}/{slug}/
export type Subservice = {
  slug: string;
  parent: string;
  name: string;
  status: Status;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  signs: string[];
  costFactors: string[];
  safety: string;
  faqs: Faq[];
  related: string[];
  updated: string;
};

const U = "2026-10-08";

export const subservices: Subservice[] = [
  {
    slug: "capacitor-replacement",
    parent: "ac-repair",
    name: "AC Capacitor Replacement",
    status: "PUBLISHED",
    seoTitle: "AC Capacitor Replacement: Signs, Testing & Cost",
    metaDescription: "A failed run or start capacitor is the most common reason an AC hums but won't start. Signs, how technicians test it, cost factors and safety.",
    h1: "AC capacitor replacement",
    answer:
      "A capacitor stores and releases the electrical charge that starts and runs your air conditioner's compressor and outdoor fan motor. When it weakens or fails, the outdoor unit hums, the fan won't spin or the system won't start. Replacing it is one of the most common and least expensive AC repairs.",
    sections: [
      {
        heading: "What the capacitor does",
        body: [
          "Most central air conditioners and heat pumps use a dual run capacitor, a single metal can that serves both the compressor and the outdoor fan motor. Some systems also have a separate start capacitor or a hard-start kit that gives the compressor an extra push at startup.",
          "Capacitors are rated in microfarads (µF) and voltage. Heat is their main enemy, so they fail most often during the first long heat wave of the summer, especially when the outdoor unit sits in direct sun.",
        ],
      },
      {
        heading: "How a technician confirms it",
        body: ["A capacitor can look normal and still be weak, so testing matters more than a visual check."],
        list: [
          "Shut off power at the disconnect and discharge the capacitor safely.",
          "Measure its actual capacitance with a meter and compare it to the rating on the label.",
          "Check for a bulging or leaking top, burnt terminals or damaged wires.",
          "Confirm the fan motor and compressor run correctly after replacement and check amp draw.",
        ],
      },
      {
        heading: "Why it shouldn't wait",
        body: [
          "When a compressor tries to start without a working capacitor, it can overheat and trip on its internal protection repeatedly. Running a system in that state can shorten compressor life, which turns an inexpensive repair into an expensive one. If the outdoor unit hums without the fan spinning, switch the system off until it's repaired.",
        ],
      },
    ],
    signs: ["Outdoor unit hums but the fan doesn't spin", "AC clicks on and off without starting", "Fan spins only after a push (don't try this yourself)", "Warm air from vents while the indoor blower runs", "Capacitor top is bulging or leaking"],
    costFactors: ["Single or dual capacitor and its rating", "Whether a hard-start kit is added", "After-hours or weekend visit", "Any related contactor or fan motor damage"],
    safety: "Capacitors hold a dangerous charge even with the power off. Never open the outdoor unit's electrical panel or touch the capacitor yourself.",
    faqs: [
      { q: "How long do AC capacitors last?", a: "Often 5 to 10 years, less in very hot climates or when the unit sits in direct sun." },
      { q: "Can a bad capacitor damage my compressor?", a: "It can. Repeated failed starts overheat the compressor, so switch the system off if the outdoor unit hums without the fan running." },
      { q: "Should I add a hard-start kit?", a: "It can help older compressors start more easily. A technician can tell whether your system would benefit." },
    ],
    related: ["refrigerant-leak-repair", "ac-drain-line-clog"],
    updated: U,
  },
  {
    slug: "refrigerant-leak-repair",
    parent: "ac-repair",
    name: "Refrigerant Leak Repair",
    status: "PUBLISHED",
    seoTitle: "AC Refrigerant Leak Repair & Recharge: What to Know",
    metaDescription: "Low refrigerant means a leak. How technicians find AC refrigerant leaks, repair vs. replace, R-22 vs. R-410A and newer refrigerants, and costs.",
    h1: "AC refrigerant leak repair",
    answer:
      "Air conditioners don't use up refrigerant, so a system that's low has a leak. The right repair is to find and fix the leak, then recharge to the manufacturer's specification. Simply adding refrigerant without fixing the leak means paying for the same problem again.",
    sections: [
      {
        heading: "How leaks are found",
        body: ["Technicians use several methods, often in combination, because small leaks can be hard to locate."],
        list: [
          "Electronic leak detectors that sense refrigerant at joints, coils and valves.",
          "Bubble solution on suspected joints and service valves.",
          "Nitrogen pressure testing after recovering the refrigerant.",
          "UV dye in some cases, to show slow leaks over time.",
        ],
      },
      {
        heading: "Common leak locations",
        body: [
          "Indoor evaporator coils develop small pinhole leaks over time, especially some aluminum and copper coils. Other common spots include service valve cores, brazed joints at the outdoor unit, and line sets damaged by lawn equipment or rubbing against framing.",
        ],
      },
      {
        heading: "Repair, replace the coil, or replace the system",
        body: [
          "A leaking valve core or a joint can often be repaired at reasonable cost. A leaking evaporator coil may need replacement, which is a bigger job. Older systems that use R-22, which is no longer produced, are usually expensive to recharge, so a large leak in an R-22 system often makes replacement the better value. Newer systems use R-410A, and the industry is moving to lower-impact refrigerants such as R-454B and R-32.",
        ],
      },
    ],
    signs: ["Ice on the larger copper line or indoor coil", "AC runs constantly but the house won't cool", "Hissing or bubbling sound near the indoor or outdoor unit", "Higher electric bills without a change in use", "Oily residue on refrigerant lines or fittings"],
    costFactors: ["Where the leak is and how accessible it is", "Repairing a joint vs. replacing a coil", "Type and amount of refrigerant (R-22 is costly)", "System age and whether replacement makes more sense"],
    safety: "Refrigerant handling requires EPA Section 608 certification. Don't use DIY recharge kits on home systems; they can overcharge the system and hide the leak.",
    faqs: [
      { q: "Can I just top off my refrigerant every year?", a: "It's possible but wasteful and can damage the compressor. Finding and fixing the leak is the right repair." },
      { q: "Is R-22 still available?", a: "R-22 is no longer produced in the U.S., so only reclaimed supply remains and it's expensive." },
      { q: "Why is there ice on my AC lines?", a: "Low refrigerant or restricted airflow. Turn off cooling, run the fan to thaw it, replace the filter, and call if it returns." },
    ],
    related: ["capacitor-replacement", "ac-drain-line-clog"],
    updated: U,
  },
  {
    slug: "ac-drain-line-clog",
    parent: "ac-repair",
    name: "AC Drain Line Clog Repair",
    status: "PUBLISHED",
    seoTitle: "Clogged AC Drain Line: Fix, Float Switch & Prevention",
    metaDescription: "A clogged AC condensate drain trips the float switch or leaks water. How to tell, what's safe to do, how technicians clear it, and how to prevent it.",
    h1: "Clogged AC drain line repair",
    answer:
      "Your air conditioner removes water from the air and drains it through a condensate line. When algae or debris clogs that line, water backs up into the drain pan, a float switch shuts the system off, or water leaks onto floors and ceilings. Clearing and treating the drain usually restores cooling the same day.",
    sections: [
      {
        heading: "Why drains clog",
        body: [
          "Warm, wet drain lines are ideal for algae and slime, especially in humid climates where systems run for months. Dust that gets past a dirty filter adds to the buildup. Attic air handlers are the riskiest, because an overflow can damage ceilings below.",
        ],
      },
      {
        heading: "What's safe to check yourself",
        body: ["With the system off, you can look for obvious signs before calling."],
        list: [
          "Check whether the drain pan under the indoor unit holds standing water.",
          "Look for a tripped float switch on the drain line or pan.",
          "Find where the drain exits outside and see if water is dripping while the AC runs.",
          "Pour a cup of distilled vinegar into the drain's cleanout in spring as prevention, if your line has an accessible cleanout.",
        ],
      },
      {
        heading: "How a technician clears it",
        body: [
          "Technicians clear the line with a wet vacuum from the outdoor end, compressed nitrogen or a flush, then treat it to slow regrowth. They also check the trap, pan and float switch, and may add a cleanout tee so future maintenance is easier. Attic units should have both a float switch and a secondary pan.",
        ],
      },
    ],
    signs: ["AC shuts off and won't restart, with water in the pan", "Water around the indoor unit or furnace", "Water stains on the ceiling under an attic unit", "Musty smell near the air handler", "Water dripping from a secondary drain over a window"],
    costFactors: ["How severe the clog is and how accessible the line is", "Adding a cleanout, float switch or secondary pan", "Water damage repairs, if the pan overflowed", "Pan replacement if it's rusted or cracked"],
    safety: "Turn the system off before checking the pan. Don't use bleach in drain lines with certain components unless your contractor approves it; vinegar is the usual safe choice.",
    faqs: [
      { q: "Why did my AC stop with water in the pan?", a: "A clogged drain filled the pan and tripped the float switch, which is designed to protect your home from water damage." },
      { q: "How often should an AC drain be cleaned?", a: "At least once a year during maintenance, and more often in very humid climates." },
      { q: "Can a clogged drain freeze my coil?", a: "Not directly, but water backing up and poor airflow often appear together. A technician checks both." },
    ],
    related: ["capacitor-replacement", "refrigerant-leak-repair"],
    updated: U,
  },
  {
    slug: "furnace-ignitor-replacement",
    parent: "furnace-repair",
    name: "Furnace Ignitor Replacement",
    status: "PUBLISHED",
    seoTitle: "Furnace Ignitor Replacement: Signs, Types & Cost",
    metaDescription: "A cracked or worn hot surface ignitor is a top reason a furnace won't light. Signs, how it's tested, silicon carbide vs. nitride ignitors, and costs.",
    h1: "Furnace ignitor replacement",
    answer:
      "Most modern gas furnaces light their burners with a hot surface ignitor that glows red-hot. Ignitors are fragile and wear out, and when one cracks or weakens the furnace clicks and tries to start but never lights. Replacing a failed ignitor is a common, relatively quick furnace repair.",
    sections: [
      {
        heading: "How the ignition sequence works",
        body: [
          "When the thermostat calls for heat, the inducer motor starts, a pressure switch confirms venting, and the ignitor heats up. The gas valve then opens, the burners light and a flame sensor confirms the flame. If the ignitor doesn't get hot enough, the gas valve never opens, and after several tries the furnace locks out.",
        ],
      },
      {
        heading: "Types of ignitors",
        body: ["Ignitors are matched to the furnace model, so the right replacement matters."],
        list: [
          "Silicon carbide ignitors are common on older furnaces and are brittle.",
          "Silicon nitride ignitors are more durable and used on many newer furnaces.",
          "Some furnaces use intermittent pilot or spark ignition instead.",
        ],
      },
      {
        heading: "How it's diagnosed",
        body: [
          "A technician reads the furnace's error code, watches the ignition sequence and checks the ignitor's resistance and the voltage it receives. Because a dirty flame sensor causes a different symptom, with burners lighting and then shutting off, separating the two prevents replacing the wrong part.",
        ],
      },
    ],
    signs: ["Furnace clicks and tries to start but burners never light", "No orange glow visible through the sight glass during startup", "Furnace locks out after several tries", "Error code pointing to an ignition failure", "Visible crack in the ignitor element"],
    costFactors: ["Ignitor type and furnace brand", "Whether the control board or wiring also needs repair", "After-hours or holiday visits", "Access to the furnace"],
    safety: "If you smell gas, leave the home and call your gas utility or 911 from outside. Don't touch the ignitor; skin oils can shorten its life and it gets extremely hot.",
    faqs: [
      { q: "How long does a furnace ignitor last?", a: "Often several years, but they're fragile and can crack sooner. Frequent cycling shortens their life." },
      { q: "What's the difference between an ignitor and a flame sensor problem?", a: "With a bad ignitor, burners never light. With a dirty flame sensor, burners light and then shut off within seconds." },
      { q: "Should I keep a spare ignitor?", a: "Some homeowners in very cold climates do, but installation should be done by a technician." },
    ],
    related: [],
    updated: U,
  },
  {
    slug: "duct-cleaning",
    parent: "duct-sealing",
    name: "Air Duct Cleaning",
    status: "PUBLISHED",
    seoTitle: "Air Duct Cleaning: When It Helps & What It Costs",
    metaDescription: "When air duct cleaning is worth it, when it isn't, how a proper cleaning is done, and how it differs from duct sealing.",
    h1: "Air duct cleaning",
    answer:
      "Duct cleaning removes dust and debris from supply and return ducts using negative-pressure vacuums and agitation tools. It's worth doing after renovation, pest problems, visible mold or heavy debris, but it isn't a routine yearly need. It's different from duct sealing, which fixes leaks.",
    sections: [
      {
        heading: "When cleaning makes sense",
        body: ["Duct cleaning is most useful when there's a specific reason, rather than as routine maintenance."],
        list: [
          "After remodeling or drywall work that put dust into the system.",
          "After rodent or insect infestations in the ductwork.",
          "When visible mold growth is present (the moisture source must also be fixed).",
          "When registers puff visible dust or debris when the system starts.",
          "When moving into a home with an unknown maintenance history.",
        ],
      },
      {
        heading: "What a proper cleaning includes",
        body: [
          "A thorough cleaning puts the duct system under negative pressure with a powerful vacuum while brushes or air whips loosen debris from the inside of each run. The blower, coil and drain pan should also be inspected and cleaned, because cleaning ducts while leaving a dirty blower simply re-contaminates them.",
        ],
      },
      {
        heading: "Cleaning versus sealing",
        body: [
          "Cleaning removes what's inside the ducts; sealing fixes leaks in the duct walls and joints. Leaky return ducts in attics and crawlspaces pull in dust and insulation, so sealing them often reduces the dust problem that led people to consider cleaning in the first place.",
        ],
      },
    ],
    signs: ["Visible dust blowing from registers", "Debris or pest droppings in ducts", "Recent renovation or drywall work", "Musty smell when the system runs", "Dust returns quickly after cleaning"],
    costFactors: ["Number of supply and return runs", "Accessibility of ducts", "Cleaning the blower and coil at the same time", "Remediation if mold or pests are present"],
    safety: "Be cautious of very low-priced 'whole house' duct cleaning offers, which may be a quick vacuum of registers rather than a full cleaning.",
    faqs: [
      { q: "How often should air ducts be cleaned?", a: "Only when there's a reason, such as renovation dust, pests, mold or visible debris. Many homes never need it." },
      { q: "Does duct cleaning lower energy bills?", a: "Not much on its own. Sealing leaky ducts usually has a bigger effect on bills and comfort." },
      { q: "Will duct cleaning help my allergies?", a: "It can help if ducts are heavily contaminated, but a better filter and sealed returns usually matter more." },
    ],
    related: [],
    updated: U,
  },
];

export const publishedSubservices = subservices.filter((s) => s.status === "PUBLISHED");

export function getSubservice(parent: string, slug: string) {
  return publishedSubservices.find((s) => s.parent === parent && s.slug === slug);
}

export function subservicesOf(parent: string) {
  return publishedSubservices.filter((s) => s.parent === parent);
}
