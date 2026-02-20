import { z } from 'zod';
import { BaseSectionData } from '@/lib/base-schemas';

const PaBadgeSchema = z.object({
  label: z.string().describe('ui:text'),
});

const PaEngineSchema = z.object({
  label: z.string().describe('ui:text'),
  variant: z.enum(['tailwind', 'bootstrap']).describe('ui:select'),
});

export const PaSectionSchema = BaseSectionData.extend({
  label: z.string().optional().describe('ui:text'),
  title: z.string().describe('ui:text'),
  subtitle: z.string().describe('ui:text'),
  paragraphs: z.array(z.object({ text: z.string().describe('ui:textarea') })).describe('ui:list'),
  badges: z.array(PaBadgeSchema).optional().describe('ui:list'),
  engines: z.array(PaEngineSchema).optional().describe('ui:list'),
  codeSnippet: z.string().optional().describe('ui:textarea'),
});
