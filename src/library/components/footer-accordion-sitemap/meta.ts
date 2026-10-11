import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-accordion-sitemap",
  name: "Footer — Accordion sitemap",
  category: "footer",
  tags: [
    "stacked",
    "list",
    "compact"
  ],
  description: "A closing identity and back-to-top link precede three expandable sitemap groups. Use it for a compact directory that readers can reveal as needed.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo / Closing statement                     [Back to top]   │
│ ──────────────────────────────────────────────────────────   │
│ [Product v]                                                  │
│   [Overview] [Features] [Pricing] when opened                │
│ ──────────────────────────────────────────────────────────   │
│ [Resources v]                                                │
│   [Documentation] [Guides] [Updates] when opened             │
│ ──────────────────────────────────────────────────────────   │
│ [Company v]                                                  │
│ Copyright                                                    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The top row stacks identity and a top link, becoming a space-between flex row at 640px. A sitemap starts 40px later with three native details, 20px summary spacing and 24px link gaps. Copyright follows after 32px.",
    "hierarchy": "The identity establishes the site before 18px directory group labels. Keep closing copy below 12 words, groups below 2 and link labels below 2. Copyright is a small final line.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. Each summary independently opens its group and rotates its chevron; summaries use the same visible keyboard outline.",
    "responsive": "Below 640px the identity and top link stack. Sitemap rows remain one column and revealed links wrap at every width.",
    "usage": "Use for a large directory that should occupy little space when closed. Choose fixed link columns when all destinations must stay visible. Variations include four groups or one initially open group."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
