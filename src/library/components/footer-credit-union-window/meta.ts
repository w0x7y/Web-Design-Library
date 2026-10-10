import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-credit-union-window',
  name: 'Credit union branch-window footer',
  category: 'footer',
  tags: ['glass', 'gradient', 'dark'],
  description:
    'A credit union footer with a translucent member-services panel, branch opening hours and a call-booking link. Use it for community-owned financial co-operatives.',
  preview: { kind: 'section' },
  fonts: ['DM Sans:wght@400..700'],
  brief: {
    layout:
      'A full-width radial gradient with a centred 1280px container, 48px vertical and 24px side padding. Brand/member-ownership row above a translucent services window separated by 40px. The window has a headline and introduction region beside branch hours, address and a 48px-minimum-height call-booking pill. Bottom member links wrap with 20px gaps.',
    style:
      'DM Sans, cyan-50/cyan-100 foreground with cyan-200 ownership note. Radial gradient in oklab at the top right uses #155e75 at 0%, #083344 at 45%, #020617 at 100%. Window has 24px radius, white 5% fill, white 20% borders and 24px backdrop blur. Headline 44px medium with 1.05 line height and -0.04em tracking, branch hours 32px with 1.2 line height, body 15px with 1.6 line height, booking link 14px. No shadows.',
    states:
      'Text links underline on hover-capable devices. Call-booking pill fills cyan-100 and uses cyan-950 ink on hover. All links have a 2px currentColor keyboard focus outline offset 4px, visible in forced-colors mode. No animation.',
    responsive:
      'Below 640px window padding is 24px and headline 44px. From 640px padding is 40px and headline 68px. From 768px window uses flexible/288px columns; the branch divider becomes a left rule with 40px left padding. At 1024px outer side padding is 32px. Brand and member-link rows wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
