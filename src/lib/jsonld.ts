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
      'Technical Architect, AWS Certified Solutions Architect – Professional, and Engineering Leader with 13+ years of experience across cloud architecture, software development, DevOps, and technical program delivery. Based in Mandaluyong City, Metro Manila, Philippines.',
    image: `${SITE_URL}/backgrounds/IMG_3454.jpeg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mandaluyong City',
      addressRegion: 'Metro Manila',
      addressCountry: 'PH',
    },
    email: CONTACT.email,
    url: SITE_URL,
    sameAs: [SOCIAL.githubPrimary, SOCIAL.githubSecondary],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Technical Architect',
      occupationLocation: {
        '@type': 'Country',
        name: 'Philippines',
      },
      skills: 'AWS, Cloud Architecture, Software Architecture, Engineering Leadership, DevOps, Terraform, Kubernetes',
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Nityo Infotech Services Inc.',
        description: 'Technical Architect – AWS Platform (contractor, deployed to IBM for Synapxe)',
      },
      {
        '@type': 'Organization',
        name: 'FSG Technology Ventures Inc.',
        description: 'Software Architect, Technical Manager',
      },
      {
        '@type': 'Organization',
        name: 'Webisoft',
        description: 'Cloud Architect – AWS Consultant',
      },
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of the Philippines Diliman',
        description: 'Master of Technology Management — GWA 1.11 / GPA 4.0',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of the Philippines Los Baños',
        description: 'Bachelor of Science in Computer Science',
      },
    ],
    award: 'Parangal sa Mag-aaral, University of the Philippines Diliman (2 consecutive years)',
    knowsAbout: [
      'Cloud Architecture',
      'AWS Solutions Architecture',
      'Software Architecture',
      'Technical Architecture',
      'Engineering Leadership',
      'DevOps',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Terraform',
      'Kubernetes',
      'Microservices',
      'Agile Delivery',
      'Scrum',
      'Team Leadership',
      'TypeScript',
      'React',
      'Next.js',
      'C#/.NET',
      'Node.js',
      'Python',
      'Data Engineering',
      'AWS Lambda',
      'Amazon EKS',
      'System Integration',
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Solutions Architect – Professional', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' } },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Solutions Architect – Associate', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' } },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Developer – Associate', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' } },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified SysOps Administrator – Associate', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' } },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Cloud Practitioner', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' } },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified AI Practitioner', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' } },
      { '@type': 'EducationalOccupationalCredential', name: 'Professional Scrum Master II (PSM II)', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Scrum.org' } },
      { '@type': 'EducationalOccupationalCredential', name: 'Professional Scrum Master I (PSM I)', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Scrum.org' } },
      { '@type': 'EducationalOccupationalCredential', name: 'Professional Scrum Product Owner I (PSPO I)', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Scrum.org' } },
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
