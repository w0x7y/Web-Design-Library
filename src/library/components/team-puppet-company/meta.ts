import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-puppet-company',
  name: 'Puppet company credits',
  category: 'team',
  tags: ['playful', 'dark'],
  description:
    'A two-person theatre credit section for Stringbird Puppet Company, with inline puppet illustrations and school-booking invitation. Use it for touring performers and small theatre companies.',
  preview: { kind: 'section' },
  fonts: ['Syne:wght@400..700'],
  brief: {
    layout:
      'A 1280px container with 24px horizontal and 64px vertical padding. A 768px introduction above two puppet-stage panels and a school-booking link. Each stage contains a 192px-tall decorative SVG with visible strings, then role, name and biography with 24px padding.',
    style:
      'Cyan-950 background and cyan-50 titles, cyan-100 paragraphs, orange-200 labels. Syne throughout; bold 36px heading growing to 56px at 640px, names 32px. Orange-300 and cyan-200 illustration fields, cyan-700 1px panel borders, 80px top corners and square bottom corners. Puppets use #083344 ink.',
    states:
      'The booking link changes from orange-200 to white on hover and has a 2px orange-200 keyboard outline offset 4px. Decorative puppet SVGs are aria-hidden; complete people credits are text. No animation.',
    responsive:
      'At 640px side and biography padding become 32px and heading becomes 56px. At 768px stages form two equal columns with 24px gap. At 1024px vertical padding becomes 96px. Panels stack and the booking label wraps at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
