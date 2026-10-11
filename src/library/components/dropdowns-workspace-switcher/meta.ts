import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-workspace-switcher",
  name: "Dropdowns — Workspace switcher with a create action",
  category: "dropdowns",
  tags: ["layered", "list", "form", "compact"],
  description: "A workspace disclosure lists two radio choices with initials, access hints and a separate create action. Use when one active workspace needs an explicit identity.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Personal workspace ^]                               │
│ ┌──────────────────────────────────────────────┐     │
│ │ Choose workspace                             │     │
│ │ [PW Personal workspace]                Check │     │
│ │ Only you have access                         │     │
│ │ [SW Shared workspace]                        │     │
│ │ 12 members have access                       │     │
│ │ ──────────────────────────────────────────── │     │
│ │ [+ Create workspace]                         │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px disclosure grows to 384px at sm. Its 44px outlined summary sits 8px above a full-width shadow-lg panel with 12px padding. Two radio rows use 8px padding, 32px initials tiles, 12px gaps and title/hint text. A top divider separates a 36px create action.",
    hierarchy: "Read the current workspace, choice legend, each workspace and access hint, then Create workspace. Workspace names use at most 2 words, hints at most 5 words and initials 2 characters. Each hint describes its radio; trigger text follows the selected workspace.",
    states: "The disclosure starts open with Personal workspace selected. Checked options have a border, neutral-50 fill and a check marker controlled through opacity. Forced colors use a Highlight border. Summary, create action and radio labels show focus outlines. Arrow keys switch the radios.",
    responsive: "The root grows from 288px to 384px at 640px. Panel width follows the root, and the two choices stay stacked. Workspace copy can wrap inside min-w-0 while initials and check markers remain fixed.",
    usage: "Use for an active workspace with a short list of alternatives. Choose an account menu for profile and session destinations. Variations: change workspace names, add one more workspace, or replace Create with an invitation action.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
