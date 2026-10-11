import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-command-tiles",
  name: "Buttons — Command tiles with descriptions",
  category: "buttons",
  tags: ["grid", "icons", "compact"],
  description: "Four large command buttons form a two-column grid with icons, titles and one-line descriptions. Use to present a small set of starting actions.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ ┌──────────────────────┐  ┌──────────────────────┐   │
│ │ Icon                 │  │ Icon                 │   │
│ │ [Create item]        │  │ [Open folder]        │   │
│ │ Start from blank     │  │ Browse saved items   │   │
│ └──────────────────────┘  └──────────────────────┘   │
│ ┌──────────────────────┐  ┌──────────────────────┐   │
│ │ Icon                 │  │ Icon                 │   │
│ │ [Import file]        │  │ [Add collection]     │   │
│ │ Bring in a file      │  │ Group related items  │   │
│ └──────────────────────┘  └──────────────────────┘   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) two-column grid grows to 448px at sm and uses 12px gaps. Each rounded-md button has a 1px neutral-300 border, 16px padding, a 20px icon and 8px vertical gaps. Minimum tile height is 112px (min-h-28).",
    hierarchy: "Scan four titles in row order, then the descriptions. Titles use 14px semibold text and at most 2 words; descriptions use 12px body text and at most 5 words. Icons supplement each visible button name.",
    states: "Every tile hovers neutral-50 and draws a 2px neutral-900 outline offset 2px on keyboard focus. All four commands are enabled action slots; there is no selected state.",
    responsive: "The grid remains two columns at every width. From 640px its width grows from 288px to 448px, allowing descriptions to fit on fewer lines without changing the tile order.",
    usage: "Use for entry actions where descriptions help distinguish the choices. Choose a toolbar when commands must sit in a single narrow row. Variations: show two commands in one row, replace one icon, or shorten descriptions for denser tiles.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
