import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { PaSectionSchema } from './schema';

export type PaSectionData = z.infer<typeof PaSectionSchema>;
export type PaSectionSettings = z.infer<typeof BaseSectionSettingsSchema>;
