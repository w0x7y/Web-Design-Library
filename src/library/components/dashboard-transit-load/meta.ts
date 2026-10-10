import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-transit-load',
  name: 'City transit ridership',
  category: 'dashboard',
  tags: ['minimal', 'light'],
  description:
    'A city bus-ridership dashboard with route occupancy bars, hourly boardings and a capacity note. Use it for transit planning and service monitoring.',
  preview: { kind: 'section' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      '1280px container with 16px horizontal and 40px vertical padding. Wrapping ruled header. Main content follows after 32px with 32px gaps. Three route rows use a 40px outlined route number, 16px gap and flexible occupancy track. A right ledger holds a 48px boarding count and three service facts. Bottom capacity disclosure sits after a 32px margin and 20px top padding.',
    style:
      'Space Grotesk on white with indigo-950 text, indigo-800 supporting copy and indigo-200 rules. 30px medium title, 18px section headings, 14px route names and 12px metadata. Eight-pixel indigo-100 tracks hold indigo-700 or orange-700 fills; 16px outlined circles mark the 50% reference. Route number plates have 8px corners and 2px indigo-950 borders. No shadows.',
    states:
      'Native Crosstown disclosure expands a capacity note, underlines its summary on hover and shows a 2px current-color keyboard outline offset 2px. Each route has a written occupancy percentage; track graphics are aria-hidden. No motion.',
    responsive:
      'At 640px outer horizontal padding becomes 32px. At 1024px the main layout splits flexible route rows and a 320px ledger. Below they stack; route names and percentages wrap. Flexible tracks and no minimum row widths keep the component within 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
