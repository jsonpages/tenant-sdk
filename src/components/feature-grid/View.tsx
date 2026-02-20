import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/lib/IconResolver';
import type { FeatureGridData, FeatureGridSettings } from './types';

const columnsMap: Record<2 | 3 | 4, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

export const FeatureGrid: React.FC<{ data: FeatureGridData; settings?: FeatureGridSettings }> = ({ data, settings }) => {
  const colKey = settings?.columns ?? 3;
  const cols = (colKey === 2 || colKey === 3 || colKey === 4) ? columnsMap[colKey] : columnsMap[3];
  const isBordered = settings?.cardStyle === 'bordered';

  const localStyles = {
    '--local-bg': 'var(--background)',
    '--local-text': 'var(--foreground)',
    '--local-text-muted': 'var(--muted-foreground)',
    '--local-surface': 'var(--card)',
    '--local-surface-alt': 'var(--muted)',
    '--local-border': 'var(--border)',
    '--local-radius-lg': 'var(--radius)',
    '--local-radius-md': 'calc(var(--radius) - 2px)',
  } as React.CSSProperties;

  return (
    <section style={localStyles} className="py-20 bg-[var(--local-bg)] relative z-0">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--local-text)] mb-16" data-jp-field="sectionTitle">
          {data.sectionTitle}
        </h2>
        <div className={cn('grid grid-cols-1 gap-6', cols)}>
          {data.cards.map((card, idx) => (
            <div
              key={card.id ?? idx}
              className={cn(
                'p-6 rounded-[var(--local-radius-lg)] bg-[var(--local-surface)]',
                isBordered && 'border border-[var(--local-border)]'
              )}
              data-jp-item-id={card.id ?? `legacy-${idx}`}
              data-jp-item-field="cards"
            >
              {card.icon && (
                <div className="w-10 h-10 rounded-[var(--local-radius-md)] bg-[var(--local-surface-alt)] flex items-center justify-center mb-4">
                  <Icon name={card.icon} size={20} className="text-[var(--local-text-muted)]" />
                </div>
              )}
              <h3 className="text-lg font-semibold text-[var(--local-text)] mb-2">
                {card.emoji && <span className="mr-2">{card.emoji}</span>}
                {card.title}
              </h3>
              <p className="text-sm text-[var(--local-text-muted)] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
