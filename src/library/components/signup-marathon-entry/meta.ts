import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-marathon-entry',
  name: 'Marathon runner entry',
  category: 'signup',
  tags: ['minimal', 'dark'],
  description:
    'A Longmile marathon-entry section pairing a race-bib distance panel with runner details, expected finish time and emergency contact.',
  preview: { kind: 'section' },
  fonts: ['Barlow Condensed:wght@400;600'],
  brief: {
    layout:
      'A 1152px container padded 24px horizontally and 64px vertically. Bordered race-bib aside with a three-row fact ledger beside an unboxed runner form. Bib padding 24px; form gaps 24px and fields 44px high. Native post-payment disclosure follows the submit button.',
    style:
      'Deep #102e3d navy with sky-100 text and lime-300 accents. Barlow Condensed 600 distance at 112px/1, growing to 160px; default sans heading at 36px/1.1, 48px at 640px. Square fields, 60% current-colour borders, 40% sky separators and no shadows.',
    states:
      'Controls use 2px lime-300 keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Native fields retain browser validation. No animation. Emergency phone references a race-day availability hint. Race conditions are a required checkbox; the next-steps disclosure is native.',
    responsive:
      'Stacks with 40px gap below 1024px. At 640px bib padding becomes 40px, distance 160px, heading 48px, name and email share a row. At 1024px uses 1:1.3 columns with 64px gap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
