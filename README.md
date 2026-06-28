# Skaldris — Personal Portfolio of Jaime "Flow" Canicula, MTM

Personal portfolio website for **Jaime "Flow" Canicula, MTM** — Technical Architect,
Engineering Leader, and Senior Software Engineering Professional based in
Mandaluyong City, Metro Manila, Philippines.

Site URL: **www.skaldris.com**

Static export built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## About Jaime

13+ years of experience across software development, cloud architecture (AWS),
DevOps, delivery management, and technical program delivery. Currently serving as
Technical Architect – AWS Platform at Nityo Infotech (deployed to IBM / Synapxe),
Software Architect at FSG Technology Ventures, and Cloud Architect – AWS Consultant
at Webisoft.

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

## Portfolio projects featured on this site

| Project | URL | Platforms | Role |
|---|---|---|---|
| Digipay | https://digipay.ph/ | Web · Android | Software Architect / Technical Manager |
| Digipay Agent (mobile) | https://play.google.com/store/apps/details?id=com.fsgcapital.digipay | Android | Software Architect / Technical Manager |
| Jesuke Anime Tattoo | https://jesukeanimetattoo.skaldris.com/ | Web | Lead Engineer |
| TNP | https://tnp.skaldris.com/ | Web | Lead Engineer |
| Solar | https://solar.skaldris.com/en/ | Web | Lead Engineer |
| Design | https://design.skaldris.com/en/ | Web | Lead Engineer |

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router), `output: 'export'` |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 — CSS-first `@theme` tokens |
| Contact form | Formspree (single endpoint) |
| Fonts | Self-hosted via `next/font/local` |
| Package manager | pnpm |

## Getting started

```bash
node --version   # 20 LTS or 22
pnpm install
pnpm dev         # http://localhost:3000
```

Copy `.env.example` to `.env.local` and fill in the Formspree ID before running.

## Build

```bash
pnpm build           # static export → out/
pnpm exec serve out  # preview the static export locally
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, about, selected work, skills, experience, contact CTA |
| `/work/` | Full project catalogue |
| `/contact/` | Contact / inquiry form |
| `/contact/thanks/` | Contact success (`noindex`) |
| `/privacy/` | Privacy policy (`noindex`) |
| Custom 404 | `src/app/not-found.tsx` |

## Project structure

```
/
├── public/
│   ├── .htaccess            # HTTPS redirect, security headers, -Indexes
│   ├── fonts/               # Self-hosted woff2/ttf files
│   ├── og/                  # Open Graph images (1200×630)
│   ├── work/                # Project screenshots and assets
│   ├── cv/                  # Downloadable CV PDF
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt             # AI / answer-engine summary
├── src/
│   ├── app/                 # Routes (App Router)
│   ├── components/
│   │   ├── forms/           # ContactForm, Honeypot
│   │   ├── gallery/         # ProjectGrid, Lightbox
│   │   ├── layout/          # Header, Footer, Nav
│   │   ├── sections/        # Hero, About, Experience, Skills, Projects, CtA
│   │   └── seo/             # JsonLd, Breadcrumbs
│   ├── content/
│   │   ├── projects.ts      # Portfolio project data (typed)
│   │   ├── experience.ts    # Work history and certifications (typed, from CV)
│   │   ├── skills.ts        # Technical skills grouped by category (typed, from CV)
│   │   └── site.ts          # SITE_URL, handles, nav, OG defaults
│   ├── lib/
│   │   ├── formspree.ts     # Submit helper
│   │   ├── imageLoader.ts   # basePath utility
│   │   ├── jsonld.ts        # Schema builders (typed)
│   │   └── seo.ts           # buildMetadata() helper
│   └── app/globals.css      # Tailwind + @theme tokens + base layer
├── CLAUDE.md                # AI assistant guide and conventions
└── SECURITY.md              # Threat model and pre-launch checklist
```

## Environment variables

```bash
# .env.local — never committed
NEXT_PUBLIC_SITE_URL=https://www.skaldris.com
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=xxxxxxxx
```

See `.env.example` for the full list. All vars are `NEXT_PUBLIC_` — there is no
server runtime.

## Deployment

Deploys to the root of `www.skaldris.com`. The static export in `out/` is served
via the host's Apache configuration with the `.htaccess` rules in `public/`.
