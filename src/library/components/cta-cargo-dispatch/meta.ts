import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-cargo-dispatch',
  name: 'Cargo-bike delivery booking',
  category: 'cta',
  description:
    'A cargo-bike courier CTA with a collection-to-delivery timeline and compact booking bar. Use it to explain a local same-morning delivery service.',
  tags: ['corporate', 'dark'],
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'Full-width section with a 1280px container, 24px side padding and 48px vertical padding. A ruled masthead precedes collection, a horizontal delivery marker and drop-off. A second ruled row holds a 24px heading, supporting copy and a 48px minimum-height booking action.',
    style:
      'Manrope, slate-950 background, slate-100 heading, slate-300 supporting text and cyan-200 labels/action. Endpoints are 40px semibold with 1.1 leading and -0.025em tracking. Slate-700 1px rules, 8px action radius, no shadows.',
    states:
      'The cyan-200 booking action becomes cyan-100 on hover-capable devices. Keyboard focus shows a 2px white outline offset 4px. No animation.',
    responsive:
      'At 640px container padding becomes 32px horizontal and 64px vertical, and endpoint labels become 56px. At 768px booking becomes a two-column row. At 1024px delivery timeline becomes three columns with centered marker. Below those breakpoints the areas stack; masthead wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
