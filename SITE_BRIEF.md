# The Learning Index — Site Brief
> Drop this file in the root of the Cursor project. Reference it before building any page.

---

## What This Site Is

The Learning Index (TLI) is a SaaS platform and professional development brand serving special education professionals — primarily diagnosticians and itinerant specialists (TSVIs, O&M). This site is a marketing and conversion tool, not a brochure. Every page has one job.

---

## Brand System

### Colors
```css
:root {
  --tli-green:      #15452f;   /* Primary — nav, hero bg, footer */
  --tli-green-dark: #0e3122;   /* Stats bar, deep sections */
  --tli-green-light:#1e5c3f;   /* Hover states, subtle bg */
  --tli-gold:       #cf9738;   /* CTA buttons, accents, featured badges */
  --tli-gold-light: rgba(207,151,56,0.15); /* Gold tint backgrounds */
  --tli-white:      #ffffff;
  --tli-text-dark:  #1a1a1a;
  --tli-text-mid:   #4a4a4a;
  --tli-text-light: #888888;
  --tli-border:     rgba(0,0,0,0.08);
}
```

### Typography
- Font family: **Sora** (Google Fonts — weights 400, 500, 600)
- Load in `<head>`: `https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap`
- H1: 48px / weight 600 / line-height 1.2
- H2: 32px / weight 600 / line-height 1.3
- H3: 20px / weight 600
- Body: 16px / weight 400 / line-height 1.7
- Small/caption: 13px / weight 400
- Labels/badges: 11px / weight 600 / letter-spacing 0.06em / uppercase

### Spacing
- Section padding: 80px top/bottom, 64px left/right (mobile: 40px / 24px)
- Card padding: 24px
- Grid gap: 16px
- Max content width: 1100px, centered

### Border radius
- Cards: 12px
- Buttons: 8px
- Badges/tags: 20px (pill)
- Small elements: 6px

---

## Voice & Tone
- Warm but bold. Practitioner-to-practitioner.
- Never corporate. Never generic EdTech.
- Use "you" — speak directly to the diagnostician or TSVI
- Headline formula: Name the pain → Promise the relief
- Example: "You didn't become a SPED professional to drown in paperwork"
- Avoid: "solutions", "synergy", "leverage", "empower" (overused)

---

## CTA Hierarchy (enforce on every page)
1. **Primary** — "Try Redact AI Free — 7 Days" → `/redact-ai.html#trial` (gold button)
2. **Secondary** — Workshop/event registration → `/evaled.html`
3. **Tertiary** — Email list opt-in (footer of every page)
4. **Separate track** — "Contact Us" for Contract Services only → `/contact.html`

Every page must end with a CTA. No dead ends.

---

## Pages

### `/index.html` — Homepage
**One job:** Convert visitor to Redact AI free trial
**Sections in order:**
1. Sticky nav
2. Hero — dark green bg, headline, subhead, primary CTA, "No credit card" note
3. Stats bar — 50+ EVALed attendees, 18+ years expertise, 3 tools, FERPA-safe
4. Products grid — 4 cards, Redact AI featured (gold border)
5. Pain section — 4 pain points in 2x2 grid
6. About section — Keon & Monique, practitioner story
7. Footer CTA — primary CTA repeated

**Hero visual:** Video background or high-quality image (see hero notes below)

---

### `/redact-ai.html` — Redact AI Product Page
**One job:** Start a free trial
**Sections:**
1. Nav
2. Hero — product name, tagline, free trial CTA, "No credit card" note
3. How it works — 3-step visual (Upload → Redact → Use safely)
4. Feature list — FERPA-safe redaction, AI-ready output, Chromebook compatible, team access
5. Pricing table — Free Trial (7 days) / Pro ($14.99/mo) / Campus / District
6. FAQ — FERPA questions, what gets redacted, who it's for
7. Footer CTA

---

### `/45days.html` — 45Days Product Page
**One job:** Drive signups / waitlist
**Sections:**
1. Nav
2. Hero — product name, Texas-specific compliance angle, CTA
3. What it tracks — ARD timelines, evaluation deadlines, caseload overview
4. Who it's for — Texas diagnosticians specifically
5. Pricing (TBD)
6. Footer CTA

---

### `/evaled.html` — EVALed PD Page
**One job:** Workshop/event registration
**Sections:**
1. Nav
2. Hero — EVALed brand, "Professional development built for SPED practitioners"
3. Upcoming events — April 26 FERPA-Safe AI workshop ($47), future events
4. Past event recap — Feb 2026 virtual conference (~50 attendees)
5. What makes EVALed different — built by practitioners, practical application, AI-forward
6. Email list CTA — "Get notified of future events"
7. Footer CTA

---

### `/services.html` — Contract Services Page
**One job:** District administrator inquiry / contact
**Sections:**
1. Nav
2. Hero — "Experienced SPED professionals, ready when your district needs them"
3. Services offered — Diagnostician staffing, evaluation services, IEP support
4. Why TLI — credentialed staff, SPED-native, Texas-based
5. Contact form — Name, district, role, need, message
6. Footer

**Note:** This page has a different CTA — no free trial. Contact form only.

---

### `/about.html` — About TLI
**One job:** Build trust
**Sections:**
1. Nav
2. Hero — "Built by SPED professionals, for SPED professionals"
3. Keon's story — TSVI, SFA master's candidate, 16+ years in education
4. Monique's story — 18+ year diagnostician, TLI CEO
5. The mission — equip SPED professionals with tools, training, and expertise
6. TLI platform overview (brief, links to product pages)
7. Footer CTA

---

### `/blog.html` — Blog / Resources
**One job:** SEO + email list growth
**Sections:**
1. Nav
2. Hero — "Resources for SPED professionals"
3. Featured post
4. Post grid (cards: title, date, category tag, excerpt, read more link)
5. Email opt-in — "Get new resources in your inbox"
6. Footer

---

### `/membership.html` — Membership (Coming Soon)
**One job:** Capture email interest before launch
**Sections:**
1. Nav
2. Hero — "EVALed Pro is coming" or "TLI Membership — coming June 2026"
3. What's included preview — member workshops, tool access, community
4. Founding member pricing teaser — $19/mo
5. Email waitlist signup form
6. Footer

---

### `/contact.html` — Contact
**One job:** Route the right inquiry to the right place
**Sections:**
1. Nav
2. Two-column layout:
   - Left: Contract Services inquiry form
   - Right: General / product support contact
3. Footer

---

## Navigation (shared across all pages)

```
Logo (left) | Products  EVALed  Services  About  Blog  |  Try Free (gold button, right)
```

- Sticky on scroll
- Background: `--tli-green` (`#15452f`)
- Logo: "THE LEARNING INDEX" — white text, "INDEX" in gold
- Links: white, 13px, opacity 0.75 default / 1.0 hover
- CTA button: gold bg, dark green text, 12px, weight 600
- Mobile: hamburger menu

---

## Footer (shared across all pages)

```
Left:   Logo + tagline + social icons
Center: Quick links (Products, EVALed, Services, About, Blog)
Right:  Email opt-in ("Get SPED AI tips in your inbox")
Bottom: © 2026 The Learning Index | Privacy | Terms
```

---

## Hero Visual Notes

**Recommended approach — 3 options in priority order:**

### Option 1 (Best): Real video — Keon & Monique
- 15–20 second looping MP4, no audio needed
- Shot on iPhone with natural window light
- Scene: working at a desk, reviewing a document, or at a whiteboard
- Apply dark green overlay at 60% opacity so text is readable
- File: `/assets/video/hero-bg.mp4`
- Fallback: static image `/assets/images/hero-bg.jpg`

### Option 2: Product demo loop
- Screen-recorded Redact AI walkthrough — 10–15 seconds
- Best placed on `/redact-ai.html` specifically, not homepage
- Use on homepage only if Option 1 isn't ready

### Option 3: Stock video (fastest to ship)
- Search: Pexels.com or Mixkit.co — free, no attribution required
- Search terms: "educator desk", "professional documents", "diverse teacher laptop"
- Pick clips with diverse representation — SPED serves all communities
- Apply `--tli-green` overlay at 55–65% opacity
- Avoid: generic "business handshake" or overly corporate stock

**CSS for video hero overlay:**
```css
.hero {
  position: relative;
  background: var(--tli-green);
  overflow: hidden;
}
.hero-video {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.35;
}
.hero-content {
  position: relative;
  z-index: 1;
}
```

---

## File Structure

```
/
├── index.html
├── redact-ai.html
├── 45days.html
├── evaled.html
├── services.html
├── about.html
├── blog.html
├── membership.html
├── contact.html
├── styles/
│   ├── global.css          ← brand system, reset, shared components
│   ├── nav.css
│   ├── footer.css
│   └── [page].css          ← one per page
├── scripts/
│   ├── nav.js              ← sticky nav, mobile menu
│   └── forms.js            ← contact/email form handlers
├── assets/
│   ├── images/
│   ├── video/
│   └── icons/
└── SITE_BRIEF.md           ← this file
```

---

## Netlify Deploy Notes

- No build step required — static files deploy directly
- Set `thelearningindex.com` as primary domain in Netlify DNS
- Add redirects in `netlify.toml` for any old WordPress URLs
- Enable Netlify Forms for contact and email opt-in (no backend needed)

```toml
# netlify.toml
[[redirects]]
  from = "/wp-admin/*"
  to = "/404.html"
  status = 404

[[redirects]]
  from = "/wp-content/*"
  to = "/404.html"
  status = 404
```

---

## What NOT to Build

- No WordPress. No PHP. No CMS of any kind.
- No CSS frameworks (no Bootstrap, no Tailwind) — use CSS variables and custom styles
- No React or JS frameworks — vanilla JS only
- No third-party chat widgets or popups on first load
- No autoplay video with sound

---

*Last updated: April 2026 | Maintained by Keon Armstrong | thelearningindex.com*
