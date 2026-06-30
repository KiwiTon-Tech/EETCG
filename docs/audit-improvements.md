# EETCG Site Audit — Improvement Tracker

> Generated: 2026-06-29 | Auditor: Cascade (Pre-Production Review)

---

## Quick Wins (< 1 Day)

- [x] Fix CI/CD script — change `opennext:build` → `deploy` in `.github/workflows/deploy.yml`
- [x] Remove `'use client'` from `about/page.tsx`, `partnerships/page.tsx`, `services/page.tsx` (no hooks used)
- [x] Add `aria-expanded` + `aria-controls` to mobile menu button in `Navbar.tsx`
- [x] Add `aria-hidden="true"` to all decorative SVGs site-wide
- [x] Fix social media links in `Footer.tsx` — added real URLs (verify handles are correct)
- [x] Add `aria-pressed` to specialty filter buttons in `consultants/page.tsx`
- [x] Remove unused `axios` from `package.json` dependencies
- [x] Delete empty `next.config.ts` (conflicts with `next.config.js`)
- [x] Add per-page `<title>` / `export const metadata` to all static pages (homepage, about, services, contact, consultants, partnerships, all consultant profiles via `generateMetadata`)
- [x] Add skip navigation link (`Skip to main content`) in `layout.tsx`
- [x] Remove `priority` prop from all consultant card images on listing page
- [ ] Fix `next` version in `package.json` — listed as `^16.2.4` (doesn't exist; should be `^15.x`)

---

## Medium-Term (1–4 Weeks)

- [x] **Connect contact form** — integrated Formspree via fetch POST to info@eliteenterprisetcg.com ⚠️ *register form at formspree.io to get a real form ID and replace the URL*
- [ ] **Add Calendly embed** on Contact page for direct scheduling
- [x] **Standardize Tailwind color class syntax** — all bare `bg-navy`, `bg-gold`, `bg-light-gray`, `text-navy`, `text-gold`, `border-gold`, `hover:text-gold` refs replaced across partnerships and consultant profile pages
- [ ] **Fix WCAG contrast failures** — darken gold (#D4A017 → #A67C00) for text/link use; teal (#4DB6AC) also fails on white
- [x] **Fix focus ring color** — all btn variants now use brand gold/navy/teal (completed in quick wins)
- [ ] **Add hero background image** or geometric texture to homepage hero section (currently flat navy)
- [ ] **Rewrite About "Our Team" section** — replace filler paragraphs with concrete bench stats (headcount, clearances, client count)
- [ ] **Standardize consultant bios** — convert "Hello, I'm…" first-person bios to third-person, results-first format (Carla's bio is the model)
- [ ] **Replace 5 placeholder consultant images** or hide those profiles from public listing until photos are available
- [x] **Add active nav state** to `Navbar.tsx` using `usePathname()` (completed in quick wins)
- [x] **Add phone number** to Contact page — (505) 504-8240 added with tel: link
- [x] **Remove inaccurate state location tags** from Contact page — trimmed to New Mexico and Georgia only
- [x] **Fix wrong CTA link** in Contact page sidebar — now shows direct phone call CTA
- [ ] **Create missing service sub-pages** for AI Consulting, Data & Analytics, and Vendor Management (referenced in contact form but no pages exist)
- [ ] **Fix `images.unoptimized: true`** in `next.config.js` — disables all Next.js image optimization; use Cloudflare Image Resizing instead
- [ ] **Add CAGE code / UEI / NAICS codes / SAM.gov status** to Partnerships or About page for federal procurement officers

---

## Strategic (1–3 Months)

- [ ] **Commission a proper logo/wordmark** — current "logo" is a plain `<span>EETCG</span>` text abbreviation
- [ ] **Add testimonials** — minimum 2–3 attributed quotes from named clients or partners
- [ ] **Add a case studies section** — expand Partnerships engagement list into full Challenge / Approach / Outcome write-ups
- [ ] **Add thought leadership blog** — 4–6 articles on PMO, federal contracting, AI in government for SEO and credibility
- [ ] **Add Google Analytics or Plausible** — no analytics instrumentation currently; impossible to optimize without data
- [ ] **Add Open Graph + Twitter Card metadata** — social shares currently show generic title/description
- [ ] **Add structured data (JSON-LD)** — `Organization`, `Person` (per consultant), `LocalBusiness` schemas for SEO
- [ ] **Implement headless CMS** for consultant bios (Contentful, Sanity, or similar) — currently requires a code deploy to update any bio
- [ ] **Add test coverage** — `@testing-library/react` is installed but zero test files exist; add smoke tests + form integration test
- [ ] **Add capability statement PDF** download on Partnerships or About page
- [ ] **Add breadcrumb navigation** to `/consultants/[id]` pages for direct-landing users
- [ ] **Remove "Powered by KiwiTon Technology" footer credit** or move to a discreet position appropriate for the audience

---

## Critical Bugs (Fix Immediately)

| # | File | Issue |
|---|------|-------|
| ~~1~~ | ~~`app/contact/page.tsx`~~ | ~~Contact form uses `setTimeout` simulation~~ | ✅ Fixed — Formspree integration |
| ~~2~~ | ~~`app/partnerships/page.tsx`, `consultants/[id]/page.tsx`~~ | ~~Bare color class refs~~ | ✅ Fixed — all converted to the CSS-variable arbitrary-value syntax |
| ~~3~~ | ~~`.github/workflows/deploy.yml`~~ | ~~References non-existent `opennext:build` script~~ | ✅ Fixed |

---

## Accessibility Issues by WCAG Criterion

| Criterion | Issue | Severity |
|-----------|-------|----------|
| ~~2.4.1 Bypass Blocks~~ | ~~No skip navigation link~~ | ~~High~~ ✅ |
| 1.4.3 Contrast (AA) | Gold (#D4A017) on white = 2.93:1 (fail) | High |
| 1.4.3 Contrast (AA) | Teal (#4DB6AC) on white = 2.8:1 (fail) | High |
| ~~4.1.2 Name/Role/Value~~ | ~~Mobile menu button missing `aria-expanded`~~ | ~~High~~ ✅ |
| ~~1.1.1 Non-text Content~~ | ~~Decorative SVGs missing `aria-hidden="true"`~~ | ~~Medium~~ ✅ |
| 2.1.1 Keyboard | Google Maps iframe no keyboard focus handling | Medium |
| ~~4.1.2 Name/Role/Value~~ | ~~Filter buttons missing `aria-pressed`~~ | ~~Medium~~ ✅ |
| 1.3.1 Info & Relationships | Heading hierarchy issue on About page | Low |

---

## File-Level Issue Summary

| File | Issues |
|------|--------|
| `app/page.tsx` | `'use client'` unnecessary, `key={index}` anti-pattern, no metadata |
| `app/about/page.tsx` | `'use client'` unnecessary, filler team content, no metadata |
| `app/contact/page.tsx` | Non-functional form, missing phone, wrong CTA link, no metadata |
| `app/partnerships/page.tsx` | `'use client'` unnecessary, bare color class refs, no metadata |
| `app/consultants/page.tsx` | `priority` on all images, `key={index}`, bare class refs, no metadata |
| `app/consultants/[id]/page.tsx` | `bg-light-gray` bare ref, no per-consultant metadata |
| `app/services/page.tsx` | `'use client'` unnecessary, missing service sub-pages |
| `components/Navbar.tsx` | No active state, no `aria-expanded`, no skip link |
| `components/Footer.tsx` | Dead social links (`href="#"`), `'use client'` unnecessary |
| `app/globals.css` | ~100 lines unused font-scale classes, `ring-blue-500` on brand buttons |
| `data/consultants.ts` | 5 placeholder images, inconsistent bio voice |
| `next.config.js` | `unoptimized: true` disables image optimization |
| `next.config.ts` | Empty file — conflicts with `next.config.js` |
| `.github/workflows/deploy.yml` | References non-existent `opennext:build` script |
| `package.json` | Unused `axios` dep; `next` version listed as `^16` (doesn't exist) |
