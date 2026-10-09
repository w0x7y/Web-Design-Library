import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-membership-pass',
  name: 'Membership pass pricing',
  category: 'pricing',
  tags: ['editorial', 'light'],
  description:
    'A single membership offer with a benefit list and a ticket-like price panel. Use it for reading clubs, cultural memberships and small subscription products.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px maximum-width grid with 24px side and 80px vertical padding and 48px gaps. Introduction has an eyebrow, h2 20px below, max-width 448px paragraph 20px later and a five-item benefits list 32px later with 16px between items. Benefit rows have 20px checks and 12px gaps. The white membership pass contains an inclusive badge, annual label 32px below it, 60px price 8px later, monthly equivalent 12px below, an action region with 32px top margin and 24px top padding, a renewal note 16px below the action and member count with 28px margin and 20px top padding.',
    style:
      'Amber-50 canvas, emerald-950 default sans ink, emerald-900 body and emerald-700 checks. Intro serif heading is 36px with 1.25 line height; eyebrow is 12px semibold uppercase emerald-700 with 0.1em tracking. Body is 16px with 1.625 line height; benefits and billing labels are 14px. Pass has a 1px stone-200 border, 16px radius and 24px padding. Badge is inline-flex with maximum width 100%, emerald-50 fill, emerald-800 12px semibold text, full radius and 12px horizontal/4px vertical padding. Price is 60px semibold with line height 1 and -0.025em tracking; period is 16px normal, normal tracking, 8px left margin. Action divider is dashed stone-300; member divider solid stone-200. Button is emerald-950/white, minimum 48px tall, 8px radius and 20px side padding, with a 20px arrow separated by 12px. Notes are centered 12px emerald-900.',
    states:
      'Take a seat is the only control. It fills emerald-900 on hover-capable devices and shows a 2px zinc-950 outline offset 2px on keyboard focus, including forced-colors mode. Lists retain role=list and checks/arrow are aria-hidden. No motion or transitions.',
    responsive:
      'Intro and pass stack below 1024px. At 1024px they form 1.2:1 columns with centered vertical alignment and a 48px gap. Heading changes from 36px to 48px at 640px, retaining 1.25 line height. Pass padding grows from 24px to 32px at 640px. Badge text wraps inside the pill at narrow widths rather than fragmenting its background. Benefits wrap beside fixed 20px icons.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
