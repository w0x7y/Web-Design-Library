import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-described-rows',
  name: 'Settings — Described rows',
  category: 'settings',
  tags: ['asymmetric', 'list', 'form'],
  description:
    'A single form of described setting rows, with explanations beside controls. Use when every choice needs context before it is changed.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ Eyebrow                                                │
│ Workspace preferences                                  │
│ Lede                                                   │
│ Permissions        │ [ ] Setting + hint                │
│ Description        │ [ ] Other setting + hint          │
│ ───────────────────┼────────────────────────────────── │
│ Default access     │ [Select default role       v]     │
│ Description        │ Hint                              │
│ ───────────────────┼────────────────────────────────── │
│ Invitations        │ [Email domain               ]     │
│ Description        │ (o) Option    ( ) Option          │
│ ───────────────────┴────────────────────────────────── │
│ Save note                                      [Save]  │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 896px max-w-4xl form with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. An eyebrow, heading and lede precede three hairline-separated rows by 40px. Each row has 32px py-8 padding, 24px gap-6 and a 1fr/2fr md:grid-cols-[1fr_2fr] grid at 768px. The ruled footer has 24px top padding.',
    hierarchy:
      'The 14px eyebrow leads to a 30px heading, 36px from 640px, and 18px lede. Rows contain 18px semibold titles, 14px descriptions and controls: two checkboxes, one select, then an email-domain input and two radios. Hints are 14px. Slots: heading 5 words, lede 20, row descriptions 18, hints 12, control labels 5. Save preferences is the only primary action.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. Native checkboxes and radios show checked state with neutral-900 accents; the first checkbox and Require approval radio start checked. The select uses native options. No open panels, disabled controls or scripted save states.',
    responsive:
      'Below 768px each description sits above its controls. From 640px the radio choices sit two-up and the footer becomes a row. Inputs stay full-width, descriptions wrap, and the form fits 320px. Section padding and headline size increase at 640px.',
    usage:
      'Use for choices whose consequences need adjacent explanation. Pick settings-sidebar-sections for many categories or settings-stacked-cards for independent forms. Variations: substitute retention choices for invitations, add a timezone select, or turn the permissions row into a radio group.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
