import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-sled-team',
  name: 'Badges — Sled team tags',
  category: 'badges',
  tags: ['playful', 'light'],
  description:
    'Northpaw Run sled-team badges pair numbered harness pennants with dog names and lead-pair traits. Use them in sled-tour team rosters.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px card with 20px padding and 24px radius. A 12px operator label and 20px title sit over two aligned-bottom harness pennants with 16px gaps. Each pennant is 96px wide; the lead tag is 112px tall and its partner is 96px tall. A wrapping trait row follows after 16px.',
    style:
      'Default sans stack, sky-100 panel and sky-950 text. Lead pennant is sky-800 with sky-50 ink, partner is orange-700 with white ink. Clip the bottom corners into 12px angled points. Numerals are 30px bold and names 12px semibold. Trait tags have white fills, 1px sky-700 borders and 6px radii. No shadows.',
    states:
      'Static roster labels without controls, hover changes or animation. Both dogs have names and textual roles; colour is decorative.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
