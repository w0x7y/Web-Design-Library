import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-saved-routes',
  name: 'A saved-route collection ready for a detour',
  category: 'empty-state',
  tags: ['glass', 'gradient', 'dark', 'has-image'],
  description:
    'Waystash saved-map-route empty state places a frosted route note over a desert-road photograph. Use it before a driver saves a scenic route for another day.',
  preview: { kind: 'element' },
  fonts: ['Archivo'],
  brief: {
    layout:
      'A 128px-high road photo with brand and count labels overlays the top of a rounded panel. A frosted inset pane overlaps it by 24px with 16px side margins and padding, followed by a 24px two-line heading, 12px copy and 40px outlined action.',
    style:
      'Archivo. Vertical oklab emerald-900 to emerald-950 gradient. Emerald-50 text, emerald-100 copy and action, emerald-200 eyebrow and action border. 20px outer radius, 12px pane radius, 6px action radius. Pane and image labels use emerald-950 at 90%; pane has an emerald-200 border at 30% and 12px backdrop blur. Photo crop is centered horizontally and 65% vertically.',
    states:
      'The primary action underlines on hover-capable devices. Every action has a 2px current-color outline offset 4px on keyboard focus, including forced-colors mode. Illustrations are decorative and hidden from assistive technology. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
