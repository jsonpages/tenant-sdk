import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { MenuItem } from '@jsonpages/core';
import type { HeaderData, HeaderSettings } from './types';

export const Header: React.FC<{
  data: HeaderData;
  settings?: HeaderSettings;
  menu: MenuItem[];
}> = ({ data, menu }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        '--local-bg': 'rgba(6,13,27,0.92)',
        '--local-text': 'var(--foreground)',
        '--local-text-muted': 'var(--muted-foreground)',
        '--local-primary': 'var(--primary)',
        '--local-accent': 'var(--color-accent, #60a5fa)',
        '--local-border': 'rgba(59,130,246,0.08)',
      } as React.CSSProperties}
      className={cn(
        'w-full py-4 transition-all duration-300 z-0',
        scrolled
          ? 'bg-[var(--local-bg)] backdrop-blur-[20px] border-b border-[var(--local-border)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        <a
          href="/"
          className="flex items-center gap-2.5 no-underline font-bold text-xl tracking-tight text-[var(--local-text)]"
        >
          {data.logoIconText && (
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[var(--local-primary)] to-[var(--local-accent)] flex items-center justify-center font-mono text-[0.8rem] font-bold text-[var(--background)]" data-jp-field="logoIconText">
              {data.logoIconText}
            </div>
          )}
          <span data-jp-field="logoText">
            {data.logoText}
            {data.logoHighlight && (
              <span className="text-[var(--local-accent)]" data-jp-field="logoHighlight">{data.logoHighlight}</span>
            )}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {menu.map((item, idx) => (
            <a
              key={(item as { id?: string }).id ?? idx}
              href={item.href}
              data-jp-item-id={(item as { id?: string }).id ?? `legacy-${idx}`}
              data-jp-item-field="links"
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={cn(
                'no-underline text-sm font-medium transition-colors',
                item.isCta
                  ? 'bg-[var(--local-primary)] text-white px-5 py-2 rounded-lg font-semibold hover:brightness-110 hover:-translate-y-px'
                  : 'text-[var(--local-text-muted)] hover:text-[var(--local-text)]'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-[var(--local-text-muted)] hover:text-[var(--local-text)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-[var(--local-border)] bg-[var(--local-bg)] backdrop-blur-[20px]">
          <div className="max-w-[1200px] mx-auto px-8 py-4 flex flex-col gap-4">
            {menu.map((item, idx) => (
              <a
                key={(item as { id?: string }).id ?? idx}
                href={item.href}
                className="text-base font-medium text-[var(--local-text-muted)] hover:text-[var(--local-text)] transition-colors py-2 no-underline"
                onClick={() => setMobileMenuOpen(false)}
                data-jp-item-id={(item as { id?: string }).id ?? `legacy-${idx}`}
                data-jp-item-field="links"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
