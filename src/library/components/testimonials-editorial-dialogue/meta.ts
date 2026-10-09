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
      'A 1024px cream section starts with a serif 48px heading and introduction. Two interview rows pair a small numbered question column with a 24px serif customer response and author detail. Each row has a hairline separator.',
    style:
      'Stone-100 background, stone-950 text, orange-800 question labels, stone-300 borders. Quotes use system serif, questions use 14px sans and author details use 12px sans.',
    states:
      'This interview section has no controls or interactive states. Question labels, quotation text and attribution have distinct semantic roles and visual hierarchy.',
    responsive:
      'Question and answer columns appear at 768px. Below that, each question precedes its answer in a stacked row. Heading is 36px on phones; quote stays 24px with generous line height.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
