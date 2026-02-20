import { z } from 'zod';
import { BaseSectionData, CtaSchema } from '@/lib/base-schemas';

export const CtaBannerSchema = BaseSectionData.extend({
  label:      z.string().optional().describe('ui:text'),
  title:      z.string().describe('ui:text'),
  description: z.string().optional().describe('ui:textarea'),
  cliCommand: z.string().optional().describe('ui:text'),
  ctas:       z.array(CtaSchema).optional().describe('ui:list'),
});
