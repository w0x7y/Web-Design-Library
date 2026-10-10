import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-event-waitlist',
  name: 'Event waitlist ticket',
  category: 'signup',
  tags: ['brutalist', 'light'],
  description:
    'A ticket-like event waitlist with a concise email form. Use it to collect interest ahead of a creative conference or meetup.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 768px ticket in a section with 48px vertical padding. A wrapping 24px-padded monospace header sits over an announcement and email waitlist form separated by a dashed perforation. Announcement has a 36px mobile heading, description 24px below and date 32px below. Form is vertically centered with 20px gaps and 8px label gaps.',
    style:
      'Yellow-100 section and yellow-50 ticket, neutral-950 ink and 2px ticket/header borders. Heavy 36px mobile / 48px desktop sans heading with 1 line height and -0.025em tracking, 14px body, 12px bold system monospace metadata. Square input has a 1px current-color border at 60%, 12px horizontal and 10px vertical padding. Square neutral-950 submit has a 2px border and yellow-50 14px bold text. Submit includes a decorative 14px inline SVG arrow 8px after the label. No shadows.',
    states:
      'Required email input uses native validation and describes the one-announcement policy through aria-describedby. Form submits by POST. Input has 2px current-color focus outline offset 2px; submit uses stone-950. No authored hover states or motion.',
    responsive:
      'Below 768px ticket sections stack with a dashed horizontal divider; from 768px use 1.3fr/1fr columns and a vertical divider. Outer horizontal padding is 24px below 640px and 48px above. Ticket body/form padding changes from 24px to 32px at 640px; header remains 24px. Headline is 36px below 640px and 48px from 640px so long words fit the narrow ticket.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
