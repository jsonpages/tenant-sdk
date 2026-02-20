import React from 'react';
import type { CmsIceData, CmsIceSettings } from './types';

export const CmsIce: React.FC<{ data: CmsIceData; settings?: CmsIceSettings }> = ({ data }) => {
  return (
    <section
      style={{
        '--local-bg':         'var(--background)',
        '--local-text':       'var(--foreground)',
        '--local-text-muted': 'var(--muted-foreground)',
        '--local-primary':    'var(--primary)',
        '--local-accent':     'var(--color-accent, #60a5fa)',
        '--local-cyan':       'var(--color-secondary, #22d3ee)',
        '--local-border':     'var(--border)',
        '--local-surface':    'var(--card)',
      } as React.CSSProperties}
      className="relative z-0 py-28 bg-[var(--local-bg)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.1)] to-transparent" />
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Header */}
        <div className="grid grid-cols-2 gap-16 items-end mb-16">
          <div>
            {data.label && (
              <div className="jp-section-label inline-flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-[0.14em] text-[var(--local-accent)] mb-5" data-jp-field="label">
                <span className="w-6 h-px bg-[var(--local-primary)]" />
                {data.label}
              </div>
            )}
            <h2
              className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-black text-[var(--local-text)] leading-[1.05] tracking-tight"
              data-jp-field="title"
            >
              {data.title}
            </h2>
          </div>
          {data.description && (
            <p
              className="text-[1.05rem] text-[var(--local-text-muted)] leading-[1.8] pb-1"
              data-jp-field="description"
            >
              {data.description}
            </p>
          )}
        </div>

        {/* ICE Mockup — product demo, decorative */}
        <div className="rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.10)] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_60px_120px_rgba(0,0,0,0.7),0_0_80px_rgba(59,130,246,0.08)] mb-16">
          {/* Browser bar */}
          <div className="bg-[#0d1828] px-4 py-2.5 flex items-center gap-1.5 border-b border-[rgba(255,255,255,0.05)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
            <span className="mx-auto font-mono text-[0.62rem] text-[rgba(255,255,255,0.20)] bg-[rgba(255,255,255,0.04)] px-8 py-0.5 rounded">localhost:5173/admin — JsonPages Studio</span>
          </div>
          {/* Split */}
          <div className="grid grid-cols-[1fr_300px] h-[520px] bg-[#060d1b]">
            {/* Stage */}
            <div className="flex flex-col overflow-hidden">
              {/* Tenant nav sim */}
              <div className="bg-[rgba(6,13,27,0.96)] px-6 py-3 flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] flex-shrink-0">
                <div className="flex items-center gap-2 font-display font-bold text-[0.9rem] text-white">
                  <div className="w-5 h-5 bg-gradient-to-br from-[#3b82f6] to-[#22d3ee] rounded flex items-center justify-center font-mono text-[0.45rem] text-white font-bold">{'{}'}</div>
                  Json<span className="text-[#60a5fa]">Pages</span>
                </div>
                <div className="flex gap-6 text-[0.68rem] text-[#475569] font-sans">
                  <span>Architecture</span><span>CMS</span><span>Versioning</span><span>Developer</span>
                </div>
              </div>
              {/* Hero section — selected */}
              <div className="flex-1 relative p-8 flex flex-col justify-center bg-gradient-to-br from-[#04090f] to-[#071320] outline outline-2 outline-[#3b82f6] -outline-offset-2">
                <span className="absolute top-2.5 right-2.5 font-mono text-[0.5rem] font-bold uppercase tracking-widest bg-[#3b82f6] text-white px-2 py-0.5">HERO | LOCAL</span>
                <div className="font-display font-black text-[2.4rem] leading-none text-white mb-0.5">The Sovereign Shell.</div>
                <div className="font-display font-black text-[2.4rem] leading-none bg-gradient-to-r from-[#60a5fa] to-[#22d3ee] bg-clip-text text-transparent mb-4">Zero Runtime Overhead.</div>
                <p className="text-[0.75rem] text-[#475569] leading-[1.65] max-w-[360px] mb-5">The @jsonpages/core package is a headless, schema-driven runtime. It handles routing, hydration, and the admin interface.</p>
                <div className="flex gap-2">
                  <span className="text-[0.65rem] font-semibold bg-[#3b82f6] text-white px-3.5 py-1.5 rounded-[5px]">Read the Docs</span>
                  <span className="text-[0.65rem] border border-[rgba(255,255,255,0.15)] text-[#94a3b8] px-3.5 py-1.5 rounded-[5px]">View on NPM</span>
                </div>
              </div>
              {/* Next section visible but dimmed */}
              <div className="flex-shrink-0 px-6 py-4 bg-[#0a1628] border-t border-[rgba(255,255,255,0.05)] flex gap-3 opacity-40">
                {['The Form Factory', 'The Tenant Protocol', 'The Core Engine'].map((t) => (
                  <div key={t} className="flex-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded p-2.5">
                    <div className="w-3.5 h-3.5 rounded bg-[rgba(59,130,246,0.15)] mb-1.5" />
                    <div className="font-display font-bold text-[0.58rem] text-[#94a3b8]">{t}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Inspector */}
            <div className="bg-[#08121f] border-l border-[rgba(255,255,255,0.06)] flex flex-col overflow-hidden">
              <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.05)] flex items-start justify-between">
                <div>
                  <div className="font-display font-bold text-[0.88rem] text-white">Inspector</div>
                  <div className="flex items-center gap-1.5 mt-0.5 font-mono text-[0.56rem] text-[#3b82f6]">
                    <span className="font-bold">■ HERO</span>
                    <span className="text-[#1e3a5f]">|</span>
                    <span className="text-[#334155]">LOCAL</span>
                  </div>
                </div>
                <span className="font-mono text-[0.58rem] text-[#3b82f6]">+ Add section</span>
              </div>
              {/* Layers */}
              <div className="border-b border-[rgba(255,255,255,0.05)]">
                <div className="px-4 py-1.5 font-mono text-[0.54rem] uppercase tracking-widest text-[#1e3a5f] flex justify-between">
                  <span>Page Layers</span><span className="text-[#334155]">(8)</span>
                </div>
                {[
                  { type: 'HERO',  label: 'The Sovereign Shell.',    active: true,  opacity: '' },
                  { type: 'SOC',   label: 'Separation of Concerns',  active: false, opacity: 'opacity-55' },
                  { type: 'GIT',   label: 'Your content is code.',   active: false, opacity: 'opacity-45' },
                  { type: 'DEVEX', label: 'App.tsx is incredibly thin.', active: false, opacity: 'opacity-35' },
                ].map(({ type, label, active, opacity }) => (
                  <div key={type} className={`flex items-center gap-2 px-4 py-1.5 ${active ? 'bg-[rgba(59,130,246,0.08)]' : ''} ${opacity}`}>
                    <span className="text-[#1e3a5f] text-[0.58rem]">⠿</span>
                    <span className={`font-mono text-[0.52rem] uppercase tracking-wide w-10 flex-shrink-0 ${active ? 'text-[#3b82f6]' : 'text-[#1e3a5f]'}`}>{type}</span>
                    <span className={`font-sans text-[0.65rem] flex-1 truncate ${active ? 'text-[#e2e8f0] font-semibold' : 'text-[#475569]'}`}>{label}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-[#22c55e]' : 'bg-[#334155] opacity-40'}`} />
                  </div>
                ))}
              </div>
              {/* Context fields */}
              <div className="flex-1 px-4 py-3 flex flex-col gap-3 overflow-y-auto">
                {[
                  { label: 'Title',    val: 'The Sovereign Shell.',      active: true  },
                  { label: 'Subtitle', val: 'Zero Runtime Overhead.',    active: false },
                  { label: 'Badge',    val: 'Architecture v1.2',         active: false },
                ].map(({ label, val, active }) => (
                  <div key={label}>
                    <div className="font-mono text-[0.52rem] uppercase tracking-widest text-[#334155] mb-1">{label}</div>
                    <div className={`rounded px-2.5 py-1.5 font-mono text-[0.60rem] truncate ${active
                      ? 'bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.45)] text-[#e2e8f0]'
                      : 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] text-[#94a3b8]'}`}
                    >{val}</div>
                  </div>
                ))}
                <div>
                  <div className="font-mono text-[0.52rem] uppercase tracking-widest text-[#334155] mb-1 flex justify-between">
                    <span>CTAs (2)</span><span className="text-[#3b82f6]">+ Add Item</span>
                  </div>
                  <div className="border border-[rgba(255,255,255,0.05)] rounded overflow-hidden">
                    {[{ lbl: 'Read the Docs', tag: 'primary' }, { lbl: 'View on NPM', tag: 'secondary' }].map(({ lbl, tag }) => (
                      <div key={lbl} className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-[rgba(255,255,255,0.04)] last:border-b-0">
                        <span className="text-[#3b82f6] text-[0.52rem]">▸</span>
                        <span className="font-sans text-[0.60rem] text-[#475569] flex-1">{lbl}</span>
                        <span className="font-mono text-[0.48rem] px-1 py-0.5 rounded bg-[rgba(59,130,246,0.08)] text-[#60a5fa]">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Bottom bar */}
              <div className="px-4 py-2.5 border-t border-[rgba(255,255,255,0.05)] bg-[#060e1c] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                <span className="font-mono text-[0.52rem] text-[#475569]">All Changes Saved</span>
                <div className="flex items-center gap-1.5 ml-1 font-mono text-[0.52rem] text-[#334155]">
                  <div className="w-5 h-2.5 bg-[#3b82f6] rounded-full relative flex-shrink-0">
                    <div className="absolute top-[1.5px] right-[1.5px] w-[9px] h-[9px] bg-white rounded-full" />
                  </div>
                  Autosave
                </div>
                <div className="ml-auto flex gap-1.5">
                  <span className="font-mono text-[0.50rem] px-1.5 py-0.5 rounded border border-[rgba(59,130,246,0.3)] bg-[rgba(59,130,246,0.12)] text-[#60a5fa] flex items-center gap-1">⬡ HTML</span>
                  <span className="font-mono text-[0.50rem] px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#94a3b8] opacity-50">{'{}'} JSON</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callouts */}
        {data.callouts && data.callouts.length > 0 && (
          <div className="grid grid-cols-3 gap-6">
            {data.callouts.map((c, idx) => (
              <div
                key={c.id ?? idx}
                className="border border-[rgba(255,255,255,0.06)] rounded-[12px] p-8 bg-[rgba(255,255,255,0.015)] hover:border-[rgba(59,130,246,0.2)] hover:bg-[rgba(59,130,246,0.03)] transition-all duration-200"
                data-jp-item-id={c.id ?? `legacy-${idx}`}
                data-jp-item-field="callouts"
              >
                <div className="w-9 h-9 rounded-[8px] bg-[rgba(59,130,246,0.10)] flex items-center justify-center text-[1.1rem] mb-4">
                  {c.icon}
                </div>
                <h4 className="font-display font-bold text-[1.05rem] text-[var(--local-text)] mb-2">{c.title}</h4>
                <p className="text-[0.88rem] text-[var(--local-text-muted)] leading-[1.7]">{c.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
