import type { ComponentMeta } from '../../types'

export default {
  "slug": "blog-card-honey-harvest",
  "name": "Beekeeping harvest journal card",
  "category": "blog-card",
  "tags": [
    "editorial",
    "light",
    "has-image"
  ],
  "description": "A beekeeping harvest note with a narrow honey photograph, overlapping batch label and serif title. Use it for apiary journals and cooperative producer stories.",
  "preview": {
    "kind": "element"
  },
  "fonts": [
    "Fraunces:opsz,wght@9..144,400..600"
  ],
  "brief": {
    "layout": "288px card with 1px top and bottom rules and 20px padding. Masthead pairs brand and date. Story begins 24px below in a flexible title column and 80px photo column separated by 16px. Title follows category after 12px. Photo is 80px by 128px; caption overlaps its lower left at -8px left and -2px bottom. Summary follows story after 20px; footer after 20px with a hairline and 12px top padding.",
    "style": "Fraunces on amber-50 paper with amber-950 title, amber-900 summary and rules, amber-800 metadata. Headline is 27px at 1.1 leading and -0.03em tracking. Brand is 14px semibold, date and category 9px, summary 12px at 20px leading, footer 10px. Square corners, no shadow; footer rule amber-900 at 30%. Descriptive honey photo alt text and a semantic date.",
    "states": "Headline underlines on hover with 4px offset and shows a 2px amber-950 keyboard outline offset 2px. No animation.",
    "responsive": "Width grows from 288px to 352px at 640px. Photograph stays 80px wide; headline gains the remaining width. Metadata and typography keep their sizes."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
