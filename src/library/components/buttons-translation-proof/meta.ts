import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-translation-proof',
  name: 'Buttons — Language proof',
  category: 'buttons',
  tags: ['editorial', 'light'],
  description:
    'A large language pairing above proof approval, revision and download actions for Vellum Bridge translation agency.',
  preview: { kind: 'element' },
  fonts: ['Newsreader:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 24px padding. A 12px masthead sits above a 36px English-to-French pairing with 12px gaps and 20px top margin. A 14px document caption follows after 8px. Two 44px pill buttons share a row with 8px gap and 24px top margin. A full-width download action has a top rule, 12px top padding and 16px top margin.',
    style:
      'Newsreader on yellow-50 with teal-950 ink and teal-800 document caption. Primary pill is teal-950 with yellow-50 text; revision pill has a 1px teal-700 border. The direction arrow is teal-700 and 18px. No root radius or shadow.',
    states:
      'Hover changes approval to teal-800, revision to yellow-100 and download text to teal-700. Every button shows a 2px teal-950 keyboard outline offset 2px. Language abbreviations have expanded accessible names; direction glyph is decorative. No animation.',
    responsive:
      '288px below 640px; 384px from 640px. Buttons keep equal widths within their expanding row; all typography and spacing remain fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
