import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildPersonSchema, buildWebSiteSchema } from '@/lib/jsonld';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { WhatIDoSection } from '@/components/sections/WhatIDoSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TickerSection } from '@/components/sections/TickerSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CredentialsSection } from '@/components/sections/CredentialsSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { CollapsibleGroup } from '@/components/ui/CollapsibleSection';
import { t } from '@/lib/messages';

export const metadata: Metadata = buildMetadata({
  canonical: '/',
  title: t.meta.homeTitle,
  description: t.meta.homeDescription,
  keywords: [
    'Technical Architect Philippines',
    'AWS Solutions Architect Philippines',
    'AWS Certified Solutions Architect Philippines',
    'Engineering Leader Philippines',
    'Cloud Architect Metro Manila',
    'AWS Consultant Philippines',
    'Software Architect Philippines',
    'Technical Architecture Philippines',
    'Cloud Architecture Philippines',
    'Jaime Canicula',
    'Flow Canicula',
    'AWS Professional Philippines',
    'Engineering Manager Philippines',
    'DevOps Philippines',
    'Kubernetes Philippines',
    'Terraform Philippines',
    'Next.js developer Philippines',
    'Full-stack architect Philippines',
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[buildPersonSchema(), buildWebSiteSchema()]} />

      <HeroSection />

      {/* Gradient divider */}
      <div className="gradient-divider" aria-hidden="true" />

      <PhilosophySection />

      <div className="gradient-divider" aria-hidden="true" />

      <WhatIDoSection />

      <div className="gradient-divider" aria-hidden="true" />

      {/* ── About ─────────────────────────────────────────────────────── */}
      <CollapsibleGroup
        sections={[
          {
            eyebrow: t.about.eyebrow,
            title: t.about.title,
            accent: 'var(--color-teal)',
            bg: 'var(--color-surface-100)',
            children: <AboutSection />,
          },
        ]}
      />

      {/* ── Services ticker strip ────────────────────────────────────── */}
      <TickerSection />

      {/* ── Experience / Skills / Certs / Portfolio — collapsible ─────── */}
      <CollapsibleGroup
        sections={[
          {
            eyebrow: t.experience.eyebrow,
            title: t.experience.title,
            accent: 'var(--color-blue)',
            bg: 'var(--color-surface-50)',
            children: <ExperienceSection />,
          },
          {
            eyebrow: t.skills.eyebrow,
            title: t.skills.title,
            accent: 'var(--color-teal)',
            bg: 'var(--color-surface-50)',
            children: <SkillsSection />,
          },
          {
            eyebrow: t.credentials.eyebrow,
            title: t.credentials.title,
            accent: 'var(--color-blue)',
            bg: 'var(--color-surface-50)',
            children: <CredentialsSection />,
          },
          {
            eyebrow: t.portfolio.eyebrow,
            title: t.portfolio.title,
            accent: 'var(--color-accent)',
            bg: 'var(--color-surface-100)',
            children: <PortfolioSection />,
          },
        ]}
      />

      <div className="gradient-divider" aria-hidden="true" />

      <CtaSection />
    </>
  );
}
