import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-makers-cooperative',
  name: 'Makers cooperative team',
  category: 'team',
  tags: ['playful', 'light'],
  description:
    'A warm cooperative team section with colorful craft cards and a workshop invitation. Use it for local studios, maker collectives and community organizations.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'Full-width section with a centered 1024px container, 24px side and 64px vertical padding. Header is limited to 576px with a pill label, title after 20px and introduction after 16px. A three-person list follows after 40px with 20px gaps. Each card has 24px padding, 80px monogram, name after 24px, craft after 4px, biography after 16px and work link after 24px. Flexible biographies align links across the row. A workshop invitation follows after 32px.',
    style:
      'Orange-50 section, stone-900 text and 1px borders. Cards have 24px corners with rose-200, sky-200 and lime-200 fills. Monograms are 36px italic system serif on rose-50, sky-50 and lime-50 circles. Other type uses default sans. Eyebrow has 12px medium type, 12px horizontal and 4px vertical padding. Heading is 36px bold with 1.25 line height and -0.025em tracking. Introduction is 14px stone-700 with 28px line height. Names are 24px bold with 32px line height, crafts 12px uppercase semibold at 0.05em tracking, biographies 14px with 24px line height. Work links are 14px semibold with 20px line height, 4px corners and 14px decorative arrows spaced 8px away.',
    states:
      'Named maker links are underlined with 4px underline offset. Hover changes Alice to rose-900, Omar to sky-900 and Bea to lime-900. Workshop link changes stone-900 to orange-800. Every link has a 2px stone-900 focus outline with 2px offset, including forced colours. No motion.',
    responsive:
      'Below 640px use 24px horizontal and 64px vertical padding with a 36px heading. At 640px padding becomes 32px horizontal and 80px vertical, heading 48px while retaining 1.25 line height. Cards stack below 768px and become three equal columns from 768px. Biographies wrap and links align at the bottom of each row.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
