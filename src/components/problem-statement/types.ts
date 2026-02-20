import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { ProblemStatementSchema, SiloBlockVariantSchema } from './schema';

export type ProblemStatementData = z.infer<typeof ProblemStatementSchema>;
export type ProblemStatementSettings = z.infer<typeof BaseSectionSettingsSchema>;
export type SiloBlockVariant = z.infer<typeof SiloBlockVariantSchema>;
