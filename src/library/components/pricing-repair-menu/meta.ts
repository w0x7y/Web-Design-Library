import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-repair-menu',
  name: 'Audio repair price menu',
  category: 'pricing',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'An expandable audio-repair price menu with turnaround estimates, quote policy and a product photograph. Use it for local services where fixed guide rates need scope notes.',
  preview: { kind: 'section' },
  fonts: ['DM Sans:wght@400..500'],
  brief: {
    layout:
      '1280px maximum width, 24px side and 64px vertical padding. Eyebrow and heading, then service menu and repair promise panel 40px below. Four native details items have a 20px padded summary with service/turnaround on the left and price/plus on the right. Diagnosis starts open. Right panel contains a cropped headphone photo, title, policy copy and 48px contact link.',
    style:
      'DM Sans, white background, neutral-950 ink, neutral-600 descriptions and neutral-400 separators. Heading 36px medium/1.1 with tight tracking. Service names 20px, rates 24px, turnaround 12px, body 14px/1.625. Promise panel neutral-100 with 16px radius and 24px padding; image 2:1 with 8px radius. CTA neutral-950/white with 8px radius. No shadows.',
    states:
      'Native summaries expand repair scope. Decorative plus rotates 45 degrees when open, without animation. Summary turns neutral-600 on hover and CTA fills neutral-700. Every summary and link has 2px neutral-950 focus outline offset 4px, including forced colours. Product image has descriptive alt.',
    responsive:
      'At 640px vertical padding becomes 80px and heading becomes 60px. At 1024px layout becomes 1.4fr/1fr columns with 64px gap. Below that promise panel follows menu. Summary name column shrinks and wraps while the amount stays together.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
