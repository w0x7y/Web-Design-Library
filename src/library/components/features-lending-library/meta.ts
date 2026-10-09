import type { ComponentMeta } from '../../types'

export default {
  slug: "features-lending-library",
  name: "Lending library collection",
  category: "features",
  tags: [
    "editorial",
    "light",
    "has-image"
  ],
  description: "An independent library section pairing architectural photography with collection notes and a borrowing disclosure. Use it for cultural memberships and reading spaces.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Literata:wght@400..700"
  ],
  brief: {
    layout: "1280px container, 24px horizontal and 64px vertical padding. A heading and 4:3 architecture photograph sit beside a reading-room statement, two collection notes and a borrowing details disclosure. The columns use a 1:1.3 split with 40px gap from 1024px.",
    style: "Literata serif on sky-50 with sky-950 headings and sky-900 body. 40px heading at 1.15 line height, 24px opening statement at 1.625 line height, 20px note titles and 14px body. Sky-300 rules, 4px disclosure corners, square photo.",
    states: "Native details reveals the borrowing terms. Summary and catalogue link underline on hover and show a 2px sky-950 focus outline offset 4px. Photo has descriptive alt text and 1600 by 2133 intrinsic dimensions. No motion.",
    responsive: "Columns stack below 1024px. Collection notes form two columns at 640px and the title grows from 40px to 56px. Photo changes from 4:3 to 4:5 at 1024px; outer padding becomes 96px vertical and 32px horizontal."
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
