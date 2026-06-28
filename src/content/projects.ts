/**
 * Portfolio project data for www.skaldris.com.
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
    image: '/work/digipay/digipay-cover.jpg',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt:
      'Digipay — BSP-licensed digital payments and agent banking platform, Philippines',
  },

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
    image: '/work/jesuke/jesuke-cover.jpg',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Jesuke Anime Tattoo — portfolio and booking site',
  },

  // ── TNP ──────────────────────────────────────────────────────────
  {
    id: 'tnp',
    name: 'TNP',
    slug: 'tnp',
    tagline: 'Web project at tnp.skaldris.com.',
    description: 'Details to be filled in. Placeholder entry.',
    role: ['Lead Engineer'],
    company: 'Skaldris / Freelance',
    industry: 'TBD',
    period: 'TBD',
    platforms: ['web'],
    status: 'live',
    urls: {
      site: 'https://tnp.skaldris.com/',
      primary: 'https://tnp.skaldris.com/',
    },
    highlights: [],
    tech: [],
    featured: false,
  },

  // ── Solar ─────────────────────────────────────────────────────────
  {
    id: 'solar',
    name: 'Solar',
    slug: 'solar',
    tagline: 'Web project at solar.skaldris.com.',
    description: 'Details to be filled in. Placeholder entry.',
    role: ['Lead Engineer'],
    company: 'Skaldris / Freelance',
    industry: 'TBD',
    period: 'TBD',
    platforms: ['web'],
    status: 'live',
    urls: {
      site: 'https://solar.skaldris.com/en/',
      primary: 'https://solar.skaldris.com/en/',
    },
    highlights: [],
    tech: [],
    featured: false,
  },

  // ── Design ───────────────────────────────────────────────────────
  {
    id: 'design',
    name: 'Design',
    slug: 'design',
    tagline: 'Web project at design.skaldris.com.',
    description: 'Details to be filled in. Placeholder entry.',
    role: ['Lead Engineer'],
    company: 'Skaldris / Freelance',
    industry: 'TBD',
    period: 'TBD',
    platforms: ['web'],
    status: 'live',
    urls: {
      site: 'https://design.skaldris.com/en/',
      primary: 'https://design.skaldris.com/en/',
    },
    highlights: [],
    tech: [],
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
