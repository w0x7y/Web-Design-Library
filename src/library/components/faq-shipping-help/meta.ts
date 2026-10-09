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
      'A 1152px layout pairs a heading and contact card on the left with four delivery disclosures on the right. Each disclosure is a separate white rounded panel; the first begins open.',
    style:
      'Slate-50 background, slate-950 type, blue-700 support action and blue-200 panel borders. Heading is 36px, summaries are 16px medium and answer text is 14px. Panels use 12px radii and 20px padding.',
    states:
      'Native details elements reveal answers without JavaScript; the shared name allows one answer open at a time where supported. Plus signs rotate 45 degrees when open. Summaries and support link show 2px keyboard-focus outlines. No transitions.',
    responsive:
      'Columns start at 1024px with a one-third introduction and two-thirds disclosures. Below that the contact card precedes the disclosure list. Summary labels wrap next to a shrink-free plus sign.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
