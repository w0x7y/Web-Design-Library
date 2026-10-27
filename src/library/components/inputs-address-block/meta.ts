import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-address-block',
  name: 'Inputs — Address block with country first',
  category: 'inputs',
  tags: ['stacked', 'grid', 'form', 'compact'],
  description: 'A postal address fieldset starts with a country select, stacks two street lines under one label, then places city, region and postal code in a responsive row. Use for shipping, billing or account addresses.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│ Country or region                                        │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Select a country                                   v │ │
│ └──────────────────────────────────────────────────────┘ │
│ Street address                                           │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ House number and street                              │ │
│ └──────────────────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Apartment, suite or unit (optional)                  │ │
│ └──────────────────────────────────────────────────────┘ │
│ City               Region             Postal code        │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ │
│ │ City or town   │ │ State/province │ │ 00000          │ │
│ └────────────────┘ └────────────────┘ └────────────────┘ │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) fieldset grows to 448px (sm:w-[28rem]) at 640px. It has a screen-reader legend and three groups spaced 16px apart. Labels are 14px medium with 6px bottom spacing; controls are 40px high with 12px side padding and 6px radii. The country select uses appearance-none, 40px right padding and a 16px chevron 12px from the top and right. Street address holds two inputs 8px apart. The last group is a grid-cols-[1fr_7rem] grid with a 12px column gap and 16px row gap, where City spans both columns above a flexible Region and a 112px Postal code.',
    hierarchy: 'Country or region comes first because it decides the format of the rest, then Street address, the optional second line, City, Region and Postal code. Autocomplete tokens are country, address-line1, address-line2, address-level2, address-level1 and postal-code. The second street line has no visible label; its aria-label and placeholder both say it is optional. Keep labels to 1 to 3 words and placeholders under 6.',
    states: 'Controls change their neutral-300 borders to neutral-400 on hover and show the standard 2px neutral-900 focus-visible outline offset 2px. The select starts on a disabled Select a country prompt and opens natively; its chevron is pointer-events-none and aria-hidden. Placeholders are neutral-500. Relabeling fields for each country, address lookup and validation belong to the host.',
    responsive: 'Below 640px City takes a full row, and Region (164px) and Postal code (112px) share the next row. From 640px the root is 448px wide and City, Region and Postal code sit in three equal 141px columns. Country and both street lines stay full width.',
    usage: 'Use for shipping, billing or account addresses. Pick inputs-field-grid for a short contact block that mixes a name, city and phone. Variations: replace Region with a select of states or provinces, add a full-name row above the country, or add a delivery phone field after the postal code.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
