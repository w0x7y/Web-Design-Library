import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-skeleton-preview',
  name: "Empty state — Preview rows above action",
  category: 'empty-state',
  tags: ["stacked", "list", "compact"],
  description: "Ghost rows show the anatomy of a future list above a creation action. Use it to explain what will appear before the first item is added.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│┌────┐   ──────────────────                           │
││    │   ───────────                                  │
│└────┘                                                │
│┌────┐   ──────────────────                           │
││    │   ───────────                                  │
│└────┘                                                │
│┌────────────────────────────────────────────────────┐│
││                        +                           ││
│└────────────────────────────────────────────────────┘│
│Title for the future list                             │
│Two-line explanation                                  │
│[Add first item]                                      │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72), 384px from 640px (sm:w-96), p-6 bordered rounded-lg panel. An aria-hidden preview has three 32px-high rows with 8px gaps: two 32px neutral-100 squares beside 8px bars at 60% and 40% widths, then a neutral-300 dashed rounded-md slot with a 20px plus. A 16px heading follows by 16px, description by 8px, and full-width 44px action by 20px.",
    hierarchy: "The decorative row preview establishes the future structure; the heading and explanation name the collection, then the filled action creates its first item. Heading up to 5 words, explanation up to 12, action up to 4. Text is 16px semibold for the heading and 14px for body and action.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. Ghost rows are static and aria-hidden; there is no shimmer, animation, busy state or interactive preview.",
    responsive: "The stack stays the same at every width, growing from 288px to 384px at 640px. Bars scale with the available preview column and the compact three-row preview keeps the panel below 340px high.",
    usage: "Use to explain a future list before content exists. Pick empty-state-centered-icon if the future content shape adds little context. Variations: use document rows, attachment rows, or compact contact rows while keeping the preview decorative.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
