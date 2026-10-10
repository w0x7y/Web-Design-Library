import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-shoot-day',
  name: 'Film production call sheet',
  category: 'dashboard',
  tags: ['editorial', 'light'],
  description:
    'An editorial film-production dashboard with a large shoot-day index, scene order and location access note. Use it for a production office or digital call sheet.',
  preview: { kind: 'section' },
  fonts: ['Instrument Serif', 'DM Mono:wght@400;500'],
  brief: {
    layout:
      '1280px content width with 16px horizontal and 40px vertical padding. A 2px ruled masthead precedes a 32px-gapped body after 24px. A 288px shoot-day rail has a 128px day number, 36px film title and location facts. The scene list has four ruled rows with 56px time columns, flexible scene titles and statuses, using 20px vertical row padding.',
    style:
      'Stone-100 paper and stone-950 ink. Instrument Serif for the day number, film title and 24px scene headings; DM Mono for 12px masthead and time labels and 10px tracked status text. Default sans for supporting details. Stone-400 hairlines, red-800 active status and access-note left rule. Square edges and no shadows.',
    states:
      'Native access-note details expands its paragraph. Summary underlines on hover and shows a 2px current-color focus outline offset 2px. Scene statuses are explicit text; the call sheet is static and has no motion.',
    responsive:
      'At 640px outer padding grows to 32px and each scene row adds a third status column. At 1024px the body splits into a 288px day rail and flexible shooting order. Below it stacks; statuses sit beneath scene titles on phones and all text wraps at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
