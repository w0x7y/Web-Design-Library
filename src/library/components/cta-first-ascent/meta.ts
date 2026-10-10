import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-first-ascent',
  name: 'Climbing introduction pass',
  category: 'cta',
  description:
    'A climbing gym CTA with oversized visit-count typography and a high-contrast introductory pass strip.',
  tags: ['brutalist', 'dark'],
  preview: { kind: 'section' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      '1280px maximum-width poster section with 24px horizontal and 48px vertical padding. Brand label, a numeral/text grid with 28px top margin and 32px gap, then a full-width yellow offer strip after 40px. Offer strip has 20px padding and 24px gaps.',
    style:
      'Space Grotesk, zinc-950 background, yellow-300 headline and numeral, zinc-200 body. Numeral is 128px bold, .85 leading and -.08em tracking. Heading 40px bold, 1.05 leading and -.025em tracking. Yellow-300 offer strip with zinc-950 ink; square dark 48px minimum-height action. No shadows.',
    states:
      'Action becomes zinc-800 on hover-capable devices and shows a 2px zinc-950 focus outline offset 4px against the yellow strip. Decorative numeral is hidden from assistive technology because the heading spells out the number. No animation.',
    responsive:
      'At 640px padding becomes 64px vertical and 32px horizontal, numeral becomes 192px, heading 56px and offer padding 28px. At 768px offer forms a horizontal row. At 1024px poster forms 1:1.2 columns and numeral becomes 256px. Smaller widths stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
