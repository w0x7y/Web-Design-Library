import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-document-strip',
  name: 'Tabs — Document strip with close buttons',
  category: 'tabs',
  tags: ['row', 'layered', 'icons', 'compact'],
  description: 'Editor-style document tabs, each with a file icon, a name and a close button, sit on a gray strip with a New document button at the end. The selected tab joins the white document area below. Use it for apps where people keep several files, records or drafts open at once.',
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ ┌──────────────────┐                                       │
│ │ Icon Brief   [x] │ Icon Notes   [x]  Icon Plan   [x] [+] │
├─┘                  └───────────────────────────────────────┤
│ Document title                                             │
│ Edited 2 hours ago by Alex Rivera                          │
│                                                            │
│ Opening paragraph that states what the document covers.    │
│ Supporting paragraph with details and open questions.      │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) rounded-lg white frame with a 1px neutral-200 border grows to 576px (sm:w-[36rem]) at 640px and clips its corners. A neutral-100 strip holds the tabs with 8px top and side padding and 4px gaps, then a 32px New document button 4px after the last tab. Each tab is 36px high with rounded-md top corners: a 12px left inset, a 16px file icon, 8px gap, a name truncated at 112px (max-w-28) and a 24px close button. The document area below has 20px padding (24px from 640px).',
    hierarchy: 'Read the selected tab, then the document title, its edit line and the body. Tab names are the document names, up to about 16 characters before truncation. The title repeats the document name in text-lg semibold; the edit line is text-sm neutral-500 with a relative or short date and a name; body paragraphs are text-sm neutral-600, up to about 30 words each. Each tab label wraps a native radio whose aria-controls points at a section labeled by that tab. Close buttons name their document ("Close Meeting notes"), and the trailing button reads "New document".',
    states: 'The first document is selected by default. The selected tab is white and joins the document area; unselected tabs are transparent with neutral-600 text and take a neutral-200/50 fill and neutral-900 text on hover. Close buttons are neutral-500 and gain a neutral-200 fill on hover. Arrow keys move between documents. A focused tab draws a 2px neutral-900 outline inset 2px inside the tab, so the strip never clips it; close and New document buttons draw it 2px outside. When the host app closes the selected tab, it should select a neighboring tab.',
    responsive: 'Below 640px the frame is 288px wide, so only the first tab and part of the second fit: the strip scrolls sideways with its scrollbar hidden, and the New document button stays pinned after it. At 640px the frame widens to 576px and all three tabs fit with room to spare. The document area keeps one column and gains 4px of padding.',
    usage: 'Use it for editors, record viewers or support consoles where several items stay open and people close them as they finish. Choose tabs-enclosed-panel for a fixed set of views that cannot be closed, or tabs-link-overflow when the views are pages. Variations: replace the close icon with a dot for unsaved changes, pin a tab without a close button, or show a record icon per type.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
