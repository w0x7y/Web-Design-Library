import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-centered-icon',
  name: "Empty state — Centred icon with action",
  category: 'empty-state',
  tags: ["centered", "icons", "compact"],
  description: "A centred icon, explanation and stacked actions inside a compact card. Use it when a collection is empty and creating the first item is the main next step.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│                  Folder-plus icon                    │
│              Title for the empty list                │
│                Two-line explanation                  │
│                [Create first item]                   │
│                [Import from a file]                  │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) card, 384px (sm:w-96) from 640px, with p-6 (24px), a 1px neutral-200 border and rounded-lg (8px). A centred 48px folder-plus tile precedes the 16px heading by 16px; description follows by 8px. Actions are a centred column with 12px gaps and 20px top spacing. The primary is 44px tall with 20px side padding and a 6px radius.",
    hierarchy: "Read the icon, heading, two-line description, filled primary action and underlined import link. Heading up to 5 words; explanation up to 12; action labels up to 4 words. Heading is 16px semibold, body and actions 14px.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. The icon and card remain static; there are no selected, open or disabled states.",
    responsive: "The card remains centred and stacked at every width. Only its fixed width changes at 640px, from 288px to 384px. Text wraps within the 238px mobile content column and the card fits the 384px-high element frame.",
    usage: "Use for the first item in a collection. Pick empty-state-no-results when filters hide existing items. Variations: replace the folder glyph with an inbox, change creation to invitation, or use an upload action.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
