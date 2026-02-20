import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

const CalloutSchema = BaseArrayItem.extend({
  icon:        z.string().describe('ui:text'),
  title:       z.string().describe('ui:text'),
  description: z.string().describe('ui:textarea'),
});

export const CmsIceSchema = BaseSectionData.extend({
  label:       z.string().optional().describe('ui:text'),
  title:       z.string().describe('ui:text'),
  description: z.string().optional().describe('ui:textarea'),
  callouts:    z.array(CalloutSchema).optional().describe('ui:list'),
});
