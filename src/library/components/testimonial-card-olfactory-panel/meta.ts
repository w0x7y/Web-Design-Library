import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-olfactory-panel',
  name: 'Fragrance panel endorsement',
  category: 'testimonial-card',
  tags: ['corporate', 'dark'],
  description:
    'A fragrance maker endorsement for Nosebench sensory testing, with panel and application facts beneath the quote. Use it for specialist product-research services.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with 20px padding, a 12px radius and a 1px border. A split company and panel masthead precedes a 20px quote after 20px, two definition-list rows after 20px and the author caption after 16px.',
    style:
      'Default sans stack, rose-50 text on rose-950, rose-700 hairlines and rose-200 supporting labels. The panel tag is a small 4px-radius outlined badge. Quote is 20px/28px and medium weight; evaluation rows and credit are 12px.',
    states:
      'No controls, hover or animation. The evaluation facts are a semantic definition list with explicit labels for panel and application.',
    responsive:
      'Width is 288px below 640px, 352px from 640px. Type, padding and the two aligned definition-list rows remain unchanged.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
