import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-progress-target',
  name: 'Stat cards — Progress toward a target',
  category: 'stat-card',
  tags: ["stacked","numbers"],
  description: "A current value shares a baseline with its target above a horizontal progress bar and remaining amount. Use it for a bounded goal with a clear total and deadline.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Metric label                  This month     │
│ 7,420 / 10,000 target                        │
│                                              │
│ ┌─────────────────────────────┬──────────┐   │
│ │            74.2%            │          │   │
│ └─────────────────────────────┴──────────┘   │
│ 0                                  10,000    │
│ ──────────────────────────────────────────   │
│ 2,580 to go             9 days left          │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px w-72 card, 320px sm:w-80 from 640px, with 24px p-6 padding, a 1px border and an 8px radius. A space-between header holds the label and period. The current figure and target share a baseline 16px below with an 8px gap. The progress bar starts 20px later, is 8px h-2 tall, and fills 74.2% of a rounded neutral-200 track. Scale labels sit 8px below. The footer has a 20px margin, divider and 16px top padding.",
    hierarchy: "The current figure is 30px semibold with tabular digits; the target is 12px neutral-500. The label is 14px medium and the period, scale and remainder are 12px. A labelled progressbar exposes minimum 0, maximum 10,000 and current value 7,420 with a spoken percentage. Slots: label up to 3 words, period up to 3, current and target up to 6 characters each, remainder and time up to 4 words each.",
    states: "The progress display is static and noninteractive. There are no hover, focus, open, selected or disabled states. The current and target figures remain available as text when the track and fill are repainted in forced colours.",
    responsive: "Only the root width changes at 640px, from 288px to 320px. The value and target remain on one baseline, the progress bar spans the available inner width, and the scale and footer stay in two-ended rows.",
    usage: "Use for a count approaching a fixed goal within a period. Pick stat-card-ring-gauge when a percentage needs comparison totals, or stat-card-bar-chart to show a trend. Variations: use a currency target, show a weekly deadline, or replace the countdown with the completion date.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

