import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-festival-ticket',
  name: 'Festival ticket navigation',
  category: 'navbar',
  tags: ['playful', 'light'],
  description:
    'A festival header with an early-bird announcement, two-line wordmark, ticket action, dates and venue. Use it for creative festivals and community gatherings.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'Full-width announcement has 24px horizontal and 12px vertical padding. Centered 1152px content has 24px horizontal padding. Main row has 24px vertical padding and gap, pairing a two-line wordmark with three links and a 44px-tall ticket pill with 20px horizontal padding, 16px gap and arrow. Bottom date and venue row has a top hairline, 16px vertical padding and 8px gap.',
    style:
      'Default sans on lime-50 with emerald-950 ink; announcement is lime-200 with 12px semibold text. Wordmark is 30px black-weight sans with 0.9 line-height and -0.025em tracking. Navigation is 14px semibold. Ticket pill has orange-700 fill, white ink and a 16px arrow. Date and venue are 12px monospace above an emerald-950 border. No shadows.',
    states:
      'Brand turns orange-700 on hover, ordinary navigation links underline and ticket pill fills orange-800. All links show a 2px zinc-950 keyboard outline offset 2px, including forced colours. No transitions.',
    responsive:
      'Main row stacks below 768px and becomes a centered justified row at 768px. Navigation wraps at every width. Date and venue stack below 640px and become a justified row at 640px, retaining wrapping text.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
