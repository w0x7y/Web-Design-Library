import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-language-proof',
  name: 'Badges — Translation proof',
  category: 'badges',
  tags: ['minimal', 'editorial', 'light'],
  description:
    'Bracketside translation badges pair a language-direction plate with review and delivery labels. Use them on multilingual document proofs.',
  preview: { kind: 'element' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      'A 288px element with 24px padding and a 1px border. A 12px agency label sits above a 36px language-direction plate; a wrapping row of 12px review badges follows after 24px. A ruled delivery strip follows after 20px.',
    style:
      'Stone-50 background, stone-950 text and stone-300 border, with no radius or shadow. Instrument Serif on the 36px language plate, default sans elsewhere. Reviewed uses a rose-100 rectangular badge with rose-950 type; the remaining labels have stone-300 borders.',
    states:
      'Static proof labels without controls, hover effects or animation. Language direction has an accessible name; the decorative arrow is hidden. Status words accompany every colour.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
