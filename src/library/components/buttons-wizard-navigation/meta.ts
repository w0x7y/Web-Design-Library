import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-wizard-navigation",
  name: "Buttons — Step navigation with progress",
  category: "buttons",
  tags: ["stacked", "row", "numbers", "compact"],
  description: "A three-step progress strip sits above a Back and Continue pair, with a separate save link. Use at the end of a short multi-step form.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ 1 Details       2 Review       3 Finish              │
│ ────────────    ────────────   ────────────          │
│ [< Back]                             [Continue >]    │
│                    [Save and exit]                   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) root grows to 448px (sm:w-[28rem]). Three equal progress columns use 8px gaps, 2px top rules and 8px top padding. Actions sit 24px below, separated across the row. A centered exit link follows by 16px.",
    hierarchy: "The numbered progress strip identifies Review as the current step through aria-current=step and medium text. Read progress, then Back and Continue, then Save and exit. Step labels and actions use at most 3 words.",
    states: "Back and Continue use standard offset focus outlines and neutral hover fills. Save and exit is underlined with the same outline. Progress markers are static and noninteractive; the host handles navigation and saving.",
    responsive: "The root is 288px below 640px and 448px from 640px. Progress always uses three columns; the action pair keeps its edge alignment and the exit link stays centered.",
    usage: "Use between steps with a separate option to leave and return later. Choose directional links for browsing unrelated records. Variations: mark a different current step, replace Continue with a final submission verb, or omit the exit link.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
