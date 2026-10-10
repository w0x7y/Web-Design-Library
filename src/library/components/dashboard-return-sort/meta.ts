import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-return-sort',
  name: 'Returns sorting desk',
  category: 'dashboard',
  tags: ['playful', 'light'],
  description:
    'An e-commerce returns dashboard with a large received count, reason breakdown and three disposition bins. Use it in reverse-logistics and retail warehouse tools.',
  preview: { kind: 'section' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      '1280px container with 16px horizontal and 40px vertical padding. Brand/date header then a 32px-gapped split dashboard after 32px. The left side has a 30px title, 96px return count, 384px-wide body and two 16px-padded reason cells. The right has three 20px-padded bins with 48px parcel drawings, descriptions and 30px quantities. A review disclosure follows a top rule after 32px.',
    style:
      'Familjen Grotesk on rose-50 with rose-950 ink and rose-800 body copy. White reason cells use 16px radii and rose-200 borders. The disposition bins have 24px radii and 2px rose-950 borders; Restock is green-200, Review pink-200, Recover white. The large count has -0.07em tracking. No shadows or motion.',
    states:
      'Native disclosure reveals the oldest review parcel. Its summary underlines on hover and shows a 2px current-color outline offset 2px on keyboard focus. Parcel SVGs are decorative; all dispositions and quantities are named in text.',
    responsive:
      'At 640px outer horizontal padding grows to 32px. At 1024px the main layout becomes 0.85fr/1.15fr; below it stacks. Reason cells always use two columns. At widths below 640px, bins use a 32px icon column, 12px gaps and 16px padding; SVGs shrink to 32px so quantities fit at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
