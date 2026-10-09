import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-festival-archive',
  name: 'Festival archive footer',
  category: 'footer',
  tags: ['playful', 'light'],
  description:
    'An event footer with an oversized date block, useful attendee links and archive invitation. Use it for annual festivals and conferences.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px footer has three main columns: festival wordmark and dates, attendee navigation, and next-edition signup link. A lower bordered row contains location, copyright and social links.',
    style:
      'Orange-100 background, orange-950 text, orange-300 rules and emerald-950 signup action. Festival title is 36px black sans, date is 20px bold, link groups use 14px type. No shadows.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Three columns begin at 1024px. Below that, information stacks with 32px gaps. Legal and location row wraps at every width. Signup action is fit-content with a 48px minimum height.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
