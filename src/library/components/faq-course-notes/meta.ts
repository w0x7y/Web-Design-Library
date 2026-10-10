import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-course-notes',
  name: 'Course notes FAQ',
  category: 'faq',
  tags: ['editorial', 'light'],
  description:
    'An always-visible course FAQ presented as numbered editorial notes. Use it for education products where readers should compare requirements easily.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1024px container has 24px horizontal and 80px vertical padding. A monospace eyebrow precedes the serif h2 by 20px. Four always-visible articles follow after 40px in a grid with 48px column and 32px row gaps. Each has a top rule, 20px top padding, a number, and a question and answer each separated by 12px. The contact line has a top rule, 24px top padding and 40px top margin.',
    style:
      'Amber-50 canvas, stone-950 ink, stone-600 answers and orange-800 12px monospace eyebrow and numbers. The eyebrow is uppercase with 0.1em tracking. The system-serif h2 is 36px with 1.25 line height, increasing to 48px at 640px. Questions are 20px medium with 28px line height; answers are 14px with 1.625 line height. Dividers are 1px stone-300. No cards or shadows.',
    states:
      'The school contact link is underlined with a 4px underline offset. Hover changes its text from stone-950 to orange-800. Keyboard focus shows a 2px zinc-950 outline offset 2px, including in forced colors. No disclosures or transitions.',
    responsive:
      'One question column below 768px and two equal columns from 768px. The title increases from 36px to 48px at 640px while retaining 1.25 line height. Container padding stays 24px horizontally and 80px vertically; all answers remain visible.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
