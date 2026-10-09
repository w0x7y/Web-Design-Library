import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-course-notes',
  name: 'Course notes FAQ',
  category: 'faq',
  tags: ['editorial', 'light'],
  description:
    'An always-visible course FAQ presented as numbered editorial notes. Use it for education products where readers should compare requirements easily.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px section opens with a serif title and then a two-column set of four questions. Each question uses a top hairline, an orange monospace number, a 20px heading and full answer text.',
    style:
      'Amber-50 background, stone-950 text, orange-800 numbered labels and stone-300 dividers. Heading is 48px serif, answers are 14px with relaxed line height. No cards or shadows.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Question grid changes from one column to two at 768px. Section heading is 36px on phones and 48px at 640px. All answers stay visible at every width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
