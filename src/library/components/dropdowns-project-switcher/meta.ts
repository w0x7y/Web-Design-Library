import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-project-switcher',
  name: 'Dropdowns — Project switcher',
  category: 'dropdowns',
  tags: ['minimal', 'light'],
  description:
    'A native disclosure workspace switcher with project identities, membership details and a create-workspace action.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white details element with 16px padding and 16px radius. The 48px summary pairs a 36px monogram tile with workspace text; the open panel contains two 52px workspace links and a 36px create button.',
    style:
      'Use slate-200 outlines, slate-900 text and indigo-100 monogram tiles. The current workspace has a slate-50 background and written Current status; the second uses an amber tile.',
    states:
      'The native summary toggles with Enter, Space or click and rotates its chevron using group-open. Links and create action hover in slate-100. Every control has a 2px slate-900 focus outline with 2px offset; reduced motion removes chevron transition.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
