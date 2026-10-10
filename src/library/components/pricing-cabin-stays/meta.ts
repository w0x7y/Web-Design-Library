import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-cabin-stays',
  name: 'Cabin stay packages',
  category: 'pricing',
  tags: ['glass', 'gradient', 'light', 'has-image'],
  description:
    'Two cabin-stay totals in translucent panels overlapping a panoramic mountain photograph, with included amenities and deposit terms. Suits small hospitality businesses selling short breaks.',
  preview: { kind: 'section' },
  fonts: ['Familjen Grotesk:wght@400..600'],
  brief: {
    layout:
      '1280px maximum width, 24px side and 64px vertical padding. Heading and intro precede a panoramic photo by 32px. Two stay panels overlap its bottom by 40px; panel container has 12px side inset and 16px gap. Midweek card has rate and CTA; larger weekend card also has itinerary copy. Three amenities and booking terms follow.',
    style:
      'Familjen Grotesk on a vertical oklab gradient from sky-100 to white, sky-950 headings and sky-900 body. Heading 36px medium/1.05, rates 48px, titles 20px. Photo top corners 24px. Panels white at 85% with 1px white border, 16px radius, 24px padding, 24px backdrop blur and soft 0/12/40px shadow at 8% dark sky. Sky-950/white pill links, at least 44px high.',
    states:
      'Booking links fill sky-800 on hover-capable devices and show a 2px sky-950 outline offset 4px on focus. Photo has descriptive alt; amenities use a definition list. No motion.',
    responsive:
      'At 640px padding becomes 80px, heading 60px and image crop changes from 4:3 to 20:9. Weekend card becomes two columns and amenities become three. At 1024px header becomes 1.4fr/1fr, stays become 1fr/1.6fr and content insets become 24px. Smaller screens stack cards and keep the photo overlap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
