import React from 'react';
import { resolveAssetUrl, useConfig } from '@jsonpages/core';
import type { ImageBreakData, ImageBreakSettings } from './types';

export const ImageBreak: React.FC<{ data: ImageBreakData; settings?: ImageBreakSettings }> = ({ data }) => {
  const { tenantId = 'default' } = useConfig();
  const imageUrl = data.image?.url ? resolveAssetUrl(data.image.url, tenantId) : '';

  return (
    <section
      style={{
        '--local-bg': 'var(--background)',
        '--local-text': 'var(--foreground)',
        '--local-text-muted': 'var(--muted-foreground)',
      } as React.CSSProperties}
      className="relative z-0 bg-[var(--local-bg)]"
    >
      {imageUrl ? (
        <>
          <div className="relative w-full aspect-[21/9] min-h-[200px]">
            <img
              src={imageUrl}
              alt={data.image?.alt ?? ''}
              className="w-full h-full object-cover"
              data-jp-field="image"
            />
            {data.caption && (
              <div
                className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm px-6 py-4"
                data-jp-field="caption"
              >
                <p className="text-sm text-zinc-300 italic">{data.caption}</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-[var(--local-text-muted)]">
          <span className="text-sm">Nessuna immagine</span>
          <span className="text-xs mt-1">Seleziona la section e usa Image Picker nell’Inspector</span>
        </div>
      )}
    </section>
  );
};
