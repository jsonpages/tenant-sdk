import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { HeroSchema } from './schema';

export type HeroData = z.infer<typeof HeroSchema>;
export type HeroSettings = z.infer<typeof BaseSectionSettingsSchema>;
