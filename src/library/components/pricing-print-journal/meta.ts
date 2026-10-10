import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-print-journal',
  name: 'Print journal issue and subscription',
  category: 'pricing',
  tags: ['editorial', 'dark'],
  description:
    'An independent print journal purchase section with a typographic issue cover, single-issue price and annual subscription. Suits magazines and small editorial publishers.',
  preview: { kind: 'section' },
  fonts: ['Young Serif'],
  brief: {
    layout:
      '1280px maximum width, 24px side and 64px vertical padding. Brand masthead with bottom rule, then a cover figure and purchase rail separated by 40px gap. Cover is a 448px minimum-height flex column with issue information, giant number, story title and footer. Purchase rail has heading, intro and two ruled offers with names, prices and ordering links.',
    style:
      'Fuchsia-950 canvas, pink-100 text, pink-200 body and pink-300 rules. Young Serif regular for brand, cover number/title, heading and rates; default sans body. Pink-200 cover with fuchsia-950 ink and square edges, 24px padding. Issue number 112px/1 with -0.05em tracking, heading 36px/1.15, prices 30px. Annual button pink-300/fuchsia-950, square, 48px minimum height. No shadows.',
    states:
      'Single-issue link becomes white on hover, annual button fills pink-200. Both have a 2px pink-300 keyboard-focus outline offset 4px. Decorative large issue number is hidden from assistive technology; caption explicitly identifies the issue. No animation.',
    responsive:
      'At 640px padding becomes 80px, cover padding 40px, issue number 160px and cover title 36px. At 1024px layout becomes 1.2fr/1fr columns with 80px gap and top alignment. Below that cover precedes purchase options. Masthead and price headers wrap on narrow screens.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
