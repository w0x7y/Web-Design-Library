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
      'A 672px preference form with heading, native radio theme choices, compact-spacing checkbox and save footer. Swatches are 64px tall, with 12px card padding and gaps. The 24px semibold heading has tight tracking, then 14px supporting copy 8px below. Theme choices follow after 28px; a divider precedes the compact-spacing checkbox, with a labelled 12px hint at 20px line height. The save footer wraps with 16px gaps.',
    style:
      'Stone-100 page, white 12px-radius panel, stone-200 panel borders and stone-950 text. Supporting text uses stone-600; theme cards use stone-500 borders for visible boundaries. The selected theme gets a darker border through has-checked CSS; native radio dots remain visible.',
    states:
      'Native controls retain their browser behavior. Radios and the checkbox show a 2px current-color focus outline offset by 2px. The save button has a stone-950 focus outline and a pointer cursor. There is no automatic motion.',
    responsive:
      'Theme choices stack below 640px and form three columns above it. Outer padding is 24px then 48px; panel padding is 24px then 32px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
