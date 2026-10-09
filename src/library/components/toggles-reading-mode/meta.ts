import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-reading-mode',
  name: 'Toggles — Reading mode',
  category: 'toggles',
  tags: ['editorial', 'light'],
  description:
    'Quiet reading preferences presented below a serif article sample, with independent switches for generous spacing and margin notes.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide cream reading card with 20px padding. Place a serif text sample above two content-height preference rows with 12px vertical padding, 12px horizontal gaps and native 36px by 20px switches. The sample sits 16px below the eyebrow; the preference group starts 20px below the sample; a 10px footer sits 8px below the group.',
    style:
      'Stone-50 background, stone-300 rules, 8px outer radius and emerald-800 checked tracks. Use stone-900 primary text and stone-600 supporting copy. The sample uses 18px system serif with 28px line height and a 2px emerald-800 left rule with 12px inset; preference labels use 12px sans and 10px hints with 2px top margins. Off tracks have a stone-200 fill and 2px stone-500 border. Thumbs are 12px stone-600 circles, 2px from the inside top/left, becoming white when checked. No shadows.',
    states:
      'Generous spacing starts on and Margin notes starts off. Native checkboxes expose switch semantics with labels and associated hints, and respond to Space and pointer input. Checked thumbs travel 16px. Each control draws a 2px slate-900 focus outline with 2px offset, and forced colors show a ButtonText border and CanvasText thumb in both checked and unchecked states. No hover states or transitions are present.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
