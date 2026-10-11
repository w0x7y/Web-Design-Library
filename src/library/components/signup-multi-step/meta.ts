import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-multi-step',
  name: 'Sign-up — Multi-step with progress',
  category: 'signup',
  tags: ['stacked', 'row', 'form'],
  description: 'A static second-step registration form beneath a three-step progress indicator. Use to collect workspace details while showing completed and upcoming steps.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│         (Check) Account ── (2) Workspace ── (3) Finish   │
│         ┌────────────────────────────────────────┐       │
│         │ Current-step legend / Lede             │       │
│         │ Company name                           │       │
│         │ Team size [Select v]                   │       │
│         │ Role [Select v]                        │       │
│         ├────────────────────────────────────────┤       │
│         │ [Back]                      [Continue] │       │
│         └────────────────────────────────────────┘       │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section has a max-w-3xl 768px shell with 24px gutters and 64px vertical padding, 96px from 640px. A centred max-w-2xl 672px column holds three ordered steps in a horizontal row with 32px circles, 8px gaps and flexible hairline connectors. A white bordered card sits 32px below, with an 8px radius and 24px padding, 32px from 640px. Its fieldset has 20px field gaps; the action footer is separated by a top hairline and 24px padding.',
    hierarchy: 'The progress indicator shows Account completed, Workspace current and Finish upcoming; Workspace has aria-current=step. The fieldset legend is 24px semibold, followed by a 14px explanation and labelled Company name, Team size and Role fields. Back is secondary and Continue primary. Slots: legend up to 4 words, explanation up to 20, each field hint up to 12.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. Back fills neutral-50 on hover. Team size and Role are native required selects with disabled empty placeholders and linked hints. Company name uses organization autocomplete. In forced colours the current circle uses a Canvas fill, CanvasText numeral and Highlight border so the numeral stays readable and the current step remains distinct. Progress and navigation are static; no JavaScript advances the steps.',
    responsive: 'Below 640px all step labels are visually hidden in the row and a visible caption beneath it reads Step 2 of 3: Workspace. The footer stacks with Continue first at full width. From 640px labels sit beside the circles, the caption hides, card padding is 32px and the footer puts Back left and Continue right. The column remains at most 672px wide.',
    usage: 'Use as the workspace-details step of a longer account flow. Pick signup-form-aside when all details should remain on one page. Variations: change the current step, add a workspace URL field, or replace Role with intended use.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
