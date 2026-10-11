import type { ComponentMeta } from '../../types'

export default {
  slug: "settings-keyboard-shortcuts",
  name: "Settings — Grouped keyboard shortcuts",
  category: "settings",
  tags: [
    "grid",
    "list",
    "compact"
  ],
  description: "Two command groups sit below a shortcut preference and above a reset link. Use for a readable overview of keyboard navigation and editing commands.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Keyboard shortcuts                                            │
│[x] Enable shortcuts  Preference hint                         │
│Navigation                       Editing                      │
│Open search              /       Save changes     Ctrl S      │
│Go to overview         G O       Undo change      Ctrl Z      │
│Go to settings         G S       Add item              N      │
│[Restore default shortcuts]                                   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A p-6 preference band starts 32px below the heading. Two bordered command cards follow after 24px in equal md columns with 24px gaps. Definition rows use 12px vertical padding and compact bordered kbd tokens.",
    hierarchy: "The h1 precedes the enable preference, then group titles and command/key pairs. Command labels allow 4 words and key tokens 8 characters. Heading up to 5 words, lede 16 and preference hint 12.",
    states: "The native enable checkbox toggles with Space and shows a 2px keyboard-focus outline. Key tokens are static text. Restore defaults is a navigation placeholder; actual shortcut handling and persistence belong to the host application.",
    responsive: "Command groups stack below 768px. Each row keeps its key token adjacent to its label with a wrapping label if needed. The h1 increases at sm.",
    usage: "Use to document supported keyboard commands and their preference. Choose a searchable command menu for executing commands. Variations: group by workspace role, show platform-specific modifiers, or add a download link."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
