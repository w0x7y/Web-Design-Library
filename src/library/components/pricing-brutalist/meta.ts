import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-brutalist',
  name: 'Brutalist pricing',
  category: 'pricing',
  tags: ['brutalist'],
  description:
    'Neo-brutalist pricing for a static-site host: a lemon-yellow section, an expanded black headline, and three plans that are hard-shadowed cards on phones and lock into one comparison table with a pink highlighted column from 768px. Use it for indie, developer or playful products that want a loud pricing page.',
  preview: { kind: 'section' },
  fonts: ['Archivo:wdth,wght@62..125,100..900'],
  brief: {
    layout:
      'Section with 16px side padding (24px from 640px) and a 1152px container. Header: from 1024px a 12-column grid with the h2 across 8 columns and the paragraph in the last 4, bottom-aligned, 40px apart; below that they stack 24px apart. The plans start 48px below (64px from 768px). On phones they are three stacked cards 24px apart. From 768px they become one 4-column grid: column 1 is an aria-hidden label column ("Pick one" with an arrow in the header cell, then Sites, Bandwidth / month, Build minutes, Custom domains, Password protection, Team seats and Support), and each plan column spans 8 rows with grid-template-rows: subgrid, so header cells and the seven feature rows line up across plans. A plan is a header cell (h3, blurb, then price and button pushed to the bottom with margin-top auto and at least 24px above them) and a <dl> of seven rows; the <dt> labels show on phones and are visually hidden in the table, where the label column shows them instead. The Shed plan carries a "Most picked" sticker overlapping its top edge at the right. A fine-print line follows 40px below (48px from 768px).',
    style:
      'yellow-300 background, black text, Archivo throughout. h2: weight 900, uppercase, 125% width, -0.02em, 0.92 line height. Paragraph: 18px medium, 1.375 line height. Every line is 3px solid black. Phone cards: white (Shed: pink-300), 3px border and a 6px 6px 0 black shadow. Table: white, 3px border, a 10px 10px 0 black shadow, 3px rules between columns and above every row, and the Shed column filled pink-300. Plan names: 24px, weight 900, uppercase, 125% width. Prices: 72px, weight 900, 62.5% width, 0.8 line height, -0.02em, next to a 14px bold uppercase "per month". Blurbs 14px. Row labels: 12px bold uppercase, 0.04em tracking. Values: semibold, tabular figures; an included feature is a 24px square-capped check and a missing one a 20px cross at 40% opacity, each with visually hidden "Included" or "Not included" text. Buttons: 48px tall, full width, 3px border, 14px weight-900 uppercase text tracked 0.04em, a 4px 4px 0 black shadow; white, or black with white text in the Shed column. "Pick one": weight 900 uppercase at 62.5% width with a 28px arrow. Sticker: white, 3px border, 12px weight-900 uppercase, rotated 3deg.',
    states:
      'Buttons press into their shadow on hover: they move 4px right and 4px down and the shadow drops to none (100ms transition). Keyboard focus shows a 3px black outline offset 6px, clear of the shadow.',
    responsive:
      'Below 768px: stacked cards with each row\'s label on the left and value on the right. From 768px: the subgrid table, values left-aligned, sticker 20px above the top edge instead of 16px. Cell padding is 20px (12px vertically in feature rows), 24px horizontally from 1024px. "Pick one" is 24px, 36px from 1024px. h2: 44px, 60px from 640px, 72px from 1024px. Vertical padding: 64px, 80px from 640px, 96px from 1024px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
