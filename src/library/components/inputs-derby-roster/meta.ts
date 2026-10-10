import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-derby-roster",
  "name": "Inputs — Derby roster",
  "category": "inputs",
  "tags": ["playful", "dark"],
  "description": "A roller-derby roster card for Jamjar league, with a skate alias, jersey number and position selector. Use it during team registration.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["Syne:wght@400..700"],
  "brief": {
    "layout": "288px-wide card, 352px at 640px, with 20px padding and 24px radius. Header has a 24px league title and a decorative 48px tilted jersey badge. A 44px alias input precedes a grid with a 80px jersey-number column and flexible position column, separated by 12px.",
    "style": "Syne, fuchsia-950 background, pink-100 text and pink-200 jersey badge. White alias field with fuchsia-950 ink, 12px radius and pink-300 border. Bottom fields use transparent fills, 8px corners and pink-300 boundaries. Jersey badge rotates 6 degrees; no shadow.",
    "states": "All inputs and native select show 2px current-color keyboard outlines offset 2px. Skate alias uses 24-character limit; jersey field uses numeric input mode with a four-digit pattern and max length. Dark native controls. Badge is decorative and aria-hidden; no motion or authored hover states.",
    "responsive": "Width changes from 288px to 352px at 640px. Jersey column remains 80px and the position selector takes remaining space without overflowing."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
