import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-billing-overview',
  name: 'Settings — Plan and billing overview',
  category: 'settings',
  tags: ['asymmetric', 'numbers', 'table'],
  description:
    'Plan, usage and payment cards above an invoice history table. Use to gather the billing information a workspace owner needs in one section.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌─────────────────────────────────────────────────────────┐
│ Billing overview                         Renews Mar 14  │
│ Lede                                                    │
│ ┌──────────────────────────┐ ┌───────────────────────┐  │
│ │ Current plan             │ │ Payment method        │  │
│ │ Plan name   $29 / month   │ │ Card ending 4242      │ │
│ │ Usage bar: 8 of 10 seats  │ │ Expiry / email        │ │
│ │ [Change plan] Compare    │ │ [Update]              │  │
│ └──────────────────────────┘ └───────────────────────┘  │
│ Invoices                                                │
│ Date    Description          Amount  Status  Download   │
│ Mar 14  Monthly subscription $29     Paid    [Download] │
│ Feb 14  Monthly subscription $29     Paid    [Download] │
│ Jan 14  Monthly subscription $29     Paid    [Download] │
│ Dec 14  Monthly subscription $29     Paid    [Download] │
└─────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1024px max-w-5xl shell with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Header copy sits beside a renewal badge from 640px. Two bordered rounded-lg p-6 cards begin after 40px, with 24px gap-6; at 1024px their columns are 3fr/2fr. Plan usage has an 8px neutral-200 track and an 80% neutral-900 fill. Invoice history starts after 40px in a focusable bordered region with a 640px min-w-[40rem] native table. Cells use 16px horizontal padding, 12px header and 16px body vertical padding.',
    hierarchy:
      'The 30px page heading increases to 36px at 640px. The 18px card titles lead to a 14px plan name and 30px tabular price; monthly suffix and usage text are 14px. Payment details use a 40px icon tile, card ending, expiry and billing email. Four invoice rows show date, description, right-aligned amount, Paid badge and individually named Download link. Slots: lede 15 words, plan name 3, invoice description 5, actions 2.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. Compare and Download links are underlined and turn neutral-600 on hover. Invoice links name their dates. The scroll region has a focus outline. The usage track has a forced-colors system border and CanvasText fill, with visible 8 of 10 seats text outside. There are no interactive meters, open panels or disabled controls.',
    responsive:
      'Plan and payment cards stack below 1024px. Below 640px the header stacks and the invoice table scrolls within its labelled, focusable region. The native table retains column headers and row descriptions. Links and card actions wrap, billing email can break, and the section has no page overflow at 320px.',
    usage:
      'Use for a billing account overview with a short invoice history. Pick data-table-toolbar-pagination for a large invoice ledger or settings-stacked-cards for independent editable forms. Variations: show annual billing, replace seats with a storage meter, or add an invoice reference column.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
