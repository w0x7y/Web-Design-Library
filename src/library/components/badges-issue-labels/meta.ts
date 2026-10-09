import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-issue-labels',
  name: 'Badges — Issue labels',
  category: 'badges',
  tags: ['corporate', 'light'],
  description:
    'Priority, type and ownership labels for a product issue tracker, grouped by their practical use.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white card with 20px padding. A ticket summary precedes three labelled sections of wrapping badges separated by 16px.',
    style:
      'Use a slate-200 border, 12px radius, 10px uppercase section labels and 11px badge text. Priority badges pair red, amber and slate fills with written names; type labels are outlined, and team labels have square initial tiles.',
    states:
      'These badges are informational, with no hover or focus states. Priority is written in text as well as indicated by color; no animation is used.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
