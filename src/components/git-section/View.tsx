import React from 'react';
import type { GitSectionData, GitSectionSettings } from './types';

export const GitSection: React.FC<{ data: GitSectionData; settings?: GitSectionSettings }> = ({ data }) => {
  return (
    <section
      style={{
        '--local-bg':         'var(--card)',
        '--local-text':       'var(--foreground)',
        '--local-text-muted': 'var(--muted-foreground)',
        '--local-primary':    'var(--primary)',
        '--local-accent':     'var(--color-accent, #60a5fa)',
        '--local-cyan':       'var(--color-secondary, #22d3ee)',
        '--local-border':     'var(--border)',
      } as React.CSSProperties}
      className="relative z-0 py-28 bg-[var(--local-bg)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.1)] to-transparent" />
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 gap-24 items-center">

        {/* LEFT — copy */}
        <div>
          {data.label && (
            <div className="jp-section-label inline-flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-[0.14em] text-[var(--local-accent)] mb-5" data-jp-field="label">
              <span className="w-6 h-px bg-[var(--local-primary)]" />
              {data.label}
            </div>
          )}
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-black text-[var(--local-text)] leading-[1.05] tracking-tight mb-4" data-jp-field="title">
            {data.title}
            {data.titleHighlight && (
              <>
                <br />
                <em className="not-italic bg-gradient-to-br from-[var(--local-accent)] to-[var(--local-cyan)] bg-clip-text text-transparent" data-jp-field="titleHighlight">
                  {data.titleHighlight}
                </em>
              </>
            )}
          </h2>
          {data.description && (
            <p className="text-[1.05rem] text-[var(--local-text-muted)] leading-[1.8] mb-8" data-jp-field="description">
              {data.description}
            </p>
          )}
          {data.points && data.points.length > 0 && (
            <ul className="flex flex-col">
              {data.points.map((p, idx) => (
                <li
                  key={p.id ?? idx}
                  className="flex items-start gap-3.5 text-[0.9rem] text-[var(--local-text-muted)] py-3.5 border-b border-[rgba(255,255,255,0.06)] last:border-b-0 hover:text-[var(--local-text)] transition-colors leading-[1.5]"
                  data-jp-item-id={p.id ?? `legacy-${idx}`}
                  data-jp-item-field="points"
                >
                  <span className="font-mono text-[var(--local-primary)] text-[0.75rem] flex-shrink-0 mt-0.5">→</span>
                  {p.text}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT — git diff panel (decorative, content-driven commits) */}
        <div className="rounded-[12px] overflow-hidden border border-[rgba(255,255,255,0.10)] shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          <div className="bg-[#0d1828] px-4 py-2.5 flex items-center gap-1.5 border-b border-[rgba(255,255,255,0.05)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
            <span className="ml-auto font-mono text-[0.62rem] text-[rgba(255,255,255,0.25)]">src/data/pages/home.json</span>
          </div>
          {/* Tabs */}
          <div className="bg-[#0a1624] border-b border-[rgba(255,255,255,0.05)] flex">
            <div className="font-mono text-[0.60rem] px-4 py-2 text-white border-b-2 border-[#3b82f6]">Changes</div>
            <div className="font-mono text-[0.60rem] px-4 py-2 text-[#475569]">History</div>
            <div className="font-mono text-[0.60rem] px-4 py-2 text-[#475569]">Blame</div>
          </div>
          {/* Diff */}
          <div className="bg-[#030609] px-4 py-4 font-mono text-[0.73rem] leading-[1.9] overflow-x-auto">
            {[
              { t: 'ctx', g: '12', s: ' ', c: '  "type": "hero",'                                },
              { t: 'ctx', g: '13', s: ' ', c: '  "data": {'                                       },
              { t: 'del', g: '14', s: '-', c: '    "title": "Local Authoring.hh",'                },
              { t: 'add', g: '14', s: '+', c: '    "title": "The Sovereign Shell.",'              },
              { t: 'del', g: '15', s: '-', c: '    "titleHighlight": "Global Governance.",'       },
              { t: 'add', g: '15', s: '+', c: '    "titleHighlight": "Zero Runtime Overhead.",'   },
              { t: 'ctx', g: '16', s: ' ', c: '    "badge": "Architecture v1.2",'                },
              { t: 'ctx', g: '17', s: ' ', c: '  }'                                               },
            ].map((ln, i) => (
              <div key={i} className={`flex gap-3 px-1 rounded-[2px] ${
                ln.t === 'add' ? 'bg-[rgba(34,197,94,0.07)]' :
                ln.t === 'del' ? 'bg-[rgba(239,68,68,0.07)]' :
                'opacity-45'}`}
              >
                <span className="text-[#334155] min-w-[18px] text-right select-none">{ln.g}</span>
                <span className={`min-w-[12px] ${ln.t === 'add' ? 'text-[#22c55e]' : ln.t === 'del' ? 'text-[#ef4444]' : 'text-[#334155]'}`}>{ln.s}</span>
                <span className={`whitespace-pre ${ln.t === 'add' ? 'text-[#86efac]' : ln.t === 'del' ? 'text-[#fca5a5]' : 'text-[#cbd5e1]'}`}>{ln.c}</span>
              </div>
            ))}
          </div>
          {/* Commits */}
          <div className="bg-[#050d1c] border-t border-[rgba(255,255,255,0.05)] px-4 py-3 flex flex-col gap-2.5">
            {[
              { hash: 'a3f9c12', msg: 'feat(home): update hero headline copy',      time: '2m ago',  op: 1   },
              { hash: '8b21e04', msg: 'content(home): add 3 metrics to hero',        time: '1h ago',  op: 0.6 },
              { hash: 'cc70a91', msg: 'feat(home): initial page structure',           time: '2d ago',  op: 0.4 },
            ].map(({ hash, msg, time, op }) => (
              <div key={hash} className="flex items-center gap-3" style={{ opacity: op }}>
                <span className="font-mono text-[0.58rem] text-[#3b82f6] min-w-[52px]">{hash}</span>
                <span className="font-sans text-[0.70rem] text-[#475569] flex-1 truncate">{msg}</span>
                <span className="font-mono text-[0.56rem] text-[#334155]">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
