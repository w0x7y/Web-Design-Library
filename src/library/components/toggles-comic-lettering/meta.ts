import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-comic-lettering",
  name: "Toggles — Comic lettering",
  category: "toggles",
  tags: [
    "playful",
    "light"
  ],
  description: "A comic lettering control with a live CSS specimen and independent italic and uppercase toggles.",
  preview: {
    kind: "element"
  },
  fonts: [
    "Syne:wght@400;500;600;700"
  ],
  brief: {
    layout: "288px panel, 320px from 640px, with 20px padding. A 20px title precedes a yellow oval specimen with 38px lettering, 20px vertical padding and 16px horizontal padding. Two equal option columns follow at 20px with a 16px gap, each pairing a label and 20px checkbox above a 12px hint.",
    style: "Syne, pink-200 surface, zinc-950 ink and 2px borders. 24px outer corners, yellow-200 oval with 50% radius. Zinc-800 hints, zinc-950 checkbox accents. No shadows.",
    states: "Slant and Caps start checked. Unchecking Slant removes italic styling from the specimen; unchecking Caps changes ZAP! to Zap!, using CSS :has without JavaScript. Every native checkbox draws a 2px zinc-950 outline offset 2px. No hover effect or animation.",
    responsive: "Fixed 288px width below 640px; 320px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
