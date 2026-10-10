import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-permission',
  name: "Empty state — Access required",
  category: 'empty-state',
  tags: ["stacked", "icons", "compact"],
  description: "A left-aligned access request panel with a named owner and an account-switch link. Use it when a signed-in person lacks permission to view a resource.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│ Lock icon                                                │
│ You need access                                          │
│ Explanation of who can grant access                      │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Avatar  Alex Rivera                                  │ │
│ │         Owner / name@example.com                     │ │
│ └──────────────────────────────────────────────────────┘ │
│ [Request access]                                         │
│ [Switch account]                                         │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72), 384px from 640px (sm:w-96), rounded-lg bordered card with p-6. A left-aligned 40px lock tile leads the heading by 12px. The left-aligned description follows by 8px. A full-width owner box has a neutral-200 border, 12px padding, 12px gap and 16px top spacing; its 40px avatar is beside name, role and email. A full-width 44px primary action follows by 16px, with a left-aligned text link 12px below.",
    hierarchy: "Read the left-aligned lock, 16px semibold heading of at most 4 words, two-line 14px explanation of at most 12 words, owner identity, request action and switch link. The owner name is 14px medium; role and email are 12px. The avatar initials are decorative because the name is visible.",
    states: "Request access is a 44px primary link with 6px rounded-md corners; its fill changes from neutral-900 to neutral-700 on hover with a 150ms colour transition. The underlined Switch account link turns neutral-600 on hover. Both links show a 2px neutral-900 focus-visible outline offset 2px. The lock and owner are static; no pending or disabled request state is shown.",
    responsive: "The panel stays left-aligned and stacked at every width; its width changes from 288px to 384px at 640px. Owner text wraps inside a min-w-0 column, including long email addresses through break-words. The owner box and request action fill the available content width.",
    usage: "Use when the user needs permission from a known owner. Pick empty-state-error-retry for a temporary loading problem. Variations: show a team owner, use a help link, or replace the request action with an invitation-code link.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
