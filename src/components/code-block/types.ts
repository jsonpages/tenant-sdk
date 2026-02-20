import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { CodeBlockSchema, CodeBlockSettingsSchema } from './schema';

export type CodeBlockData = z.infer<typeof CodeBlockSchema>;
export type CodeBlockSettings = z.infer<typeof BaseSectionSettingsSchema> & z.infer<typeof CodeBlockSettingsSchema>;
