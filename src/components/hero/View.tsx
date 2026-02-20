import React from 'react';
import { cn } from '@/lib/utils';
import type { HeroData, HeroSettings } from './types';

export const Hero: React.FC<{ data: HeroData; settings?: HeroSettings }> = ({ data }) => {
  return (
    <section
      style={{
        '--local-bg':          'var(--background)',
        '--local-text':        'var(--foreground)',
        '--local-text-muted':  'var(--muted-foreground)',
        '--local-primary':     'var(--primary)',
        '--local-accent':      'var(--color-accent, #60a5fa)',
        '--local-cyan':        'var(--color-secondary, #22d3ee)',
        '--local-border':      'var(--border)',
        '--local-surface':     'var(--card)',
      } as React.CSSProperties}
      className="jp-hero relative min-h-screen flex items-center overflow-hidden pt-24 pb-0 bg-[var(--local-bg)]"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.13),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[image:linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_50%_0%,black_25%,transparent_75%)] pointer-events-none" />

      <div className="relative z-0 max-w-[1200px] mx-auto px-8 w-full">
        <div className="grid grid-cols-2 gap-16 items-center pb-20">

          {/* LEFT — copy */}
          <div>
            {data.badge && (
              <div
                className="inline-flex items-center gap-2 bg-[rgba(59,130,246,0.10)] border border-[rgba(59,130,246,0.20)] px-4 py-1.5 rounded-full text-[0.70rem] font-mono font-semibold text-[var(--local-accent)] mb-8 tracking-widest uppercase jp-animate-in"
                data-jp-field="badge"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] jp-pulse-dot" />
                {data.badge}
              </div>
            )}

            <h1
              className="font-display font-black text-[clamp(3rem,6vw,5.5rem)] text-[var(--local-text)] leading-[1.0] tracking-tight mb-6 jp-animate-in jp-d1"
              data-jp-field="title"
            >
              {data.title}
              {data.titleHighlight && (
                <>
                  <br />
                  <em
                    className="not-italic bg-gradient-to-br from-[var(--local-accent)] to-[var(--local-cyan)] bg-clip-text text-transparent"
                    data-jp-field="titleHighlight"
                  >
                    {data.titleHighlight}
                  </em>
                </>
              )}
            </h1>

            {data.description && (
              <p
                className="text-[1.05rem] text-[var(--local-text-muted)] max-w-[500px] leading-[1.75] mb-10 jp-animate-in jp-d2"
                data-jp-field="description"
              >
                {data.description}
              </p>
            )}

            {data.ctas && data.ctas.length > 0 && (
              <div className="flex gap-4 flex-wrap jp-animate-in jp-d3">
                {data.ctas.map((cta, idx) => (
                  <a
                    key={cta.id ?? idx}
                    href={cta.href}
                    data-jp-item-id={cta.id ?? `legacy-${idx}`}
                    data-jp-item-field="ctas"
                    className={cn(
                      'inline-flex items-center gap-2 px-7 py-3 rounded-[7px] font-semibold text-[0.95rem] transition-all duration-200 no-underline',
                      cta.variant === 'primary'
                        ? 'bg-[var(--local-primary)] text-white hover:brightness-110 hover:-translate-y-0.5 shadow-[0_0_24px_rgba(59,130,246,0.25)]'
                        : 'bg-transparent text-[var(--local-text)] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.04)]'
                    )}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            )}

            {data.metrics && data.metrics.length > 0 && (
              <div className="flex gap-10 mt-14 pt-10 border-t border-[rgba(255,255,255,0.06)] flex-wrap jp-animate-in jp-d4">
                {data.metrics.map((metric, idx) => (
                  <div
                    key={(metric as { id?: string }).id ?? idx}
                    data-jp-item-id={(metric as { id?: string }).id ?? `legacy-${idx}`}
                    data-jp-item-field="metrics"
                  >
                    <div className="font-display text-[2.2rem] font-black text-[var(--local-text)] leading-none">
                      {metric.val}
                    </div>
                    <div className="text-[0.72rem] font-mono uppercase tracking-[0.1em] text-[var(--local-text-muted)] mt-1 opacity-70">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — ICE mini-mockup */}
          <div className="jp-animate-in jp-d2 rounded-[12px] overflow-hidden border border-[rgba(255,255,255,0.10)] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(59,130,246,0.08)]">
            {/* Browser bar */}
            <div className="bg-[#0f1923] px-3 py-2.5 flex items-center gap-1.5 border-b border-[rgba(255,255,255,0.05)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              <span className="mx-auto font-mono text-[0.60rem] text-[rgba(255,255,255,0.20)] bg-[rgba(255,255,255,0.04)] px-3 py-0.5 rounded">localhost:5173 · Studio</span>
            </div>
            {/* Split: canvas + inspector */}
            <div className="grid grid-cols-[1fr_260px] h-[360px] bg-[#060d1b]">
              {/* Canvas */}
              <div className="relative bg-gradient-to-br from-[#04090f] to-[#07112a] p-8 flex flex-col justify-center">
                <span className="absolute top-2 right-2 font-mono text-[0.48rem] font-bold tracking-widest uppercase bg-[#3b82f6] text-white px-1.5 py-0.5">HERO | LOCAL</span>
                <div className="absolute inset-0 border-2 border-[#3b82f6] pointer-events-none" />
                <div className="inline-flex items-center gap-1.5 bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.10)] rounded-full px-2.5 py-1 font-mono text-[0.52rem] text-[#94a3b8] mb-3 w-fit">
                  <span className="w-1 h-1 rounded-full bg-[#22c55e]" />
                  {data.badge ?? 'Architecture v1.2'}
                </div>
                <div className="font-display font-black text-[1.5rem] leading-none text-white mb-0.5">
                  {data.title}
                </div>
                {data.titleHighlight && (
                  <div className="font-display font-black text-[1.5rem] leading-none bg-gradient-to-r from-[#60a5fa] to-[#22d3ee] bg-clip-text text-transparent mb-3">
                    {data.titleHighlight}
                  </div>
                )}
                <p className="text-[0.65rem] text-[#475569] leading-[1.6] max-w-[220px] mb-3">
                  {data.description?.slice(0, 100)}…
                </p>
                <div className="flex gap-1.5">
                  <span className="text-[0.58rem] font-semibold bg-[#3b82f6] text-white px-2.5 py-1 rounded">Read the Docs</span>
                  <span className="text-[0.58rem] border border-[rgba(255,255,255,0.15)] text-[#94a3b8] px-2.5 py-1 rounded">View on NPM</span>
                </div>
                <div className="flex gap-4 mt-3 pt-3 border-t border-[rgba(255,255,255,0.05)]">
                  {(data.metrics ?? []).map((m, i) => (
                    <div key={i}>
                      <div className="font-display font-black text-[1rem] text-white leading-none">{m.val}</div>
                      <div className="font-mono text-[0.44rem] uppercase tracking-widest text-[#334155] mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Inspector */}
              <div className="bg-[#08121f] border-l border-[rgba(255,255,255,0.06)] flex flex-col">
                <div className="px-3.5 py-2.5 border-b border-[rgba(255,255,255,0.05)] flex items-start justify-between">
                  <div>
                    <div className="font-display font-bold text-[0.80rem] text-white">Inspector</div>
                    <div className="flex items-center gap-1.5 mt-0.5 font-mono text-[0.54rem] text-[#3b82f6]">
                      <span className="font-bold">■ HERO</span>
                      <span className="text-[#1e3a5f]">|</span>
                      <span className="text-[#334155]">LOCAL</span>
                    </div>
                  </div>
                  <span className="font-mono text-[0.55rem] text-[#3b82f6]">+ Add section</span>
                </div>
                {/* Layers */}
                <div className="border-b border-[rgba(255,255,255,0.05)]">
                  <div className="px-3.5 py-1.5 font-mono text-[0.50rem] uppercase tracking-widest text-[#1e3a5f] flex justify-between">
                    <span>Page Layers</span><span className="text-[#334155]">(8)</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[rgba(59,130,246,0.08)]">
                    <span className="font-mono text-[0.50rem] uppercase tracking-wide text-[#3b82f6] w-9">HERO</span>
                    <span className="font-sans text-[0.60rem] text-[#e2e8f0] font-semibold flex-1 truncate">{data.title}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 opacity-50">
                    <span className="font-mono text-[0.50rem] uppercase tracking-wide text-[#1e3a5f] w-9">SOC</span>
                    <span className="font-sans text-[0.60rem] text-[#334155] flex-1 truncate">Separation of Concerns</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 opacity-35">
                    <span className="font-mono text-[0.50rem] uppercase tracking-wide text-[#1e3a5f] w-9">CMS</span>
                    <span className="font-sans text-[0.60rem] text-[#334155] flex-1 truncate">In-Context Editing</span>
                  </div>
                </div>
                {/* Fields */}
                <div className="flex-1 px-3.5 py-3 flex flex-col gap-2.5 overflow-hidden">
                  <div>
                    <div className="font-mono text-[0.50rem] uppercase tracking-widest text-[#334155] mb-1">Title</div>
                    <div className="bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.45)] rounded px-2 py-1.5 font-mono text-[0.58rem] text-[#e2e8f0] truncate">{data.title}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[0.50rem] uppercase tracking-widest text-[#334155] mb-1">Subtitle</div>
                    <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded px-2 py-1.5 font-mono text-[0.58rem] text-[#94a3b8] truncate">{data.titleHighlight}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[0.50rem] uppercase tracking-widest text-[#334155] mb-1">Badge</div>
                    <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded px-2 py-1.5 font-mono text-[0.58rem] text-[#94a3b8] truncate">{data.badge}</div>
                  </div>
                </div>
                {/* Bottom bar */}
                <div className="px-3.5 py-2 border-t border-[rgba(255,255,255,0.05)] bg-[#060e1c] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  <span className="font-mono text-[0.50rem] text-[#475569]">All Changes Saved</span>
                  <div className="ml-auto flex gap-1.5">
                    <span className="font-mono text-[0.48rem] px-1.5 py-0.5 rounded border border-[rgba(59,130,246,0.3)] bg-[rgba(59,130,246,0.12)] text-[#60a5fa]">⬡ HTML</span>
                    <span className="font-mono text-[0.48rem] px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#94a3b8] opacity-50">{ } JSON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
