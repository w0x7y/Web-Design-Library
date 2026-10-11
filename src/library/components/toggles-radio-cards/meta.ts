import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-radio-cards",
  name: "Toggles — Radio cards",
  category: 'toggles',
  tags: ["grid","form","numbers","compact"],
  description: "Three selectable cards combine a radio indicator, short plan details and a price. Use them when mutually exclusive choices need more explanation than a segmented control can hold.",
  preview: { kind: 'element' },
  wireframe: `┌───────────────────────────────────────────────────────┐
│ Plan selection                                        │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ │
│ │ (o)           │ │ ( )           │ │ ( ) disabled  │ │
│ │ Plan name     │ │ Plan label    │ │ Plan title    │ │
│ │ Brief details │ │ Scope details │ │ Access info   │ │
│ │ $29           │ │ $59           │ │ $99           │ │
│ └───────────────┘ └───────────────┘ └───────────────┘ │
└───────────────────────────────────────────────────────┘`,
  brief: {
  "layout": "A 288px-wide (w-72) fieldset widens to 576px (sm:w-[36rem]). A 14px semibold legend precedes three cards by 12px. Cards use rounded-lg, a 1px neutral-300 border, white fill and p-4. Below 640px cards stack with gap-3; each is a flex row with 12px gaps, a 16px bordered radio indicator, a flexible title/description column and a right-aligned figure. From 640px cards form three equal grid columns and stack contents: indicator, copy after 12px and figure after 16px. The selected indicator has a 6px dot.",
  "hierarchy": "Read Plan selection, then each 14px semibold title, 14px neutral-500 description and 16px semibold tabular price. Titles use two words, descriptions up to five words and figures up to four characters. Each input is a native radio in one named group with aria-describedby pointing to its description. The first choice starts selected and the third is unavailable.",
  "states": "Enabled hover changes card borders to neutral-400; selected cards retain a neutral-900 border with a 1px neutral-900 ring. A checked radio reveals its inner dot with opacity through group-has-checked. Keyboard focus is a 2px neutral-900 label outline offset 2px, driven by has-[:focus-visible]; hidden inputs use focus-visible:outline-hidden with a transparent 2px outline in forced-colors mode. The third card is native disabled, 50% opaque and uses a not-allowed cursor. Forced colors use ButtonText borders, a Highlight selected border and CanvasText indicator dots.",
  "responsive": "Below 640px all three cards are rows in a 288px-wide vertical stack, about 290px tall including the legend. From 640px the fieldset is 576px wide and cards become columns with stacked content, 198px tall. Copy can wrap while the indicator and figure keep their size.",
  "usage": "Use when one option must be chosen and short copy plus a figure aids comparison. Pick toggles-segmented-control for short labels or toggles-checkbox-tile-grid for multiple selections. Variations: replace prices with durations, remove the disabled card, or put a short availability hint beneath the figure. Descriptions stay concise in both orientations."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

