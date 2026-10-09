import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-studio-roster',
  name: 'Independent studio roster',
  category: 'team',
  tags: ['editorial', 'light'],
  description:
    'A typographic studio roster with numbered people, disciplines and individual contact links. Use it for small creative teams with a shared practice.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'Full-width section with a centered 1024px container, 24px horizontal and 64px vertical padding. Header and three-person roster stack with a 40px gap. Eyebrow leads to title after 20px and introduction after 20px limited to 384px. Roster has a 1px top rule and rows with 24px vertical padding and 1px bottom rules. Each row is a grid of 32px number, flexible identity and fixed 36px email target with 12px gaps. Discipline follows name after 4px, location after 12px.',
    style:
      'Warm #f7f4ec background, stone-900 text, stone-300 row rules and stone-900 top rule. System-serif heading is 36px with 1.25 line height and -0.025em tracking; names 24px with 32px line height. Eyebrow is 12px uppercase monospace with 0.18em tracking. Numbers are 12px monospace with 4px top padding. Introduction is 14px with 28px line height, disciplines 14px with 20px line height, locations 12px with 16px line height. All secondary text uses stone-600 for contrast on warm paper. Email links have 4px corners and centered 14px decorative arrow icons.',
    states:
      'Each 36px square email target names its recipient with an aria-label. On hover it changes from stone-900 to stone-600. Keyboard focus draws a 2px stone-900 outline offset by 2px, including in forced colours. No animation.',
    responsive:
      'Below 640px heading is 36px; from 640px it becomes 48px, retaining 1.25 line height. Below 768px introduction and roster stack with 40px gap and 64px vertical padding. At 768px they form 1:1.3 columns with a 64px gap and 96px vertical padding. Horizontal padding stays 24px. Number and email columns remain fixed, while names, disciplines and locations wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
