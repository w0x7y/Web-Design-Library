import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-comparison-table',
  name: 'Pricing — Comparison table',
  category: 'pricing',
  tags: ['table', 'numbers', 'compact'],
  description: 'Grouped comparison table with three plan columns and a highlighted middle column. Use when precise limits and inclusions drive the choice.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Headline                                      Lede           │
│ ┌─────────────┬────────────┬────────────┬────────────┐       │
│ │ Feature     │ Plan $19   │ Plan $49   │ Plan $99   │       │
│ │             │ [Choose]   │ [Choose]   │ [Choose]   │       │
│ ├─────────────┴────────────┴────────────┴────────────┤       │
│ │ Usage                                            │         │
│ │ Limit       │ 5          │ 25         │ Unlimited  │       │
│ │ Collaboration                                    │         │
│ │ Access      │ Included   │ Included   │ Included   │       │
│ │ Support                                          │         │
│ │ Response    │ Standard   │ Priority   │ Dedicated  │       │
│ └─────────────┴────────────┴────────────┴────────────┘       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Bottom-aligned lg:grid-cols-2 header with 32px gap. Table 40px below uses min-w-[640px], 28% feature column and three 24% columns. Headers p-4, body px-4 py-4 with hairlines; middle column neutral-50. Usage, Collaboration and Support span all columns above eight total feature rows.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Header leads to plan names, 30px prices and actions, then 14px group labels and values. Slots: heading 8 words, lede 24, feature 4, value 2. Check glyphs have Included accessible text; unavailable cells say Not included to assistive technology.',
    states:
      '44px h-11 actions have 6px rounded-md corners and 150ms color transitions. Primary hover fills neutral-700; secondary fills neutral-50; links turn neutral-600. Keyboard focus draws a 2px neutral-900 outline offset 2px. Relatively positioned labelled focusable region contains hidden accessibility text and scrolls only the table with a 2px outline. Feature cells are sticky left with opaque surfaces. No sorting or selection.',
    responsive:
      'Below 768px the 640px minimum table scrolls inside its region. Header stacks below 1024px. Heading and padding increase at 640px. Sticky feature column remains visible while scrolling.',
    usage:
      'Use for detailed comparison. Pick pricing-three-tiers for short benefits. Variations: add a row group, use seat counts, or highlight another column.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
