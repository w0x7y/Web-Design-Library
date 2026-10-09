import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-case-study',
  name: 'Customer outcome quote',
  category: 'testimonial-card',
  tags: ['dark', 'corporate'],
  description:
    'A dark customer quote led by a measurable outcome and a link to the complete case study. Use it in business software landing pages and customer galleries.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px figure, 320px from 640px, with 20px padding. A company eyebrow leads into an outcome block 16px below, containing a 48px number with adjacent 24px percent sign and a label 4px below. A bottom rule sits after 16px padding. The quote and attribution each start after 16px; the author role has a 4px top margin. A space-between case-study link and 14px arrow finish the card after 20px.',
    style:
      'Slate-950 surface with 16px corners and no shadow. Default sans: cyan-300 12px semibold uppercase company label with 16px line height and 0.16em tracking; white 48px semibold tabular metric with 48px line height and -0.025em tracking, and 24px percent sign with 32px line height. The 12px slate-300 explanation has 16px line height. Slate-700 divider, slate-100 16px quote with 24px line height, 12px semibold white name and slate-400 role with 16px line height. The cyan-300 12px semibold link has 4px corners.',
    states:
      'The case-study link turns white on hover and gets a 2px cyan-300 outline with 2px offset on keyboard focus. The card and metric remain static.',
    responsive:
      'Fixed width changes from 288px to 320px at 640px. Quote and supporting text wrap, with the outcome number always kept prominent at the top.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
