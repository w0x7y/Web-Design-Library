import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-ice-cream-cart',
  name: 'Toggles — Ice cream cart',
  category: 'toggles',
  tags: ['playful', 'light'],
  description:
    'An ice cream cart menu control with numbered flavor wells, stock hints and independent availability switches.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400;500;600;700'],
  brief: {
    layout:
      '288px card, 384px from 640px, with 20px padding. A 24px title and introduction precede two equal flavor wells separated by 12px. Each contains a 28px batch number, 14px label, 12px stock hint and a switch separated by 16px. An 11px footnote follows.',
    style:
      'Bricolage Grotesque, rose-50 card with 28px corners and 2px rose-950 border. Flavor wells have 16px corners, 12px padding and 1px rose-950 borders; cocoa uses orange-200, pistachio lime-100. Rose-950 headings and rose-800 supporting copy. Rose-950 checked tracks, rose-800 off borders and thumbs. No shadow.',
    states:
      'Dark cocoa starts on; Pistachio off. Switches are 44×24px, with 16px thumbs traveling 20px. Hover lowers opacity to 80%; a 2px rose-950 outline offset 2px marks focus. Forced colors preserve borders and CanvasText thumbs. No animation.',
    responsive:
      'Fixed 288px width below 640px; 384px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
