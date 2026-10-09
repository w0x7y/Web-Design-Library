import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-playful',
  name: 'Playful testimonial card',
  category: 'testimonial-card',
  tags: ['playful', 'has-image'],
  description:
    'A playful customer quote for a plant-watering app. A lime speech bubble, tilted 2 degrees, holds five pink stars and a DynaPuff quote whose punchline has a wavy pink underline. The bubble\'s tail points at a round avatar with a pink ring. On hover the bubble levels out. Use it for social proof on a consumer app or a friendly brand page.',
  preview: { kind: 'element' },
  fonts: ['DynaPuff:wght@400..700'],
  brief: {
    layout:
      'A <figure> 288px wide (384px from 640px). The speech bubble comes first. It is a relatively positioned block with a 28px radius, rotated −2deg, with 20px top, 24px side and 24px bottom padding (24px top, 28px sides and 28px bottom from 640px). It holds a row of five 20px stars 2px apart (role="img", aria-label "Rated 5 out of 5"), then a <blockquote> 12px below. A 32 × 20px SVG tail hangs from the bubble\'s bottom edge, 36px from its left (top: 100%, overlapping by 1px). The <figcaption> sits 28px below the bubble with 16px left padding: a 56px round avatar and, 14px to its right, the name above a one-line caption, centred vertically.',
    style:
      'DynaPuff throughout, green-950 text. Bubble and tail: lime-200. Stars: pink-600. Quote: 18px with a 1.45 line height (20px from 640px), text-wrap pretty and curly quotation marks. The phrase "third dramatic collapse" has a 2px wavy pink-600 underline offset 5px. Avatar: object-fit cover, aligned to the top, with a 4px pink-200 ring. Name: 16px semibold. Caption: 14px green-800. The avatar has empty alt text because the name is printed beside it.',
    states:
      'There are no controls. On hover (devices with hover only), the bubble rotates from −2deg to 0 over 300ms with an ease-out curve. The transition applies only when the user has not asked for reduced motion; otherwise the change is instant.',
    responsive:
      'Below 640px: 288px wide, an 18px quote and 20px top, 24px side and 24px bottom bubble padding. From 640px: 384px wide, a 20px quote and 24px top, 28px side and 28px bottom bubble padding. The tilt, tail and caption stay the same.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
