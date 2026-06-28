# CLAUDE.md

Operational guide for any AI assistant or developer working in this repository.
Read this file **before** writing code. It defines what the project is, the
constraints that cannot be broken, and the conventions that keep the codebase
coherent. For the threat model and pre-launch checklist, read [`SECURITY.md`](./SECURITY.md).

---

## 1. What this is

A personal portfolio website for **Jaime "Flow" Canicula, MTM** — Technical
Architect, Engineering Leader, and Senior Software Engineering Professional based
in Mandaluyong City, Metro Manila, Philippines. The site lives at
**www.skaldris.com**.

Jaime's professional identity is fully public. The site's job is to present that
identity clearly and compellingly to two audiences:

1. **Potential clients / collaborators** — companies or individuals seeking a
   Technical Architect, AWS cloud consultant, engineering leader, or senior
   full-stack engineer for freelance or consulting engagements.
2. **Potential employers** — recruiting teams evaluating Jaime for senior
   engineering, architecture, or leadership roles.

It is a **static site** — no server runtime, no database, no auth, no sessions.
If a task seems to require any of those, stop and re-read this section.

### The non-negotiable content rule

- **`FACTS-ONLY`** — Every claim on this site must be traceable to the CV
  (`CV-Jaime_Canicula_Resume-May-2026.pdf`). No invented testimonials, invented
  metrics, invented awards, or invented skills. If it is not in the CV or
  verifiable, omit it. Real metrics from the CV (e.g. "up to 30% reduction in
  infrastructure costs", "grew team from 7 to 12 engineers") are fine to use
  verbatim; do not embellish them.

---

## 2. Who Jaime is (source of truth for copy and structured data)

All copy, JSON-LD, metadata, and `llms.txt` must be consistent with this summary,
drawn directly from the CV.

**Full name:** Jaime Canicula, MTM
**Handle:** Flow
**Location:** Mandaluyong City, Metro Manila, Philippines
**Email:** jaimecanicula@gmail.com
**GitHub:** https://github.com/flow-canicula · https://github.com/jrcanicula

**Professional summary (from CV):**
Technical Architect, Engineering Leader, and Senior Software Engineering
Professional with extensive experience across software development, cloud
architecture, cloud engineering, DevOps, delivery management, stakeholder
management, and technical program delivery.

**Current roles (as of May 2026):**
- Technical Architect - AWS Platform @ Nityo Infotech Services Inc. (contractor, deployed to IBM for Synapxe) — Sept 2024-present
- Software Architect (Technical Manager / Technical Project Manager / Scrum Master) @ FSG Technology Ventures Inc. (consultant) — Oct 2020-present
- Cloud Architect - AWS Consultant @ Webisoft (retainer) — Oct 2025-present

**Education:**
- Master of Technology Management — University of the Philippines Diliman, Quezon City (GWA 1.11 / GPA 4.0; Parangal sa Mag-aaral for 2 consecutive years)
- Bachelor of Science in Computer Science — University of the Philippines Los Banos

**Certifications:**
- AWS Certified Solutions Architect - Professional
- AWS Certified Solutions Architect - Associate
- AWS Certified Developer - Associate
- AWS Certified SysOps Administrator - Associate
- AWS Certified Cloud Practitioner
- AWS Certified AI Practitioner
- Professional Scrum Master II (PSM II)
- Professional Scrum Master I (PSM I)
- Professional Scrum Product Owner I (PSPO I)

**Areas of specialization (from CV):**
Software Design and Architecture Strategy · System Integration · Cloud Engineering
and Infrastructure Leadership (AWS) · Web & API Platform Strategy & Governance ·
Agile Product Development and Leadership (Scrum, Kanban, XP, Hybrid) · Program &
Project Management · People Leadership, Mentoring & Team Capability Building ·
Operational Excellence & Process Optimization · Strategic Business Analysis &
Stakeholder Engagement · Customer & Partner Relationship Management ·
AI-Driven Innovation & Solution Development · Product Visioning & Roadmap
Execution · Technology Strategy & Roadmap Planning

**Technical skills (from CV, grouped by category):**

| Category | Technologies |
|---|---|
| Backend | C#.NET (.NET Core, .NET Standard), Node.js, Python, PHP, Java (Spring Boot) |
| Frontend | React (SPA, Next.js, Gatsby), TypeScript, JavaScript, jQuery, HTML, CSS |
| Mobile | React Native (Android / iOS) |
| Real-time | SignalR, WebSockets |
| CI/CD & GitOps | GitHub Actions, Jenkins, Azure DevOps, ArgoCD, Helm |
| Containers & Orchestration | Docker, Docker Compose, Kubernetes (k8s) |
| Code Quality & Security | SonarQube, Snyk, Checkmarx, ESLint |
| Cloud Platforms | AWS, Azure; Lambda, Azure Functions; API Gateway, Azure API Management |
| Databases | MSSQL, MySQL, PostgreSQL, Amazon Aurora; MongoDB, DynamoDB, CouchDB |
| Messaging | RabbitMQ, Amazon MQ, Amazon SQS, Apache Kafka (AWS MSK), Amazon Kinesis |
| Workflow Orchestration | AWS Step Functions |
| System Integration | Boomi, MuleSoft |
| AWS Governance | Control Tower, IAM Identity Center |
| Data Engineering | AWS Glue, Athena, Redshift, Kinesis, ETL design, Data Lake architecture |
| IaC | Terraform, AWS CloudFormation, OpenTofu, Ansible |
| Observability | CloudWatch, Prometheus, Grafana, Datadog, New Relic, Loki, ELK, Tempo, OpenTelemetry, Rollbar |
| Cloud Networking | AWS VPC, Subnets, NAT/IGW, PrivateLink, Transit Gateway, ALB/NLB, WAF, Shield, Route 53 |
| Scripting | Bash, PowerShell, Python |
| Version Control | Git (GitHub, GitLab, Bitbucket) |
| Collaboration Tools | Jira, Confluence, Azure Boards |
| Enterprise Frameworks | Agile, Scrum, DevOps, TOGAF |

**Work history (last 10 years, reverse chronological):**
1. Technical Architect - AWS Platform @ Nityo / IBM / Synapxe (HealthTech) — 09/2024-present
2. Cloud Architect - AWS Consultant @ Webisoft (Blockchain & Platform Engineering) — 10/2025-present
3. Software Architect / Technical Manager @ FSG Technology Ventures (FinTech, Banking, Insurance) — 10/2020-present
4. Senior Analyst/Programmer (Lead Engineer) @ Nityo / EssilorLuxottica (HealthTech, Eye Care) — 08/2020-04/2024
5. Software Development Manager @ Cynder Technologies (FinTech, HealthTech, Telco) — 06/2020-10/2023
6. Head of Engineering and Director @ Tagani Inc. (Agritech) — 09/2019-02/2021
7. Senior Full-Stack Developer @ Flying Cockatoo Inc. (FinTech) — 11/2018-05/2020
8. Senior Software Developer @ Shore 360 / Damstra Technology (Mining, Workforce Management) — 07/2018-10/2018
9. L2 Software Engineer @ 888 Philippines / Accenture (Software Development Consulting) — 04/2017-07/2018
10. Technology Consultant (.NET Developer/Engineer) @ Hewlett-Packard Enterprise / DXC Technology — 01/2016-04/2017

**Portfolio projects showcased:**

| Project | URLs | Role |
|---|---|---|
| Digipay | https://digipay.ph/ · [Google Play](https://play.google.com/store/apps/details?id=com.fsgcapital.digipay) | Software Architect / Technical Manager |
| Jesuke Anime Tattoo | https://jesukeanimetattoo.skaldris.com/ | Lead Engineer |
| TNP | https://tnp.skaldris.com/ | Lead Engineer |
| Solar | https://solar.skaldris.com/en/ | Lead Engineer |
| Design | https://design.skaldris.com/en/ | Lead Engineer |

Full project data lives in `content/projects.ts` — that is the single source of
truth for project copy, highlights, tech stacks, and URLs. All facts must be
traceable to the CV or verified public sources (see `FACTS-ONLY` rule).

**Digipay key facts (for copy and JSON-LD):**
- BSP-registered Operator of Payment System — OPS-COR-2020-0086 (June 2020)
- 16,500+ merchant/agent locations across the Philippines
- Android agent app — 50,000+ Google Play installs
- Services: bills payment, e-load, remittance (DigiPadala), mobile money, micro-insurance
- Parent company: FSG Technology Ventures, Inc. / FSG Capital, Inc., Mandaluyong
- Engineering team grew from 7 to 12 under Jaime's leadership
- Notable: RCBC DiskarTech integration (Oct 2021) — 21,500+ partner agents accessible

---

## 3. Tech stack (pinned intentions)

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Next.js 15**, App Router | `app/` directory only. No `pages/`. |
| Output | **Static export** - `output: 'export'` | The build emits `out/`. No Node server in prod. |
| Language | **TypeScript, `strict: true`** | Also `noUncheckedIndexedAccess`. No `any` without a written reason. |
| Styling | **Tailwind CSS v4** (CSS-first `@theme`) | Design tokens live in CSS, not a JS config. See §7. |
| Contact form | **Formspree** (client `fetch`) | One endpoint. See §8. |
| Fonts | **Self-hosted** via `next/font/local` | No runtime calls to Google Fonts (CSP + privacy). |
| i18n | **None.** English only. | No `next-intl`, no `[locale]` segment. Routes are flat. |
| Analytics | Optional, privacy-first (Plausible) | Off by default; if added, update CSP. |
| Package manager | **pnpm** | Lockfile is `pnpm-lock.yaml`. |
| Node | **20 LTS or 22** | Match `.nvmrc`. |

---

## 4. Commands

```bash
pnpm install            # install deps (commit pnpm-lock.yaml)
pnpm dev                # local dev server (http://localhost:3000)
pnpm build              # next build -> produces static export in out/
pnpm start              # NOT used in prod (no server). Local preview only.
pnpm lint               # eslint (next/core-web-vitals + strict TS rules)
pnpm typecheck          # tsc --noEmit
pnpm format             # prettier --write
pnpm exec serve out     # preview the real static output locally
```

A change is not "done" until `pnpm lint && pnpm typecheck && pnpm build` all
pass clean. See §14.

---

## 5. Static-export rules (the sharp edges)

`output: 'export'` removes the server. The following **do not exist** at runtime
and must not be used:

- Route Handlers (`app/**/route.ts`) that need to run on a request
- Server Actions / `'use server'`
- `next/headers`, `cookies()`, `headers()`, `draftMode()`
- Middleware that depends on a running server (`middleware.ts` is ignored on export)
- `dynamic = 'force-dynamic'`, ISR, on-demand revalidation
- `next/image` default optimization

Required configuration in `next.config.ts`:

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
```

Patterns that are fine:

- Fully static pages with the Metadata API
- Client components (`'use client'`) for the contact form, mobile menu, lightbox
- Client-side `fetch()` to Formspree
- `generateStaticParams()` if/when a local data file drives `[slug]` routes
- Build-time data: import local JSON/TS in a Server Component during build

Images: since optimization is off, **pre-process assets at author time** (export
web-optimized `.avif`/`.webp` at the sizes actually used; provide `width`/`height`
to avoid CLS). Don't rely on Next to resize.

---

## 6. Repository structure

```
.
├── CLAUDE.md                 <- you are here
├── SECURITY.md               <- threat model, OWASP map, pre-launch checklist
├── next.config.ts
├── tailwind.config.ts        <- minimal; tokens live in globals.css @theme
├── public/
│   ├── .htaccess             <- HTTPS redirect, security headers, -Indexes
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── llms.txt              <- AI/answer-engine summary (see §10)
│   ├── cv/                   <- downloadable CV PDF
│   ├── og/                   <- Open Graph images (1200x630)
│   └── work/                 <- project screenshots and assets
├── src/
│   ├── app/
│   │   ├── layout.tsx        <- html, fonts, default metadata, JSON-LD Person/WebSite
│   │   ├── page.tsx          <- Home (/) - hero, about, experience, skills, projects, CTA
│   │   ├── work/page.tsx     <- Full project catalogue
│   │   ├── contact/page.tsx  <- Contact / inquiry form
│   │   ├── contact/thanks/page.tsx
│   │   ├── not-found.tsx     <- designed 404
│   │   ├── sitemap.ts        <- or static public/sitemap.xml; pick ONE
│   │   └── robots.ts         <- or static public/robots.txt; pick ONE
│   ├── components/
│   │   ├── layout/           <- Header, Footer, Nav
│   │   ├── sections/         <- Hero, About, Experience, Skills, Projects, CtaDoors
│   │   ├── gallery/          <- ProjectGrid, Lightbox (client)
│   │   ├── forms/            <- ContactForm, Honeypot
│   │   └── seo/              <- JsonLd (typed), Breadcrumbs
│   ├── content/
│   │   ├── projects.ts       <- portfolio project data (typed)
│   │   ├── experience.ts     <- work history + certifications (typed, sourced from CV)
│   │   ├── skills.ts         <- technical skills by category (typed, sourced from CV)
│   │   └── site.ts           <- SITE_URL, handles, contact, nav, OG defaults
│   ├── lib/
│   │   ├── formspree.ts      <- submit helper, status types
│   │   ├── jsonld.ts         <- schema builders (typed)
│   │   └── seo.ts            <- buildMetadata() helper
│   └── styles/
│       └── globals.css       <- Tailwind + @theme tokens + base layer
└── ...
```

If you add a route, add it to: the nav (where appropriate), `sitemap`, and
breadcrumb structured data.

`content/experience.ts` and `content/skills.ts` are the **single source of truth**
for CV-derived data. If on-page copy diverges from these files, fix the copy to
match — not the other way around.

---

## 7. Design system (tokens & rules)

The visual reference is **Henry Z** (`henryz.webflow.io`) — narrative, editorial,
sleek. Clean surfaces, generous whitespace, strong typography, imagery doing the
heavy lifting. The layout reads as a professional story, not a spec sheet.

Derive every color, size, and font from design tokens — no ad-hoc hex values in
components.

### Color tokens (define in `globals.css` `@theme`)

The site is **light throughout**. Dark sections (`surface-900`) are used only
for the CTA and footer. The four brand accent colors must not be substituted.

```css
@theme {
  /* Light surfaces — crisp white base */
  --color-surface-50:  #ffffff;
  --color-surface-100: #f7f7f8;
  --color-surface-200: #eeeff2;
  --color-surface-300: #e2e3e8;
  --color-surface-700: #2c2d32; /* body text */
  --color-surface-900: #111214; /* dark CTA / footer */

  /* Brand accents — the four non-negotiable palette colors */
  --color-accent:       #ff0052; /* red — primary CTA, hero name, highlights */
  --color-accent-hover: #d4003f;
  --color-teal:         #00c68d; /* green — eyebrows, secondary signals */
  --color-teal-hover:   #00a376;
  --color-gold:         #ffd400; /* yellow — tech tags, tertiary details */
  --color-gold-dark:    #b89600;
  --color-blue:         #0055da; /* blue — borders, section eyebrows, structure */
  --color-blue-light:   #e8effe;

  /* Lines and tone — light mode */
  --color-line: rgba(0 0 0 / 0.08);
  --color-tone: rgba(0 85 218 / 0.04);

  /* Legacy dark tokens — used only in dark sections */
  --color-void-950: #06080f;
  --color-void-900: #0b0e18;
  --color-void-800: #0f1320;
  --color-void-100: #c8ccdc;
}
```

### Typography

Three roles, self-hosted (`next/font/local`):

- **Display** — condensed or geometric grotesque. Used large and sparingly for
  hero headline and section titles. Confidence without decoration.
- **Body** — clean neo-grotesque (Inter or equivalent). All running text, labels, nav.
- **Mono/utility** — monospace (JetBrains Mono or IBM Plex Mono). Year ranges,
  company eyebrows, tech stack tags, project metadata. Makes the experience
  catalogue feel structured and authoritative.

Type scale (rem): `0.75 / 0.875 / 1 / 1.25 / 1.5 / 2 / 3 / 4.5 / 6.5`.
Eyebrows/labels: mono, uppercase, `tracking-[0.2em]`. All readable copy: sentence case.

### Motion

- Scroll-reveal: short fade + 8-16px rise per section. One stronger entrance for
  the hero.
- Always honor `prefers-reduced-motion: reduce`.
- No autoplaying audio or video with sound.

### Layout

Editorial, generous margins. Experience entries read like editorial spreads —
role, company, impact — not a bulleted wall of text. Project cards show the work
prominently.

### Quality floor (every screen)

Responsive to 360px, visible keyboard focus rings, AA contrast minimum on all
text, reduced motion respected, semantic landmarks (`header/main/footer/nav`),
one `<h1>` per page.

---

## 8. Contact form (one Formspree endpoint)

One general-purpose inquiry form for freelance, consulting, collaboration, or
employment inquiries.

| Form | File | Endpoint env var | For |
|---|---|---|---|
| **Contact** | `forms/ContactForm.tsx` | `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` | Any visitor - clients, collaborators, recruiters, press. |

Rules:

- The Formspree form ID is **public by design** — a routing identifier, not a
  secret. `NEXT_PUBLIC_` is expected. See `SECURITY.md` §A02.
- Submit via client `fetch()` to `https://formspree.io/f/<id>`, `Accept:
  application/json`. On success route to `/contact/thanks`; on failure show an
  inline error naming what happened and what to do next.
- Every field: correct `type`, `name`, `maxLength`, associated label
  (`htmlFor`/`id`), `autoComplete` where sensible.
- Include a **honeypot** field (`_gotcha`, visually hidden, `tabIndex={-1}`,
  `aria-hidden`). Enable Formspree spam filtering server-side.
- Never put PII in URL query strings.

Suggested fields: name, email, subject / inquiry type, message.

---

## 9. SEO conventions

- Use the **Metadata API** (`export const metadata` / `generateMetadata`) on
  every route. Centralize defaults in `lib/seo.ts -> buildMetadata()`.
- Each page sets a unique `title`, `description`, canonical, and Open Graph +
  Twitter card. Default OG image in `public/og/` at **1200x630**.
- `metadataBase` = `SITE_URL` from `content/site.ts`.
- One `<h1>` per page; logical heading order; descriptive `alt` text on every image.
- **Structured data** (JSON-LD via `components/seo/JsonLd`, builders in
  `lib/jsonld.ts` — always hardcoded from `content/` files, never from user input):
  - `Person` — `name: "Jaime Canicula"`, `alternateName: "Flow"`,
    `jobTitle: "Technical Architect"`, `address` (city/region only),
    `knowsAbout` (from `skills.ts`), `hasCredential` (certifications from CV),
    `sameAs` (GitHub profiles; professional profiles only)
  - `WebSite` — `url` + `name: "Skaldris"`
  - `BreadcrumbList` on inner pages
  - `ItemList` / `CreativeWork` for featured projects
- `sitemap` + `robots`: pick **one** mechanism. Don't ship both. Keep `/thanks`
  and `/privacy` pages `noindex`.

---

## 10. AI / answer-engine optimization (AEO)

- **`public/llms.txt`** — a factual plain-language brief for AI crawlers: who
  Jaime is (name, handle, title, location), his specializations, current roles,
  certifications, portfolio sub-sites and their URLs, GitHub profiles, and how to
  get in touch. Draw exclusively from the CV and §2 above.
- **Entity clarity** — consistent naming ("Jaime Canicula" / "Flow") across
  `<title>`, JSON-LD `Person.name`, OG, and `llms.txt`.
- **Extractable answers** — write About and Skills sections as short, self-contained
  declarative paragraphs. Lead with the claim, then the evidence.
- **`sameAs`** — GitHub: https://github.com/flow-canicula and
  https://github.com/jrcanicula, plus any other professional profiles Jaime adds.

`llms.txt` is informational only. Do not put private contact details (phone,
home address) in it.

---

## 11. Accessibility

Treat as a release gate:

- Semantic landmarks; skip-to-content link; one `<h1>`/page.
- All interactive elements keyboard-operable with a visible focus style.
- Project lightbox: focus trap, `Esc` to close, restore focus on close, `alt` on
  every image.
- Contact form: programmatic labels, `aria-describedby` for errors, `aria-live`
  region for submit status. Errors name the problem and the fix.
- Color is never the only signal. Re-verify contrast on all text combinations.
- `prefers-reduced-motion` respected globally.

---

## 12. Content & copy rules

- Sentence case. Plain verbs. Active voice.
- Buttons say what they do ("Send message," not "Submit").
- Errors don't apologize and are not vague; they say what happened and what to do.
- **`FACTS-ONLY`**: every claim must be in the CV. No invented awards, numbers,
  clients, or skills. Real CV metrics may be quoted verbatim; do not round up or
  add context they do not have.
- `content/experience.ts` and `content/skills.ts` are the single source of truth.
  On-page copy must match them.

---

## 13. Environment variables

```
# .env.local (never committed) and the host's build env
NEXT_PUBLIC_SITE_URL=https://www.skaldris.com
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=xxxxxxxx
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=skaldris.com   # only if analytics enabled
```

Only `NEXT_PUBLIC_*` vars exist (everything ships to the browser on a static
export). Never add a real secret here — there is no server to keep it on.
Commit a `.env.example` with empty values.

---

## 14. Definition of done (PR checklist)

- [ ] `pnpm lint && pnpm typecheck && pnpm build` pass clean; `out/` inspected via `serve out`.
- [ ] No `any` introduced without a written justification comment.
- [ ] New/changed pages set unique metadata + canonical + OG.
- [ ] New routes added to nav (if user-facing), sitemap, and breadcrumbs.
- [ ] All copy traceable to the CV (`FACTS-ONLY`). No invented claims.
- [ ] `content/experience.ts` and `content/skills.ts` are the source of truth; on-page copy matches.
- [ ] Contact form: honeypot present, labels associated, success/error states working, no PII in URLs.
- [ ] Images pre-optimized with explicit `width`/`height`.
- [ ] A11y pass: keyboard, focus, contrast, reduced motion, one `<h1>`.
- [ ] No server-only API used (see §5).
- [ ] `SECURITY.md` checklist consulted for anything touching forms, headers, or third-party embeds.

---

## 15. When unsure

- A request that needs a server -> re-read §5; find the static path or flag it.
- A design choice not covered by tokens -> propose a token, don't hardcode.
- A security-relevant change (headers, CSP, embeds, forms) -> `SECURITY.md` wins;
  update it in the same PR.
- A copy claim not in the CV -> omit it. Do not invent or embellish.
