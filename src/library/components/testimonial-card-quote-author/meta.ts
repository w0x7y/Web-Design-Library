import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-quote-author',
  name: 'Testimonial cards — Quote with author footer',
  category: 'testimonial-card',
  tags: ["stacked","spacious"],
  description: "A logo leads a left-aligned quote, followed by an author and avatar under a divider. Use it for a standalone recommendation with clear company attribution.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Logo                                         │
│ Quote that describes the experience          │
│ and the benefit in the author words.         │
│ ────────────────────────────────────────     │
│ (AR)  Alex Rivera                            │
│       Role, Company                          │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px w-72 figure with 24px p-6 padding, a 1px neutral-200 border and an 8px rounded-lg radius. At 640px it becomes 352px sm:w-[22rem] with 32px sm:p-8 padding. A 24px logo glyph and label share an 8px-gap row. The quote starts 20px below. A figcaption follows with a 24px top margin, hairline, 20px top padding and 12px gap between a 40px avatar and the author column.",
    hierarchy: "Read the left-aligned quote at 16px, stepping to 18px from 640px, in neutral-600 with pretty wrapping. The logo is 16px semibold, the author 14px semibold, and role/company 12px neutral-500 with a 4px gap. The decorative avatar shows initials beside the visible name. Slots: quote up to 25 words, name up to 3, role/company up to 4, logo label up to 2.",
    states: "The figure, logo and attribution are static, with no controls and no hover, focus, open, selected or disabled states. The decorative logo glyph and avatar are aria-hidden; the blockquote and figcaption preserve quotation semantics.",
    responsive: "The figure remains one column at every width. At 640px its width grows from 288px to 352px, padding from 24px to 32px, and quote text from 16px to 18px. The avatar and author stay in one row.",
    usage: "Use for a standalone attributed recommendation with a company logo. Pick testimonial-card-centered-quote for a short statement centred on every line, or testimonial-card-social-post for author-first social attribution and a source link. Variations: omit the company from the byline, use a shorter quote, or swap initials for the host project's author image.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

