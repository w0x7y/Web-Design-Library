import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-parking-permits",
  name: "Parking permit registry",
  category: "data-table",
  tags: ["brutalist", "light"],
  description: "A hard-bordered civic parking register for Baystamp with a zone plate, vehicle registration tiles and explicit permit expiry labels. Use it for resident-permit administration.",
  preview: { kind: 'section' },
  fonts: ["Space Grotesk:wght@400;500;600;700"],
  brief: {
    layout: "1280px section with a 2px outlined masthead split into a 160px zone plate and title panel from 768px. A separate 2px outlined registry contains an uppercase toolbar, four-column permits table and a native restrictions disclosure. Vehicle numbers are white outlined plates.",
    style: "Space Grotesk, orange-50 background, red-950 ink and borders, red-900 secondary copy and orange-300 zone plate. Zone code is 60px bold; title 32px then 44px at 768px. Registration plates use 18px bold type with 0.025em tracking, 2px outlines and square edges. No shadows.",
    states: "Restrictions link and native summary have 2px currentColor focus-visible outlines offset 2px, plus underline changes on hover. Native disclosure opens zone restrictions. Expiries are written as dates and words; no state relies on color.",
    responsive: "Zone plate stacks above masthead copy below 768px. Permit rows become two-column records with registration spanning both columns and visible labels. Registry padding is 12px on phones and 20px from 768px; section horizontal padding is 20px then 40px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
