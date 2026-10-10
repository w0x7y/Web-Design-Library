import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-museum-admission',
  name: 'Museum admission ledger',
  category: 'pricing',
  tags: ['editorial', 'dark', 'has-image'],
  description:
    'A photo-led museum admission section with an accessible visitor-rate ledger and a reservation link. Suits cultural venues with several concession prices.',
  preview: { kind: 'section' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      '1280px maximum-width section, 24px horizontal and 64px vertical padding. Architectural figure and admission content stack with a 40px gap. Content has eyebrow, heading, intro, four-row definition list, full-width 48px booking link and access note. Rows use 16px vertical padding and 20px gaps with nonshrinking amounts.',
    style:
      'Neutral-950 background, neutral-100 text, neutral-300 intro and neutral-400 notes. Instrument Serif headings and prices, default sans body. Heading 48px with line height 1, amounts 30px/36px. Neutral-600 hairlines, orange-300 booking strip and eyebrow. Image has no radius or shadow.',
    states:
      'Booking strip fills orange-200 on hover-capable devices, with 2px orange-300 keyboard-focus outline offset 2px. Arrow is decorative. Rates use dt/dd, image has descriptive alt. No motion.',
    responsive:
      'At 640px heading becomes 72px. At 1024px vertical padding becomes 96px, regions use 1.1fr/1fr columns and 64px gap, and photo changes from a 4:3 crop to 4:5. Below that the figure precedes the rates; labels wrap and amounts stay intact.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
