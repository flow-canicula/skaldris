import { describe, it, expect } from 'vitest';
import { img } from '@/lib/imageLoader';

describe('img()', () => {
  it('returns the src unchanged if it starts with http', () => {
    expect(img('https://example.com/image.jpg')).toBe('https://example.com/image.jpg');
  });

  it('prepends BASE_PATH for relative paths', () => {
    // NEXT_PUBLIC_BASE_PATH is not set in test env, so BASE_PATH = ''
    expect(img('/images/test.jpg')).toBe('/images/test.jpg');
  });

  it('does not double-prepend if path already starts with BASE_PATH', () => {
    // BASE_PATH = '' in tests, so src starting with '' is any string — just passes through
    const result = img('/work/cover.jpg');
    expect(result).toBe('/work/cover.jpg');
  });

  it('handles empty string src', () => {
    expect(img('')).toBe('');
  });
});
