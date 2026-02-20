import type { z } from 'zod';
import type { ImageBreakSchema } from './schema';

export type ImageBreakData = z.infer<typeof ImageBreakSchema>;
export type ImageBreakSettings = Record<string, unknown>;
