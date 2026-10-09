import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-event-waitlist',
  name: 'Event waitlist ticket',
  category: 'signup',
  tags: ['brutalist', 'light'],
  description:
    'A ticket-like event waitlist with a concise email form. Use it to collect interest ahead of a creative conference or meetup.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 768px event ticket with ruled header, large announcement and a narrow email waitlist section separated by a dashed perforation.',
    style:
      'Yellow-100 background and yellow-50 ticket, neutral-950 2px borders. Heavy 48px sans headline, monospace metadata and square controls.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px the ticket sections stack with a dashed horizontal divider. At 768px use 1.3fr/1fr columns and a vertical perforation; padding is 24px then 32px at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
