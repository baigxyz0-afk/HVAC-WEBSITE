# HVAC Services Hub — Nationwide HVAC Lead-Gen Site

This site was built from the **Local Service Lead-Gen Website Playbook**, kept in `docs/PLAYBOOK.md`. The playbook remains the process reference; this file documents this project.

It started as a copy of the Caliche Plumbing codebase (`D:\ppc website`). That covered the same stack, lead system, SEO system and audit, re-pointed at a new trade and market.

**Stack:** Next.js 16 (App Router, static) · React 19 · TypeScript · Tailwind CSS v4 · Zod · sharp.

## Snapshot (2026-10-06): nationwide expansion, Waves 1–4

| | |
|---|---|
| Brand / domain | **HVAC Services Hub** on **https://hvacserviceshubs.com** (renamed from Tallgrass Heating & Air on 2026-10-07 to match the domain). Logo: house roofline with a blue snowflake (cooling) and orange flame (heating) on navy; source in `scripts/make-brand.mjs` and `src/components/Logo.tsx`. Files in `public/brand/`: `logo.png` (760x160), `logo@2x.png`, `logo-light.png`, `logo.svg`, `logo-icon-512.png` |
| Market | **All 50 states + Washington, D.C.**, with in-depth city guides for the Kansas City metro |
| Coverage | **22,621 LeadSmart HVAC ZIP codes** (Call), data date 2026-10-05, pulled by `scripts/pull-coverage.mjs` into `src/content/coverage-data.json`. Server-only: the browser calls `/api/zip/?zip=`, so the national list never ships in the JS bundle |
| Business model | Call brand / referral for LeadSmart buyers. `BRAND_PROMISE` and `DISCLOSURE` are in `src/content/site.ts` |
| Services | **15 in 7 categories**, rewritten for every U.S. climate (no longer Kansas City-only) |
| State hubs | **51** at `/locations/{state}/`: intro, 4–5 state-specific sections (climate, fuel mix, risks, seasonal timing, housing/what to ask), at-a-glance facts, focus services with a state-specific reason, major metros, FAQs, same-region links, network ZIP count |
| Cities | **74**: 12 in the Kansas City metro + 62 in high-payout or high-volume HVAC states: CO (Denver, Aurora, Colorado Springs, Fort Collins), NV (Las Vegas, Henderson, Reno), UT (Salt Lake City, Sandy, West Valley City), AZ (Phoenix, Mesa, Scottsdale, Tucson), DE (Wilmington, Dover), MA (Boston, Worcester), OR (Portland, Salem), CA (Sacramento, San Diego), TX (Houston, Dallas, San Antonio, Austin), FL (Tampa, Orlando, Miami, Jacksonville), PA (Philadelphia, Pittsburgh), OH (Columbus, Cincinnati), GA (Atlanta), NC (Charlotte, Raleigh), TN (Nashville), IL (Chicago), MI (Detroit), WA (Seattle), MN (Minneapolis), IN (Indianapolis), MD (Baltimore), NY (New York City, Brooklyn), CA (Los Angeles, San Jose), TX (Fort Worth), OK (Oklahoma City), KY (Louisville), LA (New Orleans), AL (Birmingham), VA (Virginia Beach), WI (Milwaukee), NM (Albuquerque), NJ (Newark), CT (Hartford), SC (Charleston), IA (Des Moines), AR (Little Rock), ID (Boise) · **74** city+service pages: one or more for every city guide, each using the service that matters most locally |
| Indexable URLs | **234** in 6 sitemaps (pages 7, services 17, states 52, cities 74, local-services 74, guides 10), max click depth 2 |
| Audit | `npm run audit:seo`: **0 errors, 0 warnings**. Max sibling-page similarity **0.44** (warning 0.45, error 0.6) |
| Phone | LeadSmart number `(607) 323-6654` (`+16073236654`), shown sitewide and in schema |

### City directory (2026-10-07)

Each state page lists every covered city with a population of at least 25,000 (**1,611 cities** in 50 states + D.C.), with a filter, ZIP samples and a request link. Built by `scripts/build-city-directory.mjs` from LeadSmart coverage plus the LeadSmart city index. These are deliberately **listings on state pages, not separate pages**: 1,000+ thin city pages would be doorway pages. Rules: population is used for ordering only (the source assigns metro totals to neighborhoods), places that only inherit a metro figure need 2+ covered ZIPs, and military bases are excluded. Cities with a full guide link to it.

### Quality gates (`src/lib/quality.ts`)

- **State:** at least 180 words of state-specific copy (intro, sections and focus reasons), at least 3 sections, at least 2 FAQs, at-a-glance facts and at least 3 focus services. All 51 pass; check with `node scripts/state-words.mjs` or `/api/quality-report/` in dev.
- **City:** at least 180 local words. All 12 pass. Before this round, only 4 of 12 passed, and the earlier "12 cities" claim was wrong; it's fixed with real local sections in `locationDepth.ts`.
- **City+service:** at least 90 local words and a passing parent city.
- **Crawl** (`scripts/seo-audit.mjs`): adds 5-word-shingle near-duplicate detection between sibling pages, the ZIP API check and 6-sitemap validation.

### Waves 3–4 (done)

- Cities picked by LeadSmart HVAC payout: UT $72, CO $68, NV $67, AZ $57 average.
- City+service pages show local content first and link to the main service guide for the general process and DIY steps, plus local FAQs. This is what keeps sibling pages distinct (similarity was 0.56 before this change).
- The location menu groups the top states by census region; the footer lists all city guides.

### Next waves (not built yet)

5. Next: more metros in TX, FL, CA, PA, NY and OH, plus more city + service pages, each only with genuinely local content and keeping same-service siblings below the similarity warning.
6. Problem-intent pages, where they don't cannibalize existing guides.

### Kansas City city guides

| State | Region | Cities |
|---|---|---|
| Missouri | Kansas City core | Kansas City |
| Missouri | Eastern Jackson County | Independence, Lee's Summit, Blue Springs |
| Missouri | Northland | Liberty, Gladstone |
| Kansas | Kansas City core | Kansas City, KS |
| Kansas | Johnson County | Overland Park, Olathe, Lenexa, Shawnee, Leawood |

City+service pages: furnace replacement in Kansas City, MO; AC replacement in Overland Park; zoning in Lee's Summit.

## URLs

```
/  /hvac-services/  /hvac-services/{service}/  /emergency-hvac/
/locations/  /locations/{missouri|kansas}/  /locations/{state}/{city}/  /locations/{state}/{city}/{service}/
/resources/  /resources/{guide}/  /about/ /contact/ /faq/ /request-service/ (noindex)  /lp/{slug}/ (noindex)
```

## Run it

```bash
npm install
cp .env.example .env.local
npm run dev
npm run build && npm start
BASE=http://localhost:3102 npm run audit:seo
node scripts/make-brand.mjs && npm run icons   # regenerate logo + favicons
```

## Where things are

- **Content:** `src/content/` holds `services.ts`, `locations.ts` (states, regions, cities, city+service), `articles.ts`, `misc.ts` (FAQs, symptom finder, landing pages, redirects) and `photos.ts`.
- **Coverage:** `src/content/coverage.ts` derives the ZIP checker list from the city ZIPs. Replace it with the real LeadSmart HVAC coverage list when you have one.
- **Brand:** the palette tokens are in `src/app/globals.css` (navy `#14263a`, prairie green `#3a7a4a`, copper CTA `#b4531d`). The logo is an SVG in `src/components/Logo.tsx`, and `public/brand/logo.png` plus the favicons are generated by `scripts/make-brand.mjs`.
- **Photos:** 13 Pexels photos in `public/photos/`, credited in `CREDITS.md`.

## Before launch

- [ ] Trademark and entity check for "Tallgrass Heating & Air" (USPTO Class 37, MO and KS Secretary of State). Note that "Tallgrass" is used by other companies in other industries.
- [ ] Register the domain, then set DNS and HTTPS.
- [x] LeadSmart phone number added. [ ] Load the real HVAC coverage ZIPs.
- [ ] Set `LEAD_WEBHOOK_URL` and its secret. Set up GTM/GA4, Search Console and Bing.
- [ ] Have Privacy and Terms legally reviewed. Terms currently say Missouri law governs.
- [ ] Verify the utility and permit facts on the city pages with each city before launch (the Evergy, Spire, Kansas Gas Service, BPU and IPL service areas, and the Johnson County licensing program).
- [ ] Replace stock photos with real job photos when they're available.
- [ ] Remaining items in playbook A6/B13.

### Fact check log (2026-10-07)

Verified with web searches. Everything else on the city and state pages is general knowledge and should still be reviewed before relying on it in ads.

| Claim | Status | Source |
|---|---|---|
| Utah gas utility is Enbridge Gas Utah (formerly Dominion Energy Utah, renamed June 2024) | Confirmed | [KUTV](https://kutv.com/news/eye-on-your-money/dominion-energy-is-now-enbridge-gas-in-utah) |
| PSNC now does business as Enbridge Gas North Carolina (Sept 2024) | Confirmed | [Enbridge 8-K](https://www.sec.gov/Archives/edgar/data/895728/000110465924104685/tm2425172d1_8k.htm) |
| Summit Utilities replaced CenterPoint as Little Rock's gas utility (Jan 2022) | Confirmed | [Summit Utilities](https://summitutilitiesinc.com/Article/207/Index) |
| Salem Electric is a co-op founded in West Salem, serving parts of Salem and Keizer | Confirmed (FAQ wording refined) | [Salem Electric](https://salemelectric.com/node/5) |
| Austin ECAD: homes 10+ years old need an energy audit disclosed at sale | Confirmed | [Austin Energy](https://austinenergy.com/energy-efficiency/ecad-ordinance/ecad-for-residential-customers) |
| Pikes Peak Regional Building Dept issues permits and licenses contractors for Colorado Springs | Confirmed | [El Paso County](https://bocc.elpasoco.com/?p=131) |
| Mesa gas is split between the City of Mesa and Southwest Gas | Confirmed | [City of Mesa](https://www.mesaaz.gov/residents/energy/natural-gas) |
| Citizens Energy Group operates as a public charitable trust | Confirmed | [Citizens Energy Group](https://info.citizensenergygroup.com/company/about) |
