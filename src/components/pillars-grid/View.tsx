import React from 'react';
import { cn } from '@/lib/utils';
import { Icon, isIconName } from '@/lib/IconResolver';
import type { PillarsGridData, PillarsGridSettings, PillarIconVariant, PillarTagVariant } from './types';

const iconVariantStyles: Record<PillarIconVariant, string> = {
  split: 'bg-[rgba(59,130,246,0.1)] text-[#60a5fa]',
  registry: 'bg-[rgba(34,211,238,0.1)] text-[#22d3ee]',
  federation: 'bg-[rgba(168,85,247,0.1)] text-[#c084fc]',
};

const tagVariantStyles: Record<PillarTagVariant, string> = {
  core: 'bg-[rgba(59,130,246,0.1)] text-[#60a5fa]',
  pattern: 'bg-[rgba(34,211,238,0.1)] text-[#22d3ee]',
  enterprise: 'bg-[rgba(168,85,247,0.1)] text-[#c084fc]',
};

export const PillarsGrid: React.FC<{ data: PillarsGridData; settings?: PillarsGridSettings }> = ({ data }) => {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.15)] to-transparent" />
      <div className="max-w-[1200px] mx-auto px-8">
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
          <p className="text-lg text-[var(--local-text-muted)] max-w-[600px] leading-relaxed" data-jp-field="description">
            {data.description}
          </p>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {data.pillars.map((pillar, idx) => (
            <div
              key={pillar.id ?? idx}
              className="jp-pillar-card group relative border border-[rgba(255,255,255,0.06)] rounded-lg p-10 bg-[rgba(255,255,255,0.015)] transition-all duration-300 overflow-hidden hover:border-[rgba(59,130,246,0.2)] hover:-translate-y-1 hover:bg-[rgba(59,130,246,0.03)]"
              data-jp-item-id={pillar.id ?? `legacy-${idx}`}
              data-jp-item-field="pillars"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--local-primary)] to-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold',
                iconVariantStyles[pillar.iconVariant]
              )}>
                {pillar.icon && isIconName(pillar.icon) ? (
                  <Icon name={pillar.icon} size={24} className="shrink-0" />
                ) : pillar.icon ? (
                  <span>{pillar.icon}</span>
                ) : null}
              </div>
              <h3 className="text-xl font-bold text-[var(--local-text)] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[0.95rem] text-[var(--local-text-muted)] leading-relaxed">
                {pillar.description}
              </p>
              <span className={cn(
                'inline-block text-[0.7rem] font-semibold uppercase tracking-wide px-3 py-1 rounded mt-4',
                tagVariantStyles[pillar.tagVariant]
              )}>
                {pillar.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
