import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-night-rail',
  name: 'Night train route booking',
  category: 'cta',
  description:
    'An overnight rail CTA with a station-to-station route and a compact booking bar. Use it to announce a new sleeper service.',
  tags: ['corporate', 'dark'],
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'Full-width section with a 1280px container, 24px side padding and 48px vertical padding. A ruled masthead precedes departure, a horizontal journey marker and arrival. A second ruled row holds a 24px heading, supporting copy and a 48px minimum-height booking action.',
    style:
      'Manrope, slate-950 background, slate-100 heading, slate-300 supporting text and cyan-200 labels/action. Cities are 40px semibold with 1.1 leading and -0.025em tracking. Slate-700 1px rules, 8px action radius, no shadows.',
    states:
      'The cyan-200 booking action becomes cyan-100 on hover-capable devices. Keyboard focus shows a 2px white outline offset 4px. No animation.',
    responsive:
      'At 640px container padding becomes 32px horizontal and 64px vertical, and city names become 56px. At 768px booking becomes a two-column row. At 1024px route becomes three columns with centered marker. Below those breakpoints the areas stack; masthead wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
