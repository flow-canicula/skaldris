# Skaldris — Personal Portfolio of Jaime "Flow" Canicula, MTM

Personal portfolio website for **Jaime "Flow" Canicula, MTM** — Technical Architect,
Engineering Leader, and Senior Software Engineering Professional based in
Mandaluyong City, Metro Manila, Philippines.

| | |
|---|---|
| **Live site** | https://flow.skaldris.com |
| **GitHub Pages** | https://flow-canicula.github.io/skaldris/ |
| **Repo** | https://github.com/flow-canicula/skaldris |

Static export built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.
Deployed to both Vercel (primary, custom domain) and GitHub Pages.

---

## About Jaime

13+ years of experience across software development, cloud architecture (AWS),
DevOps, delivery management, and technical program delivery. Currently serving as
Technical Architect – AWS Platform at Nityo Infotech (deployed to IBM / Synapxe),
Software Architect at FSG Technology Ventures, and Cloud Architect – AWS Consultant
at Webisoft.

**Email:** jaimecanicula@skaldris.com  
**GitHub:** https://github.com/flow-canicula · https://github.com/jrcanicula

**Education**
- Master of Technology Management — University of the Philippines Diliman (GWA 1.11 / GPA 4.0; Parangal sa Mag-aaral, 2 consecutive years)
- BS Computer Science — University of the Philippines Los Baños

**Certifications**
- AWS Certified Solutions Architect – Professional
- AWS Certified Solutions Architect – Associate
- AWS Certified Developer – Associate
- AWS Certified SysOps Administrator – Associate
- AWS Certified Cloud Practitioner
- AWS Certified AI Practitioner
- Professional Scrum Master II (PSM II)
- Professional Scrum Master I (PSM I)
- Professional Scrum Product Owner I (PSPO I)

---

## Portfolio projects

| Project | URL | Role |
|---|---|---|
| Digipay | https://digipay.ph/ | Software Architect / Technical Manager |
| Jesuke Anime Tattoo | https://jesukeanimetattoo.skaldris.com/ | Lead Engineer |
| TNP | https://tnp.skaldris.com/ | Lead Engineer |
| Solar | https://solar.skaldris.com/en/ | Lead Engineer |
| Design | https://design.skaldris.com/en/ | Lead Engineer |

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router), `output: 'export'` |
| Language | TypeScript (`strict: true`, `noUncheckedIndexedAccess`) |
| Styling | Tailwind CSS v4 — CSS-first `@theme` tokens |
| Animations | GSAP + SplitType (hero, scroll-reveal) |
| Contact form | Formspree (client `fetch`, single endpoint) |
| Fonts | Self-hosted via `@font-face` (Fugaz One, Work Sans, JetBrains Mono) |
| Testing | Vitest + React Testing Library |
| Package manager | pnpm |
| Node | 20 LTS or 22 |

---

## Getting started

```bash
node --version        # 20 LTS or 22
pnpm install
cp .env.example .env.local   # fill in FORMSPREE_CONTACT_ID
pnpm dev              # http://localhost:3000
```

---

## Commands

```bash
pnpm dev              # local dev server
pnpm build            # static export → out/
pnpm lint             # ESLint
pnpm typecheck        # tsc --noEmit
pnpm test             # Vitest
pnpm exec serve out   # preview the static export locally
```

A change is not done until `pnpm lint && pnpm typecheck && pnpm build` all pass clean.

---

## Environment variables

```bash
# .env.local — never committed
NEXT_PUBLIC_SITE_URL=https://flow.skaldris.com
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=xxxxxxxx

# Set by GitHub Actions CI only — enables basePath for sub-path deployment
NEXT_PUBLIC_BASE_PATH=/skaldris
```

See `.env.example` for the full list. All vars are `NEXT_PUBLIC_` — there is no
server runtime.

---

## Deployment

### Vercel (primary)

Push to `master` triggers a Vercel deploy to `https://flow.skaldris.com`.
No `NEXT_PUBLIC_BASE_PATH` is set — assets are served from root.

### GitHub Pages

Push to `master` triggers the `deploy-pages.yml` workflow:
1. Runs lint, typecheck, and tests
2. Builds with `NEXT_PUBLIC_BASE_PATH=/skaldris` so all asset paths are prefixed
3. Uploads `out/` and deploys to `https://flow-canicula.github.io/skaldris/`

The custom image loader in `src/lib/imageLoader.ts` handles the basePath prefix
for all `next/image` sources. `next/link` applies it automatically via `next.config.ts`.

---

## Project structure

```
/
├── public/
│   ├── .htaccess            # HTTPS redirect, security headers, -Indexes
│   ├── fonts/               # Self-hosted woff2/ttf files
│   ├── og/                  # Open Graph images (1200×630)
│   ├── backgrounds/         # Full-bleed hero/section photos
│   ├── logos/               # Wordmark and logo assets
│   ├── motifs/              # Decorative SVG icons
│   ├── work/                # Project screenshots and banners
│   ├── cv/                  # Downloadable CV PDF
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt             # AI / answer-engine summary
├── src/
│   ├── app/                 # Routes (App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Home
│   │   ├── contact/         # Contact form + thanks
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── forms/           # ContactForm, Honeypot
│   │   ├── layout/          # Header, Footer, Nav
│   │   ├── sections/        # Hero, About, Experience, Skills, Portfolio, CTA, Contact*
│   │   ├── seo/             # JsonLd, Breadcrumbs
│   │   └── ui/              # PageLoader, ScrollReveal, CollapsibleSection
│   ├── content/
│   │   ├── projects.ts      # Portfolio project data (typed, source of truth)
│   │   ├── experience.ts    # Work history and certifications (typed, from CV)
│   │   ├── skills.ts        # Technical skills by category (typed, from CV)
│   │   └── site.ts          # SITE_URL, social handles, nav, OG defaults
│   ├── lib/
│   │   ├── formspree.ts     # Formspree submit helper
│   │   ├── imageLoader.ts   # Custom next/image loader (handles basePath)
│   │   ├── jsonld.ts        # JSON-LD schema builders (Person, WebSite, Breadcrumb)
│   │   ├── messages.ts      # Typed access to en.json copy
│   │   └── seo.ts           # buildMetadata() helper
│   ├── messages/
│   │   └── en.json          # All on-page copy (single source of truth)
│   └── styles/
│       └── globals.css      # Tailwind + @theme tokens + base layer
├── .github/workflows/
│   ├── ci.yml               # Lint + typecheck + test on PRs
│   └── deploy-pages.yml     # Build + deploy to GitHub Pages on master push
├── CLAUDE.md                # AI assistant guide and conventions
└── SECURITY.md              # Threat model and pre-launch checklist
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, philosophy, about, experience, skills, certifications, portfolio, CTA |
| `/contact/` | Contact / inquiry form |
| `/contact/thanks/` | Form success confirmation (`noindex`) |
| Custom 404 | `src/app/not-found.tsx` |
