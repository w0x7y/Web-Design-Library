import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-breadcrumb-branch",
  name: "Dropdowns — Breadcrumb branch disclosure",
  category: "dropdowns",
  tags: ["layered", "list", "compact"],
  description: "A breadcrumb row opens a branch list beneath its middle segment, exposing a parent collection and two sibling destinations. Use to navigate a shallow hierarchy.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Root] / [Collection ^] / Item                       │
│ ┌──────────────────────────────────────────────┐     │
│ │ Collection branch                            │     │
│ │ [Collection title]                           │     │
│ │     [Current item]                           │     │
│ │     [Sibling item]                           │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative 288px by 256px root grows to 448px at sm. Its breadcrumb uses 8px gaps and a 36px middle summary. The full-width panel is absolutely placed 44px below the root top with 12px padding and shadow-lg. A small heading precedes three 36px links; child links indent 24px.",
    hierarchy: "Read Root, Collection and Item before opening the branch. In the panel read the parent collection and two indented items. Current item has aria-current=page. Breadcrumb labels use one word and branch links under 3 words; separators are decorative.",
    states: "The middle disclosure starts open and toggles its branch panel through native summary activation. Root and every branch link show 2px offset focus outlines. Summary and branch links hover neutral-50; the current destination is identified semantically.",
    responsive: "The root grows from 288px to 448px at 640px. The breadcrumb remains one row with short labels, and the panel spans the full root width at both sizes. The 256px root contains its open branch panel.",
    usage: "Use for a shallow hierarchy with nearby sibling destinations. Choose a nested disclosure panel for deeper expandable branches. Variations: replace Collection with Folder, show one sibling, or change the current item label.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
