import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-reading-mode',
  name: 'Toggles — Reading mode',
  category: 'toggles',
  tags: ['editorial', 'light'],
  description:
    'Quiet reading preferences presented beside a serif article sample, with toggles for wider spacing and hidden notes.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide cream reading card with 20px padding. Place a serif text sample above two 52px preference rows with native 36px by 20px switches.',
    style:
      'Stone-50 background, stone-300 rules, 8px outer radius and emerald-800 checked tracks. The sample uses 18px system serif; preference labels use 12px sans and 10px hints.',
    states:
      'Native checkbox switches respond to Space and pointer input. Checked thumbs travel 16px. Each control draws a 2px slate-900 focus outline with 2px offset, and forced colors show a ButtonText border and CanvasText thumb.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
