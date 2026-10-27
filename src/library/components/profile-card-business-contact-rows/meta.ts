import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-business-contact-rows',
  name: 'Profile cards — Business card with contact rows',
  category: 'profile-card',
  tags: ['split', 'list', 'icons', 'compact'],
  description:
    'A landscape business card splits a tinted identity panel, with a logo above the name, title and organization, from a column of icon contact rows and a Save contact action. Use it for a digital business card, a contact page or a vendor contact in a directory.',
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────┬─────────────────────────────┐
│Logo                        │Icon  name@example.com       │
│                            │Icon  +1 (555) 010-0199      │
│                            │Icon  example.com            │
│Alex Rivera                 │Icon  City, Country          │
│Job title or role           │                             │
│Organization name           │[       Save contact       ] │
└────────────────────────────┴─────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card (w-72) widens to 448px (sm:w-[28rem]) at 640px, with rounded-lg corners, a 1px neutral-200 border and overflow hidden. From 640px it is a two-column grid of equal halves. The identity panel is neutral-50 with 20px padding (p-5) and stacks the logo at the top and the identity block at the bottom (flex-col justify-between). The contact panel has 20px padding, a list of four 20px rows with 12px gaps and 20px icons 12px from their text, and a full-width 44px Save contact action 20px below the list.',
    hierarchy:
      'Read the logo, then the 18px semibold name, the 14px neutral-600 job title and the 14px neutral-500 organization, then the contact rows: email, phone, website and location, each led by a neutral-400 glyph. Save contact is the only button-styled control. Slots: name up to 20 characters, title up to 24, organization up to 24, email up to 24 and location up to 22.',
    states:
      'Email, phone and website rows are links (mailto:, tel: and a web address) in neutral-600 that turn neutral-900 and underline on hover with a 150ms color transition. Location is plain text. Save contact links to a downloadable contact file and changes from white to neutral-50 on hover. Every link has a 2px neutral-900 focus-visible outline offset 2px. No selected, open or disabled state.',
    responsive:
      'Below 640px the panels stack in one 288px column: the identity panel on top with a bottom hairline, the contact panel beneath. At 640px the card widens to 448px, the panels sit side by side with a vertical hairline between them, and the identity panel stretches to the height of the contact column so the logo and name sit at opposite ends.',
    usage:
      'Use for a digital business card, the contact block of a personal page or a vendor contact in a supplier directory. Pick profile-card-contact-grid when contact options are equal destinations without visible addresses, or profile-card-identity-details for scheduling facts. Variations: replace the logo with an avatar, add a second phone row, or drop the location row and Save contact for a smaller card.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
