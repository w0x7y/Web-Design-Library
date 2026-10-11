import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-split-menu",
  name: "Buttons — Split button with menu",
  category: 'buttons',
  tags: ["row","layered","compact"],
  description: "Two split buttons pair immediate actions with native expandable option panels. Use them to keep a common action visible while offering related alternatives.",
  preview: { kind: 'element' },
  wireframe: `┌─────────────────────────────────────────────────┐
│                      [Save][v] [Publish][^]     │
│                             ┌─────────────────┐ │
│                             │ [Schedule]      │ │
│                             │ [Preview]       │ │
│                             │ [Copy link]     │ │
│                             ├─────────────────┤ │
│                             │ [Save draft]    │ │
│                             └─────────────────┘ │
└─────────────────────────────────────────────────┘`,
  brief: {
  "layout": "A relative 288px-wide (w-72) row, widening to 384px (sm:w-[24rem]), reserves 240px (h-60) for panels. Right-aligned split groups have an 8px gap. Main buttons are 44px high, rounded-l-md, px-5, text-sm and font-medium. Both summaries are 44px high: Save has an outlined 36px-wide (w-9) summary sharing the border by -ml-px; Publish has a filled 40px-wide (w-10) summary and a white/20 left divider. Panels are 224px (w-56) wide, top-full with mt-2, z-20, rounded-md, border-neutral-200, p-1 and shadow-lg. Four 36px option rows have 16px icons; a divider precedes the final row.",
  "hierarchy": "Save is secondary; Publish is primary. Summary controls are named More save options and More publish options. The Save panel contains Save as copy, Preview draft, Copy draft link and Save as template. The open Publish panel contains Schedule, Preview, Copy link and Save draft. Labels use up to three words. Visible menu labels and SVGs share 8px gaps. Lists use role=list; native buttons remain ordinary tab stops.",
  "states": "Publish starts open; Save starts closed. Native details toggles each panel with Enter or Space on its summary. The 16px chevron rotates 180 degrees while open over 150ms, disabled by reduced-motion preference. Primary hover fills neutral-700; outlined segments and menu items fill neutral-50. All buttons and summaries use the 2px neutral-900 focus outline offset 2px. No disabled controls.",
  "responsive": "Only root width changes at 640px, from 288px to 384px. Publish panel aligns right; Save panel is offset 80px left of its chevron so opening it also stays within the 288px-wide layout on mobile. Both split groups stay on one line. The 240px reserved root contains the default open panel at every width.",
  "usage": "Use when an immediate action has related alternatives. Pick buttons-joined-group when alternatives deserve equal visibility without a panel. Variations: save with export formats, publish with timing choices, or show only one split group. Main buttons and summaries are 44px high; the Save panel stays within the 288px-wide layout on mobile."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

