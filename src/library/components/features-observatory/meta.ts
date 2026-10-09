import type { ComponentMeta } from '../../types'

export default {
  slug: "features-observatory",
  name: "Observatory night visits",
  category: "features",
  tags: [
    "glass",
    "dark",
    "has-image"
  ],
  description: "A mountain observatory section with a frosted feature window over a muted landscape photo. Use it for science venues and small guided outdoor experiences.",
  preview: {
    kind: "section"
  },
  fonts: [],
  brief: {
    layout: "A full-width relative section with an absolute full-cover mountain photo at 30% opacity. A 1280px container holds a 40px headline and a frosted window with a session header and two observation benefits. Window padding is 24px, with a 32px gap between notes.",
    style: "Default sans, stone-950 background, stone-50 headings, stone-200 body and amber-200 accents. Mountain image is darkened by 30% opacity over the dark base, keeping text readable. Window uses white at 10%, a 1px white border at 30%, 16px corners and 24px backdrop blur. Feature titles are 24px medium.",
    states: "Session link underlines on hover and has a 2px stone-50 keyboard focus outline offset 4px. Landscape is decorative with empty alt and aria-hidden. Information is visible without relying on blur or image detail. No animation.",
    responsive: "Feature notes stack below 768px and become two columns above. Title grows from 40px to 56px and window padding from 24px to 32px at 640px. Benefit gap becomes 64px at 1024px, along with 96px vertical and 32px horizontal outer padding. Session header and footer wrap."
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
