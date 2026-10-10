import type { ComponentMeta } from "../../types";

export default {
  slug: 'product-card-caption-credits',
  name: 'Captioning credit pack',
  category: 'product-card',
  tags: ['corporate', 'dark'],
  description:
    'A prepaid captioning card with a minutes allowance, export formats and a clear one-time price. Use it in accessibility service marketplaces.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      'A 288px card, 352px from 640px, with 20px padding and 12px corners. Header contains brand and a prepaid badge. The main 20px-gap flex row has a 56px minutes count opposite a stacked format list. Product heading and explanation lead to a bordered footer with price and a 40px action.',
    style:
      'IBM Plex Sans, slate-950 background, slate-100 primary text and slate-300 body text. Cyan-200 highlights the allowance and CTA. A slate-600 border frames the card and separates the footer. The heading is 20px semibold, copy 12px at 20px leading, and the price 24px.',
    states:
      'The buy-credits link changes from cyan-200 to cyan-100 on hover, with a 2px cyan-200 focus outline offset 2px. Format text and the minutes unit remain visible labels. No motion.',
    responsive:
      'Root grows from 288px to 352px at 640px. The allowance and format list remain side by side; the footer retains price on the left and action on the right.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
