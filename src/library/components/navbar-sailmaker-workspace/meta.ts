import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-sailmaker-workspace',
  name: "Sailmaker production workspace",
  category: 'navbar',
  tags: ['corporate', 'dark'],
  description: "A sailmaker workspace header for Loftline, with loft context, a sail-production count, an account disclosure and active order tabs. Use it for sail lofts managing custom builds.",
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400;500;600;700'],
  brief: {
    layout: "A 1280px maximum container with 24px side padding. A 12px loft breadcrumb has 16px top padding. The wrapping main toolbar has 20px vertical padding and 24px gaps, with a 24px bold brand, 14px loft label and a 12px production badge 12px apart. Native account details opens a 192px in-flow panel with 12px padding and 8px top margin. Navigation is a wrapping 14px row with 24px horizontal gaps and 16px vertical link padding.",
    style: "Manrope on slate-950 with slate-100 text, slate-300 context and slate-700 rules. Brand has -0.025em tracking. Production badge has slate-800 fill, a slate-500 1px border, 4px corners and 8px horizontal/4px vertical padding. Active Orders tab has cyan-200 text and a 2px cyan-200 bottom rule. Account summary has 4px corners, 12px side/8px vertical padding. Account panel has slate-900 fill, 1px slate-600 border and 8px corners.",
    states: "Brand and account-panel links underline on hover. Tabs turn cyan-200; account summary fills slate-800. Native details opens without JavaScript, with a decorative 16px plus rotating 45deg while open. Every control shows a 2px currentColor focus outline offset 2px, including forced colours. Orders uses aria-current=\"page\". No animated transitions.",
    responsive: "Toolbar and navigation wrap at every width, including 320px. Below 768px account details takes the full toolbar width. From 768px account has auto width and moves right with auto margin. Its panel remains in flow and expands header height.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
