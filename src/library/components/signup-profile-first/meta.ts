import type { ComponentMeta } from '../../types'

export default {
  slug: "signup-profile-first",
  name: "Sign-up — Profile identity above credential panel",
  category: "signup",
  tags: [
    "stacked",
    "row",
    "form"
  ],
  description: "A prominent identity setup row precedes a bordered credential panel. Use when the visible member profile is the first onboarding decision.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Set up your member profile                                    │
│ AR        Display name          Profile handle               │
│Initials   [Alex Rivera       ]  [alex-rivera         ]       │
│           Display name hint     Handle hint                  │
│Account credentials                                           │
│Email                         Password                        │
│[name@example.com          ]  [Password                 ]     │
│[Create profile] [Sign in instead]                            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. An auto/1fr grid at sm places a 64px initials circle in a neutral-50 identity block beside two profile fields. A bordered credential fieldset follows after 32px, with 24px padding and two columns at md.",
    hierarchy: "The 30px h1 leads to public display identity before private account credentials. Initials are decorative and the visible name is supplied in its labelled field. H1 up to 7 words, lede 16, each profile hint 8.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "The identity block stacks below sm. Profile fields become two columns at sm; credentials become two columns at md. The section padding and title increase at sm.",
    usage: "Use when a recognizable member identity matters at registration. Choose signup-centered-social for access before profile creation. Variations: add a pronoun field, replace the handle with a role, or include a short biography."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
