import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-grid',
  name: 'Testimonial grid',
  category: 'testimonials',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'A minimal masonry of seven customer quotes for a studio booking app: round avatars, the first sentence of each quote set darker so the grid can be skimmed, and one dark tile to read first. On desktop the heading sits inside the masonry. Use it for social proof on product and pricing pages.',
  preview: { kind: 'section' },
  fonts: ['Rethink Sans:wght@400..800'],
  brief: {
    layout:
      'White section with a 1280px container (24px side padding, 32px from 1024px). The content is a CSS-columns masonry with 20px column gaps. Items in order: the heading block (h2, paragraph 20px below, "Read the customer stories" link 24px below), then seven <figure> tiles, each a <blockquote> holding one paragraph and a <figcaption> 24px below with a 40px round avatar, then name and role stacked, 12px apart. Every item has break-inside: avoid and a 20px bottom margin. Between 640px and 1023px the heading block spans all columns (column-span: all, 576px max width); from 1024px it is the first item of the first column, with 16px right padding.',
    style:
      'Rethink Sans, zinc-950 text. h2: semibold, -0.03em, 1.05 line height, balanced. Intro: 18px zinc-600. Tiles: flat zinc-50, 16px radius, no border or shadow. Quotes: 15px zinc-600 at 1.625 line height; the first sentence is a <strong> in medium zinc-950. The first quote is featured on a zinc-950 tile with 18px zinc-300 text, a white first sentence and a zinc-400 role. Names: 14px semibold. Roles: 13px zinc-500. Avatars: 40px circles with object-fit cover and empty alt text, since the name sits beside them. Link: 15px semibold with a 16px arrow.',
    states:
      'The link turns zinc-600 on hover and its arrow moves 2px right (150ms); keyboard focus shows a 2px zinc-950 outline offset 4px with a 4px radius. The tiles are not interactive.',
    responsive:
      'One column below 640px, two from 640px, three from 1024px. The heading spans the columns from 640px to 1023px and joins the first column from 1024px; its bottom padding is 24px, 40px from 640px. Tile padding: 24px, 28px from 640px (featured: 32px from 640px, with 20px text). h2: 36px, 44px from 640px. Vertical padding: 80px, 96px from 640px, 112px from 1024px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
