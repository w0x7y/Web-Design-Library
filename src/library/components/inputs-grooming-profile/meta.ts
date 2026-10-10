import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-grooming-profile",
  "name": "Inputs — Grooming profile",
  "category": "inputs",
  "tags": ["playful", "light", "has-image"],
  "description": "A dog grooming profile for Fluffday, with a pet name and native coat-length choices. Use it to collect coat information before a grooming visit.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["Bricolage Grotesque:wght@400..700"],
  "brief": {
    "layout": "288px-wide rounded panel, 352px at 640px, with 20px padding. A 56 by 64px dog portrait shares a flex header with the brand and 24px heading. A 40px pet-name input follows at 16px. A coat-length fieldset contains two equally sized radio labels in a 12px-gap row.",
    "style": "Bricolage Grotesque on sky-100 with blue-950 text. 24px panel radius, 16px portrait radius, white name field with blue-700 boundary and 12px radius. Radio labels have blue-700 borders, 12px corners and white fills; checked choice fills sky-200 and uses a 2px blue-950 border. No shadows.",
    "states": "Native radios are visible, labelled and grouped. Checking a radio changes its label fill and border; forced colors uses a dashed checked border. Every input shows a 2px current-color keyboard outline offset 2px. No animation or hover state.",
    "responsive": "288px below 640px, 352px from 640px. Header and two-option coat row remain horizontal; only available field width increases."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
