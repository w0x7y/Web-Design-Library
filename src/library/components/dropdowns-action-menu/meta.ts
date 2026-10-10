import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-action-menu",
  name: "Dropdowns — Action menu with sections and shortcuts",
  category: "dropdowns",
  tags: ["layered", "icons", "compact"],
  description: "An open action disclosure groups icon commands, shortcut hints and a separate deletion action. Use for compact secondary actions on one item.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Options ^]                                          │
│ ┌────────────────────────────────┐                   │
│ │ Icon [Edit]                E   │                   │
│ │ Icon [Duplicate]           D   │                   │
│ │ Icon [Copy link]           C   │                   │
│ ├────────────────────────────────┤                   │
│ │ Organize                       │                   │
│ │ Icon [Move to folder]          │                   │
│ │ Icon [Archive - disabled]      │                   │
│ ├────────────────────────────────┤                   │
│ │ Icon [Delete]                  │                   │
│ └────────────────────────────────┘                   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative details root is 288px (w-72) wide, 304px (h-[19rem]) high and 320px (sm:w-80) wide from 640px. A 44px standard outlined trigger precedes a left-aligned 224px (w-56) panel by 8px. The rounded-md panel has a neutral-200 border, shadow-lg and 4px padding. Three 32px command rows have 16px icons, 8px gaps and right-aligned 12px monospace shortcut hints. A divider and 12px Organize heading introduce two more rows; another divider isolates Delete.",
    hierarchy: "Read Options first, then common commands, the organization group and Delete. Labels use up to 3 words; shortcut hints one character; the group heading one word. Delete uses explicit wording and a trash icon. Lists retain role=list, and items are plain buttons with native button semantics.",
    states: "The details is open initially. Trigger hover fills neutral-50 and keyboard focus draws a 2px neutral-900 outline offset 2px. The chevron rotates 180 degrees while open. Enabled rows hover or focus to neutral-100, with a 2px inset focus outline. Archive is natively disabled with a not-allowed cursor and 50% opacity. Shortcut hints and command buttons are slots for host behavior; no keyboard shortcut handlers are included.",
    responsive: "The root is 288px below 640px and 320px from 640px. The trigger and 224px panel retain their size and left alignment at every width. The 304px reserve contains the open panel.",
    usage: "Use for commands associated with a record or card. Choose dropdowns-account-menu for identity navigation or dropdowns-filter-checkboxes for multiple selections. Variations: change the command labels, omit shortcuts when the host has none, or remove the disabled example.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
