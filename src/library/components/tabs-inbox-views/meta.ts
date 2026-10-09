import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-inbox-views',
  name: 'Tabs — Inbox views',
  category: 'tabs',
  tags: ['minimal', 'light'],
  description:
    'A segmented radio filter for a shared inbox with separate message lists for all, unread and assigned views.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white inbox card with 16px padding. A header sits above three 36px radio tabs; each selected view reveals two 64px message rows.',
    style:
      'Use slate-200 borders, 16px radius and a violet-700 selected underline. Avatar initial tiles use violet-100 and sky-100. Subject text is 12px semibold; timestamps are 9px muted sans.',
    states:
      'Native radio selection switches the message list via group-has. Labels draw a 2px slate-900 focus outline and 2px offset. Hover uses violet-50, and checked tabs have a visible bottom border.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
