import React from 'react';
import type { PhilosophyData, PhilosophySettings } from './types';

export const Philosophy: React.FC<{ data: PhilosophyData; settings?: PhilosophySettings }> = ({ data }) => {
  const renderQuote = () => {
    if (!data.quoteHighlightWord) {
      return <>{data.quote}</>;
    }
    const parts = data.quote.split(data.quoteHighlightWord);
    return (
      <>
        {parts.map((part, idx) => (
          <React.Fragment key={idx}>
            {part}
            {idx < parts.length - 1 && (
              <em className="not-italic text-[var(--local-accent)]">
                {data.quoteHighlightWord}
              </em>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <section
      style={{
        '--local-bg': 'var(--background)',
        '--local-text': 'var(--foreground)',
        '--local-text-muted': 'var(--muted-foreground)',
        '--local-accent': 'var(--color-accent, #60a5fa)',
        '--local-primary': 'var(--primary)',
      } as React.CSSProperties}
      className="relative z-0 py-28 bg-[var(--local-bg)]"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[760px] mx-auto text-center">
          {data.label && (
            <div className="jp-section-label inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[var(--local-accent)] mb-4" data-jp-field="label">
              <span className="w-5 h-px bg-[var(--local-primary)]" />
              {data.label}
            </div>
          )}
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[var(--local-text)] leading-[1.15] tracking-tight mb-4" data-jp-field="title">
            {data.title}
          </h2>
          <blockquote className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--local-text)] font-bold leading-[1.35] my-8" data-jp-field="quote">
            &ldquo;{renderQuote()}&rdquo;
          </blockquote>
          {data.description && (
            <p className="text-[1.05rem] text-[var(--local-text-muted)] max-w-[560px] mx-auto leading-relaxed" data-jp-field="description">
              {data.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
