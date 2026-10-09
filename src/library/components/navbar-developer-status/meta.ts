import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-developer-status',
  name: 'Developer status navigation',
  category: 'navbar',
  tags: ['dark', 'minimal'],
  description:
    'A dark documentation header with a release badge, service status and native search form. Use it for technical documentation portals.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1280px header with 20px horizontal padding. Top row has 20px vertical padding and 24px gap, pairing brand and release badge with a search form and status. Brand group has 16px wrapping gap; utilities have 20px wrapping gap. Search field and button are 40px tall with 8px gap. A lower navigation row contains five links, 28px horizontal and 16px vertical gaps, with 16px vertical padding.',
    style:
      'Default sans on zinc-950 with white ink. Brand is 20px bold monospace with emerald-300 slash. Version badge is zinc-400 monospace with a zinc-700 border and 4px corners. Search field has zinc-900 fill, zinc-500 border, zinc-400 placeholder and 6px corners. Navigation hairline is zinc-800; current Overview link is semibold emerald-300, other links zinc-300. Status uses a decorative 8px emerald-300 dot plus readable text.',
    states:
      'Every control has a 2px white keyboard outline offset 2px, including forced colours. Brand turns emerald-300 on hover, search button fills zinc-800, Overview underlines and other links turn white. Overview is marked aria-current page. Native search submits GET. No transitions.',
    responsive:
      'Below 640px search fills available width with an input that can shrink to zero. At 640px horizontal padding becomes 32px, form width auto and input width 240px. Top row stacks below 768px, then changes to a centered justified row. Brand, utility and lower link groups wrap at all widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
