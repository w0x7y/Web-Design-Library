import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-school-week',
  name: 'School timetable week',
  category: 'settings',
  tags: ['playful', 'light'],
  description:
    'A playful school timetable configuration for Bellpatch, with selectable teaching-day arches, period lengths and a protected lunch interval. Use it for term setup.',
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      '1280px wrapper, introductory heading and two regions after 32px. Teaching days form five equal columns with 8px gaps, 20px vertical padding and 32px top radii. Rule card has 20px padding and 20px gaps. Leave 24px between the teaching-week hint and day tiles.',
    style:
      'Bricolage Grotesque, #fff8d9 cream ground, #3b2430 ink, pale #f4b9c6 selected days and note, #b5354a action. 2px ink borders and a 5px offset hard shadow on a 16px rounded rule card.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation. Each checked teaching-day tile fills #f4b9c6; unchecked tiles use #fffdf4. The native checkbox also marks selection.',
    responsive:
      'Heading grows from 36px to 48px at 640px; side padding becomes 32px. At 1024px days and rules split into 1.2:1 columns with 48px gap. The five day tiles remain a single compact row at 320px; other regions stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
