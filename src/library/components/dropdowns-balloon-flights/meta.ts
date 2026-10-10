import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-balloon-flights",
  name: "Dropdowns — Balloon departures",
  category: "dropdowns",
  tags: ["glass", "gradient", "light", "has-image"],
  description: "A photo-led launch-site dropdown for Aloft Vale balloon flights, with departure times and passenger availability.",
  preview: {"kind": "element"},
  fonts: ["Manrope:wght@400;500;600;700"],
  brief: {
    layout: "A 288px-wide rounded panel with 16px padding. A brand strip sits above an 80px-high full-width balloon photograph. A translucent 12px-padded details panel contains a 14px launch-field summary, two stacked site links with 8px gaps and a weather-confirmation note.",
    style: "Manrope, sky-950 text over a sky-100 to amber-100 diagonal oklab gradient. Outer radius 24px; photo and frosted panel radii 12px. Glass uses white at 60%, 1px white border and 24px backdrop blur. Site links use 8px radii, white at 50%, sky-800 borders at 30%, 12px labels and 10px sky-800 hints. Balloon image is cropped to center 42%.",
    states: "Site links fill opaque white on hover and navigate to host booking anchors. The native disclosure begins open. Departure availability is stated in words. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.",
    responsive: "Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
