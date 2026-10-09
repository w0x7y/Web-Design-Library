import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-command-workspace',
  name: 'Command workspace features',
  category: 'features',
  tags: ['dark', 'minimal'],
  description:
    'A keyboard-first productivity section with a command palette illustration and compact feature descriptions. Use it for desktop tools and focused workspaces.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px split section pairs a headline and two feature explanations with a command palette. Palette includes a faux search line, three command rows, selected row and a keyboard-hint footer.',
    style:
      'Zinc-950 canvas, zinc-900 command panel, zinc-700 outlines, violet-300 selected accent and white text. Palette has a 16px radius and 14px text; keyboard hints use small monospace kbd elements.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Columns appear at 1024px. Feature descriptions stay stacked. Palette rows use flexible labels and shrink-free keyboard hints, which wrap as needed on narrow phones.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
