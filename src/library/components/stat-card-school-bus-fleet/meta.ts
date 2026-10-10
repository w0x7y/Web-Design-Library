import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-school-bus-fleet',
  name: 'School-bus fleet readiness',
  category: 'stat-card',
  tags: ['corporate', 'dark'],
  description:
    'A fleet check card for Route Nest school-bus operators, with checked-bus coverage and the next depot appointment. Use it in pupil transport operations dashboards.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      'A 288px article, 352px from 640px, with 20px padding and a 12px radius. A brand/depot header precedes a flex metric row after 20px with a 16px gap, 48px count, 20px denominator and two-line heading. A two-row register follows after 20px with a top rule and 12px top padding. A countdown strip after 16px pairs a 32px day count with a dated depot check. A native disclosure follows after 16px.',
    style:
      'IBM Plex Sans on slate-950 with slate-100 text, slate-300 labels and 1px slate-700 borders. Count is semibold with tight tracking and tabular figures. Register uses 12px/16px text with lime-200 checked labels and decorative check marks. Reminder has lime-200 fill, slate-950 text, 8px radius and 12px padding; its date is 10px/16px. No shadow.',
    states:
      'The 12px native depot-check summary becomes lime-200 on hover-capable devices and shows a 2px lime-200 focus outline offset 2px, including forced colors. The extra 10px line names the bus, technician and time. Checked status is written in text; check marks are aria-hidden. No animation.',
    responsive:
      'Width steps from 288px to 352px at 640px. Register, countdown, type and padding retain their arrangement. The expanded disclosure stays inside the 384px height budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
