import type { ComponentMeta } from '../../types'

export default {
  slug: "settings-locale-panel",
  name: "Settings — Locale choices with format examples",
  category: "settings",
  tags: [
    "split",
    "form",
    "compact"
  ],
  description: "Language, timezone and clock choices are paired with a static formatting example. Use to explain the visible effect of regional preferences.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Language and region                                           │
│Language                          Format examples             │
│[Language option           v]     Date     11 Oct 2026        │
│Language hint                     Time     09:41              │
│Time zone                         Number   1,234.56           │
│[Time zone option          v]                                 │
│( ) 12-hour  (o) 24-hour                                      │
│[Save regional preferences]                                   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Two equal columns at md use 40px gaps. The form spaces fields by 24px and arranges clock radios in a wrapping 24px-gap row. The p-6 example card uses three divided definition rows with 16px vertical padding.",
    hierarchy: "The h1 leads to regional selects and clock choice; the examples explain the resulting format. Heading up to 5 words, lede 16, field hints 9 and example note 10. Values are generic dates, time and a decimal number.",
    states: "Native selects and radio buttons provide keyboard selection and visible 2px focus outlines. The format card is illustrative and static. Saving and updating its examples require host application integration.",
    responsive: "Below 768px examples follow the preferences. Radio options wrap at narrow widths. Selects occupy their column without fixed widths; the h1 grows at sm.",
    usage: "Use for preferences whose effect is easier to understand with sample values. Choose settings-described-rows for independent switches. Variations: add a first-weekday choice, show a currency example, or offer a date-order radio group."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
