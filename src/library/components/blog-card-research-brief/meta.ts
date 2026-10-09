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
      'A 288px article, 320px from 640px, with a 2px black frame. A space-between report strip has 16px horizontal and 8px vertical padding and a 2px bottom rule. A 96px chart panel has 24px horizontal padding, 16px top padding and gaps, and a 2px bottom rule. Four equal-width bars align to the bottom at heights 32px, 48px, 64px and 80px. The body has 16px padding: linked headline, summary after 12px, then a space-between reading-time/date row after 16px with a 1px rule, 12px top padding and 12px gap.',
    style:
      'Square corners, white paper, black frame and yellow-300 report strip, without shadow. The first two chart bars are neutral-100, the third neutral-300; these have 1px black top and side borders. The tallest bar is solid black without borders. Default-sans 20px bold headline has 24px line height and -0.025em tracking. Neutral-600 12px summary has 20px line height. Report metadata uses 10px uppercase monospace with 0.05em tracking; footer metadata uses 10px monospace. Link corners are 4px with a 4px underline offset.',
    states:
      'The headline gets an underline on hover and shows a 2px black keyboard outline with 2px offset. The chart is decorative cover art and the article title carries the meaning. There is no animation.',
    responsive:
      'The width is 288px below 640px and 320px above. Chart bars share the cover width, the headline wraps and metadata remains in a short two-part row.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
