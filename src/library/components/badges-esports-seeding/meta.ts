import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-esports-seeding',
  name: 'Badges — Esports seeding',
  category: 'badges',
  tags: ['brutalist', 'dark'],
  description:
    'Rift Circuit esports badges combine a prominent seed number, qualifier status and match-format stamps. Use them on tournament team records.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400..900'],
  brief: {
    layout:
      'A 288px square-edged panel with 20px padding and 2px fuchsia border. A 12px event strip sits above a split seeding badge: an 80px numeral on the left and a 20px team label on the right. Three rectangular stamps wrap below after 20px, then a bracket-position footer.',
    style:
      'Archivo on black with white text and fuchsia-400 accents. The seed number is 80px, weight 900, tight tracking and line-height 1. The qualifier badge is fuchsia-400 with black ink; format and stage tags have 1px white borders. Header and footer use white hairlines. No radii or shadows.',
    states:
      'Static tournament identity with no controls, hover changes or motion. Seeding, qualification and stage are all written in text.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
