import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-project-enquiry',
  name: 'Project enquiry call to action',
  category: 'cta',
  tags: ['editorial', 'light'],
  description:
    'A studio enquiry section with a short project form and a realistic reply-time promise. Use it for agencies and independent service businesses.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container with 24px side and 80px vertical padding and a 40px grid gap. Studio availability with an 8px dot, serif heading, 384px-wide paragraph and email alternative precede a form. Form contains a required email field and project textarea with visible labels, then a reply-time hint and submit button. Form groups are 20px apart; labels sit 8px above controls. Email field is 48px tall; textarea has 128px minimum height and 16px padding.',
    style:
      'Stone-100 canvas, stone-950 text and orange-800 availability label. System serif heading is 36px with 1.25 leading. Controls are white with 1px stone-500 borders, 12px radii and 16px type; placeholders are stone-500 for readable contrast. Labels are 14px medium, body is stone-600 with 1.625 leading and hint is 12px stone-600 with 1.625 leading. Submit is a stone-950 pill with white 14px medium text, 48px minimum height, 24px side padding and 12px arrow gap. No shadows.',
    states:
      'Email link becomes orange-800 on hover; submit fills stone-800. Email link shows a 2px zinc-950 focus outline offset 2px; both fields and submit show 2px stone-950 outlines offset 2px. Required email uses native validation and an explicit required label. Both fields reference the reply-time hint with aria-describedby. Textarea resizes vertically. No transitions or animations.',
    responsive:
      'Below 768px text and form stack. At 640px heading becomes 48px. At 768px the grid becomes two equal columns with a 64px gap. Hint and button stay stacked with a 16px gap until 1024px, then sit in a centered, space-between row. Button does not shrink. Email alternative breaks long addresses.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
