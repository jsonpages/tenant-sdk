import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { GitSectionSchema } from './schema';

export type GitSectionData     = z.infer<typeof GitSectionSchema>;
export type GitSectionSettings = z.infer<typeof BaseSectionSettingsSchema>;
