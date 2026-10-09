# Aspenridge Heating & Air — Denver HVAC Lead-Gen Site

This site was built from the Local Service Lead-Gen Website Playbook (`docs/PLAYBOOK.md`), starting from the Tallgrass HVAC codebase (`D:\Ac website`). The market was chosen from the LeadSmart coverage data.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · Zod · sharp.

## Why Denver (LeadSmart HVAC, Call payouts, data date 2026-09-27)

| State | Avg HVAC payout | HVAC ZIPs | Notes |
|---|---|---|---|
| Utah | $72.64 | 182 | Salt Lake City ZIPs pay $78.75–98.75 |
| **Colorado** | **$69.87** | **380** | **Denver $84–97.02; Aurora up to $97.02; Littleton/Larkspur up to $97.65** |
| Nevada | $68.36 | 203 | Las Vegas $98–105, but only a single metro |
| Kansas / Missouri | $46.31 / $38.71 | 133 / 355 | The Kansas City site's market |

Denver gives the best combination of payout and volume. `src/content/coverage.ts` holds **195 real LeadSmart ZIPs** ($77+ tier) across Denver, Arapahoe, Jefferson, Adams, Douglas, Boulder and Broomfield counties. The ZIP checker and lead routing use them; payouts are never shown on the site.

## Snapshot (2026-09-28)

| | |
|---|---|
| Brand | **Aspenridge Heating & Air** · `aspenridgeair.com` returned RDAP 404 (unregistered). Alternatives also free: `summitlineair.com`, `foothillcomfortair.com`, `larkspurair.com` |
| Business model | Call brand / referral for LeadSmart buyers (the disclosure is in `src/content/site.ts`) |
| Services | **16 in 7 categories**, including a Denver-specific **Evaporative (Swamp) Cooler** service |
| Locations | Colorado · 12 cities in 5 regions · 3 city+service pages |
| Guides | 9 · PPC pages: 3 |
| Indexable URLs | **52**, max click depth 2 · `npm run audit:seo`: **0 errors** · no overflow at 375px |
| Temporary phone | `(303) 555-0142` (fictional range; kept out of schema) |

### Cities

| Region | Cities |
|---|---|
| Denver | Denver |
| West metro | Lakewood, Arvada |
| North metro & Boulder | Westminster, Thornton, Boulder |
| Aurora & east metro | Aurora |
| South metro | Littleton, Englewood, Centennial, Parker, Castle Rock |

City+service pages: central AC installation in Denver, AC repair in Aurora, and furnace replacement in Castle Rock (high altitude).

## Run

```bash
npm install
npm run build && npx next start -p 3103
BASE=http://localhost:3103 npm run audit:seo
node scripts/make-brand.mjs && npm run icons
```

## Before launch

- [ ] Trademark and entity check for "Aspenridge Heating & Air" (USPTO Class 37, Colorado Secretary of State). Register the domain.
- [ ] Replace the temporary phone with the LeadSmart number, and set the lead webhook.
- [ ] Verify the utility and permit facts with each city (Xcel, IREA, United Power and Black Hills service areas; city licensing rules).
- [ ] Confirm current Xcel, Denver and state heat pump rebates before promoting them in ads.
- [ ] Have Privacy and Terms legally reviewed (they cite Colorado law).
- [ ] Remaining items in playbook A6/B13.
