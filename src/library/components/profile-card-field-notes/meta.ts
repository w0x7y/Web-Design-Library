import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-field-notes',
  name: 'Field researcher profile',
  category: 'profile-card',
  tags: ['editorial', 'light'],
  description:
    'An editorial researcher card with a monogram, fieldwork details and a link to published notes. Use it for author pages, fellowships and research directories.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px article with 16px padding, expanding to 320px at 640px. A ruled publication label and monogram top the 24px name; an italic role and biography sit above a two-column definition list and text link.',
    style:
      'Warm #f7f4ec paper with square corners and a stone-300 border. Use a system serif for the large name and italic role, monospace for the issue label, stone-900 text and thin horizontal rules.',
    states:
      'The notes link underlines at rest, changes to stone-600 on hover and shows a 2px stone-900 focus outline offset by 2px. There are no animated or selectable states.',
    responsive:
      'Below 640px the card is 288px wide; at 640px it becomes 320px. The compact definition list remains two columns and the biography wraps naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
