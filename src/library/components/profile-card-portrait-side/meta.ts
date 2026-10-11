import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-portrait-side',
  name: 'Profile cards — Portrait column beside text',
  category: 'profile-card',
  tags: ['asymmetric','media'],
  description: "A persistent portrait column beside a short identity, followed by a full-width current-focus strip. Use it when a person and one current project deserve equal attention.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│┌──────────────┐   Eyebrow                                │
││              │   Taylor Brooks                          │
││    Image     │   Role or specialty                      │
││              │   Short biography                        │
│└──────────────┘                                          │
│──────────────────────────────────────────────────────────│
│Current focus                                             │
│Short project summary                                     │
│[View work ->]                                            │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered card (w-72), 400px from 640px (sm:w-[25rem]), with 8px rounded-lg corners. The upper h-56 224px grid has a 112px portrait column and a minmax(0,1fr) text column with p-4 16px padding; the portrait column becomes 144px at 640px. The portrait fills its column edge to edge with a rounded top-left corner. A p-4 footer follows under a 1px hairline, containing a 12px label, a 14px focus sentence and a 14px text link.",
    hierarchy: "Read the 14px eyebrow, 18px semibold name, 14px role and 14px short biography alongside the portrait. The footer adds the current focus before View work. Slots: eyebrow up to 2 words, name up to 18 characters, role up to 16, biography up to 9 words and current focus up to 5 words.",
    states: "View work changes from neutral-900 to neutral-600 on hover and shows a 2px neutral-900 focus-visible outline offset 2px. Its arrow is decorative. Portrait and text are static; no open, selected or disabled states.",
    responsive: "The two columns persist at all widths. At 640px the root grows from 288px to 400px and the portrait from 112px to 144px. Upper-region height stays 224px; the current-focus strip stays full width. The biography wraps more tightly on mobile.",
    usage: "Use for a person with a recognisable portrait and one current work item. Pick profile-card-cover-avatar for a broad contextual cover. Variations: replace current focus with a short availability note, link to a publication, or put the portrait on the right.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

