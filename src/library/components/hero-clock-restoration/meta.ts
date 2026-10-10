import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-clock-restoration',
  name: 'Clock restoration service index',
  category: 'hero',
  tags: ['brutalist', 'light'],
  description:
    'A clock-restoration hero for Second Hand, with oversized type, three service rows and an assessment booking strip. Use it for specialist horology workshops.',
  preview: { kind: 'section' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      'A 1280px container with 24px side padding, 40px top and 24px bottom padding. A wrapping brand/location masthead sits 56px above a 48px-gap grid, with 1.4:1 columns at 1024px. The large two-line title precedes an 18px paragraph and 14px promise, each 24px apart. Three dl service rows have 24px headings, 14px details 12px below, 20px vertical padding and 2px top rules. A black booking strip sits 48px below with 24px padding and gaps, opening times and a 48px-minimum white link.',
    style:
      'Space Grotesk on yellow-300 with black text. Bold uppercase headline is 56px, 0.95 leading and -0.05em tracking, 96px at 640px. Square corners, 2px black rules and no shadows. Body uses 1.625 leading. Booking strip has yellow-300 text, a white CTA with black 14px bold text and 20px side padding.',
    states:
      'Book a clock assessment fills yellow-100 on hover and has a 2px yellow-300 focus outline offset 4px. Services use a dl. The booking link names the assessment. No animation.',
    responsive:
      'At 320px the masthead wraps, title is 56px and services stack below the introduction. At 640px title grows to 96px. At 1024px use 1.4:1 columns. The booking strip wraps at every width with 24px gaps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
