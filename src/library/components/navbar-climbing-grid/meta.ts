import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-climbing-grid',
  name: 'Climbing gym grid',
  category: 'navbar',
  tags: ['brutalist', 'dark'],
  description:
    'A hard-edged gym header with numbered navigation cells and a contrasting first-visit cell. Use it for climbing gyms and activity spaces.',
  preview: { kind: 'section' },
  fonts: ['Archivo:wght@400;600;800'],
  brief: {
    layout:
      '1280px maximum container with 20px padding. Wrapping masthead has a 30px brand and 12px opening-hours label separated by 16px. Navigation grid is 24px below. Each bordered cell has 16px padding, 12px number and 18px semibold label 24px below.',
    style:
      'Archivo on neutral-950 with yellow-300 text and 1px borders. Uppercase 800-weight brand has -0.025em tracking. First-visit cell has yellow-300 fill and neutral-950 text. Square corners, no shadows.',
    states:
      'Regular cells fill yellow-300 and turn neutral-950 on hover; first-visit fills yellow-200. Brand underlines. All controls have 2px currentColor focus outlines offset 2px, including forced colours.',
    responsive:
      'Menu has two columns below 768px and four from 768px. Masthead wraps at narrow widths. Constant 20px outer padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
