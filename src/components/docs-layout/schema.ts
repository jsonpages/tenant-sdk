import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

const DocBlockSchema = BaseArrayItem.extend({
  type:         z.enum(['paragraph', 'code', 'list', 'table', 'callout', 'note', 'heading']).default('paragraph'),
  content:      z.string().describe('ui:textarea'),
  codeFilename: z.string().optional().describe('ui:text'),
  items: z.array(z.object({ id: z.string().optional(), text: z.string() })).optional().describe('ui:list'),
  rows:  z.array(z.object({ id: z.string().optional(), col1: z.string(), col2: z.string() })).optional().describe('ui:list'),
});

const DocSectionSchema = BaseArrayItem.extend({
  anchor:  z.string().describe('ui:text'),
  title:   z.string().describe('ui:text'),
  tag:     z.string().optional().describe('ui:text'),
  blocks:  z.array(DocBlockSchema).describe('ui:list'),
});

const DocGroupSchema = BaseArrayItem.extend({
  anchor:   z.string().describe('ui:text'),
  label:    z.string().describe('ui:text'),
  sections: z.array(DocSectionSchema).describe('ui:list'),
});

export const DocsLayoutSchema = BaseSectionData.extend({
  pageTitle:    z.string().describe('ui:text'),
  pageSubtitle: z.string().optional().describe('ui:textarea'),
  version:      z.string().optional().describe('ui:text'),
  groups:       z.array(DocGroupSchema).describe('ui:list'),
});
