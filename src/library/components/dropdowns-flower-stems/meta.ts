import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-flower-stems',
  name: 'Dropdowns — Flower stem grades',
  category: 'dropdowns',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'A wholesale-flower stem-grade dropdown for Stemfolio, pairing a bouquet photograph with native length selections and a minimum-order note.',
  preview: { kind: 'element' },
  fonts: ['Fraunces:wght@400;500;600;700'],
  brief: {
    layout:
      'A 288px card with 16px padding. An 80x96px arched bouquet photograph sits beside a 10px market label, 24px brand name and 12px date. Below a top rule, a 16px dropdown summary opens three equal-width stem-grade radio tiles with 8px gaps and 8px padding. A 12px minimum-order note ends the panel.',
    style:
      'Fraunces, rose-50 panel, rose-950 text, rose-300 1px border and 8px radius. The image has fully rounded top corners. Grade tiles are white with rose-300 borders and 2px radii; selected tile has a rose-900 border and rose-100 fill. Lengths use 20px tabular numerals and 10px units. Notes use rose-800 and 20px line height.',
    states:
      '60cm starts selected. Native radio keys choose a grade, with rose-100 highlight and a visible native mark. Each radio has an explicit centimetre label and the fieldset is described by the order note. No hover changes. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.',
    responsive:
      'Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
