import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-podcast-queue',
  name: 'A podcast queue with nothing up next',
  category: 'empty-state',
  tags: ['glass', 'gradient', 'dark'],
  description:
    'Nextcast podcast-queue empty state puts a quiet play outline inside a frosted amber tray. Use it before a listener saves an episode for later.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk'],
  brief: {
    layout:
      '20px-padded queue panel with a small header, inset 20px-padded frosted tray, 64px-high decorative play and waveform drawing, 24px heading, 14px description, 40px action and 11px footer.',
    style:
      'Familjen Grotesk. Diagonal oklab gradient from stone-950 through amber-950 to stone-900. Amber-100 text, amber-200 artwork and action. Outer radius 16px, tray radius 12px, 1px amber-200 border at 30%, white fill at 10%, 12px backdrop blur. Action has stone-950 text and 6px radius. No shadow.',
    states:
      'The episode action underlines on hover and shows a 2px amber-200 outline offset 4px on keyboard focus. Decorative SVG is aria-hidden. No motion.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
