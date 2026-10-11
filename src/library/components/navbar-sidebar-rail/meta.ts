import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-sidebar-rail',
  name: 'Navbar — Workspace sidebar rail',
  category: 'navbar',
  tags: ['sidebar', 'list', 'compact'],
  description:
    'A vertical navigation rail sits beside the current page heading and its actions.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Logo               Workspace                              │
│[Overview]         Current page heading                   │
│[Projects]         Page context                           │
│[Activity]                                                │
│[Members]          [New project] [View activity]          │
│                                                          │
│[Settings]                                                │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'Use a max-w-6xl header with 24px padding. At 768px, a 192px navigation rail and flexible page context share a 32px gap. The rail has a right border and 24px inset; destinations use 8px vertical spacing.',
    hierarchy:
      'The brand identifies the workspace. Four primary destinations precede settings; the page heading and actions confirm the active destination. Limit page context to 20 words and navigation labels to 2.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Below 768px the rail becomes a block above the page context with a bottom border. The destination list remains vertical, and the page action row wraps.',
    usage:
      'Use for an application with a small stable destination list. Pick a horizontal bar for a marketing page. Variations: add a workspace switcher, group settings separately, or show a project count beside a destination.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
