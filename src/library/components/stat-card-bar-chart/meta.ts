import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-bar-chart',
  name: 'Stat cards — Figure with bar chart',
  category: 'stat-card',
  tags: ["stacked","numbers"],
  description: "A figure and comparison sit above six bottom-aligned monthly bars, followed by a chart note. Use it when the shape of a recent trend matters alongside its current value.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Metric label                Last 6 months    │
│ 48,290                                       │
│ ^ Up 12.4% vs previous period                │
│                             ┌───┐            │
│           ┌───┐       ┌───┐  │   │           │
│ ┌───┐┌───┐│   │┌───┐  │   │  │   │           │
│ Jan  Feb  Mar  Apr    May    Jun             │
│ ────────────────────────────────────────     │
│ Chart note                                   │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px w-72 card, 320px sm:w-80 from 640px, with 24px p-6 padding, an 8px radius and a 1px border. The metric label and period share a space-between row; the figure sits 12px below. The comparison follows by 8px. A six-column grid starts 24px later with 8px gaps, 80px bottom-aligned bar frames, and month labels 8px below. A note follows a divider with 20px top margin and 12px padding.",
    hierarchy: "Read the 30px semibold tabular total, then the 14px label, 12px period and directional comparison. Six bars have heights 32, 40, 56, 48, 64 and 80px; earlier bars are neutral-200 and the last is neutral-900. The chart is aria-hidden, with all six figures in a screen-reader figcaption. Slots: label up to 3 words, total up to 7 characters, comparison up to 7 words, note up to 6 words.",
    states: "The card has no controls or hover, focus, open, selected or disabled states. The comparison includes both an arrow and Up. The decorative bars do not carry information alone; the textual total and figcaption give the values.",
    responsive: "The width steps from 288px to 320px at 640px. All six columns stay equal at both widths, while the 80px chart height, gaps, card padding and typography remain fixed.",
    usage: "Use to show a recent multi-period trend alongside its current figure. Pick stat-card-figure-delta for a single comparison, or stat-card-progress-target for progress against a goal. Variations: show six weeks, use counts instead of totals, or emphasize the previous period instead of the latest.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

