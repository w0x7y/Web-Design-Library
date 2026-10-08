import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-alternating',
  name: 'Alternating features',
  category: 'features',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'Three photo-and-text rows that alternate sides like a magazine spread, for a desk and room booking product: a Gloock serif headline, captioned photos in three different crops, and two hairline-ruled facts under each feature. Use it to explain a product\'s main features with photography.',
  preview: { kind: 'section' },
  fonts: ['Gloock', 'Schibsted Grotesk:wght@400..700'],
  brief: {
    layout:
      'White section with a 1280px container (24px side padding, 32px from 1024px). Header: from 1024px a 12-column grid with the h2 in columns 1–7 and, bottom-aligned in columns 9–12, a paragraph and a "Take the two-minute tour" link 20px below it. Three <article> rows follow, each a 12-column grid with 48px gaps from 1024px. Row 1: a 7-column 4:3 photo on the left, text in columns 9–12, vertically centred. Row 2: text in columns 1–4 and a 6-column 4:5 portrait photo in columns 7–12; the row aligns to the bottom and the text has 36px bottom padding, so it ends level with the photo rather than its caption. Row 3: an 8-column 16:9 photo on the left, text in columns 9–12, centred. Each photo is a <figure> with a caption 12px under it; each text block is an h3, a paragraph 20px below and a <dl> of two facts 32px below.',
    style:
      'Pure white with neutral-950 ink and no accent colour; the photos carry the colour. Gloock for the h2 (1.02 line height, -0.02em, balanced) and the h3s (1.08 line height, -0.01em, balanced); Schibsted Grotesk for everything else. Intro: 18px neutral-600. Body: 17px neutral-600 at 1.625. Captions: 13px neutral-500. Facts: 14px rows with 12px vertical padding between 1px neutral-200 rules, label neutral-500 on the left and value medium neutral-950 on the right. Photos have square corners and object-fit cover. Link: 15px semibold with a 1px neutral-950/25 underline offset 0.35em and a 16px arrow.',
    states:
      'The link\'s underline turns solid neutral-950 on hover and the arrow moves 2px right (150ms); keyboard focus shows a 2px neutral-950 outline offset 4px. Nothing else is interactive.',
    responsive:
      'Below 1024px the header stacks (24px gap) and each row stacks photo first and text second, 32px apart. Photos are 4:3 below 1024px, except the third, which turns 16:9 from 640px; the second becomes 4:5 at 1024px. h2: 44px, 60px from 640px, 72px from 1024px. h3: 30px, 36px from 640px, 40px from 1024px. Rows start 64px under the header (80px from 640px, 112px from 1024px) and sit 80px apart (128px from 1024px). Vertical padding: 80px, 112px from 640px, 128px from 1024px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
