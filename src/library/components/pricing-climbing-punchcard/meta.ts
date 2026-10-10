import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-climbing-punchcard',
  name: 'Climbing day entry and punch card',
  category: 'pricing',
  tags: ['brutalist', 'playful', 'light'],
  description:
    'A climbing-gym price section pairing an oversized day rate with a ten-visit punch card. Use it for activity venues selling drop-ins and bundles.',
  preview: { kind: 'section' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      '1280px maximum-width section with 24px side and 64px vertical padding. Ruled masthead, oversized heading, then day-entry offer and a bordered punch-card article. Card has wrapping title and saving label, ten numbered circles in five columns, a price row and full-width 48px link. Footer has a top rule.',
    style:
      'Space Grotesk on red-100, red-950 ink, 2px rules. White card has 24px padding and an 8px solid dark-red offset shadow. Heading 48px bold with line height 1; day rate 96px bold with -0.06em tracking, bundle rate 48px. Dashed circle borders and square red-950 button. Secondary copy is 16px.',
    states:
      'Day-entry link becomes red-700 on hover; bundle button becomes red-800. Both receive a 2px red-950 focus outline offset 4px. Numbered punch circles are a labelled list, not controls. No motion.',
    responsive:
      'At 640px padding becomes 80px, heading 72px, day rate 144px and card padding 32px. At 1024px offers use equal columns with 80px gap and vertical centring. Below that they stack with 40px gap. Circles shrink with the card; price row wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
