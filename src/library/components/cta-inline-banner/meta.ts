import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-inline-banner",
  name: "Call to action — Inline banner",
  category: "cta",
  tags: ["row", "compact"],
  description: "A dark inset banner with a headline and lede beside an action pair. Use it as a compact callout between page sections.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────────┐ │
│ │Heading for the next step   [Primary] [Secondary]         │ │
│ │Supporting lede                                           │ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. A rounded-lg neutral-900 panel uses 32px horizontal and 40px vertical padding, increasing horizontal padding to 48px at 1024px. At 1024px a flex row justifies copy and actions with a 32px gap. The copy has a 30px title and 16px neutral-300 lede separated by 12px; the actions have 12px gaps.",
    hierarchy: "The white 30px semibold h2 leads, followed by a one-sentence 16px lede and two actions. Slots: title 6 words, lede 18, actions 3 each. The headline stays text-3xl at all widths to keep the banner compact.",
    states: "Actions are 44px high with 20px side padding and rounded-md radii. The white primary fills neutral-200 on hover; the white outlined secondary fills white/10. Both use 150ms transitions and 2px white focus-visible outlines offset 2px.",
    responsive: "Below 1024px copy and actions stack with 32px between them. Below 640px actions stack full width. At 640px actions form a left-aligned wrapping row. At 1024px panel content becomes a justified row and side padding grows to 48px.",
    usage: "Use between sections when the decision needs little explanation. Choose cta-centered-actions for a larger final message. Variations: use one action, add a deadline in the lede, or replace the secondary action with a text link.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
