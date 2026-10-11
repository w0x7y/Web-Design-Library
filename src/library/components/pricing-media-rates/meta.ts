import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-media-rates',
  name: 'Pricing — Rates beside image',
  category: 'pricing',
  tags: ['split', 'media', 'list'],
  description: 'Portrait-format media beside four rates and one action. Use when an image explains what the rates provide access to.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌────────────────────────┐   Eyebrow                         │
│ │                        │   Headline                        │
│ │         Image          │   Lede                            │
│ │                        │   Rate label          $19         │
│ │                        │   Rate label          $49         │
│ │                        │   Rate label          $99         │
│ └────────────────────────┘   Rate label         $149         │
│ Caption                     [Primary action]                 │
│                             Access note                      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Top-aligned lg:grid-cols-2 with 64px gap. Left figure has 4:5 media and 12px-separated caption. Rates have eyebrow, heading, lede and dl 32px below; four py-5 hairline rows hold label/note left and shrink-0 price right, followed by action and access note.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Image and headline lead to 16px labels, 14px notes and 18px prices. Slots: heading 8 words, eyebrow 4, lede 24, rate 4, note 9, caption 12, access note 16. Prices $19, $49, $99, $149.',
    states:
      '44px h-11 actions have 6px rounded-md corners and 150ms color transitions. Primary hover fills neutral-700; secondary fills neutral-50; links turn neutral-600. Keyboard focus draws a 2px neutral-900 outline offset 2px. Media, caption and rates static.',
    responsive:
      'Media first above rates below 1024px at 4:3, changing to 4:5 beside rates above. Labels wrap while prices stay right aligned. Heading and padding increase at 640px.',
    usage:
      'Use for visually supported access rates. Pick pricing-price-list for longer descriptions. Variations: duration rates, concession notes, or video placeholder.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
