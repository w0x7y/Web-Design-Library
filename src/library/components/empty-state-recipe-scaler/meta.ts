import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-recipe-scaler',
  name: 'A recipe scaler ready for ingredients',
  category: 'empty-state',
  tags: ['corporate', 'dark'],
  description:
    'Portionwise recipe-scaler empty state pairs unset serving quantities with an ingredient-import prompt. Use it before a cook pastes a recipe to adjust its yield.',
  preview: { kind: 'element' },
  fonts: ['DM Sans'],
  brief: {
    layout:
      '20px-padded utility panel with brand header, ruled three-column serving-ratio diagram, 20px two-line heading, 12px ingredients prompt, full-width 40px import action and 10px unit support note. Diagram quantities are 30px with 4px label gaps and a 24px connecting arrow.',
    style:
      'DM Sans, slate-900 ground, sky-100 heading and action fill, sky-200 labels, sky-300 diagram arrow, slate-300 body and slate-400 footer. 8px outer radius, 4px action radius and 1px slate-600 borders. No shadow.',
    states:
      'The recipe action underlines on hover and displays a 2px sky-100 outline offset 4px on keyboard focus. The unset ratio diagram is aria-hidden; the description conveys that no ingredients are present. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
