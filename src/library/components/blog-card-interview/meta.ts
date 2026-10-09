import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-interview',
  name: 'Creative interview card',
  category: 'blog-card',
  tags: ['playful', 'light'],
  description:
    'A colorful interview card with a typographic Q&A cover, guest name and short introduction. Use it for creator interviews and studio journals.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px interview article, 320px from 640px, framed by a 2px border with 16px corners. A 112px cover contains a 60px serif Q&A and issue badge. The 16px body has a guest/category eyebrow, 20px linked quote headline, introduction and date/reading time.',
    style:
      'White card, orange-200 cover, indigo-950 frame and bold headline. Indigo-700 metadata and indigo-800 summary. The oversized serif Q&A is decorative typography without an external font.',
    states:
      'The linked headline changes to orange-800 on hover and gets a 2px indigo-950 outline offset 2px for keyboard focus. The issue badge is plain content; no controls or motion are added to the cover.',
    responsive:
      'The fixed width changes from 288px to 320px at 640px. Headline and introduction wrap naturally, while cover typography and issue badge stay side by side.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
