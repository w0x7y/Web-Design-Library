import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-festival-ticket',
  name: 'Festival ticket navigation',
  category: 'navbar',
  tags: ['playful', 'light'],
  description:
    'An event header with an announcement strip, oversized badge and ticket action. Use it for creative festivals and community gatherings.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A lime-200 announcement bar introduces the event. A 1152px main area pairs a two-line bold festival wordmark with navigation links and an orange-700 ticket button; a bottom metadata line lists dates and venue.',
    style:
      'Lime-50 background, emerald-950 ink, orange-700 button and emerald-950 hairline. Wordmark is 30px bold sans, ticket uses a small round arrow inset. Navigation has 14px semibold type.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Main area stacks below 768px. All links wrap in a flexible row. Event metadata stacks below 640px and becomes a justified row above that width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
