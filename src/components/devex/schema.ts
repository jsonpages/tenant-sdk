import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

const FeatureSchema = BaseArrayItem.extend({
  text: z.string().describe('ui:text'),
});

export const DevexSchema = BaseSectionData.extend({
  label:       z.string().optional().describe('ui:text'),
  title:       z.string().describe('ui:text'),
  description: z.string().optional().describe('ui:textarea'),
  features:    z.array(FeatureSchema).optional().describe('ui:list'),
});
