import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-cold-chain',
  name: 'Cold-chain customer endorsement',
  category: 'testimonial-card',
  tags: ['corporate', 'light', 'has-image'],
  description:
    'A quality-team endorsement for Chillproof vaccine shipment logging, with a shipment band, inset quote and portrait credit. Use it for temperature-monitoring products.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400..600'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with 20px padding. A company heading precedes a two-cell shipment band after 16px, a 16px-padded quote after 16px and a 36px portrait credit after 16px.',
    style:
      'IBM Plex Sans, slate-950 text, white background, slate-200 border and 12px corners. The shipment strip has slate-700 labels and a cyan-700 route; quote has a cyan-50 fill, 8px corners, 18px type and 26px leading.',
    states:
      'Static testimonial with no controls, hover or animation. Empty portrait alt avoids repeating the adjacent author name; shipment facts have visible text labels.',
    responsive:
      'Width steps from 288px to 352px at 640px; spacing, quote size and portrait dimensions stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
