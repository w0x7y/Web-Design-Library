import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-search-refinement',
  name: 'No search matches',
  category: 'empty-state',
  tags: ['corporate', 'light'],
  description:
    'A search-results empty state with query context and next steps. Use it when filters leave a collection with no matches.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px panel with 24px padding. A 48px search icon and a count pill share a flex row with 16px gap. The count has a 1px border and 4px vertical, 12px horizontal padding. An 18px semibold heading follows after 20px. A semantic three-item suggestion list follows after 16px with 8px gaps, 12px text and 20px line height. Actions wrap with 12px gaps and 24px top margin.',
    style:
      'Default sans font on a square slate-50 panel without shadow or border. Slate-950 heading, slate-500 icon, slate-600 count and suggestions, slate-300 count border. Blue-700 primary button with an 8px radius, 12px semibold white text and 10px vertical, 12px horizontal padding. Underlined 12px semibold browse link.',
    states:
      'The clear-filters button has a pointer cursor, blue-800 hover fill on hover-capable devices and a 2px stone-950 focus outline offset by 2px. Browse has a 4px underline offset and a 2px current-color focus outline offset by 2px. No animation.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
