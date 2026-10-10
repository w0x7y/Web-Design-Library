import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-before-after',
  name: 'Before and after features',
  category: 'features',
  tags: ['corporate', 'light'],
  description:
    'A side-by-side comparison of a fragmented workflow and a shared workspace. Use it to show practical benefits of a team product.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A section with a 1152px maximum-width container, 24px side padding and 80px vertical padding. A centered 672px intro has an eyebrow, h2 and paragraph separated by 16px and 20px. A comparison grid starts 48px later with 24px gaps. Each panel has a 12px label, 24px semibold h3 12px below it and a four-item list 32px below that; flex rows use 12px icon gaps and 24px between rows.',
    style:
      'Default sans font on slate-50 with slate-950 text. The 36px semibold heading has 1.25 line height and -0.025em tracking. Intro eyebrow is blue-700, 12px semibold uppercase with 0.1em tracking; body is 16px slate-600. White problem panel has a 1px slate-200 border, slate-500 label and crosses; blue-950 improved panel has white headings, sky-300 label and 20px checks, and blue-100 list text. Both panels have 16px radii and 24px padding. Lists retain semantics with role=list; decorative icons are hidden from assistive technology.',
    states:
      'This static comparison has no controls or interactive states. Text and check icons remain readable in forced-colors mode.',
    responsive:
      'Below 640px the heading is 36px and panels have 24px padding. At 640px the heading becomes 48px, retaining 1.25 line height, and panel padding becomes 32px. At 768px the two panels form equal columns; below that they stack. Container padding and 24px grid gap stay constant; row text wraps naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
