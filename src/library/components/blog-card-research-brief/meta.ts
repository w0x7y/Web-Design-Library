import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-research-brief',
  name: 'Research findings article card',
  category: 'blog-card',
  tags: ['brutalist', 'light'],
  description:
    'A sharply framed research article with chart artwork and a report number. Use it in product research archives and policy publications.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px research card, 320px at 640px, with a 2px black frame. A yellow report-number strip leads into a 96px decorative bar-chart panel. A 16px body contains a 20px linked headline, compact study description and ruled reading-time/date row.',
    style:
      'Square corners, white paper, black borders and yellow-300 report strip. Chart bars move from neutral-100 and neutral-300 to black. Default-sans bold headline with monospace report metadata; summary is neutral-600.',
    states:
      'The headline gets an underline on hover and shows a 2px black keyboard outline with 2px offset. The chart is decorative cover art and the article title carries the meaning. There is no animation.',
    responsive:
      'The width is 288px below 640px and 320px above. Chart bars share the cover width, the headline wraps and metadata remains in a short two-part row.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
