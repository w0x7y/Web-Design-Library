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
      'A 288px article, 320px from 640px, with a 112px cover including its 2px bottom rule and 20px horizontal padding. A space-between row pairs decorative Q&A typography with an issue badge. The 16px-padded body contains a guest eyebrow, linked headline after 8px, introduction after another 8px and semantic date/reading time after 16px.',
    style:
      'White card with a 2px indigo-950 frame and 16px corners; orange-200 cover with 14px top corners. No shadow. Indigo-950 60px italic system-serif Q&A with 60px line height and -0.025em tracking; its ampersand is 30px with 36px line height and 4px horizontal padding. The fully rounded issue badge has a 1px indigo-950 border, 10px horizontal and 4px vertical padding and 10px semibold text. Default-sans body: indigo-700 10px bold uppercase eyebrow at 0.14em tracking; indigo-950 20px bold headline with 28px line height and -0.025em tracking; indigo-800 12px introduction with 20px line height; indigo-700 11px medium metadata. Link corners are 4px.',
    states:
      'The linked headline changes to orange-800 on hover and gets a 2px indigo-950 outline offset 2px for keyboard focus. The issue badge is plain content; no controls or motion are added to the cover.',
    responsive:
      'The fixed width changes from 288px to 320px at 640px. Headline and introduction wrap naturally, while cover typography and issue badge stay side by side.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
