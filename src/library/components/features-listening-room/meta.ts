import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-listening-room',
  name: 'Listening room essentials',
  category: 'features',
  tags: ['minimal', 'dark', 'has-image'],
  description:
    'A listening equipment section with a large headphone photo and three restrained product benefits. Use it for audio retailers, hire services or listening subscriptions.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      '1280px container, 24px horizontal and 64px vertical padding. A 40px title precedes a 3:2 headphone photograph and three numbered benefits in a 1.5:1 split at 1024px. A bottom rule separates a service note and listening-room link.',
    style:
      'Default sans on neutral-950, neutral-50 headings, neutral-300 body and amber-200 index numbers. Title is medium weight with 1.1 line height and -0.025em tracking. Photo has 4px corners. Feature titles are 20px medium and body copy 14px with 1.625 line height.',
    states:
      'Visit link underlines on hover and has a 2px neutral-50 keyboard outline offset 4px. The photo has descriptive alt text and explicit 800 by 533 dimensions. Feature numbering is text; no animation.',
    responsive:
      'Photo and benefits stack below 1024px. Title grows from 40px to 56px at 640px. At 1024px the spread uses 1.5:1 columns and outer padding grows to 96px vertical and 32px horizontal. Footer wraps naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
