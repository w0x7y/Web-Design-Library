import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-bookshop-circle',
  name: 'Independent bookshop reader circle',
  category: 'cta',
  description:
    'An independent bookshop membership invitation with a shelf photograph, serif statement and understated signup link. Use it for a monthly book subscription and reading group.',
  tags: ['editorial', 'light', 'has-image'],
  preview: { kind: 'section' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      '1280px maximum-width section with 24px horizontal and 56px vertical padding. A captioned photograph precedes a vertically centered text column. The lower action rail has a 1px stone-300 top border, 24px top padding and 20px gap.',
    style:
      'Instrument Serif on stone-50, stone-950 headings, stone-700 body, amber-800 eyebrow. Heading is 48px regular with 1.05 leading, body is 20px with 28px leading. Labels and link use system sans. Square image, no radius or shadow. Membership link is 14px semibold, underlined with 8px offset.',
    states:
      'Membership link changes to amber-800 on hover-capable devices and shows a 2px stone-950 outline offset 4px on keyboard focus. No motion.',
    responsive:
      'At 640px heading becomes 72px and the price/link rail forms a row. At 1024px the layout becomes 1:1.6 columns with 64px gap, padding 80px vertical and 32px horizontal, and image changes from 4:3 to 3:4.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
