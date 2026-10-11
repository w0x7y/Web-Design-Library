import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-inline-follow',
  name: 'Profile cards — Row with follow toggle',
  category: 'profile-card',
  tags: ['row','compact'],
  description: "A compact identity row with a native follow checkbox, a short bio and two counts. Use it for a suggested person or lightweight social profile.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Avatar   Sam Patel                     [Follow toggle]    │
│         @sampatel                                        │
│Short biography                                           │
│1,284 followers                    312 following          │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px card (w-72), 352px at 640px (sm:w-[22rem]), with 16px p-4 padding, a 1px border and 8px corners. The header has a 40px avatar, a flex-1 min-w-0 identity block and a fixed 112px follow control, separated by 8px gaps. The bio follows by 12px, then a wrapping 12px count row by 12px with 12px gaps. The follow labels are 44px tall with 6px rounded-md corners.",
    hierarchy: "The 16px semibold name and 12px handle precede the Follow control. A 14px two-line bio adds context; 12px counts show figures in neutral-900 and labels in neutral-500. Slots: name up to 22 characters, handle up to 18, bio up to 12 words and counts up to 6 characters. The checkbox has the explicit accessible name Follow Sam Patel.",
    states: "A visually hidden native checkbox starts unchecked. Checking swaps the filled Follow label for an outlined Following label using peer-checked; checking again restores Follow. The primary hover fill is neutral-700 and secondary hover fill neutral-50, with 150ms colour transitions. peer-focus-visible draws a 2px neutral-900 outline offset 2px on the visible label; the input uses focus-visible:outline-hidden so forced colours preserve its own focus cue. No open or disabled state.",
    responsive: "Only width changes at 640px, from 288px to 352px. The header stays on one row, with name and handle truncated before the fixed follow control can wrap. Counts wrap independently if longer values need extra room.",
    usage: "Use in suggestions, search results or a compact social sidebar. Pick profile-card-centered-stats when three metrics deserve a separate row. Variations: start the checkbox checked, change follow to a subscribe toggle, or replace follower counts with project counts.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

