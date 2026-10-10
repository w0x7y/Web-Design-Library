import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-antique-auction",
  name: "Toggles — Antique auction",
  category: "toggles",
  tags: [
    "editorial",
    "light"
  ],
  description: "An antique auction watch panel with a prominent lot number and separate outbid and closing-reminder opt-ins.",
  preview: {
    kind: "element"
  },
  fonts: [
    "Newsreader:wght@400;500;600;700"
  ],
  brief: {
    layout: "288px panel, 384px from 640px, with 20px padding. A 56px lot number shares a 64px-and-flexible grid with a 26px serif title and 16px gap. A lot description ends in a hairline; two reminder rows follow with 16px spacing and 20px checkboxes. A closing-date footnote finishes the card.",
    style: "Newsreader, amber-50 paper, red-950 text and red-800 secondary copy. Square corners and a 1px red-200 border. Red-900 native checkbox accents. Labels are 14px semibold, hints 12px and footer 11px. No shadows.",
    states: "Outbid email starts checked and final-ten-minute reminder unchecked. Native checkboxes work with Space and pointer input. Every checkbox shows a 2px red-900 focus outline offset 2px. No hover effect, animation or custom state fill.",
    responsive: "Fixed 288px width below 640px; 384px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
