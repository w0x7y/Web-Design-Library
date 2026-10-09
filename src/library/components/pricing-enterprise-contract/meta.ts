import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-enterprise-contract',
  name: 'Enterprise contract pricing',
  category: 'pricing',
  tags: ['corporate', 'light'],
  description:
    'A business pricing section with team and enterprise offers plus a shared capability list. Use it for products sold through both self-service and assisted contracts.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px section has a left introductory column and two offer cards on the right. Team card shows a per-seat rate; enterprise shows an annual contract prompt. A full-width row beneath lists three capabilities included in both.',
    style:
      'Slate-50 canvas, slate-950 headings, white cards, blue-700 actions and slate-200 borders. Cards have 12px radius and 24px padding. Heading uses 48px semibold sans at desktop.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Intro separates above the cards below 1024px. Cards stack below 640px and form two columns above. Shared capability strip changes from one column to three at 768px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
