/**
 * Portfolio project data for flow.skaldris.com.
 *
 * All facts here must be verifiable. Do not invent metrics, features, or
 * descriptions. Source: CV, live sites, and public records.
 *
 * Role context comes from the CV (FSG Technology Ventures, Oct 2020–present):
 * Jaime served as Software Architect / Technical Manager / Scrum Master,
 * growing and leading the Digipay engineering team from 7 to 12 engineers.
 */

export type ProjectPlatform = 'web' | 'mobile-android' | 'mobile-ios' | 'api';
export type ProjectStatus = 'live' | 'archived';
export type ProjectRole =
  | 'Software Architect'
  | 'Technical Manager'
  | 'Lead Engineer'
  | 'Technical Architect'
  | 'Engineering Leader';

export type Project = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  /** The role(s) Jaime held on this project */
  role: ProjectRole[];
  /** Company / client the project belongs to */
  company: string;
  /** Industry vertical */
  industry: string;
  /** Period of involvement, from the CV */
  period: string;
  platforms: ProjectPlatform[];
  status: ProjectStatus;
  /** Public-facing URLs. Null if private / internal. */
  urls: {
    site?: string;
    playStore?: string;
    appStore?: string;
    /** Displayed in the portfolio card as the primary CTA */
    primary?: string;
  };
  /** Key highlights — facts only, sourced from CV or public record */
  highlights: string[];
  /** Tech stack involvement, from CV */
  tech: string[];
  /** Whether to feature on the home page */
  featured: boolean;
  /** OG / card image path under public/ */
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
};

export const PROJECTS: Project[] = [
  // ── Jesuke Anime Tattoo ──────────────────────────────────────────
  {
    id: 'jesuke',
    name: 'Jesuke Anime Tattoo',
    slug: 'jesuke',
    tagline: 'Marketing and portfolio site for an anime/manga-inspired tattoo artist.',
    description:
      'Static marketing and portfolio website for Jesuke, an anime, manga, and manhwa-inspired tattoo artist based in Bulacan, Philippines. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. Features a curated flash gallery with lightbox, two Formspree intake forms (personal commissions and professional/trade inquiries), structured JSON-LD data, and a fully accessible, static-exported codebase.',
    role: ['Lead Engineer'],
    company: 'Skaldris / Freelance',
    industry: 'Creative / Tattoo',
    period: '2025 – present',
    platforms: ['web'],
    status: 'live',
    urls: {
      site: 'https://jesukeanimetattoo.skaldris.com/',
      primary: 'https://jesukeanimetattoo.skaldris.com/',
    },
    highlights: [
      'Static export with Next.js 15 App Router — no server runtime, deploys as pure HTML/CSS/JS.',
      'Two separate Formspree intake forms: personal commission inquiries and professional/trade inquiries.',
      'Accessible gallery lightbox with focus trap, keyboard navigation, and reduced-motion support.',
      'Full SEO implementation: per-page metadata, Open Graph, JSON-LD (Person, WebSite, Service, FAQPage, BreadcrumbList).',
      'AI/answer-engine optimized via llms.txt and structured entity data.',
      'Self-hosted fonts via next/font/local — no Google Fonts runtime calls.',
      'Content Security Policy enforced via both meta tag and .htaccess HTTP headers.',
    ],
    tech: [
      'Next.js 15 (App Router, static export)',
      'TypeScript (strict)',
      'Tailwind CSS v4',
      'Formspree',
      'pnpm',
      'GitHub Actions',
    ],
    featured: true,
    image: '/work/jesuke/cover.jpg',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Jesuke Anime Tattoo — anime, manga, and manhwa tattoo artist portfolio site',
  },

  // ── TNP ──────────────────────────────────────────────────────────
  {
    id: 'tnp',
    name: 'Thịnh Nguyên Phát',
    slug: 'tnp',
    tagline: 'Solid wood flooring, doors & stairs — multilingual marketing site for a Japanese-Vietnamese manufacturer exporting to Japan, Korea, and the USA.',
    description:
      'Full marketing website for Thịnh Nguyên Phát Wooden Co., Ltd. (TNP) — a Japanese family-owned solid wood manufacturer established in Vietnam in 1997, operating a 9,950 m² facility in Biên Hòa with an in-house sawmill and six kiln-drying rooms. The site is trilingual (English, Vietnamese, Japanese), built with Next.js App Router and next-intl, and targets both domestic Vietnamese buyers and international importers across Japan, Korea, and the USA. Products include solid wood flooring (Hinoki, Oak, Walnut, Ash), custom timber furniture, interior/exterior/folding/sliding doors, and export laminated freeboard.',
    role: ['Lead Engineer'],
    company: 'Skaldris / Freelance',
    industry: 'Manufacturing / Solid Wood / Export',
    period: '2025 – present',
    platforms: ['web'],
    status: 'live',
    urls: {
      site: 'https://tnp.skaldris.com/',
      primary: 'https://tnp.skaldris.com/',
    },
    highlights: [
      'Trilingual static site (EN / VI / JA) using Next.js App Router with next-intl and generateStaticParams for all locale/page combinations.',
      'AI-search optimized via llms.txt, structured JSON-LD (LocalBusiness, Service, FAQPage, Product/Offer), per-locale hreflang, and entity-rich copy targeting both "solid wood Vietnam" and "international solid wood exporter" axes.',
      'Full page set: Home (hero, process, about, trust), Pricing (3 tiers + FAQ accordion), Contact (quote form via Formspree with project-type, timber, and locale fields).',
      'Formspree-powered quote form — static export compatible, no server runtime.',
      'Signature materials section covering Hinoki (Japanese cypress), Keyaki, Oak, Walnut, Ash — with Japanese-market copy written for buyers who already know the material.',
      'Three-pillar process narrative (Creation → Delivery → Installation) structured as an <ol> for crawler parsing.',
      'Deployed as static export to Vercel; llms.txt and robots.txt expose all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.).',
    ],
    tech: [
      'Next.js 15 (App Router, static export)',
      'TypeScript (strict)',
      'Tailwind CSS v3',
      'next-intl (EN / VI / JA)',
      'Formspree',
      'Lucide React',
      'JSON-LD schema.org',
    ],
    featured: true,
    image: '/work/tnp/cover.jpg',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'TNP Thịnh Nguyên Phát Wooden — solid wood flooring, doors and stairs, international manufacturer, Vietnam',
  },

  // ── Solar ─────────────────────────────────────────────────────────
  {
    id: 'solar',
    name: 'SolarVN',
    slug: 'solar',
    tagline: 'High-conversion multilingual marketing website for a Vietnamese solar panel supplier and installer.',
    description:
      'Full marketing and lead-generation website for SolarVN — a Vietnamese solar panel supplier and installer carrying international brands (LONGi, JA Solar, Risen, Trina, Canadian Solar, SunPower). The site is trilingual (Vietnamese, English, Japanese) with locale detection, and targets residential and commercial solar buyers across Vietnam and the broader Asia-Pacific market. Built with Next.js 15 App Router, next-intl, and Tailwind CSS v3 with a custom royal-blue and solar-gold design system.',
    role: ['Lead Engineer'],
    company: 'Skaldris / Freelance',
    industry: 'CleanTech / Solar Energy / Vietnam',
    period: '2025 – present',
    platforms: ['web'],
    status: 'live',
    urls: {
      site: 'https://solar.skaldris.com/en/',
      primary: 'https://solar.skaldris.com/en/',
    },
    highlights: [
      'Trilingual site (VI / EN / JA) with browser-language detection — defaults to Vietnamese, falls back to Japanese for ja* UA, else Vietnamese.',
      'Custom design system: royal-blue brand palette (brand-900 → brand-50), solar-gold CTAs (gold-500), teal trust signals (trust-500), all enforced through Tailwind config tokens.',
      'Signature animated energy arc in the hero — pulsing SVG curved line in solar amber simulating electricity flow via CSS keyframes.',
      'Residential pricing tiers (3 kWp / 5 kWp / 10 kWp) with monthly production and savings estimates; commercial/industrial CTA section.',
      'Six brand cards (LONGi, JA Solar, Risen, Trina, Canadian Solar, SunPower) with origin and differentiation notes.',
      'Four-step process section (Survey → Design → Install → Grid connection) and trust-pillar cards (certified engineers, genuine products, EVN paperwork, post-install support).',
      'Formspree-powered quote form; static export to GitHub Pages via GitHub Actions CI.',
      'Full JSON-LD LocalBusiness schema, per-locale OG images, hreflang, and AI crawler access via robots.txt.',
    ],
    tech: [
      'Next.js 15 (App Router, static export)',
      'TypeScript (strict)',
      'Tailwind CSS v3',
      'next-intl (VI / EN / JA)',
      'Formspree',
      'Lucide React',
      'GitHub Actions (CI/CD to GitHub Pages)',
    ],
    featured: true,
    image: '/work/solar/banner.png',
    imageWidth: 1890,
    imageHeight: 909,
    imageAlt: 'SolarVN — trilingual solar panel supplier and installer marketing site, Vietnam',
  },

  // ── Design (Skog Mộc) ─────────────────────────────────────────────
  {
    id: 'design',
    name: 'Skog Mộc — Architecture & Design',
    slug: 'design',
    tagline: 'Portfolio and inquiry site for a Vietnamese general architecture studio with an unmatched furniture specialty.',
    description:
      'Full marketing and portfolio website for Skog Mộc by TNP — a general architecture and design studio based in Biên Hòa, Đồng Nai. The studio covers the full residential architecture range: concept design, construction documentation, renovations, interior design, and landscape design. Its standout strength is furniture: the studio designs, manufactures, and installs custom furniture better than any competitor it faces, and the site is structured to establish broad architectural credibility first, then land the furniture claim as the sharp, unbeatable edge. Built trilingual (EN / VI / JA) with Next.js 15 and next-intl.',
    role: ['Lead Engineer'],
    company: 'Skaldris / Freelance',
    industry: 'Architecture / Interior Design / Vietnam',
    period: '2025 – present',
    platforms: ['web'],
    status: 'live',
    urls: {
      site: 'https://design.skaldris.com/en/',
      primary: 'https://design.skaldris.com/en/',
    },
    highlights: [
      'Architecture-led narrative: hero and About establish general practice (concept design, renovations, interior, landscape) before surfacing furniture as the studio\'s unmatched specialty.',
      'Portfolio section covers completed projects in Vinhomes Golden River, Vinhomes Central Park, Thủ Thiêm, Thảo Điền, and Phú Mỹ Hưng — framed as confirmed locations, not invented specifics.',
      'Trilingual (EN / VI / JA) with next-intl; Japanese copy adapted for a residential design audience, not machine-translated.',
      'Extended specialist network section — architectural technologist, structural engineer, town planner, heritage inspector, production designer — positioned as available via the studio\'s network, not core staff.',
      'Services structured as three pillars: Architecture (general practice), Furniture (the unmatched edge), Interior & Landscape (integral, not upsell).',
      'Static export to Vercel; full JSON-LD Organization schema, per-locale metadata, hreflang, and AI-accessible llms.txt.',
    ],
    tech: [
      'Next.js 15 (App Router, static export)',
      'TypeScript (strict)',
      'Tailwind CSS v3',
      'next-intl (EN / VI / JA)',
      'Formspree',
      'Lucide React',
    ],
    featured: true,
    image: '/banners/download.png',
    imageWidth: 1200,
    imageHeight: 628,
    imageAlt: 'Skog Mộc by TNP — architecture and design studio, residential project, Biên Hòa, Vietnam',
  },

  // ── Digipay ──────────────────────────────────────────────────────
  {
    id: 'digipay',
    name: 'Digipay',
    slug: 'digipay',
    tagline: 'BSP-licensed digital payments and financial inclusion platform for the Philippines.',
    description:
      'Digipay is a fintech platform that brings bills payment, e-load, remittance (DigiPadala), mobile money, and micro-insurance to underbanked Filipinos through a network of micro-entrepreneur agents — sari-sari stores, pawnshops, internet cafes, and mobile phone shops. Agents transact via an Android app and a web portal. The platform is registered with the Bangko Sentral ng Pilipinas (BSP) as an Operator of Payment System (OPS-COR-2020-0086) and operates under FSG Technology Ventures, Inc., a subsidiary of FSG Capital, Inc.',
    role: ['Software Architect', 'Technical Manager'],
    company: 'FSG Technology Ventures, Inc. (Digipay)',
    industry: 'FinTech / Digital Payments / Financial Inclusion',
    period: 'Oct 2020 – present',
    platforms: ['web', 'mobile-android'],
    status: 'live',
    urls: {
      site: 'https://digipay.ph/',
      playStore:
        'https://play.google.com/store/apps/details?id=com.fsgcapital.digipay',
      primary: 'https://digipay.ph/',
    },
    highlights: [
      'Led and grew the engineering team from 7 to 12 engineers, including mentorship, technical interviews, onboarding, and team capability development.',
      'Directed a major IT reengineering initiative that streamlined IT operations across group platforms by up to 40%.',
      'Designed and implemented cloud-native and serverless architectures on AWS, reducing cloud infrastructure costs by ~35% while improving scalability and reliability.',
      'Established CI/CD pipelines integrating SonarQube for code quality and Snyk for vulnerability scanning, improving release reliability and application security.',
      'Led adoption of Test-Driven Development (TDD) and modern engineering practices, improving code quality and reducing production defects.',
      'Implemented ITSM workflows improving incident management, change control, and operational transparency.',
      'Developed regulatory and compliance documentation supporting BSP requirements and vendor governance.',
      'Contributed to AWS Control Tower landing zone setup — governed multi-account environment with guardrails and compliance controls.',
      'Platform serves 16,500+ merchant and agent locations across the Philippines.',
      'Android agent app has 50,000+ installs on Google Play.',
      'Platform is BSP-registered as an Operator of Payment System (OPS-COR-2020-0086) since June 2020.',
    ],
    tech: [
      'AWS (Lambda, API Gateway, S3, RDS, SQS, CloudWatch)',
      'AWS Control Tower',
      'Terraform',
      'Docker',
      'Kubernetes',
      'CI/CD (GitHub Actions, Jenkins)',
      'SonarQube',
      'Snyk',
      'C#/.NET',
      'Node.js',
      'React',
      'PostgreSQL',
      'MySQL',
      'RabbitMQ',
      'Jira',
      'Confluence',
    ],
    featured: true,
    image: '/work/digipay/cover.png',
    imageWidth: 1366,
    imageHeight: 728,
    imageAlt: 'Digipay agent banking app — BSP-licensed digital payments platform, Philippines',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
