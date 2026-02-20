import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

export const PillarIconVariantSchema = z.enum(['split', 'registry', 'federation']);
export const PillarTagVariantSchema = z.enum(['core', 'pattern', 'enterprise']);

const PillarCardSchema = BaseArrayItem.extend({
  icon: z.string().describe('ui:icon-picker'),
  iconVariant: PillarIconVariantSchema.describe('ui:select'),
  title: z.string().describe('ui:text'),
  description: z.string().describe('ui:textarea'),
  tag: z.string().describe('ui:text'),
  tagVariant: PillarTagVariantSchema.describe('ui:select'),
});

export const PillarsGridSchema = BaseSectionData.extend({
  label: z.string().optional().describe('ui:text'),
  title: z.string().describe('ui:text'),
  description: z.string().optional().describe('ui:textarea'),
  pillars: z.array(PillarCardSchema).describe('ui:list'),
});
