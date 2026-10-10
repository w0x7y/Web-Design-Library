import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-wine-vintages",
  name: "Dropdowns — Wine vintages",
  category: "dropdowns",
  tags: ["editorial", "dark"],
  description: "A wine-cellar vintage navigation dropdown for Caskline, with oversized years, cuvée names and bottle counts.",
  preview: {"kind": "element"},
  fonts: ["Newsreader:wght@400;500;600;700"],
  brief: {
    layout: "A 288px-wide dark card with 20px padding and a 12px masthead. A ruled 26px summary opens a three-row vintage index. Each row pairs a 64px-wide 32px year column with 14px cuvée and 12px stock lines, separated by 16px. A small italic cellar note closes the panel.",
    style: "Newsreader throughout, rose-950 background, rose-50 text and rose-200 stock annotations. Minimal 2px outer radius. Summary has 1px rose-200 borders at 40% opacity; rows use a 20% border. No shadows. Years use tabular numerals and 32px line height.",
    states: "Vintage links navigate to host collection anchors and fill rose-900 on hover. A styled list retains role=list. The disclosure begins open. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.",
    responsive: "Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
