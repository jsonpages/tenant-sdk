import { z } from 'zod';
import { BaseSectionData, BaseArrayItem } from '@/lib/base-schemas';

const ProductFeatureSchema = z.object({
  text: z.string().describe('ui:text'),
});

const ProductCardSchema = BaseArrayItem.extend({
  tier: z.string().describe('ui:text'),
  name: z.string().describe('ui:text'),
  price: z.string().describe('ui:text'),
  priceSuffix: z.string().optional().describe('ui:text'),
  delivery: z.string().describe('ui:text'),
  features: z.array(ProductFeatureSchema).describe('ui:list'),
  featured: z.boolean().default(false).describe('ui:checkbox'),
  ctaLabel: z.string().optional().describe('ui:text'),
  ctaHref: z.string().optional().describe('ui:text'),
  ctaVariant: z.enum(['primary', 'secondary']).default('secondary').describe('ui:select'),
});

export const ProductTriadSchema = BaseSectionData.extend({
  label: z.string().optional().describe('ui:text'),
  title: z.string().describe('ui:text'),
  description: z.string().optional().describe('ui:textarea'),
  products: z.array(ProductCardSchema).describe('ui:list'),
});
