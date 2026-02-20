import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { CliSectionSchema } from './schema';

export type CliSectionData     = z.infer<typeof CliSectionSchema>;
export type CliSectionSettings = z.infer<typeof BaseSectionSettingsSchema>;
