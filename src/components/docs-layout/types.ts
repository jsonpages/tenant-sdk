import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { DocsLayoutSchema } from './schema';

export type DocsLayoutData     = z.infer<typeof DocsLayoutSchema>;
export type DocsLayoutSettings = z.infer<typeof BaseSectionSettingsSchema>;
