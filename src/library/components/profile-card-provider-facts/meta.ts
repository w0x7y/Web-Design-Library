import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-provider-facts',
  name: 'Profile cards — Provider with rate and response facts',
  category: 'profile-card',
  tags: ['stacked', 'numbers', 'compact'],
  description:
    'A verified identity and star rating sit above a two-cell strip with an hourly rate and response time, followed by Book and Message actions. Use it in marketplace listings where people compare service providers before booking.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Avatar  Casey Morgan (Verified)                           │
│        Service or specialty                              │
│        * 4.9  (128 reviews)                              │
├────────────────────────────┬─────────────────────────────┤
│Hourly rate                 │Typical response             │
│$85 /hour                   │2 hours                      │
├────────────────────────────┴─────────────────────────────┤
│[          Book          ]  [         Message         ]   │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card (w-72), 320px from 640px (sm:w-80), with rounded-lg corners and a 1px neutral-200 border. The header has 20px padding (p-5) and a 16px gap between a 48px avatar and the identity column, with the rating line 8px below the service line. A full-width two-column fact strip follows, with hairlines above and below and between its cells, and 20px by 12px cell padding. The closing row is a two-column grid with a 12px gap and 20px padding; both actions are 44px tall and equal width.',
    hierarchy:
      'Read the 16px semibold name with its 20px verified glyph, the 14px service line, then a filled 16px star, the 14px medium score and the muted review count. The fact strip pairs 12px labels with 16px semibold values: the hourly rate with a muted 14px unit, and the typical response time. Book is the filled primary action and Message is outlined. Slots: name up to 18 characters, service up to 24, a one-decimal score, review count up to 5 digits, rate up to 6 characters and response time up to 10.',
    states:
      'Book changes from neutral-900 to neutral-700 on hover; Message changes from white to neutral-50. Both use a 150ms color transition and a 2px neutral-900 focus-visible outline offset 2px. Book is a link to the booking flow and Message is a button, and both accessible names include the provider name so a grid of cards stays distinguishable. The verified glyph carries a visually hidden label, and the rating reads as Rated 4.9 out of 5. No selected, open or disabled state.',
    responsive:
      'Only the fixed width changes at 640px, from 288px to 320px. The header row, both fact cells and the two equal actions keep their arrangement at both widths, and the extra 32px widens each column.',
    usage:
      'Use in a marketplace or directory grid where people compare providers by rating, price and responsiveness before booking. Pick profile-card-identity-details when time zone and languages matter more than price, or profile-card-availability-slots when the card should offer specific times. Variations: replace Typical response with Jobs completed, show a starting price instead of an hourly rate, or swap Message for a save control.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
