import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-landscape-plan',
  name: 'Buttons — Landscape plan',
  category: 'buttons',
  tags: ['editorial', 'light'],
  description:
    'A landscape-architecture plan review for Contour Studio, pairing sketch-to-plan stages with approval, revisions and a download action.',
  preview: { kind: 'element' },
  fonts: ['Newsreader:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 24px padding. A 12px studio masthead precedes a 36px Sketch-to-Plan row by 20px, with baseline alignment and 12px gaps. A 14px courtyard and review caption follows after 8px. Two equal 44px pill buttons follow after 24px with 8px gap. A full-width download action has a top rule, 12px top padding and 16px top margin.',
    style:
      'Newsreader on yellow-50 with teal-950 ink and teal-800 project caption. Primary pill is teal-950 with yellow-50 14px text; revision pill has a 1px teal-700 border. Direction arrow is 18px teal-700. No root radius or shadow.',
    states:
      'On hover-capable devices approval fills teal-800, revisions fill yellow-100 and download text turns teal-700. Every button shows a 2px teal-950 keyboard outline offset 2px. Stage labels have expanded accessible names and the arrow is decorative. No animation.',
    responsive:
      '288px below 640px and 384px from 640px. Buttons keep equal widths as the row expands; typography and spacing remain fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
