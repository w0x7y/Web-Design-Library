import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-weather-radar',
  name: 'Weather radar reports',
  category: 'testimonials',
  tags: ['playful', 'dark'],
  description:
    'A radar illustration beside three customer reports for Daymark, a local weather service. Use it to show how forecasts support everyday planning.',
  preview: { kind: 'section' },
  fonts: ['Syne:wght@400..700'],
  brief: {
    layout:
      '1280px container with 64px padding vertically, 96px from 1024px. A square radar panel occupies one column beside three customer reports at 768px, with 48px gap. Panel has a 208px radar, 240px from 640px, and 24px interior padding.',
    style:
      'Fuchsia-950 ground, orange-200 radar panel, neutral-950 radar ground, fuchsia-200 secondary text. Syne 36px bold heading, 48px at 640px; 20px quote copy at 1.625 leading. The static radar SVG uses orange-200 range rings, crosshairs and rain patches at reduced opacity, plus a solid centre point. Square panel, thin fuchsia-200/30 report dividers; no shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Radar and report list stack below 768px; from 768px use 1fr / 1.3fr columns. Gutters increase from 24px to 40px and the title grows to 48px at 640px. Radar is 208px below 640px and 240px from 640px, fitting 320px viewports.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
