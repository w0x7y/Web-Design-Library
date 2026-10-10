import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-detail-card",
  name: "Call to action — Event detail card",
  category: "cta",
  tags: ["asymmetric", "numbers"],
  description: "An invitation beside a dated detail card with price, availability and a full-width action. Use it when the date and remaining capacity shape the decision.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Eyebrow                         ┌──────────────────────────┐ │
│ Heading for the next step       │14  │ Item title          │ │
│ Supporting lede                 │MAR │ Time and place      │ │
│ Capacity meta                   ├──────────────────────────┤ │
│                                 │Price                  $29│ │
│                                 │Places left             12│ │
│                                 │[Primary action]          │ │
│                                 └──────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. At 1024px a 12-column grid with 48px gaps aligns a seven-column intro and five-column card vertically. The intro uses 16px, 24px and 24px gaps. The rounded-lg neutral-200 bordered card has 24px padding. Its header combines a 36px day and 14px month with a title group separated by a left border and 24px padding. A two-row dl follows after 24px and a full-width action after 24px.",
    hierarchy: "The section headline is 30px, increasing to 36px at 640px, semibold with tracking-tight and balanced wrapping. Read eyebrow, h2, max-w-md 448px 18px lede and 14px capacity note, then the date, 18px item title, 14px time, 14px details and action. Slots: eyebrow 5 words, heading 8, lede 25, capacity 8, item title 6, time 8, each term/value 3.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The date and capacity are static. The date uses a semantic time element.",
    responsive: "Below 1024px the card follows the intro with a 48px gap. Below 640px the date sits above the title, with a top divider and 16px top padding on the title group. At 640px the date and title form a row with a vertical divider. At 1024px the 7/5 grid begins.",
    usage: "Use for a scheduled invitation with limited places. Choose cta-overlay-media when a backdrop provides useful context. Variations: change the date to a deadline, replace places left with duration, or add a second date option in the card.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
