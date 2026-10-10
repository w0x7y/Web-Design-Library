import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-bakery-stamp',
  name: 'Bakery stamp footer',
  category: 'footer',
  tags: ['playful', 'light'],
  description:
    'A worker-owned bakery footer with a tilted bread stamp, a warm farewell and an oven schedule. Use it for food co-operatives and neighbourhood shops.',
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400..700'],
  brief: {
    layout:
      'A centred 1280px container with 48px vertical and 24px side padding. A 208px round stamp with an inline bread drawing accompanies a farewell and opening-hours definition list. Regions have 40px gaps; small navigation wraps in the bottom strip.',
    style:
      'Fraunces throughout on yellow-50 with red-900 ink and 1px rules. Stamp has a 2px border, full radius and -6deg rotation; decorative loaf is 96 by 56px. Heading is 40px at 1.1 line height and -0.03em tracking, brand 24px semibold, body 16px at 1.6. No shadows.',
    states:
      'Links underline on hover on devices that support hover. Every link has a 2px currentColor keyboard focus outline offset 4px, which remains visible in forced-colors mode. No animation.',
    responsive:
      'Below 640px heading is 40px; at 640px it is 52px. Below 768px regions stack. At 768px stamp and message use a 224px/flexible grid with schedule spanning both columns. At 1024px schedule moves into its own 256px column and outer side padding becomes 32px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
