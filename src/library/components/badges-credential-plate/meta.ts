import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-credential-plate",
  name: "Badges — Featured credential with tags",
  category: "badges",
  tags: ["stacked", "numbers", "compact"],
  description: "A credential card pairs a grade plate with its name, issuer and verification, followed by tags and issue metadata. Use for one compact credential summary.",
  preview: { kind: 'element' },
  wireframe: `┌───────────────────────────────────────────┐
│ ┌─────────┐  Credential name              │
│ │    4    │  Issuer name                  │
│ │  Grade  │  (Check Verified)             │
│ └─────────┘                               │
│ (Skill area) (Level) (Category)           │
│ ───────────────────────────────────────── │
│ Issued Mar 14                    CR-1042  │
└───────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) card expands to 320px (sm:w-80) at 640px, with 20px (p-5) padding, a 1px neutral-200 border and 8px radius. A header row places a nonshrinking 64px square plate 16px from a flexible text column. The plate uses an 8px radius and 1px neutral-900 border, with a 24px semibold grade over a 12px Grade caption. The text column has a 16px semibold name, 14px issuer and standard check badge. Tags wrap with 6px gaps after 16px; a divided footer follows after 16px with 12px top padding.",
    hierarchy: "The grade figure and Credential name lead; Issuer name and explicit Verified wording follow. Three standard outline tags describe skill, level and category. The footer has Issued Mar 14 and a 12px mono CR-1042 identifier. Credential name up to 3 words, issuer up to 3, tags up to 2.",
    states: "Static text and glyphs, with no hover, focus, open, selected or disabled behaviour. Meaning is carried by labels and shapes as well as neutral fill.",
    responsive: "At 640px only the width grows from 288px to 320px. The 64px plate stays beside text that may wrap, while tags wrap with 6px gaps. The footer remains a two-ended row.",
    usage: "Use for a featured grade, rank or qualification with provenance. Pick badges-tag-groups for classification without a focal figure. Variations: use a rank number instead of a grade, show an expiry date, or replace one tag with a level descriptor.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
