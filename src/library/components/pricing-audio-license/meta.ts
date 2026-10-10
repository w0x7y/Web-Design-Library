import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-audio-license',
  name: 'Audio library licensing',
  category: 'pricing',
  tags: ['glass', 'gradient', 'dark'],
  description:
    'Asymmetric personal and commercial audio licenses on a warm gradient with frosted panels and a rights ledger. Use it for creative asset libraries sold with permanent licenses.',
  preview: { kind: 'section' },
  fonts: ['Syne:wght@400..600'],
  brief: {
    layout:
      '1280px maximum width with 24px side and 64px vertical padding. Small eyebrow, then two regions 24px later with 32px gap. Left contains headline, intro and compact personal-license panel; right contains a commercial-license panel with a waveform, 72px price, four rights rows and CTA. Personal price is 36px. Rows wrap with 12px gaps and 16px vertical padding.',
    style:
      'Syne on an oklab diagonal gradient from stone-950 through amber-950 back to stone-950. White text, orange-100 body and orange-200 controls. Personal glass panel white at 5%, commercial at 10%, both with 30% white borders and 12px backdrop blur. Personal radius 16px, commercial 32px, padding 24px. Heading 36px semibold/1.1 with tight tracking. Commercial button orange-200/stone-950, 8px radius and 48px minimum height.',
    states:
      'Personal link becomes orange-200 on hover, commercial CTA fills orange-100. Both show 2px orange-200 keyboard-focus outline offset 4px. Decorative waveform is hidden from assistive technology; rights use dt/dd. No animation.',
    responsive:
      'At 640px padding becomes 80px, heading becomes 60px and commercial panel padding becomes 40px. At 1024px layout becomes 1fr/1.3fr columns with 64px gap, aligned at the top. Below that personal region precedes the commercial license.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
