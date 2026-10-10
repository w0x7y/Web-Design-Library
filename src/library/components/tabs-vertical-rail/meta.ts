import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-vertical-rail",
  name: "Tabs — Vertical rail with panel",
  category: "tabs",
  tags: ["sidebar", "icons", "compact"],
  description: "Four radio choices form a narrow icon rail beside a bordered content panel. Use when category navigation should stay beside a compact explanation and action.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Icon Overview]  │ Panel heading                     │
│ [Icon Details]   │ Two lines describing              │
│ [Icon Activity]  │ the selected category.            │
│ [Icon Settings]  │                                   │
│                  │ [Secondary action]                │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) two-column grid uses a 44px rail, flexible panel and 16px gap. At 640px it becomes 512px (sm:w-[32rem]) with a 160px rail. Four 36px-high rounded-md labels stack 4px apart with 16px stroke icons and 8px icon-to-label gaps. The panel has a 1px neutral-200 left border and 16px left padding, a 16px heading, 8px to 14px body and 24px to a 44px secondary action.",
    hierarchy: "The selected category leads into its heading, explanation and outlined next action. Category labels are one word and retain accessible names in the icon-only rail. Headings use up to 4 words, explanations up to 18 and action labels up to 3. Only the selected section is exposed.",
    states: "Overview starts checked. Hover fills a label neutral-50; checked labels use neutral-100 fill and medium neutral-900 text. A Highlight border marks selection in forced colors. Focus on the native radio outlines its label by 2px, offset 2px. Arrow keys switch categories. Secondary actions hover to neutral-50 and show the standard focus outline. No disabled choices are shown.",
    responsive: "Below 640px the 44px rail shows only centred icons, while labels are sr-only. At 640px the rail grows to 160px, labels become visible and left aligned with 12px horizontal padding. Panel content wraps inside the remaining column; actions retain their 44px height.",
    usage: "Use for a compact group of categories alongside explanatory content. Choose tabs-underline-panels when labels need equal horizontal prominence or tabs-enclosed-panel for a single framed content area. Variations: change the rail icons, place a small metadata row under the heading, or replace the next action with a text link.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
