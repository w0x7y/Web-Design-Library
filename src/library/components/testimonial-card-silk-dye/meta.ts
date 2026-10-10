import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-silk-dye',
  name: 'Textile dyer portrait quote',
  category: 'testimonial-card',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'A textile dye-house endorsement for Selvedge Eight, with a tall portrait strip and a compact serif quote. Use it for specialist material and manufacturing services.',
  preview: { kind: 'element' },
  fonts: ['Fraunces:wght@400..600'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with a 64px full-height portrait at the left. Content and the direct-child figcaption have a 64px left margin and 20px horizontal padding. A tiny maker label precedes an 18px serif quote after 16px; the caption has 20px bottom padding.',
    style:
      'Fraunces for the quote at 18px/26px, default sans for labels and author. Stone-50 background, stone-900 quote, orange-900 label and stone-700 credit, a 1px stone-200 border and square corners. Portrait is object-cover cropped.',
    states:
      'Static quote with no controls, hover or animation. Empty portrait alt leaves author naming to the adjacent caption.',
    responsive:
      'The root expands from 288px to 352px at 640px. The left portrait stays 64px wide; text sizes and padding do not change.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
