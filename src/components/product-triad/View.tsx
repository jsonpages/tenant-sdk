import React from 'react';
import { cn } from '@/lib/utils';
import type { ProductTriadData, ProductTriadSettings } from './types';

export const ProductTriad: React.FC<{ data: ProductTriadData; settings?: ProductTriadSettings }> = ({ data }) => {
  return (
    <section
      style={{
        '--local-bg': 'var(--background)',
        '--local-text': 'var(--foreground)',
        '--local-text-muted': 'var(--muted-foreground)',
        '--local-primary': 'var(--primary)',
        '--local-accent': 'var(--color-accent, #60a5fa)',
        '--local-border': 'var(--border)',
      } as React.CSSProperties}
      className="relative z-0 py-28 bg-[var(--local-bg)]"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center">
          {data.label && (
            <div className="jp-section-label inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[var(--local-accent)] mb-4" data-jp-field="label">
              <span className="w-5 h-px bg-[var(--local-primary)]" />
              {data.label}
            </div>
          )}
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[var(--local-text)] leading-[1.15] tracking-tight mb-4" data-jp-field="title">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-lg text-[var(--local-text-muted)] max-w-[600px] mx-auto leading-relaxed" data-jp-field="description">
              {data.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {data.products.map((product, idx) => (
            <div
              key={product.id ?? idx}
              className={cn(
                'relative border rounded-lg p-10 transition-all duration-300 hover:-translate-y-1',
                product.featured
                  ? 'border-[rgba(59,130,246,0.3)] bg-gradient-to-b from-[rgba(59,130,246,0.06)] to-[rgba(59,130,246,0.01)] hover:border-[rgba(59,130,246,0.4)]'
                  : 'border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.015)] hover:border-[rgba(59,130,246,0.2)]'
              )}
              data-jp-item-id={product.id ?? `legacy-${idx}`}
              data-jp-item-field="products"
            >
              {product.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--local-primary)] text-white text-[0.7rem] font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <div className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--local-accent)] mb-2">
                {product.tier}
              </div>
              <div className="text-2xl font-extrabold text-[var(--local-text)] mb-2">
                {product.name}
              </div>
              <div className="font-display text-[2.2rem] font-extrabold text-[var(--local-text)] mb-1">
                {product.price}
                {product.priceSuffix && (
                  <span className="text-[0.9rem] font-normal text-[var(--local-text-muted)]">
                    {product.priceSuffix}
                  </span>
                )}
              </div>
              <div className="text-[0.85rem] text-[var(--local-text-muted)] mb-6 pb-6 border-b border-[rgba(255,255,255,0.06)]">
                {product.delivery}
              </div>
              <ul className="mb-8 space-y-0">
                {product.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="text-[0.9rem] text-[#cbd5e1] py-1.5 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[var(--local-accent)] before:font-bold before:text-[0.8rem]"
                  >
                    {feature.text}
                  </li>
                ))}
              </ul>
              {product.ctaLabel && product.ctaHref && (
                <a
                  href={product.ctaHref}
                  className={cn(
                    'block text-center py-3 rounded-[5px] no-underline font-semibold text-[0.95rem] transition-all duration-200',
                    product.ctaVariant === 'primary'
                      ? 'bg-[var(--local-primary)] text-white hover:brightness-110 hover:-translate-y-px'
                      : 'bg-[rgba(255,255,255,0.05)] text-[#e2e8f0] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)]'
                  )}
                >
                  {product.ctaLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
