import type { ComponentMeta } from "../../types";

export default {
  slug: 'product-card-nail-pigment',
  name: 'Olive chrome nail pigment',
  category: 'product-card',
  tags: ['gradient', 'light'],
  description:
    'A nail-pigment card with a large metallic swatch, pot weight and text purchase action. Use it for specialist beauty products and nail-art supplies.',
  preview: { kind: 'element' },
  fonts: ['Young Serif'],
  brief: {
    layout:
      'A 288px card, 336px from 640px, with 20px padding. Small brand header precedes a 26px serif heading. A 128px-tall swatch illustration fills a flexible column beside a 48px-wide weight-and-price column. A ruled description and underlined purchase action follow.',
    style:
      'Young Serif on yellow-50 with stone-950 text and stone-700 secondary copy. No radius, outside border or shadow. An irregular metallic swatch shifts through pale pink, gold and deep olive using an inline SVG gradient. Side price is 20px. Body copy is 12px at 20px leading; stone-300 footer rule.',
    states:
      'The purchase link changes to olive-800 on hover and shows a 2px stone-950 focus outline offset 4px. Decorative pigment artwork is aria-hidden; its olive-chrome color and one-gram weight are provided as text. No animation.',
    responsive:
      'Root changes from 288px to 336px at 640px. The 48px facts column stays fixed while the swatch column widens. Lower copy and purchase action stay stacked.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
