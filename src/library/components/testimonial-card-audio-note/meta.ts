import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-audio-note',
  name: 'Customer voice note quote',
  category: 'testimonial-card',
  tags: ['playful', 'light'],
  description:
    'A warm voice-note styled testimonial with a decorative waveform and transcript quote. Use it in coaching, creator tools and personal service pages.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px testimonial, 320px from 640px, with 20px padding and 24px corners. A voice-note label and 18-second duration sit above a 32px waveform. The 18px transcript quote is followed by a 40px monogram and two-line author credit.',
    style:
      'Orange-100 surface, orange-950 quote and orange-800 metadata. Orange-700 waveform and orange-300 initials badge. Default sans uses a relaxed 28px quote line height and compact 11–12px attribution.',
    states:
      'The waveform is decorative and the complete quote is readable text. There is no play button, media behavior, hover effect or animation.',
    responsive:
      'Width changes from 288px to 320px at 640px. The waveform fills the padded width and quote and author-role text wrap naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
