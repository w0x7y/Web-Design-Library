import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-bakery-shares',
  name: 'Bakery share selector',
  category: 'pricing',
  tags: ['playful', 'light'],
  description:
    'A co-op bakery subscription with a native loaf-allocation selector, CSS-only price changes and pickup information. Use it for local subscription services with two package sizes.',
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      '1280px maximum-width section with 24px side and 64px vertical padding. Brand eyebrow and heading, then a large bread-share panel beside a pickup panel with 24px gap. Share panel contains a loaf drawing, fieldset with two native radio choices, 60px price and 48px full-width signup link. Pickup has weekday, hours, address and skip policy. Terms note is associated with both inputs.',
    style:
      'Bricolage Grotesque, amber-100 canvas, stone-950 ink. Share panel is amber-50 with 2px stone-950 border and 32px radius; pickup is rose-800/amber-50 with same radius. Panels have 24px padding. Heading 36px bold, 1.05 line height. Radio labels have 12px radius, 2px stone-500 borders and 16px padding. Selected choice fills amber-200 with stone-950 border. Native radio accent is stone-950. Black pill CTA, 16px semibold.',
    states:
      'Radio selection switches £8/£14 prices using root :has and native checked inputs. Both radios have 2px stone-950 outlines offset 4px on focus; CTA has same focus style and fills stone-800 on hover. No animation. Fieldset legend names the group, visible labels name allocations, aria-describedby links the terms.',
    responsive:
      'At 640px vertical padding becomes 80px, heading 60px, panel padding 32px and choices become two columns. At 1024px panels become 2fr/1fr columns. Below that they stack. Price unit and header wrap; radio controls never shrink.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
