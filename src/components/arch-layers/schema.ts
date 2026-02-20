import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

export const ArchLayerLevelSchema = z.enum(['l0', 'l1', 'l2']);
export const SyntaxTokenTypeSchema = z.enum(['plain', 'keyword', 'type', 'string', 'comment', 'operator']);

const ArchLayerItemSchema = BaseArrayItem.extend({
  number: z.string().describe('ui:text'),
  layerLevel: ArchLayerLevelSchema.describe('ui:select'),
  title: z.string().describe('ui:text'),
  description: z.string().describe('ui:textarea'),
});

const SyntaxLineSchema = z.object({
  content: z.string().describe('ui:text'),
  tokenType: SyntaxTokenTypeSchema.default('plain').describe('ui:select'),
});

export const ArchLayersSchema = BaseSectionData.extend({
  label: z.string().optional().describe('ui:text'),
  title: z.string().describe('ui:text'),
  description: z.string().optional().describe('ui:textarea'),
  layers: z.array(ArchLayerItemSchema).describe('ui:list'),
  codeFilename: z.string().optional().describe('ui:text'),
  codeLines: z.array(SyntaxLineSchema).optional().describe('ui:list'),
});
