import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-mushroom-chamber",
  name: "Toggles — Mushroom chamber",
  category: "toggles",
  tags: [
    "minimal",
    "light",
    "has-image"
  ],
  description: "A mushroom cultivation chamber panel pairing harvest photography and humidity readings with misting and ventilation switches.",
  preview: {
    kind: "element"
  },
  fonts: [
    "IBM Plex Sans:wght@400;500;600;700"
  ],
  brief: {
    layout: "288px white panel, 320px from 640px, 16px padding. An eyebrow precedes a two-column summary with a 64×80px mushroom photo, 20px chamber title and 14px sensor readout. Two switch rows sit under a rule with 16px spacing, followed by an 11px sensor timestamp.",
    style: "IBM Plex Sans, stone-900 text, stone-600 supporting copy, 1px stone-300 border, 12px outer and 8px photo radii. Emerald-800 readout and checked tracks. White unchecked tracks, stone-500 borders and 16px thumbs. No shadow.",
    states: "Timed misting starts on, Fresh-air cycle off. The 44×24px native switches have 16px thumbs traveling 20px. Hover uses 80% opacity. Focus has a 2px emerald-800 outline offset 2px. Forced colors retain ButtonText borders and CanvasText thumbs. No animation.",
    responsive: "Fixed 288px width below 640px; 320px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
