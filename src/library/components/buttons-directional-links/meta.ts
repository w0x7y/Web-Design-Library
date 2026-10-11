import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-directional-links",
  name: "Buttons — Previous and next destination cards",
  category: "buttons",
  tags: ["split", "row", "compact"],
  description: "Two outlined destination links pair directional icons with small Previous or Next labels and item titles. Use for browsing adjacent records or lessons.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ ┌──────────────────────┐  ┌──────────────────────┐   │
│ │ < Previous           │  │ > Next               │   │
│ │ [Previous item title]│  │ [Next item title]    │   │
│ └──────────────────────┘  └──────────────────────┘   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root stacks two destination links with 12px gaps. At sm it becomes a 512px two-column grid. Each link is at least 96px high with 16px padding, a 20px icon and 12px gap. Labels are 12px; titles are 14px medium.",
    hierarchy: "Read Previous and its destination, then Next and its destination. Each link gets its name from visible direction and title text. Keep destination titles under 4 words; arrow icons are decorative.",
    states: "Both links hover neutral-50 and show the standard 2px offset focus outline. Destination navigation belongs to the host href values. No disabled end-of-sequence state is included.",
    responsive: "Below 640px the two 288px-wide links stack. From 640px the root is 512px and the links become two equal columns. Titles wrap within their flexible text region.",
    usage: "Use between related records with meaningful adjacent titles. Choose wizard navigation when progress through a form is the main task. Variations: omit one end link, use lesson names, or substitute a short date for the title.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
