import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-glass',
  name: 'Inputs — Glass',
  category: 'inputs',
  tags: ['glass', 'dark'],
  description:
    'Smoked-glass form fields for a sauna booking page: a name field, an email field in its error state, a session select and a notes textarea, on a near-black panel warmed by a red glow and an ember disc that shows through the blurred fields. Use it for dark booking, sign-up or contact forms.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      'A <div> grid, 288px wide with 16px padding and 12px gaps; from 640px it is 544px wide with 28px padding and two columns 20px apart with 16px between rows. Four fields, each a visible <label> above its control with 6px between them: Name (type="text", autocomplete="name"), Email (type="email", autocomplete="email") with an error line 6px below it, Session (a native <select> with a chevron drawn over its right end, 14px in) and Notes for the host (a <textarea>) whose label row also holds an "Optional" hint on the right. Below 640px the fields stack in that order. From 640px Name, Email and Session stack in the left column and Notes spans all three rows of the right column, its textarea stretching to the bottom. Two aria-hidden shapes sit behind the fields (z-index −10 inside an isolated, overflow-hidden root): a 256px red glow off the top-left corner, and an ember disc 160px wide (240px from 640px) hanging off the bottom-right corner, 48px past the right edge and 80px below the bottom.',
    style:
      'Familjen Grotesk throughout, antialiased, color-scheme dark, an amber-300 caret and amber-300 at 30% for selected text. Panel: stone-950 with a 24px radius. Glow: red-600 at 20% blurred 64px. Ember: a radial gradient in oklab from orange-200 through orange-500 to rose-600. Labels 14px medium stone-300; hint 12px stone-400. The controls are smoked glass: 40px tall, 12px radius, a 1px white border at 35% (3.1:1 against the panel), stone-950 at 50% fill with a 24px backdrop blur, 15px white text, 14px side padding and stone-400 placeholders. The select has appearance none, 40px right padding and stone-900 options; its chevron is a 16px stone-400 stroke icon. The textarea is 64px tall with 8px vertical padding and no resize handle; it holds a sample note, and its placeholder ("Towel hire, first visit…") shows once it is empty. Error: the email input has aria-invalid="true" and aria-describedby pointing at the message, and the attribute turns its border rose-300. The message is 13px rose-200 after a 16px filled alert icon: "Add the domain after the @." The textarea is described by the "Optional" hint.',
    states:
      'Hover (devices with hover only): the border brightens to white at 55%. Focus (:focus-visible, which text fields match on click too): the border turns amber-200 and a 3px amber-200 outline at 40% hugs the field; on the invalid email the border stays rose-300 and the outline is rose-300 at 40%. Colours change over 150ms. The error is static markup: set aria-invalid and the message from your validation code, and the styles follow the attribute.',
    responsive:
      'Below 640px: one column, 288px wide, 16px padding, a 64px textarea and a 160px ember. From 640px: 544px wide, 28px padding, two columns, Notes filling the right column with its textarea as tall as the three fields beside it, and a 240px ember.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
