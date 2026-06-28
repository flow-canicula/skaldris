import { describe, it, expect } from 'vitest';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SOCIAL, NAV_LINKS, OG_DEFAULTS } from '@/content/site';

describe('site constants', () => {
  it('SITE_NAME is Skaldris', () => {
    expect(SITE_NAME).toBe('Skaldris');
  });

  it('SITE_URL is a valid URL', () => {
    expect(() => new URL(SITE_URL)).not.toThrow();
  });

  it('SITE_DESCRIPTION is non-empty', () => {
    expect(SITE_DESCRIPTION.length).toBeGreaterThan(10);
  });

  it('SITE_DESCRIPTION mentions Philippines', () => {
    expect(SITE_DESCRIPTION.toLowerCase()).toContain('philippines');
  });

  it('SOCIAL has primary GitHub handle', () => {
    expect(SOCIAL.githubPrimary).toContain('github.com');
  });

  it('SOCIAL has secondary GitHub handle', () => {
    expect(SOCIAL.githubSecondary).toContain('github.com');
  });

  it('NAV_LINKS includes Work and Contact', () => {
    const hrefs = NAV_LINKS.map((l) => l.href);
    expect(hrefs).toContain('/work');
    expect(hrefs).toContain('/contact');
  });

  it('OG_DEFAULTS image points to og-image.jpg', () => {
    expect(OG_DEFAULTS.image).toContain('og-image.jpg');
  });

  it('OG_DEFAULTS dimensions are 1200x630', () => {
    expect(OG_DEFAULTS.imageWidth).toBe(1200);
    expect(OG_DEFAULTS.imageHeight).toBe(630);
  });
});
