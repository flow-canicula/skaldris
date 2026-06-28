import Link from 'next/link';
import { PROJECTS } from '@/content/projects';
import { t } from '@/lib/messages';

const FEATURED = PROJECTS.filter((p) => p.featured);

export function PortfolioSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-16 pt-4">
      <h2 id="portfolio-heading" className="sr-only">Selected Work</h2>
      <div className="flex justify-end mb-6">
        <Link href="/work" className="btn-secondary font-mono text-xs uppercase tracking-widest px-4 py-2 border" style={{ borderColor: 'var(--color-line)', color: 'var(--color-surface-700)' }}>
          {t.portfolio.allProjects}
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
                  {project.tech.slice(0, isWide ? 7 : 4).map((tech) => (
                    <span key={tech} className="font-mono text-[0.6rem] px-2 py-0.5" style={{ background: 'rgba(0,85,218,0.07)', color: 'var(--color-blue)' }}>{tech}</span>
                  ))}
                  {project.tech.length > (isWide ? 7 : 4) && (
                    <span className="font-mono text-[0.6rem] px-2 py-0.5" style={{ color: 'var(--color-surface-700)', opacity: 0.35 }}>+{project.tech.length - (isWide ? 7 : 4)} more</span>
                  )}
                </div>
                <div className="flex gap-5 mt-2 pt-4 border-t" style={{ borderColor: 'var(--color-line)' }}>
                  {project.urls.primary && (
                    <a href={project.urls.primary} target="_blank" rel="noopener noreferrer" className="accent-link font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>{t.portfolio.visitSite}</a>
                  )}
                  {project.urls.playStore && (
                    <a href={project.urls.playStore} target="_blank" rel="noopener noreferrer" className="accent-link font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-surface-700)', opacity: 0.5 }}>{t.portfolio.googlePlay}</a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
