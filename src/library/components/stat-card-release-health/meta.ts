import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-release-health',
  name: 'Release health metric',
  category: 'stat-card',
  tags: ['corporate', 'light'],
  description:
    'A build reliability card with a circular success graphic, recent run counts and a report link. Use it in deployment dashboards and engineering summaries.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px metric card, 320px at 640px, with 20px padding. A title and status badge sit above a 96px circular graph beside comparison text. A two-column definition list shows passed and failed builds under a top rule, followed by a report link.',
    style:
      'White surface, slate-200 border and 16px corners. Slate-900 primary text, slate-600 supporting copy, emerald-600 graph and emerald-800 positive trend. The graph center contains the numeric value, making the decorative SVG redundant for screen readers.',
    states:
      'The report link changes from blue-700 to blue-900 on hover, with a 2px blue-700 keyboard outline offset 2px. Status and trend are expressed in text as well as color. There is no animation.',
    responsive:
      'Card width is 288px below 640px and 320px above. The ring remains 96px, comparison copy wraps alongside it and the two totals stay in equal columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
