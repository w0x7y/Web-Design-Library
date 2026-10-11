import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-split-image",
  name: "Call to action — Card with image",
  category: "cta",
  tags: ["split", "media"],
  description: "An inset panel with an edge-to-edge image on the left and action copy plus a detail footer on the right. Use it when an offer benefits from a visual and one extra decision detail.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────┬────────────────────────────────┐ │
│ │                         │Eyebrow                         │ │
│ │                         │Heading for the next step       │ │
│ │          Image          │Supporting lede                 │ │
│ │                         │[Primary] [Secondary]           │ │
│ │                         ├────────────────────────────────┤ │
│ │                         │Detail value     [Read more]    │ │
│ └─────────────────────────┴────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. A rounded-lg neutral-50 panel clips its two halves. At 1024px two equal columns place an unpadded, full-height media region left and a 48px-padded content region right. The copy uses 16px before title, 24px before lede and 32px before actions. A border-t meta row follows after 32px with 24px top padding and 16px gap.",
    hierarchy: "The section headline is 30px, increasing to 36px at 640px, semibold with tracking-tight and balanced wrapping. Read media, 14px eyebrow, h2, 18px lede, actions and the detail footer. Slots: eyebrow 5 words, title 8, lede 25, actions 3, detail 5, footer link 3. The footer has a 16px medium value and a 14px link.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700; secondary hover changes white to neutral-50. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The footer link changes neutral-900 to neutral-600 on hover. The media is static; focus rings remain inside the padded content region.",
    responsive: "Below 1024px the image sits above the copy, at 16:9 from 640px and 4:3 below it. The copy uses 24px padding below 1024px. At 1024px the media fills the left half without a fixed aspect and copy padding increases to 48px. Actions and footer wrap when needed.",
    usage: "Use for a visual offer with a price or practical footer detail. Choose hero-split-image for an opening with free-standing columns. Variations: replace the price with a date, use video media, or make the footer link a details link.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
