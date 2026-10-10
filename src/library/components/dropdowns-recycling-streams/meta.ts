import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-recycling-streams',
  name: 'Dropdowns — Recycling intake streams',
  category: 'dropdowns',
  tags: ['brutalist', 'dark'],
  description:
    'A materials-recovery intake dropdown for Sortyard, with independent stream checkboxes and recycling material codes.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400;500;600;700'],
  brief: {
    layout:
      'A 288px rectangular panel with a 2px border and 16px padding. A small brand/depot strip precedes a 20px summary over a 2px green rule. Four checkbox rows have 4px gaps, 12px padding, a 16px checkbox, a flexible material name and a right-aligned material code. A two-line intake note sits 12px below.',
    style:
      'Space Grotesk, neutral-950 panel, neutral-50 text, neutral-400 outer border and no radii or shadows. Checkbox rows have neutral-600 borders; checked rows fill green-300 with neutral-950 text. Checkbox accent neutral-950, native dark colour scheme. Material names are 12px semibold, codes 10px system monospace, brand and note 10px; note neutral-300 with 16px line height.',
    states:
      'Paper and aluminium start checked. Checkboxes toggle independently with Space or pointer; native marks supplement the green selection fill. Group description explains material intake restrictions. No hover changes. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.',
    responsive:
      'Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
