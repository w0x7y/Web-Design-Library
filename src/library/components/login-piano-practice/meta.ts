import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-piano-practice',
  name: 'Piano student practice portal',
  category: 'login',
  tags: ['minimal', 'dark'],
  description:
    'A restrained Cadenza House student login with a monochrome keyboard illustration, lesson context and native device remembrance. Use it for piano teachers and lesson portals.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1152px page with 48px vertical/24px side padding. A 40px-gap grid holds brand, practice headline, introduction and a ruled keyboard figure before the student form. Form has 28px top margin, 20px gaps, 8px label gaps and 48px controls. A native 16px checkbox and its label sit before submit; device-safety hint is below the form.',
    style:
      'Default sans, zinc-950 page/fields, zinc-100 text/button and zinc-300 copy. Headline is 44px regular with 1.1 leading and -0.025em tracking. Brand is 12px with 0.2em tracking. Inputs are square with 1px zinc-400 borders; submit is square with zinc-950 text. Keyboard SVG is 96px tall with zinc-100 white keys and zinc-950 black keys. Supporting rules are zinc-600. No shadows.',
    states:
      'Submit becomes white on hover and has a 2px zinc-400 focus outline offset 4px. Inputs, native checkbox and recovery link have 2px current-color keyboard outlines offset 4px, including forced colors. Checkbox uses zinc-100 accent color and is described by the shared-device hint. Required email/password use native autocomplete, with email linked to lesson context. No animation.',
    responsive:
      'From 640px padding becomes 64px vertical/40px horizontal and headline becomes 60px. From 1024px practice/form become 1.4:1 columns with 96px gap; form’s mobile top rule/padding disappear. At 320px context precedes credentials, keyboard scales to its container and the checkbox label wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
