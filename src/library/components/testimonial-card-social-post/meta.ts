import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-social-post',
  name: 'Testimonial cards — Social post',
  category: 'testimonial-card',
  tags: ["stacked","compact"],
  description: "An author-first post card with a handle, platform glyph, mention and timestamp doubles as a link to the source. Use it for public feedback whose original context matters.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ (AR)  [Alex Rivera]              Glyph       │
│       @handle                                │
│ Post about the experience, including         │
│ an @mention and a concrete benefit.          │
│ Mar 14, 9:41 AM              3 replies       │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative 288px w-72 article, 352px sm:w-[22rem] from 640px, with 24px p-6 padding, 1px border and 8px radius. Its header has a 40px avatar, flexible min-w-0 author/handle column and a fixed 20px platform glyph separated by 12px gaps. The post starts 16px below; a wrapping space-between timestamp/reply footer follows after another 16px, with 12px horizontal and 4px vertical gaps.",
    hierarchy: "The author reads first as a 14px medium underlined source link above a 12px muted handle with a 4px gap. The 14px neutral-600 post includes a neutral-900 medium mention. The timestamp and reply count are 12px neutral-500, and time has a machine-readable date/time. Slots: name up to 3 words, handle up to 16 characters, post up to 25 words, mention up to 12 characters, reply count up to 3 digits.",
    states: "The author link's absolute inset-0 after pseudo-element covers the whole relative card and has the accessible name Read Alex Rivera's original post. Hover fills the article neutral-50 with a 150ms colour transition and changes the link to neutral-600. Keyboard focus shows a 2px neutral-900 outline offset 2px on the link. There are no open, selected or disabled states.",
    responsive: "Only the root width changes at 640px. The avatar, author and platform glyph remain a single row. Post text wraps, and timestamp/reply metadata can wrap while retaining the same padding and type sizes. Unlike testimonial-card-quote-author, the author is in the header and there is no logo or divided attribution footer.",
    usage: "Use for public feedback that readers can follow to its original post. Pick testimonial-card-quote-author for a formal attributed quotation or testimonial-card-rating-review for rating and verification metadata. Variations: omit the reply count, show a relative timestamp, or replace the mention with an emphasized benefit.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

