import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-offline-library',
  name: 'Offline saved library',
  category: 'empty-state',
  tags: ['dark', 'minimal'],
  description:
    'A connection empty state that points to locally saved content. Use it when a reading or media app cannot refresh its library.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px panel with 24px padding. A flex status row has a non-shrinking 48px signal icon, 12px gap and 10px monospaced label with 0.1em tracking. A 20px semibold title follows after 20px with a 28px line height. The 14px explanation has a 24px line height and 12px top margin. Stacked full-width actions have a 12px gap and 24px top margin.',
    style:
      'Default sans font on a slate-950 panel with a 12px radius. Slate-100 title, slate-400 body, cyan-300 status and focus outline. Both buttons have 8px radii and 16px horizontal padding. The primary uses cyan-200 fill, slate-950 14px semibold text and 12px vertical padding; retry uses a 1px slate-600 border, slate-200 12px medium text and 10px vertical padding.',
    states:
      'Buttons have pointer cursors. On hover-capable devices the saved-items action fills cyan-100 and retry fills slate-800. Both show a 2px cyan-300 keyboard focus outline offset by 2px. No animation.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
