# Strategy: Tallgrass Heating & Air (Phase 1, 2026-09-28)

1. **Brand:** Tallgrass Heating & Air. It names the prairie Kansas City was built on and doesn't imitate any national HVAC brand. `tallgrassair.com` returned RDAP 404. Run a USPTO Class 37 search and MO/KS entity searches before launch.
2. **Market:** Kansas City metro, MO + KS. It has a real two-season HVAC load (humid 95°F+ summers, subzero cold snaps) and housing that spans 1920s bungalows to 2010s two-stories. It also straddles two states, like the SteadWell model. Competition is heavy from large local brands, so the site competes on local depth, not volume.
3. **Voice:** plain and practical, with safety first (gas, CO). The palette is navy, prairie green and copper CTAs. Headings use a serif; UI uses a sans. CTAs: "Call now", "Request service", "Check my ZIP".
4. **SERP (not a live scrape):** local packs dominated by large KC HVAC brands and home-service marketplaces. The organic gap is city-specific, housing-era content.
5. **Keyword clusters → page:** "hvac/ac repair kansas city" → home and service pages; "{service} {city}" → city or city+service pages; problem queries ("ac not cooling", "furnace won't turn on", "heat pump iced") → guides; cost → cost-factor sections.
6. **IA:** see the README URL tree.
7. **Taxonomy:** 7 categories, 15 services. Sub-problems are sections within pages, not thin pages.
8. **Locations:** state → city → city+service, gated by `lib/quality.ts` (at least 180 local words per city; at least 90 per city+service page).
9. **Homepage:** hero → promise band → urgent banner → categories → symptom finder → local knowledge (summers, cold snaps, dual-fuel) → process → service area + ZIP → guides → FAQ → CTA.
10. **PPC:** `/lp/ac-repair`, `/lp/furnace-repair`, `/lp/ac-replacement`, noindex with whitelisted `?kw=`. Run AC pages May–Sep and furnace pages Oct–Feb.
11. **Linking:** breadcrumbs, mega menus, related services, nearby towns, and the topic linker (`lib/linker.tsx`).
12. **Tech:** same as the playbook: static Next.js, no DB at launch.
13. **SEO:** see playbook B9.
14. **Leads:** 3-step form with an urgent path (no heat or AC, burning smell), plus gas/CO safety messaging → signed webhook → LeadSmart buyers.
