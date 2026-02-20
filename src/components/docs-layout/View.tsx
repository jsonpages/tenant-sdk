import React, { useEffect, useRef, useState } from 'react';
import type { DocsLayoutData, DocsLayoutSettings } from './types';

type Block = DocsLayoutData['groups'][0]['sections'][0]['blocks'][0];

/* ── inline renderer: **bold** and `code` ─────────────────── */
function renderInline(text: string): React.ReactNode {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('`')  && part.endsWith('`'))  return <code key={i}>{part.slice(1, -1)}</code>;
    return part;
  });
}

/* ── block renderer ───────────────────────────────────────── */
function DocBlock({ block, idx }: { block: Block; idx: number }) {
  const inlineCls = '[&_strong]:text-[var(--local-text)] [&_strong]:font-semibold [&_code]:font-mono [&_code]:text-[0.84em] [&_code]:bg-[rgba(255,255,255,0.07)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-[3px] [&_code]:text-[var(--local-accent)]';

  switch (block.type) {
    case 'heading':
      return <h4 key={idx} className="font-display font-bold text-[1.05rem] text-[var(--local-text)] mt-8 mb-3 tracking-tight">{block.content}</h4>;

    case 'paragraph':
      return <p key={idx} className={`text-[0.93rem] text-[var(--local-text-muted)] leading-[1.9] mb-5 ${inlineCls}`}>{renderInline(block.content)}</p>;

    case 'code':
      return (
        <div key={idx} className="mb-6 rounded-[10px] overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {block.codeFilename && (
            <div className="bg-[#0d1828] px-4 py-2.5 flex items-center gap-2 border-b border-[rgba(255,255,255,0.05)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              <span className="ml-3 font-mono text-[0.65rem] text-[rgba(255,255,255,0.28)]">{block.codeFilename}</span>
            </div>
          )}
          <pre className="bg-[#020508] px-6 py-5 font-mono text-[0.78rem] leading-[1.9] overflow-x-auto text-[#cbd5e1] m-0 whitespace-pre">
            <code>{block.content}</code>
          </pre>
        </div>
      );

    case 'list':
      return (
        <ul key={idx} className="mb-5 flex flex-col gap-2.5">
          {(block.items ?? []).map((item, i) => (
            <li key={item.id ?? i} className={`flex items-start gap-3 text-[0.93rem] text-[var(--local-text-muted)] leading-[1.8] ${inlineCls}`}>
              <span className="font-mono text-[var(--local-primary)] text-[0.72rem] flex-shrink-0 mt-[5px]">→</span>
              <span>{renderInline(item.text)}</span>
            </li>
          ))}
        </ul>
      );

    case 'table':
      return (
        <div key={idx} className="mb-6 overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.06)]">
          <table className="w-full text-[0.88rem]">
            <thead>
              <tr className="bg-[rgba(59,130,246,0.06)] border-b border-[rgba(255,255,255,0.06)]">
                <th className="px-5 py-3 text-left font-mono text-[0.66rem] uppercase tracking-widest text-[var(--local-accent)] w-[200px]">Cosa</th>
                <th className="px-5 py-3 text-left font-mono text-[0.66rem] uppercase tracking-widest text-[var(--local-accent)]">Azione</th>
              </tr>
            </thead>
            <tbody>
              {(block.rows ?? []).map((row, i) => (
                <tr key={row.id ?? i} className="border-b border-[rgba(255,255,255,0.04)] last:border-0 hover:bg-[rgba(59,130,246,0.025)] transition-colors">
                  <td className={`px-5 py-4 text-[var(--local-text)] font-semibold align-top text-[0.88rem] ${inlineCls}`}>
                    {renderInline(row.col1)}
                  </td>
                  <td className={`px-5 py-4 text-[var(--local-text-muted)] align-top leading-[1.75] text-[0.88rem] ${inlineCls}`}>
                    {renderInline(row.col2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout':
      return (
        <div key={idx} className={`mb-5 rounded-[10px] border border-[rgba(59,130,246,0.22)] bg-[rgba(59,130,246,0.05)] px-5 py-4 ${inlineCls}`}>
          <div className="flex items-start gap-3">
            <span className="text-[var(--local-accent)] font-mono text-[0.9rem] flex-shrink-0 mt-0.5 leading-none">ℹ</span>
            <p className="text-[0.90rem] text-[var(--local-text-muted)] leading-[1.8] m-0">{renderInline(block.content)}</p>
          </div>
        </div>
      );

    case 'note':
      return (
        <div key={idx} className={`mb-5 rounded-[10px] border border-[rgba(239,68,68,0.20)] bg-[rgba(239,68,68,0.04)] px-5 py-4 ${inlineCls}`}>
          <div className="flex items-start gap-3">
            <span className="text-[#f87171] font-mono text-[0.9rem] flex-shrink-0 mt-0.5 leading-none">⚠</span>
            <p className="text-[0.90rem] text-[var(--local-text-muted)] leading-[1.8] m-0">{renderInline(block.content)}</p>
          </div>
        </div>
      );

    default: return null;
  }
}

/* ── main component ───────────────────────────────────────── */
export const DocsLayout: React.FC<{ data: DocsLayoutData; settings?: DocsLayoutSettings }> = ({ data }) => {
  const [activeAnchor, setActiveAnchor] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  // flat list of all anchors in order
  const allAnchors = data.groups.flatMap((g) => [
    { anchor: g.anchor, level: 'group' as const,   label: g.label },
    ...(g.sections ?? []).map((s) => ({ anchor: s.anchor, level: 'section' as const, label: s.title, parent: g.anchor })),
  ]);

  useEffect(() => {
    const targets = allAnchors
      .map((a) => document.getElementById(a.anchor))
      .filter(Boolean) as HTMLElement[];
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const top = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveAnchor((top.target as HTMLElement).id);
      },
      { rootMargin: '-64px 0px -55% 0px', threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [data.groups]);

  const scrollTo = (anchor: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
      className="relative z-0 min-h-screen bg-[var(--local-bg)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.15)] to-transparent" />

      {/* ── Page hero ──────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-8 pt-28 pb-12">
        <div
          className="inline-flex items-center gap-2 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.18)] px-3.5 py-1 rounded-full font-mono text-[0.66rem] font-semibold text-[var(--local-accent)] mb-5 tracking-widest uppercase"
          data-jp-field="version"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
          {data.version ?? 'v1.2'}
        </div>
        <h1
          className="font-display font-black text-[clamp(2.2rem,4vw,3.5rem)] text-[var(--local-text)] leading-[1.05] tracking-tight mb-4"
          data-jp-field="pageTitle"
        >
          {data.pageTitle}
        </h1>
        {data.pageSubtitle && (
          <p
            className="text-[1.02rem] text-[var(--local-text-muted)] max-w-[680px] leading-[1.85]"
            data-jp-field="pageSubtitle"
          >
            {data.pageSubtitle}
          </p>
        )}
        <div className="mt-8 h-px bg-gradient-to-r from-[rgba(59,130,246,0.3)] via-[rgba(59,130,246,0.06)] to-transparent" />
      </div>

      {/* ── Sidebar + Content ──────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-8 pb-40 flex gap-14 items-start">

        {/* SIDEBAR */}
        <aside className="w-[216px] flex-shrink-0 sticky top-[80px] self-start">
          <nav className="flex flex-col">
            {data.groups.map((group) => {
              const groupActive = activeAnchor === group.anchor ||
                (group.sections ?? []).some((s) => s.anchor === activeAnchor);
              return (
                <div key={group.anchor} className="mb-0.5">
                  {/* Group */}
                  <a
                    href={`#${group.anchor}`}
                    onClick={scrollTo(group.anchor)}
                    className={`
                      flex items-center gap-2 px-3 py-2 rounded-[6px] font-display font-bold text-[0.80rem]
                      transition-all duration-150 no-underline
                      ${groupActive
                        ? 'text-[var(--local-text)] bg-[rgba(255,255,255,0.04)]'
                        : 'text-[var(--local-text-muted)] hover:text-[var(--local-text)] hover:bg-[rgba(255,255,255,0.03)]'}
                      ${activeAnchor === group.anchor ? 'border-l-2 border-[var(--local-primary)] pl-[10px] text-[var(--local-accent)]' : ''}
                    `}
                  >
                    {group.label}
                  </a>
                  {/* Sub-sections */}
                  <div className={`overflow-hidden transition-all duration-200 ${groupActive ? 'max-h-96' : 'max-h-0'}`}>
                    {(group.sections ?? []).map((s) => (
                      <a
                        key={s.anchor}
                        href={`#${s.anchor}`}
                        onClick={scrollTo(s.anchor)}
                        className={`
                          flex items-center gap-2.5 pl-[22px] pr-3 py-1.5 rounded-[5px]
                          font-sans text-[0.76rem] transition-all duration-120 no-underline ml-0.5
                          ${activeAnchor === s.anchor
                            ? 'text-[var(--local-accent)] font-semibold bg-[rgba(59,130,246,0.07)]'
                            : 'text-[var(--local-text-muted)] hover:text-[var(--local-text)] hover:bg-[rgba(255,255,255,0.025)]'}
                        `}
                      >
                        <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 transition-colors ${activeAnchor === s.anchor ? 'bg-[var(--local-accent)]' : 'bg-[rgba(255,255,255,0.12)]'}`} />
                        {s.title}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Divider + back to top */}
          <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.05)]">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--local-text-muted)] hover:text-[var(--local-accent)] transition-colors px-3"
            >
              ↑ Back to top
            </button>
          </div>
        </aside>

        {/* CONTENT */}
        <div ref={contentRef} className="flex-1 min-w-0 pt-2">
          {data.groups.map((group, gi) => (
            <div key={group.anchor} className={gi > 0 ? 'mt-20' : ''}>

              {/* Group header */}
              <div id={group.anchor} className="scroll-mt-[88px] flex items-center gap-3 mb-2">
                <div className="w-7 h-7 rounded-[7px] bg-[rgba(59,130,246,0.12)] border border-[rgba(59,130,246,0.18)] flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-[var(--local-accent)] text-[0.66rem] font-bold">{gi + 1}</span>
                </div>
                <h2
                  className="font-display font-black text-[1.55rem] text-[var(--local-text)] tracking-tight"
                  data-jp-item-id={group.id ?? `g-${gi}`}
                  data-jp-item-field="groups"
                >
                  {group.label}
                </h2>
              </div>
              <div className="h-px bg-[rgba(255,255,255,0.05)] mb-10 ml-10" />

              {/* Sections */}
              {(group.sections ?? []).map((section, si) => (
                <div
                  key={section.anchor}
                  id={section.anchor}
                  className="scroll-mt-[88px] mb-14"
                  data-jp-item-id={section.id ?? `s-${gi}-${si}`}
                  data-jp-item-field="sections"
                >
                  {/* Section title */}
                  <div className="flex items-center gap-2.5 mb-6">
                    {section.tag && (
                      <span className="font-mono text-[0.60rem] uppercase tracking-widest text-[var(--local-accent)] bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.15)] px-2 py-0.5 rounded-[4px] flex-shrink-0">
                        {section.tag}
                      </span>
                    )}
                    <h3
                      className="font-display font-bold text-[1.2rem] text-[var(--local-text)] leading-tight tracking-tight"
                      data-jp-field="title"
                    >
                      {section.title}
                    </h3>
                  </div>

                  {/* Blocks */}
                  {(section.blocks ?? []).map((block, bi) => (
                    <DocBlock key={block.id ?? bi} block={block} idx={bi} />
                  ))}

                  {/* Section divider */}
                  {si < (group.sections ?? []).length - 1 && (
                    <div className="mt-12 h-px bg-[rgba(255,255,255,0.035)]" />
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* EOF marker */}
          <div className="mt-16 flex items-center gap-4 opacity-30">
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
            <span className="font-mono text-[0.60rem] uppercase tracking-widest text-[var(--local-text-muted)]">End of document</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
          </div>
        </div>

      </div>
    </section>
  );
};
