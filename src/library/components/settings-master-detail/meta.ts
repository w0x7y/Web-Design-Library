import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-master-detail',
  name: 'Settings — Item list with detail panel',
  category: 'settings',
  tags: ['sidebar', 'list', 'form'],
  description:
    'Selectable member rows beside a permissions detail panel. Use when several items share the same settings fields and need editing one at a time.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ Member settings                                        │
│ Lede                                                   │
│ Choose member          │ Alex Rivera                   │
│ (o) Avatar Name        │ Description                   │
│     Meta               │ [ ] Permission + hint         │
│ ( ) Avatar Name        │ [ ] Permission + hint         │
│     Meta               │ [ ] Permission + hint         │
│ ( ) Avatar Name        │ [Default role           v]    │
│     Meta               │ Hint                          │
│ ───────────────────────┴────────────────────────────── │
│ Save note                               [Save changes] │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1280px max-w-7xl form with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The heading and lede precede a 40px-spaced grid. At 1024px a 352px lg:grid-cols-[22rem_minmax(0,1fr)] member fieldset sits beside a flexible detail panel with 48px gap-12. Member rows have 16px padding, 40px avatars and 12px separation. The rounded-lg neutral-50 panel uses 24px p-6. A footer spans both columns after 32px, with a top border and 24px top padding.',
    hierarchy:
      'A 30px heading, 36px at 640px, and 18px lede explain selection. The 16px list legend introduces three member rows with 14px semibold names and 12px role/activity metadata. The 18px selected-member legend leads to three 14px permission labels with hints and a role select. Slots: lede 20 words, names 24 characters, panel description 18 words, hints 12, action label 2.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. Alex Rivera starts selected. Native radios share a member name; has-[:checked] gives the row a neutral-900 border and white fill. has-[:focus-visible] outlines its row. The form group-has selectors show only the matching detail fieldset, entirely in CSS. Member permissions have native checkbox states and selects; saving remains a static form example. No disabled states.',
    responsive:
      'Below 1024px the member list stacks above the panel as full-width rows. The footer stacks below 640px and is horizontal from 640px. All names and hint text wrap, grid children have min-w-0, and the section fits 320px. Padding and headline size increase at 640px.',
    usage:
      'Use when editing one member or entity at a time keeps repeated settings manageable. Pick settings-sidebar-sections for category navigation or settings-described-rows for one entity. Variations: list devices with access scopes, select teams with invitation rules, or use saved views with display preferences.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
