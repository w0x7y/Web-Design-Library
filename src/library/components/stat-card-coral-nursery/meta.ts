import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-coral-nursery',
  name: 'Coral nursery propagation',
  category: 'stat-card',
  tags: ['glass', 'dark', 'has-image'],
  description: 'A photographed aquarium card for Polyp House with a frosted propagation panel, coral fragment count and transfer note. Use it in a coral nursery or aquarium husbandry dashboard.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout: 'A 288px-wide article, 352px from 640px, with a 20px radius and clipped overflow. A 192px-high coral photograph fills the top. A 20px-padded cyan-950 lower region holds a frosted panel overlapping the photo by 48px. The panel has a 48px fragment count, label and two-column husbandry data. A text link follows.',
    style: 'Manrope, cyan-950 base and white text. The frosted panel is cyan-950 at 90% with a 12px backdrop blur, a 1px white border at 30%, 12px radius and 16px padding. Muted labels use cyan-100; the brand and link use cyan-200. No shadow.',
    states: 'Transfer-log link underlines on hover and has a 2px cyan-200 outline offset 2px on focus. Photograph has descriptive alt text and intrinsic 800×600 dimensions. Count, tank location and ready-to-transfer totals are readable text. No animation.',
    responsive: 'Width grows from 288px to 352px at 640px. Photo height stays 192px with an object-cover crop. All padding, overlap and text sizes stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
