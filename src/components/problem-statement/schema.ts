import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

export const SiloBlockVariantSchema = z.enum(['red', 'amber', 'green', 'blue']);
const SiloBlockSchema = BaseArrayItem.extend({
  label: z.string().describe('ui:text'),
  variant: SiloBlockVariantSchema.describe('ui:select'),
});

const SiloGroupSchema = BaseArrayItem.extend({
  blocks: z.array(SiloBlockSchema).describe('ui:list'),
  label: z.string().describe('ui:text'),
});

const ProblemParagraphSchema = BaseArrayItem.extend({
  text: z.string().describe('ui:textarea'),
  isBold: z.boolean().default(false).describe('ui:checkbox'),
});

export const ProblemStatementSchema = BaseSectionData.extend({
  siloGroups: z.array(SiloGroupSchema).describe('ui:list'),
  title: z.string().describe('ui:text'),
  paragraphs: z.array(ProblemParagraphSchema).describe('ui:list'),
  highlight: z.string().optional().describe('ui:text'),
});
