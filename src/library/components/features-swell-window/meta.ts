import type { ComponentMeta } from '../../types'

export default {
  slug: "features-swell-window",
  name: "Coastal forecast window",
  category: "features",
  tags: [
    "gradient",
    "dark"
  ],
  description: "A surf forecast section with an accessible swell chart and two planning benefits. Use it for outdoor forecast tools where conditions matter more than dashboards.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Archivo:wght@400..700"
  ],
  brief: {
    layout: "1280px container, 24px horizontal and 64px vertical padding. A 36px heading sits above a forecast panel and two benefit notes. From 1024px these use a 1.4:1 split with 32px gap. The SVG swell chart is 144px tall and accompanied by visible hourly labels and a textual peak summary.",
    style: "Archivo on a diagonal oklab gradient from teal-950 through teal-900 to cyan-950. Teal-50 headings, teal-100 body and lime-300 chart line. The solid teal-950 chart panel has teal-700 borders and 16px corners. Metric is 48px semibold; benefit titles 20px.",
    states: "Forecast link underlines on hover and shows a 2px teal-50 keyboard outline offset 4px. The chart is a labelled image with a plain-text condition summary, so the visual curve is not the only way to read the forecast. No animation.",
    responsive: "Stacked below 1024px. At 640px the title grows to 48px and forecast padding from 24px to 32px. At 1024px the main layout splits and outer padding becomes 96px vertical and 32px horizontal."
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
