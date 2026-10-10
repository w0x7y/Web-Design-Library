import type { ComponentMeta } from '../../types'

export default {
  slug: "features-sidebar-list",
  name: "Features — Intro beside numbered list",
  category: "features",
  tags: ["asymmetric", "list", "numbers"],
  description: "A sticky introduction sits beside four numbered explanation rows. Use it for a longer sequence whose context should stay visible while readers scan the list.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Eyebrow                 ┌─────────────────────────────┐    │
│ Heading for the process │ 01  First stage title       │    │
│ Short introduction      │     Body / Deliverables     │    │
│ [Explore the process]   ├─────────────────────────────┤    │
│                         │ 02  Next stage title        │    │
│                         │     Body / Deliverables     │    │
│                         ├─────────────────────────────┤    │
│                         │ 03  Supporting stage title  │    │
│                         │     Body / Deliverables     │    │
│                         ├─────────────────────────────┤    │
│                         │ 04  Final stage title       │    │
│                         │     Body / Deliverables     │    │
│                         └─────────────────────────────┘    │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. At 1024px a grid-cols-[1fr_2fr] intro/list split uses an 80px gap-20. The intro is lg:sticky top-8, self-start, with a max-w-sm 384px lede and a link 32px below. Four ol rows use 1px top dividers, 32px py-8 and a 32px number column with a 24px gap. The final row also has a bottom border. Each text block has a 24px title, a max-w-xl 576px body 12px below and meta 16px later.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the intro and then mono 01-04 numbers alongside 24px semibold stage titles, 16px neutral-600 bodies and 14px neutral-500 deliverables. Slots: eyebrow 4 words, heading 8, lede 24, title 7, body 35, deliverables 10, link 3.",
    states: "Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. The intro sticks 32px from the top from 1024px while its grid area remains in view. Rows are static, with no selected, disabled or loading states.",
    responsive: "Below 1024px the intro sits above the list with a 48px gap and has no sticky positioning. At 1024px the 1:2 layout and 80px gap apply. The number column remains 32px wide and rows keep 24px content gaps at every width. Type and padding step at 640px.",
    usage: "Use for longer numbered stages or a service outline. Choose features-numbered-steps for short equal stages. Variations: use capability numbers rather than stages, remove deliverable lines, or add a short link to each row.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
