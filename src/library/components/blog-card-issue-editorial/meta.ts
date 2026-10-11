import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-issue-editorial",
  name: "Blog cards — Issue editorial",
  category: "blog-card",
  tags: [
    "stacked",
    "numbers",
    "compact"
  ],
  description: "A large issue number shares a header with publication metadata above the article title. Use it for an editorial series with recognizable issue numbering.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ 08   Issue number / Oct 10, 2026                             │
│ ──────────────────────────────────────────────────────────   │
│ [Editorial title naming the issue theme]                     │
│ Short introduction to the central question                   │
│ Alex Rivera                                      8 min read  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 card grows to 320px at 640px. A bottom-aligned header combines a 48px issue number and stacked metadata with a 20px gap and bottom rule. The title starts 20px below, excerpt after 12px and byline/reading-time footer after 20px.",
    "hierarchy": "The issue number groups the series before readers see the 18px title. Keep title below 8 words, excerpt below 14 and author below 3.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "The number remains beside metadata at all widths. The title, excerpt and footer stay full width below the header.",
    "usage": "Use for numbered editorials or periodic updates. Choose a date-column card when the publication day is the main marker. Variations include a volume number or a short issue theme label."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
