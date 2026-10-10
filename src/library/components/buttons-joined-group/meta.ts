import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-joined-group",
  name: "Buttons — Joined button groups",
  category: 'buttons',
  tags: ["row","compact"],
  description: "Three connected control groups show related actions, an action paired with a count, and pagination. Use them where adjoining controls share one task or value.",
  preview: { kind: 'element' },
  wireframe: `┌───────────────────────┐
│ [+ Add][Copy][Share]  │
│ [Star  Follow][1,284] │
│ [<][Page 3 of 12][>]  │
└───────────────────────┘`,
  brief: {
  "layout": "A left-aligned grid, 288px (w-72) wide and 320px from sm:w-80, stacks three flex groups with 16px gaps. Every segment is 44px tall with a 1px neutral-300 border. Adjacent segments overlap by 1px (-ml-px); only outer corners have rounded-md radii. Text segments use px-3, 14px medium text, 16px leading icons and gap-2. Pagination arrows are 44px squares. Count and page text are non-interactive tabular figures.",
  "hierarchy": "First read the Add, Copy and Share action group, then Follow beside the count 1,284, then the pager with Page 3 of 12 between arrow buttons. Each group has its own accessible name. Action labels are one word; count allows up to six digits; page status is up to 14 characters. Arrow buttons have explicit page names.",
  "states": "Enabled segments fill neutral-50 on hover and transition colours in 150ms. Keyboard focus uses a 2px neutral-900 outline offset 2px; relative positioning and focus-visible:z-10 keep it above neighbouring borders. Previous page is native disabled with 50% opacity and a not-allowed cursor, without a hover rule. Static segments do not focus.",
  "responsive": "Below 640px the root is 288px; from 640px it is 320px. Groups retain their intrinsic widths and remain on one line. The three-row stack is 164px high at both widths.",
  "usage": "Use for actions that share a subject, a count attached to an action, or compact pagination. Pick buttons-toolbar when controls need tooltips and a separate primary action. Variations: pair download with a file count, use two related text actions, or replace the page figure with an item range. All segments follow the reference 44px default rather than 40px."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

