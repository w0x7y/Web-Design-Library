import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-sound-kit',
  name: 'Ambient sound library card',
  category: 'product-card',
  tags: ['dark', 'minimal'],
  description:
    'A digital sample-pack card with waveform artwork, recording specifications and a license link. Use it in audio marketplaces and digital product shops.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px card, 320px at 640px, with 16px padding. A volume label and license badge sit above a 48px full-width waveform. The 20px product heading is followed by a short description, three specification columns and a 36px full-width purchase link.',
    style:
      'Zinc-950 background, zinc-700 border and 12px corners. Violet-300 waveform and action, zinc-100 title and zinc-400 supporting text. The label uses monospace; the remaining text uses the default sans stack.',
    states:
      'The license link changes from violet-300 to violet-200 on hover and has a 2px violet-300 outline offset by 2px for keyboard focus. The waveform is decorative artwork, with no fake audio controls or animation.',
    responsive:
      'The width is 288px below 640px and 320px above. Specifications keep three compact columns, while the heading and description wrap as needed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
