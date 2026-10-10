import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-pantry-allocation',
  name: 'Food bank allocation board',
  category: 'dashboard',
  tags: ['playful', 'light'],
  description:
    'A food-bank dashboard with an illustrated stock shelf, household-parcel allocations and volunteer shift details. Use it for community distribution coordination.',
  preview: { kind: 'section' },
  fonts: ['Young Serif'],
  brief: {
    layout:
      '1280px inner width, 16px horizontal and 40px vertical padding. Wrapping title/date header followed by two panels after 32px with 24px gaps. Stock panel has a 480:160 shelf SVG and three inventory facts. Allocation panel has a 48px packed-parcel fraction and two collection rows. A volunteer shift and native packing checklist sit in a 20px-padded footer.',
    style:
      'Yellow-50 canvas with green-950 ink. Young Serif for the 30px heading and 48px fraction; default sans for 18px panel headings, 14px body and 12px labels. Green-100 stock panel and white allocation panel have 32px corners, 2px green-950 borders and 20px padding. Yellow-300 date pill, yellow-100 collection rows with 12px corners and yellow-200 footer. Shelf SVG uses green-900 strokes, yellow-300 crate, white sack and green-300 tins. No shadows.',
    states:
      'The native packing-checklist disclosure expands guidance. Summary underlines on hover and uses a 2px current-color focus outline offset 2px. The shelf artwork is aria-hidden and all inventory quantities are visible text. No motion.',
    responsive:
      'At 640px outer horizontal padding grows to 32px, panel padding to 28px and heading to 36px. At 1024px stock and allocations split 1.2fr/1fr. Below they stack; stock facts stay in three columns and footer wraps without horizontal scrolling at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
