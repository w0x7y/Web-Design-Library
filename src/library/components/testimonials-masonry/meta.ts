import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-masonry',
  name: 'Testimonials — Masonry wall',
  category: 'testimonials',
  tags: ['grid', 'compact'],
  description: 'Eight variable-length quotes in CSS columns with one dark featured tile. Use for a dense wall of customer voices.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Headline                    Lede / [Read stories]            │
│                                                              │
│ ┌────────────────┐  ┌────────────────┐  ┌────────────────┐   │
│ │ Short quote    │  │ Featured quote │  │ Medium quote   │   │
│ │ AR Name / Role │  │                │  │                │   │
│ └────────────────┘  │                │  │ SK Name / Role │   │
│                     │ JL Name / Role │  └────────────────┘   │
│ ┌────────────────┐  └────────────────┘                       │
│ │ Longer quote   │                      ┌────────────────┐   │
│ │                │  ┌────────────────┐  │ Short quote    │   │
│ │                │  │ Another quote  │  │ CP Name / Role │   │
│ │ MT Name / Role │  │                │  └────────────────┘   │
│ └────────────────┘  │ RN Name / Role │                       │
│                     └────────────────┘  ┌────────────────┐   │
│ ┌────────────────┐                      │ Final quote    │   │
│ │ Brief quote    │                      │                │   │
│ │ TL Name / Role │                      │ JC Name / Role │   │
│ └────────────────┘                      └────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Bottom-aligned lg:grid-cols-2 header, 32px gap. Masonry 40px below uses columns-1 sm:columns-2 lg:columns-3, gap-5 20px. Figures break-inside-avoid mb-5 p-6 rounded-lg. Second has neutral-900 surface and 20px white quote; others 16px. Attribution 24px below with 40px avatar.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Read headline and story link, then quotes in column-major DOM order. Slots: heading 8 words, lede 24, quote 12-62 in one to five sentences, name 3, role 6. Featured quote uses larger type and dark contrast.',
    states: 'Only story link interactive, hover neutral-600 and 2px neutral-900 focus outline offset 2px. Static tiles.',
    responsive:
      'One column below 640px, two from 640px, three from 1024px. Tiles never split. Header stacks below 1024px. Heading and padding increase at 640px.',
    usage: 'Use for many varied-length quotes. Pick testimonials-card-grid for row alignment. Variations: feature another quote, six figures, or omit link.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
