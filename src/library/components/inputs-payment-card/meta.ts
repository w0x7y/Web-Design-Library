import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-payment-card',
  name: 'Inputs — Card number with joined expiry and security code',
  category: 'inputs',
  tags: ['stacked', 'form', 'icons', 'numbers', 'compact'],
  description: 'A card details fieldset puts the card number, with an inset card glyph, above expiry and security code fields that share one border, then the name on the card. Use to collect payment card details at checkout.',
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────────────┐
│ Card details                                   │
│ Card number                                    │
│ ┌────────────────────────────────────────────┐ │
│ │ Card icon  0000 0000 0000 0000             │ │
│ └────────────────────────────────────────────┘ │
│ Expiry (MM / YY)        Security code          │
│ ┌──────────────────────┬─────────────────────┐ │
│ │ MM / YY              │ CVC                 │ │
│ └──────────────────────┴─────────────────────┘ │
│ The 3 or 4 digits printed on the card.         │
│ Name on card                                   │
│ ┌────────────────────────────────────────────┐ │
│ │ Full name as shown on the card             │ │
│ └────────────────────────────────────────────┘ │
└────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) fieldset grows to 352px (sm:w-[22rem]) at 640px. A 16px semibold legend sits 16px above three field groups spaced 16px apart. Labels are 14px medium with 6px bottom spacing; inputs are 40px high with 12px side padding and 6px radii. The card number has a 16px card glyph inset 12px from the left and 40px left padding. Expiry and security code sit in two equal columns with no gap: the left input rounds only its left corners and the right input drops its left border and rounds only its right corners, so the pair reads as one box split by a single divider. A 14px hint sits 6px below the pair.',
    hierarchy: 'Read Card details, then Card number, Expiry (MM / YY), Security code with its hint, and Name on card. Numeric fields use inputMode numeric, tabular figures and the autocomplete tokens cc-number, cc-exp and cc-csc; the name uses cc-name. The hint is tied to the security code with aria-describedby. Placeholders show the format: 0000 0000 0000 0000, MM / YY and CVC. Keep labels to 3 words and the hint under 9 words.',
    states: 'Each input shows the standard 2px neutral-900 focus-visible outline offset 2px. The joined inputs are relative and rise to z-10 on focus, so the whole outline draws over the shared divider. Placeholders are neutral-500. The security code accepts at most 4 characters. Card number spacing, card type detection, expiry checks and error messages belong to the host or the payment provider.',
    responsive: 'Only the width changes at 640px, from 288px to 352px. The joined pair keeps two equal columns at every width, 144px each on mobile, and every cell and input is min-w-0.',
    usage: 'Use for card fields you render yourself, or as the frame around a payment provider\'s hosted fields. Pick inputs-field-grid for contact details with mixed widths. Variations: move Name on card to the top, add a postal code beside the security code, or show accepted card types as small placeholders under the legend.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
