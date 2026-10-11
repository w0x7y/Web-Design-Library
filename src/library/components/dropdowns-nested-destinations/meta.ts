import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-nested-destinations",
  name: "Dropdowns — Nested destination disclosures",
  category: "dropdowns",
  tags: ["layered", "list", "compact"],
  description: "A destination panel groups links in nested native disclosures and ends with a browse-all link. Use for a small hierarchy that benefits from collapsible groups.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Browse destinations ^]                              │
│ ┌──────────────────────────────────────────────┐     │
│ │ [Content ^]                                  │     │
│ │     [Item list]                              │     │
│ │     [Collections]                            │     │
│ │ [People v]                                   │     │
│ │ ──────────────────────────────────────────── │     │
│ │ [Browse all]                              >  │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px disclosure grows to 384px at sm. Its 44px trigger precedes a 12px-padded panel by 8px. The panel has a 288px max-height and vertical scrolling. Two 36px group summaries lead 32px indented links with a left rule. A divided footer contains a 36px Browse all link.",
    hierarchy: "Read Browse destinations, Content and its revealed links, People and the footer destination. Group labels use one word; destination labels at most 2 words. Native details preserve disclosure semantics and lists retain role=list.",
    states: "The outer disclosure and Content start open; People starts closed. Each summary toggles its own group. Every summary and link shows a 2px offset focus outline; row hover fills neutral-50. Revealed links remain inside the scrollable panel with padding around focus outlines.",
    responsive: "The root grows from 288px to 384px at 640px. Groups stay stacked and the panel is capped at 288px tall, scrolling when both branches are open. The complete element stays within a 340px initial height.",
    usage: "Use for a few hierarchical destination groups. Choose a breadcrumb branch for navigating siblings of the current item. Variations: start another group open, replace People with Settings, or omit the browse-all footer.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
