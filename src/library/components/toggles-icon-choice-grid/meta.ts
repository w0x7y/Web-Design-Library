import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-icon-choice-grid",
  name: "Toggles — Icon radio choice grid",
  category: "toggles",
  tags: ["grid", "icons", "form", "compact"],
  description: "Four layout radios appear as a two-column icon grid with short labels and checked markers. Use for a small set of visual presentation choices.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Display layout                                       │
│ ┌──────────────────────┐  ┌──────────────────────┐   │
│ │ Icon           Check │  │ Icon                 │   │
│ │ [Grid]               │  │ [List]               │   │
│ └──────────────────────┘  └──────────────────────┘   │
│ ┌──────────────────────┐  ┌──────────────────────┐   │
│ │ Icon                 │  │ Icon                 │   │
│ │ [Columns]            │  │ [Rows]               │   │
│ └──────────────────────┘  └──────────────────────┘   │
│ Choose one layout for the content.                   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px fieldset grows to 384px at sm. The two-column grid has 12px gaps and minimum 96px choices with 12px padding. Each card pairs a 24px icon and 16px check marker, then a 14px label 12px below. The hint follows the grid by 12px.",
    hierarchy: "Read Display layout, then Grid, List, Columns and Rows in row order. Every option is a native radio with a visible one-word label and a shared described-by hint. Decorative icons support the labels.",
    states: "Grid starts selected. Checked cards use a neutral-900 border, medium text and a check marker shown with opacity. Forced colors use a Highlight border. Radio keyboard focus outlines the label; arrow keys change the selection. Hover fills neutral-50.",
    responsive: "The root grows from 288px to 384px at 640px. The four choices remain in two columns and two rows, with identical icon and label placement at both sizes.",
    usage: "Use for mutually exclusive layouts that benefit from an icon. Choose a compact segmented control for a single-row switch. Variations: replace Rows with Gallery, change the selected layout, or show only two choices.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
