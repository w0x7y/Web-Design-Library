import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-bento-tiles",
  name: "Hero — Bento tiles",
  category: "hero",
  tags: ["bento", "media", "compact"],
  description: "A five-tile opening with a large headline tile, two media regions, a metric and a dark callout. Use it to introduce several kinds of evidence together.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────┐  ┌──────────────────┐ │
│ │Eyebrow                             │  │      Image       │ │
│ │                                    │  └──────────────────┘ │
│ │Headline for the main outcome       │                       │
│ │Supporting lede                     │  ┌──────────────────┐ │
│ │[Primary action] [Secondary]        │  │98%               │ │
│ │                                    │  │Metric and body   │ │
│ └────────────────────────────────────┘  └──────────────────┘ │
│ ┌────────────────────────────────────┐  ┌──────────────────┐ │
│ │               Image                │  │Callout line      │ │
│ │                                    │  │[Read more]       │ │
│ └────────────────────────────────────┘  └──────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. A grid uses 16px gaps and rounded-lg tiles with neutral-200 borders. At 1024px three equal columns place the headline across two columns and two rows, with 32px padding and bottom-aligned main copy; a 4:3 media and a 24px-padded metric stack in column three. The last row contains a two-column 21:9 media and a neutral-900 callout with 24px padding.",
    hierarchy: "The display headline is 36px, 48px at 640px and 60px at 1024px, semibold with tracking-tight and balanced wrapping. The headline tile reads first, then media and a 36px figure, then the wide image and a dark callout. Slots: eyebrow 6 words, title 10, lede 25, metric label 5, metric body 18, callout 12 and link 3. Media glyphs are decorative.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700; secondary hover changes white to neutral-50. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The white callout link underlines and changes to neutral-300 on hover, with a white 2px focus outline. All tiles are static.",
    responsive: "Below 640px tiles stack in source order and both media regions are 4:3. From 640px the grid has two columns, with headline, wide media and dark callout spanning both, and the small media paired with the metric. From 1024px it becomes three columns with the headline spanning two rows; wide media becomes 21:9. Display type follows 36px, 48px and 60px.",
    usage: "Use for an opening with several complementary proof slots. Choose hero-centered-media when one screenshot is enough. Variations: replace the metric with a quote, use video in the wide tile, or remove the dark callout for four tiles.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
