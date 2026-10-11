import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-scroll-row',
  name: 'Testimonials — Scrolling card row',
  category: 'testimonials',
  tags: ['stacked', 'row'],
  description: 'Keyboard-scrollable strip of six quote cards with the next card peeking into view. Use for a compact collection without carousel buttons.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Headline / Lede                           [All stories]      │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐     │
│ │ Quote          │ │ Quote          │ │ Quote       ...│     │
│ │                │ │                │ │                │     │
│ │ AR Name / Role │ │ JL Name / Role │ │ SK Name / Role │     │
│ └────────────────┘ └────────────────┘ └────────────────┘     │
│              Focusable horizontal scroll region              │
│                  Six cards in one row                        │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Bottom-aligned sm:flex-row header above focusable region 40px below. Region uses overflow-x-auto snap-x snap-mandatory; ul role=list is flex, 24px gap, 16px bottom padding. Cards shrink-0 snap-start basis-[85%] sm:basis-[45%] lg:basis-[30%], p-6, rounded-lg and borders. Figures are full-height flex columns with mt-auto attributions.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Headline, lede and All stories link lead to 16px quotes and names. Slots: headline 8 words, lede 24, quote 32, name 3, role 6, link 2. Next-card glimpse signals more content.',
    states:
      'Labelled region has tabIndex=0 and 2px neutral-900 focus outline offset 2px. Native touch/keyboard scrolling and snap alignment; no buttons. All stories has same focus and hover neutral-600.',
    responsive:
      'Header stacks below 640px. Cards take 85% below 640px, 45% above and 30% from 1024px, preserving a next-card peek at that breakpoint. Only inner strip scrolls. Heading and padding increase at 640px.',
    usage: 'Use to limit vertical height. Pick testimonials-card-grid for all voices at once. Variations: four cards, ratings above quotes, or logos.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
