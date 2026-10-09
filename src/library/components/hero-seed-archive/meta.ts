import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-seed-archive",
  name: "Seed archive catalog",
  category: "hero",
  tags: [
    "editorial",
    "light"
  ],
  description: "An illustrated seed-bank hero with an accession label, botanical plate and collection facts. Use it for conservation archives and specialist growing collections.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Fraunces:wght@400..600"
  ],
  brief: {
    layout: "A 1280px container padded 24px by 64px. A three-column catalog at 1024px uses 1:2:1 proportions and 40px gaps, with a narrow brand and accession column, central botanical plate and right-aligned collection introduction. Plate has 32px padding and a 4:5 SVG. Footer has a full-width top rule and wrapping collection facts.",
    style: "Lime-50 paper, lime-950 ink, lime-800 rules and lime-900 details. Fraunces 400 body and 600 headings, 40px headline at 1.15 line height. Oval specimen frame has a 160px top radius and 1px lime-800 border. Botanical drawing has dark olive branches and seed pods.",
    states: "Browse the collection underlines on hover. Link uses a 2px lime-950 focus outline offset 4px. Botanical SVG is decorative and the figure caption identifies the specimen. No animation.",
    responsive: "Below 1024px the accession, illustration and copy stack with 40px gaps. At 640px the specimen uses 3:2 aspect ratio; at 1024px it returns to 4:5 and the three columns appear. Fact row wraps naturally at 320px."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
