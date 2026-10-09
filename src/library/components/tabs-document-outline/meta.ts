import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-document-outline',
  name: 'Tabs — Document outline',
  category: 'tabs',
  tags: ['corporate', 'light'],
  description:
    'A vertical native radio navigation for a project brief, switching between overview, milestones and owner details.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white panel with 16px padding. A title precedes a two-column area with a 72px vertical radio rail, a 12px gap and a flexible text panel.',
    style:
      'Use a slate-200 border, 12px outer radius and slate-50 rail. Active labels have blue-50 backgrounds and blue-800 text; a 14px title and 11px panel body keep it compact.',
    states:
      'Native radio selection switches the visible document section with group-has selectors. Arrow keys navigate choices. Focus adds a 2px slate-900 label outline with 2px offset; hover uses slate-100.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
