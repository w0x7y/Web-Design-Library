import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-event-reservation',
  name: 'Event reservation call to action',
  category: 'cta',
  tags: ['playful', 'light'],
  description:
    'A workshop reservation banner with a ticket-like date panel and clear booking action. Use it for small in-person events and creative classes.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px lime section pairs event title and description with a bordered date ticket. Ticket has a date block, time and venue details, and an orange booking action. Section padding is 64px vertical.',
    style:
      'Lime-100 background, emerald-950 text, orange-700 action, white ticket with 2px emerald-950 outline and a dashed internal divider. Main heading is 48px bold sans and date number is 48px.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Columns start at 1024px. Ticket date and details stack below 640px, otherwise sit side by side. Title is 36px on phones. Booking button remains full width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
