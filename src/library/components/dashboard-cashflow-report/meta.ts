import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-cashflow-report',
  name: 'Cash flow dashboard',
  category: 'dashboard',
  tags: ['editorial', 'light'],
  description:
    'A financial overview with balance, weekly income and recent payments. Use it for a freelance or small-business dashboard.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1152px dashboard with 40px vertical and 24px horizontal padding. A wrapping greeting and statement header has 20px gaps and a bottom rule. Two bordered panels follow after 28px with 24px gaps and padding. The balance has 30px tabular metrics and 12px labels; monthly totals sit below a rule with 28px top margin and 20px padding. The 128px-high income chart uses seven bars, 12px gaps and 10px day labels, with a named figure listing each daily amount. Three payment rows follow after 28px with 16px gaps and bottom padding.',
    style:
      'Default sans font, warm #f7f3eb canvas and #383229 ink. A 36px system-serif greeting has a 40px line height; the 10px date uses the system mono stack and 0.1em tracking. Square panels have 1px ink borders at 20% opacity; payment rules use 15%. Metric labels and hints use 70% opacity; payment descriptions use #756854. Olive #686f4c bars have 4px rounded top corners, heights 42, 65, 30, 98, 64, 17 and 12px, and total $3,280. No shadow.',
    states:
      'The 14px medium statement link has a 4px underline offset and a 2px current-color keyboard focus outline offset by 2px. Chart values are available in the figure name while its decorative bars and initials are hidden from assistive technology. No hover change or animation.',
    responsive:
      'Below 640px monthly totals stack; from 640px they use two equal columns and outer horizontal padding increases from 24px to 48px. Summary panels stack below 1024px and split 1fr/1.4fr from 1024px. Payment names and amounts wrap with 16px gaps. The layout reflows at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
