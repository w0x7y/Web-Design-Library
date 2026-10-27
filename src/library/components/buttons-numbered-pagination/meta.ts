import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-numbered-pagination',
  name: 'Buttons — Numbered pagination with ellipses',
  category: 'buttons',
  tags: ['row', 'numbers', 'compact'],
  description: 'Previous and Next links frame a row of page numbers with ellipses for skipped ranges and a filled current page; on mobile the numbers collapse to a Page 6 of 12 status. Use below a long list, search results or an archive.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│ [< Previous]  [1] ... [5] [6 *] [7] ... [12]   [Next >]  │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A nav with a 288px (w-72) root that grows to 512px (sm:w-[32rem]) spreads its three parts with justify-between and an 8px minimum gap. Previous and Next are outlined 40px-tall (h-10) rounded-md links with a 16px chevron and 4px gap. From 640px a role="list" row of 40px (size-10) square page links sits between them with 4px gaps; each ellipsis takes a 40px cell of its own.',
    hierarchy: 'Read Previous, the first page, the pages around the current one, the last page, then Next. The current page is filled neutral-900 with white text; other numbers are 14px medium tabular figures with no border. Show the first page, the last page, and one page on either side of the current page, with an ellipsis for each skipped range. Each number link is named Page N; the ellipses are hidden from assistive technology.',
    states: 'The current page carries aria-current="page", which draws its fill, so the host only moves that attribute; in forced-colors mode it uses Highlight and HighlightText. Page numbers fill neutral-100 on hover and the current page neutral-700; Previous and Next fill neutral-50. Every link shows the standard 2px neutral-900 focus outline offset 2px. On the first or last page, replace Previous or Next with a non-link span at 50% opacity.',
    responsive: 'Below 640px the page numbers are hidden and a 14px Page 6 of 12 status sits between Previous and Next in the 288px root. From 640px the root is 512px, the status is hidden and the numbered row shows.',
    usage: 'Use for content split into numbered pages where people jump ahead or back. Pick buttons-directional-links when only the neighboring item matters, or a Load more button for feeds read in order. Variations: drop the Previous and Next words for chevron-only squares, add a results count above, or show two pages on each side of the current page on wide screens.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
