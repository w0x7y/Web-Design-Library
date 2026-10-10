import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-release-log',
  name: 'Product release article card',
  category: 'blog-card',
  tags: ['dark', 'minimal'],
  description:
    'A developer-facing release card with a version cover, release notes summary and date. Use it in changelog indexes and software company blogs.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px article, 320px from 640px. A 16px-padded cover holds a release label and a space-between version/status row 12px below, aligned at the bottom. The body has 16px padding with a semantic date/category row, a linked headline after 12px, a summary after 8px and a ruled byline after 16px with 12px top padding.',
    style:
      'Zinc-950 surface with 1px zinc-700 frame and 8px corners, no shadow. The zinc-900 cover has 7px top corners and a 1px zinc-700 bottom rule. Zinc-400 monospace labels: 9px uppercase cover eyebrow with 0.1em tracking and 10px date/category. Lime-300 36px semibold monospace version with 40px line height and -0.025em tracking; the adjacent patch suffix is 20px with 28px line height. Stable badge: 9px lime-300 monospace text, 1px lime-300 border at 40% opacity, 4px corners, 8px horizontal and 4px vertical padding. Default-sans body: zinc-100 20px semibold headline with 28px line height and 4px link corners; zinc-400 12px summary with 20px line height and 11px byline over a zinc-800 rule.',
    states:
      'The headline becomes lime-300 on hover and shows a 2px lime-300 outline offset by 2px on keyboard focus. The release version is readable by assistive technology and stable status is conveyed in visible text. No animation.',
    responsive:
      'Width is 288px below 640px and 320px above. The version row stays horizontal while the headline and summary wrap freely.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
