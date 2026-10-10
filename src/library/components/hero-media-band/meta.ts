import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-media-band",
  name: "Hero — Headline over wide media band",
  category: "hero",
  tags: ["asymmetric", "media", "spacious"],
  description: "A divided headline and action intro above a panoramic image and three caption facts. Use it when a wide visual needs its own uninterrupted region.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Headline for the main outcome       Supporting lede          │
│                                     [Primary] [Secondary]    │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │                          Image                           │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│ Fact label          │ Fact label         │ Fact label        │
│ Detail value        │ Detail value       │ Detail value      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. At 1024px a 12-column intro puts the h1 across seven columns and the lede/actions in columns 9–12 aligned to the bottom. A rounded-lg media placeholder follows after 48px. Three caption facts follow after 24px, separated by vertical neutral-200 borders and 24px left padding.",
    hierarchy: "The display headline is 36px, 48px at 640px and 60px at 1024px, semibold with tracking-tight and balanced wrapping. Read the title, 18px lede and two actions, then panoramic media and a three-fact dl. Each fact has a 14px muted label and 16px medium value. Slots: title 10 words, lede 25, actions 3, each label 3 and value 5.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700; secondary hover changes white to neutral-50. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The media and caption facts are static.",
    responsive: "Below 1024px the intro stacks with a 32px gap and media is 16:9. Below 640px media is 4:3 and facts stack with top borders and 16px vertical padding. At 640px facts form three columns with vertical separators. At 1024px media becomes 21:9 and the intro becomes a 12-column grid.",
    usage: "Use for a wide visual with concise contextual facts. Choose hero-split-image for a square visual beside the copy. Variations: use a video placeholder, show two caption facts, or place a short credit beneath the image.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
