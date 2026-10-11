import type { ComponentMeta } from '../../types'

export default {
  slug: "login-passkey-options",
  name: "Login — Passkey action with fallback disclosure",
  category: "login",
  tags: [
    "split",
    "stacked",
    "form"
  ],
  description: "A passkey instruction pane sits beside a large device action and an expandable password fallback. Use when passkeys are the preferred access method.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Access with your device          Use a saved passkey          │
│Lede                             Device instruction           │
│Device requirement               [Continue with passkey]      │
│Recovery option                  > Use password instead       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 48px-gap equal grid at md aligns a description column with a bordered 24px-padded action card. A primary action is followed by a 24px-separated details disclosure containing two fields.",
    hierarchy: "The page headline and device action lead; the fallback stays secondary. Headline up to 6 words, lede up to 18, requirement and recovery notes up to 10 each. The closed summary uses a 5-word label.",
    states: "The native details summary toggles the credential form with pointer, Enter or Space. Its marker indicates the open state. Fields and actions show the standard 2px focus outline. The passkey action is a navigation placeholder; integrate device authentication in the host application.",
    responsive: "Below 768px the explanation and action card stack. Opening the fallback expands the card vertically in normal flow. The heading increases at sm.",
    usage: "Use when device authentication is the main access route. Choose a conventional credential form when passkeys are optional. Variations: add a security-key note, show a remembered email, or replace the fallback with a recovery link."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
