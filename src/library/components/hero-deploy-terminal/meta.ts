import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-deploy-terminal',
  name: 'Terminal deployment hero',
  category: 'hero',
  tags: ['dark', 'minimal'],
  description:
    'A developer platform hero with a deployment log and production status. Use it for infrastructure tools and technical product launches.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px container has 80px vertical and 24px horizontal padding. Two equal columns at 1024px place the headline and actions beside a bordered terminal with a 40px toolbar, four log lines and three deployment facts.',
    style:
      'Zinc-950 background, white 60px heading with tight tracking, zinc-400 body, emerald-300 accent. The terminal uses monospace text, zinc-900 fill, zinc-700 borders and a 16px radius. Buttons are 48px tall.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Below 1024px the terminal follows the text. Headline is 48px on phones and 60px at 640px. Log lines wrap and the status facts stay in a two-column grid on phones.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
