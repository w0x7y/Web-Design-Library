import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-dark-mosaic',
  name: 'Dark customer quote mosaic',
  category: 'testimonials',
  tags: ['dark', 'minimal'],
  description:
    'A varied quote layout for technical customer feedback with one lead story and two short remarks. Use it for developer and productivity products.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container with 24px side and 80px vertical padding. A monospace eyebrow precedes a two-line heading by 16px; the quote mosaic starts 40px later with 20px gaps. One lead figure and two stacked supporting figures contain quotes and author/role attribution. The lead attribution starts 40px below its quote with a top border and 20px top padding.',
    style:
      'Zinc-950 canvas, white text and zinc-900 panels with 1px zinc-700 borders and 16px radii. Panels have 24px padding; the lead has a 4px lime-300 top border. Heading is 36px semibold with 1.25 line height and -0.025em tracking. The lead quote is 24px medium with 1.625 line height; supporting quotes are 20px with the same leading. Author names are semibold; roles use 12px zinc-400 text. The 12px uppercase monospace eyebrow is lime-300 with 0.1em tracking.',
    states:
      'No controls, hover states or animations. Each quotation has a semantic figure and caption. The lead uses border weight and size as well as color for emphasis.',
    responsive:
      'Below 768px all figures stack. At 640px the heading becomes 48px, lead quote 30px and panel padding 32px. At 768px the mosaic becomes 1.2fr / 1fr columns. Supporting figures stay stacked at every width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
