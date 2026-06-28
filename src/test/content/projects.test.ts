import { describe, it, expect } from 'vitest';
import { PROJECTS, FEATURED_PROJECTS } from '@/content/projects';

describe('PROJECTS', () => {
  it('has 5 items', () => {
    expect(PROJECTS).toHaveLength(5);
  });

  it('Digipay is featured', () => {
    const digipay = PROJECTS.find((p) => p.id === 'digipay');
    expect(digipay).toBeDefined();
    expect(digipay?.featured).toBe(true);
  });

  it('SolarVN image is banner.png', () => {
    const solar = PROJECTS.find((p) => p.id === 'solar');
    expect(solar?.image).toContain('banner.png');
  });

  it('each project has required fields', () => {
    for (const project of PROJECTS) {
      expect(typeof project.id).toBe('string');
      expect(typeof project.name).toBe('string');
      expect(typeof project.tagline).toBe('string');
      expect(Array.isArray(project.tech)).toBe(true);
      expect(Array.isArray(project.highlights)).toBe(true);
    }
  });

  it('all featured projects have an image', () => {
    const featured = PROJECTS.filter((p) => p.featured);
    for (const project of featured) {
      expect(project.image).toBeTruthy();
    }
  });

  it('all projects have a primary or site URL', () => {
    for (const project of PROJECTS) {
      const hasUrl = project.urls.primary ?? project.urls.site;
      expect(hasUrl).toBeTruthy();
    }
  });

  it('FEATURED_PROJECTS matches filter', () => {
    const expected = PROJECTS.filter((p) => p.featured);
    expect(FEATURED_PROJECTS).toEqual(expected);
  });

  it('includes Jesuke, TNP, Solar, Design, and Digipay', () => {
    const ids = PROJECTS.map((p) => p.id);
    expect(ids).toContain('jesuke');
    expect(ids).toContain('tnp');
    expect(ids).toContain('solar');
    expect(ids).toContain('design');
    expect(ids).toContain('digipay');
  });
});
