import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-filter-checkboxes",
  name: "Dropdowns — Filter menu with checkboxes",
  category: "dropdowns",
  tags: ["layered", "form", "compact"],
  description: "An open filter disclosure combines search, counted checkbox rows and separate Clear and Apply actions. Use when several pending filter choices need one apply step.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Filter Status 2 ^]                                  │
│ ┌────────────────────────────────────┐               │
│ │ [Search statuses]                  │               │
│ │ [x] Draft                      12  │               │
│ │ [x] Published                  24  │               │
│ │ [ ] Scheduled                   8  │               │
│ │ [ ] Archived                    4  │               │
│ ├────────────────────────────────────┤               │
│ │ [Clear]                    [Apply] │               │
│ └────────────────────────────────────┘               │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative 288px (w-72) by 320px (h-80) root grows to 320px (sm:w-80) wide at 640px. The standard 44px outlined trigger contains a 16px filter icon, Status, a bordered count badge and a chevron, with 8px gaps. A 256px panel sits 8px below it, with rounded-md corners, 1px border, 8px padding and shadow-lg. A 40px search field has a leading 16px icon. Four 32px checkbox rows start 8px below. An 8px-spaced divider introduces two 44px footer actions.",
    hierarchy: "Read the Status trigger and applied-count badge, then search, four status rows and footer actions. Rows contain a native 16px checkbox, one-word label and right-aligned 12px tabular count. The fieldset legend names Status filters; the search has a hidden label and an associated hint. Counts use at most 4 digits; action labels one word.",
    states: "The disclosure is open and Draft and Published start checked. Checkbox rows hover neutral-100; native checkboxes use accent-neutral-900 and standard keyboard-focus outlines. Search and footer actions also show 2px outlines offset 2px. The trigger hovers neutral-50 and its chevron rotates while open. Apply hovers neutral-700; Clear hovers neutral-600 text. The badge shows two applied filters while checkbox changes are pending. Host behavior wires search, Clear and Apply, and updates the applied count. No disabled filters are shown.",
    responsive: "The root grows from 288px to 320px at 640px. The 256px panel, checkbox rows and footer stay the same size and remain left aligned. The 320px reserve includes the open panel, with standard 44px actions and a 40px input.",
    usage: "Use for multiple filters with an explicit apply step. Choose dropdowns-select-descriptions for a single value or dropdowns-action-menu for commands. Variations: use priority labels, add a checkbox-row disabled state, or omit search for a very short option set.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
