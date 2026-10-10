import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-language-table',
  name: 'Language exchange invitation',
  category: 'cta',
  description:
    'A friendly language-exchange CTA with offset conversation bubbles and a hosted café meetup invitation.',
  tags: ['playful', 'light'],
  preview: { kind: 'section' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      '1280px maximum-width section with 24px horizontal and 56px vertical padding. Brand above a grid with 32px top margin. Two captioned blockquotes form an offset conversation on the left; headline, pitch, action and venue note form the other region. Bubbles have 24px padding, 16px gap and 384px maximum width.',
    style:
      'Familjen Grotesk on sky-100, blue-950 ink, blue-800 captions. Bubbles are white and yellow-200 with 32px corners and one 4px corner each. Quotes are 28px medium with 1.25 leading. Heading is 44px semibold with 1.05 leading and -.025em tracking. Blue-950 pill action with white 14px semibold label. No shadows.',
    states:
      'Action becomes blue-900 on hover-capable devices and gets a 2px blue-950 outline offset 4px on keyboard focus. The French quotation has lang=fr; conversation figures are static. No animation.',
    responsive:
      'At 640px padding becomes 80px vertical and 32px horizontal, heading becomes 60px and the second bubble offset increases from 24px to 64px. At 1024px conversation and invitation become 1:1.1 columns with an 80px gap. Smaller widths stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
