import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-editorial-dialogue',
  name: 'Editorial interview testimonials',
  category: 'testimonials',
  tags: ['editorial', 'light'],
  description:
    'Two customer perspectives presented like a short interview with question labels. Use it for educational courses and thoughtful service brands.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1024px container with 24px side and 80px vertical padding. An eyebrow, heading and 576px-wide introduction precede two interview articles. Each article pairs a numbered question with a figure containing the answer and a direct attribution caption. The first starts 40px below the introduction; articles have 32px vertical padding, 24px grid gaps and 1px separators. Captions start 24px below quotes, with an 8px gap before the inline role.',
    style:
      'Stone-100 canvas, stone-950 text, stone-300 separators and orange-800 numbered question labels. System serif heading is 36px with 1.25 line height; answers are 24px serif with 1.625 line height. Questions are 14px medium sans, introduction is 14px stone-600 and captions are 12px with semibold names and stone-600 roles. Eyebrow and question numbers use 12px system monospace; the eyebrow is uppercase with 0.1em tracking.',
    states:
      'No controls, hover states or animations. Each answer has its own figure with a direct caption, and question text remains outside the quotation.',
    responsive:
      'Below 768px each question stacks before its answer. At 640px the heading becomes 48px. At 768px interview articles use a 224px question column and a flexible answer column, separated by 24px. Quotes remain 24px throughout.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
