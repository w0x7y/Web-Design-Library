import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-emergency-flow',
  name: 'Emergency department flow',
  category: 'dashboard',
  tags: ['corporate', 'minimal', 'light'],
  description:
    'A hospital emergency-department board with treatment-space occupancy, pathway queues and shift coordination. Use it for an internal clinical operations overview.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..600'],
  brief: {
    layout:
      '1280px content width, 16px horizontal and 32px vertical section padding. A wrapping header and 24px bottom rule precede a 20px-padded occupancy strip. Twenty-four 24px-high bed blocks sit in 8 columns. Below, four 16px-padded queue rows use a 48px count column and flexible care description, beside a shift ledger. 24px gaps separate major regions.',
    style:
      'IBM Plex Sans with 30px semibold title and counts, 16px row titles, 14px details and 12px labels. White canvas, blue-950 ink, blue-800 metadata, blue-200 borders. Queue rows have 8px radii. Resuscitation has a red-50 fill, red-300 border and red-900 text. The shift rail uses blue-50. Occupied beds have blue-800 fill; free beds have blue-400 outlines and white fill. No shadows.',
    states:
      'A native transfer-handover details element opens its note. Summary underlines on hover and has a 2px current-color focus outline offset 2px. Every queue has a written status; the decorative bed grid is aria-hidden and its 18 of 24 total is visible text. No animation.',
    responsive:
      'At 640px outer horizontal padding grows to 32px, beds use 12 columns, and queue status moves into a third column. At 768px the occupancy strip splits into a 192px label and flexible grid. At 1024px care pathways and the 288px shift rail sit side by side. Everything stacks and wraps at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
