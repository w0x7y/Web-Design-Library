import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-case-study',
  name: 'Customer case study quote',
  category: 'testimonials',
  tags: ['corporate', 'light'],
  description:
    'A customer quote paired with measurable project outcomes and a case study action. Use it for B2B product landing pages.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px split section has a blue-950 quote panel on the left and customer context with three metrics on the right. Panel has a quote, initials avatar and attribution. Metrics are stacked rows with thin separators.',
    style:
      'Slate-50 background, slate-950 type, blue-950 quote panel and sky-300 quotation mark. Quote uses 30px text, panel has 16px radius and 32px padding. Metric values are 36px semibold.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Columns begin at 1024px. Quote size is 24px on phones and 30px at 640px. Metric rows wrap the label below the value on narrow phones.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
