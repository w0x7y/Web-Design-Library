import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-field-guide',
  name: 'Weekend field guide card',
  category: 'blog-card',
  tags: ['editorial', 'light'],
  description:
    'A calm outdoor reading card with a trail illustration, guide number and author note. Use it in local travel journals and nature publications.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px guide card, 320px from 640px, with a 112px landscape cover and 16px-padded body. The cover includes a small guide number. A category label sits above a 24px serif linked headline, compact standfirst and ruled author/reading-time row.',
    style:
      'Pale #eef0e6 paper, green-100 artwork backdrop and green-900 border with square corners. Illustrated hills use muted greens and a pale winding path. System-serif title contrasts with small sans metadata and monospace guide numbering.',
    states:
      'The linked headline gains an underline on hover and has a 2px green-950 focus outline offset by 2px. The cover illustration is decorative and static.',
    responsive:
      'The card grows from 288px to 320px at 640px. The landscape stays 112px tall and the title wraps within the single-column information body.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
