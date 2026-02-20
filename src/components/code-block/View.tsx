import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/lib/IconResolver';
import type { CodeBlockData, CodeBlockSettings } from './types';

export const CodeBlock: React.FC<{ data: CodeBlockData; settings?: CodeBlockSettings }> = ({ data, settings }) => {
  const showLineNumbers = settings?.showLineNumbers ?? true;

  return (
    <section
      style={{
        '--local-surface': 'var(--card)',
        '--local-text-muted': 'var(--muted-foreground)',
        '--local-bg': 'var(--background)',
        '--local-border': 'var(--border)',
        '--local-text': 'var(--foreground)',
        '--local-accent': 'var(--primary)',
        '--local-radius-lg': 'var(--radius)',
      } as React.CSSProperties}
      className="py-16 bg-[var(--local-surface)]"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {data.label && (
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--local-text-muted)] mb-4" data-jp-field="label">
            <Icon name="terminal" size={14} />
            <span>{data.label}</span>
          </div>
        )}
        <div className="rounded-[var(--local-radius-lg)] bg-[var(--local-bg)] border border-[var(--local-border)] overflow-hidden">
          <div className="p-6 font-mono text-sm overflow-x-auto">
            {data.lines.map((line, idx) => (
              <div key={idx} className="flex items-start gap-4 py-1" data-jp-item-id={(line as { id?: string }).id ?? `legacy-${idx}`} data-jp-item-field="lines">
                {showLineNumbers && (
                  <span className="select-none w-6 text-right text-[var(--local-text-muted)]/50">
                    {idx + 1}
                  </span>
                )}
                <span
                  className={cn(
                    line.isComment
                      ? 'text-[var(--local-text-muted)]/60'
                      : 'text-[var(--local-text)]'
                  )}
                >
                  {!line.isComment && (
                    <span className="text-[var(--local-accent)] mr-2">$</span>
                  )}
                  {line.content}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
