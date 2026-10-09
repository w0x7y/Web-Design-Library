import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-developer-status',
  name: 'Developer status navigation',
  category: 'navbar',
  tags: ['dark', 'minimal'],
  description:
    'A dark documentation header with a version selector, service status and native search form. Use it for technical documentation portals.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1280px header has a brand and current release badge on the top row, search form and status on the right, then a lower row of five documentation links. Search field is 240px wide on desktop.',
    style:
      'Zinc-950 background, zinc-800 borders, white text and emerald-300 operational indicator. Branding is 20px monospace; search uses a zinc-900 field and an outlined 40px button.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Header top row stacks below 768px. Search form grows to available phone width with min-width-zero input; status wraps. Lower navigation wraps without horizontal scrolling.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
