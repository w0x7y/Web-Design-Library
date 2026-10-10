import type { ComponentMeta } from '../../types'

export default {
  "slug": "footer-museum-contact",
  "name": "Museum invitation footer",
  "category": "footer",
  "tags": [
    "editorial",
    "light",
    "has-image"
  ],
  "description": "A museum footer pairing an architectural photograph with a large serif invitation and visitor hours. Fits cultural institutions with a strong editorial identity.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "Instrument Serif"
  ],
  "brief": {
    "layout": "A centred 1280px container with 48px vertical and 24px side padding. A masthead above an exhibit row with 32px gaps: 144 by 176px architectural crop with caption, large invitation and visitor-hours region. A wrapping bottom link rail has a 1px top border.",
    "style": "Instrument Serif throughout; white background, neutral-950 ink, neutral-600 photo caption, red-800 italic contact and visit links, neutral-300 rules. Heading is 44px with 1.0 line height; brand 32px with -0.05em tracking; contact is 24px italic. Image is square-cornered, no shadow.",
    "states": "Links underline on hover on devices that support hover. Every link has a 2px currentColor keyboard focus outline offset 4px, which remains visible in forced-colors mode. No animation.",
    "responsive": "Below 640px heading is 44px; from 640px it is 72px. Regions stack below 768px. At 768px photo and invitation form 144px/flexible columns and hours span both. At 1024px hours get a 256px third column and outer side padding grows to 32px."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
