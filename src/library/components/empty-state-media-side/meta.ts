import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-media-side',
  name: "Empty state — Illustration beside text",
  category: 'empty-state',
  tags: ["asymmetric", "media", "compact"],
  description: "An illustration placeholder beside compact empty-state copy and actions. Use it when a visual can explain the next step in a wider panel.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│┌───────────────┐  Title for the empty space          │
││               │  One-line explanation               │
││     Image     │                                     │
││               │  [Create item] [Learn more]         │
│└───────────────┘                                     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A bordered rounded-lg card, 288px (w-72) with 24px padding on mobile and 608px (sm:w-[38rem]) with 32px padding from 640px. Mobile centres a 128px square neutral-100 illustration placeholder, a 16px heading 8px below, one help line 4px below, and stacked actions with 8px top spacing and 8px gaps. Desktop uses a 160px square placeholder beside a flexible left-aligned column with a 28px gap.",
    hierarchy: "Read the decorative illustration, 16px semibold heading, 14px help line and filled action. Heading up to 5 words, help up to 7, action labels up to 3. The media has a descriptive role=img name and an aria-hidden 40px image glyph.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. The media is static. There are no open, selected or disabled states.",
    responsive: "Below 640px the card is 288px wide, stacked and centred with a 128px-high illustration placeholder and both actions inside the 384px frame. From 640px it is 608px wide with p-8, a 160px square illustration, left-aligned text and actions in a wrapping row.",
    usage: "Use in a wide empty panel where an illustration clarifies the next step. Pick empty-state-centered-icon for a narrow icon-only message. Variations: use a video glyph, place the visual after the text, or link to a short setup guide.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
