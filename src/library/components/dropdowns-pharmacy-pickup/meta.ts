import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-pharmacy-pickup',
  name: 'Dropdowns — Pharmacy collection',
  category: 'dropdowns',
  tags: ['minimal', 'corporate', 'light'],
  description:
    'A pharmacy collection-time dropdown for Morrow Dose, with selectable half-hour slots and a prescription collection reminder.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400;500;600;700'],
  brief: {
    layout:
      'A 288px card with 16px padding. An 11px brand and branch row precedes a padded summary with a 14px title and 12px subtitle. The open panel contains three equal-width time-slot radio tiles in a row with 8px gaps, then a ruled collection reminder.',
    style:
      'IBM Plex Sans, white background, zinc-900 text, teal-800 1px border and 12px outer radius. Trigger is teal-50 with a 6px radius and 12px padding. Radio tiles have zinc-300 borders, 6px radii, 12px vertical padding and 14px native radios; selected tile is teal-50 with teal-800 border. Footnote is 12px zinc-600 with 20px line height.',
    states:
      'Native radio group starts at 13:00, supports arrow keys and keeps a native checked mark. aria-describedby associates the collection reminder with the group. Unselected tiles become zinc-50 on hover; selected tiles keep teal-50. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.',
    responsive:
      'Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
