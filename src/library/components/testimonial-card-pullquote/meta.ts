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
      'A 288px figure, 320px from 640px, with 20px horizontal and 24px vertical padding and 1px top and bottom rules. A small editorial eyebrow leads into a quote after 20px; the quote has a 2px left rule and 16px left padding. An author row starts 24px below with a 40px initials circle, 12px gap, name and role. The role has a 4px top margin.',
    style:
      'Warm #f7f4ec paper with square corners, stone-300 horizontal rules and stone-900 text and quote rule. System-serif 20px quote with 28px line height and 18px initials with 28px line height. The stone-600 eyebrow is 10px uppercase monospace with 0.16em tracking. The stone-200 initials circle is fully rounded. Attribution uses default sans: 12px semibold name with 16px line height and 11px stone-600 role. No shadow.',
    states:
      'The quote is static and contains no controls, hover states or animation. The initials circle is decorative because the full author name appears beside it.',
    responsive:
      'The fixed width grows from 288px to 320px at 640px. Quote and attribution wrap within the same single-column composition at all widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
