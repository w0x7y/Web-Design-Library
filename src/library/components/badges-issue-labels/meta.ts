import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-issue-labels',
  name: 'Badges — Issue labels',
  category: 'badges',
  tags: ['corporate', 'light'],
  description:
    'Priority, type and ownership labels for a product issue tracker, grouped by their practical use.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white card with 20px padding. A monospace 10px ticket identifier and 14px semibold summary precede three h3-labelled groups: priority options, type labels and owner teams. The first group has a 20px top margin; subsequent groups have 16px top margins. Wrapping lists sit 8px below their headings, with 6px label gaps and 8px team gaps.',
    style:
      'Use a slate-200 border, 12px radius, 10px uppercase section labels and 11px badge text. Priority badges pair red, amber and slate fills with written names; type labels are outlined, and team labels have 20px initial tiles with 4px radii. Use slate-900 primary text, slate-500 headings, red-800 on red-50 for Urgent, amber-900 on amber-50 for High and slate-700 on slate-100 for Normal. Type labels use violet-200/violet-800 and sky-200/sky-800 borders/text; teams use blue-100/blue-800 and emerald-100/emerald-800. No shadows.',
    states:
      'These badges are informational, with no hover or focus states. Priority is written in text as well as indicated by color; no animation is used.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
