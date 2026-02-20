import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { PillarsGridSchema, PillarIconVariantSchema, PillarTagVariantSchema } from './schema';

export type PillarsGridData = z.infer<typeof PillarsGridSchema>;
export type PillarsGridSettings = z.infer<typeof BaseSectionSettingsSchema>;
export type PillarIconVariant = z.infer<typeof PillarIconVariantSchema>;
export type PillarTagVariant = z.infer<typeof PillarTagVariantSchema>;
