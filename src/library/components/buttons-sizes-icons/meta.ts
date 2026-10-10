import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-sizes-icons",
  name: "Buttons — Sizes and icon placement",
  category: 'buttons',
  tags: ["row","icons","compact"],
  description: "Three captioned size rows compare leading icons, trailing icons and icon-only actions. Use them to choose a control size without changing the action hierarchy.",
  preview: { kind: 'element' },
  wireframe: `┌─────────────────────────┐
│ Small / 32px            │
│ [+ Add]  [Next ->]  [+] │
│ Default / 44px          │
│ [+ Add]  [Next ->]  [+] │
│ Large / 48px            │
│ [+ Add]  [Next ->]  [+] │
└─────────────────────────┘`,
  brief: {
  "layout": "A 288px (w-72) root widening to 416px (sm:w-[26rem]). Three rows use 20px gaps, 12px neutral-500 captions and an 8px caption-to-controls gap. Each wrapping flex row has 8px gaps. Small controls are 32px high, px-3, text-xs, with 14px icons; default controls are 44px high, px-5, text-sm, with 20px icons; large controls are 48px high, px-5, text-base, with 20px icons. Icon-only controls are matching squares. All controls use rounded-md.",
  "hierarchy": "Read Small, Default and Large captions before comparing the same outlined Add action, filled Next action with a trailing arrow, and outlined Add item icon button. Visible action labels are one word. Icon-only names include their size; SVGs are decorative.",
  "states": "Primary hover fills neutral-700; secondary and icon-only hover fill neutral-50. All nine controls show a 2px neutral-900 focus-visible outline offset 2px. Colours transition in 150ms. No controls are disabled.",
  "responsive": "Below 640px the root is 288px wide; from 640px it is 416px. Flex rows wrap if their controls do not fit, retaining 8px gaps. Heights, captions and icon sizes do not change at a breakpoint.",
  "usage": "Use for a size comparison and choosing leading versus trailing icons. Pick buttons-hierarchy to compare emphasis and disabled states. Variations: replace Add with a download action, use a trailing chevron for navigation, or omit icon-only actions."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

