import type { ComponentMeta } from '../../types'

export default {
  slug: "team-orchard-watch",
  name: "Orchard monitoring field files",
  category: "team",
  tags: ["brutalist", "light"],
  description: "Staggered field-file biographies for Leafsignal orchard pest monitoring, with a field scientist and crop data analyst. Use it for agricultural services and small monitoring teams.",
  preview: {"kind": "section"},
  fonts: ["IBM Plex Mono:wght@400;500;600"],
  brief: {
    layout: "1280px inner container with 24px side and 64px vertical padding. A 2px top rule anchors the introduction and operating-region note. Two team files sit below, each with a large record code, a small file stamp, name, discipline and description. A field-visit link closes the section.",
    style: "Lime-300 background and stone-950 ink. First file matches the lime ground; the second inverts to stone-950 with lime-300 text. IBM Plex Mono throughout: medium 36px heading growing to 48px, 48px record codes, 24px semibold names, uppercase 12px roles, 14px body. Files have 2px borders and 24px padding, square corners.",
    states: "The field-visit link changes to stone-950 background with lime-300 text on hover and shows a 2px currentColor focus outline offset 4px. Record codes are supplementary to full names and roles; list semantics are preserved. No motion.",
    responsive: "At 640px side padding becomes 32px and heading becomes 48px. At 768px files form two columns with 24px gap; the dark file starts 48px lower. At 1024px the header uses 1.3:1 columns and section padding becomes 96px vertically. Files stack with aligned tops on phones.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
