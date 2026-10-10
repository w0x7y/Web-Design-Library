import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-skate-hire",
  "name": "Inputs — Skate hire",
  "category": "inputs",
  "tags": ["gradient", "playful", "light"],
  "description": "A skate-size reservation for Glidewell ice rink, with native size radios and a bring-your-own-socks checkbox. Use it in a rink hire booking.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["Familjen Grotesk:wght@400..700"],
  "brief": {
    "layout": "288px-wide panel, 352px from 640px, with 24px corners and 20px padding. Brand and 24px heading sit above an EU-size fieldset. Four equal-column tiles with 8px gaps pair 14px radios with 18px size numerals. A 12px fitting hint and a ruled checkbox row follow below.",
    "style": "Familjen Grotesk, teal-950 ink, diagonal bottom-right oklab gradient from orange-100 through amber-50 to teal-100 at 0/50/100 percent. Size tiles have 12px corners, 2px teal-700 borders and white 70% fills; selected tile uses teal-800 fill and white text. No shadows.",
    "states": "Native size radios and socks checkbox remain keyboard accessible with 2px current-color outlines offset 2px. Checking a size reverses the tile colors; forced colors adds a dashed selected border. Every size references the EU fitting hint. Checkbox changes natively, without automatic pricing or animation.",
    "responsive": "Width grows from 288px to 352px at 640px. Four size tiles stay in a row, the note wraps naturally, and all other dimensions remain fixed."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
