import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-pest-visit",
  "name": "Inputs — Pest visit",
  "category": "inputs",
  "tags": ["minimal", "light"],
  "description": "Numbered postcode and access-note fields for Sillguard pest inspections. Use them in a home-visit request where technicians need arrival instructions.",
  "preview": {
    "kind": "element"
  },
  "fonts": [],
  "brief": {
    "layout": "A 288px panel, 352px at 640px, with 20px padding and a 1px border. Brand and 24px heading precede two numbered field groups 16px apart. Postcode input is 40px tall; access textarea is 72px tall, with a linked 11px hint underneath.",
    "style": "White, neutral-950 ink, neutral-600 secondary copy and neutral-500 field boundaries. Default sans, square panel, 4px field corners. Heading has 32px line height and -0.025em tracking; labels are 12px semibold. Number markers use 12px monospace text. No shadows.",
    "states": "Text controls show 2px current-color outlines offset 2px on keyboard focus, including forced colors. Editable postcode and multiline access note use native behavior; the note is associated with its hint. No animation or hover changes.",
    "responsive": "Below 640px width is 288px; from 640px width is 352px. Padding, type and stacked numbered rows do not change."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
