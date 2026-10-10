import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-cricket-score',
  name: 'Tabs — Cricket innings',
  category: 'tabs',
  tags: ['playful', 'light'],
  description:
    'A Squareleg cricket scoreboard with bottom-positioned innings tabs and a large score. Use it for amateur match reports and club scorecards.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      'A 20px-padded scoreboard with a split club and competition header. The selected innings shows a 14px team label, a 52px score beside the overs count, and an inset white batting note. Two 40px pill selectors sit at the bottom with an 8px gap.',
    style:
      'Bricolage Grotesque on emerald-100, emerald-950 text, 24px outer corners and 12px note corners. A small orange-200 competition capsule balances the score. Tabs have 1px emerald-800 borders; the checked pill has emerald-950 fill and white text. Score is bold with -0.025em tracking. No shadows.',
    states:
      'Native radios swap innings with CSS. Hover fills emerald-200; checked tabs fill emerald-950 with white text. Each label has a 2px emerald-950 keyboard outline with 2px offset. High contrast retains an input outline and selection underline. No animation.',
    responsive:
      '288px wide below 640px; 336px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
