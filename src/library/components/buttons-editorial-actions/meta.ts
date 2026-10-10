import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-editorial-actions',
  name: 'Buttons — Editorial actions',
  category: 'buttons',
  tags: ['editorial', 'light'],
  description:
    'Quiet reading actions for a long-form journal, with numbered rows and a generous subscription link.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A fixed 288px stone-100 card with a 1px stone-300 border, square corners and 24px padding. A 10px journal name precedes a two-line 24px serif title after 16px. A ruled action group follows after 20px, containing two 44px full-width buttons with 16px gaps between numbers, labels and trailing symbols. End with a 44px subscription link after 20px.',
    style:
      'Default sans and stone-900 text. The journal name is 10px medium uppercase with 0.2em tracking. The system serif heading has a 1.25 line-height. Reading actions are 14px with stone-300 dividers; their 12px system monospace numbers use stone-600. The 16px share arrow and plus sit at the right edge. The subscription link has stone-900 fill, stone-50 text, 12px semibold uppercase type and 0.05em tracking. No radii or shadows.',
    states:
      'Reading action hover uses stone-200; the primary hover uses stone-700. Every control has a 2px slate-900 focus outline and 2px offset. Reduced motion removes color transitions.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
