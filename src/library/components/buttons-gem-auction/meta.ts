import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-gem-auction',
  name: 'Buttons — Gemstone bidding',
  category: 'buttons',
  tags: ['glass', 'gradient', 'light'],
  description:
    'A warm-gradient gemstone bidding set for Prismere auctions, with a translucent bid pane, watch action and stone-report link.',
  preview: { kind: 'element' },
  fonts: ['Syne:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 20px padding, a 64px decorative faceted stone positioned 16px from right and 16px from top. Header holds a 12px masthead, lot details after 16px and a 20px title after 4px. Bid pane begins 20px below with 16px padding, a baseline-aligned 30px bid/12px label row, then a full-width 44px bid action after 12px and a 32px watch action after 8px. A full-width report action is 12px below the pane.',
    style:
      'Syne; red-950 text on an orange-100 to rose-200 to amber-100 diagonal gradient interpolated in oklab with stops 0/50/100%. Root has 24px radius. Pane has white 50% fill, 1px white 80% border, 12px radius and 16px backdrop blur. Bid button is red-950 with white 14px semibold text and 8px radius; watch has 6px radius and a 16px bookmark icon. Gem drawing is white 40% fill with red-950 30% strokes. Price uses tabular figures. No shadow.',
    states:
      'Bid fills red-900 on hover; watch fills white 70%; report turns red-800. All buttons have 2px red-950 keyboard outlines offset 2px. Watch names its lot; SVGs are decorative. No animation.',
    responsive:
      '288px below 640px; 368px from 640px. Only root width changes; pane, bid and watch actions stretch. Gem remains fixed at 64px. Price and current-bid label stay on one row.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
