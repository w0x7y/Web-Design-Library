import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-verification-code',
  name: 'Inputs — Verification code',
  category: 'inputs',
  tags: ['minimal', 'light'],
  description:
    'A four-digit verification input set with separate labelled numeric fields and a recovery email field.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A fixed 288px white card with 20px padding, 1px slate-200 border and 16px radius. A 36px shield tile precedes an 18px heading after 12px and a 12px instruction after 4px. A labelled fieldset follows after 16px, with four 48px square digit fields and 12px gaps. A recovery email label follows after 20px, its 40px field after 8px, and a 10px privacy hint after 8px.',
    style:
      'Default sans and slate-900 text. The shield tile has indigo-50 fill, indigo-800 ink, 8px radius and a decorative 20px icon. The heading is 18px semibold, instructions slate-600 with 20px line-height. Digit fields have 8px radii, 24px system monospace text with normal line-height and centered alignment. Two sample digits use indigo-50 fill and indigo-500 borders; empty digits and recovery email use slate-500 borders. Email text is 14px with normal line-height and a slate-600 placeholder; the privacy hint is slate-500.',
    states:
      'Every digit and recovery email shows a 2px slate-900 keyboard-focus outline offset 2px. Each digit has a unique accessible name, numeric input mode, a one-digit pattern and a one-character limit; instructions and privacy hints are linked with aria-describedby. Digit autocomplete is off, because full-code autofill cannot populate separate one-character controls without JavaScript. Native manual editing is available; no auto-advance or submit behavior is implied.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
