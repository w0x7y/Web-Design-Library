import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-preview-split',
  name: 'Settings — Live preview beside controls',
  category: 'settings',
  tags: ['split', 'media', 'form'],
  description:
    'A large appearance preview beside radio cards and display controls. Use when settings benefit from a visual reference while choices are made.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Appearance settings                                          │
│ Lede                                                         │
│ ┌─────────────────────────┐ Layout                           │
│ │                         │ ┌───────────┐┌───────┐┌────────┐ │
│ │ Image                   │ │ (o) ───   ││ ( ) ─ ││ ( ) ─  │ │
│ │                         │ │Comfortable││Compact││Spacious│ │
│ └─────────────────────────┘ └───────────┘└───────┘└────────┘ │
│ Preview caption              [Select v]                      │
│                              [Select v]                      │
│                              [ ] Setting + hint              │
│                              [Reset] [Save changes]          │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1280px max-w-7xl form with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. At 1024px the content is a 1.2fr/1fr lg:grid-cols-[1.2fr_1fr] grid with 48px gap-12, 40px below the header. A 4:3 rounded-lg media placeholder and 14px caption occupy the left column, sticky 32px from the top. The right has three padded radio cards, two selects, a checkbox and a ruled action footer, with 24px space-y-6.',
    hierarchy:
      'The 30px heading steps to 36px at 640px; the 18px lede is limited to 672px. The large preview reads before a 16px fieldset legend. Each density card has a swatch and 14px label. Select labels, hints and checkbox guidance are 14px. Save changes is primary, Reset secondary. Slots: heading 5 words, lede 20, radio labels 2, hints 12, preview caption 15.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. Native radios share a layout name, Comfortable starts checked, and has-[:checked] gives the chosen card a neutral-900 border. The native input shows its focus outline. The checkbox starts checked. Reset restores form defaults. The media is a static preview placeholder; CSS-only controls do not update it. No disabled states.',
    responsive:
      'Below 1024px preview and caption stack above controls, with no sticky positioning. Radio cards stack below 640px and become three equal columns from 640px. Selects remain full-width and actions wrap. The shell, grids and fields fit 320px.',
    usage:
      'Use for display settings with a large preview reference. Pick settings-described-rows when guidance is enough, or settings-master-detail for selecting and editing entities. Variations: preview a content card, replace density with alignment choices, or add a border-style select.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
