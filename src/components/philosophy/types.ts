import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { PhilosophySchema } from './schema';

export type PhilosophyData = z.infer<typeof PhilosophySchema>;
export type PhilosophySettings = z.infer<typeof BaseSectionSettingsSchema>;
