import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-kite-configurator",
  name: "Dropdowns — Kite fabrics",
  category: "dropdowns",
  tags: ["playful", "gradient", "dark"],
  description: "A canopy-fabric dropdown for Windpatch kites, with illustrated colour swatches, native radio choices and a wing-span select.",
  preview: {"kind": "element"},
  fonts: ["Syne:wght@400;500;600;700"],
  brief: {
    layout: "A 288px panel with 20px padding. A brand strip sits above a 20px ruled summary. Three fabric labels are arranged in equal columns, each with a 40x48px kite SVG and a labelled native radio below, 8px apart. A wing-span select occupies a separate horizontal row, followed by a fabric-weight note.",
    style: "Syne on a diagonal rose-950 to orange-950 oklab gradient with orange-50 text and 16px radius. Fabric tiles have 12px radii, 1px orange-200 borders at 40%, 12px vertical padding; selected tile has opaque border and white 10% fill. SVG kites use yellow-200, orange-400 and sky-100 with dark seam lines. Native select is 112x36px, rose-950, orange-200 bordered and 6px radius. Body labels 12px, swatch labels and note 10px; dark colour scheme.",
    states: "Citron starts checked. Native radio changes tile highlight, retaining checked marks and explicit colour names. The labelled native span select starts at 1.2 metres and also offers 1.6 metres. No hover changes. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.",
    responsive: "Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
