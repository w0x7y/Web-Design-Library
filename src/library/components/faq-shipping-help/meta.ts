import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-shipping-help',
  name: 'Shipping help FAQ',
  category: 'faq',
  tags: ['corporate', 'light'],
  description:
    'A customer support section with delivery disclosures and a compact contact card. Use it for small ecommerce stores.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px grid uses 24px side and 80px vertical padding with a 40px gap. Introduction contains a label, h2 and paragraph each separated by 20px, then a support card after 28px. The card has 20px padding, heading, office hours after 8px, and contact action after 16px. Four native disclosures are 12px apart; each summary has 20px padding and a 20px gap beside the top-aligned plus. Answers have 20px side and bottom padding.',
    style:
      'Slate-50 canvas, slate-950 ink, slate-600 body copy, blue-700 eyebrow and support action. The 36px semibold h2 has 1.25 line height and -0.025em tracking. Eyebrow is 12px semibold uppercase with 0.1em tracking. White disclosure panels and support card have 12px radii, with 1px blue-200 and slate-200 borders respectively. Summaries are 16px medium; answers are 14px with 1.625 line height. Contact text is 14px semibold with a 16px arrow.',
    states:
      'The first details starts open. Shared details names allow one open answer at a time where supported; decorative monospace plus signs rotate 45 degrees when open. Summaries turn blue-700 on hover and the support link gains an underline. Both have 2px zinc-950 focus outlines offset 2px, including in forced colors. No transitions.',
    responsive:
      'Below 1024px the introduction and support card precede the disclosure list. From 1024px the grid uses 1fr and 2fr columns with a 64px gap. Summaries wrap beside nonshrinking plus signs; title remains 36px and container padding stays 24px horizontally and 80px vertically.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
