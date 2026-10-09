import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-pullquote',
  name: 'Editorial customer pull quote',
  category: 'testimonial-card',
  tags: ['editorial', 'light'],
  description:
    'An understated editorial quote with a small publication label and customer attribution. Use it beside product stories and long-form case studies.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px figure, 320px from 640px, with 20px horizontal and 24px vertical padding and top/bottom rules. An uppercase editorial label sits above a 20px serif quote indented by a 2px left rule. A 40px initials circle and two-line attribution follow after 24px.',
    style:
      'Warm #f7f4ec paper, stone-300 horizontal rules and stone-900 quote rule and text. System-serif quote and initials, monospace eyebrow and small sans attribution. No shadow or outer rounded frame.',
    states:
      'The quote is static and contains no controls, hover states or animation. The initials circle is decorative because the full author name appears beside it.',
    responsive:
      'The fixed width grows from 288px to 320px at 640px. Quote and attribution wrap within the same single-column composition at all widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
