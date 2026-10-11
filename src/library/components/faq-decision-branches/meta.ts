import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-decision-branches",
  name: "FAQ — Decision branches",
  category: "faq",
  tags: [
    "split",
    "list"
  ],
  description: "Two question panels each expose yes and no answer branches. Use it when the answer depends on the reader situation.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                   Heading for the right answer               │
│ ┌─────────────────────────┐  ┌─────────────────────────┐     │
│ │ Starting the first time?│  │ Need to change access?  │     │
│ │ Choose a branch         │  │ Choose a branch         │     │
│ │ [Yes, I am new v]       │  │ [Yes, change access v]  │     │
│ │ Answer when opened      │  │ Answer when opened      │     │
│ │ [No, I have access v]   │  │ [No, keep access v]     │     │
│ └─────────────────────────┘  └─────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Two md:grid-cols-2 p-6 panels begin 40px after a centered heading with 24px gap-6. Each panel has a 18px question, 14px prompt and two divided branch summaries 24px later.",
    "hierarchy": "Readers choose a question and then the appropriate yes/no branch. Keep top questions below 10 words, prompts below 12, branch labels below 5 and answers below 40.",
    "states": "Each native details branch opens independently, exposes its answer and rotates its chevron. Summaries show 2px keyboard outlines; more than one branch may remain open.",
    "responsive": "Below 768px panels stack. Branch summaries wrap while their chevrons retain a fixed 20px width.",
    "usage": "Use for situational questions with two short answers. Choose a comparison table when readers should see both alternatives at once. Variations include eligibility branches or access troubleshooting."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
