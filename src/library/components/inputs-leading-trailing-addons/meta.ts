import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-leading-trailing-addons",
  name: "Inputs — Leading and trailing addons",
  category: "inputs",
  tags: ["stacked", "form", "icons", "compact"],
  description: "Four labelled fields show attached text, a currency pair, an inset icon and a trailing action. Use when a field needs context inside its boundary.",
  preview: { kind: 'element' },
  wireframe: `┌─────────────────────────────────────────────┐
│ Website                                     │
│ ┌─────────┬───────────────────────────────┐ │
│ │ https://│ Enter domain                  │ │
│ └─────────┴───────────────────────────────┘ │
│ Amount                                      │
│ ┌─────────────────────────────────────────┐ │
│ │ $  0.00                             USD │ │
│ └─────────────────────────────────────────┘ │
│ Email                                       │
│ ┌─────────────────────────────────────────┐ │
│ │ Mail icon   name@example.com            │ │
│ └─────────────────────────────────────────┘ │
│ Reference                                   │
│ ┌──────────────────────────────┬──────────┐ │
│ │ AC-1042                      │ [Copy]   │ │
│ └──────────────────────────────┴──────────┘ │
└─────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) column, 320px (sm:w-80) from 640px, with 16px gaps between four fields. Labels are 14px medium with 6px bottom spacing. Each 40px wrapper carries a 1px neutral-300 border and 6px radius. The URL prefix is a neutral-50 segment with a right divider; currency prefix and suffix flank a flexible min-w-0 input. Mail and copy icons are 16px. The attached Copy button shares the boundary and has a left divider.",
    hierarchy: "Labels precede the four examples: Website, Amount, Email and Reference. Prefix and suffix clarify format; Copy is the only action. Label slots up to 2 words, domain placeholder up to 3, currency suffix up to 3 characters, reference value up to 12 characters. Screen-reader hints explain each field; USD is also linked as a description.",
    states: "An input keyboard focus draws a 2px neutral-900 wrapper outline offset 2px through has-[input:focus-visible]. Inputs use focus-visible:outline-hidden; the twin restores a transparent 2px focus outline under forced colours. Copy has its own outline and neutral-50 hover fill. Placeholders are neutral-500. Copy is a static action slot for host behaviour.",
    responsive: "Only the root width changes at 640px, from 288px to 320px. Inputs flex and keep min-w-0; addon segments and icons keep their widths. The four groups remain stacked at every viewport.",
    usage: "Use for URL prefixes, units, icon hints and attached field actions. Pick inputs-field-anatomy for fields whose messages matter more than addons. Variations: change currency to a measurement unit, use a phone prefix segment, or replace Copy with a reveal action.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
