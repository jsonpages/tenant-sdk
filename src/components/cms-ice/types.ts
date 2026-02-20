import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { CmsIceSchema } from './schema';

export type CmsIceData     = z.infer<typeof CmsIceSchema>;
export type CmsIceSettings = z.infer<typeof BaseSectionSettingsSchema>;
