import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-residency-atlas',
  name: 'Architecture residency panorama',
  category: 'hero',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'A residency hero built around a wide architectural panorama and a three-part application brief. Use it for cultural stays, research residencies and place-led programmes.',
  preview: { kind: 'section' },
  fonts: ['Newsreader:wght@400..600'],
  brief: {
    layout:
      'A 1280px container padded 24px by 40px. Masthead with location, then a panoramic 288px-high architectural photo with a 12px-gap caption row. Below is an application grid separated by 40px vertical space: 2:1:1 columns at 1024px, each with a top rule and 20px top padding. Left has headline, middle dates, right programme copy and application CTA.',
    style:
      'Newsreader on cyan-50 with cyan-950 ink and cyan-800 rules. Main headline is 44px with 1.05 leading and regular weight, increasing to 64px at 640px. Image is a square-cornered crop. Body is 18px at 1.625 leading, captions 14px. Dark cyan CTA is square with cyan-50 text.',
    states:
      'Application link fills cyan-800 on hover and has a 2px cyan-950 focus outline offset 4px. Architecture photo has descriptive alternative text and measured 1600x2133 dimensions. Dates use time elements. No animation.',
    responsive:
      'At 320px the masthead and caption wrap, photo stays 288px high and application columns stack. At 640px headline becomes 64px and photo 384px high. At 1024px application area becomes 2:1:1 columns with 32px gaps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
