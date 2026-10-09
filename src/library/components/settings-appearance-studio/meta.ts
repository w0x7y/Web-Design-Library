import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-appearance-studio',
  name: 'Appearance preferences',
  category: 'settings',
  tags: ['minimal', 'light'],
  description:
    'A theme-choice settings panel using native radios and preview swatches. Use it to illustrate appearance preferences in a creative tool.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 672px preference form with heading, native radio theme choices, compact-spacing checkbox and save footer. Swatches are 64px tall, with 12px inset labels.',
    style:
      'Stone-100 page, white 12px-radius panel, stone-200 borders and stone-950 text. The selected theme gets a darker border through has-checked CSS; native radio dots remain visible.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Theme choices stack below 640px and form three columns above it. Outer padding is 24px then 48px; panel padding is 24px then 32px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
