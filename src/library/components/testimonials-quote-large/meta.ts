import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-quote-large',
  name: 'Large quote',
  category: 'testimonials',
  tags: ['editorial', 'dark'],
  description:
    'A single oversized pull quote in Bodoni Moda on an oxblood field, with an italic phrase for emphasis, a hanging quotation mark, and an attribution row that links to the case study. Use it to give one strong customer quote the full width of the page.',
  preview: { kind: 'section' },
  fonts: ['Bodoni Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900'],
  brief: {
    layout:
      'Section with a 1152px container (24px side padding, 40px from 640px, 32px from 1024px). A <figure> holds a decorative quotation mark (aria-hidden), the <blockquote> and a <figcaption>. Below 1024px the mark sits above the quote in a box cut to 64px tall (80px from 640px), so the quote starts just under the glyph. From 1024px the figure has 128px left padding and the mark is absolutely positioned in that margin, 16px above the top of the quote. The figcaption sits 48px under the quote (64px from 1024px), with a 1px top rule and 24px top padding: name and role on the left, the link on the right, bottom-aligned.',
    style:
      'red-950 background, red-50 text, Bodoni Moda throughout (the optical size follows the font size, so the large quote gets hairline contrast). Quote: regular weight, -0.015em tracking, text-wrap pretty; the phrase "arguing about commas" is an <em> in italic red-200. Quotation mark: a Bodoni left double quote in red-400 with line height 1. Rule: red-50 at 20%. Name: 20px medium. Role: 15px red-200. Link: 15px medium with a 1px red-50/40 underline offset 0.3em and a 16px thin-stroke arrow.',
    states:
      'The link\'s underline turns solid red-50 on hover and the arrow moves 2px right (150ms); keyboard focus shows a 2px red-50 outline offset 4px.',
    responsive:
      'Quote: 32px at 1.12 line height, 48px at 1.08 from 640px, 64px from 1024px. Quotation mark: 128px, 160px from 640px, 208px from 1024px. The caption stacks (24px gap) below 640px and becomes a row from 640px. Vertical padding: 96px, 128px from 640px, 160px from 1024px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
