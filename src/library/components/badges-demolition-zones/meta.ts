import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-demolition-zones',
  name: 'Badges — Demolition zones',
  category: 'badges',
  tags: ['brutalist', 'dark'],
  description:
    'Breakline Works demolition badges mark restricted zones, clearance and work permits. Use them in contractor briefings or site-access records.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      'A 288px panel with 20px padding and a 2px border. A 12px wordmark precedes an orange warning plate with 16px padding, 44px warning SVG and 24px bold title. Two permit stamps wrap below with 8px gaps; a 12px site reference closes the panel.',
    style:
      'Space Grotesk on neutral-950, orange-100 text and orange-400 borders. The square warning badge is orange-400 with neutral-950 ink. Clearance stamp has a 2px orange-400 border; the permit badge is orange-100 with neutral-950 ink. Bold uppercase typography, no radii or shadows.',
    states:
      'Static zone information. A warning triangle is decorative and hidden; restricted access is also written as No entry. No controls, hover changes or animation.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
