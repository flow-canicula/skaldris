export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.skaldris.com';

export const SITE_NAME = 'Skaldris';

export const SITE_DESCRIPTION =
  'Personal portfolio of Jaime "Flow" Canicula, MTM — Technical Architect, Engineering Leader, and Senior Software Engineering Professional based in Metro Manila, Philippines.';

export const SOCIAL = {
  githubPrimary: 'https://github.com/flow-canicula',
  githubSecondary: 'https://github.com/jrcanicula',
} as const;

export const CONTACT = {
  email: 'jaimecanicula@gmail.com',
  security: 'security@skaldris.com',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
] as const;

export const OG_DEFAULTS = {
  image: '/og/og-image.jpg',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Jaime "Flow" Canicula — Technical Architect and Engineering Leader, Philippines',
} as const;
