/**
 * Page registry from src/data/pages/*.json.
 * Add a .json file in that directory to add a page; no manual list in App.tsx.
 */
import type { PageConfig } from '@/types';

function slugFromPath(filePath: string): string {
  const base = filePath.split('/').pop() ?? filePath;
  const name = base.replace(/\.json$/i, '').trim();
  return name || 'page';
}

export function getFilePages(): Record<string, PageConfig> {
  const glob = import.meta.glob<{ default: unknown }>('@/data/pages/*.json', { eager: true });
  const bySlug = new Map<string, PageConfig>();
  for (const [path, mod] of Object.entries(glob)) {
    const slug = slugFromPath(path);
    const raw = mod?.default;
    if (raw == null || typeof raw !== 'object') continue;
    bySlug.set(slug, raw as PageConfig);
  }
  const slugs = Array.from(bySlug.keys()).sort((a, b) =>
    a === 'home' ? -1 : b === 'home' ? 1 : a.localeCompare(b)
  );
  const record: Record<string, PageConfig> = {};
  for (const slug of slugs) {
    const config = bySlug.get(slug);
    if (config) record[slug] = config;
  }
  return record;
}
