import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-accordion',
  name: 'FAQ — Accordion',
  category: 'faq',
  tags: ['centered', 'list', 'spacious'],
  description: 'A centred heading and introduction above five expandable question rows. Use it to answer common questions while keeping the section easy to scan.',
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────┐
│             Heading for common questions               │
│                Short introduction                      │
│                                                        │
├────────────────────────────────────────────────────────┤
│ [Question about the main benefit]                    ∧  │
│ Explain the main benefit in two or three sentences.     │
├────────────────────────────────────────────────────────┤
│ [Question about getting started]                    ∨  │
├────────────────────────────────────────────────────────┤
│ [Question about what is included]                   ∨  │
├────────────────────────────────────────────────────────┤
│ [Question about changing a choice]                  ∨  │
├────────────────────────────────────────────────────────┤
│ [Question about finding more help]                  ∨  │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'One section with a centred 768px (max-w-3xl) container, 24px side padding and 64px vertical padding, increasing to 96px at 640px. A centred heading and introduction precede five full-width details rows by 48px. Each row has 20px vertical summary padding, a 20px chevron and a 1px neutral-200 divider. Answers have 20px bottom padding.',
    hierarchy: 'Read the 30px semibold heading, 18px introduction, then the five 16px semibold questions. The first answer is visible at entry; the others reveal 16px neutral-600 supporting text. Slots: heading up to 8 words, introduction up to 20, questions up to 10, answers up to 45.',
    states: 'Native details and summary controls share one name, so opening a question closes the previous one. The first is open by default. The chevron rotates 180 degrees while open with a 150ms transition. Keyboard focus shows a 2px neutral-900 outline offset 2px.',
    responsive: 'The rows remain a single column at every width. At 640px vertical padding increases from 64px to 96px and the heading from 30px to 36px. Questions wrap while the chevron keeps its 20px width and 24px gap.',
    usage: 'Use for short answers to common questions with one answer visible at a time. Pick a static question list when all answers need comparing. Variations: open a different first question, group rows under topic headings, or add a help link below the list.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
