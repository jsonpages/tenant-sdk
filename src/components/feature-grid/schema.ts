import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

export const FeatureCardSchema = BaseArrayItem.extend({
  icon: z.string().optional().describe('ui:icon-picker'),
  emoji: z.string().optional().describe('ui:text'),
  title: z.string().describe('ui:text'),
  description: z.string().describe('ui:textarea'),
});

export const FeatureGridSchema = BaseSectionData.extend({
  sectionTitle: z.string().describe('ui:text'),
  cards: z.array(FeatureCardSchema).describe('ui:list'),
});

export const FeatureGridSettingsSchema = z.object({
  columns: z.union([z.literal(2), z.literal(3), z.literal(4)]).optional().describe('ui:number'),
  cardStyle: z.enum(['plain', 'bordered']).optional().describe('ui:select'),
});
