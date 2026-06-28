import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildPersonSchema, buildWebSiteSchema } from '@/lib/jsonld';
import { buildMetadata } from '@/lib/seo';
import { WORK_HISTORY, CERTIFICATIONS } from '@/content/experience';
import { SKILL_CATEGORIES } from '@/content/skills';
import { PROJECTS } from '@/content/projects';
import { HeroSection } from '@/components/sections/HeroSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { CollapsibleGroup } from '@/components/ui/CollapsibleSection';
import { WhatIDoSection } from '@/components/sections/WhatIDoSection';

export const metadata: Metadata = buildMetadata({
  canonical: '/',
  title: 'Jaime "Flow" Canicula — Technical Architect & Engineering Leader',
  description:
    'Personal portfolio of Jaime "Flow" Canicula, MTM — Technical Architect, Engineering Leader, and Senior Software Engineering Professional with 13+ years of experience. Based in Metro Manila, Philippines.',
});

const FEATURED = PROJECTS.filter((p) => p.featured);

const SERVICES = [
  'Technical Architecture',
  'Cloud Engineering (AWS)',
  'Engineering Leadership',
  'Project & Program Management',
  'Web & Application Development',
  'DevOps & Platform Engineering',
];

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
            eyebrow: '01 — About',
            title: 'Architect. Leader. Builder.',
            accent: 'var(--color-teal)',
            bg: 'var(--color-surface-100)',
            children: (
              <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 id="about-heading" className="sr-only">About</h2>
                <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
                  <div
                    className="font-display leading-tight"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--color-surface-900)' }}
                  >
                    <span style={{ display: 'block' }}>Architect.</span>
                    <span style={{ display: 'block', color: 'var(--color-accent)' }}>Leader.</span>
                    <span style={{ display: 'block' }}>Builder.</span>
                  </div>
                  <div className="space-y-6 pt-2" style={{ color: 'var(--color-surface-700)' }}>
                    <p className="text-lg leading-relaxed">
                      Technical Architect, Engineering Leader, and Senior Software Engineering
                      Professional with extensive experience across software development, cloud
                      architecture, DevOps, delivery management, and technical program delivery.
                    </p>
                    <p className="leading-relaxed" style={{ opacity: 0.6 }}>
                      Currently serving as AWS Platform Technical Architect at Nityo Infotech
                      (deployed to IBM for Synapxe), Cloud Architect at Webisoft, and Software
                      Architect and Technical Manager at FSG Technology Ventures — where he led
                      the Digipay engineering team and platform, a BSP-registered Operator of
                      Payment System with 16,500+ merchant locations nationwide.
                    </p>
                    <p className="leading-relaxed" style={{ opacity: 0.6 }}>
                      Graduate of the University of the Philippines Diliman (Master of Technology
                      Management, GWA 1.11 / GPA 4.0, Parangal sa Mag-aaral for 2 consecutive
                      years) and UP Los Banos (B.S. Computer Science).
                    </p>
                    <div className="pt-4 flex flex-wrap gap-3">
                      {['AWS Certified Solutions Architect – Pro', 'PSM II', 'MTM, UP Diliman'].map((tag) => (
                        <span
                          key={tag}
                          className="cert-badge font-mono text-xs px-3 py-1.5 border cursor-default"
                          style={{ borderColor: 'rgba(0,198,141,0.4)', color: 'var(--color-teal)', background: 'rgba(0,198,141,0.05)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />

      {/* ── Services ticker strip ────────────────────────────────────── */}
      <div
        className="py-10 overflow-hidden relative"
        style={{ background: 'var(--color-accent)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10" style={{ background: 'linear-gradient(to right, var(--color-accent), transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10" style={{ background: 'linear-gradient(to left, var(--color-accent), transparent)' }} />
        <div className="ticker-track whitespace-nowrap">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-4">
              <span className="font-display text-xl" style={{ color: '#fff' }}>{s}</span>
              <img src="/motifs/ticker-sep.svg" alt="" aria-hidden="true" width={24} height={24} style={{ flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* ── Experience / Skills / Certs / Portfolio — collapsible ─────── */}
      <CollapsibleGroup
        sections={[
          {
            eyebrow: '02 — Experience',
            title: '13+ Years',
            accent: 'var(--color-blue)',
            bg: 'var(--color-surface-50)',
            children: (
              <div className="max-w-6xl mx-auto px-6 pb-16 pt-4">
                <h2 id="experience-heading" className="sr-only">Experience</h2>
                <div className="flex justify-end mb-6">
                  <a
                    href="/cv/CV-Jaime_Canicula_Resume-May-2026.pdf"
                    download
                    className="btn-secondary font-mono text-xs uppercase tracking-widest px-4 py-2 border"
                    style={{ borderColor: 'var(--color-line)', color: 'var(--color-surface-700)' }}
                  >
                    Full CV ↓
                  </a>
                </div>
                <div className="space-y-0">
                  {WORK_HISTORY.map((entry, i) => (
                    <div
                      key={i}
                      className="exp-row grid md:grid-cols-[200px_1fr] gap-6 py-10 border-b rounded-sm cursor-default"
                      style={{ borderColor: 'var(--color-line)' }}
                    >
                      <div>
                        <p className="font-mono text-xs mb-1" style={{ color: 'var(--color-accent)' }}>{entry.period}</p>
                        <p className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: 'var(--color-surface-700)', opacity: 0.4 }}>{entry.industry}</p>
                      </div>
                      <div>
                        <h3 className="font-display mb-1" style={{ fontSize: '1.25rem', color: 'var(--color-surface-900)' }}>{entry.role}</h3>
                        <p className="text-sm mb-4" style={{ color: 'var(--color-teal)' }}>{entry.companyShort ?? entry.company}</p>
                        {entry.highlights.length > 0 && (
                          <ul className="space-y-1.5">
                            {entry.highlights.map((h, j) => (
                              <li key={j} className="text-sm flex gap-3 items-start" style={{ color: 'var(--color-surface-700)', opacity: 0.65 }}>
                                <img src="/motifs/documentation.svg" alt="" aria-hidden="true" width={16} height={16} style={{ flexShrink: 0, marginTop: '2px', opacity: 0.7 }} />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            eyebrow: '03 — Skills',
            title: 'Technical Stack',
            accent: 'var(--color-teal)',
            bg: 'var(--color-surface-50)',
            children: (
              <div className="max-w-6xl mx-auto px-6 pb-16 pt-4">
                <h2 id="skills-heading" className="sr-only">Technical Stack</h2>
                <p className="font-mono text-xs mb-6 text-right hidden md:block" style={{ color: 'var(--color-surface-700)', opacity: 0.35 }}>
                  {SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)} technologies
                </p>
                <div className="divide-y" style={{ borderColor: 'var(--color-line)' }}>
                  {SKILL_CATEGORIES.map((cat, i) => {
                    const accentColors = ['var(--color-accent)', 'var(--color-blue)', 'var(--color-teal)', 'var(--color-gold-dark)', 'var(--color-accent)', 'var(--color-blue)', 'var(--color-teal)'];
                    const accent = accentColors[i % accentColors.length];
                    return (
                      <div key={cat.label} className="grid md:grid-cols-[220px_1fr] gap-6 py-8 items-start">
                        <div className="flex items-center gap-3 pt-1">
                          <span className="inline-block w-1.5 h-5 rounded-full flex-shrink-0" style={{ background: accent }} aria-hidden="true" />
                          <h3 className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: accent }}>{cat.label}</h3>
                        </div>
                        <ul className="flex flex-wrap gap-2" role="list">
                          {cat.skills.map((s, j) => (
                            <li key={s}>
                              <span className="skill-tag inline-block font-mono text-xs px-3 py-1.5 border cursor-default" style={{ borderColor: `${accent}28`, color: 'var(--color-surface-700)', background: `${accent}08`, animationDelay: `${j * 30}ms` }}>
                                {s}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            ),
          },
          {
            eyebrow: 'Certifications',
            title: 'Credentials',
            accent: 'var(--color-blue)',
            bg: 'var(--color-surface-50)',
            children: (
              <div className="max-w-6xl mx-auto px-6 pb-16 pt-2">
                <h2 id="certs-heading" className="sr-only">Certifications</h2>
                {(['Amazon Web Services', 'Scrum.org'] as const).map((issuer) => {
                  const group = CERTIFICATIONS.filter((c) => c.issuer === issuer);
                  const accent = issuer === 'Amazon Web Services' ? 'var(--color-accent)' : 'var(--color-teal)';
                  return (
                    <div
                      key={issuer}
                      className="grid md:grid-cols-[220px_1fr] gap-6 py-10 border-b"
                      style={{ borderColor: 'var(--color-line)' }}
                    >
                      {/* Issuer column */}
                      <div className="flex flex-col gap-1 pt-1">
                        <span
                          className="font-mono text-[0.6rem] uppercase tracking-[0.22em]"
                          style={{ color: accent }}
                        >
                          Issued by
                        </span>
                        <span
                          className="font-display"
                          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'var(--color-surface-900)', lineHeight: 1.2 }}
                        >
                          {issuer}
                        </span>
                      </div>

                      {/* Cert list */}
                      <ol className="space-y-0" role="list">
                        {group.map((cert, i) => (
                          <li
                            key={cert.name}
                            className="flex items-baseline gap-5 py-3 border-b"
                            style={{ borderColor: 'var(--color-line)' }}
                          >
                            <span
                              className="font-mono text-xs flex-shrink-0 w-5 text-right"
                              style={{ color: accent, opacity: 0.4 }}
                            >
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span
                              className="text-sm leading-snug"
                              style={{ color: 'var(--color-surface-700)' }}
                            >
                              {cert.name}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            eyebrow: '04 — Portfolio',
            title: 'Selected Work',
            accent: 'var(--color-accent)',
            bg: 'var(--color-surface-100)',
            children: (
              <div className="max-w-6xl mx-auto px-6 pb-16 pt-4">
                <h2 id="portfolio-heading" className="sr-only">Selected Work</h2>
                <div className="flex justify-end mb-6">
                  <Link href="/work" className="btn-secondary font-mono text-xs uppercase tracking-widest px-4 py-2 border" style={{ borderColor: 'var(--color-line)', color: 'var(--color-surface-700)' }}>
                    All projects →
                  </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--color-line)' }}>
                  {FEATURED.map((project, idx) => {
                    const isWide = project.id === 'jesuke';
                    return (
                      <article
                        key={project.id}
                        className="project-card group flex flex-col overflow-hidden"
                        style={{ background: 'var(--color-surface-50)', gridColumn: isWide ? '1 / -1' : undefined }}
                      >
                        {project.image && (
                          <div className="relative overflow-hidden" style={{ aspectRatio: isWide ? '21/8' : '16/9' }}>
                            <img
                              src={project.image}
                              alt={project.imageAlt ?? project.name}
                              width={project.imageWidth}
                              height={project.imageHeight}
                              loading={idx === 0 ? 'eager' : 'lazy'}
                              decoding="async"
                              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)' }}
                              className="group-hover:scale-[1.06]"
                            />
                            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(17,18,20,0.8) 100%)', transition: 'opacity 0.5s ease' }} />
                            {isWide && (
                              <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--color-teal)' }}>{project.industry}</p>
                                <h3 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>{project.name}</h3>
                              </div>
                            )}
                            {!isWide && (
                              <p className="absolute bottom-3 left-4 font-mono text-[0.55rem] uppercase tracking-widest px-2 py-0.5" style={{ background: 'rgba(17,18,20,0.7)', color: 'var(--color-teal)', backdropFilter: 'blur(6px)' }}>{project.industry}</p>
                            )}
                          </div>
                        )}
                        <div className={`flex flex-col gap-4 ${isWide ? 'p-8 pt-6' : 'p-6'}`}>
                          {!isWide && <h3 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-surface-900)' }}>{project.name}</h3>}
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-surface-700)', opacity: 0.6 }}>{project.tagline}</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {project.tech.slice(0, isWide ? 7 : 4).map((t) => (
                              <span key={t} className="font-mono text-[0.6rem] px-2 py-0.5" style={{ background: 'rgba(0,85,218,0.07)', color: 'var(--color-blue)' }}>{t}</span>
                            ))}
                            {project.tech.length > (isWide ? 7 : 4) && (
                              <span className="font-mono text-[0.6rem] px-2 py-0.5" style={{ color: 'var(--color-surface-700)', opacity: 0.35 }}>+{project.tech.length - (isWide ? 7 : 4)} more</span>
                            )}
                          </div>
                          <div className="flex gap-5 mt-2 pt-4 border-t" style={{ borderColor: 'var(--color-line)' }}>
                            {project.urls.primary && (
                              <a href={project.urls.primary} target="_blank" rel="noopener noreferrer" className="accent-link font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>Visit site →</a>
                            )}
                            {project.urls.playStore && (
                              <a href={project.urls.playStore} target="_blank" rel="noopener noreferrer" className="accent-link font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-surface-700)', opacity: 0.5 }}>Google Play →</a>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ),
          },
        ]}
      />

      <div className="gradient-divider" aria-hidden="true" />

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="relative px-6 py-36 text-center overflow-hidden"
        style={{ background: 'var(--color-void-950)' }}
      >
        {/* Background photo — bao & dark wood texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/backgrounds/IMG_3454.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            animation: 'hero-drift 36s ease-in-out infinite alternate',
          }}
        />

        {/* Vignette — heavy dark centre-weighted overlay for text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: [
              'radial-gradient(ellipse 80% 90% at 50% 50%, rgba(6,8,15,0.82) 0%, rgba(6,8,15,0.60) 55%, rgba(6,8,15,0.30) 100%)',
              'linear-gradient(to bottom, rgba(6,8,15,0.65) 0%, rgba(6,8,15,0.50) 40%, rgba(6,8,15,0.75) 100%)',
            ].join(', '),
          }}
        />

        {/* Accent red glow behind the headline */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 48%, rgba(255,0,82,0.14) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <p
            className="font-mono text-xs uppercase tracking-[0.3em] mb-8"
            style={{ color: 'var(--color-teal)' }}
            data-reveal="drop"
          >
            Available for consulting &amp; senior roles
          </p>
          <h2
            id="cta-heading"
            className="font-display mb-8 leading-tight"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              color: '#fff',
              textShadow: '0 2px 40px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)',
            }}
          >
            <span data-reveal="wipe" data-delay="1" style={{ display: 'block' }}>Let&rsquo;s build</span>
            <span
              data-reveal="wipe"
              data-delay="3"
              style={{
                display: 'block',
                color: 'var(--color-accent)',
                textShadow: '0 0 60px rgba(255,0,82,0.45), 0 2px 24px rgba(0,0,0,0.8)',
              }}
            >
              something.
            </span>
          </h2>
          <p
            className="mb-12 leading-relaxed max-w-xl mx-auto"
            style={{
              color: 'rgba(255,255,255,0.6)',
              textShadow: '0 1px 8px rgba(0,0,0,0.6)',
            }}
            data-reveal="rise"
            data-delay="5"
          >
            Open to Technical Architecture, Engineering Leadership, Project Management,
            AWS Cloud consulting, DevOps, and Web &amp; Application Development engagements.
            Based in Mandaluyong City, Metro Manila — available remotely worldwide.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center"
            data-reveal="rise"
            data-delay="6"
          >
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold"
              style={{
                background: 'var(--color-accent)',
                color: '#fff',
                boxShadow: '0 8px 32px rgba(255,0,82,0.45), 0 2px 8px rgba(0,0,0,0.4)',
              }}
            >
              Start a conversation
            </Link>
            <a
              href="/cv/CV-Jaime_Canicula_Resume-May-2026.pdf"
              download
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-widest border"
              style={{
                borderColor: 'rgba(255,255,255,0.22)',
                color: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
