import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-studio-rental',
  name: 'Toggles — Recording-studio rental',
  category: 'toggles',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'A Takehouse studio-rental panel with a recording-room photograph, hourly rate and engineer and microphone-package switches. Use it beside a session booking.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400;500;600;700'],
  brief: {
    layout:
      'A 288px panel with 16px padding. A 10px eyebrow precedes a two-column summary 16px later: a 64×80px recording-studio photograph, then a 20px room title, 14px duration and rate, and 12px session reference. Columns have a 16px gap. Two switch rows sit below a rule with 16px top padding and 16px spacing, followed by an 11px session-time note.',
    style:
      'IBM Plex Sans on white with stone-900 text and stone-600 hints. A 1px stone-300 border, 12px outer radius and 8px photo radius, no shadow. Title is 20px medium at 24px leading; labels are 14px semibold at 20px leading, hints 12px at 16px leading. Rate and checked tracks use emerald-800. Unchecked tracks are white with stone-500 borders and thumbs; checked thumbs are white.',
    states:
      'Recording engineer starts on; Microphone locker starts off. Each native checkbox has role=switch and references its hint. Switches are 44×24px with 2px borders and 16px thumbs moving 20px when checked. Hover opacity is 80%; focus-visible draws a 2px emerald-800 outline offset 2px. Forced colours keep ButtonText borders and CanvasText thumbs. No animation.',
    responsive:
      'Root width is 288px below 640px and 320px at 640px and above. Photograph, switch dimensions, content order, padding and typography stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
