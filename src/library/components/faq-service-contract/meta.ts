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
      'A 1152px two-column layout has a 36px title and small project promise on the left, and four question-answer rows on the right. Each row has a 20px heading, answer paragraph and thin top separator.',
    style:
      'White background, zinc-950 text, zinc-600 body and zinc-200 borders. Left note is a zinc-50 block with 12px radius and 20px padding. Typography is default sans without shadows.',
    states:
      'All answers are visible and this section has no controls or interactive states. The top borders and question headings provide a predictable reading order.',
    responsive:
      'Columns begin at 1024px. Rows stay stacked. Heading, notes and answers all wrap naturally; container uses 24px side and 80px vertical padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
