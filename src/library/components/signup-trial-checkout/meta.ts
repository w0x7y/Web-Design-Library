import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-trial-checkout',
  name: 'Sign-up — Trial checkout with order summary',
  category: 'signup',
  tags: ['asymmetric', 'form', 'numbers'],
  description: 'Account and card fields beside a sticky order summary that shows the plan, trial length, first charge date and the amount due today. Use when a free trial needs a payment method at sign-up.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│14-day free trial                   ┌───────────────────────┐ │
│Start your free trial               │Order summary          │ │
│Charge timing lede                  │Plan name [Change plan]│ │
│                                    │Plan details           │ │
│Account                             ├───────────────────────┤ │
│[Full name     ] [Work email     ]  │Free trial      14 days│ │
│[Password                        ]  │First charge Nov 9 2026│ │
│Password hint                       │Then     $29.00 / month│ │
│──────────────────────────────────  ├───────────────────────┤ │
│Payment                             │Due today         $0.00│ │
│Card saving hint                    │Reminder note          │ │
│[Card number                     ]  └───────────────────────┘ │
│[MM / YY       ] [CVC            ]                            │
│[ ] Accept terms and future charge                            │
│[Start free trial]  Account? [Log in]                         │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section has a 1152px max-w-6xl container with 24px gutters and 64px vertical padding, 96px from 640px. From 1024px it is a two-column grid, a flexible main column and a fixed 384px (24rem) summary column, with a 64px column gap and 40px row gap. The heading block sits top left, the form below it, and the summary spans both rows on the right as a sticky neutral-50 card 32px from the viewport top, with a 1px neutral-200 border, 8px radius and 24px padding. The form has two fieldsets. Account puts Full name and Work email in two columns from 640px with a full-width Password below, 20px gaps. Payment sits 40px lower under a 1px neutral-200 rule with 32px top padding: a full-width Card number, then Expiry date and Security code side by side. The terms checkbox and an action row follow 32px apart.',
    hierarchy: 'The 14px eyebrow names the trial length, then the 30px h1 and 18px lede say nothing is charged until the trial ends. The summary is read next: a 16px Order summary heading, the plan name with its billing line and a Change plan link, three term and value rows for trial length, first charge date and the recurring price, then Due today in 16px semibold against a 24px semibold amount. Figures use tabular numbers. The form follows with 16px fieldset legends over 14px labels, and the consent line repeats the amount and date of the first charge. Slots: eyebrow up to 4 words, h1 up to 6, lede up to 20, billing line up to 8, reminder note up to 22, consent text up to 24.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. Start free trial changes from neutral-900 to neutral-700 on hover with a 150ms color transition, and text links change to neutral-600. Every control shows a 2px neutral-900 focus outline offset 2px. Password carries a 12-character minimum with its hint tied by aria-describedby, the Payment fieldset is described by its card-saving hint, card fields use numeric input mode and cc autocomplete tokens, and the terms checkbox is required. While the payment is confirmed, an app can disable the submit button and change its label to a progress message.',
    responsive: 'Below 1024px everything stacks in one column in source order: heading, order summary, then the form, so the amount due today shows before any card field. The summary stops being sticky and spans the full width. Below 640px Full name and Work email stack, the full-width submit button and log-in prompt stack with 16px between them, and the h1 is 30px; from 640px the name fields share a row, the action row lines up horizontally and the h1 grows to 36px. Expiry date and Security code stay side by side at every width.',
    usage: 'Use when a trial starts only after a card is on file, so people see what they are agreeing to before they pay anything. Pick signup-plan-choice when people still have to compare plans, and signup-split-benefits for a trial that needs no card. Variations: add a promo code field under the summary rows, show a taxes row and a different amount due today for paid plans without a trial, or replace the card fields with an embedded payment provider form.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
