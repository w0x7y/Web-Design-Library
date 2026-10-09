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
      'A centered 768px registration section with 48px vertical padding. Wrapping masthead has a school name and cohort pill, 16px gaps and a rule 24px below. Welcome, four lesson titles and enrollment form sit in columns 32px apart, 32px below the header. Form has 24px padding, 20px row gaps and 8px label gaps.',
    style:
      'Orange-50 canvas, orange-950 sans headings, orange-900 body, orange-200 rules and 2px form border. White form has 16px radius. School name is 24px/32px bold with -0.025em tracking; welcome is 36px bold with 1.25 line height. Labels 14px; syllabus and cohort 12px medium. Inputs use 8px radii and current-color borders at 60%; native select uses orange-700 border. Orange-800 submit has 12px radius and white 14px bold text. No shadows.',
    states:
      'Required name and email fields use native validation. Native experience select has three options, starting with beginner. Form uses POST. Controls show 2px current-color keyboard outlines offset 2px; submit uses stone-950. No authored hover states or motion.',
    responsive:
      'Below 768px welcome and form stack; from 768px they use equal columns. Section horizontal padding is 24px below 640px and 48px above. Masthead wraps and inputs/select shrink to fit at 320px; form padding remains 24px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
