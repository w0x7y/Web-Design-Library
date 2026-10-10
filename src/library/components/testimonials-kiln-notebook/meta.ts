import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-kiln-notebook',
  name: 'Notes from the kiln',
  category: 'testimonials',
  tags: ['editorial', 'minimal', 'light', 'has-image'],
  description:
    'A maker notebook with a student portrait and two handwritten-style class observations. Use it for a ceramics school or craft workshop.',
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400..600'],
  brief: {
    layout:
      'A 1280px open-notebook layout with 24px phone gutters and 64px vertical padding, 40px gutters from 640px and 96px padding from 1024px. A 240px maker column sits beside a wider quotation at 768px. Two marginal notes form equal columns from 640px.',
    style:
      'Orange-50 paper, stone-950 ink and orange-800 labels. Fraunces 36px title and 30px quote, 48px and 36px from 640px. A 1px stone-300 notebook rule, square 112px portrait, sans-serif 14px captions. No shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Below 768px the maker appears above the quote; from 768px use 240px and flexible columns with a 48px gap. Notes become two columns at 640px. Title and quotation sizes increase at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
