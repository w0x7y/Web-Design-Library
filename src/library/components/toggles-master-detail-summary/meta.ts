import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-master-detail-summary",
  name: "Toggles — Enabled mode with a summary preview",
  category: "toggles",
  tags: ["split", "stacked", "form", "compact"],
  description: "A checkbox header switches between a disabled note and a compact two-column summary preview. Use when one mode changes the information shown below it.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [x] Enable shared mode                               │
│ Share this item with the selected group.             │
│ ┌──────────────────────────────────────────────┐     │
│ │ Access                 Members               │     │
│ │ Read only              12 people             │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px card grows to 384px at sm with 16px padding. Its header pairs a 16px native checkbox with a 14px semibold title and 12px gap. An 8px-spaced hint precedes the preview by 16px. The neutral-50 preview has two equal columns, a middle divider and 12px padding.",
    hierarchy: "Read Enable shared mode, the sharing hint, then Access and Members in the visible preview. The checkbox references the hint. Keep the label under 4 words, hint under 10 words and preview values under 3 words.",
    states: "Shared mode starts checked. CSS displays the summary while checked and replaces it with an off note when unchecked. The native checkbox shows a checkmark in forced colors and a standard focus outline. The summary values are supplied content rather than additional controls.",
    responsive: "The root grows from 288px to 384px at 640px. The summary remains two columns, and the off note occupies a single compact text region when the checkbox is cleared.",
    usage: "Use when a binary mode needs a concise preview of its effect. Choose dependent options when users must configure subordinate controls. Variations: show duration and scope, start unchecked, or replace member count with a group name.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
