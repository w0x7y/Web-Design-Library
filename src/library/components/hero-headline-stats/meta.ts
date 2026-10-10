import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-headline-stats",
  name: "Hero — Headline with stats row",
  category: "hero",
  tags: ["asymmetric", "numbers", "grid"],
  description: "An asymmetric opening with a supporting note and four figures below a divider. Use it when measured results reinforce the main claim.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Eyebrow                                 │ Supporting note    │
│ Headline for the main outcome           │ More context       │
│ Supporting lede                         │ [Read more]        │
│ [Primary action] [Secondary]                                 │
│                                                              │
│ ──────────────────────────────────────────────────────────── │
│ 1,284           98%            24h            32             │
│ Audience        Outcome        Response       Coverage       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. A 12-column intro at 1024px puts the main copy in an 8-column span and a bottom-aligned supporting note in columns 10–12. The note has a 1px left border and 24px left padding. After 64px a top divider and 32px padding introduce four equal metric columns with 32px gaps.",
    hierarchy: "The display headline is 36px, 48px at 640px and 60px at 1024px, semibold with tracking-tight and balanced wrapping. Read eyebrow, h1, 18px lede, two actions, a 16px note and text link, then four 36px semibold figures and 14px labels. Slots: title 10 words, lede 25, note 35 total, link 3, each metric label 4, figures 6 characters.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700; secondary hover changes white to neutral-50. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The note link changes neutral-900 to neutral-600 on hover. Metrics are static; no selected or disabled state.",
    responsive: "Below 1024px the note follows the action row after 40px and the metrics have two columns. At 1024px the intro becomes a 12-column grid and metrics become four columns. The title steps at 640px and 1024px; section padding at 640px.",
    usage: "Use when a few measurable outcomes build confidence. Choose hero-media-band when imagery and caption facts carry the message. Variations: use two metrics, replace the side note with a quotation, or link each figure to its methodology.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
