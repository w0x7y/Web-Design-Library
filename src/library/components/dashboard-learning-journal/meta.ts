import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-learning-journal',
  name: 'Learning progress dashboard',
  category: 'dashboard',
  tags: ['playful', 'light'],
  description:
    'A learning dashboard with course progress, weekly practice and the next lesson. Use it for a creative learning platform.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px learning overview with greeting, current-lesson panel and two stacked practice/habit panels. Native progress shows 6 of 8 lessons complete.',
    style:
      'Orange-50 canvas, white lesson card, orange-200 practice card and 2px orange-200 borders. Rounded 16px cards, 36px bold headline and orange-900 pill action.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Main panels stack below 768px and split 1.3fr/1fr above. Outer padding is 24px then 48px at 640px. All copy wraps and the progress track fills only its panel width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
