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
      'A full-width section with a 1024px centered container, 24px horizontal padding and 64px vertical padding. Header and numbered three-person list stack on mobile and form 1:1.3 columns with a 64px gap from 768px. Roster rows use a 32px number column, flexible biography and contact link.',
    style:
      'Warm #f7f4ec background, stone-900 text, stone-300 row rules and a darker top rule. System-serif 36px heading grows to 48px at 640px. People names are 24px serif; disciplines and location are restrained sans text.',
    states:
      'Every named email link changes to stone-500 on hover and gets a 2px stone-900 focus outline with 2px offset. The roster is static and has no animation.',
    responsive:
      'At 320px the section is one column with wrapped name and location text. At 768px it splits into two columns and vertical padding grows to 96px. Number and contact columns remain narrow and fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
