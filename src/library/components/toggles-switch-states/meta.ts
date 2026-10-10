import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-switch-states",
  name: "Toggles — Switch states and sizes",
  category: "toggles",
  tags: ["grid","compact"],
  description: "Two columns compare default and small switches in off, on and disabled states. Use them to choose switch dimensions and review native state and focus behavior.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────┐
│ Default / 44 x 24       Small / 36 x 20  │
│ [o-] Off               [o-] Off          │
│ [-o] On                [-o] On           │
│ [o-] Disabled off      [o-] Disabled off │
│ [-o] Disabled on       [-o] Disabled on  │
└──────────────────────────────────────────┘`,
  brief: {
  "layout": "A 288px (w-72) grid widens to 384px (sm:w-[24rem]); two equal columns stay side by side with a 16px gap. Each fieldset has a 12px neutral-500 legend, then a grid after 12px with 16px row gaps. Rows have min-h-6, 12px labels and an 8px switch-to-text gap. Default tracks are 44×24px (w-11 h-6); small tracks are 36×20px (w-9 h-5), each with a 1px neutral-300 border, rounded-full and 1px padding. White shadow-sm knobs are 20px and 16px respectively.",
  "hierarchy": "Each column reads its size caption, then Off, On, Disabled off and Disabled on. All controls are native checkbox inputs with role=switch, named with size and state. Knobs and tracks are decorative; visible labels stay short, at most two words.",
  "states": "On examples start defaultChecked; the final two examples in each column are native disabled. Checked tracks fill neutral-900, and knobs translate 20px or 16px. Enabled hover fills neutral-300 when off and neutral-700 when on. Track focus uses peer-focus-visible to show a 2px neutral-900 outline offset 2px. Disabled tracks and labels have 50% opacity and tracks use a not-allowed cursor. Knobs slide over 150ms, removed by reduced-motion preference. Forced-colors mode gives tracks a ButtonText border and knobs a CanvasText fill, so position remains legible.",
  "responsive": "Only width changes at 640px, from 288px to 384px. Both columns retain 24px minimum row heights and the same switch sizes, labels and gaps. The root is 172px tall.",
  "usage": "Use to document on/off and disabled states in two sizes. Pick toggles-switch-list for real settings with descriptions. Variations: use only the default column, choose a different initial checked pair, or add longer descriptions in a settings card."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

