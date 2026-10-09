import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-search-refinement',
  name: 'No search matches',
  category: 'empty-state',
  tags: ['corporate', 'light'],
  description:
    'A search-results empty state with query context and next steps. Use it when filters leave a collection with no matches.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px search empty state with icon and count row, 18px query heading, three suggestion lines and two actions.',
    style:
      'Slate-50 panel, slate-950 title, slate-600 suggestions and blue-700 primary button. No outer border; compact 12px action copy.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
