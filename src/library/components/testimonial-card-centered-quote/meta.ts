import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-centered-quote',
  name: 'Testimonial cards — Centred large quote',
  category: 'testimonial-card',
  tags: ["centered","spacious"],
  description: "A centered logo and balanced quote sit above a vertically stacked avatar, name and role. Use it for a short statement that should read as a single focal point.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│                   Logo                       │
│              Large centred quote             │
│            about the main benefit            │
│                   (AR)                       │
│               Alex Rivera                    │
│               Role, Company                  │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A centred 288px w-72 figure with 24px p-6 padding, 1px border and 8px radius. At 640px it becomes 384px sm:w-96 with 32px sm:p-8 padding. The logo row is centred with a 24px glyph and 8px gap. The quote begins 20px below; the figcaption follows after another 20px. A centred 48px size-12 avatar sits above the name by 8px and the role by a further 4px.",
    hierarchy: "The quote is the main focal point, 16px medium with balanced wrapping, increasing to 20px from 640px. A 16px semibold logo precedes it. Attribution uses a 14px semibold name and 12px neutral-500 role/company. The avatar is decorative with initials. Slots: quote at most 20 words, name up to 3, role/company up to 4, logo label up to 2.",
    states: "All regions are static. There are no controls and no hover, focus, open, selected or disabled states. The logo glyph and avatar are aria-hidden, while the visible name is connected to the blockquote through figcaption.",
    responsive: "Everything stays in a centred column at both widths. At 640px the width changes from 288px to 384px, padding from 24px to 32px, and quote size from 16px to 20px. The avatar remains 48px and the attribution retains its fixed gaps.",
    usage: "Use for a concise recommendation that can carry a centred card. Pick testimonial-card-quote-author for a longer left-aligned quote or testimonial-card-metric-lead when an outcome figure deserves the strongest emphasis. Variations: shorten the quote to two lines, omit the logo row, or use a single role line below the name.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

