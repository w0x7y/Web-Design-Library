import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-verification-sent',
  name: 'Sign-up — Verification email sent',
  category: 'signup',
  tags: ['centered', 'icons', 'compact'],
  description: 'A centered check-your-inbox step with the address the link went to, an open-email action and a resend row. Use right after registration when the account waits on email verification.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│                      Envelope icon                       │
│                       Step 2 of 3                        │
│                     Check your inbox                     │
│               Verification link explanation              │
│         ┌──────────────────────────────────────┐         │
│         │ Sent to             name@example.com │         │
│         │ Link expires             In 24 hours │         │
│         └──────────────────────────────────────┘         │
│         [            Open email app            ]         │
│         ────────────────────────────────────────         │
│         Didn't get the email?     [Resend email]         │
│         Resend wait hint                                 │
│           Wrong address? [Use a different email]         │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section has a max-w-3xl 768px shell with 24px gutters and 64px vertical padding, 96px from 640px. Inside, a centered max-w-md 448px column stacks a centered header, a details panel, a full-width action, a resend row and a closing link. The header holds a 48px neutral-100 icon tile with a 24px envelope, then 24px below it the eyebrow, h1 and lede. The details panel sits 32px below: a neutral-50 description list with a 1px neutral-200 border, 8px radius, 16px padding and 12px between rows, each row splitting its term and value to the two edges. The 44px primary action follows 24px below. The resend row is a form 32px further down with a 1px neutral-200 top rule and 24px top padding; its prompt and hint sit beside a secondary button. The closing line is centered 24px below.',
    hierarchy: 'Read in order: envelope tile, 14px step eyebrow, 30px h1 that tells people to check their inbox, 18px lede saying what the link does, then the sent-to address and link expiry, the Open email app action, the resend prompt and the change-address link. The address is the one value people must check, so it is set in 14px medium neutral-900 against a neutral-500 term. Slots: eyebrow up to 4 words, h1 up to 5, lede up to 24, each term up to 3 and value up to 4 words or one email address, resend hint up to 16 words.',
    states: 'Open email app changes from neutral-900 to neutral-700 on hover and Resend email from white to neutral-50, both with a 150ms color transition. Use a different email changes to neutral-600 on hover. Every control shows a 2px neutral-900 focus outline offset 2px. The wait hint is tied to Resend email with aria-describedby. While the wait runs, an app can set the button disabled and replace the hint with the remaining seconds; after a successful resend, swap the hint for a short sent confirmation.',
    responsive: 'The column stays one track at every width with 24px gutters and a 448px cap. Below 640px the resend prompt, hint and button stack with 16px between them and the button runs full width; from 640px they sit in one row with the button at the right edge and the text vertically centered. At 640px the h1 grows from 30px to 36px and vertical padding from 64px to 96px. Long addresses break inside the details panel instead of widening it.',
    usage: 'Use as the step that follows an email-and-password sign-up when the account stays unverified until the link is opened. Pick login-verification-code when people type a code instead of following a link, and login-magic-link for the form that sends a sign-in link. Variations: drop the step eyebrow for a single-step sign-up, add the spam-folder tips as a short list under the resend row, or replace Open email app with a Continue action once the address is verified.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
