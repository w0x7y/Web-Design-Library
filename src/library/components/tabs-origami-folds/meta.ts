import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-origami-folds',
  name: 'Tabs — Origami fold steps',
  category: 'tabs',
  tags: ['playful', 'light'],
  description:
    'A Foldlet paper-folding guide with numbered side tabs and changing crease diagrams. Use it in craft tutorials and origami instruction cards.',
  preview: { kind: 'element' },
  fonts: ['Syne:wght@400..800'],
  brief: {
    layout:
      'A 20px-padded card with 2px border and 20px corners. The header pairs a 20px brand with a study number and a 12px project subtitle. A two-column workbench starts 20px below: a 44px-wide step rail with 44px-high controls and 8px gaps, then the selected 112px square diagram, title and instruction. Columns are 16px apart.',
    style:
      'Syne on rose-50 with rose-950 headings and rose-900 body copy. Paper drawings use rose-200 fill (#fecdd3), rose-900 strokes (#881337), and dashed crease lines. Labels have 1px rose-800 borders, 8px radii, and white-on-rose-900 checked states. Title is 16px bold; instructions are 12px with 20px line height. No shadows.',
    states:
      'Three native radios with descriptive step names reveal separate diagrams and written instructions with CSS. Unselected hover is rose-100. Label focus is a 2px rose-900 outline offset 2px; forced colors retain an input outline and selection underline. Diagrams are decorative because each step has text instructions. No motion.',
    responsive:
      '288px wide below 640px; 336px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
