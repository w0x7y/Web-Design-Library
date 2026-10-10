import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-mushroom-harvest",
  "name": "Inputs — Mushroom harvest",
  "category": "inputs",
  "tags": ["editorial", "light", "has-image"],
  "description": "Photo-led harvest fields for Mycel House mushroom cultivation, pairing a growing-room lot code with weighed yield. Use it for small-farm batch records.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["Fraunces:wght@400..700"],
  "brief": {
    "layout": "288px-wide panel, 352px from 640px, with a 1px amber-800 border. A 72px-high full-width mushroom photograph precedes 20px body padding. The heading sits above a two-column lot/weight grid with 12px gap and 40px fields; a 12px note follows after 16px.",
    "style": "Fraunces, amber-50 paper, amber-950 ink and amber-800 rules. Square photo and panel, 24px medium heading, 11px uppercase field labels, 14px input text with white fills. Fields have square corners; no shadows.",
    "states": "Lot code and yield inputs show 2px current-color keyboard outlines offset 2px. Yield uses 0.01 steps and a visible kg suffix linked with aria-describedby. The lot field is tied to the room-label note. No animation or hover states.",
    "responsive": "Width changes from 288px to 352px at 640px. The photo stays 72px tall with cover cropping; the two fields remain in equal min-width-zero columns."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
