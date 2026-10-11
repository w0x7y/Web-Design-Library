import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-license-rows-inclusions',
  name: 'Pricing — License rows with shared inclusions',
  category: 'pricing',
  tags: ['sidebar', 'form', 'numbers'],
  description:
    'Three selectable license rows keep prices aligned while one side panel holds the common inclusions.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│License options                    Every license includes │
│(o) Individual / Description $49   Check Included files   │
│( ) Team / Description      $149   Check Updates          │
│( ) Extended / Description  $299   Check Agreement        │
│                                   [Review license]       │
│                                   Payment note           │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section becomes a 2:1 grid at 768px with a 32px gap. The left fieldset contains three 20px-padded radio rows with aligned prices. A right inclusion panel has 24px padding, 1px border and a full-width action.',
    hierarchy:
      'Read the license names and scope before their one-time prices, then shared inclusions. Keep names under 3 words, scopes under 10 and inclusion rows under 6.',
    states:
      'Native radio controls allow one license choice and show the selected state; the individual license starts selected. Radios and the review action have visible 2px keyboard outlines. The action is a destination link and does not imply a calculated checkout.',
    responsive:
      'The shared inclusions follow the options below 768px. License descriptions wrap while the price stays in an auto-width end column; radios remain visible.',
    usage:
      'Use for licensing scopes that share one deliverable. Pick separate tier cards when each offer has different features. Variations: include a nonprofit scope, replace updates with support duration, or add a short legal terms link.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
