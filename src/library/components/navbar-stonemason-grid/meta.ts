import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-stonemason-grid',
  name: "Stonemason project grid",
  category: 'navbar',
  tags: ['brutalist', 'dark'],
  description: "A stonemason header for Block & Line, with numbered stonework cells and a contrasting project enquiry. Use it for architectural carving and stone conservation workshops.",
  preview: { kind: 'section' },
  fonts: ['Archivo:wght@400;600;800'],
  brief: {
    layout: "A 1280px maximum container with 20px padding. Wrapping masthead has a 30px brand and 12px location/appointment note with 16px gaps. Navigation begins 24px below. Each 1px-bordered flex-column cell has 16px padding, a 12px numbered category and an 18px semibold link label 24px below.",
    style: "Archivo on neutral-950 with yellow-300 type and borders. Uppercase brand has 800 weight and -0.025em tracking. The project-enquiry cell has yellow-300 fill and neutral-950 text. Square corners, no shadows.",
    states: "Service cells fill yellow-300 and turn neutral-950 on hover. Enquiry cell fills yellow-200. Brand underlines. Every link has a 2px currentColor keyboard-focus outline offset 2px, including forced colours. No animation.",
    responsive: "Navigation uses two equal columns below 768px and four from 768px. Masthead wraps at narrow widths and labels wrap within their cells at 320px. Outer padding remains 20px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
