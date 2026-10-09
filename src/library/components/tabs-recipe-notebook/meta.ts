import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-recipe-notebook',
  name: 'Tabs — Recipe notebook',
  category: 'tabs',
  tags: ['editorial', 'light'],
  description:
    'Two functional notebook-style radio tabs for a recipe ingredient list and cooking method.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide amber-50 notebook with 20px padding. A 24px serif title precedes two 36px ruled tabs and a compact ingredients or method panel.',
    style:
      'Use stone-800 text, amber-200 border, square corners and emerald-800 active bottom rules. Panel lists use 12px sans and an 18px serif subheading; quantities are right aligned.',
    states:
      'Native radios switch the visible ingredients or method section through group-has. Arrow keys switch choices; focus draws a 2px slate-900 outline with 2px offset on labels. There are no animated states.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
