import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-first-run-checklist',
  name: "Empty state — First-run checklist",
  category: 'empty-state',
  tags: ["stacked", "list", "compact"],
  description: "A setup panel with progress and three full-row step links. Use it to guide a first-time user through a short sequence without a separate primary button.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│Get started / 1 of 3 done                             │
│─────────────────────────────────                     │
│Title for the setup steps                             │
│One-line setup explanation                            │
│[Check  Completed step                 Done  >]       │
│[  2    Next setup step                      >]       │
│[  3    Final setup step                     >]       │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72), 384px from 640px (sm:w-96), bordered rounded-lg panel with p-5 (20px). A 14px progress label sits above a 4px neutral-200 track with one-third neutral-900 fill. A 16px heading follows by 16px and a 14px description by 4px. The ordered list starts 16px below; each rounded-md link has 8px padding, a 24px outlined number circle, a flexible title and a 16px chevron, with 8px gaps.",
    hierarchy: "Read progress, 16px semibold heading, a one-line explanation and the three step actions. Keep heading up to 5 words, explanation up to 6, and step titles up to 3. The completed step has a check and an explicit 12px Done badge. The progressbar exposes min 0, max 3 and value 1.",
    states: "Row links hover to neutral-50 and show a 2px neutral-900 focus-visible outline offset 2px. Completion is a check, outlined circle and Done wording; the progress fill has a forced-colors CanvasText treatment. No JavaScript toggles, separate CTA or disabled steps.",
    responsive: "The ordered stack remains at every width. Width grows from 288px to 384px at 640px. Titles use the flexible middle column while number, Done badge and chevron keep their sizes; the panel stays below 384px tall.",
    usage: "Use for a short onboarding sequence. Pick empty-state-centered-icon when there is only one next action. Variations: use four compact steps, link a completed step to review, or replace the progress bar with a fraction only.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
