import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-invite-accept',
  name: 'Sign-up — Accept an invitation',
  category: 'signup',
  tags: ['centered', 'form', 'compact'],
  description: 'A compact invitation card that identifies the workspace and role above a read-only invited email. Use when account creation begins from a specific invitation.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│       ┌───────────────────────────────────────────┐      │
│       │ Tile  Alex Rivera invited you             │      │
│       │       Workspace name / Member role        │      │
│       ├───────────────────────────────────────────┤      │
│       │ Invited email [read-only]                 │      │
│       │ Full name                                 │      │
│       │ Password / Rules hint                     │      │
│       │ [ ] Accept terms                          │      │
│       │ [Accept and join                        ] │      │
│       │ Not you? [Use another account]            │      │
│       └───────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section has a max-w-6xl 1152px shell with 24px gutters and 64px vertical padding, 96px from 640px. A centred max-w-md 448px card uses 24px padding, 32px from 640px, a 1px neutral-200 border and 8px radius. Its header has a non-shrinking 48px workspace tile beside invitation text with a 16px gap. A bottom hairline and 24px padding separate the header from a form with 20px gaps.',
    hierarchy: 'The 18px semibold h1 names Alex Rivera and Workspace name; a 14px line identifies the member role. Invited email is read-only with a neutral-50 fill and explanatory hint. Full name, Password with a rules hint, required terms and the full-width Accept and join action follow. A 14px account-switch prompt closes the card. Slots: workspace name up to 4 words, role up to 3, password hint up to 12.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. Invited email remains focusable and read-only, with read-only neutral-50 fill and a linked hint. Password requires at least 12 characters. Terms is a native required checkbox. The account-switch link is available; no expired invitation state is shown.',
    responsive: 'One column at every width; the card fills the 24px gutters below 448px. The invitation title wraps beside the fixed 48px tile. At 640px vertical padding becomes 96px and card padding 32px. Field and submit widths do not change.',
    usage: 'Use for joining a workspace through an invitation tied to an email address. Pick signup-split-benefits for creating a new workspace or signup-centered-social for open registration. Variations: change the assigned role, add invitation expiry information, or show a different inviter name.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
