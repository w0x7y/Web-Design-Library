import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-weekend-digest',
  name: 'Weekend digest subscription',
  category: 'signup',
  tags: ['editorial', 'light'],
  description:
    'An editorial email subscription with a sample issue. Use it for a publication or a thoughtful weekly digest.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 896px grid with 40px gaps in a section with 48px vertical padding. Subscription identity, heading, description, email form and opt-out hint occupy the left column with 20px gaps. Form has 16px gaps and 8px label gaps. Right is a sample issue with issue number, title 32px below, excerpt 20px below and ruled reading-time footer 32px below.',
    style:
      'Cream #faf5ea section, #30281f ink and #6f6251 supporting text. System serif 48px heading at 1.25 line height and 30px/36px sample title; default sans 16px description and 14px field label. White sample sheet rotates 1 degree with a 1px ink border at 20%. Square input has a 1px current-color border at 60%, 12px horizontal and 10px vertical padding. Placeholder ink is 70% for readable contrast on cream. Square ink submit has cream 14px text. No shadows.',
    states:
      'Required email uses native validation, POST submission and an associated unsubscribe hint. Input has a 2px current-color focus outline offset 2px; submit uses stone-950. Rotation is static; no authored hover states, transitions or automatic motion.',
    responsive:
      'Below 768px subscription and sample issue stack; from 768px they form equal columns. Section horizontal padding is 24px below 640px and 48px above. Sample sheet padding changes from 24px to 32px at 640px. Rotated sheet remains within the section at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
