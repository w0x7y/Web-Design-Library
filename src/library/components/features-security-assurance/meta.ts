import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-security-assurance',
  name: 'Security assurance features',
  category: 'features',
  tags: ['corporate', 'light'],
  description:
    'A security overview with a trust banner and four explicit assurance rows. Use it for enterprise products that handle sensitive information.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1152px maximum-width section with 24px side and 80px vertical padding. A 12px eyebrow precedes a max-width 672px h2 by 16px; a max-width 576px introduction follows 20px below. A trust-center banner starts 32px later, with 24px padding and a 16px flex gap. Four assurance rows begin 40px below it in a grid with 48px column gaps. Each row has a top border, 24px vertical padding and a 20px check separated from title/body by 16px.',
    style:
      'Default sans on white with slate-950 headings and slate-600 paragraphs. The semibold heading is 36px, 1.25 line height and -0.025em tracking; eyebrow is 12px blue-700 semibold uppercase with 0.1em tracking. Banner has blue-50 fill, a 1px blue-100 border, 12px radius, blue-950 14px text and a bold lead. Checks are blue-700, shifted down 4px. Row titles are 16px semibold; descriptions are 14px with 1.625 line height and 8px top margin. Row borders are 1px slate-200; no shadows.',
    states:
      'Visit the trust center is the only control. It underlines on hover-capable devices and shows a 2px zinc-950 outline offset 2px on keyboard focus, including forced-colors mode. Its 16px arrow and assurance checks are decorative and aria-hidden. No motion or transitions.',
    responsive:
      'Below 640px the heading is 36px and the banner stacks its text and link. At 640px the heading becomes 48px with the same 1.25 line height, and the banner becomes a centered row with space-between alignment. The link remains fit-content and does not shrink. Assurance rows stack below 768px and form two equal columns from 768px. All text wraps without horizontal scrolling.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
