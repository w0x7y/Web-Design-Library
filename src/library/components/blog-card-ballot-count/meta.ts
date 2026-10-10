import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-ballot-count',
  name: 'Counting-table methods card',
  category: 'blog-card',
  tags: ['brutalist', 'light'],
  description:
    'A civic counting methods card with an oversized three-step index and a tightly framed article column. Use it for election equipment or public-process journals.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400..800'],
  brief: {
    layout:
      '288px card with a 2px frame. Masthead has 16px horizontal and 12px vertical padding. Body is a 72px index column and flexible 16px-padded article column divided by a 2px rule. Eyebrow precedes a title after 12px, then a summary after 12px. A process footer has a 2px top rule and 16px by 12px padding.',
    style:
      'Archivo on orange-50, orange-950 ink and frame, orange-800 small copy, orange-200 footer. Index is 36px extra-bold with 1.4 leading and -0.05em tracking; third number reverses ink and paper. Headline is 24px extra-bold at 24px leading and -0.04em tracking. 9px uppercase eyebrow, 10px bold masthead and 11px semibold footer. Square corners, no shadow.',
    states:
      'Title underlines on hover and gets a 2px orange-950 keyboard outline offset 2px. Index is decorative; the title and footer describe the process in words. No animation.',
    responsive:
      'Width changes from 288px to 352px at 640px. The 72px index stays fixed while the story column grows; the article remains in two columns at both sizes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
