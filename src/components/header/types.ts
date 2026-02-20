import { z } from 'zod';
import { HeaderSchema, HeaderSettingsSchema } from './schema';

/**
 * 🧩 HEADER DATA
 * Tipo inferito dallo schema Zod del contenuto.
 * Utilizzato dalla View per renderizzare logo e links.
 */
export type HeaderData = z.infer<typeof HeaderSchema>;

/**
 * ⚙️ HEADER SETTINGS
 * Tipo inferito dallo schema Zod dei settings.
 * Gestisce comportamenti tecnici come lo 'sticky'.
 */
export type HeaderSettings = z.infer<typeof HeaderSettingsSchema>;