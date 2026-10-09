import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-service-contract',
  name: 'Service contract FAQ',
  category: 'faq',
  tags: ['minimal', 'light'],
  description:
    'A project FAQ with an introductory scope note and four open answer rows. Use it for agencies and professional services where contract details matter.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px grid uses 24px side and 80px vertical padding and a 40px gap. The introduction has an uppercase label, h2 after 20px, and scope note after 28px with 20px padding. Four always-visible articles have 24px vertical padding and top dividers; the last also has a bottom divider. Each answer sits 12px below its question.',
    style:
      'White canvas, zinc-950 ink, zinc-600 body copy and 1px zinc-200 separators. The 12px semibold uppercase eyebrow is zinc-500 with 0.1em tracking. The h2 is 36px semibold with 1.25 line height and -0.025em tracking. The zinc-50 scope note has a 12px radius, 14px semibold promise and 14px body text. Question headings are 20px medium with 28px line height. Body paragraphs have 1.625 line height. No shadows.',
    states:
      'All answers are visible. This section has no controls, hover states or animations. Semantic h2 and h3 headings establish the reading order.',
    responsive:
      'The introduction and answers stack below 1024px with a 40px gap. From 1024px the grid uses 1fr and 2fr columns with an 80px gap. Questions remain stacked, and all text wraps naturally with constant 24px side and 80px vertical padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
