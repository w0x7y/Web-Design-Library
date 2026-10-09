import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-field-passes',
  name: 'Badges — Field passes',
  category: 'badges',
  tags: ['brutalist', 'light'],
  description:
    'Bold event access badges with serial numbers, admission tiers and explicit access descriptions.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide black-bordered panel with 16px padding. An uppercase header sits above three stacked pass strips with 56px minimum height and 12px gaps, each containing a narrow serial compartment and an access tier. The list has a 20px top margin; a 10px uppercase monospace footer sits 16px below it with a 2px black top rule and 12px top padding.',
    style:
      'Use 2px black rules, square corners, monospace serials and heavy sans labels. Use the default sans stack for the 20px black-weight title with 20px line height and tight tracking, and 14px black-weight uppercase tier names with 20px line height. Use system monospace for 12px serials and 10px eyebrow/access details. Pass content has 8px vertical padding. A decorative 16px arrow, 18px plus and 18px star sit at the right with 12px right padding. Lime-300 day passes, white workshops and pink-200 all-access passes have no shadows. Each strip has a 40px serial compartment and 12px horizontal content padding.',
    states:
      'The passes are static identity information with no focus or hover states. Every tier includes a textual access description; no animation is present.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
