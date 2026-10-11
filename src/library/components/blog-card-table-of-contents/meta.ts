import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-table-of-contents",
  name: "Blog cards — Article contents card",
  category: "blog-card",
  tags: [
    "stacked",
    "list",
    "compact"
  ],
  description: "A title and short excerpt lead a three-link contents list and author metadata. Use it for a structured article whose sections help readers choose what to read.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Article contents / 6 min read                                │
│ [Article title naming the main question]                     │
│ Brief excerpt                                                │
│ ──────────────────────────────────────────────────────────   │
│ [First section topic]                                        │
│ [Second section topic]                                       │
│ [Third section topic]                                        │
│ Alex Rivera / Oct 10                                         │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 article becomes 320px from 640px. Metadata leads a linked 18px title after 12px, excerpt after 12px and a divided contents list after 20px with 16px top padding. Three 12px links have 8px gaps; author metadata follows 16px below.",
    "hierarchy": "Read the title, excerpt and section destinations. Keep title below 8 words, excerpt below 14, each section below 4 and author below 3.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. Contents destinations are separate links to sections in the full article.",
    "responsive": "The contents list and article body remain stacked at every width. Keep the abstract to two short lines and the contents to three concise titles.",
    "usage": "Use for practical articles with distinct sections. Choose a text-only card for a short essay. Variations include two contents links or a reading-time label per section."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
