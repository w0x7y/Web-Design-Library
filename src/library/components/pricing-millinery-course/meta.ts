import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-millinery-course',
  name: 'Millinery course fee and syllabus',
  category: 'pricing',
  tags: ['editorial', 'dark'],
  description:
    'A milliner\'s four-week hat-making course with a full fee, deposit terms and an included-materials disclosure. Use it for small craft workshops.',
  preview: { kind: 'section' },
  fonts: ['Newsreader:wght@400', 'DM Sans:wght@400;600'],
  brief: {
    layout:
      '1280px maximum width with 24px side and 64px vertical padding. Ruled masthead names studio and start date. Two content regions start 40px below with 48px gap: headline, copy, giant fee and booking link; then a four-week ordered syllabus with 48px number columns, 16px gaps and 20px vertical padding. Materials disclosure closes the syllabus.',
    style:
      'Rose-950 background and rose-100 text, rose-300 rules and giant rate. Newsreader regular for heading, fee, numbers and lesson titles; DM Sans body. Heading 48px/1.05, price 80px/1, lesson titles 24px. CTA rose-100/rose-950, square corners, 48px minimum height and 24px side padding. Body 14px with 1.625 line height. No shadows.',
    states:
      'Booking link fills rose-200 on hover, summary turns rose-300. Both show a 2px rose-300 focus outline offset 4px. Native details reveals included felt, blocks and trimming terms. Ordered list keeps role=list. No motion.',
    responsive:
      'At 640px section padding becomes 80px, headline becomes 72px and fee becomes 112px. At 1024px layout becomes 1fr/1.1fr columns with 80px gap. Below that course information precedes the syllabus. Masthead wraps on phones.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
