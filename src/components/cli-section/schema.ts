import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

const CliStepSchema = BaseArrayItem.extend({
  num:         z.string().describe('ui:text'),
  title:       z.string().describe('ui:text'),
  description: z.string().describe('ui:textarea'),
});

export const CliSectionSchema = BaseSectionData.extend({
  label:       z.string().optional().describe('ui:text'),
  title:       z.string().describe('ui:text'),
  description: z.string().optional().describe('ui:textarea'),
  steps:       z.array(CliStepSchema).optional().describe('ui:list'),
});
