import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-directory-rows",
  name: "Footer — Directory rows with descriptions",
  category: "footer",
  tags: [
    "list",
    "row",
    "compact"
  ],
  description: "Three full-width directory rows pair group titles with descriptions and link sets. Use it when a broad directory should read from top to bottom.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo                                                         │
│ ──────────────────────────────────────────────────────────   │
│ Explore   Group description   [Overview] [Features] [Pricing]│
│ ──────────────────────────────────────────────────────────   │
│ Learn     Group description   [Docs] [Guides] [Updates]      │
│ ──────────────────────────────────────────────────────────   │
│ Connect   Group description   [Contact] [Community] [Support]│
│ ──────────────────────────────────────────────────────────   │
│ Copyright                                   [Privacy] [Terms]│
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Identity precedes the directory by 40px. Each row has 24px vertical padding and a 1px bottom rule. Desktop columns use 160px for the heading and equal flexible description and link areas with 16px gaps. Links wrap with 24px horizontal gaps.",
    "hierarchy": "Scan 18px group titles then the explanatory copy and destination set. Keep group names below 2 words, descriptions below 10 and links below 2.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "Below 768px every directory row stacks heading, description and links. Link sets wrap rather than causing horizontal scroll.",
    "usage": "Use for directory groups that need an explanation. Choose link columns when terse headings are enough. Variations include four groups or removing descriptions for a denser footer."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
