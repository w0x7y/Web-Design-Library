import type { ComponentMeta } from '../../types'

export default {
  slug: "empty-state-example-gallery",
  name: "Empty state — Empty collection beside example gallery",
  category: "empty-state",
  tags: [
    "split",
    "grid",
    "media"
  ],
  description: "An empty-state message shares a wide layout with two sample previews. Use when seeing a finished structure helps people create their first record.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Nothing here yet          Explore example structures          │
│Empty-state explanation   ┌─────────────┐ ┌─────────────┐     │
│                          │    Image    │ │    Image    │     │
│[Create first record]     └─────────────┘ └─────────────┘     │
│                          Individual       Shared example     │
│                          Example note     Example note       │
│                          [Open example]   [Open example]     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/3fr lg grid uses 40px gaps and vertical centering. The narrower message faces an example gallery with two sm columns, 16px gaps and p-6 cards. Each preview is 16:9 with a decorative image glyph.",
    hierarchy: "The 30px h1 and primary create action lead, while sample previews explain the content shape. Each Open example action names its sample. Heading up to 5 words, lede 18, sample titles 3 and descriptions 10.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "The gallery stacks below the message under 1024px; its cards stack below 640px. Placeholder previews use their card width. Title grows at sm.",
    usage: "Use when an example is more useful than setup instructions. Choose empty-state-starting-paths when people need to choose among creation methods. Variations: show a single wide preview, use a template comparison, or add a guide link."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
