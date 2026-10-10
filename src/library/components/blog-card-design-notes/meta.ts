import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-design-notes',
  name: 'Design process article card',
  category: 'blog-card',
  tags: ['minimal', 'light'],
  description:
    'An illustrated design article card with a process diagram, category label and reading time. Use it for product design blogs and learning resource indexes.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px article, 320px from 640px, with a 112px cover centering a 240px-wide, 96px-tall decorative process diagram. The body has 16px padding. A category label leads into a linked headline after 8px, then a summary after 8px. A space-between byline and reading-time row starts 16px below the summary, with a top rule, 12px top padding and 12px gap.',
    style:
      'White card with 1px slate-200 border and 12px corners, also on the cover top corners; no shadow. Sky-100 cover with a pale blue circle, sky-blue rounded square and dark blue checked diamond joined by dashed blue lines. Default sans: sky-800 10px semibold uppercase category with 0.14em tracking; slate-950 20px semibold headline with 28px line height and -0.025em tracking; slate-600 12px summary with 20px line height and 11px byline. The headline link has 4px corners.',
    states:
      'The headline link becomes sky-800 on hover and has a 2px sky-800 focus outline with 2px offset. The diagram is decorative and does not animate.',
    responsive:
      'The fixed card width grows from 288px to 320px at 640px. Headline and summary wrap in the body; artwork and metadata keep their arrangement.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
