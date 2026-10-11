import type { ComponentMeta } from '../../types'

export default {
  slug: "features-media-list",
  name: "Features — List beside media",
  category: "features",
  tags: ["split", "media", "icons"],
  description: "An icon-led feature list and introduction sit beside one large image. Use it when one screenshot supports several related capabilities.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Eyebrow                    ┌─────────────────────────┐     │
│ Heading for capabilities   │                         │     │
│ Short introduction         │                         │     │
│                            │                         │     │
│ Icon   Benefit / Body      │          Image          │     │
│ Icon   Workflow / Body     │                         │     │
│ Icon   Detail / Body       │                         │     │
│                            │                         │     │
│ [Explore capabilities]     └─────────────────────────┘     │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. At 1024px the container is an equal two-column grid with 64px gap-16 and centred alignment. A max-w-lg 512px text column holds the intro, a three-item ul 32px below, and a link 32px later. List rows have 24px gap-6; each is a 40px icon tile beside a text block with a 16px gap and 4px title-to-body space. Media is 4:3 and rounded-lg.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the eyebrow, heading and 18px lede, then three 16px semibold feature titles and 16px neutral-600 bodies. The image is supporting context. Slots: eyebrow 4 words, heading 8, lede 24, title 6, body 20, link 3.",
    states: "Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. The list, icons and media are static. No selected, disabled or loading states.",
    responsive: "Below 1024px the text precedes the image with a 48px gap. From 1024px two equal columns align vertically with a 64px gap. The list keeps icon/text rows at every width; type and padding step at 640px.",
    usage: "Use when a single image can explain several related features. Choose features-accordion-media for longer expandable descriptions or features-alternating-rows for separate visuals. Variations: put media on the left, add a fourth list item, or use a secondary action below the list.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
