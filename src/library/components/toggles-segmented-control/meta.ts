import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-segmented-control",
  name: "Toggles — Segmented controls and toggle buttons",
  category: 'toggles',
  tags: ["row","compact"],
  description: "Three compact fieldsets combine a text radio group, an icon radio group and independent formatting toggles. Use them to distinguish mutually exclusive choices from multi-select controls.",
  preview: { kind: 'element' },
  wireframe: `┌─────────────────────────────────────┐
│ Time range                          │
│ [Day][Week *][Month][Year disabled] │
│ View                                │
│ [List *][Grid]                      │
│ Formatting                          │
│ [Bold *][Italic][Underline *]       │
└─────────────────────────────────────┘`,
  brief: {
  "layout": "A 288px-wide (w-72) root widens to 320px (sm:w-80) and stacks three fieldsets with 20px gaps. Each 12px neutral-500 legend precedes its track by 8px. Time range is a four-column grid on a rounded-lg neutral-100 p-1 track; equal segments are 32px tall, rounded-md, px-3, text-sm and font-medium. View is an inline two-column track with a 4px gap and 32px square segments. Formatting is a joined group of three 36px squares with shared 1px borders, -ml-px adjacency and rounded-md outer corners. Icons are 16px.",
  "hierarchy": "Time range chooses one of Day, Week, Month and Year. View chooses List view or Grid view, with sr-only names and decorative icons. Formatting has independent Bold, Italic and Underline checkboxes. Fieldset legends distinguish the three purposes; text segments use one-word labels.",
  "states": "Week and List view start checked; Year is disabled at 50% opacity with a not-allowed cursor. Checked radio labels fill white with shadow-sm and neutral-900 text; hover increases text contrast. Bold and Underline start checked with neutral-900 fill and white icons; checkbox hover uses neutral-50, checked hover neutral-700. All hidden inputs use focus-visible:outline-hidden, while labels draw the 2px neutral-900 focus outline offset 2px through has-[:focus-visible]. Native radio arrow keys work within each named group. Forced colors add a border and underline to selected text radio labels, selection dots to checked icon controls, and Highlight/HighlightText for checked formatting controls plus ButtonText borders. Selection remains legible when system colours flatten fills.",
  "responsive": "Only root width changes at 640px, from 288px to 320px. Four text segments keep equal widths, and icon controls retain their intrinsic square sizes. All three fieldsets remain stacked; total height is 228px.",
  "usage": "Use for short mutually exclusive choices alongside independent toggles. Pick toggles-radio-cards when choices need descriptions and figures. Variations: use two or three time choices, replace formatting with filter toggles, or show only the view selector."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

