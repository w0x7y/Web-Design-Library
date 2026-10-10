import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-ferry-crossing',
  name: 'Voices along the crossing',
  category: 'testimonials',
  tags: ['corporate', 'gradient', 'dark'],
  description:
    'Passenger accounts arranged along a ferry journey, over a restrained sea-colour gradient. Use it for local travel and public transport services.',
  preview: { kind: 'section' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      '1280px container with a heading and two passenger accounts connected by a route line. Each account has a 48px letter marker, route caption, 24px quotation and passenger name. Route items have 32px padding and 32px gap. Section vertical padding 64px, 96px at 1024px.',
    style:
      'Sky-950 to teal-900 horizontal oklab gradient, sky-100 ink and teal-200 labels. Familjen Grotesk 36px semibold heading increasing to 48px at 640px. Quotes 24px with 1.5 leading. White/30 top route line and 1px teal-200 outlined square markers. No shadow or rounded cards.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Accounts stack below 768px with a top line on each, then form two equal columns at 768px. Title and gutters grow at 640px; 24px phone gutters and 40px thereafter. Markers stay 48px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
