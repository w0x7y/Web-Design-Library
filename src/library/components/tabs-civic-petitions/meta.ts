import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-civic-petitions',
  name: 'Tabs — Civic petition index',
  category: 'tabs',
  tags: ['corporate', 'light'],
  description:
    'A Wardvoice petition index with counted status tabs, signature progress and council response notes. Use it in resident participation portals.',
  preview: { kind: 'element' },
  fonts: ['Public Sans:wght@400..700'],
  brief: {
    layout:
      'A 16px-padded, 1px-bordered card with 8px corners. A split 18px brand and ward label sit above two 44px status tabs with compact count badges. The selected petition starts 16px below, showing a reference, a 16px heading, a signature count and 6px progress bar, then a 12px explanatory note.',
    style:
      'Public Sans on white, slate-900 headings, slate-600 supporting text and blue-800 references and progress. Blue-200 frame, blue-100 count badges and progress track, and blue-900 checked tab text. Controls have 2px slate-500 bottom borders that become blue-800 when checked. Badges have 4px corners. No shadows.',
    states:
      'Native radios switch between open and adopted petitions with CSS. Hover fills blue-50; checked text and border use blue-900 and blue-800. Keyboard focus outlines each label with blue-900, 2px offset 2px. Forced colors keep radio outlines and selection underlines. Signature progress is stated in text; the bar is decorative. No motion.',
    responsive:
      '288px wide below 640px; 352px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
