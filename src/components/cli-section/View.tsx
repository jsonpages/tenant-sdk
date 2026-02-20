import React from 'react';
import type { CliSectionData, CliSectionSettings } from './types';

export const CliSection: React.FC<{ data: CliSectionData; settings?: CliSectionSettings }> = ({ data }) => {
  return (
    <section
      style={{
        '--local-bg':         'var(--card)',
        '--local-text':       'var(--foreground)',
        '--local-text-muted': 'var(--muted-foreground)',
        '--local-primary':    'var(--primary)',
        '--local-accent':     'var(--color-accent, #60a5fa)',
        '--local-border':     'var(--border)',
      } as React.CSSProperties}
      className="relative z-0 py-28 bg-[var(--local-bg)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.1)] to-transparent" />
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 gap-24 items-center">

        {/* LEFT */}
        <div>
          {data.label && (
            <div className="jp-section-label inline-flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-[0.14em] text-[var(--local-accent)] mb-5" data-jp-field="label">
              <span className="w-6 h-px bg-[var(--local-primary)]" />
              {data.label}
            </div>
          )}
          <h2
            className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-black text-[var(--local-text)] leading-[1.05] tracking-tight mb-5"
            data-jp-field="title"
          >
            {data.title}
          </h2>
          {data.description && (
            <p className="text-[1.05rem] text-[var(--local-text-muted)] leading-[1.8] mb-8" data-jp-field="description">
              {data.description}
            </p>
          )}
          {data.steps && data.steps.length > 0 && (
            <div className="flex flex-col">
              {data.steps.map((step, idx) => (
                <div
                  key={step.id ?? idx}
                  className="grid grid-cols-[32px_1fr] gap-4 py-6 border-b border-[rgba(255,255,255,0.06)] last:border-b-0 items-start"
                  data-jp-item-id={step.id ?? `legacy-${idx}`}
                  data-jp-item-field="steps"
                >
                  <div className="font-display text-[1.25rem] font-black text-[#334155] leading-none mt-0.5">{step.num}</div>
                  <div>
                    <div className="font-display font-bold text-[1rem] text-[var(--local-text)] mb-1">{step.title}</div>
                    <p className="text-[0.85rem] text-[var(--local-text-muted)] leading-[1.6]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — terminal */}
        <div className="rounded-[12px] overflow-hidden border border-[rgba(255,255,255,0.10)] shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          <div className="bg-[#0d1828] px-4 py-2.5 flex items-center gap-1.5 border-b border-[rgba(255,255,255,0.05)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
            <span className="mx-auto font-mono text-[0.60rem] text-[rgba(255,255,255,0.25)]">Terminal</span>
          </div>
          <div className="bg-[#020508] px-7 py-6 font-mono text-[0.78rem] leading-[2.1] overflow-x-auto">
            <div><span className="text-[#5c6370] italic"># Step 1 — install CLI globally</span></div>
            <div><span className="text-[#3b82f6]">$</span> <span className="text-white">npm install -g </span><span className="text-[#98c379]">@jsonpages/cli@latest</span></div>
            <div><span className="text-[#334155]">added 1 package in 2.3s</span></div>
            <div><span className="text-[#22c55e]">✓ @jsonpages/cli@1.2.0 installed</span></div>
            <div>&nbsp;</div>
            <div><span className="text-[#5c6370] italic"># Step 2 — scaffold a new tenant</span></div>
            <div><span className="text-[#3b82f6]">$</span> <span className="text-[#98c379]">npx @jsonpages/cli@latest</span> <span className="text-white">new my-tenant</span></div>
            <div><span className="text-[#22c55e]">  ✓ src/components/hero/</span></div>
            <div><span className="text-[#22c55e]">  ✓ src/lib/schemas.ts</span></div>
            <div><span className="text-[#22c55e]">  ✓ src/lib/ComponentRegistry.tsx</span></div>
            <div><span className="text-[#22c55e]">  ✓ src/data/pages/home.json</span></div>
            <div><span className="text-[#22c55e]">  ✓ Done in 1.8s</span></div>
            <div>&nbsp;</div>
            <div><span className="text-[#5c6370] italic"># Step 3 — start Studio</span></div>
            <div><span className="text-[#3b82f6]">$</span> <span className="text-white">cd my-tenant && npm run dev</span></div>
            <div><span className="text-[#22c55e]">  ➜ Studio ready at </span><span className="text-[#60a5fa]">http://localhost:5173</span><span className="inline-block w-2 h-[1em] bg-[#3b82f6] ml-1 align-text-bottom animate-pulse" /></div>
          </div>
        </div>

      </div>
    </section>
  );
};
