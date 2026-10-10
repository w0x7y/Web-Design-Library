import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-insect-monitoring",
  name: "Toggles — Insect monitoring",
  category: "toggles",
  tags: [
    "corporate",
    "light"
  ],
  description: "A pest-monitoring notification matrix with four named trap locations and independent site-team alert opt-ins.",
  preview: {
    kind: "element"
  },
  fonts: [
    "Manrope:wght@400;500;600;700"
  ],
  brief: {
    layout: "288px card, 320px from 640px. A 16px-horizontal, 12px-vertical header contains an 18px title and site summary. Four trap cells are arranged in a two-column grid with 12px gaps and 16px outer padding. Each has 12px padding, a trap ID opposite a 20px checkbox, and a 12px location label 12px below. A ruled footer describes the alert destination.",
    style: "Manrope, white card, slate-900 text, slate-600 secondary copy. 12px outer radius, 1px slate-300 outer border. Trap cells have 8px corners, slate-50 backgrounds and slate-300 borders; selected cells use sky-50 and sky-700 borders. Sky-700 checkbox accents.",
    states: "Dry store, Prep room and Waste bay start checked; Goods door starts unchecked. Native check marks convey state alongside selected-cell styling. Checkboxes toggle with Space or pointer input and show a 2px sky-800 focus outline offset 2px. No hover effect or animation.",
    responsive: "Fixed 288px width below 640px; 320px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
