import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-inline-edit",
  name: "Data table — Inline editable record rows",
  category: "data-table",
  tags: [
    "table",
    "form",
    "compact"
  ],
  description: "Names and counts can be edited directly in a table with a save action for each row. Use for small datasets where opening a separate editor would slow the task.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Edit record values                                            │
│Name                              Count        Action         │
│[Item label                    ]  [24       ]  [Save]         │
│[Entry label                   ]  [18       ]  [Save]         │
│[Record label                  ]  [12       ]  [Save]         │
│Row saving hint                                               │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A fixed table starts 32px below the title. Name receives half the width, Count and Action one quarter each. Editable cells use 8px padding, 40px fields and a 44px outlined row action. A 24px-separated save note follows.",
    hierarchy: "The h1 leads to Name, Count and row actions. Each input and Save has a record-specific accessible label. Display names fit 20 characters and counts three digits. Heading up to 5 words, lede 14 and note 12.",
    states: "Inputs support native keyboard editing and numeric constraints. Row actions and fields have 2px keyboard-focus outlines. Each Save submits the chosen record value; persistence and row feedback need application integration.",
    responsive: "The table stays three columns down to 320px, with min-w-0 inputs filling their allotted cells. Count inputs use 4px horizontal padding below 640px and 12px above it so all three digits remain visible; actions use 8px horizontal padding. Heading grows at sm.",
    usage: "Use for a handful of short editable values. Choose a separate form for long text, several fields or destructive actions. Variations: swap count for a status select, add a total row, or make names read-only."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
