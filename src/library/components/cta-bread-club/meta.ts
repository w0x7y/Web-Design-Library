import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-bread-club',
  name: 'Weekly bread club',
  category: 'cta',
  description:
    'A neighborhood bakery subscription CTA with a loaf-shaped plan panel and a clear weekly pickup schedule.',
  tags: ['playful', 'light'],
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      '1280px container with 24px horizontal and 56px vertical padding, a text block and loaf-shaped subscription panel separated by 40px. Panel has 24px horizontal padding, 48px top padding, 24px bottom padding; its schedule is a semantic definition list with 12px row gaps.',
    style:
      'Bricolage Grotesque, rose-100 background and rose-950 text. Heading is 48px bold with 1.02 leading and -0.025em tracking; body 18px with 28px leading. White panel has a 2px rose-950 border, 96px top corners and 24px bottom corners. Three decorative rose-200 bread scores tilt 30 degrees. Rose-950 pill action, white 14px semibold label, no shadows.',
    states:
      'Bread signup action changes to rose-900 on hover-capable devices, with a 2px rose-950 outline offset 4px on keyboard focus. Decorative loaf is aria-hidden where appropriate. No animation.',
    responsive:
      'At 640px padding becomes 80px vertical and 32px horizontal, heading 64px, and panel horizontal padding 40px. At 768px text/panel become 1.4:1 columns, vertically centered. Below 768px they stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
