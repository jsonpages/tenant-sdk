import { z } from 'zod';
import { BaseSectionSettingsSchema } from '@/lib/base-schemas';
import { ProductTriadSchema } from './schema';

export type ProductTriadData = z.infer<typeof ProductTriadSchema>;
export type ProductTriadSettings = z.infer<typeof BaseSectionSettingsSchema>;
