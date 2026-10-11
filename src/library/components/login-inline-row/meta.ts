import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-inline-row',
  name: 'Login — Inline credential row',
  category: 'login',
  tags: ['stacked', 'row', 'form', 'compact'],
  description: 'A heading band over a single desktop credential row with recovery and registration links below. Use for compact sign-in embedded in a broader page.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Sign-in headline                        Status note       │
│Lede                                                      │
│───────────────────────────────────────────────────────   │
│Email                    Password                         │
│[name@example.com      ] [password         ] [Sign in]    │
│[Forgot password?]       [Create account]                 │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white max-w-6xl 1152px band uses 24px gutters and 64px vertical padding, 96px from 640px. From 1024px the heading row is 1.6fr/1fr with a 32px gap and bottom alignment. A top hairline 32px below separates a form, padded 32px above, with Email, Password and submit in a 1fr/1fr/auto grid and 16px gaps. Recovery and account links form a wrapping row 24px below.',
    hierarchy: 'A 30px semibold h1 and 18px lede lead to the two 14px-labelled credentials and 44px Sign in action. A short 14px status note sits beside the heading on desktop. Slots: heading up to 7 words, lede up to 18, status up to 12; link labels are standard account actions.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. No remember-me, selected or disabled state is shown.',
    responsive: 'Below 1024px the heading and status stack, and the credentials and full-width submit stack in a single column. From 1024px controls align at the bottom of their grid cells and the submit becomes auto width. At 640px padding grows to 96px and the heading to 36px. Footer links wrap when needed.',
    usage: 'Use for a compact access band where a standalone card would add too much structure. Pick login-centered-card for a dedicated login page. Variations: replace the status with an access note, hide the registration link, or add a password hint below the row.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
