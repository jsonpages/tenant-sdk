import { z } from 'zod';
import { BaseSectionData, CtaSchema } from '@/lib/base-schemas';

const HeroMetricSchema = z.object({
  val: z.string().describe('ui:text'),
  label: z.string().describe('ui:text'),
});

export const HeroSchema = BaseSectionData.extend({
  badge: z.string().optional().describe('ui:text'),
  title: z.string().describe('ui:text'),
  titleHighlight: z.string().optional().describe('ui:text'),
  description: z.string().optional().describe('ui:textarea'),
  ctas: z.array(CtaSchema).optional().describe('ui:list'),
  metrics: z.array(HeroMetricSchema).optional().describe('ui:list'),
});
