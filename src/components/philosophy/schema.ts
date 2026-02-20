import { z } from 'zod';
import { BaseSectionData } from '@/lib/base-schemas';

export const PhilosophySchema = BaseSectionData.extend({
  label: z.string().optional().describe('ui:text'),
  title: z.string().describe('ui:text'),
  quote: z.string().describe('ui:textarea'),
  quoteHighlightWord: z.string().optional().describe('ui:text'),
  description: z.string().optional().describe('ui:textarea'),
});
