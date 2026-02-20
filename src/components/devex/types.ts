import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { DevexSchema } from './schema';

export type DevexData     = z.infer<typeof DevexSchema>;
export type DevexSettings = z.infer<typeof BaseSectionSettingsSchema>;
