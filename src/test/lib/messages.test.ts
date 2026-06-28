import { describe, it, expect } from 'vitest';
import { t } from '@/lib/messages';

describe('messages (t)', () => {
  it('t.hero.eyebrow exists and is a string', () => {
    expect(typeof t.hero.eyebrow).toBe('string');
    expect(t.hero.eyebrow.length).toBeGreaterThan(0);
  });

  it('t.nav.contact equals "Contact"', () => {
    expect(t.nav.contact).toBe('Contact');
  });

  it('ticker services array has 6 items', () => {
    expect(t.ticker.services).toHaveLength(6);
  });

  it('ticker services includes Technical Architecture', () => {
    expect(t.ticker.services).toContain('Technical Architecture');
  });

  it('t.about.heading1 is Architect.', () => {
    expect(t.about.heading1).toBe('Architect.');
  });

  it('t.about.heading2 is Leader.', () => {
    expect(t.about.heading2).toBe('Leader.');
  });

  it('t.cta.primaryCta is "Start a conversation"', () => {
    expect(t.cta.primaryCta).toBe('Start a conversation');
  });

  it('t.portfolio.allProjects contains arrow', () => {
    expect(t.portfolio.allProjects).toContain('→');
  });

  it('t.meta.homeTitle mentions Jaime', () => {
    expect(t.meta.homeTitle).toContain('Jaime');
  });

  it('t.credentials.issuedBy is "Issued by"', () => {
    expect(t.credentials.issuedBy).toBe('Issued by');
  });

  it('t.footer.wordmark is Skaldris', () => {
    expect(t.footer.wordmark).toBe('Skaldris');
  });
});
