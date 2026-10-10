import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-featured-with-list",
  name: "Blog cards — Featured post with list",
  category: "blog-card",
  tags: ["asymmetric", "list", "media"],
  description: "A prominent featured article beside three compact article rows. Use it for an editorial section with one leading story and supporting links.",
  preview: { kind: "section" },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Section headline                      [View all posts]       │
│                                                              │
│ ┌────────────────────────┐  Category     ┌────────────┐      │
│ │         Image          │  [Headline]   │   Image    │      │
│ └────────────────────────┘  6 min read   └────────────┘      │
│ Category / Oct 10           ───────────────────────────      │
│ [Featured headline]         Category     ┌────────────┐      │
│ Three-line excerpt          [Headline]   │   Image    │      │
│ about the value and         4 min read   └────────────┘      │
│ question answered           ───────────────────────────      │
│                             Category     ┌────────────┐      │
│ (AR) Alex Rivera            [Headline]   │   Image    │      │
│                             8 min read   └────────────┘      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 1152px max-w-6xl container, 24px sides and 64px vertical padding, increasing to 96px at 640px. A heading/link header precedes the content by 32px. From 1024px the content is a 7fr/5fr grid with a 48px gap; below it the regions stack. The relative featured article has a 16:9 media placeholder, category/date row after 16px, title after 8px, excerpt after 12px and a 32px-avatar byline after 20px. The supporting role=list contains three relative flex rows with 24px vertical padding and bottom dividers, 16px gaps and 80px square thumbnails.",
    hierarchy: "Read the 30px section heading and 24px featured headline, then the excerpt and author. Supporting titles are 16px semibold; category, date and reading time are 12px muted, and excerpts are 14px. Slots: section heading up to 6 words, featured title up to 9 words, excerpt up to 24 words, author up to 3 words, supporting titles up to 8 words over two lines and categories up to 2 words.",
    states: "Every headline link has a ::after covering only its own relative article or list item. Group hover underlines that item headline. All title links and View all posts use 2px neutral-900 keyboard-focus outlines offset 2px. Media and bylines are static; no selected, open or disabled control is shown.",
    responsive: "Below 640px the header stacks; from 640px it shares a row, padding increases to 96px and section heading grows from 30px to 36px. Featured article precedes the list below 1024px. At 1024px the regions become 7/5 columns with 48px gap. Supporting rows stay text/thumbnail pairs at all widths and reflow from 320px without horizontal scrolling.",
    usage: "Use for a journal homepage or editorial section that prioritises one story. Pick blog-card-cover-stacked for a uniform article grid. Variations: show two supporting rows, use a video in the featured media slot, or put a short date in the row metadata.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

