import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-inline-consent",
  name: "Toggles — Consent row with a separate explanation",
  category: "toggles",
  tags: ["stacked", "form", "compact"],
  description: "A short policy explanation sits above a divided checkbox row with a status word that follows its checked state. Use for one explicit consent decision.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Consent heading                                      │
│ Explain the permission and how it is used.           │
│ [Read the policy]                                    │
├──────────────────────────────────────────────────────┤
│ [ ] I agree                           Not agreed     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered card grows to 416px at sm. The explanation uses 16px padding, an 8px description gap and a 12px link gap. A neutral-50 footer has a top divider and 16px padding, aligning a 16px checkbox with a right-side 12px status word.",
    hierarchy: "Read the heading, permission explanation and policy link before the I agree checkbox. The checkbox references a hidden instruction with aria-describedby. Keep the heading under 3 words and explanation under 12 words.",
    states: "Consent starts unchecked. Native activation changes the checkbox and CSS changes Not agreed to Agreed. The status word and native checkmark preserve the state in forced colors. Checkbox and policy link have 2px offset focus outlines; the link hovers neutral-600.",
    responsive: "The card grows from 288px to 416px at 640px. The explanation wraps naturally while the checkbox and short status label remain opposite each other on one row.",
    usage: "Use when one permission needs an explicit independent decision. Choose a checkbox group for several unrelated permissions. Variations: change the consent wording, link a detailed policy page, or omit the status word when the checkmark is enough.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
