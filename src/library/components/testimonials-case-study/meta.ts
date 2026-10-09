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
      'A centered 1152px container with 24px side and 80px vertical padding. A quote panel precedes a story column with eyebrow, heading, paragraph, three metric rows and a case-study link. The grid gap is 40px. Quote attribution has a 44px initials circle and a name/role block separated by 12px. Metrics have 20px vertical padding and a 20px horizontal gap; values appear before their labels.',
    style:
      'Slate-50 canvas and slate-950 system sans text. The blue-950 quote panel has a 16px radius, 24px padding and white text; its decorative 60px system-serif quotation mark is sky-300. Quote text is 24px medium, 1.625 line height and -0.025em tracking. The heading is 30px semibold with 1.25 line height, metric values are 36px semibold blue-700, descriptions are 14px slate-600 and separators are 1px slate-200. Attribution uses 14px semibold names, 12px blue-200 roles and a blue-800 initials circle.',
    states:
      'The case-study link underlines on hover on devices that support hover. Keyboard focus shows a 2px zinc-950 outline offset 2px. No transitions or animations.',
    responsive:
      'Below 1024px the quote and story stack. At 640px the quote panel padding becomes 40px, quote text becomes 30px and heading becomes 36px. At 1024px the container becomes two equal columns with a 64px gap. Metric labels wrap below values when necessary.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
