import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-member-wall',
  name: 'Member story wall',
  category: 'testimonials',
  tags: ['playful', 'light'],
  description:
    'A community testimonial section with three personal stories and a compact member tally. Use it for clubs, creative spaces and local communities.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px pale yellow section has an introductory column with a 2800-member counter and three story cards in a two-column grid. The first story spans both grid columns, while two smaller stories sit beneath.',
    style:
      'Amber-50 background, amber-950 text, orange-100 lead story, lime-100 and sky-100 secondary stories. Cards have 24px radius, 24px padding, 20px quote text and initial badges.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Intro and story wall become side by side at 1024px. Story cards stack on phones and form two columns at 640px. The lead spans both columns above 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
