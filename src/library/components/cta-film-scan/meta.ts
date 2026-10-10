import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-film-scan',
  name: 'Film scanning mail-in service',
  category: 'cta',
  description:
    'A film-lab CTA built like a mail-in instruction sheet, with a camera photograph, format labels and a separate order strip.',
  tags: ['minimal', 'dark', 'has-image'],
  preview: { kind: 'section' },
  fonts: ['IBM Plex Mono:wght@400;600'],
  brief: {
    layout:
      '1280px maximum-width zinc section with 24px horizontal and 48px vertical padding. Monospace masthead above a square-cornered stone-100 mailer panel containing photograph and text. Panel text has 24px padding; format labels wrap with 12px gaps. Footer has 24px top margin and 20px gap with service note and action.',
    style:
      'IBM Plex Mono, zinc-950 outer background, zinc-100 masthead, stone-100 mailer and zinc-950 heading. Heading 32px regular with 1.15 leading and -.025em tracking; body 14px/24px zinc-700. Photo cover crop. Format labels have 1px zinc-400 borders, 12px horizontal and 8px vertical padding. Square stone-100 action with zinc-950 14px semibold label, 48px minimum height. No shadows.',
    states:
      'Mailer action becomes white on hover-capable devices and shows a 2px white outline offset 4px on keyboard focus. Styled format list keeps role=list. No animation.',
    responsive:
      'At 640px outer padding becomes 64px vertical and 32px horizontal, text padding becomes 40px, heading 44px, photograph height 288px instead of 224px, and footer forms a row. At 1024px mailer becomes .8:1.2 columns and photo fills panel height. Smaller widths stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
