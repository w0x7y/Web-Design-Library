import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-shared-studio',
  name: 'Co-working member portrait quote',
  category: 'testimonial-card',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'A Common Desk co-working member endorsement with a tall portrait strip and a compact serif quote. Use it on shared workspace and membership pages.',
  preview: { kind: 'element' },
  fonts: ['Fraunces:wght@400..600'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with a 64px full-height portrait at the left. The body and direct-child figcaption have a 64px left margin and 20px horizontal padding. A 10px brand label and workspace type precede the quote after 16px; the caption has 20px bottom padding.',
    style:
      'Fraunces for the 18px/26px quote, default sans for labels and author. Stone-50 background, stone-900 quote, orange-900 brand, stone-700 supporting text and a 1px stone-200 border. Square corners, no shadow. The portrait uses object-cover. Credit is 12px/16px.',
    states:
      'Static informational figure with no controls, hover or animation. Empty portrait alt avoids repeating the adjacent member name.',
    responsive:
      'Width expands from 288px to 352px at 640px. The portrait remains 64px wide; type and padding do not change.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
