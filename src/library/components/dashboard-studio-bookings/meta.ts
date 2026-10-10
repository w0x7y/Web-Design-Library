import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-studio-bookings',
  name: 'Fitness studio bookings',
  category: 'dashboard',
  tags: ['glass', 'gradient', 'light', 'has-image'],
  description:
    'A fitness-studio dashboard with a mat-class photograph, upcoming sessions and an occupancy ring. Use it for a studio reception or class-booking overview.',
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      '1280px container, 16px horizontal and 40px vertical padding. A greeting and 288px-high studio photograph form the top region with 24px gaps. The greeting has a 36px heading, 14px introduction and two 30px booking facts. Below, a three-row timetable and 288px occupancy rail have 24px gaps. Rows use a 56px time column; the ring is 128px with a 9px stroke.',
    style:
      'Bricolage Grotesque with pink-950 ink and pink-800 secondary text. Oklab diagonal gradient from fuchsia-100 through rose-100 to orange-100. Photo has 32px corners and a white-at-80% caption with a white-at-80% border, 16px radius and 12px backdrop blur. Timetable and occupancy rail have 16px corners, white borders and white-at-60% fills. No shadows.',
    states:
      'Native waitlist disclosure expands its note. Summary underlines on hover and uses a 2px current-color keyboard outline offset 2px. The decorative ring is aria-hidden, while 78% and 86 of 110 places are visible text. No animation.',
    responsive:
      'At 640px outer horizontal padding grows to 32px, heading to 48px and photo height to 320px. Timetable rows add a third booking-count column. At 1024px the greeting/photo become equal columns and the timetable/occupancy split into flexible content plus 288px rail. Below they stack; booking counts sit beneath titles at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
