import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-field-notes',
  name: 'Field researcher profile',
  category: 'profile-card',
  tags: ['editorial', 'light'],
  description:
    'An editorial researcher card with a monogram, fieldwork details and a link to published notes. Use it for author pages, fellowships and research directories.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px article with 16px padding, expanding to 320px at 640px. Header has a publication label and monogram above a 1px bottom rule and 8px bottom padding. Name follows after 12px, role after 4px and biography after 12px. A two-column definition list follows after 12px with 16px gap, 8px vertical padding and 1px top and bottom rules. Notes link follows after 12px with an 8px gap to a 14px arrow.',
    style:
      'Warm #f7f4ec paper, square corners, 1px stone-300 border and rules, stone-900 text. System-serif name is 24px with 1.25 line height, italic monogram 20px with 28px line height, italic role 12px stone-600. Monospace issue label is 10px uppercase with 0.16em tracking. Biography is 12px stone-700 with 20px line height. Detail labels are 10px uppercase stone-600 at 0.05em tracking, values 12px with 16px line height and 4px top gaps. Notes link is 14px with 20px line height, 4px underline offset and 4px corners.',
    states:
      'The notes link underlines at rest, changes to stone-600 on hover and shows a 2px stone-900 focus outline offset by 2px. There are no animated or selectable states.',
    responsive:
      'Below 640px the card is 288px wide; at 640px it becomes 320px. The compact definition list remains two columns and the biography wraps naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
