import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-media-quote',
  name: 'Testimonials — Quotes beside image',
  category: 'testimonials',
  tags: ['asymmetric', 'media'],
  description: 'A portrait-format image beside two quotes separated by a hairline. Use when a visual connects related customer voices.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌────────────────────────┐   Eyebrow                         │
│ │                        │   Headline                        │
│ │                        │                                   │
│ │         Image          │   Quote                           │
│ │                        │   Name / Role                     │
│ │                        │   ─────────────────────────       │
│ │                        │   Quote                           │
│ └────────────────────────┘   Name / Role                     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. lg:grid-cols-[5fr_7fr] top-aligned columns with 48px gap. Media is 4:3 below 1024px, 4:5 above. Right has eyebrow and heading then two figures 32px below with py-6, 1px divider, 20px quotes and captions 20px below.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Image and headline lead into related voices. Slots: eyebrow 4 words, heading 8, quote 35 each, name 3, role 6. text-xl quotes use 28px line height; names are 14px semibold and roles 14px muted.',
    states: 'Static media and figures, no hover or focus states.',
    responsive: 'Media precedes quotes below 1024px at 4:3; above, 5:7 columns and 4:5 portrait. Heading and padding increase at 640px.',
    usage: 'Use for two voices with one image. Pick testimonials-featured-mosaic without media. Variations: one long quote, portrait caption, or video glyph.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
