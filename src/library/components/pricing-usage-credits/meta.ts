import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-usage-credits',
  name: 'Usage credit pricing',
  category: 'pricing',
  tags: ['dark', 'minimal'],
  description:
    'A transparent usage pricing section with a unit price, example monthly bill and included infrastructure. Use it for metered developer products.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px split layout has a headline, per-unit price and three included benefits on the left. Right is a bordered monthly estimate card with four usage rows and a total. An explanatory note spans the bottom of the card.',
    style:
      'Zinc-950 background, white headline and price, zinc-400 body and cyan-300 highlights. Calculator illustration is zinc-900 with 16px radius and zinc-700 separators. All amounts use monospace and tabular numerals.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Columns stack below 1024px. Price is 48px on phones and 60px at 640px. Example rows use flexible labels and shrink-free amounts; no fixed-width table.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
