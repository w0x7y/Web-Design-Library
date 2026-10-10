import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-hierarchy',
  name: 'Buttons — Primary, secondary and tertiary',
  category: 'buttons',
  tags: ['grid', 'icons', 'compact'],
  description: 'An action hierarchy with primary, secondary and tertiary buttons, plus destructive, icon-only, disabled and loading variants. Use it to compare action emphasis and control states.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Primary action] [Secondary action] [Tertiary action]  │
│ [Delete item]    [More actions ⋯]   [Unavailable]      │
│ [◌ Loading action]                                   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px-wide (w-72) grid with 12px gaps, stepping to 576px and three equal columns at 640px. Buttons are 44px high with 20px horizontal padding and 6px radii. The icon-only control is a centred 44px square. The destructive and loading controls have a 20px icon with an 8px gap. The mobile stack is 380px tall and fits the element frame.',
    hierarchy: 'Filled neutral-900 with white text marks the primary action; a neutral-300 outline marks the secondary; underlined text marks the tertiary. The destructive action uses a trash icon and explicit Delete wording. Disabled and loading examples follow the active actions. Use 2–3 words per action label; the icon-only button has a More actions accessible label.',
    states: 'Primary hover changes to neutral-700; outlined controls fill neutral-50; tertiary hover changes to neutral-600. Enabled buttons show a 2px neutral-900 keyboard-focus outline offset 2px. Unavailable action is disabled with neutral-100 fill, neutral-600 text and a not-allowed cursor. Loading action is disabled and aria-busy, with a 1s linear animate-spin stroke icon and a wait cursor.',
    responsive: 'Below 640px all seven controls stack in a 288px-wide column, with the icon-only control centred. At 640px they form three columns in a 576px-wide grid. Labels and icon sizes stay the same.',
    usage: 'Use to choose action emphasis and document native disabled or loading states. Pick an inline action row for a single form or page footer. Variations: place the icon-only action beside a text button, pair primary and secondary actions, or move the destructive action into a separate confirmation area.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
