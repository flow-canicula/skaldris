export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://flow.skaldris.com';

export const SITE_NAME = 'Skaldris';

export const SITE_DESCRIPTION =
  'Jaime "Flow" Canicula, MTM — Technical Architect, AWS Certified Solutions Architect, and Engineering Leader based in Metro Manila, Philippines. 13+ years building cloud platforms, distributed systems, and engineering teams.';

export const SOCIAL = {
  githubPrimary: 'https://github.com/flow-canicula',
  githubSecondary: 'https://github.com/jrcanicula',
} as const;

export const CONTACT = {
  email: 'jaimecanicula@skaldris.com',
  security: 'security@skaldris.com',
} as const;

export const NAV_LINKS = [
  { label: 'Contact', href: '/contact' },
] as const;

export const OG_DEFAULTS = {
  image: '/backgrounds/IMG_3454.jpeg',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Jaime "Flow" Canicula — Technical Architect, AWS Certified Solutions Architect, and Engineering Leader based in Metro Manila, Philippines',
} as const;

export const PERSON = {
  name: 'Jaime Canicula',
  alternateName: 'Flow',
  jobTitle: 'Technical Architect',
  description: 'Technical Architect, AWS Certified Solutions Architect – Professional, and Engineering Leader with 13+ years of experience across cloud architecture, software development, DevOps, and technical program delivery. Based in Mandaluyong City, Metro Manila, Philippines.',
  image: '/og/og-image.jpg',
  addressLocality: 'Mandaluyong City',
  addressRegion: 'Metro Manila',
  addressCountry: 'PH',
} as const;
