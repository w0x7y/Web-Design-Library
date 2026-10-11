import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-breadcrumb-toolbar',
  name: 'Navbar — Breadcrumb and section toolbar',
  category: 'navbar',
  tags: ['row', 'layered', 'compact'],
  description:
    'A compact project bar pairs contextual breadcrumbs with a native section menu and sharing action.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│[Workspace] / [Projects] / Current project                │
│                                      [Sections v] [Share]│
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl header uses 24px padding and a flex row that wraps with 16px gaps. Breadcrumb segments wrap independently. The section menu is right-aligned, 176px wide and elevated with shadow-sm.',
    hierarchy:
      'Breadcrumbs explain the current location before the section and sharing controls. Limit the current item to 4 words and menu choices to 2.',
    states:
      'The Sections summary opens and closes a native details menu. Menu links, breadcrumb links and the sharing button show a 2px keyboard outline. Buttons fill neutral-50 on hover; the menu remains closed initially.',
    responsive:
      'The toolbar wraps at available width with breadcrumb context first. The menu stays within its 176px anchor width, and breadcrumb segments wrap without truncation.',
    usage:
      'Use inside nested project or document views. Pick a brand navigation for a public landing page. Variations: replace sharing with export, add one breadcrumb level, or use a native menu for view choices.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
