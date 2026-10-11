import type { ComponentMeta } from '../../types'

export default {
  slug: "empty-state-import-area",
  name: "Empty state — Import area with format guidance",
  category: "empty-state",
  tags: [
    "split",
    "form",
    "spacious"
  ],
  description: "An empty collection presents a large file-selection area alongside import requirements. Use when importing a file is the quickest path to initial content.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Add your first records                                        │
│Lede                                                          │
│Choose an import file                Before importing         │
│CSV or JSON, up to 10 MB              One record per row      │
│[Choose file] No file chosen          Field headers           │
│[Import records] [Add manually]      Required fields          │
│                                     [Download example]       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/1fr grid at md has 40px gaps. The file-selection region uses a dashed border, neutral-50 surface and 24px padding, growing to 40px at sm. The guidance rail lists three 16px-separated requirements.",
    hierarchy: "The h1 explains the empty collection; a visible file label and format hint lead to the native file picker and Import records. The guidance rail explains the format. Heading up to 5 words, lede 16, requirements 8 each.",
    states: "The native file picker works with keyboard and exposes the chosen filename. It and both navigation actions have visible 2px focus outlines. The dashed area describes the upload region; parsing, file-size validation and import progress need host application integration.",
    responsive: "Below 768px guidance follows the file area. The picker is constrained to the available width, and actions wrap. File area padding and title size grow at 640px.",
    usage: "Use for an empty collection usually populated by file import. Choose empty-state-centered-icon when manual creation is primary. Variations: accept a spreadsheet format, add a mapping note, or replace the picker with a paste area."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
