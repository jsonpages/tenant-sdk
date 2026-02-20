import React from 'react';
import { cn } from '@/lib/utils';
import type { CtaBannerData, CtaBannerSettings } from './types';

export const CtaBanner: React.FC<{ data: CtaBannerData; settings?: CtaBannerSettings }> = ({ data }) => {
  return (
    <section
      style={{
        '--local-bg':         'var(--card)',
        '--local-text':       'var(--foreground)',
        '--local-text-muted': 'var(--muted-foreground)',
        '--local-primary':    'var(--primary)',
        '--local-accent':     'var(--color-accent, #60a5fa)',
        '--local-cyan':       'var(--color-secondary, #22d3ee)',
      } as React.CSSProperties}
      className="relative py-28 bg-[var(--local-bg)] overflow-hidden text-center"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[48px] h-[2px] bg-gradient-to-r from-[var(--local-primary)] to-[var(--local-cyan)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[960px] mx-auto px-8">
        <h2
          className="font-display text-[clamp(3rem,7vw,6.5rem)] font-black text-[var(--local-text)] leading-[1.0] tracking-tight mb-6"
          data-jp-field="title"
        >
          {data.title}
        </h2>
        {data.description && (
          <p
            className="text-[1.15rem] text-[var(--local-text-muted)] max-w-[560px] mx-auto leading-[1.75] mb-10"
            data-jp-field="description"
          >
            {data.description}
          </p>
        )}
        {data.cliCommand && (
          <div
            className="inline-flex items-center gap-4 bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] rounded-[12px] px-6 py-4 font-mono text-[0.88rem] text-[var(--local-text-muted)] mb-10"
            data-jp-field="cliCommand"
          >
            <span className="text-[var(--local-primary)]">$</span>
            <span className="text-white">{data.cliCommand}</span>
          </div>
        )}
        {data.ctas && data.ctas.length > 0 && (
          <div className="flex gap-4 justify-center flex-wrap">
            {data.ctas.map((cta, idx) => (
              <a
                key={cta.id ?? idx}
                href={cta.href}
                data-jp-item-id={cta.id ?? `legacy-${idx}`}
                data-jp-item-field="ctas"
                className={cn(
                  'inline-flex items-center gap-2 px-9 py-3.5 rounded-[7px] font-semibold text-[1rem] transition-all duration-200 no-underline',
                  cta.variant === 'primary'
                    ? 'bg-[var(--local-primary)] text-white hover:brightness-110 hover:-translate-y-0.5 shadow-[0_0_32px_rgba(59,130,246,0.25)]'
                    : 'bg-transparent text-[var(--local-text)] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.04)]'
                )}
              >
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
