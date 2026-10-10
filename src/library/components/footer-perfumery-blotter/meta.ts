import type { ComponentMeta } from '../../types'

export default {
  "slug": "footer-perfumery-blotter",
  "name": "Perfumery blotter footer",
  "tags": [
    "editorial",
    "minimal",
    "dark",
    "has-image"
  ],
  "fonts": [
    "Cormorant Garamond:ital,wght@0,400;1,400"
  ],
  "description": "A dark independent-perfumery footer with a bottle photograph, a serif scent invitation and numbered fragrance notes. Use it for fragrance houses and small beauty brands.",
  "brief": {
    "layout": "1280px container with 48px vertical and 24px side padding. Three regions separated by 40px gaps: brand and scent invitation, a 256px-high bottle photograph with caption, and a double-ruled scent-note list. Collection and policy navigation precede the copyright in a bottom grid 40px below the main regions.",
    "style": "Stone-950 canvas, orange-100 Cormorant Garamond text, stone-300 supporting copy and 1px orange-100/30 rules. Heading is 44px with 1.05 leading; its closing phrase is italic. Brand is 32px uppercase with 0.12em tracking, contact 24px italic, notes 20px. Use Tailwind font-sans for 14px body and 12px labels, captions and bottom navigation. Image has square corners; no shadows or radii.",
    "states": "Navigation and brand links underline on hover-capable devices. The underlined discovery action turns white on hover. Every link shows a 2px currentColor keyboard outline offset 4px, including forced colors. Notes are a semantic list. No motion.",
    "responsive": "Below 768px main regions stack. Heading grows from 44px to 64px at 640px. At 768px invitation and photo form flexible/240px columns and notes span both; bottom navigation becomes 1fr/auto columns with copyright spanning both. At 1024px notes move into a 192px third column and outer side padding grows to 32px. Navigation wraps at every width."
  },
  "category": "footer",
  "preview": {
    "kind": "section"
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
