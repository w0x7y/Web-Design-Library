import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-columns',
  name: 'Column footer',
  category: 'footer',
  tags: ['corporate', 'light'],
  description:
    'A corporate site footer for a field-service software company. The left column has the logo, a one-line description, a sales phone line and a live status link. The right side has four labelled link groups (Product, Industries, Resources and Company, with an open-roles badge). A bottom bar carries the copyright and offices, legal links and a region switcher. Use it on B2B and SaaS marketing sites.',
  preview: { kind: 'section' },
  fonts: ['Atkinson Hyperlegible Next:wght@200..800'],
  brief: {
    layout:
      '<footer> with a 1280px container and 24px side padding (32px from 1024px). Main area: 64px vertical padding (80px from 1024px) and 56px between the brand block and the link groups when stacked; from 1024px a 12-column grid with 32px gaps puts the brand block in columns 1–4 and the link groups in columns 5–12. Brand block: the logo link (36px orange mark and wordmark, 10px gap), a blurb 20px below (max 320px), then, 32px down, a <dl> "Talk to sales" with the phone link 6px below and the hours 2px below that, and a status pill 32px further down. Between 768px and 1023px the brand block splits into two columns (32px gap): logo and blurb on the left, sales and status on the right. Link groups: four <nav aria-labelledby> elements, each an h2 and a <ul> 16px below with items 12px apart, in a 2-column grid (32px column gap, 48px row gap). The Careers item is a wrapping flex row with a "12 open roles" badge 8px after the link. Bottom bar: a 1px top border, 32px vertical padding, and items stacked 24px apart; from 1024px it is one row with 40px gaps, the legal nav pushed right with margin-left auto, and the region link last.',
    style:
      'slate-50 background with a 1px slate-200 top border, slate-950 text, Atkinson Hyperlegible Next throughout. Mark: 36px with an 8px radius, orange-600, holding a white 20px map-pin-and-check icon (2px stroke). Wordmark: 20px bold, −0.01em tracking. Blurb: 15px slate-600, 1.625 line height. "Talk to sales": 14px bold; the phone number is 18px bold with tabular figures; the hours are 14px slate-600. Status pill: white with a 1px slate-200 border, fully rounded, 14px medium slate-700 text, and an 8px emerald-500 dot inside a 4px emerald-500/15 ring. Group headings: 14px bold. Links: 15px slate-600. Badge: orange-100 background, 12px bold orange-800 text, fully rounded, 2px × 8px padding. Bottom bar: 14px slate-600. The region link is medium slate-950 with a 16px globe icon (1.25px stroke) and a visually hidden "Region:" prefix.',
    states:
      'On hover, links turn slate-950 and underline (offset 4px) with 150ms colour transitions, the phone and region links underline, and the status pill\'s border turns slate-400 and its text slate-950. On keyboard focus every link shows a 2px orange-700 outline, offset 2px (4px on the logo), following the link\'s radius (4px, 6px on the logo, fully round on the pill). Hover rules apply only on devices that support hover.',
    responsive:
      'Below 768px the brand block is stacked, the link groups sit two across, and the bottom bar is stacked. From 768px the brand block splits into two columns and the link groups sit four across. From 1024px the brand column (stacked again) sits beside the link groups in a 4 + 8 split, and the bottom bar becomes one row. At 1024px the side padding grows from 24px to 32px and the main vertical padding from 64px to 80px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
