import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-dimension-pair",
  name: "Inputs — Dimensions with proportions and units",
  category: "inputs",
  tags: ["split", "form", "numbers", "compact"],
  description: "Two numeric dimension fields share a multiplication divider, followed by a proportion checkbox and a units select. Use for a compact width and height editor.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Dimensions                                           │
│ Width                 x          Height              │
│ [1280]                           [720]               │
│ [x] Lock proportions             Units [px v]        │
│ Enter positive values for both dimensions.           │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root grows to 384px at sm. Two equal numeric fields surround a flexible 40px-high multiplication divider in a three-track grid with 12px gaps. A lower flex row pairs a native checkbox with a 64px units select. Labels have 6px bottom gaps; the hint follows by 8px.",
    hierarchy: "Read Dimensions, Width and Height, then Lock proportions and Units. Both numbers use tabular figures and up to 5 digits. All controls share a positive-value hint through aria-describedby; every control has a visible label.",
    states: "Inputs, checkbox and select show standard offset focus outlines. The proportion checkbox starts checked and can toggle natively. Units can change through the native select. The host connects proportion preservation and unit conversion to the numeric fields.",
    responsive: "The width changes from 288px to 384px at 640px. The fields keep their three-track arrangement and min-w-0 sizing; the lower controls remain on one row with short labels.",
    usage: "Use to edit two related measurements with a shared unit. Choose independent numeric fields when dimensions use different units. Variations: start with square values, remove the proportion checkbox, or replace px with another default unit.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
