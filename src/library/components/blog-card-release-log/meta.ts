import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-release-log',
  name: 'Product release article card',
  category: 'blog-card',
  tags: ['dark', 'minimal'],
  description:
    'A developer-facing release card with a version cover, release notes summary and date. Use it in changelog indexes and software company blogs.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px release article, 320px at 640px, with 8px corners. A 16px-padded version cover holds a small release label, 36px version number and stable badge. A 16px body contains semantic date, category, 20px linked heading, summary and ruled engineering byline.',
    style:
      'Zinc-950 body, zinc-900 cover, zinc-700 frame and cover divider. Zinc-100 headline, zinc-400 descriptions and lime-300 version and hover accent. Cover labels use monospace; the article body uses system sans.',
    states:
      'The headline becomes lime-300 on hover, with a 2px lime-300 outline offset 2px for keyboard focus. Stable state is conveyed in text. No animations are used.',
    responsive:
      'Width is 288px below 640px and 320px above. The version row stays horizontal while the headline and summary wrap freely.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
