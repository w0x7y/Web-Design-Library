import type { ComponentMeta } from '../../types'

export default {
  slug: "features-bento-grid",
  name: "Features — Bento grid",
  category: "features",
  tags: ["bento", "media", "icons"],
  description: "Unequal feature tiles combine one large media card, a metric, and three compact icon cards. Use it to give a leading capability more weight than supporting details.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Heading / Introduction                 [View details]      │
│                                                            │
│ ┌────────────────────────────────┐  ┌─────────────────┐    │
│ │ Leading capability / Body      │  │      1,284      │    │
│ │ ┌────────────────────────────┐ │  │ Metric label    │    │
│ │ │           Image            │ │  │ Supporting body │    │
│ │ └────────────────────────────┘ │  │                 │    │
│ └────────────────────────────────┘  └─────────────────┘    │
│ ┌─────────────────┐ ┌─────────────────┐ ┌────────────────┐ │
│ │ Icon            │ │ Icon            │ │ Icon           │ │
│ │ Benefit / Body  │ │ Workflow / Body │ │ Detail / Body  │ │
│ └─────────────────┘ └─────────────────┘ └────────────────┘ │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A header and secondary action form a bottom-aligned row at 1024px with a 32px gap. The five-card grid follows by 48px, with gap-4 16px. At desktop a six-column grid places a col-span-4 media card and col-span-2 metric above three col-span-2 icon cards. Cards use rounded-lg, 1px borders and 24px p-6. The media card has 24px top and side padding and a 16:9 placeholder flush to its bottom.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the leading 18px title and 14px body, then the media, the 48px text-5xl metric and its 16px label, and the three 16px icon-card titles. Slots: heading 8 words, lede 24, card title 6, body 24, metric up to 6 characters, label 5, action 3.",
    states: "The 44px secondary action uses a 6px radius, neutral-300 border, white fill and a neutral-50 hover fill with a 150ms transition. It shows a 2px neutral-900 focus outline offset 2px. Tiles are static with no selected, disabled or loading states.",
    responsive: "Below 640px all five cards stack. At 640px a two-column grid gives the media card two columns and pairs the remaining four. At 1024px six columns produce the 4:2 top row and 2:2:2 lower row, and the header action moves beside the introduction.",
    usage: "Use when one capability deserves the largest tile. Choose features-icon-grid for equal emphasis or features-alternating-rows when each benefit needs a large visual. Variations: replace the metric with a short list, vary the number of lower cards, or move the primary tile to the right.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
