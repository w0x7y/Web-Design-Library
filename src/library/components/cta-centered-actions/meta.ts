import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-centered-actions",
  name: "Call to action — Centred with actions",
  category: "cta",
  tags: ["centered", "stacked", "spacious"],
  description: "A centred next-step message on an alternate surface with two actions and a reassurance line. Use it to close a page with a clear decision.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                  Heading for the next step                   │
│                       Supporting lede                        │
│                                                              │
│                 [Primary action] [Secondary]                 │
│                       Reassurance line                       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "An alternate neutral-50 section uses the standard 1152px container with 24px side padding and 64px vertical padding, 96px from 640px. A centered max-w-2xl 672px column has 16px to its lede, 32px to actions with 12px gaps, and 16px to a meta line.",
    hierarchy: "The section headline is 30px, increasing to 36px at 640px, semibold with tracking-tight and balanced wrapping. Read the h2, 18px lede, action pair and 14px reassurance. Slots: headline 8 words, lede 25, actions 3 each, reassurance 8. There is no opening eyebrow or large media region.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700; secondary hover changes white to neutral-50. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The reassurance line is static.",
    responsive: "Below 640px actions stack full width. From 640px they form a centered wrapping row, vertical padding increases to 96px and the heading increases to 36px.",
    usage: "Use for a final next step after supporting content. Choose cta-inline-banner for a compact horizontal callout. Variations: use one action, replace the reassurance with a price, or add a short deadline line.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
