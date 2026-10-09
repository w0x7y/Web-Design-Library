import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-developer-answers',
  name: 'Developer answers FAQ',
  category: 'faq',
  tags: ['dark', 'minimal'],
  description:
    'A technical FAQ with code-like question numbers and native disclosures. Use it for API and infrastructure product pages.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1024px container with 24px horizontal and 80px vertical padding contains an eyebrow, a two-line h2 20px below it, and three disclosure panels after 40px. Panels are 12px apart. Summaries have 20px padding, a numbered question and a nonshrinking plus sign separated by 20px. Answers have 20px side and bottom padding. A documentation row follows after 32px, with a top rule, 24px top padding and 16px gap.',
    style:
      'Zinc-950 canvas, white text, zinc-900 panels with 1px zinc-700 borders and 12px radii. The uppercase eyebrow is 12px monospace, lime-300, with 0.1em tracking. The sans-serif h2 is 36px semibold, 1.25 line height and -0.025em tracking, increasing to 48px at 640px. Question prefixes inherit the 14px medium sans-serif summary font. Answers are 14px zinc-400 with 1.625 line height. The lime-300 documentation link has a 16px arrow.',
    states:
      'The first native details panel starts open. Shared details names make panels exclusive where supported; aria-hidden monospace plus signs rotate 45 degrees when open. Summaries turn lime-300 on hover and the documentation link gains an underline. Both show 2px white focus outlines offset 2px, including in forced colors. No transitions.',
    responsive:
      'Below 640px the title is 36px and the documentation footer stacks. From 640px the title is 48px and the footer becomes a centered, space-between row. Panels remain full width, question text wraps beside the nonshrinking plus sign, and the container has constant 24px side padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
