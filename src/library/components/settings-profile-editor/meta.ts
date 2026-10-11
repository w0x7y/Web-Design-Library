import type { ComponentMeta } from '../../types'

export default {
  slug: "settings-profile-editor",
  name: "Settings — Profile editor with identity rail",
  category: "settings",
  tags: [
    "sidebar",
    "form",
    "stacked"
  ],
  description: "A compact identity and visibility rail sits beside a profile form with public and contact sections. Use when account identity needs its own editing layout.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Edit your profile                                             │
│ AR  Alex Rivera     Public profile                           │
│Visibility summary   Display name            Role             │
│[View profile]       [Alex Rivera         ]  [Role       ]    │
│                     Biography                                │
│                     [Short introduction                ]     │
│                     Contact details                          │
│                     Email [name@example.com            ]     │
│                     [Save profile] [Cancel]                  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 256px/minmax(0,1fr) sidebar grid starts at lg with 40px gaps. The neutral-50 rail has 24px padding. The main form divides public and contact fields with a top border; name and role become two columns at sm.",
    hierarchy: "The h1 precedes the identity rail and public editing fields, then private contact details and Save profile. The visible name identifies the decorative initials. Headline up to 5 words, lede 18, biography at most 160 characters and hints 12 words.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Below lg the identity rail moves above the form. Name and role stack below sm. The textarea remains full width and vertically resizable; all text can wrap at 320px.",
    usage: "Use for member identity editing with visibility context. Choose settings-sidebar-sections for a complete settings navigation shell. Variations: add pronouns, replace role with department, or add an external profile URL."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
