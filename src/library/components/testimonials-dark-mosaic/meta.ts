import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-dark-mosaic',
  name: 'Dark customer quote mosaic',
  category: 'testimonials',
  tags: ['dark', 'minimal'],
  description:
    'A varied quote layout for technical customer feedback with one lead story and two short remarks. Use it for developer and productivity products.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px container introduces the section, then uses a two-column layout with a large lead quote on the left and two stacked short quotes on the right. Each panel contains role attribution.',
    style:
      'Zinc-950 background, zinc-900 panels, zinc-700 borders and lime-300 accents. Lead quote is 30px, short quotes are 20px. Panels have 16px radii and 32px padding; the lead panel has a lime top border.',
    states:
      'This quote mosaic has no controls or interactive states. Text uses high contrast and the lead quote uses both border weight and layout for emphasis.',
    responsive:
      'Two-column mosaic begins at 768px. Lead quote is 24px on phones and 30px at 640px. Right panels stack at every width and content determines height.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
