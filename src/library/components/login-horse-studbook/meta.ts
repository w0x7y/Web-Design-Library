import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-horse-studbook',
  name: "Equine studbook access",
  category: 'login',
  tags: ["editorial","light","has-image"],
  description: "A Bridlefolio breeder login with a panoramic grey-horse photograph, fine olive rules and a serif record-keeping introduction. Use it for equine pedigree and breeding programmes.",
  preview: { kind: 'section' },
  fonts: ["Instrument Serif"],
  brief: {
    layout: "A 1152px container padded 40px vertical/24px horizontal. Wrapping 36px wordmark and record label sit above a bottom rule. A 176px-high full-width horse photograph has 24px top margin and wrapping caption. Below, a top-ruled title/form grid has 32px top margin/padding and 32px gaps. Form gaps are 20px; controls 48px high.",
    style: "Instrument Serif throughout; lime-50 page/fields, lime-950 text and submit, lime-900 rules/field borders. Main heading is 48px with 1.05 leading and regular weight; introductory copy is 18px/28px. Inputs are square with 1px boundaries; button is square with lime-50 14px semibold text. Photograph is a 50%/25% cover crop, without radius or shadows.",
    states: "Submit becomes lime-800 on hover, and has a 2px lime-900 focus outline offset 4px for contrast on the pale page. Fields/recovery link use 2px current-color keyboard outlines offset 4px; forced-color outlines remain visible. Email references the breeding-programme introduction; required fields use native autocomplete. Photo has descriptive alt text. No animation.",
    responsive: "From 640px padding becomes 56px vertical/40px horizontal, photo height 288px and headline 60px. From 1024px introduction/form become 1.3:1 columns with 80px gap. Below this title precedes credentials; caption and masthead wrap to fit 320px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
