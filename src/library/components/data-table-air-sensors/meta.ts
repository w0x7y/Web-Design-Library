import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-air-sensors",
  name: "Air quality sensor readings",
  category: "data-table",
  tags: ["gradient", "glass", "dark"],
  description: "A green-gradient air-sensor table for Breathmesh with particulate readings, written signal quality and an offline row. Use it for environmental telemetry dashboards.",
  preview: { kind: 'section' },
  fonts: ["DM Mono:wght@400;500"],
  brief: {
    layout: "1280px section with heading and export link above a 24px-radius translucent telemetry panel. A network strip precedes five columns for sensor identity, PM2.5, PM10, signal and last seen. Calibration context is in a native disclosure after a rule.",
    style: "DM Mono over a 120-degree gradient from #022c22 through #134e4a to #164e63. Teal-50 text, teal-200 annotations and teal-700 rules. Glass panel is white 5% with white 25% border and 24px backdrop blur. PM2.5 readings are 30px and table text 14px. Signal bars are 4px wide at 8, 12, 16 and 20px heights.",
    states: "Export link and calibration summary show 2px currentColor keyboard outlines offset 2px and underline changes on hover. Signal bars are aria-hidden with adjacent Strong/Fair labels. Offline state is written out and values are dashes. Native details opens calibration context; no motion.",
    responsive: "Panel padding grows from 16px to 32px at 768px. Below 768px each sensor becomes a two-column labelled record with identity spanning both columns. Header and network strip wrap. Section padding is 20px below 768px and 40px above.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
