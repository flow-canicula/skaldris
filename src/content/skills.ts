export type SkillCategory = {
  label: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Cloud & Infrastructure',
    skills: ['AWS (Lambda, API GW, ECS, EKS, RDS, SQS, S3, CloudFront)', 'Azure', 'AWS Control Tower', 'Terraform', 'CloudFormation', 'OpenTofu', 'Ansible', 'Kubernetes', 'Docker'],
  },
  {
    label: 'Backend',
    skills: ['C#/.NET (Core, Standard)', 'Node.js', 'Python', 'PHP', 'Java (Spring Boot)'],
  },
  {
    label: 'Frontend & Mobile',
    skills: ['React (Next.js, Gatsby, SPA)', 'TypeScript', 'JavaScript', 'HTML/CSS', 'React Native (Android/iOS)'],
  },
  {
    label: 'Data & Messaging',
    skills: ['PostgreSQL', 'MySQL', 'MSSQL', 'Amazon Aurora', 'MongoDB', 'DynamoDB', 'RabbitMQ', 'Amazon SQS', 'Apache Kafka (MSK)', 'Amazon Kinesis', 'AWS Glue', 'Redshift', 'Athena'],
  },
  {
    label: 'DevOps & CI/CD',
    skills: ['GitHub Actions', 'Jenkins', 'Azure DevOps', 'ArgoCD', 'Helm', 'SonarQube', 'Snyk', 'Checkmarx'],
  },
  {
    label: 'Observability',
    skills: ['CloudWatch', 'Prometheus', 'Grafana', 'Datadog', 'New Relic', 'OpenTelemetry', 'ELK Stack', 'Loki', 'Tempo', 'Rollbar'],
  },
  {
    label: 'Architecture & Delivery',
    skills: ['Microservices', 'Serverless', 'Event-Driven Architecture', 'System Integration', 'Boomi', 'MuleSoft', 'AWS Step Functions', 'Agile / Scrum', 'Kanban', 'TOGAF'],
  },
];

export const SPECIALIZATIONS = [
  'Software Design & Architecture Strategy',
  'Cloud Engineering & Infrastructure Leadership (AWS)',
  'Engineering Team Leadership & Mentoring',
  'DevOps & CI/CD',
  'Agile Product Delivery (Scrum, Kanban, XP)',
  'Program & Project Management',
  'AI-Driven Innovation & Solution Development',
  'Web & API Platform Strategy & Governance',
  'System Integration',
  'Operational Excellence & Process Optimization',
  'Strategic Business Analysis & Stakeholder Engagement',
  'Technology Strategy & Roadmap Planning',
];
