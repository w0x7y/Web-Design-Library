import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-service-index',
  name: 'Service index features',
  category: 'features',
  tags: ['editorial', 'light'],
  description:
    'A numbered service index with editorial typography and deliverable summaries. Use it for design studios and professional service websites.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px layout has a compact introductory column and a wider list of four services. Each row has a small index, 30px service title, short paragraph and deliverables line with a top border.',
    style:
      'Stone-100 background, stone-950 ink, orange-800 index and stone-300 rules. Intro heading is serif at 48px; service headings are sans. No cards, shadows or decorative icons.',
    states:
      'This static service index has no controls or interaction states. All text is selectable; borders and index labels preserve clear hierarchy.',
    responsive:
      'Intro and list stack below 1024px. Service rows use a two-column number and text layout; paragraphs wrap. Intro title reduces to 36px below 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
