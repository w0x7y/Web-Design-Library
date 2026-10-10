import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-workspace-switch',
  name: 'Workspace sign-in',
  category: 'login',
  tags: ['corporate', 'light'],
  description:
    'A business login paired with a workspace preview and security note. Use it for project management and team software.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1024px grid with 40px gaps, in a section padded 48px vertically. Left is a pale workspace preview with a 36px headline and three project rows in an ordered list, 12px apart. Each row has 16px padding, a 36px numbered marker and title/detail pair. Right is a vertically centered credential form with 20px row gaps and wrapping access links.',
    style:
      'White section, slate-100 preview, slate-200 1px project borders, slate-950 sans text, slate-600 description and slate-500 project details. Preview has 16px radius; rows, markers, inputs and blue-700 submit have 8px radii. Headline is 36px/40px semibold; form title 30px/36px semibold, both -0.025em tracking. Inputs have 1px current-color borders at 60%, 12px horizontal and 10px vertical padding. No shadows.',
    states:
      'Required email and current-password inputs use native validation. Inputs and links show a 2px current-color keyboard outline offset 2px; submit uses stone-950. Project list has role=list to preserve semantics. No authored hover states or motion.',
    responsive:
      'Below 768px preview and form stack; from 768px they use equal columns. Section horizontal padding is 24px below 640px and 48px above; preview padding is 24px below 640px and 32px above. Project copy and access links wrap to fit 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
