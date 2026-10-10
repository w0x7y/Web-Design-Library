import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-luthier-guitar',
  name: 'Guitar luthier commission',
  category: 'hero',
  tags: ['minimal', 'dark', 'has-image'],
  description:
    'A guitar-luthier hero for Roan Guitars, with a playing photograph, two instrument specifications and a commission enquiry. Use it for small-run acoustic instrument makers.',
  preview: { kind: 'section' },
  fonts: ['DM Sans:wght@400..600'],
  brief: {
    layout:
      'A 1280px container with 24px side and 48px vertical padding. A wrapping brand/edition row sits above a grid with 48px top margin and gaps, using 1.5:1 columns from 1024px. The left contains a 48px title and a 3:2 guitar photograph 32px below. Right is aligned to the bottom with a 12px model label, 32px subheading 16px below, 16px copy 20px below, a two-column dl 32px later and a full-width 48px-minimum enquiry link after 24px. A 12px service note follows after 16px.',
    style:
      'DM Sans on neutral-950 with white headings and neutral-300 body. Main headline is 400 weight, 48px, 1.05 leading and -0.025em tracking, 72px at 640px. Warm natural-wood photograph has square corners. Specification rules are 1px neutral-600 with 20px vertical padding. CTA is white with neutral-950 14px medium text, 20px horizontal and 12px vertical padding. No shadows.',
    states:
      'Enquiry link fills amber-200 on hover and shows a 2px white focus outline offset 4px. Photograph has descriptive alt text and 800x533 intrinsic dimensions. Specifications use a dl. No animation.',
    responsive:
      'Title, photo and instrument copy stack below 1024px. At 640px title becomes 72px. At 1024px the photo occupies the wider left column and details align to its bottom edge. Specifications keep two equal columns; enquiry spans full width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
