import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-centered-metric",
  name: "Tabs — Centered period choices and a metric",
  category: "tabs",
  tags: ["centered", "stacked", "numbers", "compact"],
  description: "A centered heading and three period choices sit above a prominent total and short explanation. Use to compare one metric over a few time periods.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│                 Collection summary                   │
│                [Week] [Month] [Year]                 │
│ ──────────────────────────────────────────────       │
│                        48                            │
│                 Items in this period                 │
│                 Explain the weekly total.            │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px centered card grows to 384px at sm with 20px padding. Its 16px heading precedes three 36px period choices by 12px, with 4px gaps. A panel starts 20px below a top divider, using 20px top padding, a 36px total and 8px text gaps.",
    hierarchy: "Read Collection summary, the selected period and its total, then the metric label and explanation. Period labels use one word, totals at most 6 characters, metric labels at most 5 words and notes under 7 words. Each radio names its panel.",
    states: "Week starts selected and only its metric panel is visible. The selected period uses an outlined border and medium text, preserving a Highlight border in forced colors. Hover fills neutral-50 and focus outlines each label.",
    responsive: "The card grows from 288px to 384px at 640px. The three choices remain centered on one row and the total retains its size. Short text wraps inside the padded panel.",
    usage: "Use for one headline total with period comparisons. Choose a dashboard card when several independent metrics must be shown together. Variations: use percentages, substitute custom date periods, or replace the note with a short trend sentence.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
