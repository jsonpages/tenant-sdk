import type { AddSectionConfig } from '@jsonpages/core';

const addableSectionTypes = [
  'hero', 'feature-grid', 'code-block', 'problem-statement',
  'pillars-grid', 'arch-layers', 'product-triad', 'pa-section',
  'philosophy', 'cta-banner', 'image-break',
  'cms-ice', 'git-section', 'devex', 'cli-section', 'docs-layout',
] as const;

const sectionTypeLabels: Record<string, string> = {
  'hero':              'Hero',
  'feature-grid':      'Feature Grid',
  'code-block':        'Code Block',
  'problem-statement': 'Problem Statement',
  'pillars-grid':      'Pillars Grid',
  'arch-layers':       'Architecture Layers',
  'product-triad':     'Product Triad',
  'pa-section':        'PA Section',
  'philosophy':        'Philosophy',
  'cta-banner':        'CTA Banner',
  'image-break':       'Image Break',
  'cms-ice':           'CMS / In-Context Editing',
  'git-section':       'Git Versioning',
  'devex':             'Developer Experience',
  'cli-section':       'CLI Tool',
  'docs-layout':       'Documentation Layout',
};

function getDefaultSectionData(type: string): Record<string, unknown> {
  switch (type) {
    case 'hero':              return { title: 'New Hero', description: '' };
    case 'feature-grid':      return { sectionTitle: 'Features', cards: [] };
    case 'code-block':        return { lines: [] };
    case 'problem-statement': return { title: 'Problem Statement', siloGroups: [], paragraphs: [] };
    case 'pillars-grid':      return { title: 'Pillars', pillars: [] };
    case 'arch-layers':       return { title: 'Architecture', layers: [] };
    case 'product-triad':     return { title: 'Products', products: [] };
    case 'pa-section':        return { title: 'Section', subtitle: 'Subtitle', paragraphs: [{ text: '' }] };
    case 'philosophy':        return { title: 'Philosophy', quote: 'Your quote here.' };
    case 'cta-banner':        return { title: 'Call to Action', description: '', cliCommand: '' };
    case 'image-break':       return { image: { url: '', alt: '' }, caption: '' };
    case 'cms-ice':           return { title: 'In-Context Editing', description: '', callouts: [] };
    case 'git-section':       return { title: 'Your content is code.', description: '', points: [] };
    case 'devex':             return { title: 'Developer Experience', description: '', features: [] };
    case 'cli-section':       return { title: 'CLI Tool', description: '', steps: [] };
    case 'docs-layout':       return { pageTitle: 'Documentation', pageSubtitle: '', version: 'v1.0', groups: [] };
    default:                  return {};
  }
}

export const addSectionConfig: AddSectionConfig = {
  addableSectionTypes: [...addableSectionTypes],
  sectionTypeLabels,
  getDefaultSectionData,
};
