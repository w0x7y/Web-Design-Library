import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-garden-signup',
  name: 'Inputs — Garden club',
  category: 'inputs',
  tags: ['playful', 'light'],
  description:
    'Friendly rounded fields for a neighborhood garden club, with name, email and a volunteer opt-in.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A fixed 288px lime-50 card with a 1px emerald-200 border, 24px radius and 20px padding. A 40px leaf tile sits 12px from the eyebrow and 20px heading. The first field label follows after 20px; the email label follows its field after 16px. Both fields are 44px tall with 8px label gaps. A native 16px checkbox and wrapping volunteer label follow after 16px, separated by 10px.',
    style:
      'Default sans and emerald-950 text. The leaf tile is lime-200 with 12px radius and a decorative 24px line icon. The eyebrow is 10px uppercase with 0.1em tracking; the heading is 20px bold. Labels are 12px semibold. White pill fields use 1px emerald-700 borders for visible boundaries, 16px horizontal padding, 14px type with normal line-height and emerald-800 placeholders. The checkbox has emerald-800 accent and a 2px top offset; its label is 12px with 20px line-height.',
    states:
      'Inputs and the native checkbox show a 2px slate-900 focus outline with 2px offset. Checkbox accent is emerald-800; fields keep their ordinary keyboard and autofill behavior.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
