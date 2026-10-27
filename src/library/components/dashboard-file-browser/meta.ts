import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-file-browser',
  name: 'Dashboard — File browser with folder tree',
  category: 'dashboard',
  tags: ['sidebar', 'table', 'icons'],
  description: 'A collapsible folder tree sits beside a breadcrumb, a search field and a file table with type glyphs, modified dates and sizes. Use it for a document library or any view where people browse nested folders.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Files                                  [New folder] [Upload]  │
│┌──────────────┬─────────────────────────────────────────────┐│
││> Documents   │ All files > Projects > Reports   [Search  ] ││
││v Projects    ├─────────────────────────────────────────────┤│
││    Assets    │ Name                       Modified     Size││
││    Reports   ├─────────────────────────────────────────────┤│
││    Templates │ (F) Drafts                 Oct 24    6 items││
││> Shared      │ (F) Exports                Oct 20   12 items││
││  Archive     │ (D) Quarterly summary.pdf  Oct 25     2.4 MB││
││ ───────────  │ (S) Budget forecast.xlsx   Oct 23     186 KB││
││ Storage      │ (D) Meeting notes.docx     Oct 22      48 KB││
││ ===-------   │ (I) Cover image.png        Oct 18     3.1 MB││
││ 12.4 of 50 GB│ (Z) Source files.zip       Oct 12    24.8 MB││
│└──────────────┴─────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'White section with a 1152px max-w-6xl container, 24px side padding (px-6) and 64px vertical padding (py-16), 96px from 640px (sm:py-24). A wrapping header puts the h1 opposite New folder (secondary) and Upload (primary), 12px apart. 32px below (mt-8), one rounded-lg neutral-200 bordered panel holds a 16rem folder sidebar and a flexible content pane from 1024px, split by a 1px border. The sidebar (p-4) stacks 36px tree rows 4px apart, each with a chevron, a folder glyph and the name 8px apart; child folders indent 24px (pl-6). A storage meter (6px track, 25% fill) closes the sidebar below a divider. The content pane starts with a toolbar row (p-4, px-6 from 640px) holding the breadcrumb and a 16rem search field, then a full-width table: Name with a 40px icon tile, Modified, and a right-aligned Size, with 12px vertical cell padding and neutral-200 row dividers.',
    hierarchy: 'Read the page title, the breadcrumb that names the current folder, then the file rows. The current folder appears in the tree with a neutral-100 fill and medium weight, and as the last breadcrumb item with aria-current. Folders list first and show an item count in the Size column. Files follow, each with a type glyph (document, spreadsheet, image, archive), the full name with its extension, a date and a size in KB or MB. File names up to 40 characters wrap; folder names stay under 3 words.',
    states: 'Folders with children are native details elements: the chevron rotates 90 degrees when open, and the branch holding the current folder starts open. Tree rows fill neutral-100 on hover, table rows neutral-50, breadcrumb links darken to neutral-900, and the buttons use the standard hover fills. Every link, summary, button and the search field shows a 2px neutral-900 focus-visible outline offset 2px. The file name is the link that opens a file or folder; there are no selection checkboxes.',
    responsive: 'Below 1024px the sidebar sits above the content pane with a bottom border instead of a side border, and its folders stay collapsible so the tree stays short. Below 640px the toolbar stacks the breadcrumb over a full-width search field, the Modified column hides and each date moves under its file name, and table cells use 16px side padding. File names wrap instead of truncating, so the table fits at 320px.',
    usage: 'Use for a document library, an asset manager or a shared drive inside an app. Pick dashboard-sidebar-shell when the sidebar holds app navigation rather than a folder hierarchy, and data-table-row-selection when people act on many rows at once. Variations: swap the table for a grid of file cards, add a row actions menu to each file, or replace the storage meter with recent locations.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
