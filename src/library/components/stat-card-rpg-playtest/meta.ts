import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-rpg-playtest',
  name: 'Tabletop RPG playtest readiness',
  category: 'stat-card',
  tags: ['editorial', 'dark'],
  description:
    'An editorial playtest card for Dice & Quill, a tabletop RPG publisher, with a readiness percentage and native book-format disclosure. Use it in publishing production reports.',
  preview: { kind: 'element' },
  fonts: ['Newsreader:wght@400..700'],
  brief: {
    layout:
      'A 288px article, 352px from 640px, with 24px padding. An 11px folio header precedes a metric region after 24px, with a 2px left rule and 20px left padding. A 72px percentage with a 36px suffix sits above a 20px two-line heading and caption, each separated by 12px. Details follows after 20px with a top rule and 12px top padding; its two count rows have 8px gaps.',
    style:
      'Newsreader throughout. Rose-950 background, rose-100 text, orange-200 folio accents, rose-200 captions and rose-300 rules. Square corners, no shadow. Folio tracking is 0.1em. The percentage has 1 line height and -0.025em tracking; heading is 20px/24px, caption 12px/20px and count rows 12px/16px.',
    states:
      'The native book-format summary has a list marker, pointer cursor and 14px/20px text. It becomes orange-200 on hover-capable devices and has a 2px orange-200 focus outline offset 2px, including forced colors. Counts stay readable text. No transitions or animation.',
    responsive:
      'Width is 288px below 640px and 352px from 640px. Layout and padding remain unchanged, including the open disclosure.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
