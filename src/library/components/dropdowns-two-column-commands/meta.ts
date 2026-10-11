import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-two-column-commands",
  name: "Dropdowns — Two-column commands and resources",
  category: "dropdowns",
  tags: ["layered", "split", "list", "compact"],
  description: "An open disclosure places record commands beside helpful resource links, followed by one full-width destination. Use to keep action and guidance groups visible together.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Item options ^]                                     │
│ ┌──────────────────────────────────────────────┐     │
│ │ Actions                   Resources          │     │
│ │ [Edit item]               [Help]             │     │
│ │ [Duplicate]               Get task guidance  │     │
│ │ [Move item]               [Guides]           │     │
│ │                           Read related steps │     │
│ │ ──────────────────────────────────────────── │     │
│ │ [All commands]                            >  │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px disclosure grows to 448px at sm. The 44px summary sits 8px above a 12px-padded panel. Its two equal columns use a 12px gap, with a left border and 12px padding on Resources. Three 36px commands sit beside two title/description links. A divided footer holds a 36px destination.",
    hierarchy: "Read Item options, the Actions column, Resources and All commands. Command labels use at most 2 words; resource titles one word and descriptions at most 3 words. Both lists keep role=list and destinations remain native links.",
    states: "The disclosure starts open and native summary activation toggles its panel. Summary, command buttons and resource links all show 2px offset focus outlines. Rows hover neutral-50. Command buttons are host action slots and links need destination hrefs.",
    responsive: "The root grows from 288px to 448px at 640px. The panel keeps two columns with short text; resource descriptions wrap without widening their column. The footer remains full width.",
    usage: "Use when secondary commands and supporting guidance should share one panel. Choose a simple action list when every row is a command. Variations: change the commands, use documentation links, or replace the footer with a help destination.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
