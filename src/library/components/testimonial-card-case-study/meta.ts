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
      'A 288px quote card, 320px at 640px, with 20px padding. A customer-company eyebrow tops a 48px outcome number and small metric label under a horizontal rule. A 16px quote, named attribution and case-study link follow in one column.',
    style:
      'Slate-950 background and 16px corners. White metric, slate-100 quote, slate-300 metric explanation and slate-400 author role. Cyan-300 eyebrow and link provide clear accent contrast.',
    states:
      'The case-study link turns white on hover and gets a 2px cyan-300 outline with 2px offset on keyboard focus. The card and metric remain static.',
    responsive:
      'Fixed width changes from 288px to 320px at 640px. Quote and supporting text wrap, with the outcome number always kept prominent at the top.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
