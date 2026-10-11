import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-grouped-navigation",
  name: "Tabs — Grouped view choices in two columns",
  category: "tabs",
  tags: ["grid", "stacked", "compact"],
  description: "Two labelled groups arrange four view choices in a two-column selector above one shared content panel. Use when related views fall into two clear categories.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Information                      History             │
│ [Overview]                       [Activity]          │
│ [Details]                        [Revisions]         │
│ ──────────────────────────────────────────────       │
│ Overview heading                                     │
│ Describe the selected category and records.          │
│ Short supporting detail for this view.               │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root grows to 448px at sm. The selector has two equal columns with a 16px gap. Each fieldset places a 12px group heading 8px over two 36px choices separated by 4px. A single selected panel follows by 16px with a top divider and 16px top padding.",
    hierarchy: "Read Information and its two choices, History and its choices, then the selected heading and details. The four radios share one name across the two fieldsets. Group names and view labels use one word; panel copy stays under 12 words per paragraph.",
    states: "Overview starts selected. Checked radios use dark borders and medium text, preserving a Highlight border in forced colors. Hover fills neutral-50, keyboard focus outlines labels and CSS shows only the section controlled by the checked radio.",
    responsive: "Below 640px the root is 288px; above it is 448px. The two selector groups stay side by side and each keeps its two stacked options. The content panel stays full width underneath.",
    usage: "Use for peer views that belong to two small categories. Choose a vertical rail for a longer category list. Variations: group content and discussion views, rename History to Records, or replace Revisions with Files.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
