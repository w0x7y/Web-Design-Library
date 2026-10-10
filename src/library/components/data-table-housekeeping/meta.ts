import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-housekeeping",
  name: "Hotel housekeeping board",
  category: "data-table",
  tags: ["minimal", "light", "has-image"],
  description: "A quiet hotel housekeeping board for Stillhaven with a property photograph, floor handover notes and room-by-room readiness. Use it for small hotel daily operations.",
  preview: { kind: 'section' },
  fonts: ["DM Sans:wght@400;500;600;700"],
  brief: {
    layout: "1280px container with headline and print-floor-sheet link. At 1024px a 256px property sidebar sits beside a white bordered room board with 32px gap. Sidebar photo is 4:3; below it are the property name, priority note and a native floor-handover disclosure. Four room records form the table.",
    style: "DM Sans on stone-50, stone-900 main text, stone-600 notes and stone-300 rules. White board with 12px radius and 12px mobile padding, 20px from 768px. Property photo has 12px corners. Room numbers are 24px, status labels are 12px in filled or outlined capsules.",
    states: "Print link and handover summary underline on hover and show 2px currentColor focus-visible outlines offset 2px. Handover opens with native details. Status always includes text. No motion.",
    responsive: "Sidebar stacks above the room board below 1024px. Table records become two-column labelled grids below 768px, with the room number spanning both columns. Section horizontal padding changes from 20px to 40px at 768px; image remains full sidebar width.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
