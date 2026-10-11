import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-numbered-stages",
  name: "Tabs — Numbered stage views",
  category: "tabs",
  tags: ["row", "stacked", "numbers", "compact"],
  description: "Three numbered radio stages sit above a compact requirement panel. Use to inspect the content expected at each stage of a short process.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ (1) Draft          (2) Review          (3) Publish   │
│ ────────────       ────────────       ────────────   │
│ ┌──────────────────────────────────────────────┐     │
│ │ Draft stage summary                          │     │
│ │ Describe what belongs in this stage.         │     │
│ │ 1. Required content for this stage           │     │
│ │ 2. Supporting information to include         │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root grows to 448px at sm. Three equal stage columns have 8px gaps, top rules and 12px top padding. Each stage centers a 32px number circle with a label 8px below. The selected panel starts 16px later with 16px padding and a neutral-50 surface.",
    hierarchy: "Read numbered stages left to right, then the selected heading, explanation and two requirements. Labels are one word, headings at most 3 words, explanations under 12 words and requirement rows under 8 words. Each native radio controls its labelled section.",
    states: "Draft is selected initially. Radio selection shows only its associated panel and gives its label a dark border and medium text; forced colors preserve a Highlight border. Hover fills neutral-50 and focus outlines the label. Stage views do not submit or advance a form.",
    responsive: "The root grows from 288px to 448px at 640px. The three selectors keep one row and the selected requirement panel remains a single-column stack.",
    usage: "Use to inspect several short process stages. Choose wizard navigation when the user must advance through form steps. Variations: rename stages, select Review initially, or replace the requirement list with short label/value pairs.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
