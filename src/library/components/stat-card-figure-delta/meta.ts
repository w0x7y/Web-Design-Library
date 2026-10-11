import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-figure-delta',
  name: 'Stat cards — Figure with change and link',
  category: 'stat-card',
  tags: ["stacked","numbers","compact"],
  description: "A single metric above an explicit change badge and a report link in a divided footer. Use it for a dashboard figure that needs a comparison and a route to detail.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Metric label                                 │
│ $48,290                                      │
│ [^ Up 12.4%]  vs last period                 │
│ ────────────────────────────────────────     │
│ [View report]                         >      │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px-wide w-72 card, 320px sm:w-80 from 640px, with 24px p-6 padding, a 1px neutral-200 border and an 8px rounded-lg radius. A definition list holds the label and value with an 8px gap. The change row starts 12px below the value, with an 8px gap. A footer has a 20px top margin, hairline divider and 16px top padding.",
    hierarchy: "Read the 36px semibold, tracking-tight, tabular figure first, then the 14px medium metric label, 12px delta badge and comparison text. The footer link is 14px medium. Slots: label up to 3 words, figure up to 8 characters, change up to 10 characters, comparison up to 4 words, link up to 3 words.",
    states: "The report link changes from neutral-900 to neutral-600 on hover and has a 2px neutral-900 focus-visible outline offset 2px. The badge uses an arrow and the word Up to convey direction without colour. The figure and comparison are static; there are no open, selected or disabled states.",
    responsive: "Below 640px the card is 288px wide; at 640px it becomes 320px. Padding, typography and vertical rhythm stay unchanged. The delta and comparison row wraps if replacement text needs more room.",
    usage: "Use for a headline metric with a comparison and a detailed report. Pick stat-card-icon-inline for a compact dashboard row or stat-card-bar-chart for a trend over several periods. Variations: use a count instead of currency, show Down with a down arrow, or compare with the previous week.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

