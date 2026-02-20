import { z } from 'zod';

export const FooterSchema = z.object({
  brandText: z.string().describe('ui:text'),
  brandHighlight: z.string().optional().describe('ui:text'),
  copyright: z.string().describe('ui:text'),
  links: z.array(z.object({
    label: z.string().describe('ui:text'),
    href: z.string().describe('ui:text'),
  })).optional().describe('ui:list'),
});

export const FooterSettingsSchema = z.object({
  showLogo: z.boolean().optional().describe('ui:checkbox'),
});
