import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { ArchLayersSchema, ArchLayerLevelSchema, SyntaxTokenTypeSchema } from './schema';

export type ArchLayersData = z.infer<typeof ArchLayersSchema>;
export type ArchLayersSettings = z.infer<typeof BaseSectionSettingsSchema>;
export type ArchLayerLevel = z.infer<typeof ArchLayerLevelSchema>;
export type SyntaxTokenType = z.infer<typeof SyntaxTokenTypeSchema>;
