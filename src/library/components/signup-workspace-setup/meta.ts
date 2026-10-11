import type { ComponentMeta } from '../../types'

export default {
  slug: "signup-workspace-setup",
  name: "Sign-up — Workspace form with setup summary",
  category: "signup",
  tags: [
    "split",
    "form",
    "list"
  ],
  description: "Workspace naming and account fields sit beside an ordered setup summary. Use when registration creates a workspace as well as a personal account.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Create your workspace                                         │
│Workspace name                          Setup overview        │
│[Workspace name                      ]  01 Name workspace     │
│Workspace URL                           Current step          │
│[workspace-name                      ]  02 Invite people      │
│Your name             Work email        Next step             │
│[Alex Rivera       ]  [Email          ]  03 Add content       │
│[Create workspace]                      Final step            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/1fr grid begins at lg with 40px gaps. The left form has 24px vertical field spacing and a nested sm two-column identity row. The p-6 neutral-50 rail lists three 24px-separated setup steps.",
    hierarchy: "The h1 leads into workspace identity, then personal identity and submit. The summary explains what comes next. Headline up to 6 words, lede 18, workspace labels 2 words, step headings 4 and descriptions 8.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "The setup rail stacks after the form below 1024px. Name/email stack below 640px. Inputs shrink to their columns and hints wrap. The heading and section padding increase at sm.",
    usage: "Use when creating a shared workspace during registration. Choose signup-form-aside for a personal account with supporting information. Variations: add a region selector, show an invitation preview, or replace URL with a team identifier."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
