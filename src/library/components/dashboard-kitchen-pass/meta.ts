import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-kitchen-pass',
  name: 'Restaurant kitchen pass',
  category: 'dashboard',
  tags: ['brutalist', 'dark'],
  description:
    'A restaurant kitchen display with four table tickets, elapsed times, preparation notes and native ready checkboxes. Use it for a compact dinner-service board.',
  preview: { kind: 'section' },
  fonts: ['Archivo:wght@400..900'],
  brief: {
    layout:
      '1280px inner width, 16px horizontal and 32px vertical padding. Wrapping masthead with 4px bottom rule. Four tickets in a 16px-gapped grid after 24px. Each square ticket has a 2px border, 16px-padded heading and item list, a 12px service strip and a labelled readiness checkbox. Footer has a 2px top rule and 20px top padding.',
    style:
      'Archivo with a 36px black-weight heading, 30px table numbers, 14px semibold dish names and 12px stone-700 preparation notes. Stone-950 background, stone-100 tickets and text, yellow-300 masthead rule and overdue ticket header. Square corners, no shadows. Ready tickets change their checkbox row to green-200 and retain a visible native checkmark.',
    states:
      'Each table has its own labelled native ready checkbox. Checking it changes that row to green-200 with :has(:checked), while the browser checkmark conveys readiness without color. Inputs have 2px current-color focus outlines offset 2px. Label rows gain stone-200 on hover. No JavaScript or motion.',
    responsive:
      'Tickets stack below 640px, become two equal columns at 640px and four at 1024px. At 640px outer padding grows to 32px, title to 48px and footer splits flexible text and cover count. Tickets have no fixed minimum width and reflow at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
