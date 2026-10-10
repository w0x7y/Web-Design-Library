import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-field-anatomy",
  name: "Inputs — Label, hint and error states",
  category: "inputs",
  tags: ["stacked", "form", "compact"],
  description: "Three labelled fields compare default, error and disabled anatomy. Use them to keep field messages and state cues consistent.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Display name                       Optional  │
│ ┌─────────────────────────────────────────┐  │
│ │ Enter display name                      │  │
│ └─────────────────────────────────────────┘  │
│ Hint: how this value is used                 │
│ Email                                        │
│ ┌─────────────────────────────────────────┐  │
│ │ name@                                   │  │
│ └─────────────────────────────────────────┘  │
│ ! Error: enter a valid email.                │
│ Account ID                                   │
│ ┌─────────────────────────────────────────┐  │
│ │ AC-1042 (disabled)                      │  │
│ └─────────────────────────────────────────┘  │
│ Hint: this value cannot change               │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) stack, 320px (sm:w-80) from 640px. Three field groups have 20px gaps. Labels are 14px medium; inputs are 40px tall with 12px side padding and 6px radii. Each input sits 6px below its label, and its 14px message another 6px below. The error message has a 16px alert icon and 6px gap. Total height is 316px.",
    hierarchy: "Read each label, control, then message. The first label shares a row with Optional. The error uses an alert icon, Error wording and aria-invalid. Disabled Account ID has a visible value. Labels up to 3 words, placeholder up to 4, messages up to 6.",
    states: "Enabled fields change their neutral-300 borders to neutral-400 on hover and show a 2px neutral-900 focus-visible outline offset 2px. The invalid field keeps a neutral-900 border through aria-invalid. The disabled input has neutral-50 fill, neutral-500 text and a not-allowed cursor. All placeholders are neutral-500; each message is linked with aria-describedby.",
    responsive: "At 640px only the root width increases from 288px to 320px. All three field groups remain stacked and messages fit one line.",
    usage: "Use for form field states and message placement. Pick inputs-field-grid for related fields with mixed widths. Variations: swap the optional marker for Required, show a success message with a check icon, or use a read-only field instead of disabled.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
