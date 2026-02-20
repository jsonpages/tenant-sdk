import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

const PointSchema = BaseArrayItem.extend({
  text: z.string().describe('ui:text'),
});

export const GitSectionSchema = BaseSectionData.extend({
  label:          z.string().optional().describe('ui:text'),
  title:          z.string().describe('ui:text'),
  titleHighlight: z.string().optional().describe('ui:text'),
  description:    z.string().optional().describe('ui:textarea'),
  points:         z.array(PointSchema).optional().describe('ui:list'),
});
