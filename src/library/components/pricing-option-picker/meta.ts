import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-option-picker',
  name: 'Pricing — Option picker',
  category: 'pricing',
  tags: ['asymmetric', 'form', 'numbers'],
  description: 'Radio-card option picker with a changing price and adjacent inclusions panel. Use for one offer sold in three sizes.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────┐ ┌──────────────────┐     │
│ │ Product title / Description     │ │ Whats included   │     │
│ │ Choose a size                   │ │ Label    Value   │     │
│ │ [Small] [Medium selected] [Large]│ │ Label    Value   │    │
│ │ $49 /order                      │ │ Label    Value   │     │
│ │ [Primary action]                │ │ Label    Value   │     │
│ │ Terms hint                      │ │ Note             │     │
│ └─────────────────────────────────┘ └──────────────────┘     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. lg:grid-cols-[2fr_1fr] panels with 24px gap. Main p-6 panel has title, description, fieldset 32px below, three sm:grid-cols-3 radio cards with 12px gap and 16px padding, 36px price, full-width action and hint. Neutral-50 side p-6 panel has four dl rows with 16px vertical padding and hairlines.',
    hierarchy:
      '24px product title, 16px description, 14px options, 36px price. Slots: title 6 words, description 24, option 2, meta 4, hint 18, inclusion label and value 3, note 18. Small $19, Medium $49 selected by default, Large $99.',
    states:
      '44px h-11 actions have 6px rounded-md corners and 150ms color transitions. Primary hover fills neutral-700; secondary fills neutral-50; links turn neutral-600. Keyboard focus draws a 2px neutral-900 outline offset 2px. Native hidden radios use focus-visible:outline-hidden; labels use has-[:checked] dark borders and explicit Selected text, plus has-[:focus-visible] outlines. group-has reveals one price. Fieldset aria-describedby points to terms. Native arrow keys switch options; border and text preserve forced-color selection.',
    responsive:
      'Panels stack below 1024px. Options stack below 640px and form three equal columns above. Price and action remain full width; padding increases at 640px.',
    usage:
      'Use for fixed-price size or quantity options. Pick pricing-comparison-table for feature-rich plans. Variations: durations, quantities, or delivery summary in side panel.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
