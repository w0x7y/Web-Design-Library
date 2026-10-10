import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-stacked-cards',
  name: 'Settings — Stacked cards with save rows',
  category: 'settings',
  tags: ['stacked', 'form', 'compact'],
  description:
    'Three independent settings forms with a save footer on each card. Use when profile, password and notification changes are saved separately.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌─────────────────────────────────────────────────────────┐
│ Account settings                                        │
│ ┌────────────────────────────────────────────────────┐  │
│ │ Profile       Avatar   [Change] [Remove]            │ │
│ │ Description   [First name] [Last name]              │ │
│ │               [Email] [Bio text area]              │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ Profile hint                         [Save profile]│  │
│ └────────────────────────────────────────────────────┘  │
│ ┌────────────────────────────────────────────────────┐  │
│ │ Password      [Current password] [New password]    │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ Password hint                       [Save password]│  │
│ └────────────────────────────────────────────────────┘  │
│ ┌────────────────────────────────────────────────────┐  │
│ │ Notifications                  Label      [Switch]│   │
│ │                                Hint       [Switch]│   │
│ ├────────────────────────────────────────────────────┤  │
│ │ Notification hint                       [Save]    │   │
│ └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 768px max-w-3xl column with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Three bordered 8px rounded-lg cards begin 40px below the header, separated by 24px space-y-6. Each form body uses 24px p-6 and space-y-6. Profile has a 64px avatar, photo actions, a name grid, email and a 96px-minimum textarea. Footers use neutral-50, a top border and 24px/16px padding.',
    hierarchy:
      'The 30px page heading steps to 36px at 640px, followed by an 18px lede. Each form has an 18px title and 14px description. Profile identity comes before contact and bio; password has current and new fields; notifications has three labelled switches. Each footer has a 14px hint and a named primary save. Slots: lede 15 words, descriptions 12, hints 12, bio 160 characters.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. Each card is an independent form. Textarea resizes vertically and limits input to 160 characters. Two notification switches begin checked; peer styles move their knobs 20px and fill the track neutral-900. Forced-colors uses a system-colour track border and CanvasText knob. Photo actions are static buttons. No scripted saves or disabled states.',
    responsive:
      'The cards remain stacked at all widths. At 640px first and last name become two columns, footers become horizontal, and save buttons shrink from full width to their label width. Photo actions wrap. Below 640px footer hints precede full-width save actions. Fields fit the 320px page.',
    usage:
      'Use for settings with independent save boundaries. Pick settings-described-rows when one save applies to all choices, or settings-master-detail when selecting an item determines the controls. Variations: substitute security keys for passwords, use contact preferences in the final card, or add an address form.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
