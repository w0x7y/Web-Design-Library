import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-course-syllabus',
  name: 'Course syllabus hero',
  category: 'hero',
  tags: ['editorial', 'light'],
  description:
    'An online course opening with a lesson outline and a clear enrollment action. Use it for focused creative classes and workshops.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px two-column layout pairs course positioning and instructor initials with an outlined syllabus panel. Panel has a top course label, four numbered lessons, and a footer showing duration and format.',
    style:
      'Amber-50 canvas, blue-950 text, blue-700 accent, white syllabus with blue-200 border. Heading is system serif at 60px on desktop. Lessons use blue-100 square number badges and thin blue-100 separators.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Two columns appear at 1024px. Heading is 48px below 640px and 60px above. All syllabus rows keep content in a flexible min-width-zero column so titles wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
