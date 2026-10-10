import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-lido-mornings',
  name: 'Morning lido membership',
  category: 'cta',
  description:
    'An outdoor swimming lido CTA with a pool-shaped membership panel, wave illustration and clear weekday hours. Use it to promote an early-morning swim pass.',
  tags: ['playful', 'light'],
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      '1280px container with 24px horizontal and 56px vertical padding, a text block and pool-shaped membership panel separated by 40px. Panel has 24px horizontal padding, 48px top padding, 24px bottom padding; its schedule is a semantic definition list with 12px row gaps.',
    style:
      'Bricolage Grotesque, sky-100 background and sky-950 text. Heading is 48px bold with 1.02 leading and -0.025em tracking; body 18px with 28px leading. White panel has a 2px sky-950 border, 96px top corners and 24px bottom corners. A decorative 112px by 48px sky-800 wave illustration sits above the panel heading. Sky-950 pill action, white 14px semibold label, no shadows.',
    states:
      'Swim membership action changes to sky-900 on hover-capable devices, with a 2px sky-950 outline offset 4px on keyboard focus. Decorative wave is aria-hidden where appropriate. No animation.',
    responsive:
      'At 640px padding becomes 80px vertical and 32px horizontal, heading 64px, and panel horizontal padding 40px. At 768px text/panel become 1.4:1 columns, vertically centered. Below 768px they stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
