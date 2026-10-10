import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-observatory-night',
  name: 'Observatory night navigation',
  category: 'navbar',
  tags: ['gradient', 'dark'],
  description:
    'An observatory header with an orbital mark, observing links and a timed admission block. Use it for night tours and science venues.',
  preview: { kind: 'section' },
  fonts: ['Space Grotesk:wght@400;500;600'],
  brief: {
    layout:
      '1280px maximum container with 24px padding. Grid masthead has 32px gaps. Brand pairs a 40px orbital SVG with 24px semibold name and 12px uppercase descriptor. Navigation is a two-column grid with 16px gaps and 14px links. Admission block has a top rule, 12px label and 18px medium session link 12px below. Bottom coordinate ruler has four equal cells with 1px left borders and 12px labels, 32px below the masthead.',
    style:
      'Space Grotesk. Oklab gradient moves right from neutral-950 through orange-950 to amber-950. Amber-50 text, amber-200 coordinates and orange-300 admission rule. No corners or shadows.',
    states:
      'Brand, observing links and admission underline on hover. Every control has a 2px currentColor focus outline offset 2px, including forced colours. No animated effects.',
    responsive:
      'Masthead stacks below 768px; from 768px uses three equal columns. Coordinate ruler stays four equal columns and wraps its text. Constant 24px padding supports 320px widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
