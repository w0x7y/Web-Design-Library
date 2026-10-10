import type { ComponentMeta } from '../../types'

export default {
  "slug": "blog-card-silk-luster",
  "name": "Silk mill material study card",
  "category": "blog-card",
  "tags": [
    "gradient",
    "editorial",
    "light"
  ],
  "description": "A silk-mill article with a folded fabric illustration, warm peach gradient and material-specification footer. Use it for textile journals and material stories.",
  "preview": {
    "kind": "element"
  },
  "fonts": [
    "Instrument Serif"
  ],
  "brief": {
    "layout": "288px card with 20px padding. Two-part header has 8px top padding. An 72px fabric-fold SVG follows after 20px, then eyebrow after 16px, headline after 8px and summary after 12px. Footer starts after 16px with a top rule, 12px top padding and a material specification beside reading time.",
    "style": "Orange-100 through rose-100 to amber-50 gradient, interpolated to bottom right in oklab. Amber-950 ink, amber-900 summary and amber-800 metadata. Top corners 48px, bottom corners 8px, no shadow. Instrument Serif 32px heading at 1.05 leading and -0.02em tracking; other text is default sans. 12px summary at 20px leading, 9px header and uppercase eyebrow, 10px material name at 16px leading. Footer rule is amber-950 at 20%.",
    "states": "Headline becomes amber-800 on hover and has a 2px amber-950 focus outline offset 2px. Fabric illustration is decorative and static.",
    "responsive": "288px below 640px and 320px from 640px. Swatch fills the inner width at fixed 72px height; type sizes and spacing stay unchanged."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
