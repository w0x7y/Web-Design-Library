import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-design-notes',
  name: 'Design process article card',
  category: 'blog-card',
  tags: ['minimal', 'light'],
  description:
    'An illustrated design article card with a process diagram, category label and reading time. Use it for product design blogs and learning resource indexes.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px article, 320px from 640px, with a 112px blue process-illustration panel and 16px information body. A category label, 20px linked headline and 12px summary lead into a ruled byline and reading-time row.',
    style:
      'White body with slate-200 border and 12px corners. Sky-100 artwork panel, sky-800 accents and slate-950 headline. An inline circle-to-square-to-diamond diagram uses accessible text content elsewhere to explain the article topic.',
    states:
      'The headline link becomes sky-800 on hover and has a 2px sky-800 focus outline with 2px offset. The diagram is decorative and does not animate.',
    responsive:
      'The fixed card width grows from 288px to 320px at 640px. Headline and summary wrap in the body; artwork and metadata keep their arrangement.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
