import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-audio-note',
  name: 'Customer voice note quote',
  category: 'testimonial-card',
  tags: ['playful', 'light'],
  description:
    'A warm voice-note styled testimonial with a decorative waveform and transcript quote. Use it in coaching, creator tools and personal service pages.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px figure, 320px from 640px, with 20px padding. A space-between header with a 12px gap pairs a voice-note pill with an 18-second duration. A full-width 32px waveform starts 16px below it, followed after 16px by the transcript. The author row starts 20px below the quote, with a 40px monogram and 12px gap before the name and role; the role has a 4px top margin.',
    style:
      'Orange-100 surface with 24px corners and orange-950 text. Default sans: 18px quote with 28px line height, 12px semibold name with 16px line height, and 11px orange-800 role. The pill has a 1px orange-950 border at 30% opacity, fully rounded corners, 10px horizontal and 4px vertical padding, and 10px semibold text. Duration is 10px orange-800 monospace. The orange-700 waveform has rounded 3px strokes; the orange-300 initials circle uses 14px bold type with 20px line height.',
    states:
      'The waveform is decorative and the complete quote is readable text. There is no play button, media behavior, hover effect or animation.',
    responsive:
      'Width changes from 288px to 320px at 640px. The waveform fills the padded width and quote and author-role text wrap naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
