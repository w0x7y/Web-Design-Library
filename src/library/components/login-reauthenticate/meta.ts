import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-reauthenticate',
  name: 'Login — Re-authenticate known account',
  category: 'login',
  tags: ['centered', 'stacked', 'form', 'compact'],
  description: 'A known account appears as an avatar, name and email above a single password field, with a link to switch accounts. Use after a session expires or before a sensitive action that needs the password again.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│                     Confirm it's you                     │
│                 Session expiry explanation               │
│              ┌────────────────────────────┐              │
│              │             AR             │              │
│              │        Account name        │              │
│              │      name@example.com      │              │
│              ├────────────────────────────┤              │
│              │ Password       [Forgot?]   │              │
│              │ [                        ] │              │
│              │ [Continue                ] │              │
│              ├────────────────────────────┤              │
│              │  Not you? [Switch account] │              │
│              └────────────────────────────┘              │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section with a 1152px max-w-6xl container, 24px gutters and 64px vertical padding, 96px from 640px. A centered max-w-sm 384px column holds a centered heading block and, 32px below, a card with a 1px neutral-200 border and 8px radius. The card stacks three bands split by neutral-200 hairlines: a neutral-50 identity band padded 24px around a 64px avatar, a password form padded 24px with 20px gaps, and a footer link row padded 16px top and bottom.',
    hierarchy: 'A 30px semibold h1 and a 14px explanation say why the password is needed again. The identity band confirms whose session it is: initials in a 64px avatar, a 16px semibold name and a 14px email on one line. Next come the Password label with Forgot password? on the same row, the 40px field and the full-width 44px Continue action. Not you? Switch account closes the card. Slots: heading up to 4 words, explanation up to 20, name up to 24 characters.',
    states: 'The 40px input has a 1px neutral-300 border, 6px radius and 14px text, and the browser enforces its required attribute. A hidden username field carries the email so password managers match the right account. Continue changes from neutral-900 to neutral-700 on hover with a 150ms color transition, and text links change to neutral-600. Every control shows a 2px neutral-900 keyboard-focus outline offset 2px. Put an incorrect-password message under the field and tie it to the input with aria-describedby.',
    responsive: 'One column at every width. Below 640px the column fills the space between the 24px gutters and the heading is 30px. From 640px the section padding grows to 96px and the heading to 36px. The email truncates to one line, and the Password label row wraps when the recovery link no longer fits beside it.',
    usage: 'Use when a known account must enter its password again: after an idle timeout, before changing security settings or before a payment or deletion. Pick login-account-picker when several saved accounts compete, or login-centered-card when the account is unknown. Variations: replace the password with a passkey action, add a Sign out link beside Switch account, or name the protected action in the explanation.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
