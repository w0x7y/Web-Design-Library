import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-scrap-weighbridge',
  name: 'Buttons — Weighbridge ticket',
  category: 'buttons',
  tags: ['brutalist', 'light'],
  description:
    'A square transaction ticket with paired weight and tare controls for Ferric Yard metal recycling. Includes separate receipt and metal-rate actions.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Mono:wght@400;500;600;700'],
  brief: {
    layout:
      '288px-wide ticket with a 2px perimeter. Masthead has 16px padding and a 2px bottom rule. Body has 16px padding, a 24px title and 12px load hint. After 20px a 56px row pairs a flexible weight button with an intrinsic-width tare button. Footer has a 2px top rule and two equal 40px actions separated by a 2px vertical rule.',
    style:
      'IBM Plex Mono; orange-100 paper, neutral-950 text and rules, square corners with no shadows. Primary button is neutral-950 with orange-100 14px semibold text and a 16px arrow. Tare has a 2px neutral-950 border and 12px semibold text. Masthead is 12px uppercase; title is semibold with 1.25 leading and -0.025em tracking.',
    states:
      'Weight action lightens to neutral-700 on hover; other buttons fill orange-200. All controls show 2px neutral-950 keyboard outlines offset 2px. No animation.',
    responsive:
      '288px below 640px; 416px from 640px. Weight action expands while tare keeps intrinsic width; footer halves remain equal. All sizes and spacing otherwise stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
