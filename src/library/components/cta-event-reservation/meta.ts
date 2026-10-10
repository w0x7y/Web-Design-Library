import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-event-reservation',
  name: 'Event reservation call to action',
  category: 'cta',
  tags: ['playful', 'light'],
  description:
    'A workshop reservation banner with a ticket-like date panel and clear booking action. Use it for small in-person events and creative classes.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container with 24px side and 64px vertical padding, centered grid items and a 40px gap. Event eyebrow, two-line heading, 448px-wide invitation and capacity note precede a ticket. Ticket has 24px padding, a date block, event title, time/venue, price and a full-width booking link with 48px minimum height and a 16px arrow.',
    style:
      'Lime-100 canvas and emerald-950 system sans type. Ticket is white with a 2px emerald-950 border and 16px radius. Heading is 36px bold with 1.25 line height and -0.025em tracking. Date number is 48px black weight with 1.0 line height; month is 12px bold uppercase and weekday is 12px. Event title is 20px bold, details are 14px and price is semibold. Booking link is an orange-700 pill with white semibold text, 20px side padding and 12px icon gap.',
    states:
      'Booking link fills orange-800 on hover on devices that support hover. Keyboard focus shows a 2px zinc-950 outline offset 2px. No transitions or animations.',
    responsive:
      'Below 1024px the invitation and ticket stack. At 640px heading becomes 48px, ticket date/details form a centered row with a 24px gap, and the date gains a 1px dashed emerald-950 right divider with 24px right padding. At 1024px the main grid becomes 1.2fr / 1fr columns. Booking link stays full width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
