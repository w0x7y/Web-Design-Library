import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-waterjet-cutting",
  name: "Toggles — Waterjet cutting",
  category: "toggles",
  tags: [
    "brutalist",
    "light"
  ],
  description: "A waterjet cutting job panel with selectable deburring and part-marking blocks and a material summary.",
  preview: {
    kind: "element"
  },
  fonts: [
    "Space Grotesk:wght@400;500;600;700"
  ],
  brief: {
    layout: "288px board, 384px from 640px. A 16px-padded header with 28px title and job summary is separated by a 2px rule. Two finishing blocks have 12px padding and 12px gap inside a 16px-padded two-column grid. Each pairs a small number and 20px checkbox above its label and hint; a ruled footer has 12px vertical padding.",
    style: "Space Grotesk, orange-400 board, black 2px rules and square corners. Unchecked blocks are white with black text; checked blocks invert to black with white text. Native checkboxes use orange-600 accent and orange-700 focus. Labels are 14px bold, descriptions 12px.",
    states: "Deburr edges starts checked and Part marking unchecked. CSS :has(:checked) inverts each selected block. Controls work with Space and pointer input; a 2px orange-700 focus outline offset 2px appears on each checkbox. Native check marks retain state in forced colors. No hover effect or animation.",
    responsive: "Fixed 288px width below 640px; 384px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
