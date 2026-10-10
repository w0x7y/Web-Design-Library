import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-archery-rounds',
  name: 'Dropdowns — Archery round directory',
  category: 'dropdowns',
  tags: ['corporate', 'minimal', 'light'],
  description:
    'An archery-league round dropdown for Arrowcount, with nested indoor and outdoor disclosures and discipline-specific round links.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px card with 16px padding. A 14px brand and 10px league label sit above a divider. An 18px summary opens two stacked bordered round disclosures with 8px gaps. Each nested summary uses 12px padding and a 14px chevron. Indoor begins open with two links beside arrow counts on a left green rule; outdoor begins closed. A gold-toned series strip ends the directory.',
    style:
      'Default system sans, stone-50 panel, green-950 text, green-800 1px outer border and 8px radius. Nested rounds are white with 6px radius and green-800 borders at 40%. Nested summary and links use 12px text; arrow counts 10px green-800. Inner navigation spine is 2px green-800. Footer amber-100 with green-900 10px text and 2px radius. No shadows.',
    states:
      'Outer disclosure begins open. Nested details share a name so opening Outdoor closes Indoor natively. Each nested chevron responds only to its own open state. Discipline links fill green-50 on hover and navigate to host round anchors. Styled lists use role=list. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.',
    responsive:
      'Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
