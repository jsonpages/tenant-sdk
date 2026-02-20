import { z } from 'zod';
import { BaseSectionData } from '@/lib/base-schemas';

export const LegacyCodeLineSchema = z.object({
  content: z.string().describe('ui:text'),
  isComment: z.boolean().default(false).describe('ui:checkbox'),
});

export const CodeBlockSchema = BaseSectionData.extend({
  label: z.string().optional().describe('ui:text'),
  lines: z.array(LegacyCodeLineSchema).describe('ui:list'),
});

export const CodeBlockSettingsSchema = z.object({
  showLineNumbers: z.boolean().optional().describe('ui:checkbox'),
});
