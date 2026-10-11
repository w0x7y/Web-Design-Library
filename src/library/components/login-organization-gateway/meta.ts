import type { ComponentMeta } from '../../types'

export default {
  slug: "login-organization-gateway",
  name: "Login — Organization domain gateway",
  category: "login",
  tags: [
    "stacked",
    "row",
    "form"
  ],
  description: "A wide domain-entry band opens organization access above three policy notes. Use before routing someone to their organization identity provider.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Find your organization                                        │
│Lede                                                          │
│Workspace address                                             │
│[workspace                ].example.com  [Continue]           │
│Address hint                                                  │
│Managed access     Account requirements     [Get help]        │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A max-w-3xl introduction sits above a p-6 domain band. At 640px its grid uses minmax(0,1fr)/auto with 16px gaps. A three-column definition list follows after 32px.",
    hierarchy: "The 30px heading explains the destination. A single 14px workspace label and fixed domain suffix precede Continue. Each policy slot has a 3-word title and 8-word note.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "The action stacks below the domain field under 640px, and the policy notes become a single column. The input shrinks before its fixed suffix; the heading grows at sm.",
    usage: "Use when sign-in depends on an organization address. Choose login-sso-first for a known provider. Variations: replace the suffix with a tenant prefix, add a remembered workspace link, or show a membership note."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
