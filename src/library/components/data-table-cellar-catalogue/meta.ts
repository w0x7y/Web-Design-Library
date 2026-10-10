import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-cellar-catalogue",
  name: "Wine cellar catalogue",
  category: "data-table",
  tags: ["editorial", "dark"],
  description: "A dark serif wine-cellar catalogue for Terroir Index with large vintages, bottle counts, rack locations and native cellar-note disclosures. Use it for a private collection inventory.",
  preview: { kind: 'section' },
  fonts: ["Instrument Serif"],
  brief: {
    layout: "1280px section with a large title, print link and hairline collection strip. A five-column table pairs a 36px vintage with wine and region, followed by bottle count, rack, cellar window and native notes. Four selections total 36 bottles.",
    style: "Instrument Serif throughout, rose-950 ground, rose-50 text, rose-200 notes, rose-700 rules and amber-200 vintages. Headline is 48px then 72px at 768px; wine names 20px, bottle counts 30px and table text 16px. Square geometry with no card fills or shadows.",
    states: "Print link and every uniquely labelled cellar-note summary have 2px currentColor keyboard outlines offset 2px and underline on hover. Each native disclosure opens its own collection note. No animation.",
    responsive: "Below 768px each selection becomes a two-column labelled record with vintage and wine spanning both columns. Wine identity is a flex row with 20px gap. At 768px a five-column table returns and section padding increases from 20px to 40px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
