import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-kite-workshop',
  name: 'Buttons — Kite workshop',
  category: 'buttons',
  tags: ['playful', 'light'],
  description:
    'A curved kite-building button with staggered template and colour tools for Updraft Works, a handmade kite workshop.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 20px padding. Header puts a 12px maker name and 30px heading beside a 48px by 80px decorative kite SVG. A full-width 56px build button follows after 20px. Two intrinsic-width 40px pills share a tool row after 12px with 8px gap; the colour pill is offset down 8px. A 12px note follows after 16px.',
    style:
      'Bricolage Grotesque; sky-100 panel, rose-900 text and a yellow-200 primary. Panel corners are 32px except the bottom-right at 8px. Primary has alternating 32px/8px corners, 2px rose-900 border and 16px bold text. Template pill is white; colour pill has a 2px rose-900 outline. Heading is bold with line-height 1 and -0.025em tracking. No shadows.',
    states:
      'Hover makes build yellow-100, template sky-50 and colours white. Each button shows a 2px rose-900 keyboard outline offset 2px. The kite drawing is decorative. No animation.',
    responsive:
      '288px below 640px; 352px from 640px. Only width changes; tool pills remain intrinsic width with their deliberate 8px vertical stagger.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
