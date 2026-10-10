import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-seed-archive',
  name: 'Seed archive specimen sheet',
  category: 'features',
  tags: ['minimal', 'light'],
  description:
    'A seed bank feature section with a botanical specimen, accession notes and practical grower benefits. Use it for conservation projects or small agricultural catalogues.',
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A 1280px container with 24px horizontal and 64px vertical padding. A 36px heading precedes a 48px-gapped two-column specimen spread: a pale green botanical plate with a 224px SVG and three labelled accession facts, then two grower benefits and a catalogue link.',
    style:
      'Manrope on green-50 with green-950 ink and green-800 body copy. The specimen uses green-100, 1px green-200 borders, 8px corners and a 224px botanical line drawing. Headings are 24px and semibold; the main heading has 1.1 line height and -0.025em tracking.',
    states:
      'The catalogue link underlines on hover and has a 2px green-950 keyboard-focus outline offset 4px. The specimen drawing is decorative; definition lists retain their native semantics. No animation.',
    responsive:
      'One column below 768px. At 768px the spread becomes two equal columns. The title grows from 36px to 48px at 640px; vertical padding grows to 80px and horizontal padding to 32px at 1024px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
