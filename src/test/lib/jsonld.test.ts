import { describe, it, expect } from 'vitest';
import {
  buildPersonSchema,
  buildWebSiteSchema,
  buildBreadcrumbSchema,
} from '@/lib/jsonld';

describe('buildPersonSchema', () => {
  it('returns @type Person', () => {
    expect(buildPersonSchema()['@type']).toBe('Person');
  });

  it('uses Jaime Canicula as name', () => {
    expect(buildPersonSchema().name).toBe('Jaime Canicula');
  });

  it('includes sameAs array with GitHub links', () => {
    const schema = buildPersonSchema();
    expect(Array.isArray(schema.sameAs)).toBe(true);
    expect((schema.sameAs as string[]).some((s) => s.includes('github.com'))).toBe(true);
  });

  it('includes Technical Architect as jobTitle', () => {
    expect(buildPersonSchema().jobTitle).toBe('Technical Architect');
  });
});

describe('buildWebSiteSchema', () => {
  it('returns @type WebSite', () => {
    expect(buildWebSiteSchema()['@type']).toBe('WebSite');
  });

  it('has a url field', () => {
    expect(typeof buildWebSiteSchema().url).toBe('string');
  });

  it('has name Skaldris', () => {
    expect(buildWebSiteSchema().name).toBe('Skaldris');
  });
});

describe('buildBreadcrumbSchema', () => {
  const items = [
    { name: 'Skaldris', href: '/' },
    { name: 'Work', href: '/work' },
  ];

  it('returns @type BreadcrumbList', () => {
    expect(buildBreadcrumbSchema(items)['@type']).toBe('BreadcrumbList');
  });

  it('assigns correct 1-based positions', () => {
    const list = buildBreadcrumbSchema(items).itemListElement as Array<Record<string, unknown>>;
    expect(list[0]?.position).toBe(1);
    expect(list[1]?.position).toBe(2);
  });

  it('builds full URLs for each item', () => {
    const list = buildBreadcrumbSchema(items).itemListElement as Array<Record<string, unknown>>;
    expect(list[1]?.item as string).toContain('/work');
  });
});
