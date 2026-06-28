import { SITE_NAME, SITE_URL, SOCIAL, CONTACT } from '@/content/site';

type JsonLdObject = Record<string, unknown>;

export function buildPersonSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jaime Canicula',
    alternateName: 'Flow',
    jobTitle: 'Technical Architect',
    description:
      'Technical Architect, Engineering Leader, and Senior Software Engineering Professional with 13+ years of experience across software development, cloud architecture (AWS), DevOps, and technical program delivery. Based in Mandaluyong City, Metro Manila, Philippines.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mandaluyong City',
      addressRegion: 'Metro Manila',
      addressCountry: 'PH',
    },
    email: CONTACT.email,
    url: SITE_URL,
    sameAs: [SOCIAL.githubPrimary, SOCIAL.githubSecondary],
    knowsAbout: [
      'Cloud Architecture (AWS)',
      'Software Architecture',
      'Engineering Leadership',
      'DevOps and CI/CD',
      'Microservices',
      'Infrastructure as Code',
      'Agile Delivery',
      'Team Leadership and Mentoring',
      'TypeScript',
      'React',
      'Next.js',
      'C#/.NET',
      'Node.js',
      'Kubernetes',
      'Terraform',
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Solutions Architect – Professional' },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Solutions Architect – Associate' },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Developer – Associate' },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified SysOps Administrator – Associate' },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Cloud Practitioner' },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified AI Practitioner' },
      { '@type': 'EducationalOccupationalCredential', name: 'Professional Scrum Master II (PSM II)' },
      { '@type': 'EducationalOccupationalCredential', name: 'Professional Scrum Master I (PSM I)' },
      { '@type': 'EducationalOccupationalCredential', name: 'Professional Scrum Product Owner I (PSPO I)' },
    ],
  };
}

export function buildWebSiteSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; href: string }>
): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
