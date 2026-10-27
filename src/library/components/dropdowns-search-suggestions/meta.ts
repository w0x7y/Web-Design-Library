import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-search-suggestions',
  name: 'Dropdowns — Search field with suggestions',
  category: 'dropdowns',
  tags: ['layered', 'list', 'icons', 'compact'],
  description: 'A search field opens a suggestion panel while it holds a query, grouping matching recent searches, suggested results with a type and detail line, and a see-all link. Use for search that previews results as people type.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Icon report                                   ]     │
│ ┌──────────────────────────────────────────────┐     │
│ │ Recent searches                              │     │
│ │ Icon [report template]                       │     │
│ │ Icon [report schedule]                       │     │
│ ├──────────────────────────────────────────────┤     │
│ │ Suggested results                            │     │
│ │ Icon tile  [Result title that matches]       │     │
│ │            Document | Edited 2 days ago      │     │
│ │ Icon tile  [Collection name]                 │     │
│ │            Folder | 18 items                 │     │
│ ├──────────────────────────────────────────────┤     │
│ │ [See all results for "report"]       Enter   │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A relative 288px (w-72) search form reserves 352px (h-[22rem]) and grows to 384px (sm:w-96) wide at 640px. A 40px field has a 16px leading search icon and 36px left padding. The full-width panel sits 8px below the field, with rounded-lg corners, a neutral-200 border, 4px padding and shadow-lg. Two 12px group headings lead two 36px recent-search rows with 16px clock icons and two result rows with 8px vertical padding, a standard 40px icon tile, a 12px gap and two text lines. Dividers separate the groups from each other and from a 36px see-all row with a right-aligned key hint.',
    hierarchy: 'Read the field and its query, then Recent searches, Suggested results and See all results. Recent rows show the typed query in neutral-600 and the completion in semibold neutral-900. Result rows show a 14px medium title of up to 5 words over a 12px neutral-500 line with the type and one detail, up to 30 characters. Long text truncates. The field has a hidden label and a hint tied by aria-describedby; each group is an h2 heading over a role=list list of links.',
    states: 'The panel shows while the field holds text and hides when it is empty, so clearing the field, including with Escape, closes it; the field starts with a query. Rows hover neutral-100 and show a 2px inset neutral-900 outline on keyboard focus; the field shows a 2px outline offset 2px. Host script filters the suggestions, hides the panel on blur and can upgrade the field to an ARIA combobox with aria-expanded and aria-activedescendant for arrow-key selection.',
    responsive: 'The form and panel grow from 288px to 384px at 640px. Rows keep their heights at both widths; titles, detail lines and the see-all label truncate instead of wrapping.',
    usage: 'Use when results are worth previewing before a full results page. Choose inputs-search-scopes for a search entry with scope filters and no floating panel, or dropdowns-filter-checkboxes to filter a list already on screen. Variations: add a third group for people, show only recent searches before typing, or replace the key hint with a result count.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
