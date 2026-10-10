import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-count-indicators",
  name: "Badges — Counts and dot indicators",
  category: "badges",
  tags: ["layered", "numbers", "icons", "compact"],
  description: "Three icon or avatar links carry overlapping indicators above navigation rows with counts. Use for unread counts and compact presence cues.",
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────────┐
│ (Bell)[3]    (Messages).     (AR).         │
│                                            │
│ Inbox icon     Inbox                  (12) │
│ Archive icon   Archive                 (4) │
│ Flag icon      Saved                  (8)  │
└────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) root grows to 320px (sm:w-80) at 640px. Three 40px links share a row with 20px gaps. The bell has a count pill at -6px top and right, 20px high and at least 20px wide, with a 2px white separation outline. Messages has an 8px top-right dot and the initials avatar a 10px bottom-right dot. After 24px, three 36px nav links combine 16px icons, 14px labels and right-aligned 12px count pills. Counts use tabular figures.",
    hierarchy: "The upper links expose 3 unread notifications, New messages and Alex Rivera, available in their accessible names. Indicator glyphs are decorative with sr-only wording. Inbox is current, with neutral-100 fill and medium weight; its count is white, others neutral-100. Keep link labels under 3 words and counts under 4 digits.",
    states: "Icon links and nav rows hover neutral-50 and have 2px neutral-900 focus-visible outlines offset 2px. Current Inbox uses aria-current=page. Forced colours retain bordered indicators, and the avatar presence has visible Available wording in its accessible name. The count separation uses an outline only on its static span.",
    responsive: "At 640px only the width changes from 288px to 320px. The indicator row and three nav rows keep their dimensions and spacing; counts remain right aligned.",
    usage: "Use for unread navigation and presence summaries. Pick badges-status-list for named item statuses. Variations: cap counts with 99+, use only two top links, or replace the avatar with another icon and a named presence state.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
