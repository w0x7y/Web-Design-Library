import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-icon-inline',
  name: 'Stat cards — Icon, label and value in one row',
  category: 'stat-card',
  tags: ["row","icons","numbers","compact"],
  description: "An icon tile, a label and figure, and a directional change badge share one compact row. Use it for stacked dashboard summaries or a row of short metrics.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ ┌──────┐  Metric label       [^ Up 4.1%]     │
│ │ Icon │  1,284                              │
│ └──────┘                                     │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A flex row in a 288px-wide w-72 card, 352px sm:w-[22rem] from 640px. The card has 24px p-6 padding, a 1px neutral-200 border and an 8px rounded-lg radius. A fixed 40px icon tile, flexible min-w-0 definition list and nonshrinking change badge are vertically centred with 12px gap-3 gaps.",
    hierarchy: "The 24px semibold tabular value leads below a 14px medium label with a 4px gap. The 40px neutral-100 rounded-md icon tile contains a decorative 20px stroke glyph. A 12px outlined pill reads Up 4.1% beside an arrow. Slots: label up to 3 words, value up to 6 characters, delta up to 8 characters.",
    states: "The card is static with no hover, focus, open, selected or disabled controls. The icon is aria-hidden. The change uses both an up arrow and the word Up, so direction is readable without colour.",
    responsive: "The three regions stay in one row at every width. Only the root width changes at 640px, from 288px to 352px. The middle label truncates instead of wrapping; the icon and badge keep their widths.",
    usage: "Use for a compact metric in a dashboard stack or row. Pick stat-card-figure-delta when the metric needs a report link, or stat-card-joined-trio when three related metrics share a panel. Variations: swap the glyph to match the metric, show a negative delta with Down, or use a currency value.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

