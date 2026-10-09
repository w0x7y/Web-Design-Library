import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-course-registration',
  name: 'Course registration form',
  category: 'signup',
  tags: ['playful', 'light'],
  description:
    'A course enrollment form with cohort and lesson details. Use it for a small learning platform or creative workshop.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 768px course registration with cohort masthead, four lesson titles and a 24px-padded enrollment form. The form has name, email and native experience select.',
    style:
      'Orange-50 canvas, orange-950 headings, orange-200 rules, white rounded form and orange-800 action. Bold sans 36px headline, 14px fields and 12px syllabus labels.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Use 24px outer padding on phones and 48px at 640px. Desktop columns become a single readable column below 768px; controls stay within the 320px viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
