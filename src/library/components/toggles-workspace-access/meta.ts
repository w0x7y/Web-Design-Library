import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-workspace-access',
  name: 'Toggles — Workspace access',
  category: 'toggles',
  tags: ['brutalist', 'light'],
  description:
    'Square binary controls for a shared makerspace, organized as a compact permissions board.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white panel with 2px black border and 16px padding. Three 56px ruled rows pair access labels with a 56px by 32px native checkbox and explicit on/off text.',
    style:
      'Use heavy black type, lime-300 checked boxes, white off states and square corners. Native checkboxes show centered monospace ON or OFF labels; forced colors preserve the border.',
    states:
      'Each checkbox toggles its written ON/OFF label through CSS content. The keyboard focus cue is a 2px slate-900 outline with 2px offset. Hover highlights the row in stone-100 without animation.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
