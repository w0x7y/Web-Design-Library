import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-revenue-ledger',
  name: 'Monthly revenue ledger',
  category: 'stat-card',
  tags: ['editorial', 'light'],
  description:
    'A paper-like monthly revenue card with a six-month bar comparison and net growth. Use it in small business dashboards and financial summaries.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px ledger card with 20px padding and a 2px top rule, widening to 320px from 640px. An uppercase title and month sit above a 36px amount and growth sentence. A six-column, 80px-tall bar plot follows with month labels and a ruled accounting note.',
    style:
      'Warm #f7f4ec surface, stone-900 rule and current-month bar, stone-300 historical bars. Use system serif for the amount and monospace for report labels. Growth is green-800 semibold; supporting text stone-600. Header labels are 10px monospace with 0.05em uppercase tracking. The amount is 36px serif with 40px line height, -0.025em tracking and tabular figures. Comparison text is 12px with 16px line height. Chart columns have 12px gaps and May through August bars are 32, 44, 40 and 56px tall. September is 88.3% of the 80px October bar, matching $16,260 relative to $18,420. Month labels are 9px monospace with an 8px top margin; the 11px accounting note has a stone-300 top rule and 12px top padding.',
    states:
      'This is a static metric card without controls, hover effects or animation. The visual chart has a screen-reader summary describing its trend and the total.',
    responsive:
      'Width is 288px below 640px and 320px above. The six bars share equal columns at all widths and the report note wraps without truncation.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
