import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-dive-log',
  name: 'Badges — Dive credentials',
  category: 'badges',
  tags: ['glass', 'gradient', 'dark', 'has-image'],
  description:
    'Nacre Dive scuba-log badges place training credentials and depth information on frosted plates over a coral photograph. Use them in dive-club logbooks.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      'A 288px, 320px-tall relative panel with 20px padding and 16px radius. A full-cover background image and bottom-heavy gradient sit behind the content. A 12px brand precedes a 30px site title; a frosted badge stack sits at the bottom with 12px gaps. A depth chip aligns beside the top credential.',
    style:
      'Familjen Grotesk, white text, teal-950 base and an aquarium coral photo. The vertical gradient runs from teal-950 at 60% opacity to teal-950 at 90% opacity to teal-950 in oklab. Credential plates use teal-950 at 80%, white borders at 40%, 12px backdrop blur and 8px radii. Depth chip is lime-200 with teal-950 text. No shadow.',
    states:
      'Static logged credentials with text descriptions, not colour-only state. The photo has descriptive alt text. No controls or animation.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
