import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-abstract-citation",
  name: "Blog cards — Abstract and citation",
  category: "blog-card",
  tags: [
    "stacked",
    "sidebar",
    "compact"
  ],
  description: "An article title leads an indented abstract and a labelled citation block. Use it for research or analysis whose provenance should remain visible.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Research note / Oct 10                                       │
│ [Article title naming the finding]                           │
│ | Abstract                                                   │
│ | Question, approach and main result                         │
│ ──────────────────────────────────────────────────────────   │
│ Author   Alex Rivera                                         │
│ Topic    Topic label                                         │
│ Source   [Publication link]                                  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 card grows to 320px at 640px. A metadata line precedes the 18px title by 12px. The abstract starts 20px below with a left rule and 16px indentation. A citation dl follows after 20px with a top rule and 16px top padding, using a 64px label column.",
    "hierarchy": "Read title, abstract and source details. Keep title below 7 words, abstract below 16, topic below 2 and source label below 3.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "The title and abstract remain stacked. The small label/value citation grid retains its two columns on mobile.",
    "usage": "Use for source-led analysis or research summaries. Choose a cover card when imagery determines the topic. Variations include a journal label or a report version."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
