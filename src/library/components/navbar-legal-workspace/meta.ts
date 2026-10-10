import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-legal-workspace',
  name: 'Legal workspace navigation',
  category: 'navbar',
  tags: ['corporate', 'dark'],
  description:
    'A legal operations header with account disclosure, workspace context and active navigation tabs. Use it for document and matter-management products.',
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400;500;600;700'],
  brief: {
    layout:
      '1280px maximum container with 24px horizontal padding. A 12px breadcrumb has 16px top padding. Main wrapping toolbar has 20px vertical padding, 24px gaps, a 24px bold brand, 14px workspace label and 12px case-count badge. Native Account details opens a 192px-wide in-flow panel with 12px padding. Navigation is a wrapping row of 14px links with 24px gaps and 16px vertical padding.',
    style:
      'Manrope, slate-950 canvas, slate-100 ink and slate-700 rules. Breadcrumb and workspace use slate-300. Case count uses slate-800 fill, slate-500 border and 4px corners. Active Matters tab has cyan-200 text and a 2px cyan-200 bottom border. Account panel is slate-900, 1px slate-600 border, 8px corners.',
    states:
      'Plain links underline on hover. Tabs turn cyan-200; account summary fills slate-800. Native details opens without JavaScript; decorative plus rotates 45deg while open. Every control has a 2px currentColor focus outline offset 2px, including forced colours.',
    responsive:
      'Toolbar and tabs wrap at every width. Below 768px account spans the whole toolbar width; from 768px it is auto width and moves right using auto margin. Account panel stays in flow and expands header height.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
