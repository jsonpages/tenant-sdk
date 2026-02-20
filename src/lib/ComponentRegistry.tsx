import React from 'react';
import { Header }           from '@/components/header';
import { Footer }           from '@/components/footer';
import { Hero }             from '@/components/hero';
import { FeatureGrid }      from '@/components/feature-grid';
import { CodeBlock }        from '@/components/code-block';
import { ProblemStatement } from '@/components/problem-statement';
import { PillarsGrid }      from '@/components/pillars-grid';
import { ArchLayers }       from '@/components/arch-layers';
import { ProductTriad }     from '@/components/product-triad';
import { PaSection }        from '@/components/pa-section';
import { Philosophy }       from '@/components/philosophy';
import { CtaBanner }        from '@/components/cta-banner';
import { ImageBreak }       from '@/components/image-break';
import { CmsIce }           from '@/components/cms-ice';
import { GitSection }       from '@/components/git-section';
import { Devex }            from '@/components/devex';
import { CliSection }       from '@/components/cli-section';
import { DocsLayout }       from '@/components/docs-layout';

import type { SectionType }              from '@jsonpages/core';
import type { SectionComponentPropsMap } from '@/types';

export const ComponentRegistry: {
  [K in SectionType]: React.FC<SectionComponentPropsMap[K]>;
} = {
  'header':            Header,
  'footer':            Footer,
  'hero':              Hero,
  'feature-grid':      FeatureGrid,
  'code-block':        CodeBlock,
  'problem-statement': ProblemStatement,
  'pillars-grid':      PillarsGrid,
  'arch-layers':       ArchLayers,
  'product-triad':     ProductTriad,
  'pa-section':        PaSection,
  'philosophy':        Philosophy,
  'cta-banner':        CtaBanner,
  'image-break':       ImageBreak,
  'cms-ice':           CmsIce,
  'git-section':       GitSection,
  'devex':             Devex,
  'cli-section':       CliSection,
  'docs-layout':       DocsLayout,
};
