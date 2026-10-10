import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-district-energy',
  name: 'District energy demand',
  category: 'hero',
  tags: ['gradient', 'corporate', 'dark'],
  description:
    'A district-energy hero with a neighbourhood heat metric and a warm demand display. Use it for community infrastructure and energy monitoring services.',
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A full-width section with a 1280px container padded 24px by 64px. Brand row above a 64px-gap main grid, two equal columns from 1024px. Left contains eyebrow, 44px headline, 18px copy and CTA. Right contains a 448px maximum square ring figure with centred metric text and caption. A bottom dl has two equally sized metrics, 32px gap and an orange hairline.',
    style:
      'Manrope on an oklab horizontal gradient from orange-950 through stone-950 to stone-950. White headline, orange-100 details and orange-300 accents. Headline is 44px at 1.1 leading, 600 weight and -0.025em tracking; 64px at 640px. Circular display has a thin muted track, thick orange-300 progress arc and 48px white reading. CTA is orange-200 with stone-950 text and 8px corners. No shadows.',
    states:
      'Project link fills orange-100 on hover and has a 2px orange-200 focus outline offset 4px. Metric words give the value and unit without relying on ring colour. The ring SVG is decorative, caption and dl carry the information. No animation.',
    responsive:
      'At 320px the introduction and meter stack. The meter stays fluid up to 448px wide and headline is 44px. At 640px headline becomes 64px. At 1024px grid has equal columns. Bottom metrics remain two columns; labels wrap without overflowing.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
