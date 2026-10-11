import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-stacked-full-width",
  name: "Buttons — Stacked full-width actions",
  category: 'buttons',
  tags: ["stacked","compact"],
  description: "A compact action card places a full-width primary button above two secondary actions, a tertiary link and guidance. Use it for a focused action group with a clear first choice.",
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────────┐
│ Action group title                         │
│ Short supporting context                   │
│ [             Primary action             ] │
│ [+ Add item]            [v Download]       │
│                 Tertiary action            │
│             Short action guidance          │
└────────────────────────────────────────────┘`,
  brief: {
  "layout": "A 288px-wide (w-72) white card with a 1px neutral-200 border, rounded-lg corners and 20px padding (p-5), widening to 320px (sm:w-80). A title and context precede the full-width primary by 16px. Two equal secondary columns sit 8px below with gap-2. Buttons are 44px high, rounded-md, px-5, text-sm and font-medium; secondary icons are 16px with gap-2. A centred tertiary link follows by 16px, then a 12px caption after 12px.",
  "hierarchy": "The 16px semibold title names the action group in up to four words, followed by one line of 14px context up to five words. Primary action spans the card; Add and Export share secondary emphasis. Tertiary action is underlined. The final note stays one line, up to five words.",
  "states": "Primary hover changes neutral-900 to neutral-700; secondary hover fills neutral-50; the tertiary link turns neutral-600. All actions use a 2px neutral-900 keyboard-focus outline with a 2px offset. Button colour changes transition in 150ms. No disabled controls.",
  "responsive": "The single-card structure and two secondary columns remain unchanged at all widths. Below 640px the root is 288px, and from 640px it is 320px. Short secondary labels fit without wrapping at mobile width.",
  "usage": "Use for a compact card or sidebar with one recommended action. Pick buttons-joined-group for related actions sharing borders. Variations: place a confirmation note below the primary, use two export formats for the secondaries, or replace the tertiary link with a help link. Secondary buttons are 44px high."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

