import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-piano-grades',
  name: 'Badges — Piano credentials',
  category: 'badges',
  tags: ['editorial', 'dark'],
  description:
    'Cadenza Board piano-examination badges pair an earned grade with repertoire labels and an expandable assessment note. Use them in music-school student records.',
  preview: { kind: 'element' },
  fonts: ['Newsreader:wght@400..600'],
  brief: {
    layout:
      'A 288px card with 24px padding. An 18px board title precedes a horizontal credential with 20px gaps: an 80px grade plate next to a 24px distinction label. Two underlined repertoire tags follow after 24px, then a native assessment disclosure after 20px.',
    style:
      'Newsreader throughout, stone-900 background and stone-100 text, 1px stone-600 border and 8px outer radius. Grade plate uses stone-100 and stone-900 ink with a 40px top radius, square bottom corners and a 36px numeral. Amber-200 distinction and hairline stone-600 rules. No shadow.',
    states:
      'The native Assessment note summary toggles a 14px note. On hover it becomes amber-200; keyboard focus shows a 2px current-colour outline offset 2px. No animation. Grade and result are both written in text.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
