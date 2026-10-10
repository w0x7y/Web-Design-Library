import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-course-syllabus',
  name: 'Course syllabus hero',
  category: 'hero',
  tags: ['editorial', 'light'],
  description:
    'An online course opening with a lesson outline and a clear enrollment action. Use it for focused creative classes and workshops.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px grid with 24px horizontal and 80px vertical padding and 48px gaps. Introduction contains a course identifier, heading, 448px-wide paragraph, 48px-tall enrollment link and instructor row with 40px initials. Syllabus has a heading, chapter count, four ordered lessons with 40px number badges, 16px gaps and 20px vertical padding, then a schedule footer.',
    style:
      'Amber-50 canvas, blue-950 text and default sans except the system-serif heading. Heading is 48px, line-height 1.25, -0.025em tracking; body is 18px blue-900 with 1.625 line-height. Enrollment link has 8px corners, blue-950 fill and white medium text. White syllabus has 16px corners, a blue-200 border and blue-100 separators and number badges.',
    states:
      'Enrollment link fills blue-900 on hover and shows a 2px zinc-950 keyboard focus outline offset 2px, including forced colours. No transitions or other interactive states.',
    responsive:
      'Below 640px heading is 48px and syllabus has 24px padding. At 640px heading becomes 60px and syllabus padding 32px. At 1024px the grid becomes two equal columns with 80px gap. Lesson copy can shrink and wrap while number badges and instructor initials stay 40px wide.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
