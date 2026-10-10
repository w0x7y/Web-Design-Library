import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-sidebar-sections',
  name: 'Settings — Sidebar navigation with sections',
  category: 'settings',
  tags: ['sidebar', 'form', 'icons'],
  description:
    'A settings sidebar beside a divided form with identity fields and notification switches. Use for a workspace with several settings destinations.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌─────────────────────────────────────────────────────────┐
│ Settings                                                │
│ Workspace settings                                      │
│ Navigation       │ General: title    First / Last name  │
│ [General]        │ Description       URL / selects      │
│ [Notifications]  ├────────────────────────────────────  │
│ [Members]        │ Notifications     Label    [Switch]  │
│ [Billing]        │ Description       Hint     [Switch]  │
│ [Security]       │                   Label    [Switch]  │
│ [Advanced]       │                   Hint     [Switch]  │
│                  ├────────────────────────────────────  │
│                  │ Last saved          [Discard] [Save] │
└─────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A neutral-50 section with a 1280px max-w-7xl shell. 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A 40px mt-10 gap follows the heading. At 1024px the grid has a 208px sidebar and flexible white bordered rounded-lg card, separated by 32px gap-8. Each card section has 24px p-6 padding and a 32px gap; at 768px a 224px description column sits beside controls. The footer uses 24px horizontal and 16px vertical padding.',
    hierarchy:
      'A 30px heading, 36px at 640px, precedes a 14px summary and six 14px navigation links with 16px icons. General has first and last name, prefixed URL, language and date selects. Notifications has four 14px switch labels with one-line hints. Last saved is subordinate to Discard and Save changes. Slots: heading 5 words, section titles 3, descriptions 15, hints 12, action labels 2.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. General has aria-current=page and a white fill with a neutral-300 border. Other navigation links fill white on hover. Native checkbox switches use peer-checked for a neutral-900 track and 20px knob translation, peer-focus-visible for the track outline, and forced-colors borders and CanvasText knobs. Discard resets the native form. No scripted navigation or persistence.',
    responsive:
      'Below 1024px navigation sits above the card, two columns below 640px and three from 640px; from 1024px it is one column. Below 768px descriptions sit above controls. First and last name and the selects become two columns at 640px. The footer stacks below 640px and actions wrap. All grid children can shrink at 320px.',
    usage:
      'Use when settings need persistent category navigation. Pick settings-described-rows for one short form or settings-stacked-cards for separate saves. Variations: swap notification switches for privacy options, add another divided section, or replace the URL prefix with a domain.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
