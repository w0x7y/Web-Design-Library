import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-price-list',
  name: 'Pricing — Price list rows',
  category: 'pricing',
  tags: ['stacked', 'list', 'numbers'],
  description: 'Four indexed rows with descriptions, scope notes and right-aligned prices. Use for independently scoped options.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Eyebrow / Headline                         Lede              │
├──────────────────────────────────────────────────────────────┤
│ 01  Item title and description             From $19          │
│     Scope note                             [View option]     │
├──────────────────────────────────────────────────────────────┤
│ 02  Item title and description             From $49          │
│     Scope note                             [View option]     │
├──────────────────────────────────────────────────────────────┤
│ 03  Item title and description             From $99          │
│     Scope note                             [View option]     │
├──────────────────────────────────────────────────────────────┤
│ 04  Item title and description             From $149         │
│     Scope note                             [View option]     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Justified bottom-aligned sm:flex-row header with max-w-sm 384px lede. List 40px below has four py-8 rows with top and bottom hairlines. Rows use grid-cols-[32px_1fr], then md:grid-cols-[48px_1fr_192px], 24px gap. Mono index; price is in second column on mobile, right aligned on desktop.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. 18px titles lead into 16px descriptions, 14px scope notes, From labels and 24px prices. Slots: heading 8 words, lede 24, item 5, two-sentence description 28, scope 10, action 2. Prices $19, $49, $99, $149.',
    states:
      '44px h-11 actions have 6px rounded-md corners and 150ms color transitions. Primary hover fills neutral-700; secondary fills neutral-50; links turn neutral-600. Keyboard focus draws a 2px neutral-900 outline offset 2px. View option links have item-specific accessible labels. Static rows.',
    responsive:
      'Header stacks below 640px. At 768px price moves right from beneath description and index widens from 32px to 48px. Heading and padding increase at 640px.',
    usage:
      'Use for separate services or durations. Pick pricing-three-tiers for subscriptions. Variations: hourly prices, duration scope notes, or availability notes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
