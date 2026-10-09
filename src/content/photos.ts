import type { CategorySlug, Article } from "./types";

// Real licensed photography (Pexels license). Credits: public/photos/CREDITS.md
export type Photo = { src: string; w: number; h: number; alt: string };

const p = (name: string, w: number, h: number, alt: string): Photo => ({ src: `/photos/${name}.webp`, w, h, alt });

export const photos = {
  technician: p("technician-at-outdoor-ac-unit", 1600, 1067, "HVAC technician inspecting a central air conditioner outside a house"),
  gauges: p("hvac-refrigerant-gauges", 1600, 2288, "Technician reading refrigerant manifold gauges"),
  condenser: p("technician-servicing-condenser", 1600, 1137, "Technician testing an outdoor condensing unit"),
  heating: p("glowing-heating-element", 1600, 1067, "Glowing red heating element"),
  miniSplit: p("ductless-mini-split-wall-unit", 1600, 1067, "Ductless mini-split head mounted high on a white wall"),
  thermostat: p("smart-thermostat-adjusted", 1600, 1067, "Hand adjusting a wall-mounted smart thermostat"),
  livingRoom: p("bright-living-room-air-quality", 1600, 1068, "Bright living room with a wall-mounted air conditioner"),
  ductwork: p("supply-air-ductwork", 1600, 1067, "Sheet-metal supply air ductwork under a ceiling"),
  skyline: p("denver-skyline-sunset", 1600, 1067, "Downtown Denver skyline at sunset"),
  civic: p("denver-skyline-aerial", 1600, 2133, "Downtown Denver towers above Civic Center Park"),
  foothills: p("boulder-flatirons", 1600, 1067, "Boulder neighborhoods below the Flatirons"),
  hail: p("hailstones-after-storm", 1600, 2133, "Hailstones on a deck after a storm"),
  home: p("suburban-two-story-home", 1600, 1067, "Two-story suburban home with a front lawn and driveway"),
  house: p("suburban-house-driveway", 1600, 1067, "Suburban house with a two-car garage"),
};

export const categoryPhotos: Record<CategorySlug, Photo> = {
  cooling: photos.technician,
  heating: photos.heating,
  "heat-pumps": photos.condenser,
  ductless: photos.miniSplit,
  "air-quality": photos.livingRoom,
  ductwork: photos.ductwork,
  controls: photos.thermostat,
};

export const servicePhotoOverrides: Record<string, Photo> = {
  "ac-tune-up": photos.gauges,
  "emergency-hvac-repair": photos.condenser,
};

export const guidePhotos: Record<Article["category"], Photo> = {
  Cooling: photos.technician,
  Heating: photos.heating,
  "Heat pumps": photos.condenser,
  "Air quality": photos.livingRoom,
  "Energy & cost": photos.foothills,
  Emergencies: photos.gauges,
};
