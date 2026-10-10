import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-jazz-table',
  name: 'Jazz club table reservation',
  category: 'cta',
  description:
    'A jazz club CTA with a live trumpet photograph, table reservation action and clear set times and cover price. Use it to promote an evening of live music.',
  tags: ['minimal', 'dark', 'has-image'],
  preview: { kind: 'section' },
  fonts: ['DM Sans:wght@400..700'],
  brief: {
    layout:
      '1280px maximum-width black section with 24px horizontal and 56px vertical padding. Small brand/session masthead above a grid with 40px top margin and 32px gaps. Text, a square performance photograph and a two-detail definition list form the body.',
    style:
      'DM Sans, zinc-950 background, zinc-100 headings, zinc-300 copy and zinc-700 show-details rule. Heading 44px regular with 1.05 leading and -0.025em tracking; body 16px/28px. Performance photo has 24px corners and object-cover crop. White-toned pill action with zinc-950 14px semibold label and 48px minimum height. No shadows.',
    states:
      'Reservation action changes from zinc-100 to white on hover-capable devices. Focus has a 2px white outline offset 4px. No motion.',
    responsive:
      'At 640px heading becomes 56px and container padding becomes 80px vertical and 32px horizontal. At 1024px body becomes 1.2:1:.7 columns; show-details rule moves from top to left with 24px left padding. Below 1024px content stacks.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
