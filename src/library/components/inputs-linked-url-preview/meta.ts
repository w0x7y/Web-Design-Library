import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-linked-url-preview",
  name: "Inputs — URL field with a linked-page preview",
  category: "inputs",
  tags: ["stacked", "form", "icons", "compact"],
  description: "A labelled URL field sits above a small linked-page summary with a remove control. Use when a saved link needs context beyond its address.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Page URL                                             │
│ [https://example.com]                                │
│ Enter the full address, including https://.          │
│ ┌──────────────────────────────────────────────┐     │
│ │ Icon  Linked page title                  [x] │     │
│ │       example.com                            │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px stack grows to 416px at sm. A 14px label sits 6px above the 40px URL field; its hint has a 6px top gap. A neutral-50 preview starts 16px below, with a 1px border, 12px padding and 12px gaps between a 40px icon, flexible text and 32px remove button.",
    hierarchy: "Read Page URL, the address, the hint, then the linked title and domain. The field references its hint and the remove button names the preview. Keep titles under 5 words and domain text under 25 characters; overflow truncates within the summary.",
    states: "The URL input and remove button show standard 2px offset focus outlines. Remove hovers neutral-100. The preview is a supplied summary; the host retrieves link metadata and removes it when the action runs.",
    responsive: "The root grows from 288px to 416px at 640px. The preview keeps one row, its icon and button stay fixed, and the min-w-0 text region truncates long titles and domains.",
    usage: "Use for one URL with a saved title and domain. Choose a plain URL field when no preview is available. Variations: show a document type under the title, omit the remove action for a read-only preview, or start with an empty field.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
