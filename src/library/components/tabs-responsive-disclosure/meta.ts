import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-responsive-disclosure",
  name: "Tabs — Disclosure selector that becomes a tab row",
  category: "tabs",
  tags: ["stacked", "layered", "compact"],
  description: "A mobile disclosure lists three view choices above the active panel and becomes a simple row on wider screens while open. Use when the selector needs a compact mobile affordance.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Overview]           [Details]           [Activity]  │
│ ┌──────────────────────────────────────────────┐     │
│ │ Overview heading                             │     │
│ │ Explain the selected view and its contents.  │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root grows to 448px at sm. On mobile a bordered disclosure has a 40px summary and three 36px radio rows inside 4px padding. The content panel begins 16px below with 16px padding. At sm the summary hides only while the disclosure is open, and the revealed radio list becomes three equal columns with 12px gaps.",
    hierarchy: "Read the selected view in the trigger when the disclosure is closed, or in the desktop choice row while open, then the selected heading and body. Labels use one word, headings under 3 words and body under 12 words. Trigger text follows the checked radio through CSS; each radio labels its section.",
    states: "The disclosure starts open with Overview selected. Summary activation opens or closes the mobile option list. When closed on desktop, the summary remains reachable so it can reopen the choices; while open on desktop the summary hides and the choices remain visible. Radio selection changes the visible panel and trigger value. Checked options have borders and medium text, with Highlight borders in forced colors. Trigger and labels show focus outlines.",
    responsive: "Below 640px the 288px selector is an open vertical disclosure. From 640px the root is 448px and an open choice list becomes horizontal. The summary hides only while open; after closing on mobile and resizing wider, the summary remains visible and can reopen the desktop choices. The panel stays below the selector in both layouts.",
    usage: "Use when a short view selector needs a mobile disclosure form. Choose always-visible underline tabs when all options must stay exposed. Variations: start with Details selected, rename the three views, or close the disclosure initially for mobile use.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
