import type { ComponentMeta } from '../../types'

export default {
  slug: "signup-interest-grid",
  name: "Sign-up — Interest choices with email footer",
  category: "signup",
  tags: [
    "grid",
    "stacked",
    "form"
  ],
  description: "Four interest tiles feed into an email registration row. Use to personalize an account before asking for credentials.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Choose what you want to follow                                │
│Your interests                                                │
│[x] Topic label               [ ] Category label              │
│    Topic description             Category description        │
│[ ] Collection label          [ ] Format label                │
│    Collection description        Format description          │
│Email                                                         │
│[name@example.com                     ] [Create account]      │
│Preference change hint                                        │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A two-column interest grid starts at sm with 16px gaps and p-6 cards. A top-bordered registration band follows after 32px with 32px upper padding, minmax(0,1fr)/auto columns and 16px gap.",
    hierarchy: "The h1 and interest choices precede the email request. Each tile has a 14px checkbox label and a 6-word hint; h1 up to 9 words, lede 16, interest titles 3 words. The final hint explains reversibility.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Interest cards and email/action stack below 640px. Every checkbox remains visible at the start of its card. The heading grows to 36px at sm.",
    usage: "Use when an account begins with followed topics or content subscriptions. Choose a standard credentials form when personalization comes later. Variations: add two topics, group choices by audience, or replace email with a provider action."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
