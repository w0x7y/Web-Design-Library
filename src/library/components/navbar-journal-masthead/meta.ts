import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-journal-masthead',
  name: 'Journal masthead navigation',
  category: 'navbar',
  tags: ['editorial', 'light'],
  description:
    'A publication masthead with a central serif title and a horizontal topic index. Use it for magazines, essays and independent journals.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px masthead uses a top date and edition row, a centered publication title with a short subtitle, then a thinly bordered topic navigation and subscription link.',
    style:
      'White background, stone-950 ink, 48px serif title, 12px monospace edition labels and orange-800 subscription text. Double row borders give a printed newspaper feel.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Publication title is 36px on phones and 48px at 640px. Topic links wrap; the topic and subscription area stacks below 768px. All rows have 24px horizontal padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
