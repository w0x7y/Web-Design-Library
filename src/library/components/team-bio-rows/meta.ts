import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-bio-rows',
  name: 'Team — Portrait and biography rows',
  category: 'team',
  tags: ['asymmetric','list','media','spacious'],
  description: "Two spacious biography rows with a portrait column and two paragraphs of text. Use it for people whose experience and working approach need a fuller introduction.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Heading about the people                                  │
│Short introduction                                        │
│──────────────────────────────────────────────────────────│
│┌──────────────┐   Name / Role                            │
││              │   Biography paragraph                    │
││    Image     │   Further background paragraph           │
│└──────────────┘   [Profile] [Email]                      │
│──────────────────────────────────────────────────────────│
│┌──────────────┐   Name / Role                            │
││              │   Biography paragraph                    │
││    Image     │   Further background paragraph           │
│└──────────────┘   [Profile] [Email]                      │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 1152px max-w-6xl container, 24px side padding and 64px vertical padding, 96px from 640px. The left-aligned headline and 672px max-w-2xl lede precede a list by 48px. Two biography rows have 48px vertical padding between hairlines and a 32px gap. Below 640px each 4:5 portrait is 160px wide (w-40) above the text. From 640px rows use a 192px portrait column beside a flexible text column; from 1024px the portrait becomes 288px and the gap 48px. Text is capped at 576px (max-w-xl). Role follows name by 4px, first biography by 20px, second by 16px, and links by 20px with 16px gaps.",
    hierarchy: "Read the 30px heading (36px from 640px) and 18px lede, then each portrait and 18px semibold name, 14px role and two 16px biography paragraphs. The opening paragraph introduces background; the supporting paragraph adds working approach. Slots: heading up to 8 words, lede up to 22, name up to 22 characters, role up to 24, each biography paragraph up to 30 words and link labels up to 3 words.",
    states: "Profile and email links change from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. Portraits and biography text are static. No open, selected or disabled state.",
    responsive: "Below 640px each 160px-wide portrait stacks above text with a 32px gap. At 640px the image and text sit side by side with a 192px portrait, the headline becomes 36px and section padding becomes 96px. At 1024px portrait width becomes 288px and row gap 48px. Text remains capped at 576px and links wrap when needed.",
    usage: "Use for leadership, founders or speakers with substantial biographies. Pick team-expandable-bios when space is scarce or team-portrait-grid for short roles. Variations: add a third biography row, shorten to one paragraph per person, or replace the email link with a publication link.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

