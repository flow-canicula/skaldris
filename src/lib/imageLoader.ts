const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function img(src: string): string {
  if (src.startsWith('http') || src.startsWith(BASE_PATH)) return src;
  return `${BASE_PATH}${src}`;
}

// Custom loader for next/image — prepends basePath so static exports
// under a sub-path (e.g. GitHub Pages /skaldris/) resolve correctly.
export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  return img(src);
}
