import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-makers-cooperative',
  name: 'Makers cooperative team',
  category: 'team',
  tags: ['playful', 'light'],
  description:
    'A warm cooperative team section with colorful craft cards and a workshop invitation. Use it for local studios, maker collectives and community organizations.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1024px section with 24px side padding and 64px vertical padding. A pill eyebrow, 36px heading and paragraph sit above three 24px-padded maker cards. Each card has an 80px monogram circle, name, craft, biography and work link; a workshop invitation follows.',
    style:
      'Orange-50 background with rose-200, sky-200 and lime-200 cards, each outlined in stone-900 with 24px corners. Bold system sans headings and italic system-serif monograms. Stone-900 text provides strong contrast on the pastel colors.',
    states:
      'Maker links and the workshop link are underlined, change to deeper local accent colors on hover and show 2px stone-900 focus outlines offset 2px. There are no motion effects.',
    responsive:
      'Cards stack at widths below 768px and become three equal columns at 768px. Heading grows from 36px to 48px and section padding to 80px at 640px. All paragraphs wrap without clipping.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
