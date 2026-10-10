import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-permission',
  name: "Empty state — Access required",
  category: 'empty-state',
  tags: ["centered", "icons", "compact"],
  description: "A centred access request card with a named owner and account-switch link. Use it when a signed-in person lacks permission to view a resource.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│                    Lock icon                         │
│                  You need access                     │
│                Two-line explanation                  │
│┌────────────────────────────────────────────────────┐│
││ Avatar  Alex Rivera                                ││
││         Owner / name@example.com                   ││
│└────────────────────────────────────────────────────┘│
│                  [Request access]                    │
│                  [Switch account]                    │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72), 384px from 640px (sm:w-96), rounded-lg bordered card with p-6. A centred 40px lock tile leads the heading by 12px. Description follows by 8px. A left-aligned owner box has a neutral-200 border, 12px padding, 12px gap and 16px top spacing; its 40px avatar is beside name, role and email. A full-width 44px primary follows by 16px, with a text link 12px below.",
    hierarchy: "Read the lock, 16px semibold heading of at most 4 words, two-line 14px explanation of at most 12 words, owner identity, request action and switch link. The owner name is 14px medium; role and email are 12px. The avatar initials are decorative because the name is visible.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. The lock, owner and card are static; requesting access is an action slot with no JavaScript or pending variant.",
    responsive: "The centred card stays stacked at every width; its width changes from 288px to 384px at 640px. Owner text can wrap inside a min-w-0 column. The full-width action and compact identity box keep the element below 384px high.",
    usage: "Use when the user needs permission from a known owner. Pick empty-state-error-retry for a temporary loading problem. Variations: show a team owner, use a help link, or replace the request action with an invitation-code link.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
