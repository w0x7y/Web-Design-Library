import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-workspace-access',
  name: 'Toggles — Workspace access',
  category: 'toggles',
  tags: ['brutalist', 'light'],
  description:
    'Square binary controls for a shared makerspace, organized as a compact permissions board.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white panel with 2px black border and 16px padding. A 20px black-weight title and 10px monospace bay number precede a group with a 20px top margin and a 2px black top rule. Three content-height rows have 12px vertical padding, 12px gaps and 2px black bottom rules, and pair access labels with a nonshrinking 56px by 32px native checkbox and explicit on/off text.',
    style:
      'Use the default sans stack for 12px bold uppercase labels and a system monospace stack for 10px hints, bay number, footer and state text. The footer has a 16px top margin. Use black text and rules, lime-300 checked boxes, white off states and square corners. Native checkboxes show centered monospace ON or OFF labels; forced colors preserve the ButtonText border and written state. No shadows.',
    states:
      'Guest entry and After hours start on; Tool lending starts off. Each native checkbox exposes switch semantics, has an associated label and hint, and toggles its written ON/OFF label through CSS content. The keyboard focus cue is a 2px slate-900 outline with 2px offset. Hover highlights the row in stone-100 without animation.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
