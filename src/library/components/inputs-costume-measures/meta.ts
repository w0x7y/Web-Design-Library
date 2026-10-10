import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-costume-measures",
  "name": "Inputs — Costume measures",
  "category": "inputs",
  "tags": ["editorial", "dark"],
  "description": "A ruled fitting card for Velvet Ledger costume hire, with chest and waist measurements plus alteration notes. Use it before a wardrobe fitting.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["Newsreader:wght@400..700"],
  "brief": {
    "layout": "288px card, 352px from 640px, with 24px padding. A small wardrobe label and 30px heading precede a two-column measurement grid with 16px gap. Each measurement has a 44px underline field and cm suffix; a 64px textarea sits below a label row, 20px later.",
    "style": "Newsreader on rose-950 with rose-100 text and rose-200 supporting copy. Rose-300 field borders, transparent measurement fields and rose-900 notes surface. 16px field labels and 24px tabular measurement values. Square corners and no shadows.",
    "states": "All inputs and textarea show 2px current-color keyboard outlines offset 2px in normal and forced colors. Measurements use 0.5cm steps from 20 to 200; cm suffixes and the optional-note hint are associated via aria-describedby. Native dark scheme. No motion.",
    "responsive": "Width grows from 288px to 352px at 640px; 24px padding and the two-column measurement row remain unchanged."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
