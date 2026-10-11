import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-sso-first',
  name: 'Login — Single sign-on first',
  category: 'login',
  tags: ['centered', 'list', 'form'],
  description: 'A provider-first login card with three stacked choices and email as a later-step alternative. Use when workplace or provider authentication is the main route.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│        ┌───────────────────────────────────────┐         │
│        │ Logo / Sign-in headline               │         │
│        │ [Glyph  Continue with provider name ] │         │
│        │ [Glyph  Continue with provider name ] │         │
│        │ [Glyph  Continue with SSO           ] │         │
│        │ ─────────────── or ────────────────   │         │
│        │ Email                                 │         │
│        │ [Continue                           ] │         │
│        │ Terms note                            │         │
│        └───────────────────────────────────────┘         │
│                   [Use a different workspace]            │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section has a max-w-6xl 1152px container, 24px gutters and 64px vertical padding, 96px from 640px. A centred max-w-sm 384px card has a 1px neutral-200 border, 8px radius and 24px padding, 32px from 640px. Three full-width provider actions have 12px gaps. A hairline or divider separates the provider list from the email form; a workspace link sits 24px below the card.',
    hierarchy: 'Logo and a 30px h1 lead to three 44px secondary provider buttons with decorative 20px glyphs. The first two labels are Continue with provider name; the last is Continue with SSO. Email and the full-width Continue action are secondary entry routes. A 14px terms note closes the card. Slots: title up to 4 words, provider names up to 3, terms note up to 15.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. Provider buttons fill neutral-50 on hover with a 150ms colour transition. The two placeholder providers have distinct accessible names. All buttons are enabled; email continues to a later password step rather than showing one here.',
    responsive: 'The card remains one column and fills the 24px gutters below its 384px maximum width. At 640px vertical padding is 96px, card padding 32px and heading 36px. Provider labels may wrap into two lines within their 44px buttons on narrow screens; glyphs stay 20px.',
    usage: 'Use when most accounts enter through a provider or SSO. Pick login-centered-card when password entry should be visible immediately. Variations: reorder providers, reduce the list to one provider, or replace the workspace link with organization discovery.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
