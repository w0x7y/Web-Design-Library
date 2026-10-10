import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-shearer',
  name: 'Seasonal sheep shearer profile',
  category: 'profile-card',
  tags: ['editorial', 'dark'],
  description:
    'A seasonal contractor card for a Marrow Wool sheep shearer, with route dates and expandable equipment details. Use it in livestock contractor and shearing-team directories.',
  preview: { kind: 'element' },
  fonts: ['Newsreader:wght@400;600'],
  brief: {
    layout:
      'A 288px article with 20px padding. The 10px brand header has a thin bottom rule. A 56px serif monogram sits beside a 24px name and 12px role. A 12px bio and next-route line follow. A native equipment disclosure opens a short 12px paragraph, followed by a route enquiry link.',
    style:
      'Stone-950 background, amber-100 type and stone-300 body copy. Newsreader regular 24px name with 28px line height and 56px monogram with 1 line height; all supporting copy default sans. Header is uppercase with 0.1em tracking. Stone-600 hairlines and square corners, no shadows. Summary is 12px and retains its native disclosure marker.',
    states:
      'The Equipment I bring summary opens and closes natively with Enter or Space; its paragraph appears 8px below with 20px line height. Summary and enquiry link underline on hover-capable devices. Both show a 2px amber-300 keyboard outline offset 2px, including forced-colors mode. No motion.',
    responsive:
      'Root width steps from 288px to 320px at 640px. Padding, typography and disclosure remain identical; the fully expanded card stays below 384px tall.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
