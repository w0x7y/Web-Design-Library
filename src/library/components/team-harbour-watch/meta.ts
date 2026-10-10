import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-harbour-watch',
  name: 'Harbour master watch team',
  category: 'team',
  tags: ['minimal', 'editorial', 'light', 'has-image'],
  description:
    'A Tide Office harbour master team section with a harbour photograph, watch labels and named contact links. Use it on port authority and visiting-vessel information pages.',
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400..600'],
  brief: {
    layout:
      'An amber-50 section with a 1280px container, 24px horizontal and 64px vertical padding. A grid introduction has a heading and paragraph beside a 3:2 harbour photograph with a caption 12px below. A two-item watch roster follows after 48px, with 40px gaps, top rules, 24px top padding, oversized DAY/NIGHT labels, names, roles, biographies and contact links.',
    style:
      'Fraunces with sans fallback, antialiased. Blue-950 titles and rules, blue-800 accents, stone-700 descriptions and stone-600 caption. Heading is 36px/1.1 with -0.035em tracking, watch labels 48px/1 with -0.05em tracking, names 28px/34px medium and biographies 16px/1.75. Photo uses object-cover with square corners. No shadows.',
    states:
      'Named email links use 14px/1.5 type, underlines offset 4px and decorative 16px arrows. Links become blue-800 on hover-capable devices and show a 2px currentColor focus outline offset 4px, including forced colors. The photograph has descriptive alt text; the roster has role="list". No animation.',
    responsive:
      'From 640px horizontal padding becomes 32px, heading 56px and watch labels 64px. From 768px biographies use two columns with a 64px gap. From 1024px the introduction uses 1:1.2 columns with a 64px gap and vertical padding becomes 96px. All regions stack and reflow without horizontal scrolling at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
