import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-release-health',
  name: 'Release health metric',
  category: 'stat-card',
  tags: ['corporate', 'light'],
  description:
    'A build reliability card with a circular success graphic, recent run counts and a report link. Use it in deployment dashboards and engineering summaries.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px metric card, 320px at 640px, with 20px padding. A title and status badge sit above a 96px circular graph beside comparison text. A two-column definition list shows passed and failed builds under a top rule, followed by a report link.',
    style:
      'White surface, slate-200 border and 16px corners. Slate-900 primary text, slate-600 supporting copy, a #059669 success ring over a #e2e8f0 track and emerald-800 positive trend. Title is 14px semibold with 20px line height. The 10px medium status pill uses emerald-50 with 8px horizontal, 4px vertical padding. The SVG has a 100×100 viewBox, 8px strokes and 42px-radius circles, rotated -90deg; its success stroke uses a 260/264 dash pattern and round cap. The graph center contains a 20px semibold tabular value with a 12px percent sign, making the decorative SVG redundant for screen readers. Comparison copy is 12px with 16px line height, 8px before the semibold change and 4px before an 11px slate-500 period. Count labels are 12px slate-500; their 20px semibold values have 4px top margins. The report link is 12px medium with a 14px arrow and 8px gap.',
    states:
      'The report link is named "View build report: Release health" for assistive technology, changes from blue-700 to blue-900 on hover, with a 2px blue-700 keyboard outline offset 2px. Status and trend are expressed in text as well as color. There is no animation.',
    responsive:
      'Card width is 288px below 640px and 320px above. The ring remains 96px, comparison copy wraps alongside it and the two totals stay in equal columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
