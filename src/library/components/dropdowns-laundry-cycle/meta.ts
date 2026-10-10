import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-laundry-cycle",
  name: "Dropdowns — Laundry cycles",
  category: "dropdowns",
  tags: ["playful", "light"],
  description: "A wash-cycle dropdown for Foldjoy laundry orders, with four radio tiles, temperature badges and fabric hints.",
  preview: {"kind": "element"},
  fonts: ["Bricolage Grotesque:wght@400;500;600;700"],
  brief: {
    layout: "A 288px card with 16px padding and 2px border. A 24px wordmark sits beside an order reference, above a pill-shaped dropdown summary. Four 12px-padded cycle tiles form a two-column grid with 8px gaps. Each tile has a native radio opposite a temperature capsule, a 14px title and 10px hint. A 12px bag note follows.",
    style: "Bricolage Grotesque, orange-50 background, orange-950 text and orange-900 borders. Outer radius 20px, tile radii 12px. Trigger is orange-900 with white text and 16px horizontal/8px vertical padding. Tiles are white, selected tile orange-200. Temperature pills are orange-100. Radios use orange-900 accent.",
    states: "Everyday starts checked. Native radios change the highlighted tile and support arrow keys. Each option associates its name and fabric hint via ARIA; tile colour supplements the native checked indicator. All controls show a 2px focus-visible outline offset 2px, including in forced-colors mode. The summary uses orange-900 so its outline contrasts with the pale surrounding panel; radios use their current colour. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.",
    responsive: "Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
