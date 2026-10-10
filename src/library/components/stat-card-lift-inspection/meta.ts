import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-lift-inspection',
  name: 'Lift inspection coverage',
  category: 'stat-card',
  tags: ['corporate', 'dark'],
  description: 'A lift-safety card for Levelmark with inspected-asset coverage and the next inspection deadline. Use it in a building operator’s equipment compliance dashboard.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout: 'A 288px-wide article, 352px from 640px, with 20px padding and a 12px radius. A brand header sits above a flex row with a 48px inspected count, 20px denominator and two-line metric heading. A ruled two-row inspection register follows. A lime reminder footer pairs a 32px countdown with the next inspection date.',
    style: 'IBM Plex Sans on slate-950 with slate-100 text, slate-300 labels and slate-700 borders. The card has a 1px slate-700 outer border. Register status words are lime-200 with 12px decorative check marks. Reminder is lime-200 with slate-950 type, an 8px radius and 12px padding. No shadows.',
    states: 'A native upcoming-inspection disclosure below the reminder changes to lime-200 on hover and shows a 2px lime-200 focus outline offset 2px. Its extra line names the lift and scheduled engineer. Status is written as Signed, with a decorative check. No motion.',
    responsive: 'Width steps from 288px to 352px at 640px. The register and countdown retain their layout, padding and type sizes. The expanded disclosure stays inside the 384px height budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
