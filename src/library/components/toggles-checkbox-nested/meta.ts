import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-checkbox-nested",
  name: "Toggles — Checkbox group with nested options",
  category: "toggles",
  tags: ["stacked","form","compact"],
  description: "A checkbox fieldset reveals two indented choices while its parent is checked. Use it for independent preferences with optional detail choices and a disabled example.",
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────┐
│ Option group title                 │
│ Short selection guidance           │
│ [x] Parent option                  │
│     Description of the parent      │
│     [x] Child option               │
│     [ ] Related child option       │
│ [ ] Independent option             │
│     Description of this option     │
│ [ ] Unavailable option             │
│     Reason this option is disabled │
└────────────────────────────────────┘`,
  brief: {
  "layout": "A 288px-wide (w-72) fieldset becomes 320px (sm:w-80). A 14px semibold legend and supporting line after 4px precede three groups by 16px (mt-4); groups use gap-4. Each row has a native 16px checkbox aligned with a 2px top offset, a 12px gap, and a 14px medium label over a 14px neutral-500 description. The first group contains two child rows, indented 28px (pl-7), with an 8px top gap and space-y-2.",
  "hierarchy": "Read the option-group legend and one-line hint, then the parent and its children, an independent option, and an unavailable option. Label slots use two or three words. Descriptions use up to six words and may wrap to two lines on mobile. Unique ids connect top-level labels; each description is linked by aria-describedby.",
  "states": "Parent and first child start checked. A hidden child container becomes block through group-has-[#toggles-checkbox-nested-parent:checked]; unchecking the parent hides children from layout and tab order without clearing their saved native checked values. Native checkboxes use accent-neutral-900 and preserve system checked marks in forced-colors mode. Every input shows a 2px neutral-900 focus-visible outline offset 2px. The last option is disabled with 50% group opacity and not-allowed cursors.",
  "responsive": "Below 640px the root is 288px and longer descriptions can wrap; at 640px it widens to 320px. Indentation, checkbox sizes and group gaps remain unchanged. Closing the parent reduces the fieldset height by the child container height.",
  "usage": "Use for preferences where a parent exposes optional detail choices. Pick toggles-switch-list when each setting is independent and always visible. Variations: reveal one child instead of two, start the parent unchecked, or add per-child hints. No automatic cascading selection is added; all inputs keep their native independent values."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

