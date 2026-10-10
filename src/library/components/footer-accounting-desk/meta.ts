import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-accounting-desk",
  name: "Accounting firm resource-drawer footer",
  category: "footer",
  tags: ["corporate", "dark"],
  description:
    "An accounting firm footer with native resource and engagement drawers, a client contact route and a concise services statement. Use it for small-business accountancy practices.",
  preview: { kind: "section" },
  fonts: ["Manrope:wght@400..700"],
  brief: {
    layout:
      "A centred 1280px container with 48px vertical and 24px side padding. Brand, accounting-services statement and two service labels sit beside two native details drawers, the client-resource drawer open by default. Drawer summaries have 20px vertical padding; contents use a two-column 16px-gap link grid. A 12px accountant-hours note and wrapping copyright row complete the footer.",
    style:
      "Manrope, slate-100 on slate-950 with slate-300 supporting copy. Cyan-200 service labels and disclosure arrows, slate-600 drawer borders and slate-700 bottom rule. Brand is 22px bold, heading 32px medium with 1.2 line height and -0.03em tracking, summaries 18px semibold. Body 15px with 1.6 line height; drawer links 14px. No shadows or radii.",
    states:
      "Native summary controls toggle each drawer with pointer, Enter or Space. Summary text changes to cyan-200 on hover. Links underline on hover. Every summary and link has a 2px currentColor focus outline offset 4px, including forced-colors mode. No animation.",
    responsive:
      "Below 1024px brand and drawers stack with 40px gaps. From 1024px equal columns use an 80px gap and outer horizontal padding becomes 32px. Drawer links stay in two columns; bottom policies wrap at every width.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
