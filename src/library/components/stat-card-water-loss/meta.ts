import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-water-loss',
  name: 'Water loss avoided',
  category: 'stat-card',
  tags: ['corporate', 'light'],
  description:
    'A water-utility metric for Mereworks showing the volume saved by detecting and isolating a distribution leak. Use it in a network maintenance summary.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A 288px-wide article, 320px from 640px, with 24px padding. A brand/date header precedes a 60px saved-volume figure. Two columns of daily water volumes sit below a 1px divider, followed by a full-width report link.',
    style:
      'Manrope on white with blue-950 text, cyan-700 accents and blue-100 rules. The card has a 12px radius and 1px blue-200 border. Labels are 12px, main heading 14px semibold, units 16px. The pale cyan-50 note has an 8px radius and 12px padding. No shadow.',
    states:
      'The report link underlines on hover and has a 2px blue-950 focus outline offset 2px. All numbers and improvement context are text. No motion.',
    responsive:
      'Width changes from 288px to 320px at 640px. Padding, typography and the two-column data row stay the same.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
