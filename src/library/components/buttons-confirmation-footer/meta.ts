import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-confirmation-footer",
  name: "Buttons — Confirmation footer",
  category: "buttons",
  tags: ["stacked", "split", "compact"],
  description: "A short decision summary leads to a divided footer with Cancel and Confirm on opposite sides. Use when an action needs a final explanation before confirmation.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Decision heading                                     │
│ Explain the consequence of this action.              │
├──────────────────────────────────────────────────────┤
│ [Cancel]                              [Confirm]      │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) bordered card grows to 384px (sm:w-96). Its summary uses 20px padding, a 16px heading and an 8px copy gap. A neutral-50 footer has a top divider, 16px padding and a justified pair of standard 44px actions.",
    hierarchy: "Read the heading, the consequence and the two actions. Keep the heading under 4 words, explanation under 14 words and each action under 2 words. Confirm has primary emphasis; Cancel stays at the opposite edge.",
    states: "Both buttons show a 2px focus outline offset 2px. Cancel hovers neutral-50 and Confirm neutral-700. The buttons are action slots; there are no selected or disabled states.",
    responsive: "Below 640px the card is 288px wide. From 640px it becomes 384px. The two actions remain in one row and the short explanation wraps naturally.",
    usage: "Use before a consequential change that needs a brief explanation. Choose a stacked action group when there are several equal alternatives. Variations: change the confirmation verb, add an item name to the heading, or shorten the body to one sentence.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
