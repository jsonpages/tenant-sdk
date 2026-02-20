import { z } from 'zod';
import { BaseSectionData, ImageSelectionSchema } from '@/lib/base-schemas';

export const ImageBreakSchema = BaseSectionData.extend({
  image: ImageSelectionSchema.default({ url: '', alt: '' }),
  caption: z.string().optional().describe('ui:text'),
});

export const ImageBreakSettingsSchema = z.object({
  height: z.enum(['sm', 'md', 'lg', 'full']).default('md').describe('ui:select'),
});