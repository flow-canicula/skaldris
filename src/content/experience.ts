export type WorkEntry = {
  role: string;
  company: string;
  companyShort?: string;
  type: 'contractor' | 'consultant' | 'employee' | 'retainer';
  period: string;
  industry: string;
  highlights: string[];
};

export type Certification = {
  name: string;
  issuer: string;
};

export const WORK_HISTORY: WorkEntry[] = [
  {
    role: 'Software Architect / Technical Manager / Scrum Master',
    company: 'FSG Technology Ventures Inc.',
    companyShort: 'FSG / Digipay',
    type: 'consultant',
    period: 'Oct 2020 – present',
    industry: 'FinTech, Banking, Insurance',
    highlights: [
      'Led and grew the Digipay engineering team from 7 to 12 engineers.',
      'Reduced cloud infrastructure costs by ~35% via cloud-native and serverless AWS architectures.',
      'Streamlined IT operations across group platforms by up to 40% through a reengineering initiative.',
      'Established CI/CD pipelines with SonarQube and Snyk integration.',
      'Platform serves 16,500+ merchant and agent locations; Android app has 50,000+ installs.',
    ],
  },
  {
    role: 'Technical Architect – AWS Platform',
    company: 'Nityo Infotech Services Inc. (contractor, deployed to IBM for Synapxe)',
    companyShort: 'Nityo / IBM / Synapxe',
    type: 'contractor',
    period: 'Sep 2024 – present',
    industry: 'HealthTech',
    highlights: [
      'AWS Platform architecture for a national health-tech initiative in Singapore.',
      'Infrastructure design, cloud governance, and stakeholder engagement.',
    ],
  },
  {
    role: 'Cloud Architect – AWS Consultant',
    company: 'Webisoft',
    companyShort: 'Webisoft',
    type: 'retainer',
    period: 'Oct 2025 – present',
    industry: 'Blockchain & Platform Engineering',
    highlights: [
      'AWS cloud architecture advisory on a retainer basis.',
      'Platform engineering and infrastructure strategy.',
    ],
  },
  {
    role: 'Senior Analyst / Programmer (Lead Engineer)',
    company: 'Nityo Infotech / EssilorLuxottica',
    companyShort: 'Nityo / EssilorLuxottica',
    type: 'contractor',
    period: 'Aug 2020 – Apr 2024',
    industry: 'HealthTech, Eye Care',
    highlights: [
      'Lead Engineer for global eye care retail platform integrations.',
      'System integration, API development, and cross-functional delivery.',
    ],
  },
  {
    role: 'Software Development Manager',
    company: 'Cynder Technologies',
    companyShort: 'Cynder Technologies',
    type: 'employee',
    period: 'Jun 2020 – Oct 2023',
    industry: 'FinTech, HealthTech, Telco',
    highlights: [
      'Managed software development teams across multiple industry verticals.',
      'Oversaw product delivery, process improvement, and team capability development.',
    ],
  },
  {
    role: 'Head of Engineering and Director',
    company: 'Tagani Inc.',
    companyShort: 'Tagani',
    type: 'employee',
    period: 'Sep 2019 – Feb 2021',
    industry: 'AgriTech',
    highlights: [
      'Built and led the engineering function for an agricultural technology startup.',
      'Defined technical roadmap, architecture, and engineering culture.',
    ],
  },
  {
    role: 'Senior Full-Stack Developer',
    company: 'Flying Cockatoo Inc.',
    companyShort: 'Flying Cockatoo',
    type: 'employee',
    period: 'Nov 2018 – May 2020',
    industry: 'FinTech',
    highlights: [
      'Full-stack development for fintech products.',
      'React front-end and .NET backend engineering.',
    ],
  },
  {
    role: 'Senior Software Developer',
    company: 'Shore 360 / Damstra Technology',
    companyShort: 'Shore 360 / Damstra',
    type: 'employee',
    period: 'Jul 2018 – Oct 2018',
    industry: 'Mining, Workforce Management',
    highlights: [
      'Senior developer on a workforce management and compliance platform.',
    ],
  },
  {
    role: 'L2 Software Engineer',
    company: '888 Philippines / Accenture',
    companyShort: 'Accenture / 888',
    type: 'employee',
    period: 'Apr 2017 – Jul 2018',
    industry: 'Software Development Consulting',
    highlights: [
      'Software engineering consulting across client engagements.',
    ],
  },
  {
    role: 'Technology Consultant (.NET Developer)',
    company: 'Hewlett-Packard Enterprise / DXC Technology',
    companyShort: 'HPE / DXC',
    type: 'employee',
    period: 'Jan 2016 – Apr 2017',
    industry: 'Enterprise IT',
    highlights: [
      '.NET development and technology consulting for enterprise clients.',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'AWS Certified Solutions Architect – Professional', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified SysOps Administrator – Associate', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services' },
  { name: 'Professional Scrum Master II (PSM II)', issuer: 'Scrum.org' },
  { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org' },
  { name: 'Professional Scrum Product Owner I (PSPO I)', issuer: 'Scrum.org' },
];

export const EDUCATION = [
  {
    degree: 'Master of Technology Management (MTM)',
    institution: 'University of the Philippines Diliman',
    location: 'Quezon City',
    gpa: 'GWA 1.11 / GPA 4.0',
    distinction: 'Parangal sa Mag-aaral — 2 consecutive years',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of the Philippines Los Banos',
    location: 'Laguna',
    gpa: '',
    distinction: '',
  },
];
