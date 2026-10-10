import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-equestrian-roster',
  name: 'Tabs — Equestrian yard roster',
  category: 'tabs',
  tags: ['corporate', 'light'],
  description:
    'A Canterdesk arena selector with horse, rider and stall assignments. Use it in equestrian yard scheduling and riding-school rosters.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A bordered 12px-radius roster with a sky header padded 12px vertically and 16px horizontally. Arena selectors sit beneath the header in an equal-width row, inset 16px, with 44px height. The selected panel has 16px padding, a session line and two 12px-padded assignment rows with a 12px gap.',
    style:
      'Manrope, white canvas, slate-900 text, slate-300 outer border and slate-200 row borders. Sky-950 header with white 18px bold title and 10px uppercase brand. Horse names are 14px bold, riders 11px slate-600, stalls 10px sky-900. Active tab uses a 2px sky-800 underline and sky-900 text. No shadows.',
    states:
      'Native arena radios change the named assignment list using CSS. Hover uses sky-50; checked controls have sky-800 bottom borders. Keyboard focus outlines each label with sky-900, 2px and 2px offset. Forced colors retain input focus and selection underlines. Lists have explicit list semantics. No animation.',
    responsive:
      '288px wide below 640px; 352px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
