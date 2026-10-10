import type { ComponentMeta } from '../../types'

export default {
  slug: "features-alternating-rows",
  name: "Features — Alternating media rows",
  category: "features",
  tags: ["split", "media", "spacious"],
  description: "Three spacious feature rows alternate a media placeholder and a detailed text block. Use it for benefits that each need their own visual and supporting checklist.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Eyebrow / Heading / Introduction                           │
│                                                            │
│ ┌───────────────────────┐  Feature eyebrow                 │
│ │         Image         │  Benefit title                   │
│ │                       │  Body / check list               │
│ └───────────────────────┘  [Explore benefit]               │
│                                                            │
│ Capability eyebrow        ┌───────────────────────┐        │
│ Capability title          │         Image         │        │
│ Body / check list         │                       │        │
│ [Explore capability]      └───────────────────────┘        │
│                                                            │
│ ┌───────────────────────┐  Outcome eyebrow                 │
│ │         Image         │  Outcome title                   │
│ │                       │  Body / check list               │
│ └───────────────────────┘  [Explore outcome]               │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A max-w-2xl left intro precedes three rows by 64px. Rows use 64px gaps, increasing to 96px lg:gap-24. Each row is a centred two-column grid at 1024px with a 64px gap; media is 4:3. Each text block holds an eyebrow, 24px title, 16px body, three 20px check-icon list items and a text link.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read each image and then its benefit title, body and checklist. Titles are text-2xl semibold, body and checks text-base neutral-600, eyebrows text-sm neutral-500. Slots: intro 24 words, row eyebrow 4, title 7, body 30, check 8, link 3.",
    states: "Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. Media and checklists are static. No selected, disabled or loading states.",
    responsive: "Below 1024px every row stacks image first and text second with gap-8 32px. At 1024px rows have equal columns and gap-16 64px; only the second media uses lg:order-last. Rows separate by 64px below 1024px and 96px above.",
    usage: "Use for three substantial benefits with distinct visuals. Choose features-icon-grid for short descriptions or features-media-list for one shared image. Variations: use two rows, shorten each checklist, or replace a text link with a secondary action.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
