import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-otp-row",
  name: "Inputs — One-time code row",
  category: "inputs",
  tags: ["row", "form", "compact"],
  description: "Six single-digit fields are grouped around a dash above Verify and Resend actions. Use for a short numeric verification code.",
  preview: { kind: 'element' },
  wireframe: `┌─────────────────────────────────────────────┐
│ Verification code                           │
│ Enter the six-digit code.                   │
│ [1] [2] [3]  -  [ ] [ ] [ ]                 │
│ [                  Verify                 ] │
│ Didn't get a code? [Resend]                 │
└─────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) root, 352px (sm:w-[22rem]) from 640px. A 14px medium legend and 14px instruction precede a six-input row by 16px. Two groups of three use 4px internal gaps, a 12px dash and 8px spacing around it. Each box is 36px by 44px, stepping to 44px by 48px at 640px. Verify is a full-width 44px primary action 20px below, followed by a 14px resend line after 12px.",
    hierarchy: "Read the Verification code legend, instruction, six 18px mono digits, then Verify and Resend. Each box is labelled Digit n of 6 and linked to the instruction. The first three have example digits. Keep instructions under 6 words and action labels to one word.",
    states: "Inputs use numeric inputMode, a one-character maximum and a numeric pattern. The first allows one-time-code autocomplete. Each control has the standard 2px neutral-900 focus outline offset 2px. Verify hovers neutral-700 and Resend neutral-600. The native inputs accept edits independently; auto-advance, code validation and paste splitting belong to the host.",
    responsive: "Below 640px boxes are 36px wide and 44px tall in a 288px root. At 640px boxes become 44px by 48px in a 352px root. The code row and action ordering stay unchanged.",
    usage: "Use for six-digit verification. Pick inputs-field-anatomy for a single long token. Variations: use four boxes, mask the digits, or add an expiry message linked to the fieldset.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
