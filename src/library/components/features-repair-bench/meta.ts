import type { ComponentMeta } from '../../types'

export default {
  slug: "features-repair-bench",
  name: "Repair bench capabilities",
  category: "features",
  tags: [
    "brutalist",
    "light"
  ],
  description: "An appliance workshop section with a bold repair promise and native disclosures for three repair categories. Use it to show service scope without a long FAQ.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Space Grotesk:wght@400..700"
  ],
  brief: {
    layout: "1280px container, 24px horizontal and 64px vertical padding. A 40px headline sits over a 2px black-framed workshop panel. The dark promise panel has a 64px number and a stamped label; the service panel has three native details disclosures, the first open.",
    style: "Space Grotesk, yellow-300 background and neutral-950 text. The promise panel inverts those colours. Square corners, 2px rules, bold 20px summaries and neutral-800 14px body copy. The 64px number grows to 96px at 640px.",
    states: "Native details expand on click or Enter/Space and retain their disclosure markers. Summary and booking link underline on hover and have 2px neutral-950 outlines offset 4px on keyboard focus. No animation.",
    responsive: "Panel sections stack below 1024px and use a 1:1.2 split above. Title grows from 40px to 72px at 640px; panel padding grows from 24px to 32px. Footer wraps. Outer padding grows to 96px vertical and 32px horizontal at 1024px."
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
