import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-insectarium',
  name: 'Badges — Insectarium sightings',
  category: 'badges',
  tags: ['playful', 'light', 'has-image'],
  description:
    'Papilio Yard insectarium badges label a butterfly sighting with species, habitat and observation notes. Use them in visitor journals or nature-centre collections.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      'A 288px rounded panel. A 16px padded header sits over a 112px-high full-width butterfly photo. A wrapping badge row overlaps the photo by 12px inside a 16px-padded body; a 20px species title, a 12px description and two outlined trait tags follow.',
    style:
      'Bricolage Grotesque on yellow-50 with teal-950 ink, a teal-800 1px border and 20px outer radius. Sighted is teal-800 with white 12px semibold text; House 02 is yellow-200. Badge radii are 6px, trait tags are fully rounded with teal-700 borders. Photo is cropped with object-cover. No shadow.',
    states:
      'Static observation badges with textual labels and descriptive image alt text. No controls, hover changes or animation.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
