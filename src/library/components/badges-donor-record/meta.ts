import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-donor-record',
  name: 'Badges — Donor record',
  category: 'badges',
  tags: ['corporate', 'light'],
  description:
    'HemaVale donor-record badges combine a lifetime donation count, blood group and appointment status. Use them in a blood-donation member account.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A 288px card with 20px padding and 16px radius. The 12px brand sits above a count panel with a 48px number and 12px caption. Two equally sized status badges form a grid after 20px, followed by a date strip after 16px.',
    style:
      'Manrope, white background, red-950 text and red-200 1px border. The count panel uses red-50 with an 8px radius and 16px padding. Blood-group badge is red-800 with white text; appointment badge is red-50 with red-950 text and a red-200 border. No shadow.',
    states:
      'Static member information with no hover, focus or motion. The blood group and appointment status are written in text; the large count includes its unit.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
