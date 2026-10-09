import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-membership-pass',
  name: 'Membership pass pricing',
  category: 'pricing',
  tags: ['editorial', 'light'],
  description:
    'A single membership offer with a benefit list and a ticket-like price panel. Use it for reading clubs, cultural memberships and small subscription products.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px container pairs a serif headline and five membership benefits with one white pricing panel. Panel has an annual label, oversized amount, signup button and cancellation note. A small member count closes the section.',
    style:
      'Amber-50 background, emerald-950 type, emerald-700 checks and stone-200 panel border. Serif 48px heading, 60px sans price, 16px radius and a dashed divider above the action.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Two columns begin at 768px. Heading is 36px on phones, 48px at 640px. Pricing panel uses 24px phone padding and 32px on larger screens. Benefit text wraps alongside 20px icons.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
