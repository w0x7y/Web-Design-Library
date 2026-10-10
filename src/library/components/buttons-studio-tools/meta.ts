import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-studio-tools',
  name: 'Buttons — Studio tools',
  category: 'buttons',
  tags: ['dark', 'minimal'],
  description:
    'A compact action palette for an audio recording. Pair four editing tools with a prominent review action.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A fixed 288px zinc-950 panel with 20px padding and 20px radius. A 12px recording eyebrow precedes an 18px semibold heading after 4px. Four 64px editing buttons sit in a two-column grid with 8px gaps and 20px top margin. A full-width 44px review button follows after 12px.',
    style:
      'Default sans and white text. The eyebrow is zinc-400 uppercase with 0.1em tracking. Tool tiles have zinc-900 fill, 1px zinc-700 borders, 12px radii, 12px labels and 20px inline SVG icons, arranged vertically with 4px gaps. The review button uses lime-300, zinc-950 14px semibold text and a 16px arrow separated by 8px. There are no shadows.',
    states:
      'Tool hover uses zinc-800 and review hover uses lime-200. All buttons have 2px focus outlines with 2px offset; dark controls use lime-300 and the primary uses white. Reduced motion removes color transitions.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
