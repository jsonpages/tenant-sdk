import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { FeatureGridSchema, FeatureGridSettingsSchema } from './schema';

export type FeatureGridData = z.infer<typeof FeatureGridSchema>;
export type FeatureGridSettings = z.infer<typeof BaseSectionSettingsSchema> & z.infer<typeof FeatureGridSettingsSchema>;
