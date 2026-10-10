import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-overlay-media",
  name: "Call to action — Detail card over media",
  category: "cta",
  tags: ["layered", "media", "asymmetric"],
  description: "A full-width media backdrop with left-aligned invitation copy and a white details card. Use it when readers need practical details before choosing an action.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────────┐ │
│ │                          Image                           │ │
│ │                                                          │ │
│ │Heading for the next step         ┌──────────────────────┐│ │
│ │Supporting lede                   │Label            Value││ │
│ │                                  │Label            Value││ │
│ │                                  │Label            Value││ │
│ │                                  │[Primary action]      ││ │
│ │                                  └──────────────────────┘│ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative full-bleed section layers an inset-0 media placeholder, neutral-950/70 scrim and a standard 1152px padded container. At 1024px a 12-column grid with 48px gap aligns white copy across seven columns and a white rounded-lg bordered card across five columns to the bottom. The card has 24px padding, three dl rows with 16px vertical padding and dividers, and a full-width action 24px lower.",
    hierarchy: "The left h2 is 36px, rising to 48px at 640px, with an 18px neutral-300 lede after 24px. The card uses 14px neutral-600 terms and neutral-900 medium values. Slots: heading 8 words, lede 25, terms 3, values 4, action 3. Copy leads into details and action.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. Background and scrim ignore pointer input. The white detail card is static.",
    responsive: "Below 1024px the card follows the copy with a 48px gap and full available width. At 1024px copy and card use 7/5 column spans. At 640px vertical padding increases from 64px to 96px and the heading grows from 36px to 48px. Detail values wrap within their row.",
    usage: "Use for a visual invitation with a date, duration or cost to confirm. Choose hero-overlay-media for centered opening copy without a details card. Variations: replace the three facts with availability, use a video backdrop, or add a short card title.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
