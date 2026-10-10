import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-plan-choice',
  name: 'Sign-up — Plan choice then details',
  category: 'signup',
  tags: ['stacked', 'grid', 'form', 'numbers'],
  description: 'Three selectable plan cards above account fields and a consent/action strip. Use when users choose a plan as part of account creation.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Account headline / Lede                         [Log in]  │
│Choose a plan                                             │
│┌─────────────────┐┌─────────────────┐┌─────────────────┐ │
││ (o) Plan name   ││ ( ) Plan name   ││ ( ) Plan name   │ │
││ $29 / month     ││ $59 / month     ││ $99 / month     │ │
││ Plan summary    ││ Plan summary    ││ Plan summary    │ │
│└─────────────────┘└─────────────────┘└─────────────────┘ │
│Name                Email               Company           │
│[Full name        ] [name@example.com ] [Company name ]   │
│[ ] Accept terms                        [Create account]  │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section contains one max-w-5xl 1024px form with 24px gutters and 64px vertical padding, 96px from 640px. A title/login row leads to a fieldset 40px below. Three radio cards have 24px padding, 8px radii, 1px borders and 16px gaps. Name, Email and Company fields sit 32px below. A top-ruled consent/action strip has 24px top padding.',
    hierarchy: 'A 30px h1 and 18px lede precede the 18px Choose a plan legend. Each plan has a 16px title, 30px price, 14px billing unit and one-line description. Native radios name each plan and connect to its description. Name, Email and Company follow; the consent checkbox and Create account complete the flow. Slots: heading up to 6 words, lede up to 20, plan title up to 3, description up to 12.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. The first plan is checked by default. A checked card changes its border to neutral-900 through :has(:checked). Focus on a radio outlines both the radio and its card with 2px neutral-900, offset 2px; the native checked dot preserves selection in forced colours. Consent is required. No disabled plan is shown.',
    responsive: 'Below 768px the title/login row, radio cards, fields and consent/action strip stack. From 768px cards and account fields each form three equal columns; title/login and consent/action use horizontal rows. Below 640px the submit is full width; at 640px it becomes auto width, section padding grows to 96px and the h1 to 36px.',
    usage: 'Use when plan selection is part of creating an account. Pick signup-centered-social when plans are selected later or signup-split-benefits for one trial offer. Variations: offer annual prices, add a short feature list to each card, or replace Company with a workspace name.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
