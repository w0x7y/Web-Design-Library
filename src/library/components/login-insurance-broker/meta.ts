import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-insurance-broker',
  name: 'Insurance broker desk',
  category: 'login',
  tags: ['corporate', 'light'],
  description:
    'A Coverbranch agency login with a service ledger, staff invitation disclosure and individual broker credentials. Use it for commercial insurance intermediary portals.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1152px container padded 40px vertically/24px horizontally. Wrapping company header sits above a white bordered card with 32px top margin. Card title region has 24px padding and a bottom rule; below it an agency ledger and sign-in region stack. Agency block has 24px gaps, form has 20px gaps and 48px controls. A native invitation details disclosure sits below the ledger.',
    style:
      'Default sans, blue-50 page/agency block, white card/fields and slate-950 text. Supporting copy is slate-600; 12px section label is blue-800. Card uses blue-200 borders and 12px radius. Heading is 30px semibold with 36px leading and -0.025em tracking; form title 20px semibold. Inputs have 1px blue-700 boundaries and 8px radii, submit is blue-800/white. No shadows.',
    states:
      'Submit becomes blue-700 on hover. Inputs, submit, recovery link and native disclosure have 2px focus outlines offset 4px; submit outline is explicitly blue-700 so it contrasts against the white card. Disclosure opens agency invitation instructions without JavaScript. Required fields retain autocomplete, and email references the individual-account hint. Forced-color outlines remain visible.',
    responsive:
      'At 640px section padding becomes 56px vertical/40px horizontal, card title/agency/access padding becomes 32px. At 1024px agency and form use 1:1.3 columns and form padding becomes 40px. Masthead and ledger text wrap, with no horizontal scrolling at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
